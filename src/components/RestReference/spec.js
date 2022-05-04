export const spec = {
	openapi: '3.0.0',
	info: {
		title: 'Smartlook REST API',
		version: '1.0.1',
	},
	servers: [
		{
			url: 'https://api.smartlook.cloud/',
			description: 'Smartlook REST API host',
		},
	],
	paths: {
		'/v1.0/status': {
			get: {
				responses: {
					200: {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										ok: {
											type: 'boolean',
										},
										version: {
											type: 'string',
										},
									},
									additionalProperties: false,
								},
							},
						},
					},
				},
				parameters: [],
				operationId: 'status',
			},
		},
		'/api/v1/events': {
			get: {
				responses: {
					200: {
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
															eventVisitors: {
																type: 'string',
															},
															event: {
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
							type: 'number',
						},
						name: 'limit',
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
		'/api/v1/events/{eventId}': {
			get: {
				responses: {
					200: {
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
												totalOccurrence: {
													type: 'number',
												},
												uniqueVisitors: {
													type: 'number',
												},
												newVisitors: {
													type: 'number',
												},
												averageOccurrencePerVisitor: {
													type: 'number',
												},
												occurrenceHistogram: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															date: {
																type: 'string',
															},
															occurrenceCount: {
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
														eventVisitors: {
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
						name: 'eventId',
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
						name: 'occurrenceHistogramInterval',
						required: false,
					},
				],
				operationId: 'getEventDetail',
			},
		},
		'/api/v1/events/{eventId}/visitors': {
			get: {
				responses: {
					200: {
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
													eventMatchedCount: {
														type: 'number',
													},
													_links: {
														type: 'object',
														properties: {
															visitor: {
																type: 'string',
															},
															visitorSessions: {
																type: 'string',
															},
															visitorEvents: {
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
						name: 'eventId',
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
		'/api/v1/funnels': {
			get: {
				responses: {
					200: {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										totalCount: {
											type: 'number',
										},
										funnels: {
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
																_links: {
																	type: 'object',
																	properties: {
																		event: {
																			type: 'string',
																		},
																	},
																	additionalProperties: false,
																},
															},
															additionalProperties: false,
														},
													},
													_links: {
														type: 'object',
														properties: {
															funnel: {
																type: 'string',
															},
														},
														additionalProperties: false,
													},
												},
												additionalProperties: false,
											},
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
				tags: ['funnel'],
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
							type: 'number',
						},
						name: 'limit',
						required: false,
					},
				],
				operationId: 'getFunnelsList',
			},
		},
		'/api/v1/funnels/{funnelId}': {
			get: {
				responses: {
					200: {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										computation: {
											type: 'object',
											properties: {
												isFinished: {
													type: 'boolean',
												},
												finishedProgress: {
													type: 'number',
												},
												nextAttemptDelay: {
													type: 'number',
												},
											},
											additionalProperties: false,
										},
										funnel: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
												},
												name: {
													type: 'string',
												},
												createdAt: {
													type: 'string',
												},
												updatedAt: {
													type: 'string',
												},
												conversionRate: {
													type: 'number',
												},
												steps: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															visitorsCount: {
																type: 'number',
															},
															event: {
																type: 'object',
																properties: {
																	step: {
																		type: 'number',
																	},
																	id: {
																		type: 'string',
																	},
																	eventName: {
																		type: 'string',
																	},
																	_links: {
																		type: 'object',
																		properties: {
																			event: {
																				type: 'string',
																			},
																		},
																		additionalProperties: false,
																	},
																},
																additionalProperties: false,
															},
															percentFromPreviousStep: {
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
									additionalProperties: false,
								},
							},
						},
					},
				},
				tags: ['funnel'],
				parameters: [
					{
						in: 'path',
						schema: {
							type: 'string',
						},
						name: 'funnelId',
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
							type: 'boolean',
						},
						name: 'waitForFinish',
						required: false,
					},
				],
				operationId: 'getFunnelDetail',
			},
		},
		'/api/v1/visitors/{visitorId}': {
			get: {
				responses: {
					200: {
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
														visitorSessions: {
															type: 'string',
														},
														visitorEvents: {
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
			delete: {
				responses: {
					200: {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										deletedItems: {
											type: 'number',
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
				operationId: 'deleteVisitor',
			},
		},
		'/api/v1/visitors/{visitorId}/sessions': {
			get: {
				responses: {
					200: {
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
													_links: {
														type: 'object',
														properties: {
															visitor: {
																type: 'string',
															},
															sessionEvents: {
																type: 'string',
															},
														},
														additionalProperties: false,
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
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'sort',
						required: false,
					},
				],
				operationId: 'getVisitorSessions',
			},
		},
		'/api/v1/visitors/{visitorId}/events': {
			get: {
				responses: {
					200: {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
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
										events: {
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
													sessionId: {
														type: 'string',
													},
													properties: {
														type: 'array',
														items: {
															type: 'object',
															properties: {
																name: {
																	type: 'string',
																},
																type: {
																	type: 'string',
																},
																value: {
																	type: 'string',
																},
															},
															additionalProperties: false,
														},
													},
													duration: {
														type: 'number',
													},
													startedAt: {
														type: 'string',
													},
													pageUrl: {
														type: 'string',
													},
													type: {
														type: 'string',
													},
													value: {
														$ref: '#/components/schemas/AnyValue',
													},
													sourceType: {
														type: 'string',
													},
													eventName: {
														type: 'string',
													},
													selector: {
														type: 'string',
													},
													_links: {
														type: 'object',
														properties: {
															visitor: {
																type: 'string',
															},
															eventVisitors: {
																type: 'string',
															},
															event: {
																type: 'string',
															},
														},
														additionalProperties: false,
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
						name: 'dateFrom',
						required: false,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'dateTo',
						required: false,
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'eventTypes',
						required: false,
						description:
							'What types of events should be returned in the response (values separated by ","). Types of events are: click, url, error, rage_click, custom, focus',
					},
					{
						in: 'query',
						schema: {
							type: 'string',
						},
						name: 'sessionId',
						required: false,
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
				operationId: 'getVisitorEvents',
			},
		},
		'/api/v1/visitors/search': {
			post: {
				responses: {
					200: {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										totalVisitorsCount: {
											type: 'number',
										},
										totalSessionsCount: {
											type: 'number',
										},
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
													numberOfSessions: {
														type: 'number',
													},
													numberOfEvents: {
														type: 'number',
													},
													_links: {
														type: 'object',
														properties: {
															visitorSessions: {
																type: 'string',
															},
															visitorEvents: {
																type: 'string',
															},
														},
														additionalProperties: false,
													},
												},
												additionalProperties: false,
											},
										},
										pagination: {
											type: 'object',
											properties: {
												after: {
													$ref: '#/components/schemas/AnyValue',
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
				parameters: [],
				operationId: 'searchVisitors',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									filters: {
										type: 'array',
										items: {
											type: 'object',
											properties: {
												name: {
													type: 'string',
												},
												value: {
													oneOf: [
														{
															type: 'number',
														},
														{
															type: 'string',
														},
													],
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
		},
		'/api/v1/visitors': {
			delete: {
				responses: {
					200: {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										deletedItems: {
											type: 'number',
										},
									},
									additionalProperties: false,
								},
							},
						},
					},
				},
				tags: ['visitors'],
				parameters: [],
				operationId: 'deleteVisitors',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									uids: {
										type: 'array',
										items: {
											type: 'string',
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
		},
		'/api/v1/statistics': {
			get: {
				responses: {
					200: {
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
		'/api/v1/me': {
			get: {
				responses: {
					200: {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
									type: 'object',
									properties: {
										organizationId: {
											type: 'string',
										},
										organizationName: {
											type: 'string',
										},
										projectId: {
											type: 'string',
										},
										projectName: {
											type: 'string',
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
				operationId: 'getMe',
			},
		},
		'/api/v1/sessions/{sessionId}': {
			get: {
				responses: {
					200: {
						description: 'Success',
						content: {
							'application/json': {
								schema: {
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
										_links: {
											type: 'object',
											properties: {
												visitor: {
													type: 'string',
												},
												sessionEvents: {
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
				tags: ['session'],
				parameters: [
					{
						in: 'path',
						schema: {
							type: 'string',
						},
						name: 'sessionId',
						required: true,
					},
				],
				operationId: 'getSessionDetail',
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
			},
		},
	},
}
