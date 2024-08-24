const CafeModel = require("../models/Cafe")

const allCafes = async (_, res) => {

    const cafes = await CafeModel.find({})
    res.json(cafes)
}

const addCafe = async (req, res) => {
    try {

        const { icon, name, type, description } = req.body

        console.log(icon, name)

        const cafe = {
            icon,
            name,
            type,
            description
        }

        const newCafe = new CafeModel(cafe)

        await newCafe.save()

        res.status(200).json({
            icon,
            name
        })

    } catch (error) {
        console.log(error.code)
        if (error.code === 11000) {
            return res.status(500).json({
                "error": "duplicate"
            })
        }

        res.status(500).json(error)

    }
}

const deleteCafe = async (req, res) => {
    await CafeModel.findByIdAndDelete(req.params.id)
    res.status(204).end()
}


module.exports = {
    allCafes,
    addCafe,
    deleteCafe
}