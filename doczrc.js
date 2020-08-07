module.exports = {
	dest: '/docs',
	base: '/nextgen-docs',
	menu: [
		'Getting Started',
		{
			name: 'SDK Installation',
			menu: ['Android', 'iOS',]
		},
		{
			name: 'Conceptual',
			menu: ['SDK Installation', 'Setup & Start Recording', 'When I Will See The Recordings in Dashboard?', 'Life Cycle, Session, User', 'What is recorded and how', 'Handling Sensitive Data', 'Screen Recording Quality', 'Event Tracking', 'Recording Navigation', 'Integrating with Other Tools']
		  },
		  'API reference',
		  'Cookbooks',
	],
	title: 'Smartlook',
	files: 'src/**/*.{md,mdx}',
}
