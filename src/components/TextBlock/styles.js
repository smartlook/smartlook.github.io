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
	border: (t) => `1px solid ${t.colors.mariner}`,
	borderLeft: (t) => `4px solid ${t.colors.smalt}`,
	bg: 'white',
}

export const important = {
	...mainBase,
	border: '1px solid #02b9f5',
	borderLeft: '4px solid #02b9f5',
	bg: 'white',
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
