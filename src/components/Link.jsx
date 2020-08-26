import React from 'react'
import qs from 'query-string'

import { Link as GatsbyRouterLink } from 'gatsby'

import { usePlatforms } from 'hooks'

export const Link = ({ to, platform, children, ...props }) => {
	const { currentPlatform } = usePlatforms()

	let nextPlatform = platform

	if (!platform) {
		nextPlatform = currentPlatform
	}

	const getLinkUrl = () => {
		return qs.stringifyUrl({
			url: to,
			query: {
				platform: nextPlatform,
			},
		})
	}

	return (
		<GatsbyRouterLink className="link" to={getLinkUrl()} {...props}>
			{children}
		</GatsbyRouterLink>
	)
}
