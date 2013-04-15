// data returned from:
// http://api.edmunds.com/v1/api/vehicle/modelrepository/findmodelsbymake?make=acura&api_key=sbzh2xtvh99h73pzr398c2fc&fmt=json

{
	"modelHolder": [
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_SLX",
			"name": "SLX",
			"niceName": "slx",
			"modelLinkCode": "M030006",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/slx/1999",
					"id": "961",
					"year": "1999"
				},
				{
					"link": "/api/vehicle/acura/slx/1996",
					"id": "3288",
					"year": "1996"
				},
				{
					"link": "/api/vehicle/acura/slx/1997",
					"id": "3289",
					"year": "1997"
				},
				{
					"link": "/api/vehicle/acura/slx/1998",
					"id": "3290",
					"year": "1998"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"USE_IN_NEW": {
							"id": 0,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"NAME": {
							"id": 0,
							"name": "NAME",
							"value": "SLX"
						},
						"YEAR": {
							"id": 0,
							"name": "YEAR",
							"value": "1996"
						},
						"USE_IN_FUTURE": {
							"id": 0,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 0,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_USED": {
							"id": 0,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"MODEL_LINK_CODE": {
							"id": 0,
							"name": "MODEL_LINK_CODE",
							"value": "M030006"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 0,
							"name": "ED_MODEL_ID",
							"value": "3288"
						}
					}
				}
			},
			"categories": {
				"Vehicle Size": [
					"Midsize"
				],
				"PRIMARY_BODY_TYPE": [
					"SUV"
				],
				"Vehicle Style": [
					"4dr SUV"
				],
				"Vehicle Type": [
					"SUV"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Luxury"
				]
			},
			"publicationStates": [
				"USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 0,
						"identifier": "SUV",
						"name": "SLX SUV",
						"ruleType": "body",
						"styleIds": [
							7284
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/7284"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/7284"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_Legend",
			"name": "Legend",
			"niceName": "legend",
			"modelLinkCode": "M030003",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/legend/1993",
					"id": "3277",
					"year": "1993"
				},
				{
					"link": "/api/vehicle/acura/legend/1992",
					"id": "3276",
					"year": "1992"
				},
				{
					"link": "/api/vehicle/acura/legend/1995",
					"id": "3278",
					"year": "1995"
				},
				{
					"link": "/api/vehicle/acura/legend/1991",
					"id": "893",
					"year": "1991"
				},
				{
					"link": "/api/vehicle/acura/legend/1990",
					"id": "3275",
					"year": "1990"
				},
				{
					"link": "/api/vehicle/acura/legend/1994",
					"id": "894",
					"year": "1994"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 0,
							"name": "NAME",
							"value": "Legend"
						},
						"USE_IN_NEW": {
							"id": 0,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 0,
							"name": "YEAR",
							"value": "1995"
						},
						"USE_IN_USED": {
							"id": 0,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 0,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 0,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 0,
							"name": "MODEL_LINK_CODE",
							"value": "M030003"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 0,
							"name": "ED_MODEL_ID",
							"value": "3278"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Midsize"
				],
				"Vehicle Style": [
					"Sedan",
					"Coupe"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Luxury",
					"Performance"
				]
			},
			"publicationStates": [
				"USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 0,
						"identifier": "Sedan",
						"name": "Legend Sedan",
						"ruleType": "body",
						"styleIds": [
							18216,
							18213,
							18215
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/18215"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/18213"
						}
					},
					{
						"id": 0,
						"identifier": "Coupe",
						"name": "Legend Coupe",
						"ruleType": "body",
						"styleIds": [
							18212,
							18214
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/18214"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/18212"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_ILX",
			"name": "ILX",
			"niceName": "ilx",
			"modelLinkCode": "M030002",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/ilx/2013",
					"id": "100538929",
					"year": "2013"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "ILX"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "Y"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2013"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "N"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M030002"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100538929"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Compact"
				],
				"Vehicle Style": [
					"Sedan"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Luxury",
					"Hybrid"
				]
			},
			"publicationStates": [
				"NEW"
			],
			"subModels": {
				"NEW": [
					{
						"id": 200410778,
						"identifier": "Hybrid",
						"name": "ILX Hybrid",
						"ruleType": "fuel",
						"styleIds": [
							200419090,
							101418787
						],
						"publicationStates": [
							"NEW"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101418787"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/200419090"
						}
					},
					{
						"id": 200410779,
						"identifier": "Sedan",
						"name": "ILX Sedan",
						"ruleType": "body",
						"styleIds": [
							200419089,
							200419090,
							101418219,
							200418982,
							200418983,
							101418787
						],
						"publicationStates": [
							"NEW"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101418219"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101418219"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_RSX",
			"name": "RSX",
			"niceName": "rsx",
			"modelLinkCode": "M030002",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/rsx/2002",
					"id": "100000367",
					"year": "2002"
				},
				{
					"link": "/api/vehicle/acura/rsx/2005",
					"id": "100504943",
					"year": "2005"
				},
				{
					"link": "/api/vehicle/acura/rsx/2004",
					"id": "100503651",
					"year": "2004"
				},
				{
					"link": "/api/vehicle/acura/rsx/2003",
					"id": "100502714",
					"year": "2003"
				},
				{
					"link": "/api/vehicle/acura/rsx/2006",
					"id": "100506564",
					"year": "2006"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "RSX"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2003"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M030002"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100502714"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Compact"
				],
				"Vehicle Style": [
					"2dr Hatchback"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Hatchback",
					"Luxury",
					"Factory Tuner",
					"Performance"
				]
			},
			"publicationStates": [
				"USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 200407261,
						"identifier": "Type-S",
						"name": "RSX Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100449649
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100449649"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100449649"
						}
					},
					{
						"id": 200405867,
						"identifier": "Hatchback",
						"name": "RSX Hatchback",
						"ruleType": "body",
						"styleIds": [
							19069,
							19068,
							18973,
							18972,
							18974
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/19068"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/18972"
						}
					},
					{
						"id": 200406958,
						"identifier": "Type-S",
						"name": "RSX Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100350406
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100350406"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100350406"
						}
					},
					{
						"id": 200405868,
						"identifier": "Type-S",
						"name": "RSX Type-S",
						"ruleType": "tuner",
						"styleIds": [
							18974
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/18974"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/18974"
						}
					},
					{
						"id": 200407260,
						"identifier": "Hatchback",
						"name": "RSX Hatchback",
						"ruleType": "body",
						"styleIds": [
							100449646,
							100449647,
							100449645,
							100449649,
							100449648
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100449649"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100449645"
						}
					},
					{
						"id": 200406957,
						"identifier": "Hatchback",
						"name": "RSX Hatchback",
						"ruleType": "body",
						"styleIds": [
							100350402,
							100350403,
							100350406,
							100350404,
							100350405
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100350402"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100350402"
						}
					},
					{
						"id": 200407809,
						"identifier": "Type-S",
						"name": "RSX Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100613226
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100613226"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100613226"
						}
					},
					{
						"id": 200406200,
						"identifier": "Type-S",
						"name": "RSX Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100188147
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100188147"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100188147"
						}
					},
					{
						"id": 200407808,
						"identifier": "Hatchback",
						"name": "RSX Hatchback",
						"ruleType": "body",
						"styleIds": [
							100613223,
							100613222,
							100613226,
							100613225,
							100613224
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100613225"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100613222"
						}
					},
					{
						"id": 200406199,
						"identifier": "Hatchback",
						"name": "RSX Hatchback",
						"ruleType": "body",
						"styleIds": [
							100188148,
							100188146,
							100188147,
							100188144,
							100188145
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100188145"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100188146"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_RLX",
			"name": "RLX",
			"niceName": "rlx",
			"modelLinkCode": "M030003",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/rlx/2014",
					"id": "100539511",
					"year": "2014"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "Y"
						},
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "RLX"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2014"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "Y"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M030003"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100539511"
						}
					}
				}
			},
			"categories": {
				"Vehicle Size": [
					"Midsize"
				],
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Style": [
					"Sedan"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Luxury",
					"Hybrid"
				]
			},
			"publicationStates": [
				"PRE_PROD"
			],
			"subModels": {
				"PRE_PROD": [
					{
						"id": 200417574,
						"identifier": "Sedan",
						"name": "RLX Sedan",
						"ruleType": "body",
						"styleIds": [
							101413824
						],
						"publicationStates": [
							"PRE_PROD"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101413824"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101413824"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_TSX_Sport_Wagon",
			"name": "TSX Sport Wagon",
			"niceName": "tsxsportwagon",
			"modelLinkCode": "M110068",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/tsxsportwagon/2012",
					"id": "100537789",
					"year": "2012"
				},
				{
					"link": "/api/vehicle/acura/tsxsportwagon/2011",
					"id": "100533969",
					"year": "2011"
				},
				{
					"link": "/api/vehicle/acura/tsxsportwagon/2013",
					"id": "200440520",
					"year": "2013"
				}
			],
			"attributeGroups": {
				"RELIABILITY_RATINGS": {
					"id": -100,
					"name": "RELIABILITY_RATINGS",
					"attributes": {
						"POWERTRAIN_QUALITY_MECHANICAL": {
							"id": 0,
							"name": "POWERTRAIN_QUALITY_MECHANICAL",
							"value": "5.0"
						},
						"OVERALL_QUALITY_DESIGN": {
							"id": 0,
							"name": "OVERALL_QUALITY_DESIGN",
							"value": "5.0"
						},
						"OVERALL_QUALITY": {
							"id": 0,
							"name": "OVERALL_QUALITY",
							"value": "4.0"
						},
						"OVERALL_QUALITY_MECHANICAL": {
							"id": 0,
							"name": "OVERALL_QUALITY_MECHANICAL",
							"value": "4.0"
						},
						"POWERTRAIN_QUALITY_DESIGN": {
							"id": 0,
							"name": "POWERTRAIN_QUALITY_DESIGN",
							"value": "4.0"
						},
						"FEATURES_AND_ACCESS_QUALITY_DESIGN": {
							"id": 0,
							"name": "FEATURES_AND_ACCESS_QUALITY_DESIGN",
							"value": "5.0"
						},
						"BODY_AND_INTERIOR_QUALITY_MECHANICAL": {
							"id": 0,
							"name": "BODY_AND_INTERIOR_QUALITY_MECHANICAL",
							"value": "3.0"
						},
						"FEATURES_AND_ACCESS_QUALITY_MECHANICAL": {
							"id": 0,
							"name": "FEATURES_AND_ACCESS_QUALITY_MECHANICAL",
							"value": "3.0"
						},
						"BODY_AND_INTERIOR_QUALITY_DESIGN": {
							"id": 0,
							"name": "BODY_AND_INTERIOR_QUALITY_DESIGN",
							"value": "5.0"
						}
					}
				},
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "TSX Sport Wagon"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2011"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M110068"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100533969"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Midsize"
				],
				"Vehicle Style": [
					"Wagon"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Luxury"
				]
			},
			"publicationStates": [
				"USED",
				"NEW",
				"NEW_USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 200410326,
						"identifier": "",
						"name": "TSX Sport Wagon",
						"ruleType": "body",
						"styleIds": [
							101373067,
							101373084
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101373067"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101373067"
						}
					}
				],
				"NEW": [
					{
						"id": 200440612,
						"identifier": "",
						"name": "TSX Sport Wagon",
						"ruleType": "body",
						"styleIds": [
							200440522,
							200440521
						],
						"publicationStates": [
							"NEW"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/200440521"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/200440522"
						}
					}
				],
				"NEW_USED": [
					{
						"id": 200410688,
						"identifier": "",
						"name": "TSX Sport Wagon",
						"ruleType": "body",
						"styleIds": [
							101408398,
							101408399
						],
						"publicationStates": [
							"NEW_USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101408398"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101408398"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_RL",
			"name": "RL",
			"niceName": "rl",
			"modelLinkCode": "M030003",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/rl/2007",
					"id": "100519602",
					"year": "2007"
				},
				{
					"link": "/api/vehicle/acura/rl/1996",
					"id": "3286",
					"year": "1996"
				},
				{
					"link": "/api/vehicle/acura/rl/1998",
					"id": "3287",
					"year": "1998"
				},
				{
					"link": "/api/vehicle/acura/rl/2012",
					"id": "100524991",
					"year": "2012"
				},
				{
					"link": "/api/vehicle/acura/rl/2003",
					"id": "100502713",
					"year": "2003"
				},
				{
					"link": "/api/vehicle/acura/rl/2008",
					"id": "100523569",
					"year": "2008"
				},
				{
					"link": "/api/vehicle/acura/rl/2002",
					"id": "100000322",
					"year": "2002"
				},
				{
					"link": "/api/vehicle/acura/rl/2009",
					"id": "100525535",
					"year": "2009"
				},
				{
					"link": "/api/vehicle/acura/rl/2001",
					"id": "100000012",
					"year": "2001"
				},
				{
					"link": "/api/vehicle/acura/rl/2011",
					"id": "100534129",
					"year": "2011"
				},
				{
					"link": "/api/vehicle/acura/rl/2004",
					"id": "100502994",
					"year": "2004"
				},
				{
					"link": "/api/vehicle/acura/rl/2000",
					"id": "397",
					"year": "2000"
				},
				{
					"link": "/api/vehicle/acura/rl/2010",
					"id": "100528489",
					"year": "2010"
				},
				{
					"link": "/api/vehicle/acura/rl/1999",
					"id": "3413",
					"year": "1999"
				},
				{
					"link": "/api/vehicle/acura/rl/2006",
					"id": "100506663",
					"year": "2006"
				},
				{
					"link": "/api/vehicle/acura/rl/2005",
					"id": "100503143",
					"year": "2005"
				},
				{
					"link": "/api/vehicle/acura/rl/1997",
					"id": "3410",
					"year": "1997"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "RL"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2003"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M030003"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100502713"
						}
					}
				}
			},
			"categories": {
				"Vehicle Size": [
					"Large",
					"Midsize"
				],
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Style": [
					"Sedan"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Luxury",
					"Performance"
				]
			},
			"publicationStates": [
				"USED",
				"NEW_USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 200406198,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							100187485,
							100187484
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100187484"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100187484"
						}
					},
					{
						"id": 200405446,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							100000503,
							100000502
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100000502"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100000502"
						}
					},
					{
						"id": 200410341,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							101375608,
							101375625,
							101375607,
							101375624
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101375624"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101375607"
						}
					},
					{
						"id": 200407850,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							100634243,
							100632003
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100632003"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100632003"
						}
					},
					{
						"id": 200409522,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							101183144,
							101183145,
							101183142,
							101183143
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101183145"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101183142"
						}
					},
					{
						"id": 200408326,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							100810091,
							100810111,
							100810092,
							100849107
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100810111"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100810091"
						}
					},
					{
						"id": 0,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							18386,
							18387
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/18386"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/18386"
						}
					},
					{
						"id": 200406547,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							100262255
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100262255"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100262255"
						}
					},
					{
						"id": 200409041,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							101027965,
							101027964,
							101027963,
							101027962
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101027963"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101027962"
						}
					},
					{
						"id": 200406591,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							100444153
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100444153"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100444153"
						}
					},
					{
						"id": 200405836,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							100002220,
							100002221
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100002220"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100002220"
						}
					},
					{
						"id": 200408604,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							100895916,
							100895914,
							100895915,
							100906115
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100895914"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100895914"
						}
					}
				],
				"NEW_USED": [
					{
						"id": 200408940,
						"identifier": "Sedan",
						"name": "RL Sedan",
						"ruleType": "body",
						"styleIds": [
							101413672,
							101413671,
							101413670,
							101212589
						],
						"publicationStates": [
							"NEW_USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101212589"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101212589"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_TL",
			"name": "TL",
			"niceName": "tl",
			"modelLinkCode": "M030008",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/tl/2000",
					"id": "1067",
					"year": "2000"
				},
				{
					"link": "/api/vehicle/acura/tl/2007",
					"id": "100519601",
					"year": "2007"
				},
				{
					"link": "/api/vehicle/acura/tl/2013",
					"id": "200433190",
					"year": "2013"
				},
				{
					"link": "/api/vehicle/acura/tl/2011",
					"id": "100532894",
					"year": "2011"
				},
				{
					"link": "/api/vehicle/acura/tl/2006",
					"id": "100506840",
					"year": "2006"
				},
				{
					"link": "/api/vehicle/acura/tl/2005",
					"id": "100504945",
					"year": "2005"
				},
				{
					"link": "/api/vehicle/acura/tl/2002",
					"id": "100000321",
					"year": "2002"
				},
				{
					"link": "/api/vehicle/acura/tl/1998",
					"id": "895",
					"year": "1998"
				},
				{
					"link": "/api/vehicle/acura/tl/1996",
					"id": "3291",
					"year": "1996"
				},
				{
					"link": "/api/vehicle/acura/tl/2001",
					"id": "100000013",
					"year": "2001"
				},
				{
					"link": "/api/vehicle/acura/tl/2012",
					"id": "100533455",
					"year": "2012"
				},
				{
					"link": "/api/vehicle/acura/tl/2003",
					"id": "100502606",
					"year": "2003"
				},
				{
					"link": "/api/vehicle/acura/tl/2004",
					"id": "100502993",
					"year": "2004"
				},
				{
					"link": "/api/vehicle/acura/tl/1999",
					"id": "3414",
					"year": "1999"
				},
				{
					"link": "/api/vehicle/acura/tl/2009",
					"id": "100524030",
					"year": "2009"
				},
				{
					"link": "/api/vehicle/acura/tl/2010",
					"id": "100529409",
					"year": "2010"
				},
				{
					"link": "/api/vehicle/acura/tl/1995",
					"id": "100000368",
					"year": "1995"
				},
				{
					"link": "/api/vehicle/acura/tl/1997",
					"id": "3408",
					"year": "1997"
				},
				{
					"link": "/api/vehicle/acura/tl/2008",
					"id": "100523753",
					"year": "2008"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "TL"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2001"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M030008"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100000013"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Midsize"
				],
				"Vehicle Style": [
					"Sedan"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Factory Tuner",
					"Luxury",
					"Performance"
				]
			},
			"publicationStates": [
				"USED",
				"NEW",
				"NEW_USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 200406546,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							100358524,
							100358503,
							100358502,
							100358501,
							100348411,
							100348410
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100348410"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100348410"
						}
					},
					{
						"id": 200408700,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							101083458,
							101082746,
							101082762,
							101082766,
							101082859
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101082859"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101082746"
						}
					},
					{
						"id": 200405447,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							100000505,
							100000504
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100000505"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100000504"
						}
					},
					{
						"id": 200407882,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							100655175,
							100655178,
							100655179,
							100655180,
							100655181,
							100655182
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100655175"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100655178"
						}
					},
					{
						"id": 200406088,
						"identifier": "3.2 Type-S",
						"name": "TL 3.2 Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100075090,
							100075089
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100075089"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100075089"
						}
					},
					{
						"id": 200408324,
						"identifier": "Type-S",
						"name": "TL Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100810927,
							100810926,
							100810925,
							100810928
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100810926"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100810925"
						}
					},
					{
						"id": 200408325,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							100810927,
							100810926,
							100810925,
							100810928,
							100810913,
							100810912
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100810926"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100810912"
						}
					},
					{
						"id": 200407263,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							100449883,
							100449887,
							100449886,
							100449885,
							100449884,
							100449888
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100449884"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100449884"
						}
					},
					{
						"id": 200406087,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							100075087,
							100075090,
							100075088,
							100075089
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100075088"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100075087"
						}
					},
					{
						"id": 200408661,
						"identifier": "Type-S",
						"name": "TL Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100902911,
							100902914,
							100902913,
							100902912
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100902911"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100902911"
						}
					},
					{
						"id": 0,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							1648
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/1648"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/1648"
						}
					},
					{
						"id": 200405835,
						"identifier": "3.2 Type-S",
						"name": "TL 3.2 Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100002218,
							100002219
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100002218"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100002218"
						}
					},
					{
						"id": 200409638,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							101206485,
							101206484,
							101206487,
							101206483,
							101206482,
							101206489,
							101206488,
							101206490
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101206488"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101206482"
						}
					},
					{
						"id": 200410168,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							101351629,
							101358004,
							101358005,
							101358006,
							101358007,
							101358001,
							101358002,
							101358003
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101351629"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101351629"
						}
					},
					{
						"id": 200405834,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							100002218,
							100002219,
							100002216,
							100002217
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100002216"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100002216"
						}
					},
					{
						"id": 200408662,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							100902911,
							100902910,
							100902909,
							100902914,
							100902913,
							100902912
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100902911"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100902909"
						}
					}
				],
				"NEW": [
					{
						"id": 200435572,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							200433191,
							200433194,
							200433195,
							200433192,
							200433193,
							200433196,
							200433197
						],
						"publicationStates": [
							"NEW"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/200433191"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/200433191"
						}
					}
				],
				"NEW_USED": [
					{
						"id": 200410272,
						"identifier": "Sedan",
						"name": "TL Sedan",
						"ruleType": "body",
						"styleIds": [
							101363579,
							101380913,
							101380935,
							101380912,
							101380911,
							101380925,
							101380939
						],
						"publicationStates": [
							"NEW_USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101363579"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101363579"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_TSX",
			"name": "TSX",
			"niceName": "tsx",
			"modelLinkCode": "M040048",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/tsx/2007",
					"id": "100520228",
					"year": "2007"
				},
				{
					"link": "/api/vehicle/acura/tsx/2012",
					"id": "100537769",
					"year": "2012"
				},
				{
					"link": "/api/vehicle/acura/tsx/2004",
					"id": "100503100",
					"year": "2004"
				},
				{
					"link": "/api/vehicle/acura/tsx/2008",
					"id": "100523478",
					"year": "2008"
				},
				{
					"link": "/api/vehicle/acura/tsx/2010",
					"id": "100527369",
					"year": "2010"
				},
				{
					"link": "/api/vehicle/acura/tsx/2009",
					"id": "100507581",
					"year": "2009"
				},
				{
					"link": "/api/vehicle/acura/tsx/2013",
					"id": "200437325",
					"year": "2013"
				},
				{
					"link": "/api/vehicle/acura/tsx/2006",
					"id": "100507159",
					"year": "2006"
				},
				{
					"link": "/api/vehicle/acura/tsx/2011",
					"id": "100530509",
					"year": "2011"
				},
				{
					"link": "/api/vehicle/acura/tsx/2005",
					"id": "100504944",
					"year": "2005"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "TSX"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2005"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M040048"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100504944"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Midsize",
					"Compact"
				],
				"Vehicle Style": [
					"Sedan"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Luxury",
					"Performance"
				]
			},
			"publicationStates": [
				"USED",
				"NEW",
				"NEW_USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 200407988,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							101001143,
							101001142,
							101001145,
							101001144
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101001144"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101001142"
						}
					},
					{
						"id": 200409410,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							101174006,
							101174005,
							101174004,
							101174003,
							101174002,
							101147985
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101174003"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101147985"
						}
					},
					{
						"id": 200408356,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							100826497,
							100826498,
							100826499,
							100826502
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100826499"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100826498"
						}
					},
					{
						"id": 200408583,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							100890852,
							100890849,
							100890851,
							100890850
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100890849"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100890850"
						}
					},
					{
						"id": 200407262,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							100449788,
							100449789,
							100449786,
							100449787
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100449789"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100449787"
						}
					},
					{
						"id": 200406573,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							100278145,
							100278144,
							100278147,
							100278146
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100278144"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100278144"
						}
					},
					{
						"id": 200409807,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							101369630,
							101369631,
							101369628,
							101369629,
							101356398,
							101254327
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101369629"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101254327"
						}
					},
					{
						"id": 200407943,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							100668208,
							100668209,
							100668207,
							100668206
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100668209"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100668207"
						}
					}
				],
				"NEW": [
					{
						"id": 200437408,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							200437330,
							200437328,
							200437329,
							200437327,
							200437326
						],
						"publicationStates": [
							"NEW"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/200437326"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/200437329"
						}
					}
				],
				"NEW_USED": [
					{
						"id": 200410687,
						"identifier": "Sedan",
						"name": "TSX Sedan",
						"ruleType": "body",
						"styleIds": [
							101407699,
							101407698,
							101407697,
							101407696,
							101407694,
							101407695
						],
						"publicationStates": [
							"NEW_USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101407694"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101407694"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_Vigor",
			"name": "Vigor",
			"niceName": "vigor",
			"modelLinkCode": "M030008",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/vigor/1992",
					"id": "3292",
					"year": "1992"
				},
				{
					"link": "/api/vehicle/acura/vigor/1993",
					"id": "3293",
					"year": "1993"
				},
				{
					"link": "/api/vehicle/acura/vigor/1994",
					"id": "896",
					"year": "1994"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 0,
							"name": "NAME",
							"value": "Vigor"
						},
						"USE_IN_NEW": {
							"id": 0,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 0,
							"name": "YEAR",
							"value": "1993"
						},
						"USE_IN_USED": {
							"id": 0,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 0,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 0,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 0,
							"name": "MODEL_LINK_CODE",
							"value": "M030008"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 0,
							"name": "ED_MODEL_ID",
							"value": "3293"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Midsize"
				],
				"Vehicle Style": [
					"Sedan"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Luxury"
				]
			},
			"publicationStates": [
				"USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 0,
						"identifier": "Sedan",
						"name": "Vigor Sedan",
						"ruleType": "body",
						"styleIds": [
							18176,
							18177
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/18176"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/18177"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_Integra",
			"name": "Integra",
			"niceName": "integra",
			"modelLinkCode": "M030002",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/integra/1992",
					"id": "3269",
					"year": "1992"
				},
				{
					"link": "/api/vehicle/acura/integra/1990",
					"id": "3268",
					"year": "1990"
				},
				{
					"link": "/api/vehicle/acura/integra/1995",
					"id": "3271",
					"year": "1995"
				},
				{
					"link": "/api/vehicle/acura/integra/2000",
					"id": "1080",
					"year": "2000"
				},
				{
					"link": "/api/vehicle/acura/integra/1993",
					"id": "3270",
					"year": "1993"
				},
				{
					"link": "/api/vehicle/acura/integra/2001",
					"id": "100000008",
					"year": "2001"
				},
				{
					"link": "/api/vehicle/acura/integra/1994",
					"id": "891",
					"year": "1994"
				},
				{
					"link": "/api/vehicle/acura/integra/1991",
					"id": "890",
					"year": "1991"
				},
				{
					"link": "/api/vehicle/acura/integra/1998",
					"id": "3273",
					"year": "1998"
				},
				{
					"link": "/api/vehicle/acura/integra/1999",
					"id": "3411",
					"year": "1999"
				},
				{
					"link": "/api/vehicle/acura/integra/1996",
					"id": "3272",
					"year": "1996"
				},
				{
					"link": "/api/vehicle/acura/integra/1997",
					"id": "892",
					"year": "1997"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "Integra"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2001"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M030002"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100000008"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Compact"
				],
				"Vehicle Style": [
					"Sedan",
					"2dr Hatchback"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Hatchback",
					"Factory Tuner",
					"Luxury",
					"Performance"
				]
			},
			"publicationStates": [
				"USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 0,
						"identifier": "Sedan",
						"name": "Integra Sedan",
						"ruleType": "body",
						"styleIds": [
							18184,
							18179,
							18182
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/18179"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/18184"
						}
					},
					{
						"id": 200405439,
						"identifier": "Type R",
						"name": "Integra Type R",
						"ruleType": "tuner",
						"styleIds": [
							100000493
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100000493"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100000493"
						}
					},
					{
						"id": 0,
						"identifier": "Type R",
						"name": "Integra Type R",
						"ruleType": "tuner",
						"styleIds": [
							12716
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/12716"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/12716"
						}
					},
					{
						"id": 0,
						"identifier": "Hatchback",
						"name": "Integra Hatchback",
						"ruleType": "body",
						"styleIds": [
							18178,
							18183,
							18180,
							18181
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/18178"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/18183"
						}
					},
					{
						"id": 200405440,
						"identifier": "Sedan",
						"name": "Integra Sedan",
						"ruleType": "body",
						"styleIds": [
							100000485,
							100000486,
							100000492,
							100000488,
							100000491
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100000492"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100000492"
						}
					},
					{
						"id": 200405441,
						"identifier": "Hatchback",
						"name": "Integra Hatchback",
						"ruleType": "body",
						"styleIds": [
							100000484,
							100000487,
							100000483,
							100000493,
							100000489,
							100000490
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100000490"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100000490"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_CL",
			"name": "CL",
			"niceName": "cl",
			"modelLinkCode": "M030001",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/cl/2003",
					"id": "100502607",
					"year": "2003"
				},
				{
					"link": "/api/vehicle/acura/cl/1997",
					"id": "3265",
					"year": "1997"
				},
				{
					"link": "/api/vehicle/acura/cl/1998",
					"id": "3266",
					"year": "1998"
				},
				{
					"link": "/api/vehicle/acura/cl/2001",
					"id": "100000010",
					"year": "2001"
				},
				{
					"link": "/api/vehicle/acura/cl/1999",
					"id": "960",
					"year": "1999"
				},
				{
					"link": "/api/vehicle/acura/cl/2002",
					"id": "100000456",
					"year": "2002"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "CL"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2001"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M030001"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100000010"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Midsize"
				],
				"Vehicle Style": [
					"Coupe"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Factory Tuner",
					"Luxury",
					"Performance"
				]
			},
			"publicationStates": [
				"USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 200405987,
						"identifier": "Coupe",
						"name": "CL Coupe",
						"ruleType": "body",
						"styleIds": [
							100003661,
							100003660,
							100003659,
							100003658
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100003661"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100003658"
						}
					},
					{
						"id": 200405444,
						"identifier": "Coupe",
						"name": "CL Coupe",
						"ruleType": "body",
						"styleIds": [
							100000480,
							100000481,
							100000482,
							100000479
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100000482"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100000479"
						}
					},
					{
						"id": 200406089,
						"identifier": "3.2 Type-S",
						"name": "CL 3.2 Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100075253,
							100075252,
							100075255,
							100075254
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100075253"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100075253"
						}
					},
					{
						"id": 200405986,
						"identifier": "3.2 Type-S",
						"name": "CL 3.2 Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100003661,
							100003660
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100003661"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100003660"
						}
					},
					{
						"id": 200406090,
						"identifier": "Coupe",
						"name": "CL Coupe",
						"ruleType": "body",
						"styleIds": [
							100075251,
							100075250,
							100075253,
							100075252,
							100075255,
							100075254
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100075253"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100075250"
						}
					},
					{
						"id": 0,
						"identifier": "Coupe",
						"name": "CL Coupe",
						"ruleType": "body",
						"styleIds": [
							17454,
							763,
							17455,
							761
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/17454"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/761"
						}
					},
					{
						"id": 200405443,
						"identifier": "3.2 Type-S",
						"name": "CL 3.2 Type-S",
						"ruleType": "tuner",
						"styleIds": [
							100000481
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100000481"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100000481"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_ZDX",
			"name": "ZDX",
			"niceName": "zdx",
			"modelLinkCode": "M100033",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/zdx/2013",
					"id": "200441835",
					"year": "2013"
				},
				{
					"link": "/api/vehicle/acura/zdx/2012",
					"id": "100537249",
					"year": "2012"
				},
				{
					"link": "/api/vehicle/acura/zdx/2010",
					"id": "100527650",
					"year": "2010"
				},
				{
					"link": "/api/vehicle/acura/zdx/2011",
					"id": "100534109",
					"year": "2011"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "ZDX"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2011"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M100033"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100534109"
						}
					}
				}
			},
			"categories": {
				"Crossover": [
					"Crossover"
				],
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Midsize"
				],
				"Vehicle Style": [
					"4dr Hatchback"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Crossover",
					"Hatchback",
					"Luxury"
				]
			},
			"publicationStates": [
				"USED",
				"NEW",
				"NEW_USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 200410340,
						"identifier": "Hatchback",
						"name": "ZDX Hatchback",
						"ruleType": "body",
						"styleIds": [
							101375241,
							101375230,
							101375229
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101375241"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101375229"
						}
					},
					{
						"id": 200409438,
						"identifier": "Hatchback",
						"name": "ZDX Hatchback",
						"ruleType": "body",
						"styleIds": [
							101262317,
							101162013,
							101262312
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101262312"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101162013"
						}
					}
				],
				"NEW": [
					{
						"id": 200442303,
						"identifier": "Hatchback",
						"name": "ZDX Hatchback",
						"ruleType": "body",
						"styleIds": [
							200441836
						],
						"publicationStates": [
							"NEW"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/200441836"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/200441836"
						}
					}
				],
				"NEW_USED": [
					{
						"id": 200410634,
						"identifier": "Hatchback",
						"name": "ZDX Hatchback",
						"ruleType": "body",
						"styleIds": [
							101404546,
							101404545,
							101404544
						],
						"publicationStates": [
							"NEW_USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101404544"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101404544"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_NSX",
			"name": "NSX",
			"niceName": "nsx",
			"modelLinkCode": "M030005",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/nsx/1997",
					"id": "3284",
					"year": "1997"
				},
				{
					"link": "/api/vehicle/acura/nsx/1998",
					"id": "3285",
					"year": "1998"
				},
				{
					"link": "/api/vehicle/acura/nsx/1991",
					"id": "100000366",
					"year": "1991"
				},
				{
					"link": "/api/vehicle/acura/nsx/2004",
					"id": "100503652",
					"year": "2004"
				},
				{
					"link": "/api/vehicle/acura/nsx/1993",
					"id": "3280",
					"year": "1993"
				},
				{
					"link": "/api/vehicle/acura/nsx/2000",
					"id": "953",
					"year": "2000"
				},
				{
					"link": "/api/vehicle/acura/nsx/1994",
					"id": "3281",
					"year": "1994"
				},
				{
					"link": "/api/vehicle/acura/nsx/1995",
					"id": "3282",
					"year": "1995"
				},
				{
					"link": "/api/vehicle/acura/nsx/2015",
					"id": "100539231",
					"year": "2015"
				},
				{
					"link": "/api/vehicle/acura/nsx/1996",
					"id": "3283",
					"year": "1996"
				},
				{
					"link": "/api/vehicle/acura/nsx/2002",
					"id": "100000573",
					"year": "2002"
				},
				{
					"link": "/api/vehicle/acura/nsx/2003",
					"id": "100502712",
					"year": "2003"
				},
				{
					"link": "/api/vehicle/acura/nsx/2005",
					"id": "100504947",
					"year": "2005"
				},
				{
					"link": "/api/vehicle/acura/nsx/2001",
					"id": "100000011",
					"year": "2001"
				},
				{
					"link": "/api/vehicle/acura/nsx/1992",
					"id": "3279",
					"year": "1992"
				},
				{
					"link": "/api/vehicle/acura/nsx/1999",
					"id": "3412",
					"year": "1999"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "NSX"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "Y"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2015"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "N"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "Y"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M030005"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100539231"
						}
					}
				}
			},
			"categories": {
				"PRIMARY_BODY_TYPE": [
					"Car"
				],
				"Vehicle Size": [
					"Compact"
				],
				"Vehicle Style": [
					"Coupe"
				],
				"Vehicle Type": [
					"Car"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Exotic",
					"Luxury",
					"Performance",
					"High-Performance",
					"Hybrid"
				]
			},
			"publicationStates": [
				"USED",
				"PRE_PROD"
			],
			"subModels": {
				"USED": [
					{
						"id": 200405445,
						"identifier": "Coupe",
						"name": "NSX Coupe",
						"ruleType": "body",
						"styleIds": [
							100000501,
							100000500,
							100000499,
							100000498
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100000498"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100000498"
						}
					},
					{
						"id": 0,
						"identifier": "Coupe",
						"name": "NSX Coupe",
						"ruleType": "body",
						"styleIds": [
							747,
							552
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/552"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/747"
						}
					},
					{
						"id": 200406054,
						"identifier": "Coupe",
						"name": "NSX Coupe",
						"ruleType": "body",
						"styleIds": [
							100072771,
							100072770
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100072770"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100072771"
						}
					},
					{
						"id": 200406197,
						"identifier": "Coupe",
						"name": "NSX Coupe",
						"ruleType": "body",
						"styleIds": [
							100213877,
							100213876
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100213877"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100213877"
						}
					},
					{
						"id": 200406959,
						"identifier": "Coupe",
						"name": "NSX Coupe",
						"ruleType": "body",
						"styleIds": [
							100350423,
							100350424
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100350424"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100350424"
						}
					},
					{
						"id": 200407265,
						"identifier": "Coupe",
						"name": "NSX Coupe",
						"ruleType": "body",
						"styleIds": [
							100443659,
							100443658
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100443658"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100443658"
						}
					}
				],
				"PRE_PROD": [
					{
						"id": 200410790,
						"identifier": "Coupe",
						"name": "NSX Coupe",
						"ruleType": "body",
						"styleIds": [
							101418796
						],
						"publicationStates": [
							"PRE_PROD"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101418796"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101418796"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_RDX",
			"name": "RDX",
			"niceName": "rdx",
			"modelLinkCode": "M070005",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/rdx/2007",
					"id": "100505131",
					"year": "2007"
				},
				{
					"link": "/api/vehicle/acura/rdx/2012",
					"id": "100537229",
					"year": "2012"
				},
				{
					"link": "/api/vehicle/acura/rdx/2011",
					"id": "100533372",
					"year": "2011"
				},
				{
					"link": "/api/vehicle/acura/rdx/2008",
					"id": "100523811",
					"year": "2008"
				},
				{
					"link": "/api/vehicle/acura/rdx/2009",
					"id": "100525429",
					"year": "2009"
				},
				{
					"link": "/api/vehicle/acura/rdx/2013",
					"id": "100538949",
					"year": "2013"
				},
				{
					"link": "/api/vehicle/acura/rdx/2010",
					"id": "100528669",
					"year": "2010"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "Y"
						},
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "RDX"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2013"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M070005"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100538949"
						}
					}
				}
			},
			"categories": {
				"Crossover": [
					"Crossover"
				],
				"Vehicle Size": [
					"Midsize"
				],
				"PRIMARY_BODY_TYPE": [
					"SUV"
				],
				"Vehicle Style": [
					"4dr SUV"
				],
				"Vehicle Type": [
					"SUV"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Crossover",
					"Luxury"
				]
			},
			"publicationStates": [
				"USED",
				"NEW",
				"NEW_USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 200409009,
						"identifier": "SUV",
						"name": "RDX SUV",
						"ruleType": "body",
						"styleIds": [
							101016847,
							101016848
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101016848"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101016847"
						}
					},
					{
						"id": 200410250,
						"identifier": "SUV",
						"name": "RDX SUV",
						"ruleType": "body",
						"styleIds": [
							101361451,
							101361450,
							101361453,
							101361452
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101361453"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101361450"
						}
					},
					{
						"id": 200408679,
						"identifier": "SUV",
						"name": "RDX SUV",
						"ruleType": "body",
						"styleIds": [
							100905540,
							100905541
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100905541"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100905540"
						}
					},
					{
						"id": 200407370,
						"identifier": "SUV",
						"name": "RDX SUV",
						"ruleType": "body",
						"styleIds": [
							100773236,
							100773231
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100773231"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100773231"
						}
					},
					{
						"id": 200409541,
						"identifier": "SUV",
						"name": "RDX SUV",
						"ruleType": "body",
						"styleIds": [
							101192368,
							101192369,
							101192357,
							101192358
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101192358"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101192357"
						}
					}
				],
				"NEW": [
					{
						"id": 200410780,
						"identifier": "SUV",
						"name": "RDX SUV",
						"ruleType": "body",
						"styleIds": [
							101426821,
							101426820,
							101426807,
							101418221
						],
						"publicationStates": [
							"NEW"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101418221"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101418221"
						}
					}
				],
				"NEW_USED": [
					{
						"id": 200410633,
						"identifier": "SUV",
						"name": "RDX SUV",
						"ruleType": "body",
						"styleIds": [
							101404181,
							101404180,
							101404182,
							101404179
						],
						"publicationStates": [
							"NEW_USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101404179"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101404179"
						}
					}
				]
			}
		},
		{
			"makeId": 200002038,
			"makeName": "Acura",
			"makeNiceName": "acura",
			"id": "Acura_MDX",
			"name": "MDX",
			"niceName": "mdx",
			"modelLinkCode": "M030004",
			"make": {
				"link": "/api/vehicle/acura"
			},
			"modelYears": [
				{
					"link": "/api/vehicle/acura/mdx/2007",
					"id": "100507584",
					"year": "2007"
				},
				{
					"link": "/api/vehicle/acura/mdx/2004",
					"id": "100503653",
					"year": "2004"
				},
				{
					"link": "/api/vehicle/acura/mdx/2008",
					"id": "100524172",
					"year": "2008"
				},
				{
					"link": "/api/vehicle/acura/mdx/2003",
					"id": "100502711",
					"year": "2003"
				},
				{
					"link": "/api/vehicle/acura/mdx/2002",
					"id": "100000530",
					"year": "2002"
				},
				{
					"link": "/api/vehicle/acura/mdx/2010",
					"id": "100530869",
					"year": "2010"
				},
				{
					"link": "/api/vehicle/acura/mdx/2005",
					"id": "100504946",
					"year": "2005"
				},
				{
					"link": "/api/vehicle/acura/mdx/2012",
					"id": "100538329",
					"year": "2012"
				},
				{
					"link": "/api/vehicle/acura/mdx/2006",
					"id": "100506940",
					"year": "2006"
				},
				{
					"link": "/api/vehicle/acura/mdx/2001",
					"id": "100000009",
					"year": "2001"
				},
				{
					"link": "/api/vehicle/acura/mdx/2009",
					"id": "100525749",
					"year": "2009"
				},
				{
					"link": "/api/vehicle/acura/mdx/2013",
					"id": "200434553",
					"year": "2013"
				},
				{
					"link": "/api/vehicle/acura/mdx/2011",
					"id": "100533210",
					"year": "2011"
				}
			],
			"attributeGroups": {
				"MAIN": {
					"id": 1,
					"name": "MAIN",
					"attributes": {
						"NAME": {
							"id": 1,
							"name": "NAME",
							"value": "MDX"
						},
						"USE_IN_NEW": {
							"id": 10,
							"name": "USE_IN_NEW",
							"value": "N"
						},
						"YEAR": {
							"id": 2,
							"name": "YEAR",
							"value": "2003"
						},
						"WORKFLOWSTATUS": {
							"id": 9223372036854776000,
							"name": "WORKFLOWSTATUS",
							"value": "Published"
						},
						"USE_IN_USED": {
							"id": 11,
							"name": "USE_IN_USED",
							"value": "Y"
						},
						"USE_IN_PRE_PRODUCTION": {
							"id": 12,
							"name": "USE_IN_PRE_PRODUCTION",
							"value": "N"
						},
						"USE_IN_FUTURE": {
							"id": 595,
							"name": "USE_IN_FUTURE",
							"value": "N"
						},
						"MODEL_LINK_CODE": {
							"id": 20,
							"name": "MODEL_LINK_CODE",
							"value": "M030004"
						}
					}
				},
				"LEGACY": {
					"id": 64,
					"name": "LEGACY",
					"attributes": {
						"ED_MODEL_ID": {
							"id": 3,
							"name": "ED_MODEL_ID",
							"value": "100502711"
						}
					}
				}
			},
			"categories": {
				"Crossover": [
					"Crossover"
				],
				"PRIMARY_BODY_TYPE": [
					"SUV"
				],
				"Vehicle Size": [
					"Midsize"
				],
				"Vehicle Style": [
					"4dr SUV"
				],
				"Vehicle Type": [
					"SUV"
				],
				"Tier Five  - Vehicle Market Perception": [
					"Crossover",
					"Luxury"
				]
			},
			"publicationStates": [
				"USED",
				"NEW",
				"NEW_USED"
			],
			"subModels": {
				"USED": [
					{
						"id": 200408758,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							101001158,
							101001157,
							100933708,
							100933709,
							100933710,
							100933706,
							100933707
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101001157"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100933706"
						}
					},
					{
						"id": 200406196,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							100191141,
							100191142,
							100191137,
							100191138,
							100191139
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100191139"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100191137"
						}
					},
					{
						"id": 200406960,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							100350761,
							100350760,
							100350762,
							100350759,
							100350758
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100350762"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100350758"
						}
					},
					{
						"id": 200410212,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							101355914,
							101355913,
							101355912,
							101355911,
							101355910
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101355914"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101355910"
						}
					},
					{
						"id": 200407915,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							100650681,
							100650682,
							100650683,
							100650684,
							100650685
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100650685"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100650681"
						}
					},
					{
						"id": 200407264,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							100443639,
							100443638,
							100443642,
							100443641,
							100443640
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100443641"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100443638"
						}
					},
					{
						"id": 200405442,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							100000497,
							100000496,
							100000494,
							100000495
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100000494"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100000494"
						}
					},
					{
						"id": 200406042,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							100070050,
							100070048,
							100070049,
							100070047
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100070049"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100070050"
						}
					},
					{
						"id": 200409119,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							101037425,
							101037426,
							101037441,
							101037439,
							101037440
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101037439"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101037425"
						}
					},
					{
						"id": 200409845,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							101269192,
							101269193,
							101269207,
							101269206,
							101269203
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101269193"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101269192"
						}
					},
					{
						"id": 200407990,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							100808338,
							100808387,
							100808394,
							100808395,
							100808365
						],
						"publicationStates": [
							"USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/100808338"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/100808338"
						}
					}
				],
				"NEW": [
					{
						"id": 200434598,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							200434558,
							200434556,
							200434557,
							200434554,
							200434555
						],
						"publicationStates": [
							"NEW"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/200434554"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/200434554"
						}
					}
				],
				"NEW_USED": [
					{
						"id": 200410743,
						"identifier": "SUV",
						"name": "MDX SUV",
						"ruleType": "body",
						"styleIds": [
							101413939,
							101413940,
							101413941,
							101413942,
							101413943
						],
						"publicationStates": [
							"NEW_USED"
						],
						"submodelNewDefaultStyle": {
							"link": "/api/vehicle/style/101413939"
						},
						"submodelUsedDefaultStyle": {
							"link": "/api/vehicle/style/101413939"
						}
					}
				]
			}
		}
	]
}