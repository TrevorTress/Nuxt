import mongoose, { Schema, Document, ObjectId } from 'mongoose';

// Interface to define the Plant model structure
interface ISection extends Document {
	plant_id: ObjectId;
	name: string;
	icon: string;
	pages: ObjectId[];
}

// Schema definition for the Section model
const SectionSchema: Schema = new Schema({
	plant_id: { type: Schema.Types.ObjectId, ref: 'Plant', required: true },
	name: { type: String, required: true },
	icon: { type: String, required: true },
	pages: [{ type: Schema.Types.ObjectId, ref: 'Page', default: [] }],
});

// Model creation
const Section = mongoose.model<ISection>('Section', SectionSchema);

export default Section;
