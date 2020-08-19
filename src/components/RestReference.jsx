import React from 'react'
import SwaggerUI from 'swagger-ui-react'

import 'swagger-ui-react/swagger-ui.css'

const spec = {
	openapi: '3.0.0',
	info: {
		title: 'Public API',
		version: '1.0.0',
	},
	servers: [
		{
			url: 'https://public-api.dev.smartlook.com',
			description: 'Local development',
		},
	],
	paths: {
		'/status': {
			get: {
				responses: {
					default: {
						description: 'Unknown',
					},
				},
				operationId: 'statusGet',
			},
		},
		'/api/v1/events': {
			get: {
				responses: {
					'200': {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										events: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
													},
													name: {
														type: 'string',
													},
													categoryId: {
														type: 'string',
													},
													categoryName: {
														type: 'string',
													},
													_links: {
														type: 'object',
														properties: {
															detail: {
																type: 'string',
															},
														},
														additionalProperties: false,
													},
												},
												additionalProperties: false,
											},
										},
										totalCount: {
											type: 'number',
										},
										pagination: {
											type: 'object',
											properties: {
												before: {
													type: 'string',
												},
												after: {
													type: 'string',
												},
											},
											additionalProperties: false,
										},
										_links: {
											type: 'object',
											properties: {
												nextPage: {
													type: 'string',
												},
												previousPage: {
													type: 'string',
												},
											},
											additionalProperties: false,
										},
									},
									additionalProperties: false,
								},
							},
						},
					},
				},
				tags: ['events'],
				parameters: [
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'before',
						required: false,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'after',
						required: false,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'categoryId',
						required: false,
					},
				],
				operationId: 'getEventsList',
			},
		},
		'/api/v1/events/{eventOid}': {
			get: {
				responses: {
					'200': {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										event: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
												},
												name: {
													type: 'string',
												},
												categoryId: {
													type: 'string',
												},
												categoryName: {
													type: 'string',
												},
												totalOccurence: {
													type: 'number',
												},
												uniqueVisitors: {
													type: 'number',
												},
												newVisitors: {
													type: 'number',
												},
												averageOccurencePerVisitor: {
													type: 'number',
												},
												occurenceHistogram: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															date: {
																type: 'string',
															},
															occurenceCount: {
																type: 'number',
															},
															uniqueVisitorsCount: {
																type: 'number',
															},
														},
														additionalProperties: false,
													},
												},
												_links: {
													type: 'object',
													properties: {
														visitors: {
															type: 'string',
														},
													},
													additionalProperties: false,
												},
											},
											additionalProperties: false,
										},
									},
									additionalProperties: false,
								},
							},
						},
					},
				},
				tags: ['events'],
				parameters: [
					{
						in: 'path',
						schema: {
							type: 'string',
						},
						name: 'eventOid',
						required: true,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'dateFrom',
						required: true,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'dateTo',
						required: true,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'occurenceHistogramInterval',
						required: false,
					},
				],
				operationId: 'getEventDetail',
			},
		},
		'/api/v1/events/{eventOid}/visitors': {
			get: {
				responses: {
					'200': {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										visitors: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
													},
													identification: {
														type: 'object',
														properties: {
															uid: {
																type: 'string',
															},
															properties: {
																type: 'array',
																items: {
																	$ref: '#/components/schemas/AnyValue',
																},
															},
														},
														additionalProperties: false,
													},
													firstSeen: {
														type: 'string',
													},
													lastSeen: {
														type: 'string',
													},
													numberOfVisits: {
														type: 'number',
													},
												},
												additionalProperties: false,
											},
										},
									},
									additionalProperties: false,
								},
							},
						},
					},
				},
				tags: ['events'],
				parameters: [
					{
						in: 'path',
						schema: {
							type: 'string',
						},
						name: 'eventOid',
						required: true,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'dateFrom',
						required: true,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'dateTo',
						required: true,
					},
				],
				operationId: 'getEventVisitors',
			},
		},
		'/api/v1/visitors/{visitorId}': {
			get: {
				responses: {
					'200': {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										visitor: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
												},
												identification: {
													type: 'object',
													properties: {
														uid: {
															type: 'string',
														},
														properties: {
															type: 'array',
															items: {
																$ref: '#/components/schemas/AnyValue',
															},
														},
													},
													additionalProperties: false,
												},
												firstSeen: {
													type: 'string',
												},
												lastSeen: {
													type: 'string',
												},
												numberOfVisits: {
													type: 'number',
												},
												numberOfSessions: {
													type: 'number',
												},
												numberOfEvents: {
													type: 'number',
												},
												_links: {
													type: 'object',
													properties: {
														sessions: {
															type: 'string',
														},
													},
													additionalProperties: false,
												},
											},
											additionalProperties: false,
										},
									},
									additionalProperties: false,
								},
							},
						},
					},
				},
				tags: ['visitors'],
				parameters: [
					{
						in: 'path',
						schema: {
							type: 'string',
						},
						name: 'visitorId',
						required: true,
					},
				],
				operationId: 'getVisitorDetails',
			},
		},
		'/api/v1/visitors/{visitorId}/sessions': {
			get: {
				responses: {
					'200': {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										totalCount: {
											type: 'number',
										},
										pagination: {
											type: 'object',
											properties: {
												before: {
													$ref: '#/components/schemas/AnyValue',
												},
												after: {
													$ref: '#/components/schemas/AnyValue',
												},
											},
											additionalProperties: false,
										},
										sessions: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
													},
													visitorId: {
														type: 'string',
													},
													identification: {
														type: 'object',
														properties: {
															uid: {
																type: 'string',
															},
															properties: {
																$ref: '#/components/schemas/AnyValue',
															},
															visitorIp: {
																type: 'string',
															},
															browser: {
																type: 'object',
																properties: {
																	name: {
																		type: 'string',
																	},
																	code: {
																		type: 'string',
																	},
																	userAgent: {
																		type: 'string',
																	},
																},
																additionalProperties: false,
															},
															platform: {
																type: 'object',
																properties: {
																	name: {
																		type: 'string',
																	},
																	operatingSystem: {
																		type: 'string',
																	},
																	code: {
																		type: 'string',
																	},
																},
																additionalProperties: false,
															},
															country: {
																type: 'object',
																properties: {
																	name: {
																		type: 'string',
																	},
																	code: {
																		type: 'string',
																	},
																	region: {
																		type: 'string',
																	},
																	city: {
																		type: 'string',
																	},
																},
																additionalProperties: false,
															},
															device: {
																type: 'object',
																properties: {
																	type: {
																		type: 'string',
																	},
																	orientation: {
																		type: 'string',
																	},
																	width: {
																		type: 'number',
																	},
																	height: {
																		type: 'number',
																	},
																},
																additionalProperties: false,
															},
														},
														additionalProperties: false,
													},
													duration: {
														type: 'number',
													},
													startedAt: {
														type: 'string',
													},
													endedAt: {
														type: 'string',
													},
													referrer: {
														type: 'string',
													},
													landingPage: {
														type: 'string',
													},
													exitPage: {
														type: 'string',
													},
													notes: {
														type: 'array',
														items: {
															type: 'object',
															properties: {
																id: {
																	type: 'string',
																},
																time: {
																	type: 'number',
																},
																text: {
																	type: 'string',
																},
															},
															additionalProperties: false,
														},
													},
													domain: {
														type: 'string',
													},
													protocol: {
														type: 'string',
													},
													dashboardURL: {
														type: 'string',
													},
												},
												additionalProperties: false,
											},
										},
										_links: {
											type: 'object',
											properties: {
												nextPage: {
													type: 'string',
												},
												previousPage: {
													type: 'string',
												},
											},
											additionalProperties: false,
										},
									},
									additionalProperties: false,
								},
							},
						},
					},
				},
				tags: ['visitors'],
				parameters: [
					{
						in: 'path',
						schema: {
							type: 'string',
						},
						name: 'visitorId',
						required: true,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'before',
						required: false,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'after',
						required: false,
					},
					{
						in: 'query',
						schema: {
							type: 'number',
						},
						name: 'limit',
						required: false,
					},
				],
				operationId: 'getVisitorSessions',
			},
		},
		'/api/v1/statistics': {
			get: {
				responses: {
					'200': {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										projectUsage: {
											type: 'number',
										},
										endpointsUsage: {
											type: 'object',
											properties: {},
											additionalProperties: true,
										},
									},
									additionalProperties: false,
								},
							},
						},
					},
				},
				tags: ['system'],
				parameters: [],
				operationId: 'getApiStats',
			},
		},
	},
	components: {
		schemas: {
			AnyValue: {
				description:
					'Can be any value - string, number, boolean, array or object.',
				nullable: true,
			},
		},
		securitySchemes: {
			BearerAuth: {
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'jwt',
			},
		},
	},
}

export const RestReference = () => {
	return <SwaggerUI spec={spec} showCommonExtensions={true} />
}
