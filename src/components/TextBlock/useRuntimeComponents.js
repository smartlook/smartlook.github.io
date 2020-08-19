import React from 'react'

import { slug } from 'github-slugger'
import { useComponents } from 'docz'

import { Code } from '../Code'
import { CodeBlock } from '../CodeBlock'
import { Link } from '../Link'

const transformToLinkId = (link) => slug(link)

export function useRuntimeComponents() {
	const themeComponents = useComponents()

	return React.useMemo(() => {
		return {
			...themeComponents,
			Link,
			Code,
			CodeBlock,
			h1: (props) => {
				return (
					<themeComponents.h1 id={transformToLinkId(props.children)}>
						{props.children}
					</themeComponents.h1>
				)
			},
			h2: (props) => {
				return (
					<themeComponents.h2 id={transformToLinkId(props.children)}>
						{props.children}
					</themeComponents.h2>
				)
			},
			h3: (props) => {
				return (
					<themeComponents.h3 id={transformToLinkId(props.children)}>
						{props.children}
					</themeComponents.h3>
				)
			},
		}
	}, [themeComponents])
}
