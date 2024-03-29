import { RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';

let url = `http://localhost:${process.env.PORT}`;
if (process.env.NODE_ENV === 'production') {
  url = '/';
}

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    servers: [{ url }],
    basePath: '/api/',
    info: {
      title: 'API Server for Anunnaki Brewing',
      version: `${version}`,
      contact: {
        email: 'roatanrich@gmail.com',
        name: 'Rich Henry',
      },
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          name: 'Authorization',
          type: 'http',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT',
          description:
            'After logging in to this site, you will be given a token which is then included in all api calls during a session. In the text box provided type: Bearer [paste token]',
        },
        // ApiKeyAuth: {
        //   type: 'apiKey',
        //   in: 'header',
        //   name: 'X-API-Key',
        //   description:
        //     'After registering on this site, you will be assigned an api_key',
        // },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

export default function (app: {
  use: (
    arg0: string,
    arg1: RequestHandler<
      ParamsDictionary,
      unknown,
      unknown,
      ParsedQs,
      Record<string, unknown>
    >[],
    arg2: RequestHandler<
      ParamsDictionary,
      unknown,
      unknown,
      ParsedQs,
      Record<string, unknown>
    >,
  ) => void;
}) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
