import mongoose from 'mongoose';


const favoriteSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        id: {
            type: String
        },
        poster_path: {
            type:String
        }
    }
)


const Favorite = mongoose.model('Favorite', favoriteSchema);
export default Favorite;

