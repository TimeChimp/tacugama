import { Client, Server } from 'styletron-engine-atomic';
export { Provider as StyletronProvider } from 'styletron-react';

const getHydrateClass = () => document.getElementsByClassName('_styletron_hydrate_');

export const styletron =
  typeof window === 'undefined'
    ? new Server({
        prefix: 'tc-',
      })
    : new Client({
        prefix: 'tc-',
        hydrate: getHydrateClass() as HTMLCollectionOf<HTMLStyleElement>,
      });
