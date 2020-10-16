const ideaRoute = require('express').Router();
const ideaController = require('../Controllers/ideaController');
 
// [post] route to add a business to .
/**
 * @swagger
 * /ideas:
 *  post:
 *     tags:
 *      - ideas
 *     summary: Adds a business idea
 *     description: This can only be done by users who have accounts
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: Business Idea
 *          description: Created business idea object
 *          in: body
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            busin_idea:         
 *              type: string
 *            descript:         
 *              type: string
 *            id_user:         
 *              type: number
 *     responses:
 *        200:
 *         description: you have successfully added an idea.
 *        500:
 *         description: Oops! we\'re experiencing some problems on our servers, please try again later!.
 */
ideaRoute.post('/', async (req, res)=>{
    result = await ideaController.addIdea(req.body);

    res.status(result.status).send(result);
});
 
// [get] route to get  business ideas .
/**
 * @swagger
 * /ideas/{id}:
 *  get:
 *     tags:
 *      - ideas
 *     summary: Gets business ideas by id
 *     description: This can only be done users who have ideas
 *     id: getUserById
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: id
 *          description: Gets the business idea by user id
 *          in: path
 *          required: true
 *          schema: 
 *           type: object
 *           properties:
 *            id:         
 *              type: number
 *           
 *     responses:
 *        201:
 *         description: getting all your ideas.
 *        400:
 *         description: ideas or user id do not exist.
 */
ideaRoute.get('/:id',async(req, res)=>{
    result =  await ideaController.listIdeas(req.params);

    res.status(result.status).send(result);
});


 
// [patch] route to  update your status flag .
/**
 * @swagger
 * /ideas:
 *  patch:
 *     tags:
 *      - ideas
 *     summary: Updates your status flag
 *     description: This can only be done by users who have business ideas
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: Business Idea
 *          description: Created business idea object
 *          in: body
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            b_id:         
 *              type: number
 *            u_id:         
 *              type: number
 *           
 *     responses:
 *        200:
 *         description: You have successfully deleted your idea.
 *        500:
 *         description: Oops! we\'re experiencing some problems on our servers, please try again later!.
 */
ideaRoute.patch('/',async(req, res)=>{
    result =  await ideaController.deleteIdea(req.body);

    res.status(result.status).send(result);
});

// [post] route to update a rating for a business idea.
/**
 * @swagger
 * /ideas/rate:
 *  post:
 *     tags:
 *      - ideas
 *     summary: Update a rate status for a business idea
 *     description: This can only be done by users who have accounts
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: Rate
 *          in: body
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            busin_idea_id:         
 *              type: number
 *            rate:         
 *              type: number
 *            id_user:         
 *              type: number
 *     responses:
 *        200:
 *         description: You have successfully rated your idea.
 *        500:
 *         description: Oops! we\'re experiencing some problems on our servers, please try again later!.
 */
ideaRoute.post('/rate', async (req, res)=>{
    result = await ideaController.rate(req.body);

    res.status(result.status).send(result);
});

module.exports = ideaRoute;