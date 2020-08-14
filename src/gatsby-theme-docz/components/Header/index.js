/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'

import * as styles from './styles'
import { Logo } from '../Logo'

import Menu from 'react-feather/dist/icons/menu'

import { PLATFORMS } from 'config/constants'
import { usePlatforms, useQueryString } from 'hooks'

export const Header = (props) => {
	const { onOpen } = props

	const { currentPlatform, handleSetPlatform } = usePlatforms()
	const { handleSetQs } = useQueryString('platform')

	const handleChange = (event) => {
		const nextPlatform = event.target.value
		handleSetPlatform(nextPlatform)
		handleSetQs(nextPlatform)
	}

	return (
		<div sx={styles.wrapper}>
			<Box>
				<button sx={styles.menuIcon} onClick={onOpen}>
					<Menu size={25} color="#023189" />
				</button>
			</Box>
			<div sx={styles.innerContainer}>
				<Logo />
				<Flex>
					<Box sx={{ mr: 2 }}>
						<select value={currentPlatform} onChange={handleChange}>
							{PLATFORMS.map((p, i) => {
								return (
									<option key={`platform-${p.value}`} value={p.value}>
										{p.displayName}
									</option>
								)
							})}
						</select>
					</Box>
				</Flex>
			</div>
		</div>
	)
}
