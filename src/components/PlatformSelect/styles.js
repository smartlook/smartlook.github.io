const em = (px) => `${px / 16}em`
const mountMedia = (val) => `@media screen and (max-width: ${em(val)})`

export const reference = {
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: 196,
	maxHeight: 40,
	padding: '12px 16px 12px',
	borderRadius: 3,
	border: (t) => `solid 1px ${t.colors.onahau}`,
	boxShadow: 'inset 1px 1px 3px 0 rgba(54, 119, 209, 0.2)',
	bg: '#f7fbff',
	cursor: 'pointer',

	[mountMedia(576)]: {
		width: 100,
	},
}

export const popper = ({ isOpened }) => ({
	position: 'fixed',
	display: isOpened ? 'flex' : 'none',
	flexDirection: 'column',
	alignContent: 'stretch',
	justifyContent: 'stretch',
	width: 250,
	height: 'auto',
	borderRadius: 3,
	border: (t) => `solid 1px ${t.colors.onahau}`,
	boxShadow: '0 5px 14px 0 rgba(39, 65, 136, 0.2)',
	bg: 'white',
	zIndex: 6,
})

export const popperItem = {
	display: 'flex',
	alignItems: 'center',
	padding: '6px 12px',
	cursor: 'pointer',
	bg: 'white',
	'&:hover': {
		bg: 'rgba(206, 230, 255, 0.5)',
	},
	'&:not(:last-child)': {
		borderBottom: (t) => `solid 1px ${t.colors.onahau}`,
	},
}

export const popperItemText = {
	m: 0,
	p: 0,
	fontSize: 1,
	lineHeight: 1.57,
	color: 'smalt',
}

export const selectIcon = {
	width: 0,
	height: 0,
	borderStyle: 'solid',
	borderWidth: '8px 6px 0 6px',
	borderColor: '#023189 transparent transparent transparent',
}
