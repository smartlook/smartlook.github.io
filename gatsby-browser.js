import React from 'react'
import scrollTo from 'scroll-to-element'
import Prism from 'prism-react-renderer/prism'

import { PlatformsProvider } from 'context'

;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-kotlin')
require('prismjs/components/prism-swift')
require('prismjs/components/prism-groovy')
require('prismjs/components/prism-xml-doc')
require('prismjs/components/prism-objectivec')
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-dart')
require('prismjs/components/prism-csharp')

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
