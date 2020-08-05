import React from 'react'
import { navigate } from '@reach/router'
import queryString from 'query-string'

import { DEFAULT_PLATFORM } from 'config/constants'

export const getQueryStringValue = (key, url) => {
	if (typeof window === 'undefined') {
		return undefined
	}

	return queryString.parse(url ?? window.location.search)[key]
}

export const setQueryStringValue = (key, value, url) => {
	if (typeof window === 'undefined') {
		return
	}

	const { pathname, hash, search } = window.location

	const values = queryString.parse(url ?? search)
	const nextQsValue = queryString.stringify({ ...values, [key]: value })

	navigate(pathname + `?${nextQsValue}` + hash)
}

export const useQueryString = (key) => {
	const [qs, setQs] = React.useState(
		getQueryStringValue(key) ?? DEFAULT_PLATFORM,
	)

	const handleSetQs = (nextValue) => {
		setQs(nextValue)
		setQueryStringValue(key, nextValue)
	}

	return { qs, handleSetQs }
}
