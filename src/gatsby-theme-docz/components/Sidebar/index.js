/** @jsx jsx */

/** @jsxFrag React.Fragment */

import React from 'react'
import { Global } from '@emotion/core'
import { jsx, Box } from 'theme-ui'
import { useMenus, useCurrentDoc } from 'docz'

import * as styles from './styles'
import { NavLink } from '../NavLink'
import { NavGroup } from '../NavGroup'

export const Sidebar = React.forwardRef((props, ref) => {
	const menus = useMenus()
	const currentDoc = useCurrentDoc()
	const currentDocRef = React.useRef()

	React.useEffect(() => {
		if (ref.current && currentDocRef.current) {
			ref.current.scrollTo(0, currentDocRef.current.offsetTop)
		}
	}, [])

	return (
		<>
			<Box onClick={props.onClick} sx={styles.overlay(props)}>
				{props.open && <Global styles={styles.global} />}
			</Box>
			<Box ref={ref} sx={styles.wrapper(props)}>
				{menus &&
					menus.map((menu) => {
						if (!menu.route)
							return <NavGroup key={menu.id} item={menu} sidebarRef={ref} />
						if (menu.route === currentDoc.route) {
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
			</Box>
		</>
	)
})
