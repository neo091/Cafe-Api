const cafeRouter = require("express").Router()

const { allCafes, addCafe, deleteCafe } = require('../controllers/CafeController')

cafeRouter.get("/", allCafes)
cafeRouter.post("/add", addCafe)
cafeRouter.delete("/delete/:id", deleteCafe)

module.exports = cafeRouter
