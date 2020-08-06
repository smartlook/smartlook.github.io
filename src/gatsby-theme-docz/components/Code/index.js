/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import Highlight, { defaultProps } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'

import { usePrismTheme } from '~utils/theme'

export const Code = ({ kind, children, className: outerClassName }) => {
	const [language] = outerClassName
		? outerClassName.replace(/language-/, '').split(' ')
		: ['text']
	const theme = usePrismTheme()

	return (
		<Highlight
			{...defaultProps}
			code={children.trim()}
			language={language}
			theme={theme}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Styled.pre
					sx={{
						bg: `${kind === 'example' ? '#ffefe2' : '#e6f2ff'}`,
						borderColor: `${kind === 'example' ? '#ffe5ce' : 'onahau'}`,
					}}
					className={`${outerClassName || ''} ${className}`}
					style={{ ...style, overflowX: 'auto' }}
					data-testid="code"
				>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span
									{...getTokenProps({ token, key })}
									sx={{ display: 'inline-block' }}
								/>
							))}
						</div>
					))}
				</Styled.pre>
			)}
		</Highlight>
	)
}
