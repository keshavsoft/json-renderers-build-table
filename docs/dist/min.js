var e = {
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: { initialize: "serialRoot" }
			}
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			options: { serial: { showSerial: "serialChild" } }
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		options: {}
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		options: {}
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		options: {}
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		options: {}
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		options: {}
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			options: {}
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			options: {}
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			options: {}
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			options: {}
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			options: {}
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			options: {}
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			options: {}
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			options: {}
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			options: {}
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			options: {}
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			options: {}
		}
	}
}, t = {
	name: "declarative-definitions",
	version: "1.0.1"
}, n = (e) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.declarative ??= {}, globalThis.ks.declarative.definitions = {
		meta: t,
		data: e
	});
}, r = e;
n(e);
// ../json-renderers-guard/src/v6/spec/type/index.js
var i = (e) => {
	let t = e.split("."), n = t[0], i = t[1];
	if (!(n in r)) throw TypeError(`${n} : type not found in definitions`);
	if (!(i in r?.[n])) throw TypeError(`${i} : variant not found in definitions.${n}`);
}, a = (e) => {
	if (!(e in r)) throw TypeError(`${e} : type not found in definitions`);
}, o = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.type;
	if (n === void 0) throw Error("Missing compulsory key: \"type\"");
	if (typeof n != "string") throw TypeError("type must be a string");
	return n.includes(".") ? i(inType) : a(inType), !0;
}, s = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.data;
	if (n === void 0) throw Error("Missing compulsory key: \"data\"");
	if (!Array.isArray(n)) throw TypeError("data must be an Array");
	return !0;
}, c = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.columns;
	if (n === void 0) throw Error("Missing compulsory key: \"columns\"");
	if (!Array.isArray(n)) throw TypeError("columns must be an Array");
	return !0;
}, l = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.showLog;
	if (n !== void 0 && typeof n != "boolean") throw TypeError("showLog must be a boolean");
	return !0;
}, u = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return o(t), s(t), c(t), l(t), !0;
}, d = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.targetHtmlId;
	if (n === void 0) throw Error("Missing compulsory key: \"targetHtmlId\"");
	if (typeof n != "string") throw TypeError("targetHtmlId must be a string");
	if (n.trim().length === 0) throw Error("targetHtmlId must be a non-empty string");
	return !0;
}, f = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.appendPosition;
	if (n === void 0) throw Error("Missing compulsory key: \"appendPosition\"");
	if (typeof n != "string") throw TypeError("appendPosition must be a string");
	return !0;
}, p = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.classToApply;
	if (n === void 0) throw Error("Missing compulsory key: \"classToApply\"");
	if (typeof n != "string") throw TypeError("classToApply must be a string");
	return !0;
}, m = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return d(t), f(t), p(t), !0;
}, ee = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return u(t), m(t), !0;
}, h = {
	version: "42.1.4",
	name: "json-to-dom"
}, te = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.jsonToDom = {
		meta: h,
		appendToDom: e
	});
}, ne = {
	version: "v12",
	description: "JSON-to-DOM engine powered by decoupled external-action traversal engine"
}, g = (e) => {
	if (typeof globalThis > "u" || !e) return;
	globalThis.ks ??= {};
	let t = typeof e == "function" ? e : e.buildSpecElement, n = e.buildSpecElementWithValidate, r = {
		meta: ne,
		buildSpecElement: t,
		...n ? { buildSpecElementWithValidate: n } : {}
	};
	globalThis.ks["json-to-tag"] = r, globalThis.ks.jsonToTag = r;
}, re = ({ inItems: e, inFunc: t }) => {
	let n = e, r = t;
	return Array.isArray(n) ? n.map((e) => v({
		inSpec: e,
		inFunc: r
	})).flat(Infinity).filter(Boolean) : [];
}, _ = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	if (!n || typeof n != "object" || Array.isArray(n)) return null;
	let i = typeof r == "function" ? r(n) : null;
	if (Array.isArray(n.children)) {
		let e = re({
			inItems: n.children,
			inFunc: r
		});
		if (i && typeof i.append == "function" && Array.isArray(e)) {
			let t = e.filter(Boolean);
			t.length && i.append(...t);
		}
	}
	return i;
}, v = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	return n == null ? null : typeof Node < "u" && n instanceof Node ? n : Array.isArray(n) ? re({
		inItems: n,
		inFunc: r
	}) : typeof n == "object" ? _({
		inSpec: n,
		inFunc: r
	}) : typeof n == "string" || typeof n == "number" ? typeof document < "u" ? document.createTextNode(String(n)) : String(n) : null;
}, ie = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t;
	return !n || typeof n != "object" || Array.isArray(n) ? (r.push({ reason: "Node must be a plain object" }), !1) : !0;
}, ae = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName;
	return !o || typeof o != "string" || o.trim() === "" ? (a.push({ reason: "Missing or empty 'tagName'" }), !1) : i && typeof i == "object" && !(i[o] || Object.keys(i).includes(o)) ? (a.push({
		tagName: o,
		reason: `Unrecognized tagName '${o}' not found in spec catalog`
	}), !1) : !0;
}, oe = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsTextContent === !1 && r.textContent ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow direct textContent`
	}), !1) : !0;
}, se = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsChildren === !1 && Array.isArray(r.children) && r.children.length > 0 ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow children (void element)`
	}), !1) : "children" in r && !Array.isArray(r.children) ? (a.push({
		tagName: o,
		reason: "'children' must be an array"
	}), !1) : !0;
}, ce = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && Array.isArray(s.childTags) && s.childTags.length > 0 && Array.isArray(r.children) && r.children.forEach((e) => {
		e && e.tagName && !s.childTags.includes(e.tagName) && a.push({
			tagName: e.tagName,
			reason: `Tag '${e.tagName}' is not an allowed child of '${o}' (allowed: ${s.childTags.join(", ")})`
		});
	}), !0;
}, le = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t, i = n.tagName;
	return "attributes" in n && (!n.attributes || typeof n.attributes != "object" || Array.isArray(n.attributes)) ? (r.push({
		tagName: i,
		reason: "'attributes' must be a key-value object"
	}), !1) : !0;
}, ue = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n;
	ie({
		inNode: r,
		inErrors: a
	}) && (ae({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), oe({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), se({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), ce({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), le({
		inNode: r,
		inErrors: a
	}));
}, de = {
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: { initialize: "serialRoot" }
			}
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			options: { serial: { showSerial: "serialChild" } }
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		options: {}
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		options: {}
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		options: {}
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		options: {}
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		options: {}
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			options: {}
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			options: {}
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			options: {}
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			options: {}
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			options: {}
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			options: {}
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			options: {}
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			options: {}
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			options: {}
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			options: {}
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			options: {}
		}
	}
}, fe = {
	tableSearchBar: {
		tagName: "div",
		attributes: { class: "row mb-3 align-items-center" },
		children: [
			{
				tagName: "div",
				attributes: { class: "col-md-4 d-flex align-items-center" },
				children: [{
					tagName: "h6",
					attributes: {
						class: "mb-0 fw-semibold text-secondary",
						id: "table-title"
					},
					textContent: "Items"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4 text-center d-flex align-items-center justify-content-center" },
				children: [{
					tagName: "span",
					attributes: {
						id: "search-feedback",
						class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
					},
					textContent: "Showing all records"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4" },
				children: [{
					tagName: "div",
					attributes: { class: "input-group" },
					children: [{
						tagName: "span",
						attributes: { class: "input-group-text bg-white" },
						children: [{
							tagName: "i",
							attributes: { class: "bi bi-search" },
							textContent: "🔍"
						}]
					}, {
						tagName: "input",
						attributes: {
							type: "text",
							id: "tableSearch",
							class: "form-control",
							placeholder: "Search table..."
						}
					}]
				}]
			}
		]
	},
	buildBodyTr: {
		tagName: "tr",
		attributes: { class: "align-middle" },
		children: []
	},
	buildColGroup: {
		tagName: "col",
		attributes: { width: "${width}" }
	},
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	buildFooter: {
		tagName: "td",
		children: [{
			tagName: "input",
			attributes: {
				type: "text",
				placeholder: "enter ${columnName}",
				name: "${columnName}",
				id: "${columnName}",
				list: "${columnName}",
				class: "form-control"
			}
		}]
	},
	buildBodyCell: {
		tagName: "td",
		textContent: "${rowValue}",
		attributes: { class: "py-3 px-3 text-secondary" }
	},
	button: {
		tagName: "button",
		textContent: "${columnName}",
		attributes: { class: "btn btn-primary btn-sm" }
	},
	buttonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "${agg:count}",
			attributes: { class: "btn btn-primary btn-sm" }
		}]
	},
	optionsButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "show",
			attributes: { class: "btn btn-primary btn-sm ks-btn-show" }
		}]
	},
	buildOption: {
		tagName: "option",
		textContent: "${rowValue}",
		attributes: { value: "${rowValue}" }
	},
	buildSelect: {
		tagName: "select",
		attributes: {
			id: "${columnName}",
			name: "${columnName}",
			"data-name": "${columnName}",
			class: "form-select shadow-sm mb-3"
		},
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: {
			id: "${columnName}",
			"data-name": "${columnName}"
		},
		children: []
	},
	buildFormField: {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: "${columnName}",
			attributes: {
				for: "${columnName}",
				class: "form-label fw-semibold text-capitalize"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "${columnName}",
				name: "${columnName}",
				placeholder: "Enter ${columnName}...",
				class: "form-control"
			}
		}]
	},
	emptyCell: {
		tagName: "td",
		children: []
	},
	headerSerialCell: {
		tagName: "th",
		textContent: "#",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForSerial: {
		tagName: "col",
		attributes: { width: "50px" }
	},
	colGroupForOption: {
		tagName: "col",
		attributes: { width: "100px" }
	},
	headerForOption: {
		tagName: "th",
		textContent: "options",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	tdWithButtonSaveWarning: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "save",
			attributes: { class: "btn btn-warning btn-sm ks-btn-save" }
		}]
	},
	tableSearch: {
		tagName: "div",
		attributes: { class: "row mb-3 justify-content-end" },
		children: [{
			tagName: "div",
			attributes: { class: "col-md-4" },
			children: [{
				tagName: "div",
				attributes: { class: "input-group" },
				children: [{
					tagName: "span",
					attributes: { class: "input-group-text bg-white" },
					children: [{
						tagName: "i",
						attributes: { class: "bi bi-search" },
						textContent: "🔍"
					}]
				}, {
					tagName: "input",
					attributes: {
						type: "text",
						id: "tableSearch",
						class: "form-control",
						placeholder: "Search table..."
					}
				}]
			}]
		}]
	},
	tableWithSearch: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-withSearch-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-withSearch-table-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-simple-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-simple-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-simple-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-simple-body-id"
						},
						children: []
					}
				]
			}]
		}]
	},
	tableSimple: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				}
			]
		}]
	},
	tableWithFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableBodyOnly: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-tag-id"
		},
		children: [{
			tagName: "tbody",
			attributes: {
				"data-role": "table-body",
				id: "table-body-id"
			},
			children: []
		}]
	},
	tableBodyOnly1: {
		tagName: "tbody",
		attributes: {
			"data-role": "table-body",
			id: "table-body-only-id"
		},
		children: []
	},
	tableFooterOnly: {
		tagName: "tfoot",
		attributes: {
			"data-role": "table-footer",
			id: "table-footer-only-id"
		},
		children: [{
			tagName: "tr",
			attributes: {
				"data-role": "table-footer-row",
				id: "table-footer-only-footer-row-id"
			},
			children: []
		}]
	},
	tableHeaderOnly: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-colgroup-id"
				},
				children: []
			}, {
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-row-id"
					},
					children: []
				}]
			}]
		}]
	},
	tableHeaderOnly1: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-header-only-id"
		},
		children: [
			{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-header-only-colgroup-id"
				},
				children: []
			},
			{
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-only-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-only-header-row-id"
					},
					children: []
				}]
			},
			{
				tagName: "tbody",
				attributes: {
					"data-role": "table-body",
					id: "table-header-only-body-id"
				},
				children: []
			}
		]
	},
	tableHeaderAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-simple-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-simple-table-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-simple-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-simple-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-simple-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-simple-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-simple-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-simple-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	selectBase: {
		tagName: "div",
		attributes: {
			"data-role": "select-container",
			id: "select-base-id"
		},
		children: []
	},
	dataListBase: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-base-id"
		},
		children: []
	},
	dataListSimple: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-simple-id"
		},
		children: []
	},
	selectOptionsOnlyBase: [],
	searchInputBase: {
		tagName: "div",
		attributes: {
			class: "d-flex align-items-center gap-2",
			id: "search-input-base-id"
		},
		children: [{
			tagName: "label",
			textContent: "${label}",
			attributes: {
				class: "form-label mb-0 text-nowrap fw-semibold",
				for: "${id}",
				id: "search-input-label-id"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "search",
				placeholder: "${placeholder}",
				class: "form-control",
				id: "search-input-field-id"
			}
		}]
	},
	formBase: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-base-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-base-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-base-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-base-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-base-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-base-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-base-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-base-submit-button-id"
					}
				}]
			}
		]
	},
	formSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-simple-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-simple-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-simple-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-simple-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-simple-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-simple-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-simple-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-simple-submit-button-id"
					}
				}]
			}
		]
	},
	searchToolbar: {
		tagName: "div",
		attributes: {
			class: "row mb-3 align-items-center",
			"data-role": "search-toolbar"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 d-flex align-items-center",
					"data-role": "search-label-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 text-center d-flex align-items-center justify-content-center",
					"data-role": "search-helper-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4",
					"data-role": "search-input-slot"
				},
				children: []
			}
		]
	},
	searchLabel: {
		tagName: "h6",
		textContent: "Items",
		attributes: {
			class: "mb-0 fw-semibold text-secondary",
			id: "table-title"
		}
	},
	searchHelper: {
		tagName: "span",
		textContent: "Showing all records",
		attributes: {
			id: "search-feedback",
			class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
		}
	},
	searchInput: {
		tagName: "div",
		attributes: { class: "input-group" },
		children: [{
			tagName: "span",
			attributes: { class: "input-group-text bg-white" },
			children: [{
				tagName: "i",
				attributes: { class: "bi bi-search" },
				textContent: "🔍"
			}]
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "tableSearch",
				class: "form-control",
				placeholder: "Search table..."
			}
		}]
	},
	optionsEditButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "edit",
			attributes: { class: "btn btn-secondary btn-sm ks-btn-edit" }
		}]
	},
	optionsDeleteButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "delete",
			attributes: { class: "btn btn-danger btn-sm ks-btn-delete" }
		}]
	},
	headerForEditOption: {
		tagName: "th",
		textContent: "edit",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	headerForDeleteOption: {
		tagName: "th",
		textContent: "delete",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForEditOption: {
		tagName: "col",
		attributes: { width: "80px" }
	},
	colGroupForDeleteOption: {
		tagName: "col",
		attributes: { width: "90px" }
	},
	tableWithFooterParent: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-footer-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-with-footer-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-with-footer-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-with-footer-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-with-footer-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-with-footer-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-with-footer-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-with-footer-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableWithSearchAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-search-footer-parent-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-with-footer-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-with-footer-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-with-footer-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-with-footer-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-with-footer-body-id"
						},
						children: []
					},
					{
						tagName: "tfoot",
						attributes: {
							"data-role": "table-footer",
							id: "table-with-footer-footer-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-footer-row",
								id: "table-with-footer-footer-row-id"
							},
							children: []
						}]
					}
				]
			}]
		}]
	},
	accordionSimple: {
		tagName: "div",
		attributes: {
			class: "accordion shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	accordionFlush: {
		tagName: "div",
		attributes: {
			class: "accordion accordion-flush shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	buildAccordionItem: {
		tagName: "div",
		attributes: {
			class: "accordion-item",
			"data-role": "accordion-item"
		},
		children: [{
			tagName: "h2",
			attributes: {
				class: "accordion-header",
				id: "heading-${id}"
			},
			children: [{
				tagName: "button",
				attributes: {
					class: "accordion-button collapsed",
					type: "button",
					"data-bs-toggle": "collapse",
					"data-bs-target": "#collapse-${id}",
					"aria-expanded": "false",
					"aria-controls": "collapse-${id}"
				},
				textContent: "${title}"
			}]
		}, {
			tagName: "div",
			attributes: {
				id: "collapse-${id}",
				class: "accordion-collapse collapse",
				"aria-labelledby": "heading-${id}",
				"data-bs-parent": "#accordion-parent-id",
				"data-role": "accordion-collapse"
			},
			children: [{
				tagName: "div",
				attributes: { class: "accordion-body text-secondary" },
				textContent: "${content}"
			}]
		}]
	},
	cardSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithHeader: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-header bg-white py-3 fw-bold border-bottom",
				"data-role": "card-header"
			},
			children: []
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithFooter: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 fw-bold border-bottom",
					"data-role": "card-header"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					"data-role": "card-body"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light py-3 border-top",
					"data-role": "card-footer"
				},
				children: []
			}
		]
	},
	cardImageTop: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3 overflow-hidden",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "img",
			attributes: {
				class: "card-img-top",
				src: "${imageSrc}",
				alt: "${imageAlt}",
				"data-role": "card-img"
			}
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	buildCardBodyTemplate: {
		tagName: "div",
		attributes: { class: "card-content" },
		children: [{
			tagName: "h5",
			attributes: { class: "card-title fw-bold text-dark mb-2" },
			textContent: "${title}"
		}, {
			tagName: "p",
			attributes: { class: "card-text text-secondary mb-3" },
			textContent: "${text}"
		}]
	},
	buildCardHeaderTemplate: {
		tagName: "span",
		attributes: { class: "card-header-title text-dark" },
		textContent: "${headerTitle}"
	},
	buildCardFooterTemplate: {
		tagName: "small",
		attributes: { class: "text-muted" },
		textContent: "${footerText}"
	},
	listSimple: {
		tagName: "ul",
		attributes: {
			class: "list-unstyled mb-0",
			id: "list-parent-id",
			"data-role": "list-parent"
		},
		children: []
	},
	listGroup: {
		tagName: "ul",
		attributes: {
			class: "list-group shadow-sm",
			id: "list-group-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	listOrdered: {
		tagName: "ol",
		attributes: {
			class: "list-group list-group-numbered shadow-sm",
			id: "list-ordered-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	menuSimple: {
		tagName: "ul",
		attributes: {
			class: "nav nav-pills flex-column bg-white p-3 rounded-3 shadow-sm border",
			id: "menu-parent-id",
			"data-role": "menu-parent"
		},
		children: []
	},
	menuCardsBase: {
		tagName: "div",
		attributes: {
			class: "row g-4",
			id: "menu-cards-parent-id",
			"data-role": "menu-cards-parent"
		},
		children: []
	},
	buildListItemTemplate: {
		tagName: "li",
		attributes: {
			class: "py-2 px-3 border-bottom d-flex align-items-center text-secondary",
			"data-role": "list-item"
		},
		textContent: "${text}"
	},
	buildListGroupItemTemplate: {
		tagName: "li",
		attributes: {
			class: "list-group-item d-flex justify-content-between align-items-center py-3",
			"data-role": "list-group-item"
		},
		children: [{
			tagName: "span",
			textContent: "${text}"
		}, {
			tagName: "span",
			attributes: { class: "badge bg-primary rounded-pill px-3 py-2" },
			textContent: "${badge}"
		}]
	},
	buildMenuItemTemplate: {
		tagName: "li",
		attributes: {
			class: "nav-item mb-1",
			"data-role": "menu-item"
		},
		children: [{
			tagName: "a",
			attributes: {
				class: "nav-link text-dark fw-medium",
				href: "${href}"
			},
			textContent: "${text}"
		}]
	},
	buildMenuCardItemTemplate: {
		tagName: "div",
		attributes: {
			class: "col-md-4 col-sm-6",
			"data-role": "menu-card-col"
		},
		children: [{
			tagName: "div",
			attributes: { class: "card h-100 shadow-sm border rounded-3" },
			children: [{
				tagName: "div",
				attributes: { class: "card-body p-4 d-flex flex-column" },
				children: [
					{
						tagName: "h5",
						attributes: { class: "card-title fw-bold text-primary mb-2" },
						textContent: "${title}"
					},
					{
						tagName: "p",
						attributes: { class: "card-text text-muted small flex-grow-1" },
						textContent: "${description}"
					},
					{
						tagName: "a",
						attributes: {
							class: "btn btn-outline-primary btn-sm mt-3",
							href: "${href}"
						},
						textContent: "${actionText}"
					}
				]
			}]
		}]
	}
}, y = {
	$schema: "./tags.schema.json",
	div: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["title", "role"],
		childTags: []
	},
	input: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"placeholder",
			"value",
			"name",
			"disabled",
			"readonly",
			"required",
			"list"
		]
	},
	checkbox: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"checked",
			"name",
			"value",
			"disabled",
			"required"
		]
	},
	colgroup: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["span"],
		childTags: ["col"]
	},
	col: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"span",
			"style",
			"width"
		]
	},
	label: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["for"],
		childTags: []
	},
	form: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"action",
			"method",
			"autocomplete",
			"enctype",
			"name",
			"novalidate",
			"target"
		],
		childTags: []
	},
	select: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"name",
			"disabled",
			"required",
			"multiple",
			"size"
		],
		childTags: ["option"]
	},
	p: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h1: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h2: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	span: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	img: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"src",
			"alt",
			"width",
			"height",
			"loading"
		]
	},
	button: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"type",
			"disabled",
			"name",
			"value"
		],
		childTags: []
	},
	table: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"border",
			"cellpadding",
			"cellspacing"
		],
		childTags: [
			"caption",
			"colgroup",
			"thead",
			"tbody",
			"tfoot",
			"tr"
		]
	},
	thead: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tbody: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tfoot: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tr: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["td", "th"]
	},
	th: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"scope",
			"colspan",
			"rowspan"
		],
		childTags: []
	},
	td: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["colspan", "rowspan"],
		childTags: []
	},
	datalist: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["option"]
	},
	option: {
		allowsTextContent: !0,
		allowsChildren: !1,
		allowedAttributes: [
			"value",
			"label",
			"selected",
			"disabled"
		]
	},
	header: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["role"],
		childTags: []
	},
	a: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"href",
			"target",
			"rel",
			"title",
			"download"
		],
		childTags: []
	},
	i: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["aria-hidden"],
		childTags: []
	},
	small: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	ul: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["type"],
		childTags: ["li"]
	},
	li: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["value"],
		childTags: []
	},
	hr: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: []
	}
}, pe = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	title: "TagsCatalogSchema",
	description: "JSON Schema for @keshavsoft/spec-repo tags.json catalog",
	type: "object",
	patternProperties: { "^[a-z0-9]+$": {
		type: "object",
		required: [
			"allowsTextContent",
			"allowsChildren",
			"allowedAttributes"
		],
		properties: {
			allowsTextContent: {
				type: "boolean",
				description: "Indicates whether the element permits direct textContent"
			},
			allowsChildren: {
				type: "boolean",
				description: "Indicates whether the element can contain child DOM elements"
			},
			allowedAttributes: {
				type: "array",
				items: { type: "string" },
				description: "List of specifically allowed HTML attributes for this tag"
			},
			childTags: {
				type: "array",
				items: { type: "string" },
				description: "Permitted child tag names if restricted"
			}
		},
		additionalProperties: !1
	} }
}, me = {
	buildColgroup: {
		type: "single",
		narration: "Build column widths",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildColGroup",
		func: "fromCollection"
	},
	buildHeader: {
		type: "single",
		narration: "Build table header",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildHeader",
		func: "fromCollection"
	},
	buildFooter: {
		type: "single",
		narration: "Build table footer",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFooter",
		func: "fromCollection"
	},
	buildBody: {
		type: "rowOnColumn",
		narration: "Build table body",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		templateKey: {
			rowKey: "buildBodyTr",
			columnKey: "buildBodyCell"
		}
	},
	serial: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial number cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshiftSerialToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "buildBodyCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	search: [{
		narration: "Prepend the search row to top of the table.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-parent']"
		},
		sourcePath: null,
		templateKey: "tableSearch",
		func: null
	}],
	buildFormField: {
		type: "single",
		narration: "Build form fields from columns",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'form-body']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFormField",
		func: "fromCollection"
	},
	buildSelectWithOptions: {
		type: "columnOnRow",
		narration: "Build selects with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildSelect",
			rowKey: "buildOption"
		}
	},
	buildSelectOptions: {
		type: "single",
		narration: "Build select options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildOptionsArray: {
		type: "single",
		narration: "Build options array",
		destinationPath: {
			fileName: "base",
			filePath: []
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildDataListWithOptions: {
		type: "columnOnRow",
		narration: "Build datalists with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildDataList",
			rowKey: "buildOption"
		}
	},
	searchFrame: [{
		narration: "Insert the search toolbar frame before the table when a search feature is enabled.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$"
		},
		sourcePath: null,
		templateKey: "searchToolbar",
		func: null,
		skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
	}],
	searchLabel: [{
		narration: "Insert the search label into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-label-slot']"
		},
		sourcePath: null,
		templateKey: "searchLabel",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'table-title']"
	}],
	searchHelper: [{
		narration: "Insert the search helper text into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-helper-slot']"
		},
		sourcePath: null,
		templateKey: "searchHelper",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'search-feedback']"
	}],
	searchInput: [{
		narration: "Insert the search input into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-input-slot']"
		},
		sourcePath: null,
		templateKey: "searchInput",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'tableSearch']"
	}],
	serialRoot: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	serialChild: [{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshiftSerialToRows",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		sourcePath: null,
		templateKey: "buildBodyCell",
		func: null
	}],
	optionsShowButton: [
		{
			narration: "Append the options column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForOption",
			func: null
		},
		{
			narration: "Append the options header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForOption",
			func: null
		},
		{
			narration: "Append the options button cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsButtonCell",
			func: null
		},
		{
			narration: "Append the options footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "tdWithButtonSaveWarning",
			func: null
		}
	],
	optionsEditButton: [
		{
			narration: "Append edit column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForEditOption",
			func: null
		},
		{
			narration: "Append edit header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForEditOption",
			func: null
		},
		{
			narration: "Append edit button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsEditButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the edit action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	optionsDeleteButton: [
		{
			narration: "Append delete column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForDeleteOption",
			func: null
		},
		{
			narration: "Append delete header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForDeleteOption",
			func: null
		},
		{
			narration: "Append delete button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsDeleteButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the delete action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	buildAccordionItems: {
		type: "single",
		narration: "Build accordion items from array",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildAccordionItem",
		func: "fromCollection"
	},
	buildCardBody: {
		type: "single",
		narration: "Build card body content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-body']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardBodyTemplate",
		func: "applyTemplate"
	},
	buildCardHeader: {
		type: "single",
		narration: "Build card header content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-header']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardHeaderTemplate",
		func: "applyTemplate"
	},
	buildCardFooter: {
		type: "single",
		narration: "Build card footer content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-footer']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardFooterTemplate",
		func: "applyTemplate"
	},
	buildListItems: {
		type: "single",
		narration: "Build simple list items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListItemTemplate",
		func: "fromCollection"
	},
	buildListGroupItems: {
		type: "single",
		narration: "Build list-group items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListGroupItemTemplate",
		func: "fromCollection"
	},
	buildMenuItems: {
		type: "single",
		narration: "Build navigation menu items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuItemTemplate",
		func: "fromCollection"
	},
	buildMenuCards: {
		type: "single",
		narration: "Build menu cards grid",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuCardItemTemplate",
		func: "fromCollection"
	}
}, he = {
	name: "spec-repo",
	version: "1.17.1"
};
// node_modules/spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: he,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: fe,
	tags: y,
	tagsSchema: pe,
	instructions: me,
	definitions: de
});
// node_modules/json-to-tag-validate/src/v4/index.js
function ge({ inJson: e, inCatalog: t, inSpec: n }) {
	let r = e, i = t ?? n ?? y, a = [];
	return v({
		inSpec: r,
		inFunc: (e) => {
			ue({
				inNode: e,
				inCatalog: i,
				inErrors: a
			});
		}
	}), {
		isValid: a.length === 0,
		errors: a
	};
}
// node_modules/@keshavsoft/json-to-tag/src/v12/element/createElement.js
var _e = "http://www.w3.org/2000/svg", ve = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), ye = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return ve.has(t) ? document.createElementNS(_e, t) : document.createElement(t);
}, be = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), xe = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), Se = "http://www.w3.org/1999/xlink", Ce = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(Se, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, we = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, Te = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = ye({ inTagName: e.tagName });
	return t ? (be({
		inElement: t,
		inTextContent: e.textContent,
		inTagName: e.tagName
	}), xe({
		inElement: t,
		inProperties: e.properties
	}), Ce({
		inElement: t,
		inAttributes: e.attributes
	}), we({
		inElement: t,
		inClassList: e.classList
	}), t) : null;
}, Ee = (e = {}) => v({
	inSpec: e?.spec ?? e?.inSpec ?? e,
	inFunc: Te
});
g({
	buildSpecElement: Ee,
	buildSpecElementWithValidate: (e = {}) => {
		let t = e?.spec ?? e?.inSpec ?? e, n = ge({ inJson: t });
		return n.isValid || console.warn("[json-to-tag] Specification validation issues:", n.errors), v({
			inSpec: t,
			inFunc: Te
		});
	}
});
// node_modules/spec-to-dom/src/v2/register/meta.js
var De = {
	version: "2.1.1",
	name: "spec-to-dom"
}, Oe = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.specToDom = {
		meta: De,
		appendToDom: e
	});
}, ke = ({ buildSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => {
	let i = e, a = t, o = n, s = r;
	s && console.log("renderToDom 1 (content):", i);
	let c = document.getElementById(a);
	return c ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? o === "prepend" ? c.prepend(...i) : c.append(...i) : o === "prepend" ? c.prepend(i) : (c.innerHTML = "", c.append(i)), s && console.log("renderToDom 2 (mounted):", c), c) : null;
};
Oe(ke);
// node_modules/@keshavsoft/json-to-dom/src/v42/index.js
var Ae = ({ jsonSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => ke({
	buildSpec: Ee(e),
	targetHtmlId: t,
	appendPosition: n,
	showLog: r
});
te(Ae);
// src/v58/registerGlobal/meta.js
var je = {
	name: "json-renderers-build-table",
	version: "1.58.0"
}, Me = (e) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.build ??= {}, globalThis.ks.jsonRenderers.build.table = {
		meta: je,
		render: e
	});
}, Ne = {
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: { initialize: "serialRoot" }
			}
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			options: {
				serial: { showSerial: "serialChild" },
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		options: {}
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		options: {}
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		options: {}
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		options: {}
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		options: {}
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			options: {}
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			options: {}
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			options: {}
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			options: {}
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			options: {}
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			options: {}
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			options: {}
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			options: {}
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			options: {}
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			options: {}
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			options: {}
		}
	}
}, Pe = {
	name: "declarative-definitions",
	version: "1.0.1"
};
// ../json-renderers-run-instructions/node_modules/declarative-definitions/src/v2/index.js
((e) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.declarative ??= {}, globalThis.ks.declarative.definitions = {
		meta: Pe,
		data: e
	});
})(Ne);
var Fe = {
	tableSearchBar: {
		tagName: "div",
		attributes: { class: "row mb-3 align-items-center" },
		children: [
			{
				tagName: "div",
				attributes: { class: "col-md-4 d-flex align-items-center" },
				children: [{
					tagName: "h6",
					attributes: {
						class: "mb-0 fw-semibold text-secondary",
						id: "table-title"
					},
					textContent: "Items"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4 text-center d-flex align-items-center justify-content-center" },
				children: [{
					tagName: "span",
					attributes: {
						id: "search-feedback",
						class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
					},
					textContent: "Showing all records"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4" },
				children: [{
					tagName: "div",
					attributes: { class: "input-group" },
					children: [{
						tagName: "span",
						attributes: { class: "input-group-text bg-white" },
						children: [{
							tagName: "i",
							attributes: { class: "bi bi-search" },
							textContent: "🔍"
						}]
					}, {
						tagName: "input",
						attributes: {
							type: "text",
							id: "tableSearch",
							class: "form-control",
							placeholder: "Search table..."
						}
					}]
				}]
			}
		]
	},
	buildBodyTr: {
		tagName: "tr",
		attributes: { class: "align-middle" },
		children: []
	},
	buildColGroup: {
		tagName: "col",
		attributes: { width: "${width}" }
	},
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	buildFooter: {
		tagName: "td",
		children: [{
			tagName: "input",
			attributes: {
				type: "text",
				placeholder: "enter ${columnName}",
				name: "${columnName}",
				id: "${columnName}",
				list: "${columnName}",
				class: "form-control"
			}
		}]
	},
	buildBodyCell: {
		tagName: "td",
		textContent: "${rowValue}",
		attributes: { class: "py-3 px-3 text-secondary" }
	},
	button: {
		tagName: "button",
		textContent: "${columnName}",
		attributes: { class: "btn btn-primary btn-sm" }
	},
	buttonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "${agg:count}",
			attributes: { class: "btn btn-primary btn-sm" }
		}]
	},
	optionsButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "show",
			attributes: { class: "btn btn-primary btn-sm ks-btn-show" }
		}]
	},
	buildOption: {
		tagName: "option",
		textContent: "${rowValue}",
		attributes: { value: "${rowValue}" }
	},
	buildSelect: {
		tagName: "select",
		attributes: {
			id: "${columnName}",
			name: "${columnName}",
			"data-name": "${columnName}",
			class: "form-select shadow-sm mb-3"
		},
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: {
			id: "${columnName}",
			"data-name": "${columnName}"
		},
		children: []
	},
	buildFormField: {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: "${columnName}",
			attributes: {
				for: "${columnName}",
				class: "form-label fw-semibold text-capitalize"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "${columnName}",
				name: "${columnName}",
				placeholder: "Enter ${columnName}...",
				class: "form-control"
			}
		}]
	},
	emptyCell: {
		tagName: "td",
		children: []
	},
	headerSerialCell: {
		tagName: "th",
		textContent: "#",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForSerial: {
		tagName: "col",
		attributes: { width: "50px" }
	},
	colGroupForOption: {
		tagName: "col",
		attributes: { width: "100px" }
	},
	headerForOption: {
		tagName: "th",
		textContent: "options",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	tdWithButtonSaveWarning: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "save",
			attributes: { class: "btn btn-warning btn-sm ks-btn-save" }
		}]
	},
	tableSearch: {
		tagName: "div",
		attributes: { class: "row mb-3 justify-content-end" },
		children: [{
			tagName: "div",
			attributes: { class: "col-md-4" },
			children: [{
				tagName: "div",
				attributes: { class: "input-group" },
				children: [{
					tagName: "span",
					attributes: { class: "input-group-text bg-white" },
					children: [{
						tagName: "i",
						attributes: { class: "bi bi-search" },
						textContent: "🔍"
					}]
				}, {
					tagName: "input",
					attributes: {
						type: "text",
						id: "tableSearch",
						class: "form-control",
						placeholder: "Search table..."
					}
				}]
			}]
		}]
	},
	tableWithSearch: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-withSearch-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-withSearch-table-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-simple-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-simple-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-simple-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-simple-body-id"
						},
						children: []
					}
				]
			}]
		}]
	},
	tableSimple: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				}
			]
		}]
	},
	tableWithFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableBodyOnly: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-tag-id"
		},
		children: [{
			tagName: "tbody",
			attributes: {
				"data-role": "table-body",
				id: "table-body-id"
			},
			children: []
		}]
	},
	tableBodyOnly1: {
		tagName: "tbody",
		attributes: {
			"data-role": "table-body",
			id: "table-body-only-id"
		},
		children: []
	},
	tableFooterOnly: {
		tagName: "tfoot",
		attributes: {
			"data-role": "table-footer",
			id: "table-footer-only-id"
		},
		children: [{
			tagName: "tr",
			attributes: {
				"data-role": "table-footer-row",
				id: "table-footer-only-footer-row-id"
			},
			children: []
		}]
	},
	tableHeaderOnly: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-colgroup-id"
				},
				children: []
			}, {
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-row-id"
					},
					children: []
				}]
			}]
		}]
	},
	tableHeaderOnly1: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-header-only-id"
		},
		children: [
			{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-header-only-colgroup-id"
				},
				children: []
			},
			{
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-only-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-only-header-row-id"
					},
					children: []
				}]
			},
			{
				tagName: "tbody",
				attributes: {
					"data-role": "table-body",
					id: "table-header-only-body-id"
				},
				children: []
			}
		]
	},
	tableHeaderAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-simple-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-simple-table-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-simple-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-simple-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-simple-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-simple-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-simple-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-simple-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	selectBase: {
		tagName: "div",
		attributes: {
			"data-role": "select-container",
			id: "select-base-id"
		},
		children: []
	},
	dataListBase: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-base-id"
		},
		children: []
	},
	dataListSimple: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-simple-id"
		},
		children: []
	},
	selectOptionsOnlyBase: [],
	searchInputBase: {
		tagName: "div",
		attributes: {
			class: "d-flex align-items-center gap-2",
			id: "search-input-base-id"
		},
		children: [{
			tagName: "label",
			textContent: "${label}",
			attributes: {
				class: "form-label mb-0 text-nowrap fw-semibold",
				for: "${id}",
				id: "search-input-label-id"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "search",
				placeholder: "${placeholder}",
				class: "form-control",
				id: "search-input-field-id"
			}
		}]
	},
	formBase: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-base-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-base-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-base-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-base-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-base-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-base-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-base-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-base-submit-button-id"
					}
				}]
			}
		]
	},
	formSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-simple-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-simple-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-simple-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-simple-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-simple-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-simple-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-simple-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-simple-submit-button-id"
					}
				}]
			}
		]
	},
	searchToolbar: {
		tagName: "div",
		attributes: {
			class: "row mb-3 align-items-center",
			"data-role": "search-toolbar"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 d-flex align-items-center",
					"data-role": "search-label-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 text-center d-flex align-items-center justify-content-center",
					"data-role": "search-helper-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4",
					"data-role": "search-input-slot"
				},
				children: []
			}
		]
	},
	searchLabel: {
		tagName: "h6",
		textContent: "Items",
		attributes: {
			class: "mb-0 fw-semibold text-secondary",
			id: "table-title"
		}
	},
	searchHelper: {
		tagName: "span",
		textContent: "Showing all records",
		attributes: {
			id: "search-feedback",
			class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
		}
	},
	searchInput: {
		tagName: "div",
		attributes: { class: "input-group" },
		children: [{
			tagName: "span",
			attributes: { class: "input-group-text bg-white" },
			children: [{
				tagName: "i",
				attributes: { class: "bi bi-search" },
				textContent: "🔍"
			}]
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "tableSearch",
				class: "form-control",
				placeholder: "Search table..."
			}
		}]
	},
	optionsEditButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "edit",
			attributes: { class: "btn btn-secondary btn-sm ks-btn-edit" }
		}]
	},
	optionsDeleteButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "delete",
			attributes: { class: "btn btn-danger btn-sm ks-btn-delete" }
		}]
	},
	headerForEditOption: {
		tagName: "th",
		textContent: "edit",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	headerForDeleteOption: {
		tagName: "th",
		textContent: "delete",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForEditOption: {
		tagName: "col",
		attributes: { width: "80px" }
	},
	colGroupForDeleteOption: {
		tagName: "col",
		attributes: { width: "90px" }
	},
	tableWithFooterParent: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-footer-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-with-footer-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-with-footer-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-with-footer-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-with-footer-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-with-footer-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-with-footer-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-with-footer-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableWithSearchAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-search-footer-parent-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-with-footer-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-with-footer-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-with-footer-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-with-footer-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-with-footer-body-id"
						},
						children: []
					},
					{
						tagName: "tfoot",
						attributes: {
							"data-role": "table-footer",
							id: "table-with-footer-footer-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-footer-row",
								id: "table-with-footer-footer-row-id"
							},
							children: []
						}]
					}
				]
			}]
		}]
	},
	accordionSimple: {
		tagName: "div",
		attributes: {
			class: "accordion shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	accordionFlush: {
		tagName: "div",
		attributes: {
			class: "accordion accordion-flush shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	buildAccordionItem: {
		tagName: "div",
		attributes: {
			class: "accordion-item",
			"data-role": "accordion-item"
		},
		children: [{
			tagName: "h2",
			attributes: {
				class: "accordion-header",
				id: "heading-${id}"
			},
			children: [{
				tagName: "button",
				attributes: {
					class: "accordion-button collapsed",
					type: "button",
					"data-bs-toggle": "collapse",
					"data-bs-target": "#collapse-${id}",
					"aria-expanded": "false",
					"aria-controls": "collapse-${id}"
				},
				textContent: "${title}"
			}]
		}, {
			tagName: "div",
			attributes: {
				id: "collapse-${id}",
				class: "accordion-collapse collapse",
				"aria-labelledby": "heading-${id}",
				"data-bs-parent": "#accordion-parent-id",
				"data-role": "accordion-collapse"
			},
			children: [{
				tagName: "div",
				attributes: { class: "accordion-body text-secondary" },
				textContent: "${content}"
			}]
		}]
	},
	cardSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithHeader: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-header bg-white py-3 fw-bold border-bottom",
				"data-role": "card-header"
			},
			children: []
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithFooter: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 fw-bold border-bottom",
					"data-role": "card-header"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					"data-role": "card-body"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light py-3 border-top",
					"data-role": "card-footer"
				},
				children: []
			}
		]
	},
	cardImageTop: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3 overflow-hidden",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "img",
			attributes: {
				class: "card-img-top",
				src: "${imageSrc}",
				alt: "${imageAlt}",
				"data-role": "card-img"
			}
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	buildCardBodyTemplate: {
		tagName: "div",
		attributes: { class: "card-content" },
		children: [{
			tagName: "h5",
			attributes: { class: "card-title fw-bold text-dark mb-2" },
			textContent: "${title}"
		}, {
			tagName: "p",
			attributes: { class: "card-text text-secondary mb-3" },
			textContent: "${text}"
		}]
	},
	buildCardHeaderTemplate: {
		tagName: "span",
		attributes: { class: "card-header-title text-dark" },
		textContent: "${headerTitle}"
	},
	buildCardFooterTemplate: {
		tagName: "small",
		attributes: { class: "text-muted" },
		textContent: "${footerText}"
	},
	listSimple: {
		tagName: "ul",
		attributes: {
			class: "list-unstyled mb-0",
			id: "list-parent-id",
			"data-role": "list-parent"
		},
		children: []
	},
	listGroup: {
		tagName: "ul",
		attributes: {
			class: "list-group shadow-sm",
			id: "list-group-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	listOrdered: {
		tagName: "ol",
		attributes: {
			class: "list-group list-group-numbered shadow-sm",
			id: "list-ordered-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	menuSimple: {
		tagName: "ul",
		attributes: {
			class: "nav nav-pills flex-column bg-white p-3 rounded-3 shadow-sm border",
			id: "menu-parent-id",
			"data-role": "menu-parent"
		},
		children: []
	},
	menuCardsBase: {
		tagName: "div",
		attributes: {
			class: "row g-4",
			id: "menu-cards-parent-id",
			"data-role": "menu-cards-parent"
		},
		children: []
	},
	buildListItemTemplate: {
		tagName: "li",
		attributes: {
			class: "py-2 px-3 border-bottom d-flex align-items-center text-secondary",
			"data-role": "list-item"
		},
		textContent: "${text}"
	},
	buildListGroupItemTemplate: {
		tagName: "li",
		attributes: {
			class: "list-group-item d-flex justify-content-between align-items-center py-3",
			"data-role": "list-group-item"
		},
		children: [{
			tagName: "span",
			textContent: "${text}"
		}, {
			tagName: "span",
			attributes: { class: "badge bg-primary rounded-pill px-3 py-2" },
			textContent: "${badge}"
		}]
	},
	buildMenuItemTemplate: {
		tagName: "li",
		attributes: {
			class: "nav-item mb-1",
			"data-role": "menu-item"
		},
		children: [{
			tagName: "a",
			attributes: {
				class: "nav-link text-dark fw-medium",
				href: "${href}"
			},
			textContent: "${text}"
		}]
	},
	buildMenuCardItemTemplate: {
		tagName: "div",
		attributes: {
			class: "col-md-4 col-sm-6",
			"data-role": "menu-card-col"
		},
		children: [{
			tagName: "div",
			attributes: { class: "card h-100 shadow-sm border rounded-3" },
			children: [{
				tagName: "div",
				attributes: { class: "card-body p-4 d-flex flex-column" },
				children: [
					{
						tagName: "h5",
						attributes: { class: "card-title fw-bold text-primary mb-2" },
						textContent: "${title}"
					},
					{
						tagName: "p",
						attributes: { class: "card-text text-muted small flex-grow-1" },
						textContent: "${description}"
					},
					{
						tagName: "a",
						attributes: {
							class: "btn btn-outline-primary btn-sm mt-3",
							href: "${href}"
						},
						textContent: "${actionText}"
					}
				]
			}]
		}]
	}
}, Ie = {
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: { initialize: "serialRoot" }
			}
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			options: {
				serial: { showSerial: "serialChild" },
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		options: {}
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		options: {}
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		options: {}
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		options: {}
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		options: {}
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			options: {}
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			options: {}
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			options: {}
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			options: {}
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			options: {}
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			options: {}
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			options: {}
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			options: {}
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			options: {}
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			options: {}
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			options: {}
		}
	}
}, Le = {
	tableSearchBar: {
		tagName: "div",
		attributes: { class: "row mb-3 align-items-center" },
		children: [
			{
				tagName: "div",
				attributes: { class: "col-md-4 d-flex align-items-center" },
				children: [{
					tagName: "h6",
					attributes: {
						class: "mb-0 fw-semibold text-secondary",
						id: "table-title"
					},
					textContent: "Items"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4 text-center d-flex align-items-center justify-content-center" },
				children: [{
					tagName: "span",
					attributes: {
						id: "search-feedback",
						class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
					},
					textContent: "Showing all records"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4" },
				children: [{
					tagName: "div",
					attributes: { class: "input-group" },
					children: [{
						tagName: "span",
						attributes: { class: "input-group-text bg-white" },
						children: [{
							tagName: "i",
							attributes: { class: "bi bi-search" },
							textContent: "🔍"
						}]
					}, {
						tagName: "input",
						attributes: {
							type: "text",
							id: "tableSearch",
							class: "form-control",
							placeholder: "Search table..."
						}
					}]
				}]
			}
		]
	},
	buildBodyTr: {
		tagName: "tr",
		attributes: { class: "align-middle" },
		children: []
	},
	buildColGroup: {
		tagName: "col",
		attributes: { width: "${width}" }
	},
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	buildFooter: {
		tagName: "td",
		children: [{
			tagName: "input",
			attributes: {
				type: "text",
				placeholder: "enter ${columnName}",
				name: "${columnName}",
				id: "${columnName}",
				list: "${columnName}",
				class: "form-control"
			}
		}]
	},
	buildBodyCell: {
		tagName: "td",
		textContent: "${rowValue}",
		attributes: { class: "py-3 px-3 text-secondary" }
	},
	button: {
		tagName: "button",
		textContent: "${columnName}",
		attributes: { class: "btn btn-primary btn-sm" }
	},
	buttonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "${agg:count}",
			attributes: { class: "btn btn-primary btn-sm" }
		}]
	},
	optionsButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "show",
			attributes: { class: "btn btn-primary btn-sm ks-btn-show" }
		}]
	},
	buildOption: {
		tagName: "option",
		textContent: "${rowValue}",
		attributes: { value: "${rowValue}" }
	},
	buildSelect: {
		tagName: "select",
		attributes: {
			id: "${columnName}",
			name: "${columnName}",
			"data-name": "${columnName}",
			class: "form-select shadow-sm mb-3"
		},
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: {
			id: "${columnName}",
			"data-name": "${columnName}"
		},
		children: []
	},
	buildFormField: {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: "${columnName}",
			attributes: {
				for: "${columnName}",
				class: "form-label fw-semibold text-capitalize"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "${columnName}",
				name: "${columnName}",
				placeholder: "Enter ${columnName}...",
				class: "form-control"
			}
		}]
	},
	emptyCell: {
		tagName: "td",
		children: []
	},
	headerSerialCell: {
		tagName: "th",
		textContent: "#",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForSerial: {
		tagName: "col",
		attributes: { width: "50px" }
	},
	colGroupForOption: {
		tagName: "col",
		attributes: { width: "100px" }
	},
	headerForOption: {
		tagName: "th",
		textContent: "options",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	tdWithButtonSaveWarning: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "save",
			attributes: { class: "btn btn-warning btn-sm ks-btn-save" }
		}]
	},
	tableSearch: {
		tagName: "div",
		attributes: { class: "row mb-3 justify-content-end" },
		children: [{
			tagName: "div",
			attributes: { class: "col-md-4" },
			children: [{
				tagName: "div",
				attributes: { class: "input-group" },
				children: [{
					tagName: "span",
					attributes: { class: "input-group-text bg-white" },
					children: [{
						tagName: "i",
						attributes: { class: "bi bi-search" },
						textContent: "🔍"
					}]
				}, {
					tagName: "input",
					attributes: {
						type: "text",
						id: "tableSearch",
						class: "form-control",
						placeholder: "Search table..."
					}
				}]
			}]
		}]
	},
	tableWithSearch: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-withSearch-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-withSearch-table-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-simple-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-simple-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-simple-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-simple-body-id"
						},
						children: []
					}
				]
			}]
		}]
	},
	tableSimple: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				}
			]
		}]
	},
	tableWithFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableBodyOnly: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-tag-id"
		},
		children: [{
			tagName: "tbody",
			attributes: {
				"data-role": "table-body",
				id: "table-body-id"
			},
			children: []
		}]
	},
	tableBodyOnly1: {
		tagName: "tbody",
		attributes: {
			"data-role": "table-body",
			id: "table-body-only-id"
		},
		children: []
	},
	tableFooterOnly: {
		tagName: "tfoot",
		attributes: {
			"data-role": "table-footer",
			id: "table-footer-only-id"
		},
		children: [{
			tagName: "tr",
			attributes: {
				"data-role": "table-footer-row",
				id: "table-footer-only-footer-row-id"
			},
			children: []
		}]
	},
	tableHeaderOnly: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-colgroup-id"
				},
				children: []
			}, {
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-row-id"
					},
					children: []
				}]
			}]
		}]
	},
	tableHeaderOnly1: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-header-only-id"
		},
		children: [
			{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-header-only-colgroup-id"
				},
				children: []
			},
			{
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-only-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-only-header-row-id"
					},
					children: []
				}]
			},
			{
				tagName: "tbody",
				attributes: {
					"data-role": "table-body",
					id: "table-header-only-body-id"
				},
				children: []
			}
		]
	},
	tableHeaderAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-simple-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-simple-table-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-simple-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-simple-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-simple-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-simple-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-simple-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-simple-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	selectBase: {
		tagName: "div",
		attributes: {
			"data-role": "select-container",
			id: "select-base-id"
		},
		children: []
	},
	dataListBase: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-base-id"
		},
		children: []
	},
	dataListSimple: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-simple-id"
		},
		children: []
	},
	selectOptionsOnlyBase: [],
	searchInputBase: {
		tagName: "div",
		attributes: {
			class: "d-flex align-items-center gap-2",
			id: "search-input-base-id"
		},
		children: [{
			tagName: "label",
			textContent: "${label}",
			attributes: {
				class: "form-label mb-0 text-nowrap fw-semibold",
				for: "${id}",
				id: "search-input-label-id"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "search",
				placeholder: "${placeholder}",
				class: "form-control",
				id: "search-input-field-id"
			}
		}]
	},
	formBase: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-base-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-base-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-base-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-base-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-base-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-base-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-base-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-base-submit-button-id"
					}
				}]
			}
		]
	},
	formSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-simple-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-simple-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-simple-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-simple-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-simple-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-simple-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-simple-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-simple-submit-button-id"
					}
				}]
			}
		]
	},
	searchToolbar: {
		tagName: "div",
		attributes: {
			class: "row mb-3 align-items-center",
			"data-role": "search-toolbar"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 d-flex align-items-center",
					"data-role": "search-label-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 text-center d-flex align-items-center justify-content-center",
					"data-role": "search-helper-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4",
					"data-role": "search-input-slot"
				},
				children: []
			}
		]
	},
	searchLabel: {
		tagName: "h6",
		textContent: "Items",
		attributes: {
			class: "mb-0 fw-semibold text-secondary",
			id: "table-title"
		}
	},
	searchHelper: {
		tagName: "span",
		textContent: "Showing all records",
		attributes: {
			id: "search-feedback",
			class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
		}
	},
	searchInput: {
		tagName: "div",
		attributes: { class: "input-group" },
		children: [{
			tagName: "span",
			attributes: { class: "input-group-text bg-white" },
			children: [{
				tagName: "i",
				attributes: { class: "bi bi-search" },
				textContent: "🔍"
			}]
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "tableSearch",
				class: "form-control",
				placeholder: "Search table..."
			}
		}]
	},
	optionsEditButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "edit",
			attributes: { class: "btn btn-secondary btn-sm ks-btn-edit" }
		}]
	},
	optionsDeleteButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "delete",
			attributes: { class: "btn btn-danger btn-sm ks-btn-delete" }
		}]
	},
	headerForEditOption: {
		tagName: "th",
		textContent: "edit",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	headerForDeleteOption: {
		tagName: "th",
		textContent: "delete",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForEditOption: {
		tagName: "col",
		attributes: { width: "80px" }
	},
	colGroupForDeleteOption: {
		tagName: "col",
		attributes: { width: "90px" }
	},
	tableWithFooterParent: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-footer-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-with-footer-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-with-footer-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-with-footer-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-with-footer-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-with-footer-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-with-footer-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-with-footer-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableWithSearchAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-search-footer-parent-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-with-footer-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-with-footer-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-with-footer-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-with-footer-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-with-footer-body-id"
						},
						children: []
					},
					{
						tagName: "tfoot",
						attributes: {
							"data-role": "table-footer",
							id: "table-with-footer-footer-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-footer-row",
								id: "table-with-footer-footer-row-id"
							},
							children: []
						}]
					}
				]
			}]
		}]
	},
	accordionSimple: {
		tagName: "div",
		attributes: {
			class: "accordion shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	accordionFlush: {
		tagName: "div",
		attributes: {
			class: "accordion accordion-flush shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	buildAccordionItem: {
		tagName: "div",
		attributes: {
			class: "accordion-item",
			"data-role": "accordion-item"
		},
		children: [{
			tagName: "h2",
			attributes: {
				class: "accordion-header",
				id: "heading-${id}"
			},
			children: [{
				tagName: "button",
				attributes: {
					class: "accordion-button collapsed",
					type: "button",
					"data-bs-toggle": "collapse",
					"data-bs-target": "#collapse-${id}",
					"aria-expanded": "false",
					"aria-controls": "collapse-${id}"
				},
				textContent: "${title}"
			}]
		}, {
			tagName: "div",
			attributes: {
				id: "collapse-${id}",
				class: "accordion-collapse collapse",
				"aria-labelledby": "heading-${id}",
				"data-bs-parent": "#accordion-parent-id",
				"data-role": "accordion-collapse"
			},
			children: [{
				tagName: "div",
				attributes: { class: "accordion-body text-secondary" },
				textContent: "${content}"
			}]
		}]
	},
	cardSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithHeader: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-header bg-white py-3 fw-bold border-bottom",
				"data-role": "card-header"
			},
			children: []
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithFooter: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 fw-bold border-bottom",
					"data-role": "card-header"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					"data-role": "card-body"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light py-3 border-top",
					"data-role": "card-footer"
				},
				children: []
			}
		]
	},
	cardImageTop: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3 overflow-hidden",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "img",
			attributes: {
				class: "card-img-top",
				src: "${imageSrc}",
				alt: "${imageAlt}",
				"data-role": "card-img"
			}
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	buildCardBodyTemplate: {
		tagName: "div",
		attributes: { class: "card-content" },
		children: [{
			tagName: "h5",
			attributes: { class: "card-title fw-bold text-dark mb-2" },
			textContent: "${title}"
		}, {
			tagName: "p",
			attributes: { class: "card-text text-secondary mb-3" },
			textContent: "${text}"
		}]
	},
	buildCardHeaderTemplate: {
		tagName: "span",
		attributes: { class: "card-header-title text-dark" },
		textContent: "${headerTitle}"
	},
	buildCardFooterTemplate: {
		tagName: "small",
		attributes: { class: "text-muted" },
		textContent: "${footerText}"
	},
	listSimple: {
		tagName: "ul",
		attributes: {
			class: "list-unstyled mb-0",
			id: "list-parent-id",
			"data-role": "list-parent"
		},
		children: []
	},
	listGroup: {
		tagName: "ul",
		attributes: {
			class: "list-group shadow-sm",
			id: "list-group-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	listOrdered: {
		tagName: "ol",
		attributes: {
			class: "list-group list-group-numbered shadow-sm",
			id: "list-ordered-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	menuSimple: {
		tagName: "ul",
		attributes: {
			class: "nav nav-pills flex-column bg-white p-3 rounded-3 shadow-sm border",
			id: "menu-parent-id",
			"data-role": "menu-parent"
		},
		children: []
	},
	menuCardsBase: {
		tagName: "div",
		attributes: {
			class: "row g-4",
			id: "menu-cards-parent-id",
			"data-role": "menu-cards-parent"
		},
		children: []
	},
	buildListItemTemplate: {
		tagName: "li",
		attributes: {
			class: "py-2 px-3 border-bottom d-flex align-items-center text-secondary",
			"data-role": "list-item"
		},
		textContent: "${text}"
	},
	buildListGroupItemTemplate: {
		tagName: "li",
		attributes: {
			class: "list-group-item d-flex justify-content-between align-items-center py-3",
			"data-role": "list-group-item"
		},
		children: [{
			tagName: "span",
			textContent: "${text}"
		}, {
			tagName: "span",
			attributes: { class: "badge bg-primary rounded-pill px-3 py-2" },
			textContent: "${badge}"
		}]
	},
	buildMenuItemTemplate: {
		tagName: "li",
		attributes: {
			class: "nav-item mb-1",
			"data-role": "menu-item"
		},
		children: [{
			tagName: "a",
			attributes: {
				class: "nav-link text-dark fw-medium",
				href: "${href}"
			},
			textContent: "${text}"
		}]
	},
	buildMenuCardItemTemplate: {
		tagName: "div",
		attributes: {
			class: "col-md-4 col-sm-6",
			"data-role": "menu-card-col"
		},
		children: [{
			tagName: "div",
			attributes: { class: "card h-100 shadow-sm border rounded-3" },
			children: [{
				tagName: "div",
				attributes: { class: "card-body p-4 d-flex flex-column" },
				children: [
					{
						tagName: "h5",
						attributes: { class: "card-title fw-bold text-primary mb-2" },
						textContent: "${title}"
					},
					{
						tagName: "p",
						attributes: { class: "card-text text-muted small flex-grow-1" },
						textContent: "${description}"
					},
					{
						tagName: "a",
						attributes: {
							class: "btn btn-outline-primary btn-sm mt-3",
							href: "${href}"
						},
						textContent: "${actionText}"
					}
				]
			}]
		}]
	}
}, Re = {
	$schema: "./tags.schema.json",
	div: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["title", "role"],
		childTags: []
	},
	input: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"placeholder",
			"value",
			"name",
			"disabled",
			"readonly",
			"required",
			"list"
		]
	},
	checkbox: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"checked",
			"name",
			"value",
			"disabled",
			"required"
		]
	},
	colgroup: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["span"],
		childTags: ["col"]
	},
	col: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"span",
			"style",
			"width"
		]
	},
	label: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["for"],
		childTags: []
	},
	form: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"action",
			"method",
			"autocomplete",
			"enctype",
			"name",
			"novalidate",
			"target"
		],
		childTags: []
	},
	select: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"name",
			"disabled",
			"required",
			"multiple",
			"size"
		],
		childTags: ["option"]
	},
	p: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h1: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h2: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	span: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	img: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"src",
			"alt",
			"width",
			"height",
			"loading"
		]
	},
	button: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"type",
			"disabled",
			"name",
			"value"
		],
		childTags: []
	},
	table: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"border",
			"cellpadding",
			"cellspacing"
		],
		childTags: [
			"caption",
			"colgroup",
			"thead",
			"tbody",
			"tfoot",
			"tr"
		]
	},
	thead: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tbody: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tfoot: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tr: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["td", "th"]
	},
	th: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"scope",
			"colspan",
			"rowspan"
		],
		childTags: []
	},
	td: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["colspan", "rowspan"],
		childTags: []
	},
	datalist: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["option"]
	},
	option: {
		allowsTextContent: !0,
		allowsChildren: !1,
		allowedAttributes: [
			"value",
			"label",
			"selected",
			"disabled"
		]
	},
	header: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["role"],
		childTags: []
	},
	a: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"href",
			"target",
			"rel",
			"title",
			"download"
		],
		childTags: []
	},
	i: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["aria-hidden"],
		childTags: []
	},
	small: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	ul: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["type"],
		childTags: ["li"]
	},
	li: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["value"],
		childTags: []
	},
	hr: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: []
	}
}, ze = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	title: "TagsCatalogSchema",
	description: "JSON Schema for @keshavsoft/spec-repo tags.json catalog",
	type: "object",
	patternProperties: { "^[a-z0-9]+$": {
		type: "object",
		required: [
			"allowsTextContent",
			"allowsChildren",
			"allowedAttributes"
		],
		properties: {
			allowsTextContent: {
				type: "boolean",
				description: "Indicates whether the element permits direct textContent"
			},
			allowsChildren: {
				type: "boolean",
				description: "Indicates whether the element can contain child DOM elements"
			},
			allowedAttributes: {
				type: "array",
				items: { type: "string" },
				description: "List of specifically allowed HTML attributes for this tag"
			},
			childTags: {
				type: "array",
				items: { type: "string" },
				description: "Permitted child tag names if restricted"
			}
		},
		additionalProperties: !1
	} }
}, Be = {
	buildColgroup: {
		type: "single",
		narration: "Build column widths",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildColGroup",
		func: "fromCollection"
	},
	buildHeader: {
		type: "single",
		narration: "Build table header",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildHeader",
		func: "fromCollection"
	},
	buildFooter: {
		type: "single",
		narration: "Build table footer",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFooter",
		func: "fromCollection"
	},
	buildBody: {
		type: "rowOnColumn",
		narration: "Build table body",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		templateKey: {
			rowKey: "buildBodyTr",
			columnKey: "buildBodyCell"
		}
	},
	serial: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial number cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshiftSerialToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "buildBodyCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	search: [{
		narration: "Prepend the search row to top of the table.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-parent']"
		},
		sourcePath: null,
		templateKey: "tableSearch",
		func: null
	}],
	buildFormField: {
		type: "single",
		narration: "Build form fields from columns",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'form-body']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFormField",
		func: "fromCollection"
	},
	buildSelectWithOptions: {
		type: "columnOnRow",
		narration: "Build selects with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildSelect",
			rowKey: "buildOption"
		}
	},
	buildSelectOptions: {
		type: "single",
		narration: "Build select options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildOptionsArray: {
		type: "single",
		narration: "Build options array",
		destinationPath: {
			fileName: "base",
			filePath: []
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildDataListWithOptions: {
		type: "columnOnRow",
		narration: "Build datalists with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildDataList",
			rowKey: "buildOption"
		}
	},
	searchFrame: [{
		narration: "Insert the search toolbar frame before the table when a search feature is enabled.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$"
		},
		sourcePath: null,
		templateKey: "searchToolbar",
		func: null,
		skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
	}],
	searchLabel: [{
		narration: "Insert the search label into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-label-slot']"
		},
		sourcePath: null,
		templateKey: "searchLabel",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'table-title']"
	}],
	searchHelper: [{
		narration: "Insert the search helper text into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-helper-slot']"
		},
		sourcePath: null,
		templateKey: "searchHelper",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'search-feedback']"
	}],
	searchInput: [{
		narration: "Insert the search input into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-input-slot']"
		},
		sourcePath: null,
		templateKey: "searchInput",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'tableSearch']"
	}],
	serialRoot: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	serialChild: [{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshiftSerialToRows",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		sourcePath: null,
		templateKey: "buildBodyCell",
		func: null
	}],
	optionsShowButton: [
		{
			narration: "Append the options column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForOption",
			func: null
		},
		{
			narration: "Append the options header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForOption",
			func: null
		},
		{
			narration: "Append the options button cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsButtonCell",
			func: null
		},
		{
			narration: "Append the options footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "tdWithButtonSaveWarning",
			func: null
		}
	],
	optionsEditButton: [
		{
			narration: "Append edit column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForEditOption",
			func: null
		},
		{
			narration: "Append edit header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForEditOption",
			func: null
		},
		{
			narration: "Append edit button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsEditButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the edit action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	optionsDeleteButton: [
		{
			narration: "Append delete column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForDeleteOption",
			func: null
		},
		{
			narration: "Append delete header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForDeleteOption",
			func: null
		},
		{
			narration: "Append delete button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsDeleteButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the delete action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	buildAccordionItems: {
		type: "single",
		narration: "Build accordion items from array",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildAccordionItem",
		func: "fromCollection"
	},
	buildCardBody: {
		type: "single",
		narration: "Build card body content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-body']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardBodyTemplate",
		func: "applyTemplate"
	},
	buildCardHeader: {
		type: "single",
		narration: "Build card header content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-header']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardHeaderTemplate",
		func: "applyTemplate"
	},
	buildCardFooter: {
		type: "single",
		narration: "Build card footer content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-footer']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardFooterTemplate",
		func: "applyTemplate"
	},
	buildListItems: {
		type: "single",
		narration: "Build simple list items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListItemTemplate",
		func: "fromCollection"
	},
	buildListGroupItems: {
		type: "single",
		narration: "Build list-group items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListGroupItemTemplate",
		func: "fromCollection"
	},
	buildMenuItems: {
		type: "single",
		narration: "Build navigation menu items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuItemTemplate",
		func: "fromCollection"
	},
	buildMenuCards: {
		type: "single",
		narration: "Build menu cards grid",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuCardItemTemplate",
		func: "fromCollection"
	}
}, Ve = {
	name: "spec-repo",
	version: "1.17.1"
};
// ../json-renderers-run-instructions-steps/node_modules/spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: Ve,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: Le,
	tags: Re,
	tagsSchema: ze,
	instructions: Be,
	definitions: Ie
});
// ../json-renderers-run-instructions-steps/node_modules/declarative-instructions/src/v1/index.js
var He = {
	buildColgroup: {
		type: "single",
		narration: "Build column widths",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildColGroup",
		func: "fromCollection"
	},
	buildHeader: {
		type: "single",
		narration: "Build table header",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildHeader",
		func: "fromCollection"
	},
	buildFooter: {
		type: "single",
		narration: "Build table footer",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFooter",
		func: "fromCollection"
	},
	buildBody: {
		type: "rowOnColumn",
		narration: "Build table body",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		templateKey: {
			rowKey: "buildBodyTr",
			columnKey: "buildBodyCell"
		}
	},
	serial: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial number cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshiftSerialToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "buildBodyCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	search: [{
		narration: "Prepend the search row to top of the table.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-parent']"
		},
		sourcePath: null,
		templateKey: "tableSearch",
		func: null
	}],
	buildFormField: {
		type: "single",
		narration: "Build form fields from columns",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'form-body']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFormField",
		func: "fromCollection"
	},
	buildSelectWithOptions: {
		type: "columnOnRow",
		narration: "Build selects with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildSelect",
			rowKey: "buildOption"
		}
	},
	buildSelectOptions: {
		type: "single",
		narration: "Build select options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildOptionsArray: {
		type: "single",
		narration: "Build options array",
		destinationPath: {
			fileName: "base",
			filePath: []
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildDataListWithOptions: {
		type: "columnOnRow",
		narration: "Build datalists with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildDataList",
			rowKey: "buildOption"
		}
	},
	searchFrame: [{
		narration: "Insert the search toolbar frame before the table when a search feature is enabled.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$"
		},
		sourcePath: null,
		templateKey: "searchToolbar",
		func: null,
		skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
	}],
	searchLabel: [{
		narration: "Insert the search label into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-label-slot']"
		},
		sourcePath: null,
		templateKey: "searchLabel",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'table-title']"
	}],
	searchHelper: [{
		narration: "Insert the search helper text into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-helper-slot']"
		},
		sourcePath: null,
		templateKey: "searchHelper",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'search-feedback']"
	}],
	searchInput: [{
		narration: "Insert the search input into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-input-slot']"
		},
		sourcePath: null,
		templateKey: "searchInput",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'tableSearch']"
	}],
	serialRoot: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	serialChild: [{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshiftSerialToRows",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		sourcePath: null,
		templateKey: "buildBodyCell",
		func: null
	}],
	optionsShowButton: [
		{
			narration: "Append the options column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForOption",
			func: null
		},
		{
			narration: "Append the options header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForOption",
			func: null
		},
		{
			narration: "Append the options button cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsButtonCell",
			func: null
		},
		{
			narration: "Append the options footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "tdWithButtonSaveWarning",
			func: null
		}
	],
	optionsEditButton: [
		{
			narration: "Append edit column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForEditOption",
			func: null
		},
		{
			narration: "Append edit header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForEditOption",
			func: null
		},
		{
			narration: "Append edit button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsEditButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the edit action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	optionsDeleteButton: [
		{
			narration: "Append delete column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForDeleteOption",
			func: null
		},
		{
			narration: "Append delete header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForDeleteOption",
			func: null
		},
		{
			narration: "Append delete button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsDeleteButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the delete action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	buildAccordionItems: {
		type: "single",
		narration: "Build accordion items from array",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildAccordionItem",
		func: "fromCollection"
	},
	buildCardBody: {
		type: "single",
		narration: "Build card body content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-body']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardBodyTemplate",
		func: "applyTemplate"
	},
	buildCardHeader: {
		type: "single",
		narration: "Build card header content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-header']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardHeaderTemplate",
		func: "applyTemplate"
	},
	buildCardFooter: {
		type: "single",
		narration: "Build card footer content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-footer']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardFooterTemplate",
		func: "applyTemplate"
	},
	buildListItems: {
		type: "single",
		narration: "Build simple list items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListItemTemplate",
		func: "fromCollection"
	},
	buildListGroupItems: {
		type: "single",
		narration: "Build list-group items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListGroupItemTemplate",
		func: "fromCollection"
	},
	buildMenuItems: {
		type: "single",
		narration: "Build navigation menu items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuItemTemplate",
		func: "fromCollection"
	},
	buildMenuCards: {
		type: "single",
		narration: "Build menu cards grid",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuCardItemTemplate",
		func: "fromCollection"
	}
}, Ue = (e) => typeof e == "object" && !!e && !Array.isArray(e), We = (e, t) => {
	if (!Ue(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Ze(t, i);
	return n;
}, Ge = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Ze(t, e));
}, Ke = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, qe = (e, t) => Ke(e, t), Je = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Ye = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, Xe = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Ye,
		applyTemplate: e
	});
}, Ze = (e, t, n) => {
	let r = e, i = t;
	Je(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Ke(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = qe(a?.textContent, r)), "attributes" in a && (a.attributes = We(a?.attributes, r)), "children" in a && (a.children = Ge(a?.children, r))), a);
};
Xe(Ze);
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var Qe = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, $e = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, et = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: $e,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, tt = (e, t) => {
	let n = e, r = t;
	return Qe(n, r), n.map((e) => Ze(e, r));
};
et((e, t) => {
	let n = e;
	return Qe(n, t), n.map((e) => Ze(e, e[t]));
}, tt);
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-two-dimensions/src/v9/index.js
var nt = ({ outer: e = [], outerSpec: t, getInner: n, innerSpec: r } = {}) => e.map((e) => {
	let i = Ze(e, t), a = n ? n(e) : [];
	return i.children = a.length > 0 ? tt(a, r) : [], i;
}), rt = ({ columns: e = [], data: t = [], columnSpec: n, rowSpec: r } = {}) => nt({
	outer: Array.isArray(t) ? t : t?.data ?? t?.rows ?? [],
	outerSpec: r,
	innerSpec: n,
	getInner: (t) => e.map((e) => ({
		...e,
		rowValue: t[e.columnName]
	}))
}), it = ({ columns: e = [], data: t = [], rows: n, columnSpec: r, rowSpec: i } = {}) => {
	let a = n ?? (Array.isArray(t) ? t : t?.data ?? t?.rows ?? []);
	return nt({
		outer: e,
		outerSpec: r,
		innerSpec: i,
		getInner: (e) => Array.isArray(e.options) && e.options.length > 0 ? e.options.map((e) => typeof e == "object" ? e : { rowValue: e }) : a.map((t) => ({
			...t,
			rowValue: t[e.columnName] ?? t.value ?? t
		}))
	});
}, at = (e) => Array.isArray(e) ? e : [e], ot = (e, t, n) => {
	e[t] = n;
}, st = {
	set: ot,
	push: (e, t, n) => {
		e[t].push(...at(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...at(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(at(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(at(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, ct = Object.defineProperty, lt = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, dt = Object.prototype.propertyIsEnumerable, ft = Math.pow, pt = (e, t, n) => t in e ? ct(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, mt = (e, t) => {
	for (var n in t ||= {}) ut.call(t, n) && pt(e, n, t[n]);
	if (lt) for (var n of lt(t)) dt.call(t, n) && pt(e, n, t[n]);
	return e;
}, ht = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, gt = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, b = () => void 0, _t = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = C(e);
		return r === C(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = xt(e), a = xt(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, vt = (e, t, n = b) => {
	let r = [];
	if (!_t(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!_t(S(e.x, t), S(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !x(o, i) || !x(a, i)) return !1;
			let s = a[i];
			if (!x(o, i) || !_t(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, x = (e, t) => Object.prototype.hasOwnProperty.call(e, t), S = (e, t) => x(e, t) ? e[t] : void 0, yt = 16383, bt = 1e3, xt = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > bt) throw new gt(`Member name too long (maximum ${bt} characters)`);
	return t;
}, C = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, St = (e) => e instanceof RangeError && /call stack/i.test(e.message), w = (e) => Array.isArray(e), Ct = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), T = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, wt = (e) => typeof e == "number", E = (e) => typeof e == "string", Tt = (e) => e === void 0, D = (e) => e !== void 0;
function Et(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function Dt(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function Ot(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var kt = class extends SyntaxError {
	constructor(e, t, n, r) {
		super(e), this.expected = t, this.found = n, this.location = r, this.name = "SyntaxError";
	}
	format(e) {
		let t = "Error: " + this.message;
		if (this.location) {
			let n = null, r = e.find((e) => e.source === this.location.source);
			r && (n = r.text.split(/\r\n|\n|\r/g));
			let i = this.location.start, a = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, o = this.location.source + ":" + a.line + ":" + a.column;
			if (n) {
				let e = this.location.end, r = "".padEnd(a.line.toString().length, " "), s = n[i.line - 1], c = (i.line === e.line ? e.column : s.length + 1) - i.column || 1;
				t += "\n --> " + o + "\n" + r + " |\n" + a.line + " | " + s + "\n" + r + " | " + "".padEnd(i.column - 1, " ") + "".padEnd(c, "^");
			} else t += "\n at " + o;
		}
		return t;
	}
	static buildMessage(e, t) {
		function n(e) {
			return e.codePointAt(0).toString(16).toUpperCase();
		}
		let r = Object.prototype.hasOwnProperty.call(RegExp.prototype, "unicode") ? /* @__PURE__ */ RegExp("[\\p{C}\\p{Mn}\\p{Mc}]", "gu") : null;
		function i(e) {
			return r ? e.replace(r, (e) => "\\u{" + n(e) + "}") : e;
		}
		function a(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		function o(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		let s = {
			literal(e) {
				return "\"" + a(e.text) + "\"";
			},
			class(e) {
				let t = e.parts.map((e) => Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e));
				return "[" + (e.inverted ? "^" : "") + t.join("") + "]" + (e.unicode ? "u" : "");
			},
			any() {
				return "any character";
			},
			end() {
				return "end of input";
			},
			other(e) {
				return e.description;
			}
		};
		function c(e) {
			return s[e.type](e);
		}
		function l(e) {
			let t = e.map(c);
			if (t.sort(), t.length > 0) {
				let e = 1;
				for (let n = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[e] = t[n], e++);
				t.length = e;
			}
			switch (t.length) {
				case 1: return t[0];
				case 2: return t[0] + " or " + t[1];
				default: return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
			}
		}
		function u(e) {
			return e ? "\"" + a(e) + "\"" : "end of input";
		}
		return "Expected " + l(e) + " but " + u(t) + " found.";
	}
};
function At(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Vr }, a = Vr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, v = /^[*\/]/, ie = /^[a-zA-Z_]/, ae = /^[\x80-\uFFFF_]/, oe = /^[a-zA-Z0-9_]/, se = /^[0-9@$\-]/, ce = /^[^\/\\]/, le = /^[gimsuy]/, ue = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, de = /^[\uD800-\uDBFF]/, fe = /^[\uDC00-\uDFFF]/, y = /^[0-9]/, pe = /^[1-9]/, me = /^[eE]/, he = /^["\\]/, ge = /^['\\]/, _e = /^[ -\uD7FF\uE000-\uFFFF]/, ve = /^[dD]/, ye = /^[89abAB]/, be = /^[c-fC-F]/, xe = /^[0-9a-fA-F]/, Se = /^[ \t\n\r]/, Ce = H([",", "]"], !1, !1, !1), we = V("length", !1), Te = V("count", !1), Ee = V("match", !1), De = V("search", !1), Oe = V("value", !1), ke = H(["+", "-"], !1, !1, !1), Ae = H(["*", "/"], !1, !1, !1), je = Rr("string"), Me = H([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Ne = H([["", "￿"], "_"], !1, !1, !1), Pe = H([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Fe = V("-", !1), Ie = H([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Le = V("$", !1), Re = V("@", !1), ze = V("..", !1), Be = V(".", !1), Ve = V("*", !1), He = V("&&", !1), Ue = V("||", !1), We = V("!", !1), Ge = V("==", !1), Ke = V("!=", !1), qe = V(">=", !1), Je = V(">", !1), Ye = V("<=", !1), Xe = V("<", !1), Ze = V("=~", !1), Qe = V("in", !1), $e = V("nin", !1), et = V("subsetof", !1), tt = V("anyof", !1), nt = V("noneof", !1), rt = V("sizeof", !1), it = V("size", !1), at = V("empty", !1), ot = V("true", !1), st = V("false", !1), ct = V("null", !1), lt = V("{", !1), ut = V("}", !1), dt = V("[", !1), ft = V("]", !1), pt = V(":", !1), mt = V(",", !1), ht = V("(", !1), gt = V(")", !1), b = V("?", !1), _t = Rr("regex"), vt = V("/", !1), x = H(["/", "\\"], !0, !1, !1), S = V("\\", !1), yt = Lr(), bt = H([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), xt = H([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), C = H([["\ud800", "\udbff"]], !1, !1, !1), St = H([["\udc00", "\udfff"]], !1, !1, !1), w = H([["0", "9"]], !1, !1, !1), Ct = Rr("number"), T = V("0", !1), wt = H([["1", "9"]], !1, !1, !1), E = Rr("integer"), Tt = H(["e", "E"], !1, !1, !1), D = V("\"", !1), At = V("'", !1), jt = H(["\"", "\\"], !1, !1, !1), Mt = H(["'", "\\"], !1, !1, !1), Nt = H([[" ", "퟿"], ["", "￿"]], !1, !1, !1), Pt = V("b", !1), Ft = V("f", !1), It = V("n", !1), Lt = V("r", !1), Rt = V("t", !1), zt = V("u", !1), Bt = H(["d", "D"], !1, !1, !1), Vt = H([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Ht = V("\\u", !1), Ut = H([["c", "f"], ["C", "F"]], !1, !1, !1), Wt = H([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Gt = H([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function Kt(e) {
		return {
			type: "root",
			next: Et(e)
		};
	}
	function qt(e) {
		return e.map((e) => e[1]);
	}
	function Jt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Yt(e) {
		return e;
	}
	function Xt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function Zt() {
		return { type: "wildcard" };
	}
	function Qt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function $t() {
		return { type: "wildcard" };
	}
	function en(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function O(e) {
		return e;
	}
	function tn(e) {
		return e;
	}
	function nn(e, t) {
		return t.length > 0 ? {
			type: "bracketExpression",
			value: {
				type: "unions",
				values: [e, ...t.map((e) => e[3])]
			}
		} : {
			type: e.type === "numericLiteral" || e.type === "stringLiteral" || e.type === "identifier" ? "bracketMember" : "bracketExpression",
			value: e
		};
	}
	function rn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function an(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function on(e, t) {
		return Ot(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function sn(e, t) {
		return Ot(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function cn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function ln(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function un(e, t) {
		return t !== null || Dt(e);
	}
	function dn(e, t) {
		if (t === null) return e;
		let n = t[1];
		return n.operator === "reg" ? {
			type: "comparator",
			operator: "reg",
			left: e,
			right: n.right
		} : n.operator === "empty" ? {
			type: "comparator",
			operator: "empty",
			left: e,
			right: null
		} : {
			type: "comparator",
			operator: n.operator,
			left: e,
			right: n.right
		};
	}
	function fn(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function pn(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function mn() {
		return { operator: "empty" };
	}
	function hn() {
		return "eq";
	}
	function gn() {
		return "ne";
	}
	function _n() {
		return "le";
	}
	function vn() {
		return "lt";
	}
	function yn() {
		return "ge";
	}
	function bn() {
		return "gt";
	}
	function xn() {
		return "in";
	}
	function Sn() {
		return "nin";
	}
	function Cn() {
		return "subsetof";
	}
	function wn() {
		return "anyof";
	}
	function Tn() {
		return "noneof";
	}
	function En() {
		return "sizeof";
	}
	function Dn() {
		return "size";
	}
	function On(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function kn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function An() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function jn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function Mn(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function Nn() {
		return "length";
	}
	function Pn() {
		return "count";
	}
	function Fn() {
		return "match";
	}
	function In() {
		return "search";
	}
	function Ln() {
		return "value";
	}
	function Rn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function zn(e, t) {
		return t.length === 0 ? e : Ot(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function Bn(e, t) {
		return t.length === 0 ? e : Ot(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function Vn(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function Hn(e) {
		return {
			type: "root",
			next: Et(e)
		};
	}
	function Un(e) {
		return {
			type: "current",
			next: Et(e)
		};
	}
	function Wn(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Gn() {
		return { type: "wildcard" };
	}
	function Kn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function qn(e) {
		return {
			type: "stringLiteral",
			value: $(e)
		};
	}
	function Jn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Yn(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Xn(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function Zn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function Qn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function $n() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function er() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function tr(e) {
		return e;
	}
	function nr(e) {
		for (let [t] of e || []) $(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function rr(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function ir(e, t) {
		return [e, t.value];
	}
	function ar(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function or(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function sr(e) {
		return $(e);
	}
	function cr(e) {
		return $(e);
	}
	function lr() {
		return "true";
	}
	function ur() {
		return "false";
	}
	function dr() {
		return "null";
	}
	function fr(e) {
		return $(e);
	}
	function pr() {
		return "true";
	}
	function mr() {
		return "false";
	}
	function hr() {
		return "null";
	}
	function gr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function _r(e) {
		return e.join("");
	}
	function vr(e, t) {
		let n = parseFloat(z());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && B("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function yr() {
		let e = parseInt(z(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && B("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function br(e) {
		return e.join("");
	}
	function xr(e) {
		return e.join("");
	}
	function Sr(e) {
		return e;
	}
	function Cr() {
		return "\"";
	}
	function wr(e) {
		return e;
	}
	function Tr(e) {
		return e;
	}
	function Er() {
		return "'";
	}
	function Dr(e) {
		return e;
	}
	function Or() {
		return "\\";
	}
	function kr() {
		return "/";
	}
	function Ar() {
		return "\b";
	}
	function jr() {
		return "\f";
	}
	function Mr() {
		return "\n";
	}
	function Nr() {
		return "\r";
	}
	function k() {
		return "	";
	}
	function A(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Pr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function j(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let M = t.peg$currPos | 0, N = M, P = [{
		line: 1,
		column: 1
	}], F = M, Fr = t.peg$maxFailExpected || [], I = t.peg$silentFails | 0, L = /* @__PURE__ */ new Map(), R;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function z() {
		return e.substring(N, M);
	}
	function B(e, t) {
		throw t = t === void 0 ? zr(N, M) : t, Br(e, t);
	}
	function Ir(t = M) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function V(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function H(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function Lr() {
		return { type: "any" };
	}
	function U() {
		return { type: "end" };
	}
	function Rr(e) {
		return {
			type: "other",
			description: e
		};
	}
	function W(t) {
		let n = P[t], r;
		if (n) return n;
		if (t >= P.length) r = P.length - 1;
		else for (r = t; !P[--r];);
		for (n = P[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return P[t] = n, n;
	}
	function zr(e, t, n) {
		let i = W(e), a = W(t), o = {
			source: r,
			start: {
				offset: e,
				line: i.line,
				column: i.column
			},
			end: {
				offset: t,
				line: a.line,
				column: a.column
			}
		};
		return n && r && typeof r.offset == "function" && (o.start = r.offset(o.start), o.end = r.offset(o.end)), o;
	}
	function G(e) {
		M < F || (M > F && (F = M, Fr = []), Fr.push(e));
	}
	function Br(e, t) {
		return new kt(e, null, null, t);
	}
	function K(e, t, n) {
		return new kt(kt.buildMessage(e, t), e, t, n);
	}
	function Vr() {
		let e, t, r, i;
		return e = M, t = Ci(), t === n ? (M = e, e = n) : (r = q(), i = _a(), i === n ? (M = e, e = n) : (N = e, e = Kt(r))), e;
	}
	function q() {
		let e, t, r, i, a;
		for (e = M, t = [], r = M, i = Q(), a = Hr(), a === n ? (M = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = M, i = Q(), a = Hr(), a === n ? (M = r, r = n) : (i = [i, a], r = i);
		return N = e, t = qt(t), e = t, e;
	}
	function Hr() {
		let e;
		return e = Wr(), e === n && (e = Ur()), e;
	}
	function Ur() {
		let e, t, r;
		return e = M, t = Ei(), t === n ? (M = e, e = n) : (r = Gr(), r === n ? (M = e, e = n) : (N = e, e = Jt(r))), e === n && (e = M, t = qr(), t !== n && (N = e, t = Yt(t)), e = t), e;
	}
	function Wr() {
		let e, t, r;
		return e = M, t = Ti(), t === n ? (M = e, e = n) : (r = Kr(), r === n ? (M = e, e = n) : (N = e, e = Xt(r))), e;
	}
	function Gr() {
		let e, t;
		return e = M, t = Di(), t !== n && (N = e, t = Zt()), e = t, e === n && (e = M, t = Si(), t !== n && (N = e, t = Qt(t)), e = t), e;
	}
	function Kr() {
		let e, t;
		return e = M, t = Di(), t !== n && (N = e, t = $t()), e = t, e === n && (e = M, t = Si(), t !== n && (N = e, t = en(t)), e = t, e === n && (e = M, t = qr(), t !== n && (N = e, t = O(t)), e = t)), e;
	}
	function qr() {
		let e, t, r, i;
		return e = M, t = Zi(), t === n ? (M = e, e = n) : (Q(), r = Jr(), r === n ? (M = e, e = n) : (Q(), i = Qi(), i === n ? (M = e, e = n) : (N = e, e = tn(r)))), e;
	}
	function Jr() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = fi(), t !== n) {
			for (r = [], i = M, a = Q(), o = Y(), o === n ? (M = i, i = n) : (s = Q(), c = fi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = Y(), o === n ? (M = i, i = n) : (s = Q(), c = fi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = nn(t, r);
		} else M = e, e = n;
		return e;
	}
	function Yr() {
		let t, r, i, a, o, s, c, l, u;
		return t = M, r = na(), r === n ? (M = t, t = n) : (Q(), i = ea(), i === n ? (M = t, t = n) : (Q(), a = Xr(), a === n ? (M = t, t = n) : (Q(), o = ta(), o === n ? (M = t, t = n) : (s = M, I++, c = M, l = Q(), u = e.charAt(M), re.test(u) ? M++ : (u = n, I === 0 && G(Ce)), u === n ? (M = c, c = n) : (l = [l, u], c = l), I--, c === n ? s = n : (M = s, s = void 0), s === n ? (M = t, t = n) : (N = t, t = rn(a)))))), t === n && (t = M, r = na(), r === n ? (M = t, t = n) : (Q(), i = Xr(), i === n ? (M = t, t = n) : (N = t, t = an(i)))), t;
	}
	function Xr() {
		let e, t, r, i, a, o, s, c, l = M * 91 + 10, u = L.get(l);
		if (u) return M = u.nextPos, u.result;
		if (e = M, t = Zr(), t !== n) {
			for (r = [], i = M, a = Q(), o = ki(), o === n ? (M = i, i = n) : (s = Q(), c = Zr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = ki(), o === n ? (M = i, i = n) : (s = Q(), c = Zr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = on(t, r);
		} else M = e, e = n;
		return L.set(l, {
			nextPos: M,
			result: e
		}), e;
	}
	function Zr() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = Qr(), t !== n) {
			for (r = [], i = M, a = Q(), o = Oi(), o === n ? (M = i, i = n) : (s = Q(), c = Qr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = Oi(), o === n ? (M = i, i = n) : (s = Q(), c = Qr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = sn(t, r);
		} else M = e, e = n;
		return e;
	}
	function Qr() {
		let e, t, r, i, a;
		return e = M, t = Ai(), t === n ? (M = e, e = n) : (Q(), r = ea(), r === n ? (M = e, e = n) : (Q(), i = Xr(), i === n ? (M = e, e = n) : (Q(), a = ta(), a === n ? (M = e, e = n) : (N = e, e = cn(i))))), e === n && (e = M, t = Ai(), t === n ? (M = e, e = n) : (Q(), r = ni(), r === n ? (M = e, e = n) : (N = e, e = ln(r))), e === n && (e = $r())), e;
	}
	function $r() {
		let e, t, r, i, a;
		return e = M, t = si(), t === n ? (M = e, e = n) : (r = M, i = Q(), a = ei(), a === n ? (M = r, r = n) : (i = [i, a], r = i), r === n && (r = null), N = M, i = un(t, r), i = i ? void 0 : n, i === n ? (M = e, e = n) : (N = e, e = dn(t, r))), e === n && (e = ni()), e;
	}
	function ei() {
		let e, t, r;
		return e = M, t = ti(), t === n ? (M = e, e = n) : (Q(), r = si(), r === n ? (M = e, e = n) : (N = e, e = fn(t, r))), e === n && (e = M, t = Li(), t === n ? (M = e, e = n) : (Q(), r = pi(), r === n ? (M = e, e = n) : (N = e, e = pn(r))), e === n && (e = M, t = Gi(), t !== n && (N = e, t = mn()), e = t)), e;
	}
	function ti() {
		let e, t;
		return e = M, t = ji(), t !== n && (N = e, t = hn()), e = t, e === n && (e = M, t = Mi(), t !== n && (N = e, t = gn()), e = t, e === n && (e = M, t = Fi(), t !== n && (N = e, t = _n()), e = t, e === n && (e = M, t = Ii(), t !== n && (N = e, t = vn()), e = t, e === n && (e = M, t = Ni(), t !== n && (N = e, t = yn()), e = t, e === n && (e = M, t = Pi(), t !== n && (N = e, t = bn()), e = t, e === n && (e = M, t = Ri(), t !== n && (N = e, t = xn()), e = t, e === n && (e = M, t = zi(), t !== n && (N = e, t = Sn()), e = t, e === n && (e = M, t = Bi(), t !== n && (N = e, t = Cn()), e = t, e === n && (e = M, t = Vi(), t !== n && (N = e, t = wn()), e = t, e === n && (e = M, t = Hi(), t !== n && (N = e, t = Tn()), e = t, e === n && (e = M, t = Ui(), t !== n && (N = e, t = En()), e = t, e === n && (e = M, t = Wi(), t !== n && (N = e, t = Dn()), e = t)))))))))))), e;
	}
	function ni() {
		let e, t, r, i;
		return e = M, t = ea(), t === n ? (M = e, e = n) : (Q(), r = Xr(), r === n ? (M = e, e = n) : (Q(), i = ta(), i === n ? (M = e, e = n) : (N = e, e = On(r)))), e === n && (e = ri(), e === n && (e = ui(), e === n && (e = M, t = Ki(), t !== n && (N = e, t = kn()), e = t, e === n && (e = M, t = qi(), t !== n && (N = e, t = An()), e = t, e === n && (e = M, t = Ji(), t !== n && (N = e, t = jn()), e = t))))), e;
	}
	function ri() {
		let e, t, r, i, a;
		return e = M, t = ii(), t === n ? (M = e, e = n) : (r = ea(), r === n ? (M = e, e = n) : (Q(), i = ai(), i === n && (i = null), Q(), a = ta(), a === n ? (M = e, e = n) : (N = e, e = Mn(t, i)))), e;
	}
	function ii() {
		let t, r;
		return t = M, e.substr(M, 6) === o ? (r = o, M += 6) : (r = n, I === 0 && G(we)), r !== n && (N = t, r = Nn()), t = r, t === n && (t = M, e.substr(M, 5) === s ? (r = s, M += 5) : (r = n, I === 0 && G(Te)), r !== n && (N = t, r = Pn()), t = r, t === n && (t = M, e.substr(M, 5) === c ? (r = c, M += 5) : (r = n, I === 0 && G(Ee)), r !== n && (N = t, r = Fn()), t = r, t === n && (t = M, e.substr(M, 6) === l ? (r = l, M += 6) : (r = n, I === 0 && G(De)), r !== n && (N = t, r = In()), t = r, t === n && (t = M, e.substr(M, 5) === u ? (r = u, M += 5) : (r = n, I === 0 && G(Oe)), r !== n && (N = t, r = Ln()), t = r)))), t;
	}
	function ai() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = oi(), t !== n) {
			for (r = [], i = M, a = Q(), o = Y(), o === n ? (M = i, i = n) : (s = Q(), c = oi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = Y(), o === n ? (M = i, i = n) : (s = Q(), c = oi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = Rn(t, r);
		} else M = e, e = n;
		return e;
	}
	function oi() {
		let e;
		return e = si(), e === n && (e = hi()), e;
	}
	function si() {
		let t, r, i, a, o, s, c, l, u = M * 91 + 21, d = L.get(u);
		if (d) return M = d.nextPos, d.result;
		if (t = M, r = ci(), r !== n) {
			for (i = [], a = M, o = Q(), s = e.charAt(M), _.test(s) ? M++ : (s = n, I === 0 && G(ke)), s === n ? (M = a, a = n) : (c = Q(), l = ci(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = M, o = Q(), s = e.charAt(M), _.test(s) ? M++ : (s = n, I === 0 && G(ke)), s === n ? (M = a, a = n) : (c = Q(), l = ci(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			N = t, t = zn(r, i);
		} else M = t, t = n;
		return L.set(u, {
			nextPos: M,
			result: t
		}), t;
	}
	function ci() {
		let t, r, i, a, o, s, c, l;
		if (t = M, r = li(), r !== n) {
			for (i = [], a = M, o = Q(), s = e.charAt(M), v.test(s) ? M++ : (s = n, I === 0 && G(Ae)), s === n ? (M = a, a = n) : (c = Q(), l = li(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = M, o = Q(), s = e.charAt(M), v.test(s) ? M++ : (s = n, I === 0 && G(Ae)), s === n ? (M = a, a = n) : (c = Q(), l = li(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			N = t, t = Bn(r, i);
		} else M = t, t = n;
		return t;
	}
	function li() {
		let e, t, r, i;
		return e = M, t = ea(), t === n ? (M = e, e = n) : (Q(), r = si(), r === n ? (M = e, e = n) : (Q(), i = ta(), i === n ? (M = e, e = n) : (N = e, e = Vn(r)))), e === n && (e = ri(), e === n && (e = mi(), e === n && (e = ui()))), e;
	}
	function ui() {
		let e, t, r;
		return e = M, t = Ci(), t === n ? (M = e, e = n) : (r = q(), r === n ? (M = e, e = n) : (N = e, e = Hn(r))), e === n && (e = M, t = wi(), t === n ? (M = e, e = n) : (r = q(), r === n ? (M = e, e = n) : (N = e, e = Un(r)))), e;
	}
	function di() {
		let e, t, r, i, a, o, s, c, l;
		return e = M, t = M, r = ua(), r === n ? (M = t, t = n) : (i = Q(), r = [r, i], t = r), t === n && (t = null), r = $i(), r === n ? (M = e, e = n) : (i = Q(), a = M, o = ua(), o === n ? (M = a, a = n) : (s = Q(), o = [o, s], a = o), a === n && (a = null), o = M, s = $i(), s === n ? (M = o, o = n) : (c = Q(), l = ua(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), N = e, e = Wn(t, a, o)), e;
	}
	function fi() {
		let e, t;
		return e = Yr(), e === n && (e = di(), e === n && (e = M, t = Di(), t !== n && (N = e, t = Gn()), e = t, e === n && (e = M, t = ua(), t !== n && (N = e, t = Kn(t)), e = t, e === n && (e = M, t = fa(), t !== n && (N = e, t = qn(t)), e = t, e === n && (e = M, t = bi(), t !== n && (N = e, t = Jn(t)), e = t))))), e;
	}
	function pi() {
		let e, t, r;
		return e = M, t = ra(), t === n ? (M = e, e = n) : (r = ia(), N = e, e = Yn(t, r)), e;
	}
	function mi() {
		let e, t;
		return e = M, t = hi(), t !== n && (N = e, t = Xn(t)), e = t, e === n && (e = M, t = ca(), t !== n && (N = e, t = Zn(t)), e = t, e === n && (e = gi(), e === n && (e = vi(), e === n && (e = M, t = Ki(), t !== n && (N = e, t = Qn()), e = t, e === n && (e = M, t = qi(), t !== n && (N = e, t = $n()), e = t, e === n && (e = M, t = Ji(), t !== n && (N = e, t = er()), e = t)))))), e;
	}
	function hi() {
		let e, t;
		return I++, e = M, t = fa(), t !== n && (N = e, t = tr(t)), e = t, I--, e === n && (t = n, I === 0 && G(je)), e;
	}
	function gi() {
		let e, t, r, i;
		return e = M, t = Yi(), t === n ? (M = e, e = n) : (Q(), r = J(), r === n && (r = null), Q(), i = Xi(), i === n ? (M = e, e = n) : (N = e, e = nr(r))), e;
	}
	function J() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = _i(), t !== n) {
			for (r = [], i = M, a = Q(), o = Y(), o === n ? (M = i, i = n) : (s = Q(), c = _i(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = Y(), o === n ? (M = i, i = n) : (s = Q(), c = _i(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = rr(t, r);
		} else M = e, e = n;
		return e;
	}
	function _i() {
		let e, t, r, i;
		return e = M, t = fa(), t === n ? (M = e, e = n) : (Q(), r = $i(), r === n ? (M = e, e = n) : (Q(), i = mi(), i === n ? (M = e, e = n) : (N = e, e = ir(t, i)))), e;
	}
	function vi() {
		let e, t, r, i;
		return e = M, t = Zi(), t === n ? (M = e, e = n) : (Q(), r = yi(), r === n && (r = null), Q(), i = Qi(), i === n ? (M = e, e = n) : (N = e, e = ar(r))), e;
	}
	function yi() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = mi(), t !== n) {
			for (r = [], i = M, a = Q(), o = Y(), o === n ? (M = i, i = n) : (s = Q(), c = mi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = Y(), o === n ? (M = i, i = n) : (s = Q(), c = mi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = or(t, r);
		} else M = e, e = n;
		return e;
	}
	function bi() {
		let t, r, i, a, o, s;
		if (t = M, r = M, i = M, a = e.charAt(M), ie.test(a) ? M++ : (a = n, I === 0 && G(Me)), a !== n) {
			for (o = [], s = xi(); s !== n;) o.push(s), s = xi();
			a = [a, o], i = a;
		} else M = i, i = n;
		if (r = i === n ? i : e.substring(r, M), r !== n && (N = t, r = sr(r)), t = r, t === n) {
			if (t = M, r = M, i = [], a = e.charAt(M), ae.test(a) ? M++ : (a = n, I === 0 && G(Ne)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(M), ae.test(a) ? M++ : (a = n, I === 0 && G(Ne));
			else i = n;
			r = i === n ? i : e.substring(r, M), r !== n && (N = t, r = cr(r)), t = r, t === n && (t = M, r = Ki(), r !== n && (N = t, r = lr()), t = r, t === n && (t = M, r = qi(), r !== n && (N = t, r = ur()), t = r, t === n && (t = M, r = Ji(), r !== n && (N = t, r = dr()), t = r)));
		}
		return t;
	}
	function xi() {
		let t, r, i, a;
		return t = e.charAt(M), oe.test(t) ? M++ : (t = n, I === 0 && G(Pe)), t === n && (t = M, e.charCodeAt(M) === 45 ? (r = "-", M++) : (r = n, I === 0 && G(Fe)), r === n ? (M = t, t = n) : (i = M, I++, a = e.charAt(M), se.test(a) ? M++ : (a = n, I === 0 && G(Ie)), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r))), t;
	}
	function Si() {
		let e, t;
		return e = M, t = aa(), t !== n && (N = e, t = fr(t)), e = t, e === n && (e = M, t = Ki(), t !== n && (N = e, t = pr()), e = t, e === n && (e = M, t = qi(), t !== n && (N = e, t = mr()), e = t, e === n && (e = M, t = Ji(), t !== n && (N = e, t = hr()), e = t))), e;
	}
	function Ci() {
		let t;
		return e.charCodeAt(M) === 36 ? (t = "$", M++) : (t = n, I === 0 && G(Le)), t;
	}
	function wi() {
		let t;
		return e.charCodeAt(M) === 64 ? (t = "@", M++) : (t = n, I === 0 && G(Re)), t;
	}
	function Ti() {
		let t;
		return e.substr(M, 2) === ".." ? (t = "..", M += 2) : (t = n, I === 0 && G(ze)), t;
	}
	function Ei() {
		let t;
		return e.charCodeAt(M) === 46 ? (t = ".", M++) : (t = n, I === 0 && G(Be)), t;
	}
	function Di() {
		let t;
		return e.charCodeAt(M) === 42 ? (t = "*", M++) : (t = n, I === 0 && G(Ve)), t;
	}
	function Oi() {
		let t;
		return e.substr(M, 2) === "&&" ? (t = "&&", M += 2) : (t = n, I === 0 && G(He)), t;
	}
	function ki() {
		let t;
		return e.substr(M, 2) === "||" ? (t = "||", M += 2) : (t = n, I === 0 && G(Ue)), t;
	}
	function Ai() {
		let t;
		return e.charCodeAt(M) === 33 ? (t = "!", M++) : (t = n, I === 0 && G(We)), t;
	}
	function ji() {
		let t;
		return e.substr(M, 2) === "==" ? (t = "==", M += 2) : (t = n, I === 0 && G(Ge)), t;
	}
	function Mi() {
		let t;
		return e.substr(M, 2) === "!=" ? (t = "!=", M += 2) : (t = n, I === 0 && G(Ke)), t;
	}
	function Ni() {
		let t;
		return e.substr(M, 2) === ">=" ? (t = ">=", M += 2) : (t = n, I === 0 && G(qe)), t;
	}
	function Pi() {
		let t;
		return e.charCodeAt(M) === 62 ? (t = ">", M++) : (t = n, I === 0 && G(Je)), t;
	}
	function Fi() {
		let t;
		return e.substr(M, 2) === "<=" ? (t = "<=", M += 2) : (t = n, I === 0 && G(Ye)), t;
	}
	function Ii() {
		let t;
		return e.charCodeAt(M) === 60 ? (t = "<", M++) : (t = n, I === 0 && G(Xe)), t;
	}
	function Li() {
		let t;
		return e.substr(M, 2) === "=~" ? (t = "=~", M += 2) : (t = n, I === 0 && G(Ze)), t;
	}
	function Ri() {
		let t, r, i, a;
		return t = M, e.substr(M, 2) === "in" ? (r = "in", M += 2) : (r = n, I === 0 && G(Qe)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = M, e.substr(M, 3) === "nin" ? (r = "nin", M += 3) : (r = n, I === 0 && G($e)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = M, e.substr(M, 8) === d ? (r = d, M += 8) : (r = n, I === 0 && G(et)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = M, e.substr(M, 5) === f ? (r = f, M += 5) : (r = n, I === 0 && G(tt)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = M, e.substr(M, 6) === p ? (r = p, M += 6) : (r = n, I === 0 && G(nt)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = M, e.substr(M, 6) === m ? (r = m, M += 6) : (r = n, I === 0 && G(rt)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = M, e.substr(M, 4) === ee ? (r = ee, M += 4) : (r = n, I === 0 && G(it)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = M, e.substr(M, 5) === h ? (r = h, M += 5) : (r = n, I === 0 && G(at)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = M, e.substr(M, 4) === te ? (r = te, M += 4) : (r = n, I === 0 && G(ot)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = M, e.substr(M, 5) === ne ? (r = ne, M += 5) : (r = n, I === 0 && G(st)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t, r, i, a;
		return t = M, e.substr(M, 4) === g ? (r = g, M += 4) : (r = n, I === 0 && G(ct)), r === n ? (M = t, t = n) : (i = M, I++, a = Z(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(M) === 123 ? (t = "{", M++) : (t = n, I === 0 && G(lt)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(M) === 125 ? (t = "}", M++) : (t = n, I === 0 && G(ut)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(M) === 91 ? (t = "[", M++) : (t = n, I === 0 && G(dt)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(M) === 93 ? (t = "]", M++) : (t = n, I === 0 && G(ft)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(M) === 58 ? (t = ":", M++) : (t = n, I === 0 && G(pt)), t;
	}
	function Y() {
		let t;
		return e.charCodeAt(M) === 44 ? (t = ",", M++) : (t = n, I === 0 && G(mt)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(M) === 40 ? (t = "(", M++) : (t = n, I === 0 && G(ht)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(M) === 41 ? (t = ")", M++) : (t = n, I === 0 && G(gt)), t;
	}
	function na() {
		let t;
		return e.charCodeAt(M) === 63 ? (t = "?", M++) : (t = n, I === 0 && G(b)), t;
	}
	function ra() {
		let t, r, i, a, o, s;
		if (I++, t = M, e.charCodeAt(M) === 47 ? (r = "/", M++) : (r = n, I === 0 && G(vt)), r !== n) {
			for (i = [], a = e.charAt(M), ce.test(a) ? M++ : (a = n, I === 0 && G(x)), a === n && (a = M, e.charCodeAt(M) === 92 ? (o = "\\", M++) : (o = n, I === 0 && G(S)), o === n ? (M = a, a = n) : (e.length > M ? (s = e.charAt(M), M++) : (s = n, I === 0 && G(yt)), s === n ? (M = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(M), ce.test(a) ? M++ : (a = n, I === 0 && G(x)), a === n && (a = M, e.charCodeAt(M) === 92 ? (o = "\\", M++) : (o = n, I === 0 && G(S)), o === n ? (M = a, a = n) : (e.length > M ? (s = e.charAt(M), M++) : (s = n, I === 0 && G(yt)), s === n ? (M = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(M) === 47 ? (a = "/", M++) : (a = n, I === 0 && G(vt)), a === n ? (M = t, t = n) : (N = t, t = gr(i));
		} else M = t, t = n;
		return I--, t === n && (r = n, I === 0 && G(_t)), t;
	}
	function ia() {
		let t, r, i;
		for (t = M, r = [], i = e.charAt(M), le.test(i) ? M++ : (i = n, I === 0 && G(bt)); i !== n;) r.push(i), i = e.charAt(M), le.test(i) ? M++ : (i = n, I === 0 && G(bt));
		return N = t, r = _r(r), t = r, t;
	}
	function aa() {
		let t, r, i, a, o;
		if (t = M, r = M, i = oa(), i !== n) {
			for (a = [], o = sa(); o !== n;) a.push(o), o = sa();
			i = [i, a], r = i;
		} else M = r, r = n;
		return t = r === n ? r : e.substring(t, M), t;
	}
	function oa() {
		let t, r, i;
		return t = e.charAt(M), ue.test(t) ? M++ : (t = n, I === 0 && G(xt)), t === n && (t = M, r = e.charAt(M), de.test(r) ? M++ : (r = n, I === 0 && G(C)), r === n ? (M = t, t = n) : (i = e.charAt(M), fe.test(i) ? M++ : (i = n, I === 0 && G(St)), i === n ? (M = t, t = n) : (r = [r, i], t = r))), t;
	}
	function sa() {
		let t;
		return t = oa(), t === n && (t = e.charAt(M), y.test(t) ? M++ : (t = n, I === 0 && G(w))), t;
	}
	function ca() {
		let t, r, i, a, o, s, c;
		if (I++, t = M, e.charCodeAt(M) === 45 ? (r = "-", M++) : (r = n, I === 0 && G(Fe)), r === n && (r = null), i = la(), i !== n) {
			if (a = M, e.charCodeAt(M) === 46 ? (o = ".", M++) : (o = n, I === 0 && G(Be)), o !== n) {
				if (s = [], c = e.charAt(M), y.test(c) ? M++ : (c = n, I === 0 && G(w)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(M), y.test(c) ? M++ : (c = n, I === 0 && G(w));
				else s = n;
				s === n ? (M = a, a = n) : (o = [o, s], a = o);
			} else M = a, a = n;
			a === n && (a = null), o = da(), o === n && (o = null), N = t, t = vr(a, o);
		} else M = t, t = n;
		return I--, t === n && (r = n, I === 0 && G(Ct)), t;
	}
	function la() {
		let t, r, i, a;
		if (e.charCodeAt(M) === 48 ? (t = "0", M++) : (t = n, I === 0 && G(T)), t === n) {
			if (t = M, r = e.charAt(M), pe.test(r) ? M++ : (r = n, I === 0 && G(wt)), r !== n) {
				for (i = [], a = e.charAt(M), y.test(a) ? M++ : (a = n, I === 0 && G(w)); a !== n;) i.push(a), a = e.charAt(M), y.test(a) ? M++ : (a = n, I === 0 && G(w));
				r = [r, i], t = r;
			} else M = t, t = n;
		}
		return t;
	}
	function ua() {
		let t, r, i, a, o, s;
		if (I++, t = M, e.charCodeAt(M) === 48 ? (r = "0", M++) : (r = n, I === 0 && G(T)), r === n) {
			if (r = M, e.charCodeAt(M) === 45 ? (i = "-", M++) : (i = n, I === 0 && G(Fe)), i === n && (i = null), a = e.charAt(M), pe.test(a) ? M++ : (a = n, I === 0 && G(wt)), a !== n) {
				for (o = [], s = e.charAt(M), y.test(s) ? M++ : (s = n, I === 0 && G(w)); s !== n;) o.push(s), s = e.charAt(M), y.test(s) ? M++ : (s = n, I === 0 && G(w));
				i = [
					i,
					a,
					o
				], r = i;
			} else M = r, r = n;
		}
		return r !== n && (N = t, r = yr()), t = r, I--, t === n && (r = n, I === 0 && G(E)), t;
	}
	function da() {
		let t, r, i, a, o;
		if (t = M, r = e.charAt(M), me.test(r) ? M++ : (r = n, I === 0 && G(Tt)), r !== n) {
			if (i = e.charAt(M), _.test(i) ? M++ : (i = n, I === 0 && G(ke)), i === n && (i = null), a = [], o = e.charAt(M), y.test(o) ? M++ : (o = n, I === 0 && G(w)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(M), y.test(o) ? M++ : (o = n, I === 0 && G(w));
			else a = n;
			a === n ? (M = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else M = t, t = n;
		return t;
	}
	function fa() {
		let t, r, i, a;
		if (I++, t = M, e.charCodeAt(M) === 34 ? (r = "\"", M++) : (r = n, I === 0 && G(D)), r !== n) {
			for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
			e.charCodeAt(M) === 34 ? (a = "\"", M++) : (a = n, I === 0 && G(D)), a === n ? (M = t, t = n) : (N = t, t = br(i));
		} else M = t, t = n;
		if (t === n) {
			if (t = M, e.charCodeAt(M) === 39 ? (r = "'", M++) : (r = n, I === 0 && G(At)), r !== n) {
				for (i = [], a = ma(); a !== n;) i.push(a), a = ma();
				e.charCodeAt(M) === 39 ? (a = "'", M++) : (a = n, I === 0 && G(At)), a === n ? (M = t, t = n) : (N = t, t = xr(i));
			} else M = t, t = n;
		}
		return I--, t === n && (r = n, I === 0 && G(je)), t;
	}
	function pa() {
		let t, r, i;
		return t = M, r = M, I++, i = e.charAt(M), he.test(i) ? M++ : (i = n, I === 0 && G(jt)), I--, i === n ? r = void 0 : (M = r, r = n), r === n ? (M = t, t = n) : (i = ha(), i === n ? (M = t, t = n) : (N = t, t = Sr(i))), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && G(S)), r === n ? (M = t, t = n) : (e.charCodeAt(M) === 34 ? (i = "\"", M++) : (i = n, I === 0 && G(D)), i === n ? (M = t, t = n) : (N = t, t = Cr())), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && G(S)), r === n ? (M = t, t = n) : (i = ga(), i === n ? (M = t, t = n) : (N = t, t = wr(i))))), t;
	}
	function ma() {
		let t, r, i;
		return t = M, r = M, I++, i = e.charAt(M), ge.test(i) ? M++ : (i = n, I === 0 && G(Mt)), I--, i === n ? r = void 0 : (M = r, r = n), r === n ? (M = t, t = n) : (i = ha(), i === n ? (M = t, t = n) : (N = t, t = Tr(i))), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && G(S)), r === n ? (M = t, t = n) : (e.charCodeAt(M) === 39 ? (i = "'", M++) : (i = n, I === 0 && G(At)), i === n ? (M = t, t = n) : (N = t, t = Er())), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && G(S)), r === n ? (M = t, t = n) : (i = ga(), i === n ? (M = t, t = n) : (N = t, t = Dr(i))))), t;
	}
	function ha() {
		let t, r, i, a;
		return t = e.charAt(M), _e.test(t) ? M++ : (t = n, I === 0 && G(Nt)), t === n && (t = M, r = M, i = e.charAt(M), de.test(i) ? M++ : (i = n, I === 0 && G(C)), i === n ? (M = r, r = n) : (a = e.charAt(M), fe.test(a) ? M++ : (a = n, I === 0 && G(St)), a === n ? (M = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, M)), t;
	}
	function ga() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && G(S)), r !== n && (N = t, r = Or()), t = r, t === n && (t = M, e.charCodeAt(M) === 47 ? (r = "/", M++) : (r = n, I === 0 && G(vt)), r !== n && (N = t, r = kr()), t = r, t === n && (t = M, e.charCodeAt(M) === 98 ? (r = "b", M++) : (r = n, I === 0 && G(Pt)), r !== n && (N = t, r = Ar()), t = r, t === n && (t = M, e.charCodeAt(M) === 102 ? (r = "f", M++) : (r = n, I === 0 && G(Ft)), r !== n && (N = t, r = jr()), t = r, t === n && (t = M, e.charCodeAt(M) === 110 ? (r = "n", M++) : (r = n, I === 0 && G(It)), r !== n && (N = t, r = Mr()), t = r, t === n && (t = M, e.charCodeAt(M) === 114 ? (r = "r", M++) : (r = n, I === 0 && G(Lt)), r !== n && (N = t, r = Nr()), t = r, t === n && (t = M, e.charCodeAt(M) === 116 ? (r = "t", M++) : (r = n, I === 0 && G(Rt)), r !== n && (N = t, r = k()), t = r, t === n && (t = M, e.charCodeAt(M) === 117 ? (r = "u", M++) : (r = n, I === 0 && G(zt)), r === n ? (M = t, t = n) : (i = M, a = M, o = e.charAt(M), ve.test(o) ? M++ : (o = n, I === 0 && G(Bt)), o === n ? (M = a, a = n) : (s = e.charAt(M), ye.test(s) ? M++ : (s = n, I === 0 && G(Vt)), s === n ? (M = a, a = n) : (c = X(), c === n ? (M = a, a = n) : (l = X(), l === n ? (M = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, M), i === n ? (M = t, t = n) : (e.substr(M, 2) === "\\u" ? (a = "\\u", M += 2) : (a = n, I === 0 && G(Ht)), a === n ? (M = t, t = n) : (o = M, s = M, c = e.charAt(M), ve.test(c) ? M++ : (c = n, I === 0 && G(Bt)), c === n ? (M = s, s = n) : (l = e.charAt(M), be.test(l) ? M++ : (l = n, I === 0 && G(Ut)), l === n ? (M = s, s = n) : (u = X(), u === n ? (M = s, s = n) : (d = X(), d === n ? (M = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, M), o === n ? (M = t, t = n) : (N = t, t = A(i, o))))), t === n && (t = M, e.charCodeAt(M) === 117 ? (r = "u", M++) : (r = n, I === 0 && G(zt)), r === n ? (M = t, t = n) : (i = M, a = M, o = X(), o === n ? (M = a, a = n) : (s = X(), s === n ? (M = a, a = n) : (c = X(), c === n ? (M = a, a = n) : (l = X(), l === n ? (M = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, M), i === n ? (M = t, t = n) : (N = M, a = Pr(i), a = a ? n : void 0, a === n ? (M = t, t = n) : (N = t, t = j(i)))))))))))), t;
	}
	function X() {
		let t;
		return t = e.charAt(M), xe.test(t) ? M++ : (t = n, I === 0 && G(Wt)), t;
	}
	function Z() {
		let t;
		return t = e.charAt(M), oe.test(t) ? M++ : (t = n, I === 0 && G(Pe)), t;
	}
	function Q() {
		let t, r;
		for (I++, t = [], r = e.charAt(M), Se.test(r) ? M++ : (r = n, I === 0 && G(Gt)); r !== n;) t.push(r), r = e.charAt(M), Se.test(r) ? M++ : (r = n, I === 0 && G(Gt));
		return I--, t;
	}
	function _a() {
		let t, r;
		return t = M, I++, e.length > M ? (r = e.charAt(M), M++) : (r = n, I === 0 && G(yt)), I--, r === n ? t = void 0 : (M = t, t = n), t;
	}
	function $(e) {
		return e.length > 1e3 && B("Member name too long (maximum 1000 characters)"), e;
	}
	R = a();
	let va = R !== n && M === e.length;
	function ya() {
		throw R !== n && M < e.length && G(U()), K(Fr, F < e.length ? Ir(F) : null, F < e.length ? zr(F, F + 1) : zr(F, F));
	}
	if (t.peg$library) return {
		peg$result: R,
		peg$currPos: M,
		peg$FAILED: n,
		peg$maxFailExpected: Fr,
		peg$maxFailPos: F,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return R;
	ya();
}
var jt = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), Mt = {
	length: {
		args: ["value"],
		logical: !1
	},
	count: {
		args: ["nodes"],
		logical: !1
	},
	value: {
		args: ["nodes"],
		logical: !1
	},
	match: {
		args: ["value", "value"],
		logical: !0
	},
	search: {
		args: ["value", "value"],
		logical: !0
	}
}, Nt = (e) => {
	throw new ht(1, 1, e);
}, Pt = (e) => e.type === "root" || e.type === "current", Ft = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function It(e) {
	let t = [{
		node: e,
		context: "nodes"
	}], n = (e) => {
		for (let n = e.next; n; n = n.next) {
			let e = n.value;
			if (e.type === "dotdot" && (e = e.value), e.type !== "bracketExpression") continue;
			let r = e.value, i = r.type === "unions" ? r.values : [r];
			for (let e of i) e.type === "filterExpression" && t.push({
				node: e.value,
				context: "test"
			});
		}
	};
	for (; t.length > 0;) {
		let { node: e, context: r } = t.pop();
		if (typeof e != "object" || !e) continue;
		let i = e;
		if (Pt(i)) r === "value" && !Ft(i) && Nt("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && Nt(`Expected a query, found ${String(i.type)}`), i.type) {
			case "logicalExpression":
			case "notExpression":
			case "groupExpression":
				i.type === "logicalExpression" ? t.push({
					node: i.left,
					context: "test"
				}, {
					node: i.right,
					context: "test"
				}) : t.push({
					node: i.value,
					context: "test"
				});
				break;
			case "comparator": {
				let e = jt.has(i.operator) ? "value" : "any";
				t.push({
					node: i.left,
					context: e
				}), i.operator !== "reg" && t.push({
					node: i.right,
					context: e
				});
				break;
			}
			case "functionCall": {
				let e = i.name, n = Mt[e], a = i.args;
				a.length !== n.args.length && Nt(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && Nt(`The result of ${e}() must be compared`), r === "value" && n.logical && Nt(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
					node: e,
					context: n.args[r]
				}));
				break;
			}
			case "operation":
				t.push({
					node: i.left,
					context: "value"
				}, {
					node: i.right,
					context: "value"
				});
				break;
			case "groupOperation":
				t.push({
					node: i.value,
					context: r === "any" ? "any" : "value"
				});
				break;
			case "value": r === "test" && Nt("A literal must be compared");
		}
	}
}
function Lt(e) {
	let t;
	try {
		t = At(e);
	} catch (e) {
		if (St(e)) throw new ht(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new ht(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new ht(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return It(t), t;
}
var Rt = /* @__PURE__ */ new Set([
	"(",
	")",
	"*",
	"+",
	"-",
	".",
	"?",
	"[",
	"\\",
	"]",
	"^",
	"n",
	"r",
	"t",
	"{",
	"|",
	"}"
]), zt = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), Bt = (e) => e >= 55296 && e <= 56319, Vt = (e) => e >= 56320 && e <= 57343, Ht = (e) => e !== void 0 && e >= "0" && e <= "9", Ut = (e, t) => {
	let n = e.charCodeAt(t);
	return Bt(n) && Vt(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : Bt(n) || Vt(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, Wt = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !Rt.has(n) ? null : n === "n" ? {
		text: "\\n",
		length: 2,
		code: 10
	} : n === "r" ? {
		text: "\\r",
		length: 2,
		code: 13
	} : n === "t" ? {
		text: "\\t",
		length: 2,
		code: 9
	} : {
		text: "\\" + n,
		length: 2,
		code: n.charCodeAt(0)
	};
}, Gt = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return zt.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, Kt = (e, t) => {
	let n = e[t];
	return n === "\\" ? Wt(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : Ut(e, t);
}, qt = (e, t) => {
	let n = t + 1, r = "[";
	e[n] === "^" && (r += "^", n++);
	let i = !0;
	for (;;) {
		let a = e[n];
		if (a === void 0) return null;
		if (a === "]") return i ? null : {
			text: r + "]",
			length: n + 1 - t
		};
		if (a === "-") {
			if (!i && e[n + 1] !== "]") return null;
			r += "-", n++, i = !1;
			continue;
		}
		if (i = !1, a === "\\" && (e[n + 1] === "p" || e[n + 1] === "P")) {
			let t = Gt(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = Kt(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = Kt(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, Jt = (e, t) => {
	let n = t + 1, r = n;
	for (; Ht(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; Ht(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, Yt = (e) => {
	let t = e, n = "", r = 0, i = !1, a = 0;
	for (; a < t.length;) {
		let e = t[a];
		switch (e) {
			case "|":
				n += "|", i = !1, a++;
				continue;
			case "(":
				r++, n += "(", i = !1, a++;
				continue;
			case ")":
				if (r === 0) return null;
				r--, n += ")", i = !0, a++;
				continue;
			case "*":
			case "+":
			case "?":
				if (!i) return null;
				n += e, i = !1, a++;
				continue;
			case "{": {
				let e = i ? Jt(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = qt(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = Gt(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = Wt(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = Ut(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, Xt = 1e3, Zt = 1e3, Qt = 16, $t = /^[dgimsuy]*$/, en = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, O = class extends Error {}, tn = 0, nn = 1, rn = 2, an = 3, on = 4, sn = 5, cn = ft(2, 31) - 1, ln = (e, t) => {
	let n = e.op.length, r = e.scratch ?? {
		clist: new Int32Array(n),
		nlist: new Int32Array(n),
		onList: new Int32Array(n),
		stack: new Int32Array(n),
		atomGen: new Int32Array(e.atoms.length),
		atomHit: new Uint8Array(e.atoms.length),
		gen: 0,
		step: 0
	};
	return e.scratch = void 0, (r.gen > cn - t - 2 || r.step > cn - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, un = /* @__PURE__ */ new Set([
	"^",
	"$",
	"\\",
	".",
	"*",
	"+",
	"?",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	"|",
	"/"
]), dn = /^\{(\d+)(?:,(\d*))?\}/, fn = /^[0-9a-fA-F]{4}/, pn = /^\(\?([ims]*)(?:-([ims]*))?:/, mn = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, hn = class {
	constructor(e, t, n, r = !1) {
		this.src = e, this.unicode = t, this.iregexp = r, this.i = 0, this.mods = {
			i: n.includes("i"),
			m: n.includes("m"),
			s: n.includes("s")
		};
	}
	atom(e, t) {
		return {
			t: "atom",
			src: e,
			literal: t,
			mods: this.mods
		};
	}
	parse() {
		let e = this.parseAlt();
		if (this.i < this.src.length) throw new O("unexpected character");
		return e;
	}
	parseAlt() {
		let e = [this.parseSeq()];
		for (; this.src[this.i] === "|";) this.i++, e.push(this.parseSeq());
		return e.length === 1 ? e[0] : {
			t: "alt",
			alts: e
		};
	}
	parseSeq() {
		let e = [];
		for (; this.i < this.src.length && this.src[this.i] !== "|" && this.src[this.i] !== ")";) e.push(this.parseTerm());
		return e.length === 1 ? e[0] : {
			t: "cat",
			items: e
		};
	}
	parseTerm() {
		let e = this.src[this.i];
		return e === "^" ? (this.i++, {
			t: "bol",
			multiline: this.mods.m
		}) : e === "$" ? (this.i++, {
			t: "eol",
			multiline: this.mods.m
		}) : this.parseQuantifier(this.parseAtom());
	}
	parseAtom() {
		let { src: e } = this, t = this.i, n = e[t];
		if (n === "(") {
			let n = this.mods;
			if (e[t + 1] === "?") {
				let r = pn.exec(e.slice(t, t + 12));
				if (!r) throw new O("lookaround or named group");
				let i = mt({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new O("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new O("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new O("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(un.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new O("trailing backslash");
		if (r === "b" || r === "B") throw new O("word boundary");
		if (r >= "1" && r <= "9") throw new O("backreference");
		if (r === "0") {
			if (n) return 2;
			let r = 2;
			for (; r < 4 && /[0-7]/.test(t[e + r] ?? "");) r++;
			return r;
		}
		if (r === "c") return 3;
		if (r === "x" && /^[0-9a-fA-F]{2}/.test(t.slice(e + 2))) return 4;
		if (n && (r === "p" || r === "P" || r === "u") && t[e + 2] === "{") {
			let n = t.indexOf("}", e + 3);
			if (n === -1) throw new O("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && fn.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (fn.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
			}
			return 6;
		}
		return 2;
	}
	parseQuantifier(e) {
		let { src: t } = this, n = t[this.i], r, i;
		if (n === "*") r = 0, i = Infinity, this.i++;
		else if (n === "+") r = 1, i = Infinity, this.i++;
		else if (n === "?") r = 0, i = 1, this.i++;
		else if (n === "{") {
			let n = dn.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > Xt || i !== Infinity && i > Xt) throw new O("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, gn = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= Xt) throw new O("pattern too large");
		return this.op.push(e), this.x.push(t), this.y.push(n), this.op.length - 1;
	}
	atomId(e) {
		let t = (e.mods.i ? "i" : "") + (e.mods.s ? "s" : "") + (this.unicode ? "u" : ""), n = `${t}/${e.src}`, r = this.atomIds.get(n);
		return r === void 0 && (r = this.atoms.length, this.atoms.push({
			re: RegExp(`^(?:${e.src})$`, t),
			literal: e.mods.i ? void 0 : e.literal
		}), this.atomIds.set(n, r)), r;
	}
	finish() {
		this.emit(sn);
	}
	compile(e) {
		if (++this.work > 4 * Xt) throw new O("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(tn, this.atomId(e));
				return;
			case "bol":
				this.emit(an, +!!e.multiline);
				return;
			case "eol":
				this.emit(on, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(nn);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(rn)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(nn);
					this.x[t] = t + 1, this.compile(e.node), this.emit(rn, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(nn);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, _n = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new hn(e, r, t, n).parse(), a = new gn(r);
		return a.compile(i), a.finish(), {
			op: a.op,
			x: a.x,
			y: a.y,
			atoms: a.atoms,
			unicode: r,
			sticky: t.includes("y")
		};
	} catch (e) {
		if (e instanceof RangeError) throw e;
		return null;
	}
}, vn = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, v = !1, ie = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case tn:
					e[n++] = r;
					break;
				case sn: return u(c), v = !0, n;
				case rn:
					h[s++] = a[r];
					break;
				case nn:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case an:
					(_ === 0 || a[r] === 1 && mn(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case on: (_ === t.length || a[r] === 1 && mn(t.charCodeAt(_))) && (h[s++] = r + 1);
			}
		}
		return u(c), n;
	};
	if (g++, p = ie(d, 0, 0), v) return !0;
	for (; _ < t.length;) {
		if (p === 0 && l) return !1;
		let e = (c ? t.codePointAt(_) : t.charCodeAt(_)) > 65535 ? 2 : 1, n = t.slice(_, _ + e), r = re + _ + 1;
		g++, m = 0, _ += e;
		for (let e = 0; e < p; e++) {
			let t = d[e], i = a[t];
			if (te[i] !== r) {
				te[i] = r;
				let e = s[i];
				ne[i] = (e.literal === void 0 ? e.re.test(n) : e.literal === n) ? 1 : 0;
			}
			if (ne[i] === 1 && (m = ie(f, m, t + 1), v)) return !0;
		}
		if (!l && (m = ie(f, m, 0), v)) return !0;
		let i = d;
		d = f, f = i, p = m;
	}
	return !1;
}, yn = (e, t, n) => {
	let r = ln(e, t.length);
	try {
		return vn(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, bn = 256, xn = /* @__PURE__ */ new Map(), Sn = 0, Cn = (e, t, n, r, i = !1) => {
	if (e.length > Zt || t.length > 7 || !$t.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = xn.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = en(s) > Qt ? null : _n(n ? `^(?:${s})$` : s, t, i);
	Sn >= bn && (xn.clear(), Sn = 0);
	let l = xn.get(s);
	return l === void 0 && xn.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), Sn++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, wn = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), yn(e, t, n);
}, Tn = class {
	constructor(e) {
		this.nodes = e;
	}
}, En = (e) => {
	let t = !1;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === "\\" && n + 1 < e.length) {
			let r = e[n + 1];
			if ((r === "b" || r === "B") && !t) return !0;
			n++;
		} else r === "[" && !t ? t = !0 : r === "]" && t && (t = !1);
	}
	return !1;
}, Dn = (e) => {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (n === "\\") {
			let n = e[t + 1];
			if (n >= "1" && n <= "9") return !1;
			t++;
		} else if (n === "(" && e[t + 1] === "?") {
			let n = e[t + 2];
			if (n === "=" || n === "!") return !1;
			if (n === "<") {
				let n = e[t + 3];
				if (n === "=" || n === "!" || /[a-zA-Z]/.test(n ?? "")) return !1;
			}
		}
	}
	return !En(e);
}, On = 256, kn = /* @__PURE__ */ new Map(), An = (e, t) => {
	let n = kn.get(e);
	return n === void 0 && (n = Dn(e), kn.size >= On && kn.clear(), kn.set(Array.from(e).join(""), n)), t(e.length), n;
}, jn = /* @__PURE__ */ new Map(), Mn = (e, t) => {
	let n = jn.get(e);
	return n === void 0 && (n = Yt(e), n !== null && (n = Array.from(n).join("")), jn.size >= On && jn.clear(), jn.set(Array.from(e).join(""), n)), t(e.length), n;
}, Nn = 256, Pn = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > Zt) c = null;
		else if (o) {
			let n = Mn(e, i);
			c = n === null ? null : Cn(n, t, r, i, !0);
		} else c = An(e, i) ? Cn(e, t, r, i) : null;
		s !== void 0 && (s.size >= Nn && s.clear(), s.set(a, c));
	}
	return c !== null && wn(c, n, i);
}, Fn = {
	length: (e, t) => {
		let n = e[0];
		if (E(n)) {
			t(n.length);
			let e = n.length;
			for (let t = 0; t < n.length - 1; t++) {
				let r = n.charCodeAt(t);
				if (r >= 55296 && r <= 56319) {
					let r = n.charCodeAt(t + 1);
					r >= 56320 && r <= 57343 && (e--, t++);
				}
			}
			return e;
		}
		if (w(n)) return C(n);
		if (T(n)) {
			let e = xt(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !E(r) || !E(i) ? !1 : Pn(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !E(r) || !E(i) ? !1 : Pn(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, In = (e, t, n = b) => e === void 0 && t === void 0 || vt(e, t, n), Ln = (e, t, n = b) => !vt(e, t, n), Rn = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, zn = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return Rn(n) - Rn(i);
	}
	return e.length - t.length;
}, Bn = (e, t, n = b) => wt(e) && wt(t) ? e < t : E(e) && E(t) ? (n(Math.min(e.length, t.length)), zn(e, t) < 0) : !1, Vn = (e, t, n = b) => Bn(e, t, n) || In(e, t, n), Hn = (e, t, n = b) => wt(e) && wt(t) ? e > t : E(e) && E(t) ? (n(Math.min(e.length, t.length)), zn(e, t) > 0) : !1, Un = (e, t, n = b) => Hn(e, t, n) || In(e, t, n), Wn = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, Gn = (e, t, n) => {
	let r = C(e);
	for (let i = 0; i < r; i++) {
		let r = S(e, i);
		if (n(1 + Wn(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, Kn = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, qn = (e) => typeof e == "string" && e.length + 1 > yt, Jn = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = C(e);
	for (let n = 0; n < a; n++) {
		let r = S(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), qn(r) ? i.long.push(r) : i.set.add(Kn(r));
	}
	return n?.set(e, i), i;
}, Yn = ({ set: e, long: t }, n, r) => {
	if (qn(n)) {
		for (let e of t) if (r(1 + Wn(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(Kn(n)));
}, Xn = (e, t, n) => {
	let r = C(e);
	for (let i = 0; i < r; i++) if (n(), x(e, i) && t(e[i])) return !0;
	return !1;
}, Zn = {
	eq: In,
	ne: Ln,
	lt: Bn,
	le: Vn,
	gt: Hn,
	ge: Un,
	in: (e, t, n = b) => w(t) ? Gn(t, e, n) !== -1 : !1,
	nin: (e, t, n = b) => w(t) ? Gn(t, e, n) === -1 : !1,
	subsetof: (e, t, n = b, r) => {
		if (!w(e) || !w(t)) return !1;
		let i = Jn(t, n, r);
		return !Xn(e, (e) => !Yn(i, e, n), n);
	},
	anyof: (e, t, n = b, r) => {
		if (!w(e) || !w(t)) return !1;
		let i = Jn(t, n, r);
		return Xn(e, (e) => Yn(i, e, n), n);
	},
	noneof: (e, t, n = b, r) => {
		if (!w(e) || !w(t)) return !1;
		let i = Jn(t, n, r);
		return !Xn(e, (e) => Yn(i, e, n), n);
	},
	sizeof: (e, t) => !w(e) && !E(e) || !w(t) && !E(t) ? !1 : (w(e) ? C(e) : e.length) === (w(t) ? C(t) : t.length),
	size: (e, t) => !w(e) && !E(e) || !wt(t) ? !1 : (w(e) ? C(e) : e.length) === t
}, Qn = (e) => !w(e) && !E(e) ? !1 : (w(e) ? C(e) : e.length) === 0, $n = (e, t, n, r = b, i) => !E(e) || !E(t) ? !1 : Pn(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), er = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), tr = (e, t) => e.concat(`[${t}]`), nr = (e, t) => e < 0 ? t + e : e, rr = (e, t) => {
	let n = C(e), r = nr(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: x(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, ir = (e, t) => {
	for (let n of t) e.push(n);
}, ar = 1e6, or = 100, sr = 1e6, cr = 20, lr = 1e4, ur = 1e4, dr = class {
	constructor(e) {
		this.weight = 0, this.nodes = 0, this.stringPositions = 0, this.done = !1, this.seen = /* @__PURE__ */ new Set(), this.frames = [], this.visit(e);
	}
	advance(e) {
		let t = this.nodes + e, { frames: n } = this;
		for (; n.length > 0 && this.nodes < t;) {
			let e = n[n.length - 1];
			if (e.i >= e.length) {
				n.pop();
				continue;
			}
			let t = e.i++;
			if (e.keys === null) {
				let n = e.container;
				if (e.indices !== null) {
					let r = Number(e.indices[t]);
					x(n, r) && this.visit(n[r]);
				} else if (x(n, t)) this.visit(n[t]);
				else if (++e.holes > ur) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!x(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), w(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: C(e),
				i: 0,
				holes: 0
			});
			else if (T(e)) {
				let t = Object.keys(e);
				this.frames.push({
					container: e,
					keys: t,
					indices: null,
					length: t.length,
					i: 0,
					holes: 0
				});
			}
		}
	}
}, fr = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, er(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = er(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = C(e);
			for (let r = 0; r < n; r++) this.tick(), x(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new dr(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(lr, Math.ceil((this.retained - this.retainedLimit) / cr))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new gt(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(ar, or * e.weight) + t, this.retainedLimit = Math.max(sr, cr * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new dr(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(lr, Math.ceil((this.steps - this.stepLimit) / or))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new gt(`Query exceeded ${this.stepLimit} evaluation steps`);
			}
		}, {
			regexProgram: (e) => {
				this.largestRegexProgram = Math.max(this.largestRegexProgram, e);
			},
			regexWork: (e) => {
				this.regexSteps += e, this.tick(e);
			},
			regexSites: /* @__PURE__ */ new Map()
		}), this.readsCurrent = /* @__PURE__ */ new WeakMap(), this.invariantResults = /* @__PURE__ */ new Map(), this.isInvariant = (e) => (this.readsCurrent.has(e) || this.classify(e), !this.readsCurrent.get(e)), this.classify = (e) => {
			let t = this.readsCurrent, n = [], r = (e) => {
				if (typeof e != "object" || !e) return !1;
				let r = t.get(e);
				if (r !== void 0) return r;
				let i = e.type;
				if (i === "current") return t.set(e, !0), !0;
				if (i === "filterExpression" || i === "value") return t.set(e, !1), !1;
				let a = Object.values(e);
				n.push({
					node: e,
					children: a,
					i: 0,
					reads: !1
				});
			};
			for (r(e); n.length > 0;) {
				let e = n[n.length - 1];
				e.i < e.children.length ? r(e.children[e.i++]) === !0 && (e.reads = !0) : (t.set(e.node, e.reads), n.pop(), e.reads && n.length > 0 && (n[n.length - 1].reads = !0));
			}
		}, this.memoInvariant = (e, t) => {
			if (!this.isInvariant(e)) return t();
			if (this.invariantResults.has(e)) return this.invariantResults.get(e);
			let n = t();
			return this.invariantResults.set(e, n), n;
		}, this.handleRootQuery = (e, t) => {
			if (this.rootQueryCache.has(e)) return this.rootQueryCache.get(e);
			let n = this.handleSubscript(this.rootPayload, t);
			return this.rootQueryCache.set(e, n), n;
		}, this.handleIdentifier = (e, t) => this.selectMember(e, t), this.handleStringLiteral = (e, t) => this.selectMember(e, t), this.selectMember = ({ value: e, paths: t }, n) => {
			if (!T(e)) return;
			let r = this.canonicalName(n, n.value);
			if (x(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (w(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: tr(t, r)
					});
				}), n;
			}
			if (T(e)) {
				let n = xt(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) x(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!w(e)) return;
			let r = rr(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: tr(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (w(e)) {
				let r = rr(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: tr(t, r.index)
				} : void 0;
			}
			if (T(e)) {
				let r = String(n.value);
				return x(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!w(e)) return [];
			let r = C(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : nr(n.start, r), o = n.end === null ? r : nr(n.end, r)) : (a = n.start === null ? r - 1 : nr(n.start, r), o = n.end === null ? -r - 1 : nr(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: x(e, u) ? e[u] : void 0,
				paths: tr(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (T(e.value)) {
						let t = this.handleIdentifier(e, r);
						D(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (T(e.value)) {
						let t = this.handleStringLiteral(e, r);
						D(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (w(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						D(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					ir(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": ir(n, this.handleBracketExpressionContent(e, r));
			}
			return n;
		}, this.handleDotdot = (e, t) => {
			let n = [];
			return this.collectDotdot(e, t, n), n;
		}, this.collectDotdot = (e, t, n) => {
			let r = t.value, i = [];
			this.tick();
			let a = e;
			for (; a !== void 0;) {
				let e = a.value;
				switch (r.type) {
					case "bracketMember": {
						let e = this.handleBracketMemberContent(a, r.value);
						D(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						ir(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						ir(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						D(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (T(e)) {
					let t = xt(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else w(e) && i.push({
					parent: a,
					keys: null,
					length: C(e),
					i: 0
				});
				for (a = void 0; i.length > 0;) {
					let e = i[i.length - 1];
					if (e.i >= e.length) {
						i.pop();
						continue;
					}
					let t = e.i++;
					if (e.keys === null) {
						this.tick();
						let n = e.parent.value;
						if (!x(n, t)) continue;
						a = {
							value: n[t],
							paths: tr(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!x(n, r)) continue;
						a = {
							value: n[r],
							paths: this.formatStringLiteralPath(e.parent.paths, r)
						};
					}
					break;
				}
			}
		}, this.handleOperationContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "root": return this.handleRootQuery(t, t.next);
				case "current": return this.handleSubscript(e, t.next);
				case "value": return {
					value: t.value,
					paths: e.paths
				};
				case "groupOperation": return this.memoInvariant(t, () => this.handleOperationContent(e, t.value));
				case "functionCall": return {
					value: this.handleFunctionCall(e, t),
					paths: e.paths
				};
				case "operation": {
					let n = [], r = t;
					for (; r.type === "operation";) n.push({
						operator: r.operator,
						right: r.right
					}), r = r.left;
					let i = this.handleOperationContent(e, r)?.value;
					this.tick(n.length);
					for (let t = n.length - 1; t >= 0; t--) {
						let r = this.handleOperationContent(e, n[t].right)?.value;
						if (!wt(i) || !wt(r)) i = void 0;
						else switch (n[t].operator) {
							case "plus":
								i += r;
								break;
							case "minus":
								i -= r;
								break;
							case "div":
								i = r === 0 ? void 0 : i / r;
								break;
							case "multi": i *= r;
						}
					}
					return wt(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return Qn(n);
			if (t.operator === "reg") return $n(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = Zn[t.operator];
			if (i) {
				let e = this.isInvariant(t.right) ? this.siteSetCache(t.right) : void 0;
				return i(n, r, this.tick, e);
			}
			return !1;
		}, this.handleLogicalExpression = (e, t) => this.memoInvariant(t, () => this.evaluateLogicalExpression(e, t)), this.evaluateLogicalExpression = (e, t) => {
			let n = [], r = !this.isInvariant(t), i = t;
			for (; i.type === "logicalExpression" && (i === t || !r || !this.isInvariant(i));) n.push({
				operator: i.operator,
				right: i.right
			}), i = i.left;
			this.tick(n.length);
			let a = this.handleFilterExpressionContent(e, i);
			for (let t = n.length - 1; t >= 0; t--) (n[t].operator === "and" ? a : !a) && (a = this.handleFilterExpressionContent(e, n[t].right));
			return a;
		}, this.handleFunctionCall = (e, t) => this.memoInvariant(t, () => this.evaluateFunctionCall(e, t)), this.evaluateFunctionCall = (e, t) => {
			let n = t.name === "count" || t.name === "value", r = t.args.map((t) => {
				let r = this.handleOperationContent(e, t);
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new Tn(r.value) : new Tn(D(r?.value) ? [r?.value] : []);
			}), i = Fn[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
			return i ? i(r, this.tick, o ? t : void 0) : void 0;
		}, this.handleFilterExpressionContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "logicalExpression": return this.handleLogicalExpression(e, t);
				case "comparator": return this.handleComparator(e, t);
				case "groupExpression": return this.memoInvariant(t, () => this.handleFilterExpressionContent(e, t.value));
				case "notExpression": return this.memoInvariant(t, () => !this.handleFilterExpressionContent(e, t.value));
				case "functionCall": return !!this.handleFunctionCall(e, t);
				case "root": {
					let e = this.handleRootQuery(t, t.next);
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : D(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : D(n);
				}
				case "value": return !!t.value;
			}
		}, this.handleBracketMemberContent = (e, t) => {
			switch (t.type) {
				case "identifier": return this.handleIdentifier(e, t);
				case "numericLiteral": return this.handleNumericLiteral(e, t);
				case "stringLiteral": return this.handleStringLiteral(e, t);
			}
		}, this.handleBracketExpressionContent = (e, t) => {
			let n = e.value;
			switch (t.type) {
				case "filterExpression": {
					let r = [];
					if (w(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: tr(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (T(n)) {
						let i = xt(n);
						this.tick(i.length);
						for (let a of i) {
							if (!x(n, a)) continue;
							let i = {
								value: n[a],
								paths: this.formatStringLiteralPath(e.paths, a)
							};
							this.handleFilterExpressionContent(i, t.value) && (this.retain(), r.push(i));
						}
					}
					return r;
				}
				case "unions": return this.handleUnions(e, t);
				case "wildcard": return this.handleWildcard(e);
				case "slices": return this.handleSlices(e, t);
			}
		}, this.isIndefiniteSegment = (e) => {
			let t = e.value;
			return t.type === "bracketExpression" || t.type === "dotdot" || t.type === "dot" && t.value.type === "wildcard";
		}, this.selectMany = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketExpression": return this.handleBracketExpressionContent(e, n.value);
				case "dotdot": return this.handleDotdot(e, n);
				default: return this.handleWildcard(e);
			}
		}, this.selectOne = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketMember": return this.handleBracketMemberContent(e, n.value);
				case "dot":
					if (n.value.type === "identifier") return this.handleIdentifier(e, n.value);
					if (n.value.type === "numericLiteral") return this.handleDotNumericLiteral(e, n.value);
			}
		}, this.handleSubscript = (e, t) => {
			if (t === null) return e;
			let n = [], r = [{
				node: e,
				segment: t
			}], i = !1;
			for (; r.length > 0;) {
				let { node: e, segment: t } = r.pop(), a;
				if (this.isIndefiniteSegment(t)) i = !0, a = this.selectMany(e, t);
				else {
					this.tick();
					let n = this.selectOne(e, t);
					if (!D(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) ir(n, a);
				else for (let e = a.length - 1; e >= 0; e--) r.push({
					node: a[e],
					segment: o
				});
			}
			if (!i) return n[0];
			let a = [], o = [];
			for (let e of n) a.push(e.value), o.push(e.paths);
			return {
				value: a,
				paths: o,
				isIndefinite: !0
			};
		}, this.handleRoot = (e) => {
			try {
				return this.handleSubscript(this.rootPayload, e.next);
			} catch (e) {
				throw St(e) ? new gt("Query is nested too deeply") : Ct(e) ? new gt("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? ar, this.retainedLimit = this.adaptiveLimit ? sr : Infinity;
	}
}, pr = (e, t, n) => {
	let r = Lt(t), i = new fr(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Tt(i) ? [] : [i.value] : i?.value;
}, mr = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = pr(e, i, n);
		D(t) && r.push(t);
	}
	return r;
}, hr = (e, t, n = {}) => {
	try {
		return w(t) ? mr(e, t, n) : pr(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, gr = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = gr(n, t);
		if (e) return e;
	}
	return null;
}, _r = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = hr(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = gr(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
	let a = [...t.filePath ?? []];
	if (a.length === 0) throw Error("destinationPath.filePath must contain the property to write");
	let o = a.pop(), s = a.reduce((e, t) => {
		if (e == null) throw Error(`Cannot resolve destination filePath at: ${t}`);
		return e[t];
	}, i);
	if (s == null) throw Error(`Destination parent not found for filePath: ${t.filePath.join(".")}`);
	return n && console.log("json-write-path v6 resolved:", {
		fileName: t.fileName,
		jsonPath: t.jsonPath,
		dataRole: t.dataRole,
		filePath: t.filePath,
		parent: s,
		key: o
	}), {
		parent: s,
		key: o,
		target: i
	};
}, vr = (e, t, n, r) => {
	let { parent: i, key: a } = _r(e, t, r);
	return (st[t.action] || ot)(i, a, n), e;
}, yr = (e, t) => {
	if (!e) return null;
	let n = t[e.fileName];
	if (n === void 0) throw Error(`Entry not found in state: ${e.fileName}`);
	if (e.jsonPath) {
		let t = hr(n, e.jsonPath, { returnArray: !0 });
		return t.length === 0 ? Array.isArray(n) ? n : [] : t.length === 1 ? t[0] : t;
	}
	return Array.isArray(e.filePath) && e.filePath.length > 0 ? e.filePath.reduce((e, t) => e ? e[t] : void 0, n) : n;
}, br = (e, t, n, r = !1) => {
	if (t) {
		if (!t.filePath || t.filePath.length === 0) {
			let r = e[t.fileName];
			Array.isArray(r) ? r.push(...Array.isArray(n) ? n : [n]) : e[t.fileName] = n;
		} else try {
			vr(e, t, n, r);
		} catch {}
	}
}, xr = {
	single: (e, t) => {
		let n = Le[e.templateKey], r = yr(e.sourcePath, t);
		return (e.func === "fromCollection" ? tt : Ze)(r, n);
	},
	rowOnColumn: (e, { data: t }) => rt({
		columns: t?.columns,
		data: t,
		columnSpec: Le[e.templateKey.columnKey],
		rowSpec: Le[e.templateKey.rowKey]
	}),
	columnOnRow: (e, { data: t }) => it({
		columns: t?.columns,
		data: t,
		columnSpec: Le[e.templateKey.columnKey],
		rowSpec: Le[e.templateKey.rowKey]
	})
}, Sr = (e, t, n = !1) => {
	let r = He[e], i = xr[r.type](r, t);
	return br(t, r.destinationPath, i, n), i;
}, Cr = {
	name: "json-renderers-run-instructions",
	version: "1.7.1"
}, wr = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.steps = {
		meta: Cr,
		runInstructions: e
	});
}, Tr = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => (e.forEach((e) => {
	r && console.log(`[runStep] ${e}`), Sr(e, {
		base: t,
		data: n
	}, r);
}), t);
wr(Tr);
var Er = {
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: { initialize: "serialRoot" }
			}
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			options: {
				serial: { showSerial: "serialChild" },
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		options: {}
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		options: {}
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		options: {}
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		options: {}
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		options: {}
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			options: {}
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			options: {}
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			options: {}
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			options: {}
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			options: {}
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			options: {}
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			options: {}
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			options: {}
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			options: {}
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			options: {}
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			options: {}
		}
	}
}, Dr = {
	tableSearchBar: {
		tagName: "div",
		attributes: { class: "row mb-3 align-items-center" },
		children: [
			{
				tagName: "div",
				attributes: { class: "col-md-4 d-flex align-items-center" },
				children: [{
					tagName: "h6",
					attributes: {
						class: "mb-0 fw-semibold text-secondary",
						id: "table-title"
					},
					textContent: "Items"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4 text-center d-flex align-items-center justify-content-center" },
				children: [{
					tagName: "span",
					attributes: {
						id: "search-feedback",
						class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
					},
					textContent: "Showing all records"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4" },
				children: [{
					tagName: "div",
					attributes: { class: "input-group" },
					children: [{
						tagName: "span",
						attributes: { class: "input-group-text bg-white" },
						children: [{
							tagName: "i",
							attributes: { class: "bi bi-search" },
							textContent: "🔍"
						}]
					}, {
						tagName: "input",
						attributes: {
							type: "text",
							id: "tableSearch",
							class: "form-control",
							placeholder: "Search table..."
						}
					}]
				}]
			}
		]
	},
	buildBodyTr: {
		tagName: "tr",
		attributes: { class: "align-middle" },
		children: []
	},
	buildColGroup: {
		tagName: "col",
		attributes: { width: "${width}" }
	},
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	buildFooter: {
		tagName: "td",
		children: [{
			tagName: "input",
			attributes: {
				type: "text",
				placeholder: "enter ${columnName}",
				name: "${columnName}",
				id: "${columnName}",
				list: "${columnName}",
				class: "form-control"
			}
		}]
	},
	buildBodyCell: {
		tagName: "td",
		textContent: "${rowValue}",
		attributes: { class: "py-3 px-3 text-secondary" }
	},
	button: {
		tagName: "button",
		textContent: "${columnName}",
		attributes: { class: "btn btn-primary btn-sm" }
	},
	buttonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "${agg:count}",
			attributes: { class: "btn btn-primary btn-sm" }
		}]
	},
	optionsButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "show",
			attributes: { class: "btn btn-primary btn-sm ks-btn-show" }
		}]
	},
	buildOption: {
		tagName: "option",
		textContent: "${rowValue}",
		attributes: { value: "${rowValue}" }
	},
	buildSelect: {
		tagName: "select",
		attributes: {
			id: "${columnName}",
			name: "${columnName}",
			"data-name": "${columnName}",
			class: "form-select shadow-sm mb-3"
		},
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: {
			id: "${columnName}",
			"data-name": "${columnName}"
		},
		children: []
	},
	buildFormField: {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: "${columnName}",
			attributes: {
				for: "${columnName}",
				class: "form-label fw-semibold text-capitalize"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "${columnName}",
				name: "${columnName}",
				placeholder: "Enter ${columnName}...",
				class: "form-control"
			}
		}]
	},
	emptyCell: {
		tagName: "td",
		children: []
	},
	headerSerialCell: {
		tagName: "th",
		textContent: "#",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForSerial: {
		tagName: "col",
		attributes: { width: "50px" }
	},
	colGroupForOption: {
		tagName: "col",
		attributes: { width: "100px" }
	},
	headerForOption: {
		tagName: "th",
		textContent: "options",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	tdWithButtonSaveWarning: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "save",
			attributes: { class: "btn btn-warning btn-sm ks-btn-save" }
		}]
	},
	tableSearch: {
		tagName: "div",
		attributes: { class: "row mb-3 justify-content-end" },
		children: [{
			tagName: "div",
			attributes: { class: "col-md-4" },
			children: [{
				tagName: "div",
				attributes: { class: "input-group" },
				children: [{
					tagName: "span",
					attributes: { class: "input-group-text bg-white" },
					children: [{
						tagName: "i",
						attributes: { class: "bi bi-search" },
						textContent: "🔍"
					}]
				}, {
					tagName: "input",
					attributes: {
						type: "text",
						id: "tableSearch",
						class: "form-control",
						placeholder: "Search table..."
					}
				}]
			}]
		}]
	},
	tableWithSearch: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-withSearch-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-withSearch-table-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-simple-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-simple-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-simple-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-simple-body-id"
						},
						children: []
					}
				]
			}]
		}]
	},
	tableSimple: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				}
			]
		}]
	},
	tableWithFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableBodyOnly: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-tag-id"
		},
		children: [{
			tagName: "tbody",
			attributes: {
				"data-role": "table-body",
				id: "table-body-id"
			},
			children: []
		}]
	},
	tableBodyOnly1: {
		tagName: "tbody",
		attributes: {
			"data-role": "table-body",
			id: "table-body-only-id"
		},
		children: []
	},
	tableFooterOnly: {
		tagName: "tfoot",
		attributes: {
			"data-role": "table-footer",
			id: "table-footer-only-id"
		},
		children: [{
			tagName: "tr",
			attributes: {
				"data-role": "table-footer-row",
				id: "table-footer-only-footer-row-id"
			},
			children: []
		}]
	},
	tableHeaderOnly: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-colgroup-id"
				},
				children: []
			}, {
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-row-id"
					},
					children: []
				}]
			}]
		}]
	},
	tableHeaderOnly1: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-header-only-id"
		},
		children: [
			{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-header-only-colgroup-id"
				},
				children: []
			},
			{
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-only-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-only-header-row-id"
					},
					children: []
				}]
			},
			{
				tagName: "tbody",
				attributes: {
					"data-role": "table-body",
					id: "table-header-only-body-id"
				},
				children: []
			}
		]
	},
	tableHeaderAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-simple-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-simple-table-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-simple-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-simple-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-simple-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-simple-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-simple-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-simple-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	selectBase: {
		tagName: "div",
		attributes: {
			"data-role": "select-container",
			id: "select-base-id"
		},
		children: []
	},
	dataListBase: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-base-id"
		},
		children: []
	},
	dataListSimple: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-simple-id"
		},
		children: []
	},
	selectOptionsOnlyBase: [],
	searchInputBase: {
		tagName: "div",
		attributes: {
			class: "d-flex align-items-center gap-2",
			id: "search-input-base-id"
		},
		children: [{
			tagName: "label",
			textContent: "${label}",
			attributes: {
				class: "form-label mb-0 text-nowrap fw-semibold",
				for: "${id}",
				id: "search-input-label-id"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "search",
				placeholder: "${placeholder}",
				class: "form-control",
				id: "search-input-field-id"
			}
		}]
	},
	formBase: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-base-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-base-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-base-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-base-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-base-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-base-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-base-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-base-submit-button-id"
					}
				}]
			}
		]
	},
	formSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border-0",
			id: "form-simple-id"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
					id: "form-simple-header-id"
				},
				children: [{
					tagName: "h2",
					textContent: "Data Entry Form",
					attributes: {
						class: "h5 fw-bold mb-0 text-dark",
						id: "form-simple-title-id"
					}
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					id: "form-simple-body-id"
				},
				children: [{
					tagName: "form",
					attributes: {
						id: "form-simple-form-id",
						"data-role": "form-body"
					},
					children: []
				}]
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
					id: "form-simple-footer-id"
				},
				children: [{
					tagName: "button",
					textContent: "Reset",
					attributes: {
						type: "reset",
						class: "btn btn-outline-secondary",
						id: "form-simple-reset-button-id"
					}
				}, {
					tagName: "button",
					textContent: "Submit",
					attributes: {
						type: "submit",
						class: "btn btn-primary",
						id: "form-simple-submit-button-id"
					}
				}]
			}
		]
	},
	searchToolbar: {
		tagName: "div",
		attributes: {
			class: "row mb-3 align-items-center",
			"data-role": "search-toolbar"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 d-flex align-items-center",
					"data-role": "search-label-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 text-center d-flex align-items-center justify-content-center",
					"data-role": "search-helper-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4",
					"data-role": "search-input-slot"
				},
				children: []
			}
		]
	},
	searchLabel: {
		tagName: "h6",
		textContent: "Items",
		attributes: {
			class: "mb-0 fw-semibold text-secondary",
			id: "table-title"
		}
	},
	searchHelper: {
		tagName: "span",
		textContent: "Showing all records",
		attributes: {
			id: "search-feedback",
			class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
		}
	},
	searchInput: {
		tagName: "div",
		attributes: { class: "input-group" },
		children: [{
			tagName: "span",
			attributes: { class: "input-group-text bg-white" },
			children: [{
				tagName: "i",
				attributes: { class: "bi bi-search" },
				textContent: "🔍"
			}]
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "tableSearch",
				class: "form-control",
				placeholder: "Search table..."
			}
		}]
	},
	optionsEditButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "edit",
			attributes: { class: "btn btn-secondary btn-sm ks-btn-edit" }
		}]
	},
	optionsDeleteButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "delete",
			attributes: { class: "btn btn-danger btn-sm ks-btn-delete" }
		}]
	},
	headerForEditOption: {
		tagName: "th",
		textContent: "edit",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	headerForDeleteOption: {
		tagName: "th",
		textContent: "delete",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForEditOption: {
		tagName: "col",
		attributes: { width: "80px" }
	},
	colGroupForDeleteOption: {
		tagName: "col",
		attributes: { width: "90px" }
	},
	tableWithFooterParent: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-footer-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-with-footer-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-with-footer-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-with-footer-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-with-footer-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-with-footer-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-with-footer-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-with-footer-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableWithSearchAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-search-footer-parent-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-with-footer-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-with-footer-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-with-footer-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-with-footer-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-with-footer-body-id"
						},
						children: []
					},
					{
						tagName: "tfoot",
						attributes: {
							"data-role": "table-footer",
							id: "table-with-footer-footer-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-footer-row",
								id: "table-with-footer-footer-row-id"
							},
							children: []
						}]
					}
				]
			}]
		}]
	},
	accordionSimple: {
		tagName: "div",
		attributes: {
			class: "accordion shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	accordionFlush: {
		tagName: "div",
		attributes: {
			class: "accordion accordion-flush shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	buildAccordionItem: {
		tagName: "div",
		attributes: {
			class: "accordion-item",
			"data-role": "accordion-item"
		},
		children: [{
			tagName: "h2",
			attributes: {
				class: "accordion-header",
				id: "heading-${id}"
			},
			children: [{
				tagName: "button",
				attributes: {
					class: "accordion-button collapsed",
					type: "button",
					"data-bs-toggle": "collapse",
					"data-bs-target": "#collapse-${id}",
					"aria-expanded": "false",
					"aria-controls": "collapse-${id}"
				},
				textContent: "${title}"
			}]
		}, {
			tagName: "div",
			attributes: {
				id: "collapse-${id}",
				class: "accordion-collapse collapse",
				"aria-labelledby": "heading-${id}",
				"data-bs-parent": "#accordion-parent-id",
				"data-role": "accordion-collapse"
			},
			children: [{
				tagName: "div",
				attributes: { class: "accordion-body text-secondary" },
				textContent: "${content}"
			}]
		}]
	},
	cardSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithHeader: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-header bg-white py-3 fw-bold border-bottom",
				"data-role": "card-header"
			},
			children: []
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithFooter: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 fw-bold border-bottom",
					"data-role": "card-header"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					"data-role": "card-body"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light py-3 border-top",
					"data-role": "card-footer"
				},
				children: []
			}
		]
	},
	cardImageTop: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3 overflow-hidden",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "img",
			attributes: {
				class: "card-img-top",
				src: "${imageSrc}",
				alt: "${imageAlt}",
				"data-role": "card-img"
			}
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	buildCardBodyTemplate: {
		tagName: "div",
		attributes: { class: "card-content" },
		children: [{
			tagName: "h5",
			attributes: { class: "card-title fw-bold text-dark mb-2" },
			textContent: "${title}"
		}, {
			tagName: "p",
			attributes: { class: "card-text text-secondary mb-3" },
			textContent: "${text}"
		}]
	},
	buildCardHeaderTemplate: {
		tagName: "span",
		attributes: { class: "card-header-title text-dark" },
		textContent: "${headerTitle}"
	},
	buildCardFooterTemplate: {
		tagName: "small",
		attributes: { class: "text-muted" },
		textContent: "${footerText}"
	},
	listSimple: {
		tagName: "ul",
		attributes: {
			class: "list-unstyled mb-0",
			id: "list-parent-id",
			"data-role": "list-parent"
		},
		children: []
	},
	listGroup: {
		tagName: "ul",
		attributes: {
			class: "list-group shadow-sm",
			id: "list-group-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	listOrdered: {
		tagName: "ol",
		attributes: {
			class: "list-group list-group-numbered shadow-sm",
			id: "list-ordered-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	menuSimple: {
		tagName: "ul",
		attributes: {
			class: "nav nav-pills flex-column bg-white p-3 rounded-3 shadow-sm border",
			id: "menu-parent-id",
			"data-role": "menu-parent"
		},
		children: []
	},
	menuCardsBase: {
		tagName: "div",
		attributes: {
			class: "row g-4",
			id: "menu-cards-parent-id",
			"data-role": "menu-cards-parent"
		},
		children: []
	},
	buildListItemTemplate: {
		tagName: "li",
		attributes: {
			class: "py-2 px-3 border-bottom d-flex align-items-center text-secondary",
			"data-role": "list-item"
		},
		textContent: "${text}"
	},
	buildListGroupItemTemplate: {
		tagName: "li",
		attributes: {
			class: "list-group-item d-flex justify-content-between align-items-center py-3",
			"data-role": "list-group-item"
		},
		children: [{
			tagName: "span",
			textContent: "${text}"
		}, {
			tagName: "span",
			attributes: { class: "badge bg-primary rounded-pill px-3 py-2" },
			textContent: "${badge}"
		}]
	},
	buildMenuItemTemplate: {
		tagName: "li",
		attributes: {
			class: "nav-item mb-1",
			"data-role": "menu-item"
		},
		children: [{
			tagName: "a",
			attributes: {
				class: "nav-link text-dark fw-medium",
				href: "${href}"
			},
			textContent: "${text}"
		}]
	},
	buildMenuCardItemTemplate: {
		tagName: "div",
		attributes: {
			class: "col-md-4 col-sm-6",
			"data-role": "menu-card-col"
		},
		children: [{
			tagName: "div",
			attributes: { class: "card h-100 shadow-sm border rounded-3" },
			children: [{
				tagName: "div",
				attributes: { class: "card-body p-4 d-flex flex-column" },
				children: [
					{
						tagName: "h5",
						attributes: { class: "card-title fw-bold text-primary mb-2" },
						textContent: "${title}"
					},
					{
						tagName: "p",
						attributes: { class: "card-text text-muted small flex-grow-1" },
						textContent: "${description}"
					},
					{
						tagName: "a",
						attributes: {
							class: "btn btn-outline-primary btn-sm mt-3",
							href: "${href}"
						},
						textContent: "${actionText}"
					}
				]
			}]
		}]
	}
}, Or = {
	$schema: "./tags.schema.json",
	div: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["title", "role"],
		childTags: []
	},
	input: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"placeholder",
			"value",
			"name",
			"disabled",
			"readonly",
			"required",
			"list"
		]
	},
	checkbox: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"checked",
			"name",
			"value",
			"disabled",
			"required"
		]
	},
	colgroup: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["span"],
		childTags: ["col"]
	},
	col: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"span",
			"style",
			"width"
		]
	},
	label: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["for"],
		childTags: []
	},
	form: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"action",
			"method",
			"autocomplete",
			"enctype",
			"name",
			"novalidate",
			"target"
		],
		childTags: []
	},
	select: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"name",
			"disabled",
			"required",
			"multiple",
			"size"
		],
		childTags: ["option"]
	},
	p: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h1: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h2: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	span: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	img: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"src",
			"alt",
			"width",
			"height",
			"loading"
		]
	},
	button: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"type",
			"disabled",
			"name",
			"value"
		],
		childTags: []
	},
	table: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"border",
			"cellpadding",
			"cellspacing"
		],
		childTags: [
			"caption",
			"colgroup",
			"thead",
			"tbody",
			"tfoot",
			"tr"
		]
	},
	thead: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tbody: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tfoot: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tr: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["td", "th"]
	},
	th: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"scope",
			"colspan",
			"rowspan"
		],
		childTags: []
	},
	td: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["colspan", "rowspan"],
		childTags: []
	},
	datalist: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["option"]
	},
	option: {
		allowsTextContent: !0,
		allowsChildren: !1,
		allowedAttributes: [
			"value",
			"label",
			"selected",
			"disabled"
		]
	},
	header: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["role"],
		childTags: []
	},
	a: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"href",
			"target",
			"rel",
			"title",
			"download"
		],
		childTags: []
	},
	i: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["aria-hidden"],
		childTags: []
	},
	small: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	ul: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["type"],
		childTags: ["li"]
	},
	li: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["value"],
		childTags: []
	},
	hr: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: []
	}
}, kr = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	title: "TagsCatalogSchema",
	description: "JSON Schema for @keshavsoft/spec-repo tags.json catalog",
	type: "object",
	patternProperties: { "^[a-z0-9]+$": {
		type: "object",
		required: [
			"allowsTextContent",
			"allowsChildren",
			"allowedAttributes"
		],
		properties: {
			allowsTextContent: {
				type: "boolean",
				description: "Indicates whether the element permits direct textContent"
			},
			allowsChildren: {
				type: "boolean",
				description: "Indicates whether the element can contain child DOM elements"
			},
			allowedAttributes: {
				type: "array",
				items: { type: "string" },
				description: "List of specifically allowed HTML attributes for this tag"
			},
			childTags: {
				type: "array",
				items: { type: "string" },
				description: "Permitted child tag names if restricted"
			}
		},
		additionalProperties: !1
	} }
}, Ar = {
	buildColgroup: {
		type: "single",
		narration: "Build column widths",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildColGroup",
		func: "fromCollection"
	},
	buildHeader: {
		type: "single",
		narration: "Build table header",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildHeader",
		func: "fromCollection"
	},
	buildFooter: {
		type: "single",
		narration: "Build table footer",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFooter",
		func: "fromCollection"
	},
	buildBody: {
		type: "rowOnColumn",
		narration: "Build table body",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		templateKey: {
			rowKey: "buildBodyTr",
			columnKey: "buildBodyCell"
		}
	},
	serial: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial number cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshiftSerialToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "buildBodyCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	search: [{
		narration: "Prepend the search row to top of the table.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-parent']"
		},
		sourcePath: null,
		templateKey: "tableSearch",
		func: null
	}],
	buildFormField: {
		type: "single",
		narration: "Build form fields from columns",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'form-body']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFormField",
		func: "fromCollection"
	},
	buildSelectWithOptions: {
		type: "columnOnRow",
		narration: "Build selects with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildSelect",
			rowKey: "buildOption"
		}
	},
	buildSelectOptions: {
		type: "single",
		narration: "Build select options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildOptionsArray: {
		type: "single",
		narration: "Build options array",
		destinationPath: {
			fileName: "base",
			filePath: []
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildDataListWithOptions: {
		type: "columnOnRow",
		narration: "Build datalists with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildDataList",
			rowKey: "buildOption"
		}
	},
	searchFrame: [{
		narration: "Insert the search toolbar frame before the table when a search feature is enabled.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$"
		},
		sourcePath: null,
		templateKey: "searchToolbar",
		func: null,
		skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
	}],
	searchLabel: [{
		narration: "Insert the search label into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-label-slot']"
		},
		sourcePath: null,
		templateKey: "searchLabel",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'table-title']"
	}],
	searchHelper: [{
		narration: "Insert the search helper text into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-helper-slot']"
		},
		sourcePath: null,
		templateKey: "searchHelper",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'search-feedback']"
	}],
	searchInput: [{
		narration: "Insert the search input into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-input-slot']"
		},
		sourcePath: null,
		templateKey: "searchInput",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'tableSearch']"
	}],
	serialRoot: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	serialChild: [{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshiftSerialToRows",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		sourcePath: null,
		templateKey: "buildBodyCell",
		func: null
	}],
	optionsShowButton: [
		{
			narration: "Append the options column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForOption",
			func: null
		},
		{
			narration: "Append the options header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForOption",
			func: null
		},
		{
			narration: "Append the options button cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsButtonCell",
			func: null
		},
		{
			narration: "Append the options footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "tdWithButtonSaveWarning",
			func: null
		}
	],
	optionsEditButton: [
		{
			narration: "Append edit column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForEditOption",
			func: null
		},
		{
			narration: "Append edit header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForEditOption",
			func: null
		},
		{
			narration: "Append edit button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsEditButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the edit action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	optionsDeleteButton: [
		{
			narration: "Append delete column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForDeleteOption",
			func: null
		},
		{
			narration: "Append delete header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForDeleteOption",
			func: null
		},
		{
			narration: "Append delete button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsDeleteButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the delete action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	buildAccordionItems: {
		type: "single",
		narration: "Build accordion items from array",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildAccordionItem",
		func: "fromCollection"
	},
	buildCardBody: {
		type: "single",
		narration: "Build card body content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-body']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardBodyTemplate",
		func: "applyTemplate"
	},
	buildCardHeader: {
		type: "single",
		narration: "Build card header content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-header']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardHeaderTemplate",
		func: "applyTemplate"
	},
	buildCardFooter: {
		type: "single",
		narration: "Build card footer content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-footer']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardFooterTemplate",
		func: "applyTemplate"
	},
	buildListItems: {
		type: "single",
		narration: "Build simple list items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListItemTemplate",
		func: "fromCollection"
	},
	buildListGroupItems: {
		type: "single",
		narration: "Build list-group items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListGroupItemTemplate",
		func: "fromCollection"
	},
	buildMenuItems: {
		type: "single",
		narration: "Build navigation menu items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuItemTemplate",
		func: "fromCollection"
	},
	buildMenuCards: {
		type: "single",
		narration: "Build menu cards grid",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuCardItemTemplate",
		func: "fromCollection"
	}
}, jr = {
	name: "spec-repo",
	version: "1.17.1"
};
// ../json-renderers-run-instructions/node_modules/spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: jr,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: Dr,
	tags: Or,
	tagsSchema: kr,
	instructions: Ar,
	definitions: Er
});
// ../json-renderers-run-instructions/node_modules/json-write-path/src/v4/utils/toArray.js
var Mr = (e) => Array.isArray(e) ? e : [e], Nr = (e, t, n) => {
	e[t] = n;
}, k = {
	set: Nr,
	push: (e, t, n) => {
		e[t].push(...Mr(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...Mr(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(Mr(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(Mr(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, A = Object.defineProperty, Pr = Object.getOwnPropertySymbols, j = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable, N = Math.pow, P = (e, t, n) => t in e ? A(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, F = (e, t) => {
	for (var n in t ||= {}) j.call(t, n) && P(e, n, t[n]);
	if (Pr) for (var n of Pr(t)) M.call(t, n) && P(e, n, t[n]);
	return e;
}, Fr = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, I = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, L = () => void 0, R = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = U(e);
		return r === U(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = Lr(e), a = Lr(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, z = (e, t, n = L) => {
	let r = [];
	if (!R(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!R(Ir(e.x, t), Ir(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !B(o, i) || !B(a, i)) return !1;
			let s = a[i];
			if (!B(o, i) || !R(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, B = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Ir = (e, t) => B(e, t) ? e[t] : void 0, V = 16383, H = 1e3, Lr = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > H) throw new I(`Member name too long (maximum ${H} characters)`);
	return t;
}, U = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, Rr = (e) => e instanceof RangeError && /call stack/i.test(e.message), W = (e) => Array.isArray(e), zr = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), G = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, Br = (e) => typeof e == "number", K = (e) => typeof e == "string", Vr = (e) => e === void 0, q = (e) => e !== void 0;
function Hr(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function Ur(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function Wr(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var Gr = class extends SyntaxError {
	constructor(e, t, n, r) {
		super(e), this.expected = t, this.found = n, this.location = r, this.name = "SyntaxError";
	}
	format(e) {
		let t = "Error: " + this.message;
		if (this.location) {
			let n = null, r = e.find((e) => e.source === this.location.source);
			r && (n = r.text.split(/\r\n|\n|\r/g));
			let i = this.location.start, a = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, o = this.location.source + ":" + a.line + ":" + a.column;
			if (n) {
				let e = this.location.end, r = "".padEnd(a.line.toString().length, " "), s = n[i.line - 1], c = (i.line === e.line ? e.column : s.length + 1) - i.column || 1;
				t += "\n --> " + o + "\n" + r + " |\n" + a.line + " | " + s + "\n" + r + " | " + "".padEnd(i.column - 1, " ") + "".padEnd(c, "^");
			} else t += "\n at " + o;
		}
		return t;
	}
	static buildMessage(e, t) {
		function n(e) {
			return e.codePointAt(0).toString(16).toUpperCase();
		}
		let r = Object.prototype.hasOwnProperty.call(RegExp.prototype, "unicode") ? /* @__PURE__ */ RegExp("[\\p{C}\\p{Mn}\\p{Mc}]", "gu") : null;
		function i(e) {
			return r ? e.replace(r, (e) => "\\u{" + n(e) + "}") : e;
		}
		function a(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		function o(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		let s = {
			literal(e) {
				return "\"" + a(e.text) + "\"";
			},
			class(e) {
				let t = e.parts.map((e) => Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e));
				return "[" + (e.inverted ? "^" : "") + t.join("") + "]" + (e.unicode ? "u" : "");
			},
			any() {
				return "any character";
			},
			end() {
				return "end of input";
			},
			other(e) {
				return e.description;
			}
		};
		function c(e) {
			return s[e.type](e);
		}
		function l(e) {
			let t = e.map(c);
			if (t.sort(), t.length > 0) {
				let e = 1;
				for (let n = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[e] = t[n], e++);
				t.length = e;
			}
			switch (t.length) {
				case 1: return t[0];
				case 2: return t[0] + " or " + t[1];
				default: return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
			}
		}
		function u(e) {
			return e ? "\"" + a(e) + "\"" : "end of input";
		}
		return "Expected " + l(e) + " but " + u(t) + " found.";
	}
};
function Kr(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: zr }, a = zr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, v = /^[*\/]/, ie = /^[a-zA-Z_]/, ae = /^[\x80-\uFFFF_]/, oe = /^[a-zA-Z0-9_]/, se = /^[0-9@$\-]/, ce = /^[^\/\\]/, le = /^[gimsuy]/, ue = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, de = /^[\uD800-\uDBFF]/, fe = /^[\uDC00-\uDFFF]/, y = /^[0-9]/, pe = /^[1-9]/, me = /^[eE]/, he = /^["\\]/, ge = /^['\\]/, _e = /^[ -\uD7FF\uE000-\uFFFF]/, ve = /^[dD]/, ye = /^[89abAB]/, be = /^[c-fC-F]/, xe = /^[0-9a-fA-F]/, Se = /^[ \t\n\r]/, Ce = z([",", "]"], !1, !1, !1), we = R("length", !1), Te = R("count", !1), Ee = R("match", !1), De = R("search", !1), Oe = R("value", !1), ke = z(["+", "-"], !1, !1, !1), Ae = z(["*", "/"], !1, !1, !1), je = V("string"), Me = z([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Ne = z([["", "￿"], "_"], !1, !1, !1), Pe = z([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Fe = R("-", !1), Ie = z([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Le = R("$", !1), Re = R("@", !1), ze = R("..", !1), Be = R(".", !1), Ve = R("*", !1), He = R("&&", !1), Ue = R("||", !1), We = R("!", !1), Ge = R("==", !1), Ke = R("!=", !1), qe = R(">=", !1), Je = R(">", !1), Ye = R("<=", !1), Xe = R("<", !1), Ze = R("=~", !1), Qe = R("in", !1), $e = R("nin", !1), et = R("subsetof", !1), tt = R("anyof", !1), nt = R("noneof", !1), rt = R("sizeof", !1), it = R("size", !1), at = R("empty", !1), ot = R("true", !1), st = R("false", !1), ct = R("null", !1), lt = R("{", !1), ut = R("}", !1), dt = R("[", !1), ft = R("]", !1), pt = R(":", !1), mt = R(",", !1), ht = R("(", !1), gt = R(")", !1), b = R("?", !1), _t = V("regex"), vt = R("/", !1), x = z(["/", "\\"], !0, !1, !1), S = R("\\", !1), yt = B(), bt = z([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), xt = z([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), C = z([["\ud800", "\udbff"]], !1, !1, !1), St = z([["\udc00", "\udfff"]], !1, !1, !1), w = z([["0", "9"]], !1, !1, !1), Ct = V("number"), T = R("0", !1), wt = z([["1", "9"]], !1, !1, !1), E = V("integer"), Tt = z(["e", "E"], !1, !1, !1), D = R("\"", !1), Et = R("'", !1), Dt = z(["\"", "\\"], !1, !1, !1), Ot = z(["'", "\\"], !1, !1, !1), kt = z([[" ", "퟿"], ["", "￿"]], !1, !1, !1), At = R("b", !1), jt = R("f", !1), Mt = R("n", !1), Nt = R("r", !1), Pt = R("t", !1), Ft = R("u", !1), It = z(["d", "D"], !1, !1, !1), Lt = z([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Rt = R("\\u", !1), zt = z([["c", "f"], ["C", "F"]], !1, !1, !1), Bt = z([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Vt = z([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function Ht(e) {
		return {
			type: "root",
			next: Hr(e)
		};
	}
	function Ut(e) {
		return e.map((e) => e[1]);
	}
	function Wt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Gt(e) {
		return e;
	}
	function Kt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function qt() {
		return { type: "wildcard" };
	}
	function Jt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Yt() {
		return { type: "wildcard" };
	}
	function Xt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Zt(e) {
		return e;
	}
	function Qt(e) {
		return e;
	}
	function $t(e, t) {
		return t.length > 0 ? {
			type: "bracketExpression",
			value: {
				type: "unions",
				values: [e, ...t.map((e) => e[3])]
			}
		} : {
			type: e.type === "numericLiteral" || e.type === "stringLiteral" || e.type === "identifier" ? "bracketMember" : "bracketExpression",
			value: e
		};
	}
	function en(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function O(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function tn(e, t) {
		return Wr(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function nn(e, t) {
		return Wr(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function rn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function an(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function on(e, t) {
		return t !== null || Ur(e);
	}
	function sn(e, t) {
		if (t === null) return e;
		let n = t[1];
		return n.operator === "reg" ? {
			type: "comparator",
			operator: "reg",
			left: e,
			right: n.right
		} : n.operator === "empty" ? {
			type: "comparator",
			operator: "empty",
			left: e,
			right: null
		} : {
			type: "comparator",
			operator: n.operator,
			left: e,
			right: n.right
		};
	}
	function cn(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function ln(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function un() {
		return { operator: "empty" };
	}
	function dn() {
		return "eq";
	}
	function fn() {
		return "ne";
	}
	function pn() {
		return "le";
	}
	function mn() {
		return "lt";
	}
	function hn() {
		return "ge";
	}
	function gn() {
		return "gt";
	}
	function _n() {
		return "in";
	}
	function vn() {
		return "nin";
	}
	function yn() {
		return "subsetof";
	}
	function bn() {
		return "anyof";
	}
	function xn() {
		return "noneof";
	}
	function Sn() {
		return "sizeof";
	}
	function Cn() {
		return "size";
	}
	function wn(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function Tn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function En() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Dn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function On(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function kn() {
		return "length";
	}
	function An() {
		return "count";
	}
	function jn() {
		return "match";
	}
	function Mn() {
		return "search";
	}
	function Nn() {
		return "value";
	}
	function Pn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function Fn(e, t) {
		return t.length === 0 ? e : Wr(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function In(e, t) {
		return t.length === 0 ? e : Wr(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function Ln(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function Rn(e) {
		return {
			type: "root",
			next: Hr(e)
		};
	}
	function zn(e) {
		return {
			type: "current",
			next: Hr(e)
		};
	}
	function Bn(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Vn() {
		return { type: "wildcard" };
	}
	function Hn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function Un(e) {
		return {
			type: "stringLiteral",
			value: $(e)
		};
	}
	function Wn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Gn(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Kn(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function qn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function Jn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Yn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Xn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function Zn(e) {
		return e;
	}
	function Qn(e) {
		for (let [t] of e || []) $(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function $n(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function er(e, t) {
		return [e, t.value];
	}
	function tr(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function nr(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function rr(e) {
		return $(e);
	}
	function ir(e) {
		return $(e);
	}
	function ar() {
		return "true";
	}
	function or() {
		return "false";
	}
	function sr() {
		return "null";
	}
	function cr(e) {
		return $(e);
	}
	function lr() {
		return "true";
	}
	function ur() {
		return "false";
	}
	function dr() {
		return "null";
	}
	function fr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function pr(e) {
		return e.join("");
	}
	function mr(e, t) {
		let n = parseFloat(Fr());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && I("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function hr() {
		let e = parseInt(Fr(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && I("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function gr(e) {
		return e.join("");
	}
	function _r(e) {
		return e.join("");
	}
	function vr(e) {
		return e;
	}
	function yr() {
		return "\"";
	}
	function br(e) {
		return e;
	}
	function xr(e) {
		return e;
	}
	function Sr() {
		return "'";
	}
	function Cr(e) {
		return e;
	}
	function wr() {
		return "\\";
	}
	function Tr() {
		return "/";
	}
	function Er() {
		return "\b";
	}
	function Dr() {
		return "\f";
	}
	function Or() {
		return "\n";
	}
	function kr() {
		return "\r";
	}
	function Ar() {
		return "	";
	}
	function jr(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Mr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function Nr(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let k = t.peg$currPos | 0, A = k, Pr = [{
		line: 1,
		column: 1
	}], j = k, M = t.peg$maxFailExpected || [], N = t.peg$silentFails | 0, P = /* @__PURE__ */ new Map(), F;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function Fr() {
		return e.substring(A, k);
	}
	function I(e, t) {
		throw t = t === void 0 ? Lr(A, k) : t, Rr(e, t);
	}
	function L(t = k) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function R(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function z(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function B() {
		return { type: "any" };
	}
	function Ir() {
		return { type: "end" };
	}
	function V(e) {
		return {
			type: "other",
			description: e
		};
	}
	function H(t) {
		let n = Pr[t], r;
		if (n) return n;
		if (t >= Pr.length) r = Pr.length - 1;
		else for (r = t; !Pr[--r];);
		for (n = Pr[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return Pr[t] = n, n;
	}
	function Lr(e, t, n) {
		let i = H(e), a = H(t), o = {
			source: r,
			start: {
				offset: e,
				line: i.line,
				column: i.column
			},
			end: {
				offset: t,
				line: a.line,
				column: a.column
			}
		};
		return n && r && typeof r.offset == "function" && (o.start = r.offset(o.start), o.end = r.offset(o.end)), o;
	}
	function U(e) {
		k < j || (k > j && (j = k, M = []), M.push(e));
	}
	function Rr(e, t) {
		return new Gr(e, null, null, t);
	}
	function W(e, t, n) {
		return new Gr(Gr.buildMessage(e, t), e, t, n);
	}
	function zr() {
		let e, t, r, i;
		return e = k, t = Ci(), t === n ? (k = e, e = n) : (r = G(), i = _a(), i === n ? (k = e, e = n) : (A = e, e = Ht(r))), e;
	}
	function G() {
		let e, t, r, i, a;
		for (e = k, t = [], r = k, i = Q(), a = Br(), a === n ? (k = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = k, i = Q(), a = Br(), a === n ? (k = r, r = n) : (i = [i, a], r = i);
		return A = e, t = Ut(t), e = t, e;
	}
	function Br() {
		let e;
		return e = Vr(), e === n && (e = K()), e;
	}
	function K() {
		let e, t, r;
		return e = k, t = Ei(), t === n ? (k = e, e = n) : (r = q(), r === n ? (k = e, e = n) : (A = e, e = Wt(r))), e === n && (e = k, t = qr(), t !== n && (A = e, t = Gt(t)), e = t), e;
	}
	function Vr() {
		let e, t, r;
		return e = k, t = Ti(), t === n ? (k = e, e = n) : (r = Kr(), r === n ? (k = e, e = n) : (A = e, e = Kt(r))), e;
	}
	function q() {
		let e, t;
		return e = k, t = Di(), t !== n && (A = e, t = qt()), e = t, e === n && (e = k, t = Si(), t !== n && (A = e, t = Jt(t)), e = t), e;
	}
	function Kr() {
		let e, t;
		return e = k, t = Di(), t !== n && (A = e, t = Yt()), e = t, e === n && (e = k, t = Si(), t !== n && (A = e, t = Xt(t)), e = t, e === n && (e = k, t = qr(), t !== n && (A = e, t = Zt(t)), e = t)), e;
	}
	function qr() {
		let e, t, r, i;
		return e = k, t = Zi(), t === n ? (k = e, e = n) : (Q(), r = Jr(), r === n ? (k = e, e = n) : (Q(), i = Qi(), i === n ? (k = e, e = n) : (A = e, e = Qt(r)))), e;
	}
	function Jr() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = fi(), t !== n) {
			for (r = [], i = k, a = Q(), o = Y(), o === n ? (k = i, i = n) : (s = Q(), c = fi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = Y(), o === n ? (k = i, i = n) : (s = Q(), c = fi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = $t(t, r);
		} else k = e, e = n;
		return e;
	}
	function Yr() {
		let t, r, i, a, o, s, c, l, u;
		return t = k, r = na(), r === n ? (k = t, t = n) : (Q(), i = ea(), i === n ? (k = t, t = n) : (Q(), a = Xr(), a === n ? (k = t, t = n) : (Q(), o = ta(), o === n ? (k = t, t = n) : (s = k, N++, c = k, l = Q(), u = e.charAt(k), re.test(u) ? k++ : (u = n, N === 0 && U(Ce)), u === n ? (k = c, c = n) : (l = [l, u], c = l), N--, c === n ? s = n : (k = s, s = void 0), s === n ? (k = t, t = n) : (A = t, t = en(a)))))), t === n && (t = k, r = na(), r === n ? (k = t, t = n) : (Q(), i = Xr(), i === n ? (k = t, t = n) : (A = t, t = O(i)))), t;
	}
	function Xr() {
		let e, t, r, i, a, o, s, c, l = k * 91 + 10, u = P.get(l);
		if (u) return k = u.nextPos, u.result;
		if (e = k, t = Zr(), t !== n) {
			for (r = [], i = k, a = Q(), o = ki(), o === n ? (k = i, i = n) : (s = Q(), c = Zr(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = ki(), o === n ? (k = i, i = n) : (s = Q(), c = Zr(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = tn(t, r);
		} else k = e, e = n;
		return P.set(l, {
			nextPos: k,
			result: e
		}), e;
	}
	function Zr() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = Qr(), t !== n) {
			for (r = [], i = k, a = Q(), o = Oi(), o === n ? (k = i, i = n) : (s = Q(), c = Qr(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = Oi(), o === n ? (k = i, i = n) : (s = Q(), c = Qr(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = nn(t, r);
		} else k = e, e = n;
		return e;
	}
	function Qr() {
		let e, t, r, i, a;
		return e = k, t = Ai(), t === n ? (k = e, e = n) : (Q(), r = ea(), r === n ? (k = e, e = n) : (Q(), i = Xr(), i === n ? (k = e, e = n) : (Q(), a = ta(), a === n ? (k = e, e = n) : (A = e, e = rn(i))))), e === n && (e = k, t = Ai(), t === n ? (k = e, e = n) : (Q(), r = ni(), r === n ? (k = e, e = n) : (A = e, e = an(r))), e === n && (e = $r())), e;
	}
	function $r() {
		let e, t, r, i, a;
		return e = k, t = si(), t === n ? (k = e, e = n) : (r = k, i = Q(), a = ei(), a === n ? (k = r, r = n) : (i = [i, a], r = i), r === n && (r = null), A = k, i = on(t, r), i = i ? void 0 : n, i === n ? (k = e, e = n) : (A = e, e = sn(t, r))), e === n && (e = ni()), e;
	}
	function ei() {
		let e, t, r;
		return e = k, t = ti(), t === n ? (k = e, e = n) : (Q(), r = si(), r === n ? (k = e, e = n) : (A = e, e = cn(t, r))), e === n && (e = k, t = Li(), t === n ? (k = e, e = n) : (Q(), r = pi(), r === n ? (k = e, e = n) : (A = e, e = ln(r))), e === n && (e = k, t = Gi(), t !== n && (A = e, t = un()), e = t)), e;
	}
	function ti() {
		let e, t;
		return e = k, t = ji(), t !== n && (A = e, t = dn()), e = t, e === n && (e = k, t = Mi(), t !== n && (A = e, t = fn()), e = t, e === n && (e = k, t = Fi(), t !== n && (A = e, t = pn()), e = t, e === n && (e = k, t = Ii(), t !== n && (A = e, t = mn()), e = t, e === n && (e = k, t = Ni(), t !== n && (A = e, t = hn()), e = t, e === n && (e = k, t = Pi(), t !== n && (A = e, t = gn()), e = t, e === n && (e = k, t = Ri(), t !== n && (A = e, t = _n()), e = t, e === n && (e = k, t = zi(), t !== n && (A = e, t = vn()), e = t, e === n && (e = k, t = Bi(), t !== n && (A = e, t = yn()), e = t, e === n && (e = k, t = Vi(), t !== n && (A = e, t = bn()), e = t, e === n && (e = k, t = Hi(), t !== n && (A = e, t = xn()), e = t, e === n && (e = k, t = Ui(), t !== n && (A = e, t = Sn()), e = t, e === n && (e = k, t = Wi(), t !== n && (A = e, t = Cn()), e = t)))))))))))), e;
	}
	function ni() {
		let e, t, r, i;
		return e = k, t = ea(), t === n ? (k = e, e = n) : (Q(), r = Xr(), r === n ? (k = e, e = n) : (Q(), i = ta(), i === n ? (k = e, e = n) : (A = e, e = wn(r)))), e === n && (e = ri(), e === n && (e = ui(), e === n && (e = k, t = Ki(), t !== n && (A = e, t = Tn()), e = t, e === n && (e = k, t = qi(), t !== n && (A = e, t = En()), e = t, e === n && (e = k, t = Ji(), t !== n && (A = e, t = Dn()), e = t))))), e;
	}
	function ri() {
		let e, t, r, i, a;
		return e = k, t = ii(), t === n ? (k = e, e = n) : (r = ea(), r === n ? (k = e, e = n) : (Q(), i = ai(), i === n && (i = null), Q(), a = ta(), a === n ? (k = e, e = n) : (A = e, e = On(t, i)))), e;
	}
	function ii() {
		let t, r;
		return t = k, e.substr(k, 6) === o ? (r = o, k += 6) : (r = n, N === 0 && U(we)), r !== n && (A = t, r = kn()), t = r, t === n && (t = k, e.substr(k, 5) === s ? (r = s, k += 5) : (r = n, N === 0 && U(Te)), r !== n && (A = t, r = An()), t = r, t === n && (t = k, e.substr(k, 5) === c ? (r = c, k += 5) : (r = n, N === 0 && U(Ee)), r !== n && (A = t, r = jn()), t = r, t === n && (t = k, e.substr(k, 6) === l ? (r = l, k += 6) : (r = n, N === 0 && U(De)), r !== n && (A = t, r = Mn()), t = r, t === n && (t = k, e.substr(k, 5) === u ? (r = u, k += 5) : (r = n, N === 0 && U(Oe)), r !== n && (A = t, r = Nn()), t = r)))), t;
	}
	function ai() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = oi(), t !== n) {
			for (r = [], i = k, a = Q(), o = Y(), o === n ? (k = i, i = n) : (s = Q(), c = oi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = Y(), o === n ? (k = i, i = n) : (s = Q(), c = oi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = Pn(t, r);
		} else k = e, e = n;
		return e;
	}
	function oi() {
		let e;
		return e = si(), e === n && (e = hi()), e;
	}
	function si() {
		let t, r, i, a, o, s, c, l, u = k * 91 + 21, d = P.get(u);
		if (d) return k = d.nextPos, d.result;
		if (t = k, r = ci(), r !== n) {
			for (i = [], a = k, o = Q(), s = e.charAt(k), _.test(s) ? k++ : (s = n, N === 0 && U(ke)), s === n ? (k = a, a = n) : (c = Q(), l = ci(), l === n ? (k = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = k, o = Q(), s = e.charAt(k), _.test(s) ? k++ : (s = n, N === 0 && U(ke)), s === n ? (k = a, a = n) : (c = Q(), l = ci(), l === n ? (k = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			A = t, t = Fn(r, i);
		} else k = t, t = n;
		return P.set(u, {
			nextPos: k,
			result: t
		}), t;
	}
	function ci() {
		let t, r, i, a, o, s, c, l;
		if (t = k, r = li(), r !== n) {
			for (i = [], a = k, o = Q(), s = e.charAt(k), v.test(s) ? k++ : (s = n, N === 0 && U(Ae)), s === n ? (k = a, a = n) : (c = Q(), l = li(), l === n ? (k = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = k, o = Q(), s = e.charAt(k), v.test(s) ? k++ : (s = n, N === 0 && U(Ae)), s === n ? (k = a, a = n) : (c = Q(), l = li(), l === n ? (k = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			A = t, t = In(r, i);
		} else k = t, t = n;
		return t;
	}
	function li() {
		let e, t, r, i;
		return e = k, t = ea(), t === n ? (k = e, e = n) : (Q(), r = si(), r === n ? (k = e, e = n) : (Q(), i = ta(), i === n ? (k = e, e = n) : (A = e, e = Ln(r)))), e === n && (e = ri(), e === n && (e = mi(), e === n && (e = ui()))), e;
	}
	function ui() {
		let e, t, r;
		return e = k, t = Ci(), t === n ? (k = e, e = n) : (r = G(), r === n ? (k = e, e = n) : (A = e, e = Rn(r))), e === n && (e = k, t = wi(), t === n ? (k = e, e = n) : (r = G(), r === n ? (k = e, e = n) : (A = e, e = zn(r)))), e;
	}
	function di() {
		let e, t, r, i, a, o, s, c, l;
		return e = k, t = k, r = ua(), r === n ? (k = t, t = n) : (i = Q(), r = [r, i], t = r), t === n && (t = null), r = $i(), r === n ? (k = e, e = n) : (i = Q(), a = k, o = ua(), o === n ? (k = a, a = n) : (s = Q(), o = [o, s], a = o), a === n && (a = null), o = k, s = $i(), s === n ? (k = o, o = n) : (c = Q(), l = ua(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), A = e, e = Bn(t, a, o)), e;
	}
	function fi() {
		let e, t;
		return e = Yr(), e === n && (e = di(), e === n && (e = k, t = Di(), t !== n && (A = e, t = Vn()), e = t, e === n && (e = k, t = ua(), t !== n && (A = e, t = Hn(t)), e = t, e === n && (e = k, t = fa(), t !== n && (A = e, t = Un(t)), e = t, e === n && (e = k, t = bi(), t !== n && (A = e, t = Wn(t)), e = t))))), e;
	}
	function pi() {
		let e, t, r;
		return e = k, t = ra(), t === n ? (k = e, e = n) : (r = ia(), A = e, e = Gn(t, r)), e;
	}
	function mi() {
		let e, t;
		return e = k, t = hi(), t !== n && (A = e, t = Kn(t)), e = t, e === n && (e = k, t = ca(), t !== n && (A = e, t = qn(t)), e = t, e === n && (e = gi(), e === n && (e = vi(), e === n && (e = k, t = Ki(), t !== n && (A = e, t = Jn()), e = t, e === n && (e = k, t = qi(), t !== n && (A = e, t = Yn()), e = t, e === n && (e = k, t = Ji(), t !== n && (A = e, t = Xn()), e = t)))))), e;
	}
	function hi() {
		let e, t;
		return N++, e = k, t = fa(), t !== n && (A = e, t = Zn(t)), e = t, N--, e === n && (t = n, N === 0 && U(je)), e;
	}
	function gi() {
		let e, t, r, i;
		return e = k, t = Yi(), t === n ? (k = e, e = n) : (Q(), r = J(), r === n && (r = null), Q(), i = Xi(), i === n ? (k = e, e = n) : (A = e, e = Qn(r))), e;
	}
	function J() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = _i(), t !== n) {
			for (r = [], i = k, a = Q(), o = Y(), o === n ? (k = i, i = n) : (s = Q(), c = _i(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = Y(), o === n ? (k = i, i = n) : (s = Q(), c = _i(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = $n(t, r);
		} else k = e, e = n;
		return e;
	}
	function _i() {
		let e, t, r, i;
		return e = k, t = fa(), t === n ? (k = e, e = n) : (Q(), r = $i(), r === n ? (k = e, e = n) : (Q(), i = mi(), i === n ? (k = e, e = n) : (A = e, e = er(t, i)))), e;
	}
	function vi() {
		let e, t, r, i;
		return e = k, t = Zi(), t === n ? (k = e, e = n) : (Q(), r = yi(), r === n && (r = null), Q(), i = Qi(), i === n ? (k = e, e = n) : (A = e, e = tr(r))), e;
	}
	function yi() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = mi(), t !== n) {
			for (r = [], i = k, a = Q(), o = Y(), o === n ? (k = i, i = n) : (s = Q(), c = mi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = Y(), o === n ? (k = i, i = n) : (s = Q(), c = mi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = nr(t, r);
		} else k = e, e = n;
		return e;
	}
	function bi() {
		let t, r, i, a, o, s;
		if (t = k, r = k, i = k, a = e.charAt(k), ie.test(a) ? k++ : (a = n, N === 0 && U(Me)), a !== n) {
			for (o = [], s = xi(); s !== n;) o.push(s), s = xi();
			a = [a, o], i = a;
		} else k = i, i = n;
		if (r = i === n ? i : e.substring(r, k), r !== n && (A = t, r = rr(r)), t = r, t === n) {
			if (t = k, r = k, i = [], a = e.charAt(k), ae.test(a) ? k++ : (a = n, N === 0 && U(Ne)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(k), ae.test(a) ? k++ : (a = n, N === 0 && U(Ne));
			else i = n;
			r = i === n ? i : e.substring(r, k), r !== n && (A = t, r = ir(r)), t = r, t === n && (t = k, r = Ki(), r !== n && (A = t, r = ar()), t = r, t === n && (t = k, r = qi(), r !== n && (A = t, r = or()), t = r, t === n && (t = k, r = Ji(), r !== n && (A = t, r = sr()), t = r)));
		}
		return t;
	}
	function xi() {
		let t, r, i, a;
		return t = e.charAt(k), oe.test(t) ? k++ : (t = n, N === 0 && U(Pe)), t === n && (t = k, e.charCodeAt(k) === 45 ? (r = "-", k++) : (r = n, N === 0 && U(Fe)), r === n ? (k = t, t = n) : (i = k, N++, a = e.charAt(k), se.test(a) ? k++ : (a = n, N === 0 && U(Ie)), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r))), t;
	}
	function Si() {
		let e, t;
		return e = k, t = aa(), t !== n && (A = e, t = cr(t)), e = t, e === n && (e = k, t = Ki(), t !== n && (A = e, t = lr()), e = t, e === n && (e = k, t = qi(), t !== n && (A = e, t = ur()), e = t, e === n && (e = k, t = Ji(), t !== n && (A = e, t = dr()), e = t))), e;
	}
	function Ci() {
		let t;
		return e.charCodeAt(k) === 36 ? (t = "$", k++) : (t = n, N === 0 && U(Le)), t;
	}
	function wi() {
		let t;
		return e.charCodeAt(k) === 64 ? (t = "@", k++) : (t = n, N === 0 && U(Re)), t;
	}
	function Ti() {
		let t;
		return e.substr(k, 2) === ".." ? (t = "..", k += 2) : (t = n, N === 0 && U(ze)), t;
	}
	function Ei() {
		let t;
		return e.charCodeAt(k) === 46 ? (t = ".", k++) : (t = n, N === 0 && U(Be)), t;
	}
	function Di() {
		let t;
		return e.charCodeAt(k) === 42 ? (t = "*", k++) : (t = n, N === 0 && U(Ve)), t;
	}
	function Oi() {
		let t;
		return e.substr(k, 2) === "&&" ? (t = "&&", k += 2) : (t = n, N === 0 && U(He)), t;
	}
	function ki() {
		let t;
		return e.substr(k, 2) === "||" ? (t = "||", k += 2) : (t = n, N === 0 && U(Ue)), t;
	}
	function Ai() {
		let t;
		return e.charCodeAt(k) === 33 ? (t = "!", k++) : (t = n, N === 0 && U(We)), t;
	}
	function ji() {
		let t;
		return e.substr(k, 2) === "==" ? (t = "==", k += 2) : (t = n, N === 0 && U(Ge)), t;
	}
	function Mi() {
		let t;
		return e.substr(k, 2) === "!=" ? (t = "!=", k += 2) : (t = n, N === 0 && U(Ke)), t;
	}
	function Ni() {
		let t;
		return e.substr(k, 2) === ">=" ? (t = ">=", k += 2) : (t = n, N === 0 && U(qe)), t;
	}
	function Pi() {
		let t;
		return e.charCodeAt(k) === 62 ? (t = ">", k++) : (t = n, N === 0 && U(Je)), t;
	}
	function Fi() {
		let t;
		return e.substr(k, 2) === "<=" ? (t = "<=", k += 2) : (t = n, N === 0 && U(Ye)), t;
	}
	function Ii() {
		let t;
		return e.charCodeAt(k) === 60 ? (t = "<", k++) : (t = n, N === 0 && U(Xe)), t;
	}
	function Li() {
		let t;
		return e.substr(k, 2) === "=~" ? (t = "=~", k += 2) : (t = n, N === 0 && U(Ze)), t;
	}
	function Ri() {
		let t, r, i, a;
		return t = k, e.substr(k, 2) === "in" ? (r = "in", k += 2) : (r = n, N === 0 && U(Qe)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = k, e.substr(k, 3) === "nin" ? (r = "nin", k += 3) : (r = n, N === 0 && U($e)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = k, e.substr(k, 8) === d ? (r = d, k += 8) : (r = n, N === 0 && U(et)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = k, e.substr(k, 5) === f ? (r = f, k += 5) : (r = n, N === 0 && U(tt)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = k, e.substr(k, 6) === p ? (r = p, k += 6) : (r = n, N === 0 && U(nt)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = k, e.substr(k, 6) === m ? (r = m, k += 6) : (r = n, N === 0 && U(rt)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = k, e.substr(k, 4) === ee ? (r = ee, k += 4) : (r = n, N === 0 && U(it)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = k, e.substr(k, 5) === h ? (r = h, k += 5) : (r = n, N === 0 && U(at)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = k, e.substr(k, 4) === te ? (r = te, k += 4) : (r = n, N === 0 && U(ot)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = k, e.substr(k, 5) === ne ? (r = ne, k += 5) : (r = n, N === 0 && U(st)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t, r, i, a;
		return t = k, e.substr(k, 4) === g ? (r = g, k += 4) : (r = n, N === 0 && U(ct)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(k) === 123 ? (t = "{", k++) : (t = n, N === 0 && U(lt)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(k) === 125 ? (t = "}", k++) : (t = n, N === 0 && U(ut)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(k) === 91 ? (t = "[", k++) : (t = n, N === 0 && U(dt)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(k) === 93 ? (t = "]", k++) : (t = n, N === 0 && U(ft)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(k) === 58 ? (t = ":", k++) : (t = n, N === 0 && U(pt)), t;
	}
	function Y() {
		let t;
		return e.charCodeAt(k) === 44 ? (t = ",", k++) : (t = n, N === 0 && U(mt)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(k) === 40 ? (t = "(", k++) : (t = n, N === 0 && U(ht)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(k) === 41 ? (t = ")", k++) : (t = n, N === 0 && U(gt)), t;
	}
	function na() {
		let t;
		return e.charCodeAt(k) === 63 ? (t = "?", k++) : (t = n, N === 0 && U(b)), t;
	}
	function ra() {
		let t, r, i, a, o, s;
		if (N++, t = k, e.charCodeAt(k) === 47 ? (r = "/", k++) : (r = n, N === 0 && U(vt)), r !== n) {
			for (i = [], a = e.charAt(k), ce.test(a) ? k++ : (a = n, N === 0 && U(x)), a === n && (a = k, e.charCodeAt(k) === 92 ? (o = "\\", k++) : (o = n, N === 0 && U(S)), o === n ? (k = a, a = n) : (e.length > k ? (s = e.charAt(k), k++) : (s = n, N === 0 && U(yt)), s === n ? (k = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(k), ce.test(a) ? k++ : (a = n, N === 0 && U(x)), a === n && (a = k, e.charCodeAt(k) === 92 ? (o = "\\", k++) : (o = n, N === 0 && U(S)), o === n ? (k = a, a = n) : (e.length > k ? (s = e.charAt(k), k++) : (s = n, N === 0 && U(yt)), s === n ? (k = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(k) === 47 ? (a = "/", k++) : (a = n, N === 0 && U(vt)), a === n ? (k = t, t = n) : (A = t, t = fr(i));
		} else k = t, t = n;
		return N--, t === n && (r = n, N === 0 && U(_t)), t;
	}
	function ia() {
		let t, r, i;
		for (t = k, r = [], i = e.charAt(k), le.test(i) ? k++ : (i = n, N === 0 && U(bt)); i !== n;) r.push(i), i = e.charAt(k), le.test(i) ? k++ : (i = n, N === 0 && U(bt));
		return A = t, r = pr(r), t = r, t;
	}
	function aa() {
		let t, r, i, a, o;
		if (t = k, r = k, i = oa(), i !== n) {
			for (a = [], o = sa(); o !== n;) a.push(o), o = sa();
			i = [i, a], r = i;
		} else k = r, r = n;
		return t = r === n ? r : e.substring(t, k), t;
	}
	function oa() {
		let t, r, i;
		return t = e.charAt(k), ue.test(t) ? k++ : (t = n, N === 0 && U(xt)), t === n && (t = k, r = e.charAt(k), de.test(r) ? k++ : (r = n, N === 0 && U(C)), r === n ? (k = t, t = n) : (i = e.charAt(k), fe.test(i) ? k++ : (i = n, N === 0 && U(St)), i === n ? (k = t, t = n) : (r = [r, i], t = r))), t;
	}
	function sa() {
		let t;
		return t = oa(), t === n && (t = e.charAt(k), y.test(t) ? k++ : (t = n, N === 0 && U(w))), t;
	}
	function ca() {
		let t, r, i, a, o, s, c;
		if (N++, t = k, e.charCodeAt(k) === 45 ? (r = "-", k++) : (r = n, N === 0 && U(Fe)), r === n && (r = null), i = la(), i !== n) {
			if (a = k, e.charCodeAt(k) === 46 ? (o = ".", k++) : (o = n, N === 0 && U(Be)), o !== n) {
				if (s = [], c = e.charAt(k), y.test(c) ? k++ : (c = n, N === 0 && U(w)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(k), y.test(c) ? k++ : (c = n, N === 0 && U(w));
				else s = n;
				s === n ? (k = a, a = n) : (o = [o, s], a = o);
			} else k = a, a = n;
			a === n && (a = null), o = da(), o === n && (o = null), A = t, t = mr(a, o);
		} else k = t, t = n;
		return N--, t === n && (r = n, N === 0 && U(Ct)), t;
	}
	function la() {
		let t, r, i, a;
		if (e.charCodeAt(k) === 48 ? (t = "0", k++) : (t = n, N === 0 && U(T)), t === n) {
			if (t = k, r = e.charAt(k), pe.test(r) ? k++ : (r = n, N === 0 && U(wt)), r !== n) {
				for (i = [], a = e.charAt(k), y.test(a) ? k++ : (a = n, N === 0 && U(w)); a !== n;) i.push(a), a = e.charAt(k), y.test(a) ? k++ : (a = n, N === 0 && U(w));
				r = [r, i], t = r;
			} else k = t, t = n;
		}
		return t;
	}
	function ua() {
		let t, r, i, a, o, s;
		if (N++, t = k, e.charCodeAt(k) === 48 ? (r = "0", k++) : (r = n, N === 0 && U(T)), r === n) {
			if (r = k, e.charCodeAt(k) === 45 ? (i = "-", k++) : (i = n, N === 0 && U(Fe)), i === n && (i = null), a = e.charAt(k), pe.test(a) ? k++ : (a = n, N === 0 && U(wt)), a !== n) {
				for (o = [], s = e.charAt(k), y.test(s) ? k++ : (s = n, N === 0 && U(w)); s !== n;) o.push(s), s = e.charAt(k), y.test(s) ? k++ : (s = n, N === 0 && U(w));
				i = [
					i,
					a,
					o
				], r = i;
			} else k = r, r = n;
		}
		return r !== n && (A = t, r = hr()), t = r, N--, t === n && (r = n, N === 0 && U(E)), t;
	}
	function da() {
		let t, r, i, a, o;
		if (t = k, r = e.charAt(k), me.test(r) ? k++ : (r = n, N === 0 && U(Tt)), r !== n) {
			if (i = e.charAt(k), _.test(i) ? k++ : (i = n, N === 0 && U(ke)), i === n && (i = null), a = [], o = e.charAt(k), y.test(o) ? k++ : (o = n, N === 0 && U(w)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(k), y.test(o) ? k++ : (o = n, N === 0 && U(w));
			else a = n;
			a === n ? (k = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else k = t, t = n;
		return t;
	}
	function fa() {
		let t, r, i, a;
		if (N++, t = k, e.charCodeAt(k) === 34 ? (r = "\"", k++) : (r = n, N === 0 && U(D)), r !== n) {
			for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
			e.charCodeAt(k) === 34 ? (a = "\"", k++) : (a = n, N === 0 && U(D)), a === n ? (k = t, t = n) : (A = t, t = gr(i));
		} else k = t, t = n;
		if (t === n) {
			if (t = k, e.charCodeAt(k) === 39 ? (r = "'", k++) : (r = n, N === 0 && U(Et)), r !== n) {
				for (i = [], a = ma(); a !== n;) i.push(a), a = ma();
				e.charCodeAt(k) === 39 ? (a = "'", k++) : (a = n, N === 0 && U(Et)), a === n ? (k = t, t = n) : (A = t, t = _r(i));
			} else k = t, t = n;
		}
		return N--, t === n && (r = n, N === 0 && U(je)), t;
	}
	function pa() {
		let t, r, i;
		return t = k, r = k, N++, i = e.charAt(k), he.test(i) ? k++ : (i = n, N === 0 && U(Dt)), N--, i === n ? r = void 0 : (k = r, r = n), r === n ? (k = t, t = n) : (i = ha(), i === n ? (k = t, t = n) : (A = t, t = vr(i))), t === n && (t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && U(S)), r === n ? (k = t, t = n) : (e.charCodeAt(k) === 34 ? (i = "\"", k++) : (i = n, N === 0 && U(D)), i === n ? (k = t, t = n) : (A = t, t = yr())), t === n && (t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && U(S)), r === n ? (k = t, t = n) : (i = ga(), i === n ? (k = t, t = n) : (A = t, t = br(i))))), t;
	}
	function ma() {
		let t, r, i;
		return t = k, r = k, N++, i = e.charAt(k), ge.test(i) ? k++ : (i = n, N === 0 && U(Ot)), N--, i === n ? r = void 0 : (k = r, r = n), r === n ? (k = t, t = n) : (i = ha(), i === n ? (k = t, t = n) : (A = t, t = xr(i))), t === n && (t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && U(S)), r === n ? (k = t, t = n) : (e.charCodeAt(k) === 39 ? (i = "'", k++) : (i = n, N === 0 && U(Et)), i === n ? (k = t, t = n) : (A = t, t = Sr())), t === n && (t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && U(S)), r === n ? (k = t, t = n) : (i = ga(), i === n ? (k = t, t = n) : (A = t, t = Cr(i))))), t;
	}
	function ha() {
		let t, r, i, a;
		return t = e.charAt(k), _e.test(t) ? k++ : (t = n, N === 0 && U(kt)), t === n && (t = k, r = k, i = e.charAt(k), de.test(i) ? k++ : (i = n, N === 0 && U(C)), i === n ? (k = r, r = n) : (a = e.charAt(k), fe.test(a) ? k++ : (a = n, N === 0 && U(St)), a === n ? (k = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, k)), t;
	}
	function ga() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && U(S)), r !== n && (A = t, r = wr()), t = r, t === n && (t = k, e.charCodeAt(k) === 47 ? (r = "/", k++) : (r = n, N === 0 && U(vt)), r !== n && (A = t, r = Tr()), t = r, t === n && (t = k, e.charCodeAt(k) === 98 ? (r = "b", k++) : (r = n, N === 0 && U(At)), r !== n && (A = t, r = Er()), t = r, t === n && (t = k, e.charCodeAt(k) === 102 ? (r = "f", k++) : (r = n, N === 0 && U(jt)), r !== n && (A = t, r = Dr()), t = r, t === n && (t = k, e.charCodeAt(k) === 110 ? (r = "n", k++) : (r = n, N === 0 && U(Mt)), r !== n && (A = t, r = Or()), t = r, t === n && (t = k, e.charCodeAt(k) === 114 ? (r = "r", k++) : (r = n, N === 0 && U(Nt)), r !== n && (A = t, r = kr()), t = r, t === n && (t = k, e.charCodeAt(k) === 116 ? (r = "t", k++) : (r = n, N === 0 && U(Pt)), r !== n && (A = t, r = Ar()), t = r, t === n && (t = k, e.charCodeAt(k) === 117 ? (r = "u", k++) : (r = n, N === 0 && U(Ft)), r === n ? (k = t, t = n) : (i = k, a = k, o = e.charAt(k), ve.test(o) ? k++ : (o = n, N === 0 && U(It)), o === n ? (k = a, a = n) : (s = e.charAt(k), ye.test(s) ? k++ : (s = n, N === 0 && U(Lt)), s === n ? (k = a, a = n) : (c = X(), c === n ? (k = a, a = n) : (l = X(), l === n ? (k = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, k), i === n ? (k = t, t = n) : (e.substr(k, 2) === "\\u" ? (a = "\\u", k += 2) : (a = n, N === 0 && U(Rt)), a === n ? (k = t, t = n) : (o = k, s = k, c = e.charAt(k), ve.test(c) ? k++ : (c = n, N === 0 && U(It)), c === n ? (k = s, s = n) : (l = e.charAt(k), be.test(l) ? k++ : (l = n, N === 0 && U(zt)), l === n ? (k = s, s = n) : (u = X(), u === n ? (k = s, s = n) : (d = X(), d === n ? (k = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, k), o === n ? (k = t, t = n) : (A = t, t = jr(i, o))))), t === n && (t = k, e.charCodeAt(k) === 117 ? (r = "u", k++) : (r = n, N === 0 && U(Ft)), r === n ? (k = t, t = n) : (i = k, a = k, o = X(), o === n ? (k = a, a = n) : (s = X(), s === n ? (k = a, a = n) : (c = X(), c === n ? (k = a, a = n) : (l = X(), l === n ? (k = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, k), i === n ? (k = t, t = n) : (A = k, a = Mr(i), a = a ? n : void 0, a === n ? (k = t, t = n) : (A = t, t = Nr(i)))))))))))), t;
	}
	function X() {
		let t;
		return t = e.charAt(k), xe.test(t) ? k++ : (t = n, N === 0 && U(Bt)), t;
	}
	function Z() {
		let t;
		return t = e.charAt(k), oe.test(t) ? k++ : (t = n, N === 0 && U(Pe)), t;
	}
	function Q() {
		let t, r;
		for (N++, t = [], r = e.charAt(k), Se.test(r) ? k++ : (r = n, N === 0 && U(Vt)); r !== n;) t.push(r), r = e.charAt(k), Se.test(r) ? k++ : (r = n, N === 0 && U(Vt));
		return N--, t;
	}
	function _a() {
		let t, r;
		return t = k, N++, e.length > k ? (r = e.charAt(k), k++) : (r = n, N === 0 && U(yt)), N--, r === n ? t = void 0 : (k = t, t = n), t;
	}
	function $(e) {
		return e.length > 1e3 && I("Member name too long (maximum 1000 characters)"), e;
	}
	F = a();
	let va = F !== n && k === e.length;
	function ya() {
		throw F !== n && k < e.length && U(Ir()), W(M, j < e.length ? L(j) : null, j < e.length ? Lr(j, j + 1) : Lr(j, j));
	}
	if (t.peg$library) return {
		peg$result: F,
		peg$currPos: k,
		peg$FAILED: n,
		peg$maxFailExpected: M,
		peg$maxFailPos: j,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return F;
	ya();
}
var qr = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), Jr = {
	length: {
		args: ["value"],
		logical: !1
	},
	count: {
		args: ["nodes"],
		logical: !1
	},
	value: {
		args: ["nodes"],
		logical: !1
	},
	match: {
		args: ["value", "value"],
		logical: !0
	},
	search: {
		args: ["value", "value"],
		logical: !0
	}
}, Yr = (e) => {
	throw new Fr(1, 1, e);
}, Xr = (e) => e.type === "root" || e.type === "current", Zr = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function Qr(e) {
	let t = [{
		node: e,
		context: "nodes"
	}], n = (e) => {
		for (let n = e.next; n; n = n.next) {
			let e = n.value;
			if (e.type === "dotdot" && (e = e.value), e.type !== "bracketExpression") continue;
			let r = e.value, i = r.type === "unions" ? r.values : [r];
			for (let e of i) e.type === "filterExpression" && t.push({
				node: e.value,
				context: "test"
			});
		}
	};
	for (; t.length > 0;) {
		let { node: e, context: r } = t.pop();
		if (typeof e != "object" || !e) continue;
		let i = e;
		if (Xr(i)) r === "value" && !Zr(i) && Yr("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && Yr(`Expected a query, found ${String(i.type)}`), i.type) {
			case "logicalExpression":
			case "notExpression":
			case "groupExpression":
				i.type === "logicalExpression" ? t.push({
					node: i.left,
					context: "test"
				}, {
					node: i.right,
					context: "test"
				}) : t.push({
					node: i.value,
					context: "test"
				});
				break;
			case "comparator": {
				let e = qr.has(i.operator) ? "value" : "any";
				t.push({
					node: i.left,
					context: e
				}), i.operator !== "reg" && t.push({
					node: i.right,
					context: e
				});
				break;
			}
			case "functionCall": {
				let e = i.name, n = Jr[e], a = i.args;
				a.length !== n.args.length && Yr(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && Yr(`The result of ${e}() must be compared`), r === "value" && n.logical && Yr(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
					node: e,
					context: n.args[r]
				}));
				break;
			}
			case "operation":
				t.push({
					node: i.left,
					context: "value"
				}, {
					node: i.right,
					context: "value"
				});
				break;
			case "groupOperation":
				t.push({
					node: i.value,
					context: r === "any" ? "any" : "value"
				});
				break;
			case "value": r === "test" && Yr("A literal must be compared");
		}
	}
}
function $r(e) {
	let t;
	try {
		t = Kr(e);
	} catch (e) {
		if (Rr(e)) throw new Fr(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new Fr(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new Fr(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return Qr(t), t;
}
var ei = /* @__PURE__ */ new Set([
	"(",
	")",
	"*",
	"+",
	"-",
	".",
	"?",
	"[",
	"\\",
	"]",
	"^",
	"n",
	"r",
	"t",
	"{",
	"|",
	"}"
]), ti = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), ni = (e) => e >= 55296 && e <= 56319, ri = (e) => e >= 56320 && e <= 57343, ii = (e) => e !== void 0 && e >= "0" && e <= "9", ai = (e, t) => {
	let n = e.charCodeAt(t);
	return ni(n) && ri(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : ni(n) || ri(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, oi = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !ei.has(n) ? null : n === "n" ? {
		text: "\\n",
		length: 2,
		code: 10
	} : n === "r" ? {
		text: "\\r",
		length: 2,
		code: 13
	} : n === "t" ? {
		text: "\\t",
		length: 2,
		code: 9
	} : {
		text: "\\" + n,
		length: 2,
		code: n.charCodeAt(0)
	};
}, si = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return ti.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, ci = (e, t) => {
	let n = e[t];
	return n === "\\" ? oi(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : ai(e, t);
}, li = (e, t) => {
	let n = t + 1, r = "[";
	e[n] === "^" && (r += "^", n++);
	let i = !0;
	for (;;) {
		let a = e[n];
		if (a === void 0) return null;
		if (a === "]") return i ? null : {
			text: r + "]",
			length: n + 1 - t
		};
		if (a === "-") {
			if (!i && e[n + 1] !== "]") return null;
			r += "-", n++, i = !1;
			continue;
		}
		if (i = !1, a === "\\" && (e[n + 1] === "p" || e[n + 1] === "P")) {
			let t = si(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = ci(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = ci(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, ui = (e, t) => {
	let n = t + 1, r = n;
	for (; ii(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; ii(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, di = (e) => {
	let t = e, n = "", r = 0, i = !1, a = 0;
	for (; a < t.length;) {
		let e = t[a];
		switch (e) {
			case "|":
				n += "|", i = !1, a++;
				continue;
			case "(":
				r++, n += "(", i = !1, a++;
				continue;
			case ")":
				if (r === 0) return null;
				r--, n += ")", i = !0, a++;
				continue;
			case "*":
			case "+":
			case "?":
				if (!i) return null;
				n += e, i = !1, a++;
				continue;
			case "{": {
				let e = i ? ui(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = li(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = si(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = oi(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = ai(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, fi = 1e3, pi = 1e3, mi = 16, hi = /^[dgimsuy]*$/, gi = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, J = class extends Error {}, _i = 0, vi = 1, yi = 2, bi = 3, xi = 4, Si = 5, Ci = N(2, 31) - 1, wi = (e, t) => {
	let n = e.op.length, r = e.scratch ?? {
		clist: new Int32Array(n),
		nlist: new Int32Array(n),
		onList: new Int32Array(n),
		stack: new Int32Array(n),
		atomGen: new Int32Array(e.atoms.length),
		atomHit: new Uint8Array(e.atoms.length),
		gen: 0,
		step: 0
	};
	return e.scratch = void 0, (r.gen > Ci - t - 2 || r.step > Ci - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, Ti = /* @__PURE__ */ new Set([
	"^",
	"$",
	"\\",
	".",
	"*",
	"+",
	"?",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	"|",
	"/"
]), Ei = /^\{(\d+)(?:,(\d*))?\}/, Di = /^[0-9a-fA-F]{4}/, Oi = /^\(\?([ims]*)(?:-([ims]*))?:/, ki = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, Ai = class {
	constructor(e, t, n, r = !1) {
		this.src = e, this.unicode = t, this.iregexp = r, this.i = 0, this.mods = {
			i: n.includes("i"),
			m: n.includes("m"),
			s: n.includes("s")
		};
	}
	atom(e, t) {
		return {
			t: "atom",
			src: e,
			literal: t,
			mods: this.mods
		};
	}
	parse() {
		let e = this.parseAlt();
		if (this.i < this.src.length) throw new J("unexpected character");
		return e;
	}
	parseAlt() {
		let e = [this.parseSeq()];
		for (; this.src[this.i] === "|";) this.i++, e.push(this.parseSeq());
		return e.length === 1 ? e[0] : {
			t: "alt",
			alts: e
		};
	}
	parseSeq() {
		let e = [];
		for (; this.i < this.src.length && this.src[this.i] !== "|" && this.src[this.i] !== ")";) e.push(this.parseTerm());
		return e.length === 1 ? e[0] : {
			t: "cat",
			items: e
		};
	}
	parseTerm() {
		let e = this.src[this.i];
		return e === "^" ? (this.i++, {
			t: "bol",
			multiline: this.mods.m
		}) : e === "$" ? (this.i++, {
			t: "eol",
			multiline: this.mods.m
		}) : this.parseQuantifier(this.parseAtom());
	}
	parseAtom() {
		let { src: e } = this, t = this.i, n = e[t];
		if (n === "(") {
			let n = this.mods;
			if (e[t + 1] === "?") {
				let r = Oi.exec(e.slice(t, t + 12));
				if (!r) throw new J("lookaround or named group");
				let i = F({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new J("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new J("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new J("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(Ti.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new J("trailing backslash");
		if (r === "b" || r === "B") throw new J("word boundary");
		if (r >= "1" && r <= "9") throw new J("backreference");
		if (r === "0") {
			if (n) return 2;
			let r = 2;
			for (; r < 4 && /[0-7]/.test(t[e + r] ?? "");) r++;
			return r;
		}
		if (r === "c") return 3;
		if (r === "x" && /^[0-9a-fA-F]{2}/.test(t.slice(e + 2))) return 4;
		if (n && (r === "p" || r === "P" || r === "u") && t[e + 2] === "{") {
			let n = t.indexOf("}", e + 3);
			if (n === -1) throw new J("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && Di.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (Di.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
			}
			return 6;
		}
		return 2;
	}
	parseQuantifier(e) {
		let { src: t } = this, n = t[this.i], r, i;
		if (n === "*") r = 0, i = Infinity, this.i++;
		else if (n === "+") r = 1, i = Infinity, this.i++;
		else if (n === "?") r = 0, i = 1, this.i++;
		else if (n === "{") {
			let n = Ei.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > fi || i !== Infinity && i > fi) throw new J("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, ji = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= fi) throw new J("pattern too large");
		return this.op.push(e), this.x.push(t), this.y.push(n), this.op.length - 1;
	}
	atomId(e) {
		let t = (e.mods.i ? "i" : "") + (e.mods.s ? "s" : "") + (this.unicode ? "u" : ""), n = `${t}/${e.src}`, r = this.atomIds.get(n);
		return r === void 0 && (r = this.atoms.length, this.atoms.push({
			re: RegExp(`^(?:${e.src})$`, t),
			literal: e.mods.i ? void 0 : e.literal
		}), this.atomIds.set(n, r)), r;
	}
	finish() {
		this.emit(Si);
	}
	compile(e) {
		if (++this.work > 4 * fi) throw new J("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(_i, this.atomId(e));
				return;
			case "bol":
				this.emit(bi, +!!e.multiline);
				return;
			case "eol":
				this.emit(xi, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(vi);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(yi)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(vi);
					this.x[t] = t + 1, this.compile(e.node), this.emit(yi, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(vi);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, Mi = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new Ai(e, r, t, n).parse(), a = new ji(r);
		return a.compile(i), a.finish(), {
			op: a.op,
			x: a.x,
			y: a.y,
			atoms: a.atoms,
			unicode: r,
			sticky: t.includes("y")
		};
	} catch (e) {
		if (e instanceof RangeError) throw e;
		return null;
	}
}, Ni = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, v = !1, ie = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case _i:
					e[n++] = r;
					break;
				case Si: return u(c), v = !0, n;
				case yi:
					h[s++] = a[r];
					break;
				case vi:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case bi:
					(_ === 0 || a[r] === 1 && ki(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case xi: (_ === t.length || a[r] === 1 && ki(t.charCodeAt(_))) && (h[s++] = r + 1);
			}
		}
		return u(c), n;
	};
	if (g++, p = ie(d, 0, 0), v) return !0;
	for (; _ < t.length;) {
		if (p === 0 && l) return !1;
		let e = (c ? t.codePointAt(_) : t.charCodeAt(_)) > 65535 ? 2 : 1, n = t.slice(_, _ + e), r = re + _ + 1;
		g++, m = 0, _ += e;
		for (let e = 0; e < p; e++) {
			let t = d[e], i = a[t];
			if (te[i] !== r) {
				te[i] = r;
				let e = s[i];
				ne[i] = (e.literal === void 0 ? e.re.test(n) : e.literal === n) ? 1 : 0;
			}
			if (ne[i] === 1 && (m = ie(f, m, t + 1), v)) return !0;
		}
		if (!l && (m = ie(f, m, 0), v)) return !0;
		let i = d;
		d = f, f = i, p = m;
	}
	return !1;
}, Pi = (e, t, n) => {
	let r = wi(e, t.length);
	try {
		return Ni(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, Fi = 256, Ii = /* @__PURE__ */ new Map(), Li = 0, Ri = (e, t, n, r, i = !1) => {
	if (e.length > pi || t.length > 7 || !hi.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = Ii.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = gi(s) > mi ? null : Mi(n ? `^(?:${s})$` : s, t, i);
	Li >= Fi && (Ii.clear(), Li = 0);
	let l = Ii.get(s);
	return l === void 0 && Ii.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), Li++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, zi = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), Pi(e, t, n);
}, Bi = class {
	constructor(e) {
		this.nodes = e;
	}
}, Vi = (e) => {
	let t = !1;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === "\\" && n + 1 < e.length) {
			let r = e[n + 1];
			if ((r === "b" || r === "B") && !t) return !0;
			n++;
		} else r === "[" && !t ? t = !0 : r === "]" && t && (t = !1);
	}
	return !1;
}, Hi = (e) => {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (n === "\\") {
			let n = e[t + 1];
			if (n >= "1" && n <= "9") return !1;
			t++;
		} else if (n === "(" && e[t + 1] === "?") {
			let n = e[t + 2];
			if (n === "=" || n === "!") return !1;
			if (n === "<") {
				let n = e[t + 3];
				if (n === "=" || n === "!" || /[a-zA-Z]/.test(n ?? "")) return !1;
			}
		}
	}
	return !Vi(e);
}, Ui = 256, Wi = /* @__PURE__ */ new Map(), Gi = (e, t) => {
	let n = Wi.get(e);
	return n === void 0 && (n = Hi(e), Wi.size >= Ui && Wi.clear(), Wi.set(Array.from(e).join(""), n)), t(e.length), n;
}, Ki = /* @__PURE__ */ new Map(), qi = (e, t) => {
	let n = Ki.get(e);
	return n === void 0 && (n = di(e), n !== null && (n = Array.from(n).join("")), Ki.size >= Ui && Ki.clear(), Ki.set(Array.from(e).join(""), n)), t(e.length), n;
}, Ji = 256, Yi = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > pi) c = null;
		else if (o) {
			let n = qi(e, i);
			c = n === null ? null : Ri(n, t, r, i, !0);
		} else c = Gi(e, i) ? Ri(e, t, r, i) : null;
		s !== void 0 && (s.size >= Ji && s.clear(), s.set(a, c));
	}
	return c !== null && zi(c, n, i);
}, Xi = {
	length: (e, t) => {
		let n = e[0];
		if (K(n)) {
			t(n.length);
			let e = n.length;
			for (let t = 0; t < n.length - 1; t++) {
				let r = n.charCodeAt(t);
				if (r >= 55296 && r <= 56319) {
					let r = n.charCodeAt(t + 1);
					r >= 56320 && r <= 57343 && (e--, t++);
				}
			}
			return e;
		}
		if (W(n)) return U(n);
		if (G(n)) {
			let e = Lr(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !K(r) || !K(i) ? !1 : Yi(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !K(r) || !K(i) ? !1 : Yi(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, Zi = (e, t, n = L) => e === void 0 && t === void 0 || z(e, t, n), Qi = (e, t, n = L) => !z(e, t, n), $i = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, Y = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return $i(n) - $i(i);
	}
	return e.length - t.length;
}, ea = (e, t, n = L) => Br(e) && Br(t) ? e < t : K(e) && K(t) ? (n(Math.min(e.length, t.length)), Y(e, t) < 0) : !1, ta = (e, t, n = L) => ea(e, t, n) || Zi(e, t, n), na = (e, t, n = L) => Br(e) && Br(t) ? e > t : K(e) && K(t) ? (n(Math.min(e.length, t.length)), Y(e, t) > 0) : !1, ra = (e, t, n = L) => na(e, t, n) || Zi(e, t, n), ia = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, aa = (e, t, n) => {
	let r = U(e);
	for (let i = 0; i < r; i++) {
		let r = Ir(e, i);
		if (n(1 + ia(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, oa = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, sa = (e) => typeof e == "string" && e.length + 1 > V, ca = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = U(e);
	for (let n = 0; n < a; n++) {
		let r = Ir(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), sa(r) ? i.long.push(r) : i.set.add(oa(r));
	}
	return n?.set(e, i), i;
}, la = ({ set: e, long: t }, n, r) => {
	if (sa(n)) {
		for (let e of t) if (r(1 + ia(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(oa(n)));
}, ua = (e, t, n) => {
	let r = U(e);
	for (let i = 0; i < r; i++) if (n(), B(e, i) && t(e[i])) return !0;
	return !1;
}, da = {
	eq: Zi,
	ne: Qi,
	lt: ea,
	le: ta,
	gt: na,
	ge: ra,
	in: (e, t, n = L) => W(t) ? aa(t, e, n) !== -1 : !1,
	nin: (e, t, n = L) => W(t) ? aa(t, e, n) === -1 : !1,
	subsetof: (e, t, n = L, r) => {
		if (!W(e) || !W(t)) return !1;
		let i = ca(t, n, r);
		return !ua(e, (e) => !la(i, e, n), n);
	},
	anyof: (e, t, n = L, r) => {
		if (!W(e) || !W(t)) return !1;
		let i = ca(t, n, r);
		return ua(e, (e) => la(i, e, n), n);
	},
	noneof: (e, t, n = L, r) => {
		if (!W(e) || !W(t)) return !1;
		let i = ca(t, n, r);
		return !ua(e, (e) => la(i, e, n), n);
	},
	sizeof: (e, t) => !W(e) && !K(e) || !W(t) && !K(t) ? !1 : (W(e) ? U(e) : e.length) === (W(t) ? U(t) : t.length),
	size: (e, t) => !W(e) && !K(e) || !Br(t) ? !1 : (W(e) ? U(e) : e.length) === t
}, fa = (e) => !W(e) && !K(e) ? !1 : (W(e) ? U(e) : e.length) === 0, pa = (e, t, n, r = L, i) => !K(e) || !K(t) ? !1 : Yi(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), ma = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), ha = (e, t) => e.concat(`[${t}]`), ga = (e, t) => e < 0 ? t + e : e, X = (e, t) => {
	let n = U(e), r = ga(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: B(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, Z = (e, t) => {
	for (let n of t) e.push(n);
}, Q = 1e6, _a = 100, $ = 1e6, va = 20, ya = 1e4, ba = 1e4, xa = class {
	constructor(e) {
		this.weight = 0, this.nodes = 0, this.stringPositions = 0, this.done = !1, this.seen = /* @__PURE__ */ new Set(), this.frames = [], this.visit(e);
	}
	advance(e) {
		let t = this.nodes + e, { frames: n } = this;
		for (; n.length > 0 && this.nodes < t;) {
			let e = n[n.length - 1];
			if (e.i >= e.length) {
				n.pop();
				continue;
			}
			let t = e.i++;
			if (e.keys === null) {
				let n = e.container;
				if (e.indices !== null) {
					let r = Number(e.indices[t]);
					B(n, r) && this.visit(n[r]);
				} else if (B(n, t)) this.visit(n[t]);
				else if (++e.holes > ba) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!B(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), W(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: U(e),
				i: 0,
				holes: 0
			});
			else if (G(e)) {
				let t = Object.keys(e);
				this.frames.push({
					container: e,
					keys: t,
					indices: null,
					length: t.length,
					i: 0,
					holes: 0
				});
			}
		}
	}
}, Sa = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, ma(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = ma(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = U(e);
			for (let r = 0; r < n; r++) this.tick(), B(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new xa(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(ya, Math.ceil((this.retained - this.retainedLimit) / va))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new I(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(Q, _a * e.weight) + t, this.retainedLimit = Math.max($, va * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new xa(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(ya, Math.ceil((this.steps - this.stepLimit) / _a))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new I(`Query exceeded ${this.stepLimit} evaluation steps`);
			}
		}, {
			regexProgram: (e) => {
				this.largestRegexProgram = Math.max(this.largestRegexProgram, e);
			},
			regexWork: (e) => {
				this.regexSteps += e, this.tick(e);
			},
			regexSites: /* @__PURE__ */ new Map()
		}), this.readsCurrent = /* @__PURE__ */ new WeakMap(), this.invariantResults = /* @__PURE__ */ new Map(), this.isInvariant = (e) => (this.readsCurrent.has(e) || this.classify(e), !this.readsCurrent.get(e)), this.classify = (e) => {
			let t = this.readsCurrent, n = [], r = (e) => {
				if (typeof e != "object" || !e) return !1;
				let r = t.get(e);
				if (r !== void 0) return r;
				let i = e.type;
				if (i === "current") return t.set(e, !0), !0;
				if (i === "filterExpression" || i === "value") return t.set(e, !1), !1;
				let a = Object.values(e);
				n.push({
					node: e,
					children: a,
					i: 0,
					reads: !1
				});
			};
			for (r(e); n.length > 0;) {
				let e = n[n.length - 1];
				e.i < e.children.length ? r(e.children[e.i++]) === !0 && (e.reads = !0) : (t.set(e.node, e.reads), n.pop(), e.reads && n.length > 0 && (n[n.length - 1].reads = !0));
			}
		}, this.memoInvariant = (e, t) => {
			if (!this.isInvariant(e)) return t();
			if (this.invariantResults.has(e)) return this.invariantResults.get(e);
			let n = t();
			return this.invariantResults.set(e, n), n;
		}, this.handleRootQuery = (e, t) => {
			if (this.rootQueryCache.has(e)) return this.rootQueryCache.get(e);
			let n = this.handleSubscript(this.rootPayload, t);
			return this.rootQueryCache.set(e, n), n;
		}, this.handleIdentifier = (e, t) => this.selectMember(e, t), this.handleStringLiteral = (e, t) => this.selectMember(e, t), this.selectMember = ({ value: e, paths: t }, n) => {
			if (!G(e)) return;
			let r = this.canonicalName(n, n.value);
			if (B(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (W(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: ha(t, r)
					});
				}), n;
			}
			if (G(e)) {
				let n = Lr(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) B(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!W(e)) return;
			let r = X(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: ha(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (W(e)) {
				let r = X(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: ha(t, r.index)
				} : void 0;
			}
			if (G(e)) {
				let r = String(n.value);
				return B(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!W(e)) return [];
			let r = U(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : ga(n.start, r), o = n.end === null ? r : ga(n.end, r)) : (a = n.start === null ? r - 1 : ga(n.start, r), o = n.end === null ? -r - 1 : ga(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: B(e, u) ? e[u] : void 0,
				paths: ha(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (G(e.value)) {
						let t = this.handleIdentifier(e, r);
						q(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (G(e.value)) {
						let t = this.handleStringLiteral(e, r);
						q(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (W(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						q(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					Z(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": Z(n, this.handleBracketExpressionContent(e, r));
			}
			return n;
		}, this.handleDotdot = (e, t) => {
			let n = [];
			return this.collectDotdot(e, t, n), n;
		}, this.collectDotdot = (e, t, n) => {
			let r = t.value, i = [];
			this.tick();
			let a = e;
			for (; a !== void 0;) {
				let e = a.value;
				switch (r.type) {
					case "bracketMember": {
						let e = this.handleBracketMemberContent(a, r.value);
						q(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						Z(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						Z(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						q(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (G(e)) {
					let t = Lr(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else W(e) && i.push({
					parent: a,
					keys: null,
					length: U(e),
					i: 0
				});
				for (a = void 0; i.length > 0;) {
					let e = i[i.length - 1];
					if (e.i >= e.length) {
						i.pop();
						continue;
					}
					let t = e.i++;
					if (e.keys === null) {
						this.tick();
						let n = e.parent.value;
						if (!B(n, t)) continue;
						a = {
							value: n[t],
							paths: ha(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!B(n, r)) continue;
						a = {
							value: n[r],
							paths: this.formatStringLiteralPath(e.parent.paths, r)
						};
					}
					break;
				}
			}
		}, this.handleOperationContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "root": return this.handleRootQuery(t, t.next);
				case "current": return this.handleSubscript(e, t.next);
				case "value": return {
					value: t.value,
					paths: e.paths
				};
				case "groupOperation": return this.memoInvariant(t, () => this.handleOperationContent(e, t.value));
				case "functionCall": return {
					value: this.handleFunctionCall(e, t),
					paths: e.paths
				};
				case "operation": {
					let n = [], r = t;
					for (; r.type === "operation";) n.push({
						operator: r.operator,
						right: r.right
					}), r = r.left;
					let i = this.handleOperationContent(e, r)?.value;
					this.tick(n.length);
					for (let t = n.length - 1; t >= 0; t--) {
						let r = this.handleOperationContent(e, n[t].right)?.value;
						if (!Br(i) || !Br(r)) i = void 0;
						else switch (n[t].operator) {
							case "plus":
								i += r;
								break;
							case "minus":
								i -= r;
								break;
							case "div":
								i = r === 0 ? void 0 : i / r;
								break;
							case "multi": i *= r;
						}
					}
					return Br(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return fa(n);
			if (t.operator === "reg") return pa(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = da[t.operator];
			if (i) {
				let e = this.isInvariant(t.right) ? this.siteSetCache(t.right) : void 0;
				return i(n, r, this.tick, e);
			}
			return !1;
		}, this.handleLogicalExpression = (e, t) => this.memoInvariant(t, () => this.evaluateLogicalExpression(e, t)), this.evaluateLogicalExpression = (e, t) => {
			let n = [], r = !this.isInvariant(t), i = t;
			for (; i.type === "logicalExpression" && (i === t || !r || !this.isInvariant(i));) n.push({
				operator: i.operator,
				right: i.right
			}), i = i.left;
			this.tick(n.length);
			let a = this.handleFilterExpressionContent(e, i);
			for (let t = n.length - 1; t >= 0; t--) (n[t].operator === "and" ? a : !a) && (a = this.handleFilterExpressionContent(e, n[t].right));
			return a;
		}, this.handleFunctionCall = (e, t) => this.memoInvariant(t, () => this.evaluateFunctionCall(e, t)), this.evaluateFunctionCall = (e, t) => {
			let n = t.name === "count" || t.name === "value", r = t.args.map((t) => {
				let r = this.handleOperationContent(e, t);
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new Bi(r.value) : new Bi(q(r?.value) ? [r?.value] : []);
			}), i = Xi[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
			return i ? i(r, this.tick, o ? t : void 0) : void 0;
		}, this.handleFilterExpressionContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "logicalExpression": return this.handleLogicalExpression(e, t);
				case "comparator": return this.handleComparator(e, t);
				case "groupExpression": return this.memoInvariant(t, () => this.handleFilterExpressionContent(e, t.value));
				case "notExpression": return this.memoInvariant(t, () => !this.handleFilterExpressionContent(e, t.value));
				case "functionCall": return !!this.handleFunctionCall(e, t);
				case "root": {
					let e = this.handleRootQuery(t, t.next);
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : q(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : q(n);
				}
				case "value": return !!t.value;
			}
		}, this.handleBracketMemberContent = (e, t) => {
			switch (t.type) {
				case "identifier": return this.handleIdentifier(e, t);
				case "numericLiteral": return this.handleNumericLiteral(e, t);
				case "stringLiteral": return this.handleStringLiteral(e, t);
			}
		}, this.handleBracketExpressionContent = (e, t) => {
			let n = e.value;
			switch (t.type) {
				case "filterExpression": {
					let r = [];
					if (W(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: ha(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (G(n)) {
						let i = Lr(n);
						this.tick(i.length);
						for (let a of i) {
							if (!B(n, a)) continue;
							let i = {
								value: n[a],
								paths: this.formatStringLiteralPath(e.paths, a)
							};
							this.handleFilterExpressionContent(i, t.value) && (this.retain(), r.push(i));
						}
					}
					return r;
				}
				case "unions": return this.handleUnions(e, t);
				case "wildcard": return this.handleWildcard(e);
				case "slices": return this.handleSlices(e, t);
			}
		}, this.isIndefiniteSegment = (e) => {
			let t = e.value;
			return t.type === "bracketExpression" || t.type === "dotdot" || t.type === "dot" && t.value.type === "wildcard";
		}, this.selectMany = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketExpression": return this.handleBracketExpressionContent(e, n.value);
				case "dotdot": return this.handleDotdot(e, n);
				default: return this.handleWildcard(e);
			}
		}, this.selectOne = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketMember": return this.handleBracketMemberContent(e, n.value);
				case "dot":
					if (n.value.type === "identifier") return this.handleIdentifier(e, n.value);
					if (n.value.type === "numericLiteral") return this.handleDotNumericLiteral(e, n.value);
			}
		}, this.handleSubscript = (e, t) => {
			if (t === null) return e;
			let n = [], r = [{
				node: e,
				segment: t
			}], i = !1;
			for (; r.length > 0;) {
				let { node: e, segment: t } = r.pop(), a;
				if (this.isIndefiniteSegment(t)) i = !0, a = this.selectMany(e, t);
				else {
					this.tick();
					let n = this.selectOne(e, t);
					if (!q(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) Z(n, a);
				else for (let e = a.length - 1; e >= 0; e--) r.push({
					node: a[e],
					segment: o
				});
			}
			if (!i) return n[0];
			let a = [], o = [];
			for (let e of n) a.push(e.value), o.push(e.paths);
			return {
				value: a,
				paths: o,
				isIndefinite: !0
			};
		}, this.handleRoot = (e) => {
			try {
				return this.handleSubscript(this.rootPayload, e.next);
			} catch (e) {
				throw Rr(e) ? new I("Query is nested too deeply") : zr(e) ? new I("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? Q, this.retainedLimit = this.adaptiveLimit ? $ : Infinity;
	}
}, Ca = (e, t, n) => {
	let r = $r(t), i = new Sa(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Vr(i) ? [] : [i.value] : i?.value;
}, wa = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = Ca(e, i, n);
		q(t) && r.push(t);
	}
	return r;
}, Ta = (e, t, n = {}) => {
	try {
		return W(t) ? wa(e, t, n) : Ca(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, Ea = (e) => typeof e == "object" && !!e && !Array.isArray(e), Da = (e, t) => {
	if (!Ea(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Pa(t, i);
	return n;
}, Oa = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Pa(t, e));
}, ka = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Aa = (e, t) => ka(e, t), ja = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Ma = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, Na = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Ma,
		applyTemplate: e
	});
}, Pa = (e, t, n) => {
	let r = e, i = t;
	ja(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? ka(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Aa(a?.textContent, r)), "attributes" in a && (a.attributes = Da(a?.attributes, r)), "children" in a && (a.children = Oa(a?.children, r))), a);
};
Na(Pa);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var Fa = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, Ia = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
};
((e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: Ia,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
})((e, t) => {
	let n = e;
	return Fa(n, t), n.map((e) => Pa(e, e[t]));
}, (e, t) => {
	let n = e, r = t;
	return Fa(n, r), n.map((e) => Pa(e, r));
});
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs/src/v24/findByRole.js
var La = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = La(n, t);
		if (e) return e;
	}
	return null;
}, Ra = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = Ta(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = La(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
	let a = [...t.filePath ?? []];
	if (a.length === 0) throw Error("destinationPath.filePath must contain the property to write");
	let o = a.pop(), s = a.reduce((e, t) => {
		if (e == null) throw Error(`Cannot resolve destination filePath at: ${t}`);
		return e[t];
	}, i);
	if (s == null) throw Error(`Destination parent not found for filePath: ${t.filePath.join(".")}`);
	return n && console.log("json-write-path v6 resolved:", {
		fileName: t.fileName,
		jsonPath: t.jsonPath,
		dataRole: t.dataRole,
		filePath: t.filePath,
		parent: s,
		key: o
	}), {
		parent: s,
		key: o,
		target: i
	};
}, za = (e, t, n, r) => {
	let { parent: i, key: a } = Ra(e, t, r);
	return (k[t.action] || Nr)(i, a, n), e;
}, Ba = (e) => typeof e == "object" && !!e && !Array.isArray(e), Va = (e, t) => {
	if (!Ba(e)) return null;
	if (e[t] !== void 0) return e[t];
	let n = `show${t.charAt(0).toUpperCase()}${t.slice(1)}`;
	return e[n] === void 0 ? null : e[n];
}, Ha = (e, t) => {
	let n = Ar[e];
	if (n) for (let e of n) {
		if (e.skipIf && Ta(t, e.skipIf, { returnArray: !0 }).length > 0) continue;
		let n = Dr[e.templateKey];
		try {
			za({ base: t }, e.destinationPath, n);
		} catch {}
	}
}, Ua = ({ options: e = {}, optionDefs: t = {}, base: n, showLog: r = !1 } = {}) => {
	if (!n || !Ba(e) || !Ba(t)) return n;
	for (let [r, i] of Object.entries(t)) {
		if (!Ba(i)) continue;
		let t = Va(e, r);
		if (!t) continue;
		let a = typeof t == "boolean" && t === !0, o = Ba(t);
		if ((a || o) && Object.entries(i).some(([e]) => e !== "initialize" && (a || t[e] === !0))) {
			i.initialize && Ha(i.initialize, n);
			for (let [e, r] of Object.entries(i)) e !== "initialize" && (a || t[e] === !0) && Ha(r, n);
		}
	}
	return n;
}, Wa = {
	name: "json-renderers-run-instructions",
	version: "1.15.1"
}, Ga = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.render = {
		meta: Wa,
		renderFunc: e
	});
}, Ka = ({ instructionMainKey: e, instructionSubKey: t, data: n, options: r, showLog: i = !1 } = {}) => {
	let a = Ne[e]?.[t];
	if (!a) throw Error(`Definition not found: ${e}.${t}`);
	let o = structuredClone(Fe[a.baseFromSpec]);
	return Tr({
		instructions: a.instructions ?? [],
		base: o,
		data: n,
		showLog: i
	}), Ua({
		options: r,
		optionDefs: a.options && typeof a.options == "object" ? a.options : Ne[e]?.options ?? {},
		base: o,
		data: n,
		showLog: i
	}), o;
};
Ga(Ka);
// src/v58/index.js
var qa = (e) => {
	if (!e || typeof e != "object") return e;
	let t = { ...e };
	return t.showSearch === !0 && !t.search && (t.search = {
		showLabel: !0,
		showHelper: !0,
		showInput: !0
	}), t.showSerial === !0 && t.serial === void 0 && (t.serial = !0), t.showOptions === !0 && !t.options && (t.options = {
		showButton: !0,
		showEditButton: !0,
		showDeleteButton: !0
	}), t;
}, Ja = (e = {}) => {
	ee(e);
	let t = e?.showLog, n = (e.type || "").split("."), r = n.length > 1 ? n[0] : "table", i = n.length > 1 ? n[1] : n[0] || "simple", a = qa(e?.options);
	return Ae({
		jsonSpec: Ka({
			instructionMainKey: r,
			instructionSubKey: i,
			data: {
				data: e?.data,
				columns: e?.columns
			},
			options: a,
			showLog: t
		}),
		targetHtmlId: e.targetHtmlId,
		appendPosition: e.appendPosition,
		classToApply: e.classToApply ?? "",
		showLog: t
	});
};
Me(Ja);
export { Ja as default, Ja as render };
