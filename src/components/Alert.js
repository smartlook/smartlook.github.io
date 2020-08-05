/** @jsx jsx*/

import { jsx } from 'theme-ui'

import { usePlatforms } from 'hooks'

import * as styles from './TextBlock/styles'

const getMatch = (items, matchTo) =>
	items
		.split(',')
		.map((i) => i.trim())
		.includes(matchTo)

export const Alert = ({ kind = 'note', visibleOn, invisibleOn, children }) => {
	const { currentPlatform } = usePlatforms()

	const getStyles = (kind) => {
		switch (kind) {
			case 'note':
				return styles.note

			case 'important':
				return styles.important

			case 'example':
				return styles.example

			default:
				return undefined
		}
	}

	let isMatch = true

	if (visibleOn !== undefined) {
		isMatch = getMatch(visibleOn, currentPlatform)
	}

	if (invisibleOn !== undefined) {
		isMatch = !getMatch(invisibleOn, currentPlatform)
	}

	if (!isMatch) {
		return null
	}

	return (
		<p sx={getStyles(kind)} visibleOn={visibleOn} invisibleOn={invisibleOn}>
			{children}
		</p>
	)
}
