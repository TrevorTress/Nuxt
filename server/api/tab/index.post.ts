import db from '../../connection/db';
import Page from '../../models/Page';
import Tab from '../../models/Tab';

export default defineEventHandler(async (e) => {
	await db();
	const TabData = await readBody(e);
	const { page_id } = TabData;

	try {
		const newTab = new Tab(TabData);
		await newTab.save();
		console.log('New Tab: ', newTab);
		console.log('Tab Data: ', TabData);
		console.log('Section ID: ', page_id);

		await Page.findByIdAndUpdate(page_id.toString(), { $push: { tabs: newTab._id } }, { new: true, safe: true, upsert: false });

		return { success: true, Tab: newTab };
	} catch (error) {
		return { success: false, error: error };
	}
});