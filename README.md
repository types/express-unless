# Typed express-unless
[![Build Status](https://travis-ci.org/felixfbecker/typed-express-unless.svg?branch=master)](https://travis-ci.org/felixfbecker/typed-express-unless)

Typescript Typings for [express-unless](https://github.com/jfromaniello/express-unless).

## Installation
```sh
typings install --save express-unless
```

## Usage

With existing middlewares:

```ts

import unless = require('express-unless');
import express = require('express');

// patch unless on the middleware
const serveStatic = <unless.RestrictableRequestHandler>express.static(__dirname + '/public');
serveStatic.unless = unless;

const app = express();

app.use(serveStatic.unless({ method: 'OPTIONS' }));
```

If you are authoring a middleware you can support unless as follow:

```ts
// If you are authoring a middleware you can support unless as follow:
export function requiresAuth(options: any) {

    const myMiddleware = <unless.RestrictableRequestHandler>((req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('hi');
    });

    myMiddleware.unless = unless;

    return myMiddleware;
};

app.use(requiresAuth('whatever').unless({ method: ['OPTIONS', 'HEAD'] }));
```


## Contributing
You can run them the tests with `npm run build` and `npm run test`.

--------------------------------

_Based on typings by [Wonshik Kim](https://github.com/wokim/)_
