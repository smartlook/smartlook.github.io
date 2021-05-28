/** @jsx jsx*/

import { jsx } from 'theme-ui'

import { useVisibility } from 'hooks'

import * as styles from './TextBlock/styles'

export const Alert = ({ kind = 'note', visibleOn, invisibleOn, children }) => {
	const { match } = useVisibility(visibleOn, invisibleOn)

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

	if (!match) {
		return null
	}

	return (
		<p sx={getStyles(kind)} visibleOn={visibleOn} invisibleOn={invisibleOn}>
			{children}
		</p>
	)
}
