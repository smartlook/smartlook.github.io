export const main = ({ kind }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	pl: 0,
	mb: 0,
	listStyle: 'none',
	border: '1px solid #ffe5ce',
	borderBottom: 'none',
	borderTopLeftRadius: 3,
	borderTopRightRadius: 3,
	bg: `${kind === 'example' ? '#ffe5ce' : 'onahau'}`,

	'& + pre': {
		borderTop: 'none',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
	},
})

const tabBase = {
	display: 'block',
	py: 2,
	px: 3,
	textDecoration: 'none',
	cursor: 'pointer',
}

export const tab = ({ kind }) => ({
	...tabBase,
	color: `${kind === 'example' ? '#95681c' : 'smalt'}`,

	'&:hover': {
		bg: `${kind === 'example' ? '#ffefe2' : '#e6f2ff'}`,
	},
})

export const tabActive = ({ kind }) => ({
	...tabBase,
	color: `${kind === 'example' ? 'smalt' : 'pink'}`,
	bg: `${kind === 'example' ? '#ffefe2' : '#e6f2ff'}`,
})
