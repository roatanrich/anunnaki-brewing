import { RequestHandler } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    swaggerDefinition: {
        "swagger": "2.0",
        "info": {
            "description": "Annunaki Brewing API Documentation",
            "version": "1.0.0",
            "title": "API Server for Annunaki Brewing",
            "termsOfService": "http://swagger.io/terms/",
            "contact": {
                "email": "roatanrich@gmail.com"
            },
            "license": {
                "name": "Apache 2.0",
                "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
            }
        },
        "host": "localhost:3000",
        "schemes": [
            "http"
        ],
    },
    // List of files to be processes. You can also set globs './routes/*.ts'
    apis: ['./src/routes/*.ts'],
}

const specs = swaggerJsdoc(options)

export default function (app: { use: (arg0: string, arg1: RequestHandler<ParamsDictionary, unknown, unknown, ParsedQs, Record<string, unknown>>[], arg2: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>) => void }) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}