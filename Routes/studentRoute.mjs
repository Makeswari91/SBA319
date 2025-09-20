import express, {Router} from 'express';
import student from "../Models/studentSchema.mjs";
import { names } from '../data/data.mjs';
const router = express.Router();

router.get("/seed", async (req, res) => {
  try {
    
    await student.insertMany(names);

    res.send("Data Successfully seeded");
  } catch (err) {
    console.error(err.msg);
  }
});


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

//update
router
    .route('/:id')
    .put(async(req,res)=>{
        try{
          let updateUser = await student.findByIdAndUpdate(req.params.id, req.body, {new: true});
          res.json(updateUser); 

        }catch(err){
          console.error(err);
          res.status(500).json({msg: `Error - ${err.message }`});
        }
       })

//delete
    .delete(async(req,res)=>{
      try{
         let deleteUser = await student.findByIdAndDelete(req.params.id);
         res.json(deleteUser);
      }catch(err){
          console.error(err);
          res.status(500).json({msg: `Error - ${err.message }`});
        }

    })

  

export default router;
