
import unless = require('express-unless');
import express = require('express');

// patch unless on the middleware
const serveStatic = <unless.RestrictableRequestHandler>express.static(__dirname + '/public');
serveStatic.unless = unless;

const app = express();

app.use(serveStatic.unless({ method: 'OPTIONS' }));

// If you are authoring a middleware you can support unless as follow:
export function requiresAuth(options: any) {

    const myMiddleware = <unless.RestrictableRequestHandler>((req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('hi');
    });

    myMiddleware.unless = unless;

    return myMiddleware;
};

app.use(requiresAuth('whatever').unless({ method: ['OPTIONS', 'HEAD'] }));
