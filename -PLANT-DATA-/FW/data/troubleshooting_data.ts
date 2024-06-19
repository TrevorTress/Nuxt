export const troubleshooting_data = {
	section_name: 'Troubleshooting',
	color: '#920e0e',
	pages: [
		{
			page_name: 'Troubleshooting Overview',
			tabs: ['Troubleshooting Overview', 'Troubleshooting Guidelines', 'Experience', 'Step-by-Step Approach', 'Intermittent Failures', 'HMI', 'Troubleshooting Process'],
			retreat: { jump: 'Maintenance', to: 'Maintenance Procedures' },
		},
		{
			page_name: 'Mechanical Troubleshooting',
			tabs: ['Mechanical Troubleshooting'],
		},
		{
			page_name: 'Electrical Troubleshooting',
			tabs: ['Electrical Troubleshooting Overview', 'Electrical Troubleshooting Procedure', 'Sequence Stops', 'Repairing Sensors', 'Non-Actuating Problems', 'Programmable Logic Controller (PLC)', 'PLC Inputs', 'PLC Outputs', 'PLC Processor', 'Allen Bradley GuardLogix', 'Control Panel', 'Proximity / Limit Switch', 'Electrical Device Inspection'],
		},
		{
			page_name: 'OEM Troubleshooting',
			tabs: ['OEM Equipment Troubleshooting'],
		},
		{
			page_name: 'SMARTInspect Troubleshooting',
			tabs: ['SMARTInspect Troubleshooting Overview', "PowerPaint 'Rendering' Issues", "'Missing' Configuration Files", 'SQL Server Exceptions', 'Recovering from Fault State'],
		},
		{
			page_name: 'Hardware Troubleshooting',
			tabs: ['Dalsa Camera Troubleshooting', 'No LED / Channel Board Power', 'LED Board Not Illuminated', 'Suspected LED Trigger Problem', 'No Trigger Board Power', 'Suspected Encoder Signal Problem', 'Suspected Part Detect Signal Problem', 'Suspected Laser Photoeye Signal Problem'],
			advance: { jump: 'Drawings', to: 'Drawings' },
		},

		// add safety pages here...
	],
};
