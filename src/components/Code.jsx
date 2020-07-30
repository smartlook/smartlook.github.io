import React from 'react'

import cx from 'classnames'

import { Code as PrismRenderer } from 'gatsby-theme-docz/src/components/Code'

import './Code.css'

export const Code = ({ snippets, shownTab, onTabChange }) => {
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
			<div className="component-code-tabs">
				{Object.keys(snippets).map((snippetLanguage) => {
					const classNames = cx('component-code-tabs__tab', {
						'component-code-tabs__tab--active': languageTab === snippetLanguage,
					})

					return (
						<span
							key={`code-tab-${snippetLanguage}`}
							data-language={snippetLanguage}
							className={classNames}
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
			<PrismRenderer className={languageTab}>
				{snippets[languageTab]}
			</PrismRenderer>
		</div>
	)
}
