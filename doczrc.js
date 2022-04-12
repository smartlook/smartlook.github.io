module.exports = {
	dest: '/docs',
	src: 'src/',
	base: '/',
	description: 'Smartlook documentation',
	menu: [
		{
			name: 'Web',
			menu: [
				'Getting started',
				'Identify visitor',
				'Consent and sensitive data',
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
			name: 'Mobile SDK',
			menu: [
				{
					name: 'Mobile SDK', route: 'https://mobile.developer.smartlook.com' 
				}
			],
		},
		{
			name: 'REST API',
			menu: ['Overview', 'Cookbook', 'API Reference'],
		},
		{
			name: 'WEBHOOKS',
			menu: ['Overview'],
		},
	],
	title: 'Smartlook',
}
