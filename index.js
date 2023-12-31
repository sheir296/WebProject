const apiV1 = require("express")
const { router: userRouter } = require("./users")


apiV1.use("/user", userRouter)

module.exports = { apiV1 }
