export const styles = {
	Container: {
		p: 4,
		maxWidth: 1280,
	},
	root: {
		fontSize: 3,
		color: 'lightBlue',
	},
	a: {
		color: 'persianGreen',
		textDecoration: 'underline',
		'&:hover': {
			color: 'aquaBlue',
		},
	},
	h1: {
		fontSize: 6,
	},
	h2: {
		fontSize: 5,
	},
	h3: {
		fontSize: 4,
	},
	h4: {
		fontSize: 3,
	},
	h5: {
		fontSize: 2,
	},
	h6: {
		fontSize: 1,
	},
	li: {
		marginBottom: 1,
	},
	blockquote: {
		my: 4,
		mx: 0,
		py: 3,
		px: 4,
		bg: 'blockquote.bg',
		borderLeft: (t) => `5px solid ${t.colors.blockquote.border}`,
		color: 'blockquote.color',
		fontStyle: 'italic',
		'> p': {
			m: 0,
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
	pre: {
		p: 4,
		variant: 'prism',
		textAlign: 'left',
		fontFamily: 'monospace',
		fontSize: 16,
		lineHeight: '24px',
		border: (t) => `solid 1px ${t.colors.onahau}`,
		borderTop: 'none',
		borderRadius: '3px',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
	},
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
