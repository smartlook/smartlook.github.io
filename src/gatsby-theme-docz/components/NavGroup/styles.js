export const wrapper = {
	py: 2,
	px: 3,
	borderBottom: (t) => `1px solid ${t.colors.poloBlue}`,
}

export const sublinkWrapper = ({ active }) => ({
	mt: `${active ? 3 : 0}`,
})

export const title = {
	fontSize: 2,
	fontWeight: 500,
	color: 'smalt',
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	textTransform: 'uppercase',
}
