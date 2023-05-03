/* eslint-disable no-console */
import path from 'path';
import fse from 'fs-extra';
import glob from 'fast-glob';
import process from 'node:process';
import console from 'node:console';

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');
const srcPath = path.join(packagePath, './src');

/**
 * Puts a package.json into every immediate child directory of rootDir.
 * That package.json contains information about esm for bundlers so that imports
 * like import Button from '@timechimp/tacugama/Button' are tree-shakeable.
 *
 * It also tests that an this import can be used in TypeScript by checking
 * if an index.d.ts is present at that path.
 * @param {object} param0
 * @param {string} param0.from
 * @param {string} param0.to
 */
async function createModulePackages({ from, to }) {
  const directoryPackages = glob.sync('*/index.{js,ts,tsx}', { cwd: from }).map(path.dirname);

  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJsonPath = path.join(to, 'esm/components', directoryPackage, 'package.json');
      const topLevelPathImportsAreCommonJSModules = await fse.pathExists(
        path.resolve(path.dirname(packageJsonPath), '../esm'),
      );

      const packageJson = {
        sideEffects: false,
        module: topLevelPathImportsAreCommonJSModules
          ? path.posix.join('../../esm/components', directoryPackage, 'index.js')
          : './index.js',
        // main: topLevelPathImportsAreCommonJSModules
        //   ? './index.js'
        //   : path.posix.join('../../cjs/components', directoryPackage, 'index.js'),
        types: './index.d.ts',
      };

      const [typingsEntryExist, moduleEntryExists] = await Promise.all([
        fse.pathExists(path.resolve(path.dirname(packageJsonPath), packageJson.types)),
        fse.pathExists(path.resolve(path.dirname(packageJsonPath), packageJson.module)),
        // fse.pathExists(path.resolve(path.dirname(packageJsonPath), packageJson.main)),
        fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2)),
      ]);

      const manifestErrorMessages = [];
      if (!typingsEntryExist) {
        manifestErrorMessages.push(`'types' entry '${packageJson.types}' does not exist`);
      }
      if (!moduleEntryExists) {
        manifestErrorMessages.push(`'module' entry '${packageJson.module}' does not exist`);
      }
      // if (!mainEntryExists) {
      //   manifestErrorMessages.push(`'main' entry '${packageJson.main}' does not exist`);
      // }
      if (manifestErrorMessages.length > 0) {
        // TODO: AggregateError
        throw new Error(`${packageJsonPath}:\n${manifestErrorMessages.join('\n')}`);
      }

      return packageJsonPath;
    }),
  );
}

async function typescriptCopy({ from, to }) {
  if (!(await fse.pathExists(to))) {
    console.warn(`path ${to} does not exists`);
    return [];
  }

  const files = await glob('**/*.d.ts', { cwd: from });
  const cmds = files.map((file) => fse.copy(path.resolve(from, file), path.resolve(to, file)));
  return Promise.all(cmds);
}

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8');
  const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } =
    JSON.parse(packageData);

  const newPackageData = {
    ...packageDataOther,
    private: false,
    files: ['cjs', 'esm'],
    ...(packageDataOther.main
      ? {
          main: fse.existsSync(path.resolve(buildPath, './cjs/index.js'))
            ? './cjs/index.js'
            : './index.js',
          module: fse.existsSync(path.resolve(buildPath, './esm/index.js'))
            ? './esm/index.js'
            : './index.js',
        }
      : {}),
  };

  const typeDefinitionsFilePath = path.resolve(buildPath, './cjs/index.d.ts');
  if (await fse.pathExists(typeDefinitionsFilePath)) {
    newPackageData.types = './cjs/index.d.ts';
  }

  const targetPath = path.resolve(buildPath, './package.json');

  await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function run() {
  try {
    // TypeScript
    await typescriptCopy({ from: srcPath, to: buildPath });

    await createPackageFile();

    await createModulePackages({ from: path.join(srcPath, 'components'), to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
