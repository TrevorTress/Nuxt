import db from '../../connection/db';
import Section from '../../models/Section';

export default defineEventHandler(async (e) => {
	await db();
	const sections = Section.find({});
	return sections;
});
