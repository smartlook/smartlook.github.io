export const link = ({ isCurrent }) => ({
	my: 2,
	py: 1,
	pl: 2,
	display: 'block',
	color: `${isCurrent ? 'indigo' : 'smalt'}`,
	borderLeft: `${isCurrent ? '4px solid #7904a3' : '4px solid transparent'}`,
	textDecoration: 'none',
	fontSize: 1,
	'&:hover': {
		bg: 'rgba(206, 230, 255, 0.5)',
	},
	'&.active': {
		color: 'black',
	},
	'&:first-child': {
		mt: 0,
	},
	borderRadius: '2px',
	bg: `${isCurrent ? 'rgba(206, 230, 255, 0.5)' : 'transparent'}`,
})

export const smallLink = {
	my: 2,
	ml: 3,
	display: 'block',
	fontSize: 1,
	position: 'relative',
	color: 'smalt',
	textDecoration: 'none',
	'&.active': {
		color: 'indigo',
	},
	'&.active::before': {
		content: '""',
		position: 'absolute',
		display: 'block',
		top: '2px',
		left: -2,
		height: '1rem',
		backgroundColor: 'indigo',
		transition: 'width 200ms ease 0s',
		width: '2px',
		borderRadius: 1,
	},
}
