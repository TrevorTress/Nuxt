// import { WTAPData } from './WTAP/data';
// import { HMMAData } from './HMMA/data';
import { GMFWData } from './FW/data';

// import WTAPDrawings from './WTAP/drawings';
// import HMMADrawings from './HMMA/drawings';
import GMFWDrawings from './FW/drawings';
export const PLANT_DATA: {
	[key: string]: SectionData[];
} = {
	// WTAP: WTAPData,
	// HMMA: HMMAData,
	GMFW: GMFWData,
};

export const PLANT_DRAWINGS: { [key: string]: DrawingData[] } = {
	// WTAP: WTAPDrawings,
	// HMMA: HMMADrawings,
	GMFW: GMFWDrawings,
};
