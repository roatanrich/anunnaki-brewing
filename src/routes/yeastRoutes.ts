import express from 'express';
import yeasts from '../../data/sample/yeasts';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /api/yeasts/:
 *   get:
 *     tags:
 *     - Yeasts
 *     summary: Get a list of all the yeasts
 *     description: It will show all yeasts added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/api/yeasts', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  res.json(yeasts);
});

/**
 * @openapi
 * '/api/yeasts/{name}':
 *  get:
 *     tags:
 *     - Yeasts
 *     summary: Get a single yeast by name
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the yeast
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
router.get('/api/yeasts/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = yeasts.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
