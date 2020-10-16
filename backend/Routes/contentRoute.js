const userRouter = require("express").Router();
const contentController = require("../Controllers/contentController");

// [get] route to "/content" to get a list of desired content.
/**
 * @swagger
 * /content:
 *  get:  
 *     tags:
 *      - content
 *     summary: Get content
 *     description: retrieve content from th db
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json     
 *     responses:
 *        200:
 *         description: Here is the content you requested.
 *        400:
 *         description: Could not get content.
 * 
 */
userRouter.get("/:id", async(req, res) => {
    result = await contentController.getContent(req.params);
  
    res.status(result.status).send(result);
});

module.exports = userRouter;