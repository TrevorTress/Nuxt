/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />
type SelectCallback = ((eventKey: string | null, event: React.SyntheticEvent<unknown>) => void) | undefined;

type X = {
	className?: string;
	children?: ReactNode;
	activeKey?: string;
	setActiveKey?: SelectCallback;
};

type PageConfig = {
	[key: string]: ReactNode.FC<X>;
};

type FigureConfig = {
	[key: string]: {
		component: string;
	};
};

type PagesData = {
	[key: string]: PageData | SubPageData;
};

type PageData = {
	_id: string;
	section_id: string;
	name: string;
	tabs: TabData[];
};

type TabData = {
	_id: string;
	page_id: string;
	name: string;
};

type SubPageData = {
	page_name: string;
	tabs?: string[];
	retreat?: { jump?: string; to?: string };
	advance?: { jump?: string; to?: string };
};

type SectionData = {
	_id: string;
	plant_id: string;
	name: string;
	icon: string;
	pages: string[];
};

type PlantData = {
	_id: string;
	name: string;
}

type DrawingData = {
	drawing_type: string;
	asset_name: string;
	drawing_number: string;
	file: string;
};

interface IPlant extends Document {
	name: string;
}

declare module '*.zip' {
	const content: string;
	export default content;
}

declare module '*.xlsx' {
	const value: string;
	export default value;
}

declare global {
	interface JQuery {
		tablesorter: (settings?: any) => JQuery;
		tablesorterPager: (settings?: any) => JQuery;
	}
}

declare namespace JSX {
	interface IntrinsicElements {
		// i like using custom html elements and if typescript doesnt like it they can pry them from my cold dead carpal-tunneled hands -TT
		[element: string]: any;
	}
}
