import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    watts: [Number]
});

const watts= mongoose.model('Watts',userSchema)
export default watts;