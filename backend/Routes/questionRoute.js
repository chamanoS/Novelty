const userRouter = require("express").Router();
const questionController = require("../Controllers/questionController");

// [get] route to "/questions" to get a list of questions.
/**
 * @swagger
 * /questions:
 *  get:  
 *     tags:
 *      - questions
 *     summary: Get questions
 *     description: retrieve questions from th db
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json     
 *     responses:
 *        200:
 *         description: Here are your questions.
 *        400:
 *         description: Could not get questions requested.
 * 
 */
userRouter.get("/:id", async(req, res) => {
    result = await questionController.getQuestions(req.params);
  
    res.status(result.status).send(result);
  });


  
// [post] route to add a business to .
/**
 * @swagger
 * /questions/answers:
 *  post:
 *     tags:
 *      - answers
 *     summary: Adds a an answer 
 *     description: This can only be done by users who have business ideas
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: Answers
 *          description: Created answer object
 *          in: body
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            user_answer:         
 *              type: string
 *            id_user:         
 *              type: number
 *            id_bus:         
 *              type: number
 *            id_que:         
 *               type: number
 *     responses:
 *        200:
 *         description: Thank you for answering.
 *        500:
 *         description: Oops! we\'re experiencing some problems on our servers, please try again later!.
 */
  userRouter.post("/answers", async(req, res) => {
    result = await questionController.addAnswer(req.body);
  
    res.status(result.status).send(result);
  });
  
// [patch] route to update your answer .
/**
 * @swagger
 * /questions:
 *  patch:
 *     tags:
 *      - answers
 *     summary: Updates the answer
 *     description: This can only be done by users who have answers to questions
 *     consumes:
 *        - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: Answers
 *          description: Created answer object
 *          in: body
 *          required: true 
 *          schema: 
 *           type: object
 *           properties:
 *            answer_user:         
 *              type: string
 *            b_id:         
 *              type: number
 *            u_id:         
 *              type: number
 *            
 *     responses:
 *        200:
 *         description: Thank you for updating your answer.
 *        500:
 *         description: Oops! we\'re experiencing some problems on our servers, please try again later!.
 */
  userRouter.patch("/",async(req,res) => {
    result = await questionController.modifyAnswer(req.body);

    res.status(result.status).send(result);
  });


  userRouter.get("/answers/:id", async(req, res) => {
    result = await questionController.getAnswers(req.params);
  
    res.status(result.status).send(result);
  });

  module.exports = userRouter;