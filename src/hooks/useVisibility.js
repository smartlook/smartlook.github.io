import { usePlatforms } from './usePlatforms'

const getMatch = (items, matchTo) =>
	items
		.split(',')
		.map((i) => i.trim())
		.includes(matchTo)

export const useVisibility = (visibleOn, invisibleOn) => {
	const { currentPlatform } = usePlatforms()

	let match = true

	if (visibleOn !== undefined) {
		match = getMatch(visibleOn, currentPlatform)
	}

	if (invisibleOn !== undefined) {
		match = !getMatch(invisibleOn, currentPlatform)
	}

	return { match }
}
