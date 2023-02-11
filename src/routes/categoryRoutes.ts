import express from 'express';
import categoryData from '../../data/sample/categoryData';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /v1/api/beer-categories/:
 *   get:
 *     tags:
 *     - Beer Categories
 *     summary: Get a list of all the beer categories
 *     description: It will show all beer categories added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/beer-categories', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(categoryData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/beer-categories/{name}:
 *  get:
 *     tags:
 *     - Beer Categories
 *     summary: Get a single beer category by name
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the beer category
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
router.get('/v1/api/beer-categories/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = categoryData.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
