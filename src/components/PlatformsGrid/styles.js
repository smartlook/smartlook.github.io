const em = (px) => `${px / 16}em`
const mountMedia = (val) => `@media screen and (max-width: ${em(val)})`

export const grid = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
	borderTop: (t) => `1px solid ${t.colors.onahau}`,
	borderLeft: (t) => `1px solid ${t.colors.onahau}`,

	[mountMedia(920)]: {
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
	},
}

export const box = {
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: 275,
	px: 4,
	textAlign: 'center',
	cursor: 'pointer',
	bg: '#fafcff',
	borderBottom: (t) => `1px solid ${t.colors.onahau}`,
	borderRight: (t) => `1px solid ${t.colors.onahau}`,
	zIndex: 1,

	svg: {
		marginBottom: 3,
		color: '#97abd0',
	},

	'&:hover': {
		boxShadow: '0 0 15px 0 rgba(39, 65, 136, 0.2)',
		zIndex: 5,
		svg: {
			color: '#039ea4',
		},
	},

	[mountMedia(920)]: {
		height: 200,
	},
}

export const boxName = {
	fontSize: '30px',
	lineHeight: 0.67,
	my: 0,
	fontWeight: 600,
	color: 'smalt',

	[mountMedia(920)]: {
		fontSize: '24px',
	},
}

export const boxType = {
	fontSize: '14px',
	color: 'poloBlue',
	mt: 2,
}

export const webDesc = {
	fontSize: 2,

	[mountMedia(920)]: {
		display: 'none',
	},
}
