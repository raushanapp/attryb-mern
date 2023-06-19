const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, min: 2, max: 50 },
    firstLast: { type: String, required: true, min: 2, max: 50 },
    email: {
      type: String,
      required: [true, "please provide a email"],
      unique: true,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "please provide a valid email ",
      ],
    },
    password: { type: String, rquired: true, min: 5, max: 50 },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
const User = mongoose.model("user", userSchema);
module.exports=User;
