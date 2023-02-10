import express from 'express';
import fermentables from '../../data/sample/fermentables';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /api/fermentables/:
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
router.get('/api/fermentables', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  res.json(fermentables);
});

/**
 * @openapi
 * '/api/fermentables/{name}':
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
router.get('/api/fermentables/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = fermentables.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
