/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

import { reposition } from 'nanopop'

import { PLATFORMS } from 'config/constants'
import { usePlatforms, useQueryString } from 'hooks'
import { useCurrentDoc } from 'docz'

import * as styles from './styles'

export const PlatformSelect = (props) => {
	const doc = useCurrentDoc()
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

		return <p sx={styles.popperItemText}>{platform.displayName}</p>
	}

	const handleChange = (event) => {
		const nextPlatform = event.target.dataset.value

		handleSetPlatform(nextPlatform)
		handleSetQs(nextPlatform)
		setIsOpened(false)
	}

	const handleClickOutside = React.useCallback(
		(e) => {
			if (
				popper.current?.contains(e.target) ||
				reference.current?.contains(e.target)
			) {
				return
			}

			setIsOpened(false)
		},
		[popper, reference, setIsOpened],
	)

	React.useLayoutEffect(() => {
		if (isOpened) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		const _reference = reference.current
		const _popper = popper.current

		if (_reference && _popper) {
			reposition(_reference, _popper, {
				margin: 4,
				position: 'bottom-end',
			})

			return () => {
				document.removeEventListener('mousedown', handleClickOutside)
			}
		}
	}, [handleClickOutside, isOpened, popper, reference])

	if (
		(doc.showPlatformSelect ?? props.defaultIsVisible) ||
		props.forceVisible
	) {
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
					{PLATFORMS.filter(
						(platform) => platform.value !== currentPlatform,
					).map((platform) => {
						return (
							<div
								sx={styles.popperItem}
								key={`platform-${platform.value}`}
								data-value={platform.value}
								onClick={handleChange}
							>
								<p sx={styles.popperItemText} data-value={platform.value}>
									{platform.displayName}
								</p>
							</div>
						)
					})}
				</div>
			</React.Fragment>
		)
	} else {
		return null
	}
}
