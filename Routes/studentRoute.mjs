import express, {Router} from 'express';
import student from "../Models/studentSchema.mjs"
const router = express.Router();

//create
router.route('/')
  .get(async(req, res) => {
    try {
      let allUsers = await student.find({});

      res.json(allUsers);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `Error - ${err.message}` });
    }
  })
  .post(async(req,res)=>{
    try{
    let newUser = await student.create(req.body);
    console.log(req.body);
    res.json(newUser);
    
  }catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `Error - ${err.message}` });
    }
})
  

export default router;
