import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
       user_id: {type: Number},
       username: {type: String},
       Marks_in_Math: {type: Number},
       Marks_in_Physics: {type: Number},
       Marks_in_Chemistry: {type: Number},
       Percentage: {type: Number}

})

export default mongoose.model("student", studentSchema);