// const PlantData = PLANT_DATA[plantStr] || [];
// const SectionData = PlantData.filter((sectionItem: SectionData) => sectionItem.section_name === section);

// const getPages = (SectionData: SectionData[]) => {
// 	return SectionData.reduce((acc, section) => {
// 		section.pages.forEach((page) => {
// 			if ('subpages' in page && page.subpages) {
// 				page.subpages.forEach((subpage) => {
// 					acc[subpage.page_name] = {
// 						...subpage,
// 						retreat: subpage.retreat,
// 						advance: subpage.advance,
// 					};
// 				});
// 			} else {
// 				acc[page.page_name] = {
// 					...page,
// 					retreat: page.retreat,
// 					advance: page.advance,
// 				};
// 			}
// 		});
// 		return acc;
// 	}, {} as PagesData);
// };

// const PageData = getPages(SectionData)[pageStr];
// const { retreat, advance } = PageData || { retreat: {}, advance: {} };

// const tabs =
// 	PageData?.tabs?.map((tab) => {
// 		const tabContents = PAGE_DATA[pageStr] || {};
// 		const component = tabContents[tab];
// 		return {
// 			tab_name: tab,
// 			component: component,
// 		};
// 	}) || [];

// const finalTabs = tabs.map((tab) => {
// 	return {
// 		label: tab.tab_name,
// 		content: tab.component,
// 		slot: 'tab',
// 	};
// });

// const activeTab = useState('activeTab', () => 'PDP Main Power Disconnect');
// const setActiveTab = (tab: string) => (activeTab.value = tab);

// function onChange(index: number) {
// 	const item = tabs[index];

// 	setActiveTab(item.tab_name);
// }

// function getComponent(content: any) {
// 	return content;
// }