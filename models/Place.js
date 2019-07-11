const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: String,
    city: String,
    street: String,
    imageUrl: String,
    infoLink: [String],
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
    subcomment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Subcomment"
      }
    ],
    people: [
      {
        type: Schema.Types.ObjectId,
        ref: "People"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
