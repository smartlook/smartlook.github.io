import { media } from '~theme/breakpoints'

export const global = {
	body: {
		overflow: 'hidden',
	},
}

const HEADER_HEIGHT = 81

export const overlay = ({ open }) => ({
	zIndex: 999,
	position: 'fixed',
	top: HEADER_HEIGHT,
	right: 0,
	bottom: 0,
	left: 0,
	background: 'rgba(0,0,0,0.6)',
	transition: 'all .2s ease-out',
	visibility: open ? 'visible' : 'hidden',
	opacity: open ? 1 : 0,
})

export const wrapper = ({ open }) => ({
	flexDirection: 'column',
	position: 'sticky',
	top: HEADER_HEIGHT,
	zIndex: 1,
	minWidth: 0,
	maxHeight: 'calc(100vh - 81px)',
	borderRight: (t) => `1px solid ${t.colors.poloBlue}`,
	overflow: 'auto',
	WebkitOverflowScrolling: 'touch',
	bg: 'colors.white',

	[media.tablet]: {
		zIndex: 9999,
		display: 'block',
		position: 'fixed',
		top: HEADER_HEIGHT,
		left: 0,
		bottom: 0,
		width: 256,
		px: 4,
		bg: 'white',
		transition: 'transform .2s ease-out',
		transform: open ? 'translateX(0)' : 'translateX(-100%)',
	},
})
