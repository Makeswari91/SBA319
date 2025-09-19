import mongoose from "mongoose";

const olympicSchema = new mongoose.Schema({
   rank: {type: Number},
   Team: {type: String},
   Gold: {type: Number},
   Sliver: {type: Number},
   Bronze: {type: Number},
   total:{type: Number},
   rank_by_total: {type: Number}
})


export default mongoose.model("olympic", olympicSchema);