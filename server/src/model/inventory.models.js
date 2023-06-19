const mongoose = require("mongoose");

const inventrySchema = new mongoose.Schema(
  {
    oemSpecs: { type: Schema.Type.ObjectId, ref: "Oem" },
    kmOnMeter: { type: Number, required: true },
    majorScratches: { type: Array, required: true },
    originalPaint: { type: String, required: true },
    noOfAccident: { type: Number, required: true },
    noOfPreviousBuyers: { type: Number, required: true },
    registrationPlace: { type: String, required: true },
    oldCarImg: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Inventry = mongoose.model("invertry", inventrySchema);
module.exports = Inventry;
