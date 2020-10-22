# Tucagama

React components for a seamless integration with the TimeChimp UI

[![npm version](https://badge.fury.io/js/%40timechimp%2Ftacugama.svg)](https://badge.fury.io/js/%40timechimp%2Ftacugama)
![CI](https://github.com/TimeChimp/tacugama/workflows/CI/badge.svg)

## 1. Installation

```bash
$ npm install @timechimp/tacugama
```

## 2. Getting started

Wrap your app with the tacugama `ThemeProvider`

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

For all available components check out the [Tacugama Storybook](https://tacugama.netlify.app)