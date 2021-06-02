import React from 'react'
import SwaggerUI from 'swagger-ui-react'

import 'swagger-ui-react/swagger-ui.css'

import { spec } from './spec'

const DisableTryItOutPlugin = function () {
	return {
		statePlugins: {
			spec: {
				wrapSelectors: {
					allowTryItOutFor: () => () => false,
				},
			},
		},
		components: {
			authorizeBtn: () => () => null,
		},
	}
}

export const RestReference = () => {
	return <SwaggerUI spec={spec} plugins={[DisableTryItOutPlugin]} />
}
