const swaggerDocument = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "Novelty Api",
      description: "",
    },
    host: "localhost:5001",
    basePath: "/api/v1/",
    tags: [
      {
        name: "user",
        description: "Everything about users",
      },
      {
        name: "ideas",
        description: "Everything about ideas",
      },
      {
        name: "questions",
        description: "Everything about questions",
      },
      {
        name: "answers",
        description: "everything about answers",
      },
      {
        name: "domain",
        description: "everything about domain",
      },
    ],
    schemes: ["http"],
    definitions: {
      User: {
        properties: {
          first_name: {
            type: "string",
          },
          last_name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          user_password: {
            type: "string",
          },
        },
      },
      Domain: {
        properties: {
          first_name: {
            type: "string",
          },
        },
      },
    },
  },
  apis: ["./Routes/*.js"],
};

module.exports = swaggerDocument(options);
