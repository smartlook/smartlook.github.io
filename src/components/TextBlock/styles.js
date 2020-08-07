export const mainBase = {
	borderRadius: '3px',
	p: 3,
	mb: 4,

	'*:last-child': {
		mb: 0,
	},
}

export const note = {
	...mainBase,
	borderLeft: '4px solid #023189',
	bg: 'rgba(54, 119, 209, 0.2)',
	color: '#0149a8',

	'.heading > a': {
		color: '#0149a8',
	},
}

export const important = {
	...mainBase,
	borderLeft: '4px solid #d14452',
	bg: 'rgba(255, 91, 108, 0.3)',
	color: '#562328',

	'.heading > a': {
		color: '#562328',
	},
}

export const example = {
	...mainBase,
	borderLeft: '4px solid #ffae6d',
	bg: 'rgba(255, 174, 109, 0.2)',
	color: '#562328',

	'.heading > a': {
		color: '#562328',
	},
}
