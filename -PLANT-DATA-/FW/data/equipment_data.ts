export const equipment_data = {
	section_name: 'Equipment',
	color: '#dc8923',
	pages: [
		{
			page_name: 'Equipment Overview',
			tabs: ['Main Layout', 'Tailgate Layout', 'Sequence of Operations (Main Cell)', 'Sequence of Operations (Tailgate Cell)'],
			retreat: { jump: 'Safety', to: 'Energy Sources' },
		},
		{
			page_name: 'Assemblies',
			tabs: ['Inspection Frame Assembly', 'Camera Mounting Assemblies', 'Camera Assemblies', 'Lighting Assemblies', 'Main Cell Photoeye Assembly and Reflectors', 'iMS Gantry'],
		},
		{
			page_name: 'Camera Coverage',
			tabs: ['Camera Coverage Maps'],
		},
		{
			page_name: 'Electrical Panels',
			tabs: ['Power Distribution Panel (PDP)', '5KVA Remote Power Panel', 'Transformer Stand', 'Programmable Automation Controller (PAC)', 'Server Panel', 'Rittal Cooling Unit', 'Trigger Panels'],
		},
		{
			page_name: 'System Control',
			tabs: ['System Control Console', 'Push-button Junction Box', 'Inspection Monitors'],
		},
		{
			page_name: 'Part / Skid Detect',
			tabs: ['Encoder Assembly', 'Tailgate Cell Photoeyes'],
			advance: { jump: 'Maintenance', to: 'Maintenance Overview' },
		},

		// add equipment pages here...
	],
};
