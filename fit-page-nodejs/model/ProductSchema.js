const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    id: {
      type:Number
    },
    name: {
      type:String
    },
    tag: {
      type:String
    },
    color: {
      type:String
    },
    criteria: {
      type: [Schema.Types.Mixed]
    }
  });

const model = mongoose.model("product", ProductSchema);
module.exports = model;