/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

import { NanoPop } from 'nanopop'

import { PLATFORMS } from 'config/constants'
import { usePlatforms, useQueryString } from 'hooks'

import * as styles from './styles'

export const PlatformSelect = () => {
	const [isOpened, setIsOpened] = React.useState(false)

	const reference = React.createRef()
	const popper = React.createRef()

	const { currentPlatform, handleSetPlatform } = usePlatforms()
	const { handleSetQs } = useQueryString('platform')

	const renderSelectedPlatform = () => {
		const platform = PLATFORMS.find(
			(platform) => platform.value === currentPlatform,
		)

		if (!platform) {
			return null
		}

		return (
			<p sx={{ position: 'relative', top: '2px', ...styles.popperItemText }}>
				{platform.displayName}
			</p>
		)
	}

	const handleChange = (event) => {
		const nextPlatform = event.target.dataset.value

		handleSetPlatform(nextPlatform)
		handleSetQs(nextPlatform)
		setIsOpened(false)
	}

	React.useLayoutEffect(() => {
		if (!isOpened) {
			return
		}

		const _reference = reference.current
		const _popper = popper.current

		const nanopop = new NanoPop(_reference, _popper, {
			margin: 4,
			position: 'bottom-end',
		})

		nanopop.update()
	}, [isOpened])

	return (
		<React.Fragment>
			<div
				sx={styles.reference}
				ref={reference}
				onClick={() => setIsOpened((s) => !s)}
			>
				{renderSelectedPlatform()}
				<span sx={styles.selectIcon} />
			</div>
			<div sx={styles.popper({ isOpened })} ref={popper}>
				{PLATFORMS.filter((platform) => platform.value !== currentPlatform).map(
					(platform) => {
						return (
							<div
								sx={styles.popperItem}
								key={`platform-${platform.value}`}
								data-value={platform.value}
								onClick={handleChange}
							>
								<p sx={styles.popperItemText}>{platform.displayName}</p>
							</div>
						)
					},
				)}
			</div>
		</React.Fragment>
	)
}
