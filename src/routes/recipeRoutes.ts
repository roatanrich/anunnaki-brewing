import 'dotenv/config';
import express from 'express';
import recipeData from '../../data/sample/recipeData';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /v1/api/recipes/:
 *   get:
 *     tags:
 *     - Recipes
 *     summary: Get a list of all the recipes
 *     description: It will show all recipes added to system
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/recipes', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(recipeData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/recipes/{name}:
 *  get:
 *     tags:
 *     - Recipes
 *     summary: Get a single recipe by name
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name of the recipe
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
router.get('/v1/api/recipes/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = recipeData.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
