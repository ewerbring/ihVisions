///topic
///comment
//subcomment


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcommentSchema = new Schema(
  {
   
    subcomment: String,

    _user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  },{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Subcomment = mongoose.model("Subcomment", subcommentSchema);

module.exports = Subcomment;
