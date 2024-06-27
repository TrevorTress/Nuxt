import db from '../../connection/db';
import Section from '../../models/Section';
import Page from '../../models/Page';

export default defineEventHandler(async (e) => {
	await db();
	const PageData = await readBody(e);
	const { section_id } = PageData;

	try {
		const newPage = new Page(PageData);
		await newPage.save();

		await Section.findByIdAndUpdate(
			section_id, 
			{ $push: { pages: newPage._id } }, 
			{ new: true, safe: true, upsert: false }
		);

		return { success: true, Page: newPage };
	} catch (error) {
		return { success: false, error: error };
	}
});