const mongoose = require("mongoose");

const oemSpecsSchema = new mongoose.Schema({
    nameOfModel: { type: String, required: true },
    yearOfModel: { type: Number, required: true },
    listOfPriceNewVehicle: { type: Array },
    availableColor: { type: Array, required: true },
    mileage: { type: Number, required: true },
    power: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
    carImg: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

const Oem = mongoose.model("omes", oemSpecsSchema);

module.exports = Oem;
