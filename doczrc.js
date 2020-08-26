module.exports = {
	dest: '/docs',
	base: '/nextgen-docs',
	menu: [
		{
			name: 'Web',
			menu: [
				'Getting started',
				'Identify visitor',
				'GDPR',
				'Sensitive data protection',
				'Custom events',
				'Custom event properties',
				'Custom click properties',
				'Custom navigation event',
				'Recording API',
				'Error logging',
			],
		},
		{
			name: 'SDK Installation',
			menu: ['Android', 'iOS'],
		},
		{
			name: 'SDK Conceptual',
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
		'SDK Cookbooks',
		'SDK Integrations',
		{
			name: 'REST API',
			menu: ['Overview', 'API Reference'],
		},
	],
	title: 'Smartlook',
	files: 'src/**/*.{md,mdx}',
}
