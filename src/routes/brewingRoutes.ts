import express from 'express';
import categoryData from '../../data/sample/categoryData';
import fermentableData from '../../data/sample/fermentableData';
import hopData from '../../data/sample/hopData';
import recipeData from '../../data/sample/recipeData';
import styleData from '../../data/sample/styleData';
import yeastData from '../../data/sample/yeastData';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /v1/api/categories/:
 *   get:
 *     tags:
 *     - Brewing
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
router.get('/v1/api/categories', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(categoryData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/categories/{name}:
 *  get:
 *     tags:
 *     - Brewing
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
router.get('/v1/api/categories/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = categoryData.filter((x) => x.name == req.params.name);
  res.json(result);
});

/**
 * @openapi
 * /v1/api/hops/:
 *   get:
 *     tags:
 *     - Brewing
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
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(hopData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/fermentables/:
 *   get:
 *     tags:
 *     - Brewing
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
 *     - Brewing
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

/**
 * @openapi
 * /v1/api/hops/{name}:
 *  get:
 *     tags:
 *     - Brewing
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

/**
 * @openapi
 * /v1/api/recipes/:
 *   get:
 *     tags:
 *     - Brewing
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
 *     - Brewing
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

/**
 * @openapi
 * /v1/api/beer-styles/:
 *   get:
 *     tags:
 *     - Brewing
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
router.get('/v1/api/beer-styles', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(styleData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/beer-styles/{name}:
 *  get:
 *     tags:
 *     - Brewing
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
router.get('/v1/api/beer-styles/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = styleData.filter((x: any) => x.name == req.params.name);
  res.json(result);
});

/**
 * @openapi
 * /v1/api/yeasts/:
 *   get:
 *     tags:
 *     - Brewing
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
router.get('/v1/api/yeasts', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const maxResult: number = Number(process.env.MAX_RESULT);
  res.json(yeastData.slice(0, maxResult));
});

/**
 * @openapi
 * /v1/api/yeasts/{name}:
 *  get:
 *     tags:
 *     - Brewing
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
router.get('/v1/api/yeasts/:name', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  const result = yeastData.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
