import express from 'express'
import hops from '../../data/sample/hops'


const router = express.Router()



/**
 * @swagger
 * /api/hops/:
 *   get:
 *     tags:
 *     - HOPS
 *     summary: Show all hops
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
 * @swagger
 * /api/hops/:name:
 *   get:
 *     tags:
 *     - HOPS
 *     summary: Show an individual hops by name
 *     description: It will show a single hop variety by name
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/api/hops/:name', (req, res) => {
  const result = hops.filter(x => x.name == req.params.name)
  res.json(result)
});

export default router