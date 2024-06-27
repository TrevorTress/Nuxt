import db from '../../connection/db';
import Section from '../../models/Section';

export default defineEventHandler(async (e) => {
	await db();
	const SectionData = await readBody(e);

	try {
		const newSection = new Section(SectionData);
		await newSection.save();

		return { success: true, Section: newSection };
	} catch (error) {
		return { success: false, error: error };
	}
});
