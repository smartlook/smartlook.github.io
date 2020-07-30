// TODO: delete

import React from 'react'
import cx from 'classnames'

import { usePlatforms } from 'hooks'

import './Alert.css'

const getMatch = (items, matchTo) =>
	items
		.split(',')
		.map((i) => i.trim())
		.includes(matchTo)

export const Alert = ({ kind = 'note', visibleOn, invisibleOn, children }) => {
	const { currentPlatform } = usePlatforms()

	const classnames = cx('component-alert', {
		[`component-alert--${kind}`]: true,
	})

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
		<p className={classnames} visibleOn={visibleOn} invisibleOn={invisibleOn}>
			{children}
		</p>
	)
}
