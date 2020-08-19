module.exports = {
	dest: '/docs',
	base: '/nextgen-docs',
	menu: [
		{
			name: 'SDK Installation',
			menu: ['Android', 'iOS'],
		},
		{
			name: 'Conceptual',
			menu: [
				'SDK Installation',
				'Setup & Start Recording',
				'When The Recordings Appear in Dashboard?',
				'Life Cycle, Session, User',
				'What is recorded and how',
				'Handling Sensitive Data',
				'Screen Recording Quality',
				'Event Tracking',
				'Recording Navigation',
				'Integrating with Other Tools',
			],
		},
		'SDK API reference',
		{
			name: 'REST API',
			menu: ['Introduction', 'API Reference'],
		},
		'Cookbooks',
	],
	title: 'Smartlook',
	files: 'src/**/*.{md,mdx}',
}
