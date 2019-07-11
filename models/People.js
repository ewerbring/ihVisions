const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peopleSchema = new Schema(
  {
    imgPath: String,
    xposition: Number,
    yposition: Number,
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const People = mongoose.model("People", peopleSchema);

module.exports = People;
