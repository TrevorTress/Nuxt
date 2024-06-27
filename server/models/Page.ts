import mongoose, { Schema, Document, ObjectId } from 'mongoose';

// Interface to define the Plant model structure
interface IPage extends Document {
	name: string;
	section: ObjectId;
}

// Schema definition for the Page model
const PageSchema: Schema = new Schema({
	name: { type: String, required: true },
	section: { type: Schema.Types.ObjectId, ref: 'Section', required: true },
});

// Model creation
const Page = mongoose.model<IPage>('Page', PageSchema);

export default Page;
