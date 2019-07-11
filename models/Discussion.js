///topic
///comment
//subcomment

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    topic: String,
    comment: String,
    xposition: Number,
    yposition: Number,
    subcomment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Subcomment"
      }
    ],

    _user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
