import mongoose, { ObjectId, Schema, QueryOpThatReturnsDocument } from 'mongoose';

interface ITab extends Document {
	page_id: ObjectId;
	name: string;
}

// Schema definition for the Tab model
const TabSchema: Schema = new Schema({
	page_id: { type: Schema.Types.ObjectId, ref: 'Page', required: true },
	name: { type: String, required: true },
});

// Model creation
const Tab = mongoose.model<ITab>('Tab', TabSchema);

export default Tab;