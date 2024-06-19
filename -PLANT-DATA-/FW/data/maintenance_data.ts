export const maintenance_data = {
	section_name: 'Maintenance',
	color: '#0f4ead',
	pages: [
		{
			page_name: 'Maintenance Overview',
			tabs: ['Maintenance Overview'],
			retreat: { jump: 'Equipment', to: 'Part / Skid Detect' },
		},
		{
			page_name: 'Maintenance Safety',
			tabs: ['General Maintenance Safety', 'Mechanical Safety', 'Electrical Safety'],
		},
		{
			page_name: 'Maintenance Lockout Procedure',
			tabs: ['Maintenance Lockout', 'Maintaining Safety Features'],
		},
		{
			page_name: 'Preventive Maintenance',
			tabs: ['Preventive Maintenance'],
		},
		{
			page_name: 'Maintenance Procedures',
			tabs: ['Dalsa Camera Replacement', 'Channel Board Replacement', 'Trigger Board Replacement', 'Encoder Wheel Replacement', 'Light Arch Replacement', 'Lights 1-8 Replacement', 'Lights 2-5 Replacement', 'Double Wide Lights Replacement'],
			advance: { jump: 'Troubleshooting', to: 'Troubleshooting Overview' },
		},

		// add operation pages here...
	],
};
