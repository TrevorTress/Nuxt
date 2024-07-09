import mongoose, { ObjectId, Schema } from 'mongoose';

// Schema definition for the Page model
const UserSchema: Schema = new Schema({
	email: { type: String, required: true },
});

// Model creation
const User = mongoose.model('User', UserSchema);

export default User;