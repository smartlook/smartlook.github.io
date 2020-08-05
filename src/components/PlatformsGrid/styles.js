export const grid = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	borderTop: (t) => `1px solid ${t.colors.onahau}`,
	borderLeft: (t) => `1px solid ${t.colors.onahau}`,
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

	'&:hover': {
		boxShadow: '0 0 15px 0 rgba(39, 65, 136, 0.2)',
		zIndex: 5,
	},
}

export const boxName = {
	fontSize: '30px',
	lineHeight: 0.67,
	my: 0,
	fontWeight: 600,
	color: 'smalt',
}

export const boxType = {
	fontSize: '14px',
	color: 'poloBlue',
	mt: 2,
}
