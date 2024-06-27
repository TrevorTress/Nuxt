import db from '../../connection/db';
import Section from '../../models/Section';

export default defineEventHandler(async (e) => {
	await db();
	const sections = await Section.find({})
		.populate('pages')
		.exec();
	return sections;
});
