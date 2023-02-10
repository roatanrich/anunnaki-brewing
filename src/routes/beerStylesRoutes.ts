import express from 'express';
import beerStyles from '../../data/sample/beerStyles';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /api/beer-styles/:
 *   get:
 *     tags:
 *     - Beer Styles
 *     summary: Get a list of all the beer styles
 *     description: It will show all beer styles added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/api/beer-styles', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  res.json(beerStyles);
});

/**
 * @openapi
 * '/api/beer-styles/{name}':
 *  get:
 *     tags:
 *     - Beer Styles
 *     summary: Get a single beer style by name
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the beer style
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
router.get('/api/beer-styles/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = beerStyles.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
