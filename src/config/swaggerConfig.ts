import { RequestHandler } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { version } from '../../package.json'

const url = 'http://localhost:3000';

const options: swaggerJsdoc.Options = {
  definition: {
      openapi: "3.0.0",
      servers: [{ url }],
      basePath: '/api/',
  info: {
      title: 'API Server for Anunnaki Brewing',
      version: `${version}`,
      contact: {
        email: 'roatanrich@gmail.com',
        name: 'Rich Henry'
      },
  },
  components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
  },
  security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};



const specs = swaggerJsdoc(options)

export default function (app: { use: (arg0: string, arg1: RequestHandler<ParamsDictionary, unknown, unknown, ParsedQs, Record<string, unknown>>[], arg2: RequestHandler<ParamsDictionary, unknown, unknown, ParsedQs, Record<string, unknown>>) => void }) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}