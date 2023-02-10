import express from 'express';
import hopData from '../../data/sample/hopData';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /v1/api/hops/:
 *   get:
 *     tags:
 *     - Hops
 *     summary: Get a list of all the hops
 *     description: It will show all hops added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/hops', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  res.json(hopData);
});

/**
 * @openapi
 * /v1/api/hops/{name}:
 *  get:
 *     tags:
 *     - Hops
 *     summary: Get a single hop by name
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the hop
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
router.get('/v1/api/hops/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = hopData.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
