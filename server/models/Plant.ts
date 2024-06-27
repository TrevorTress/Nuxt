import mongoose, { Schema, Document } from 'mongoose';

// Interface to define the Plant model structure

// Schema definition for the Plant model
const PlantSchema: Schema = new Schema({
	name: { type: String, required: true },
});

// Model creation
const Plant = mongoose.model<IPlant>('Plant', PlantSchema);

export default Plant;
