import React from 'react'

import { Code } from './Code'

import { PLATFORMS } from 'config/constants'
import { usePlatforms } from 'hooks'

export const CodeBlock = ({ kind, snippets }) => {
	const {
		currentPlatform,
		selectedLanguages,
		handleSetSelectedLanguages,
	} = usePlatforms()

	const snippet = snippets[currentPlatform]

	const [shownTab, setShownTab] = React.useState()

	React.useEffect(() => {
		if (selectedLanguages && selectedLanguages[currentPlatform]) {
			setShownTab(selectedLanguages[currentPlatform])
			return
		}

		setShownTab(findTab())
	}, [currentPlatform, selectedLanguages])

	const findTab = () => {
		const platformDefaultLanguage = PLATFORMS.find(
			(platform) => platform.value === currentPlatform,
		).defaultLanguage

		if (!snippet) {
			return platformDefaultLanguage
		}

		const snippetLanguages = Object.keys(snippets[currentPlatform])

		if (!snippetLanguages.includes(platformDefaultLanguage)) {
			return snippetLanguages[0]
		}

		return platformDefaultLanguage
	}

	const handleTabChange = (tab) => {
		handleSetSelectedLanguages({
			[currentPlatform]: tab,
		})
	}

	if (!snippet || !snippet[shownTab]) {
		return null
	}

	return (
		<Code
			kind={kind}
			snippets={snippet}
			shownTab={shownTab}
			onTabChange={handleTabChange}
		/>
	)
}
