import db from '../../connection/db';
import Page from '../../models/Page';

export default defineEventHandler(async (e) => {
	await db();
    const section_id = getRouterParam(e, 'section_id');
	const pages = Page.find({section: section_id});
	return pages;
});