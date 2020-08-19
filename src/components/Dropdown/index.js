/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

import { NanoPop } from 'nanopop'

import * as styles from './styles'

export const Dropdown = () => {
	const [isOpened, setIsOpened] = React.useState(false)

	const reference = React.createRef()
	const popper = React.createRef()

	React.useLayoutEffect(() => {
		if (!isOpened) {
			return
		}

		const _reference = reference.current
		const _popper = popper.current

		if (_reference && _popper) {
			const nanopop = new NanoPop(_reference, _popper, {
				margin: 4,
				position: 'bottom-end',
			})

			nanopop.update()
		}
	}, [isOpened])

	return (
		<React.Fragment>
			<div ref={reference} onClick={() => setIsOpened((s) => !s)}>
				reference
			</div>
			<div sx={styles.popper({ isOpened })} ref={popper}>
				popper
			</div>
		</React.Fragment>
	)
}
