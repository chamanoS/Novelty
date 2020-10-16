const dmRouter = require("express").Router();
const dmController = require("../Controllers/dmController");

// [post] route to /domain check domain availability.
/**
 * @swagger
 * /domain:
 *  post:
 *     tags:
 *      - domain
 *     summary: check domain availability
 *     description: This does not require the user to be logged in
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: domain
 *          description: Created domain object
 *          in: body
 *          required: true
 *          schema:
 *           $ref: '#/definitions/Domain'
 *     responses:
 *        200:
 *         description: Domain check response
 *        400:
 *         description: An error has occured
 *
 */
dmRouter.post("/", async (req, res) => {
  let result = await dmController.domainAvailability(req.body);
  res.status(result.status).send(result);
});

module.exports = dmRouter;
