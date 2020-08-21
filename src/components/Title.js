/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useConfig } from 'docz'

export const Title = ({ children }) => {
	const { themeConfig } = useConfig()

	return (
		<h1 data-ignore-menu="true" sx={themeConfig.styles.h1}>
			{children}
		</h1>
	)
}
