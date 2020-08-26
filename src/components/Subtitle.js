/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useConfig } from 'docz'

export const Subtitle = ({ children }) => {
	const { themeConfig } = useConfig()

	return (
		<p data-ignore-menu="true" sx={themeConfig.styles.h4}>
			{children}
		</p>
	)
}
