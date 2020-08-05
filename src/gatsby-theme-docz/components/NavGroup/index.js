/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { useCurrentDoc } from 'docz'

import * as styles from './styles'
import { NavLink } from '../NavLink'

export const NavGroup = ({ item, sidebarRef }) => {
	const currentDoc = useCurrentDoc()
	const currentDocRef = React.useRef()
	const { name, menu } = item
	const [subheadingsVisible, setShowsubheadings] = React.useState(
		currentDoc.menu === name,
	)
	const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible)
	React.useEffect(() => {
		if (sidebarRef.current && currentDocRef.current) {
			sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop)
		}
	}, [])
	return (
		<div sx={styles.wrapper} data-testid="nav-group">
			<div sx={styles.title} onClick={toggleSubheadings}>
				{item.name}
			</div>
			<div
				sx={styles.sublinkWrapper({ active: subheadingsVisible })}
				data-testid="nav-group-links"
			>
				{menu &&
					subheadingsVisible &&
					menu.map((menu) => {
						if (currentDoc.route === menu.route) {
							return (
								<NavLink key={menu.id} item={menu} ref={currentDocRef}>
									{menu.name}
								</NavLink>
							)
						}
						return (
							<NavLink key={menu.id} item={menu}>
								{menu.name}
							</NavLink>
						)
					})}
			</div>
		</div>
	)
}
