export const safety_data = {
	section_name: 'Safety',
	color: '#dcc032',
	pages: [
		{
			page_name: 'Safety Overview',
			tabs: ['Notices', 'Safety Overview', 'General Safety', 'Personal Safety', 'Work Area Safety', 'Lockout / Tagout Placard (LOTO)'],
		},
		{
			page_name: 'Control Safety',
			tabs: ['Electrical Safety', 'Mechanical Safety'],
		},
		{
			page_name: 'Safety Devices',
			tabs: ['Machine Access and Fencing Precautions', 'Fencing and Safety Gates', 'Safety Gate Switches', 'Safety Scanners'],
		},
		{
			page_name: 'Master Key Box',
			tabs: ['Master Key Box'],
		},
		{
			page_name: 'Equipment Lockout',
			tabs: ['Equipment Lockout Procedure'],
		},
		{
			page_name: 'Energy Sources',
			tabs: ['PDP Main Power Disconnect', 'PLC and Lighting Disconnect', 'Tailgate Cell Disconnect'],
			advance: { jump: 'Equipment', to: 'Equipment Overview' },
		},
		// add safety pages here...
	],
};
