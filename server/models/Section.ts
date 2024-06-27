import mongoose, { Schema, Document, ObjectId } from 'mongoose';

// Interface to define the Plant model structure
interface ISection extends Document {
	name: string;
	plant: ObjectId;
}

// Schema definition for the Section model
const SectionSchema: Schema = new Schema({
	name: { type: String, required: true },
	plant: { type: Schema.Types.ObjectId, ref: 'Plant', required: true },
});

// Model creation
const Section = mongoose.model<ISection>('Section', SectionSchema);

export default Section;
