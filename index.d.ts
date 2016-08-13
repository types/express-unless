
import express = require('express');

declare function unless(options: unless.Options): express.RequestHandler;

declare namespace unless {

    export interface Options {

        /**
         * it must be a function that accepts req and returns true / false. If the function returns true for the given
         * request, the middleware will not run.
         */
        custom?: (req: express.Request) => boolean;

        /**
         * it could be an string, a regexp or an array of any of those. It also could be an array of object which is url
         * and methods key-pairs. If the request path or path and method match, the middleware will not run. Check
         * Examples for usage.
         */
        path?: string | string[];

        /**
         * it could be an string or an array of strings. If the request path ends with one of these extensions the middleware will not run.
         */
        ext?: string | string[];

        /**
         * it could be an string or an array of strings. If the request method match the middleware will not run.
         */
        method?: string | string[];

        /**
         * it should be true or false, default is true. if false, path will match against req.url instead of
         * req.originalUrl. Please refer to Express API for the difference between req.url and req.originalUrl.
         */
        useOriginalUrl?: boolean;
    }

    /**
     * Use this interface to patch `unless` on middleware
     */
    export interface RestrictableRequestHandler extends express.RequestHandler {
        unless: typeof unless;
    }
}

export = unless;
