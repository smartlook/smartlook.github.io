/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useDocs, useCurrentDoc } from 'docz'
import { usePlatforms } from 'hooks'
import { get } from 'lodash/fp'

import scrollTo from 'scroll-to-element'

import * as styles from './styles'

const getHeadings = (route, docs) => {
	const doc = docs.find((doc) => doc.route === route)
	const headings = get('headings', doc)
	return headings ?? []
}

const getCurrentHash = () => {
	if (typeof window === 'undefined') {
		return ''
	}
	return window.location ? decodeURI(window.location.hash) : ''
}

const SCROLL_TO_OFFSET = -100

export const NavLink = React.forwardRef(({ item, ...props }, ref) => {
	const docs = useDocs()
	const current = useCurrentDoc()
	const { currentPlatform } = usePlatforms()

	const [currentHash, setCurrentHash] = React.useState(getCurrentHash())

	if (item.hidden) {
		return null
	}

	const to = item.route
	const headings = docs && getHeadings(to, docs)
	const isCurrent = item.route === current.route
	const showHeadings = isCurrent && headings && headings.length > 0

	const handleHeadingClick = (e) => {
		const slug = e.target.dataset.slug
		const elem = document.querySelector(`#${slug}`)

		if (typeof window !== 'undefined') {
			const { location } = window

			const path = `${location.protocol}//${location.host}${location.pathname}?platfrom=${currentPlatform}#${slug}`

			window.history.pushState({ path }, '', path)
		}

		setCurrentHash(getCurrentHash())

		scrollTo(elem, {
			offset: SCROLL_TO_OFFSET,
		})
	}

	return (
		<React.Fragment>
			<Link
				{...props}
				to={`${to}?platform=${currentPlatform}`}
				sx={styles.link({ isCurrent })}
				activeClassName="active"
				ref={ref}
			/>
			{showHeadings &&
				headings.map((heading) => (
					<span
						key={heading.slug}
						to={`${to}?platform=${currentPlatform}#${heading.slug}`}
						sx={styles.smallLink}
						data-slug={heading.slug}
						className={currentHash === `#${heading.slug}` ? 'active' : ''}
						onClick={handleHeadingClick}
					>
						{heading.value}
					</span>
				))}
		</React.Fragment>
	)
})
