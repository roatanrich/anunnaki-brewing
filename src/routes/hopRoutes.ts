import express from 'express';
import hops from '../../data/sample/hops';

const router = express.Router();

/**
 * @openapi
 * /api/hops/:
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
router.get('/api/hops', (_, res) => {
  res.json(hops);
});

/**
 * @openapi
 * '/api/hops/{name}':
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
 *         description: Hop not found
 */
router.get('/api/hops/:name', (req, res) => {
  const result = hops.filter((x) => x.name == req.params.name);
  res.json(result);
});

export default router;
