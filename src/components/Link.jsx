import React from 'react'

import { Link as GatsbyRouterLink } from 'gatsby'

import { usePlatforms } from 'hooks'

export const Link = ({ to, platform, children, ...props }) => {
	const { currentPlatform } = usePlatforms()

	let nextPlatform = platform

	if (!platform) {
		nextPlatform = currentPlatform
	}

	return (
		<GatsbyRouterLink
			className="link"
			to={`${to}?platform=${nextPlatform}`}
			{...props}
		>
			{children}
		</GatsbyRouterLink>
	)
}
