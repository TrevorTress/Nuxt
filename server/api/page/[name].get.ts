import db from '../../connection/db';
import Page from '../../models/Page';
import Tab from '../../models/Tab';

export default defineEventHandler(async (e) => {
	await db();
	const name = getRouterParam(e, 'name');
	
	const page = await Page.findOne({name: name})
		.populate('tabs')
		.exec();
	return page;
});