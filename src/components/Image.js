import React from 'react'

import { useVisibility } from 'hooks'

export const Image = ({ src, alt, visibleOn, invisibleOn, ...rest }) => {
	const { match } = useVisibility(visibleOn, invisibleOn)

	if (!match) {
		return null
	}

	return <img src={src} alt={alt} {...rest} />
}
