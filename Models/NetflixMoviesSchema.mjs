import mongoose from "mongoose";

const NetflixMoviesSchema = new mongoose.Schema({
       name: {type: String},
       year: {type: Number},
       duration: {type: Number},
       category: {type: String},
       IMDb_rating: {type: Number}

})

export default mongoose.model("NetflixMovies", NetflixMoviesSchema);