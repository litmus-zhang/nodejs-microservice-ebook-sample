var seneca = require("seneca")()
    .use("email")
    .use("sms")
    .use("post");

seneca.listen({ type: "tcp", port: 9000, host: "localhost" });