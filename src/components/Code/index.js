/** @jsx jsx*/
import { jsx } from 'theme-ui'

import React from 'react'

import { Code as PrismRenderer } from 'gatsby-theme-docz/src/components/Code'

import * as styles from './styles'

export const Code = ({ kind, snippets, shownTab, onTabChange }) => {
	const [languageTab, setLanguageTab] = React.useState(
		shownTab ?? Object.keys(snippets)[0],
	)

	React.useEffect(() => {
		if (shownTab) {
			setLanguageTab(shownTab)
		}
	}, [shownTab])

	const handleSetLanguageTab = (e) => {
		const nextLanguageTab = e.target.getAttribute('data-language')
		setLanguageTab(nextLanguageTab)

		if (onTabChange) {
			onTabChange(nextLanguageTab)
		}
	}

	const renderTabs = () => {
		if (Object.keys(snippets).length === 1) {
			return null
		}

		return (
			<div sx={styles.main({ kind })}>
				{Object.keys(snippets).map((snippetLanguage) => {
					return (
						<span
							sx={
								languageTab === snippetLanguage
									? styles.tabActive({ kind })
									: styles.tab({ kind })
							}
							key={`code-tab-${snippetLanguage}`}
							data-language={snippetLanguage}
							onClick={handleSetLanguageTab}
						>
							{snippetLanguage}
						</span>
					)
				})}
			</div>
		)
	}

	return (
		<div>
			{renderTabs()}
			<PrismRenderer kind={kind} className={languageTab}>
				{snippets[languageTab]}
			</PrismRenderer>
		</div>
	)
}
