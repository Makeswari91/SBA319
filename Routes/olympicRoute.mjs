import express, {Router} from 'express';
import olympic from '../Models/olympicSchema.mjs';
const router = express.Router();

router.route('/')
  .get(async(req, res) => {
    try {
      let allUsers = await olympic.find({});

      res.json(allUsers);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `Error - ${err.message}` });
    }
  })
  .post(async(req,res)=>{
    try{
    let newUser = await olympic.create(req.body);
    res.json(newUser);
  }catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `Error - ${err.message}` });
    }
})
  



export default router;
