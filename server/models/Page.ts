import mongoose, { ObjectId, Schema, Document } from 'mongoose';

interface IPage extends Document {
	section_id: ObjectId;
	name: string;
	tabs: ObjectId[];
}

// Schema definition for the Page model
const PageSchema: Schema = new Schema({
	section_id: { type: Schema.Types.ObjectId, ref: 'Section', required: true },
	name: { type: String, required: true },
	tabs: [{ type: Schema.Types.ObjectId, ref: 'Tab', default: [] }],
});

// Model creation
const Page = mongoose.model<IPage>('Page', PageSchema);

export default Page;
