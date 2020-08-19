import React from 'react'
import scrollTo from 'scroll-to-element'

import { PlatformsProvider } from 'context'

export const wrapRootElement = ({ element }) => {
	return <PlatformsProvider>{element}</PlatformsProvider>
}

export const onClientEntry = () => {
	require('smoothscroll-polyfill').polyfill()
}

export const onRouteUpdate = ({ location }) => {
	if (location.hash) {
		setTimeout(() => {
			scrollTo(location.hash, {
				offset: -100,
			})
		}, 0)
	}
}
