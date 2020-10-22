export const styles = {
	Container: {
		p: 4,
		maxWidth: 1280,
	},
	root: {
		fontSize: 2,
		color: 'lightBlue',
	},
	a: {
		color: 'persianGreen',
		textDecoration: 'underline',
		'&:hover': {
			color: '#26CBD4',
		},
	},
	code: {
		fontFamily: 'monospace',
		color: 'pink',
	},
	inlineCode: {
		fontFamily: 'monospace',
		color: 'pink',
	},
	pre: ({ kind }) => ({
		p: 3,
		mt: 0,
		variant: 'prism',
		textAlign: 'left',
		fontFamily: 'monospace',
		fontSize: 16,
		lineHeight: '24px',
		border: 'solid 1px transparent',
		borderRadius: '3px',
	}),
	table: {
		width: '100%',
		my: 4,
		borderCollapse: 'separate',
		borderSpacing: 0,
		[['th', 'td']]: {
			textAlign: 'left',
			py: '4px',
			pr: '4px',
			pl: 0,
			borderColor: 'muted',
			borderBottomStyle: 'solid',
		},
	},
	th: {
		verticalAlign: 'bottom',
		borderBottomWidth: '2px',
	},
	td: {
		verticalAlign: 'top',
		borderBottomWidth: '1px',
	},
	hr: {
		border: 0,
		borderBottom: (t) => `1px solid ${t.colors.border}`,
	},
}
