# Tacugama

React components for a seamless integration with the TimeChimp UI

[![npm version](https://badge.fury.io/js/%40timechimp%2Ftacugama.svg)](https://badge.fury.io/js/%40timechimp%2Ftacugama)
![CI](https://github.com/TimeChimp/tacugama/workflows/CI/badge.svg)

## 1. Installation

```bash
$ npm install @timechimp/tacugama
```

## 2. Getting started

### CSR (Client-side Rendering)

Wrap your app with the Tacugama `ThemeProvider`

```jsx
import { App } from './App';
import { ThemeProvider } from '@timechimp/tacugama';

ReactDOM.render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    document.getElementById('root'),
  );
```

Use Tacugama components in your app

```jsx
import { Avatar } from '@timechimp/tacugama';

export const App = () => (
    <>
        <Avatar name="John Doe" />
    </>
);
```

### SSR (Server-side Rendering) with Next.js

#### Step 1

Create a custom `_app.jsx` and wrap the `Component` with the Tacugama `ThemeProvider`

```jsx
import { ThemeProvider } from '@timechimp/tacugama';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
```

#### Step 2

Create a custom `_document.jsx` and set it up as follows:

```jsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { StyletronProvider, styletron } from '@timechimp/tacugama';


class MyDocument extends Document {
  static getInitialProps(props) {
    const page = props.renderPage((App) => (props) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ))
    const stylesheets = styletron.getStylesheets() || []
    return { ...page, stylesheets }
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
```

For all available components check out the [Tacugama Storybook](https://tacugama.netlify.app)

## Releasing

Releases are handled by the CI/CD pipeline. All you need to do is bump the version number in `package.json` and the pipeline will take care of releasing it to the NPM registry.
