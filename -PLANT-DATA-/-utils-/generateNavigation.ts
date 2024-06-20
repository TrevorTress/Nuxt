// ALL SECTION DATA MUST BE PASSED THROUGH THIS FUNCTION TO ENABLE AUTOMATIC NAVIGATION / PAGE FLIPPING
//-----------------------------------------//
export function generateNavigation(section: SectionData): SectionData {
	function getSubpage(page: PageData, position: 'first' | 'last'): string | null {
		const subpage = page.subpages?.[position === 'first' ? 0 : page.subpages.length - 1];
		return subpage ? subpage.page_name : null;
	}

	section.pages = section.pages.map((page, index, array) => {
		const nextPage = array[index + 1];
		const prevPage = array[index - 1];
		const advance = page.advance || (nextPage ? { to: getSubpage(nextPage, 'first') || nextPage.page_name } : undefined);
		const retreat = page.retreat || (prevPage ? { to: getSubpage(prevPage, 'last') || prevPage.page_name } : undefined);

		if ('subpages' in page) {
			page.subpages = generateNavigation({ ...section, pages: page.subpages || [] }).pages;

			page.subpages[0].retreat = page.subpages[0].retreat || retreat;
			page.subpages[page.subpages.length - 1].advance = page.subpages[page.subpages.length - 1].advance || advance;
		}

		return { ...page, advance, retreat };
	});

	return section;
}
