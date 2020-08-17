export const main = {}

export const popper = ({ isOpened }) => ({
	position: 'fixed',
	display: isOpened ? 'block' : 'none',
})
