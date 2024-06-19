import { safety_data } from './safety_data';
import { equipment_data } from './equipment_data';
import { maintenance_data } from './maintenance_data';
import { troubleshooting_data } from './troubleshooting_data';
import { generateNavigation } from '../../NAVIGATION';

export const GMFWData = [
	{
		section_name: 'Cell Overview',
		color: '',
		pages: [
			{
				page_name: '',
				advance: { jump: 'Safety', to: 'Safety Devices' },
				tabs: ['Cell Overview', 'Process'],
			},
			// add safety pages here...
		],
	},
	generateNavigation(safety_data),
	generateNavigation(equipment_data),
	generateNavigation(maintenance_data),
	generateNavigation(troubleshooting_data),
	{
		section_name: 'Drawings',
		color: 'purple',
		pages: [
			{
				page_name: 'Drawings',
				tabs: ['Drawings'],
				advance: { jump: 'Appendix', to: '' },
				retreat: { jump: 'Troubleshooting', to: 'Hardware Troubleshooting' },
			},
			// add safety pages here...
		],
	},
	// Add more sections here...
];
