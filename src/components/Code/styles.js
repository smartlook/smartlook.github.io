export const main = {
	display: 'flex',
	flexWrap: 'wrap',
	pl: 0,
	mb: 0,
	listStyle: 'none',
	bg: 'onahau',
}

export const tab = {
	display: 'block',
	py: 2,
	px: 3,
	color: 'smalt',
	textDecoration: 'none',
	cursor: 'pointer',

	'&:hover': {
		bg: '#e6f2ff',
	},
}

export const tabActive = {
	...tab,
	color: 'pink',
	bg: '#e6f2ff',
}
