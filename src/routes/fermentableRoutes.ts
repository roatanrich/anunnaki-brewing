import express from 'express';
import fermentableData from '../../data/sample/fermentableData';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /v1/api/fermentables/:
 *   get:
 *     tags:
 *     - Fermentables
 *     summary: Get a list of all the fermentables
 *     description: It will show all fermentables added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/fermentables', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(fermentableData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/fermentables/{name}:
 *  get:
 *     tags:
 *     - Fermentables
 *     summary: Get a single fermentable by name
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the fermentable
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: 'string'
 *       404:
 *         description: Not found
 */
router.get('/v1/api/fermentables/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = fermentableData.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
