/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useDocs, useCurrentDoc } from 'docz'
import { usePlatforms } from 'hooks'
import { get } from 'lodash/fp'

import scrollTo from 'scroll-to-element'

import * as styles from './styles'

const getCurrentHash = () => {
	if (typeof window === 'undefined') {
		return ''
	}
	return window.location ? decodeURI(window.location.hash) : ''
}

const getHeadings = () => {
	const nodeList = document.querySelectorAll('h1, h2')
	const headings = [...nodeList].map((node) => {
		return {
			value: node.innerText,
			slug: node.innerText.replace(/\s+/g, '-').toLowerCase(),
		}
	})

	return headings
}

const SCROLL_TO_OFFSET = -100

export const NavLink = React.forwardRef(({ item, ...props }, ref) => {
	const current = useCurrentDoc()
	const { currentPlatform } = usePlatforms()

	const [currentHash, setCurrentHash] = React.useState(getCurrentHash())
	const [headings, setHeadings] = React.useState([])

	const to = item.route
	const isCurrent = item.route === current.route
	const showHeadings = isCurrent && headings && headings.length > 0

	React.useEffect(() => {
		setHeadings(getHeadings())
	}, [])

	React.useEffect(() => {
		setHeadings(getHeadings())
	}, [isCurrent, currentPlatform])

	const handleHeadingClick = (e) => {
		const slug = e.target.dataset.slug
		const elem = document.querySelector(`#${slug}`)

		if (typeof window !== 'undefined') {
			const { location } = window

			const path = `${location.protocol}//${location.host}${location.pathname}?platform=${currentPlatform}#${slug}`

			window.history.pushState({ path }, '', path)
		}

		setCurrentHash(getCurrentHash())

		scrollTo(elem, {
			offset: SCROLL_TO_OFFSET,
		})
	}

	if (item.hidden) {
		return null
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
