/** @jsx jsx*/

import { jsx } from 'theme-ui'
import MDX from '@mdx-js/runtime'

import { useVisibility } from 'hooks'
import { useRuntimeComponents } from './useRuntimeComponents'

import * as styles from './styles'

export const TextBlock = ({ visibleOn, invisibleOn, kind, children }) => {
	const { match } = useVisibility(visibleOn, invisibleOn)
	const components = useRuntimeComponents()

	if (!match) {
		return null
	}

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

	return (
		<div sx={getStyles(kind)}>
			<MDX components={components}>{children}</MDX>
		</div>
	)
}
