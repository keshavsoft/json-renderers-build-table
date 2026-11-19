// \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.type;
	if (n === void 0) throw Error("Missing compulsory key: \"type\"");
	if (typeof n != "string") throw TypeError("type must be a string");
	return !0;
}, r = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.data;
	if (n === void 0) throw Error("Missing compulsory key: \"data\"");
	if (!Array.isArray(n)) throw TypeError("data must be an Array");
	return !0;
}, i = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.columns;
	if (n === void 0) throw Error("Missing compulsory key: \"columns\"");
	if (!Array.isArray(n)) throw TypeError("columns must be an Array");
	return !0;
}, a = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.showLog;
	if (n !== void 0 && typeof n != "boolean") throw TypeError("showLog must be a boolean");
	return !0;
}, o = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return n(t), r(t), i(t), a(t), !0;
}, s = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.targetHtmlId;
	if (n === void 0) throw Error("Missing compulsory key: \"targetHtmlId\"");
	if (typeof n != "string") throw TypeError("targetHtmlId must be a string");
	if (n.trim().length === 0) throw Error("targetHtmlId must be a non-empty string");
	return !0;
}, c = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.appendPosition;
	if (n === void 0) throw Error("Missing compulsory key: \"appendPosition\"");
	if (typeof n != "string") throw TypeError("appendPosition must be a string");
	return !0;
}, l = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.classToApply;
	if (n === void 0) throw Error("Missing compulsory key: \"classToApply\"");
	if (typeof n != "string") throw TypeError("classToApply must be a string");
	return !0;
}, u = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return s(t), c(t), l(t), !0;
}, d = {
	type: "table",
	targetHtmlId: "",
	data: [],
	columns: [],
	classToApply: "",
	appendPosition: "replace",
	showLog: !1
}, f = (e) => {
	let t = typeof e == "object" && e ? e.inKey ?? e.key : e;
	return t && t in d ? d[t] : { ...d };
};
Object.assign(f, d);
// node_modules/json-renderers-guard/src/v5/index.js
var p = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return o(t), u(t), !0;
};
p.getSpec = f, p.configSpec = d, p.guardSpec = o, p.guardMount = u;
// node_modules/@keshavsoft/json-to-dom/src/v42/register/meta.js
var m = {
	version: "42.1.4",
	name: "json-to-dom"
}, ee = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.jsonToDom = {
		meta: m,
		appendToDom: e
	});
}, h = {
	version: "v12",
	description: "JSON-to-DOM engine powered by decoupled external-action traversal engine"
}, te = (e) => {
	if (typeof globalThis > "u" || !e) return;
	globalThis.ks ??= {};
	let t = typeof e == "function" ? e : e.buildSpecElement, n = e.buildSpecElementWithValidate, r = {
		meta: h,
		buildSpecElement: t,
		...n ? { buildSpecElementWithValidate: n } : {}
	};
	globalThis.ks["json-to-tag"] = r, globalThis.ks.jsonToTag = r;
}, ne = ({ inItems: e, inFunc: t }) => {
	let n = e, r = t;
	return Array.isArray(n) ? n.map((e) => re({
		inSpec: e,
		inFunc: r
	})).flat(Infinity).filter(Boolean) : [];
}, g = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	if (!n || typeof n != "object" || Array.isArray(n)) return null;
	let i = typeof r == "function" ? r(n) : null;
	if (Array.isArray(n.children)) {
		let e = ne({
			inItems: n.children,
			inFunc: r
		});
		if (i && typeof i.append == "function" && Array.isArray(e)) {
			let t = e.filter(Boolean);
			t.length && i.append(...t);
		}
	}
	return i;
}, re = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	return n == null ? null : typeof Node < "u" && n instanceof Node ? n : Array.isArray(n) ? ne({
		inItems: n,
		inFunc: r
	}) : typeof n == "object" ? g({
		inSpec: n,
		inFunc: r
	}) : typeof n == "string" || typeof n == "number" ? typeof document < "u" ? document.createTextNode(String(n)) : String(n) : null;
}, _ = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t;
	return !n || typeof n != "object" || Array.isArray(n) ? (r.push({ reason: "Node must be a plain object" }), !1) : !0;
}, ie = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName;
	return !o || typeof o != "string" || o.trim() === "" ? (a.push({ reason: "Missing or empty 'tagName'" }), !1) : i && typeof i == "object" && !(i[o] || Object.keys(i).includes(o)) ? (a.push({
		tagName: o,
		reason: `Unrecognized tagName '${o}' not found in spec catalog`
	}), !1) : !0;
}, ae = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsTextContent === !1 && r.textContent ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow direct textContent`
	}), !1) : !0;
}, oe = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsChildren === !1 && Array.isArray(r.children) && r.children.length > 0 ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow children (void element)`
	}), !1) : "children" in r && !Array.isArray(r.children) ? (a.push({
		tagName: o,
		reason: "'children' must be an array"
	}), !1) : !0;
}, se = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && Array.isArray(s.childTags) && s.childTags.length > 0 && Array.isArray(r.children) && r.children.forEach((e) => {
		e && e.tagName && !s.childTags.includes(e.tagName) && a.push({
			tagName: e.tagName,
			reason: `Tag '${e.tagName}' is not an allowed child of '${o}' (allowed: ${s.childTags.join(", ")})`
		});
	}), !0;
}, ce = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t, i = n.tagName;
	return "attributes" in n && (!n.attributes || typeof n.attributes != "object" || Array.isArray(n.attributes)) ? (r.push({
		tagName: i,
		reason: "'attributes' must be a key-value object"
	}), !1) : !0;
}, le = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n;
	_({
		inNode: r,
		inErrors: a
	}) && (ie({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), ae({
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
		inErrors: a
	}));
}, ue = {
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
}, de = {
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
}, fe = {
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
}, v = {
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
}, me = {
	name: "spec-repo",
	version: "1.17.1"
};
// node_modules/spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: me,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: de,
	tags: fe,
	tagsSchema: pe,
	instructions: v,
	definitions: ue
});
// node_modules/json-to-tag-validate/src/v4/index.js
function he({ inJson: e, inCatalog: t, inSpec: n }) {
	let r = e, i = t ?? n ?? fe, a = [];
	return re({
		inSpec: r,
		inFunc: (e) => {
			le({
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
var ge = "http://www.w3.org/2000/svg", _e = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), ve = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return _e.has(t) ? document.createElementNS(ge, t) : document.createElement(t);
}, ye = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), be = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), xe = "http://www.w3.org/1999/xlink", Se = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(xe, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, Ce = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, we = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = ve({ inTagName: e.tagName });
	return t ? (ye({
		inElement: t,
		inTextContent: e.textContent,
		inTagName: e.tagName
	}), be({
		inElement: t,
		inProperties: e.properties
	}), Se({
		inElement: t,
		inAttributes: e.attributes
	}), Ce({
		inElement: t,
		inClassList: e.classList
	}), t) : null;
}, Te = (e = {}) => re({
	inSpec: e?.spec ?? e?.inSpec ?? e,
	inFunc: we
});
te({
	buildSpecElement: Te,
	buildSpecElementWithValidate: (e = {}) => {
		let t = e?.spec ?? e?.inSpec ?? e, n = he({ inJson: t });
		return n.isValid || console.warn("[json-to-tag] Specification validation issues:", n.errors), re({
			inSpec: t,
			inFunc: we
		});
	}
});
// node_modules/spec-to-dom/src/v2/register/meta.js
var Ee = {
	version: "2.1.1",
	name: "spec-to-dom"
}, De = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.specToDom = {
		meta: Ee,
		appendToDom: e
	});
}, Oe = ({ buildSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => {
	let i = e, a = t, o = n, s = r;
	s && console.log("renderToDom 1 (content):", i);
	let c = document.getElementById(a);
	return c ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? o === "prepend" ? c.prepend(...i) : c.append(...i) : o === "prepend" ? c.prepend(i) : (c.innerHTML = "", c.append(i)), s && console.log("renderToDom 2 (mounted):", c), c) : null;
};
De(Oe);
// node_modules/@keshavsoft/json-to-dom/src/v42/index.js
var ke = ({ jsonSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => Oe({
	buildSpec: Te(e),
	targetHtmlId: t,
	appendPosition: n,
	showLog: r
});
ee(ke);
// node_modules/json-renderers-build-table-events/src/v2/state.js
var Ae = ({ container: e, dataset: t = [], columns: n = [], options: r = {}, renderTable: i = null, onSearch: a = null, onRowClick: o = null, onRowAction: s = null, onSave: c = null, showLog: l = !1 } = {}) => ({
	container: e,
	dataset: [...t],
	filteredData: [...t],
	columns: n,
	options: r,
	renderTable: i,
	selectedIndex: -1,
	onSearch: a,
	onRowClick: o,
	onRowAction: s,
	onSave: c,
	showLog: l
}), je = [
	{
		event: "input",
		selector: "input[type='search'], input[name='search'], [data-role='table-search'], #tableSearch, .table-search-input",
		action: "onSearch"
	},
	{
		event: "click",
		selector: "tfoot button, button.ks-btn-save, [data-role='table-save']",
		action: "onFooterSave"
	},
	{
		event: "click",
		selector: "tbody button, button.ks-btn-show, [data-role='row-action']",
		action: "onRowAction"
	},
	{
		event: "click",
		selector: "tbody tr",
		action: "onRowClick"
	}
], Me = {
	version: "1.19.1",
	name: "dom-primitive-engine"
}, Ne = (e) => {
	e && typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.domPrimitive ??= {}, globalThis.ks.domPrimitive.engine = {
		meta: Me,
		runInstructions: e
	});
}, Pe = ({ element: e, previousResult: t, instruction: n, clientData: r }) => {
	let i = n.sourcePath.fileName;
	if (i === "root") return e;
	if (i === "previous") return t;
	if (i === "clientData") return r;
}, Fe = (e, t) => {
	let n = e.arguments ?? {}, r = n.columns ?? t.columns, i = n.options ?? t.options, a = n.data ?? t.data;
	return {
		...n,
		columns: r,
		options: i,
		data: a
	};
}, Ie = ({ element: e, previousResult: t, instruction: n, clientData: r, operations: i }) => {
	let a = Pe({
		element: e,
		previousResult: t,
		instruction: n,
		clientData: r
	}), o = Fe(n, r), s = i[n.func] ?? r[n.func] ?? r?.functions?.[n.func];
	if (typeof s != "function") throw TypeError(`Unknown primitive operation: "${n.func}"`);
	return s(a, o, r);
}, Le = (e, t, n) => {
	let r = e, i = t.selector;
	return r.closest(i);
}, Re = (e, t, n) => {
	let r = e, i = t.selector;
	return !r || typeof r.querySelector != "function" ? null : r.querySelector(i);
}, ze = (e, t, n) => {
	let r = e, i = t.selector;
	return Array.from(r.querySelectorAll(i));
}, Be = /* @__PURE__ */ t({
	closest: () => Le,
	querySelector: () => Re,
	querySelectorAll: () => ze
}), Ve = (e, t, n) => {
	let r = e, i = t.trim ?? !0, a = r.textContent ?? "";
	return i ? a.trim() : a;
}, He = (e, t, n) => {
	let r = e, i = r.tagName?.toLowerCase(), a = r.type?.toLowerCase();
	return a === "checkbox" ? r.checked ? r.value || !0 : !1 : a === "radio" ? r.checked ? r.value : void 0 : i === "select" && r.multiple ? Array.from(r.selectedOptions, (e) => e.value) : "value" in r && i !== "button" ? r.value : r.textContent?.trim() ?? "";
}, Ue = (e, t, n) => {
	let r = e, i = t.columns ?? n.columns ?? [], a = t.read ?? "text", o = {};
	return r.forEach((e, t) => {
		let r = i[t];
		if (!r) return;
		let s = a === "value" ? He(e, {}, n) : Ve(e, {}, n);
		o[r] = s;
	}), o;
}, We = (e, t, n) => {
	let r = e, i = {};
	return r.forEach((e) => {
		let t = e.name;
		if (!t) return;
		let r = He(e, {}, n);
		(e.type?.toLowerCase() !== "radio" || r !== void 0) && (Object.hasOwn(i, t) ? (Array.isArray(i[t]) || (i[t] = [i[t]]), i[t].push(r)) : i[t] = r);
	}), i;
}, Ge = /* @__PURE__ */ t({
	mapNamedValues: () => We,
	mapValues: () => Ue,
	readText: () => Ve,
	readValue: () => He
}), Ke = (e, t, n) => {
	let r = t?.key ?? "Enter", i = e && typeof e == "object" && "key" in e ? e : t?.event ?? n?.event;
	return !i || i.key !== r ? null : i.target ?? i.currentTarget ?? e;
}, qe = /* @__PURE__ */ t({ isKey: () => Ke }), Je = {
	...Be,
	...Ge,
	...qe
}, Ye = (e, t, n = {}) => {
	let r = e;
	for (let i of t) {
		if (r === null) return null;
		r = Ie({
			element: e,
			previousResult: r,
			instruction: i,
			clientData: n,
			operations: Je
		});
	}
	return r;
}, Xe = Ye;
Ne(Ye);
// node_modules/dom-traversal-functions/src/v3/table/header/instructions.json
var Ze = [{
	narration: "Find search input control if event came from within header container",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "input, form, div" }
}, {
	narration: "Read search query value from input",
	sourcePath: { fileName: "previous" },
	func: "readValue"
}], Qe = (e) => e ? (Xe(e.target || e, Ze) || "").trim().toLowerCase() : "", $e = /* @__PURE__ */ t({
	default: () => Qe,
	getSearchQuery: () => Qe,
	instructions: () => Ze
}), et = (e) => e ? e.tagName === "TR" ? e : e.closest("tr") || null : null, tt = (e, t = "") => {
	let n = et(e);
	if (!n) return -1;
	if (t) return Array.from(document.querySelectorAll(t)).indexOf(n);
	let r = n.closest("tbody");
	if (r) return Array.from(r.querySelectorAll(":scope > tr")).indexOf(n);
	let i = n.parentElement;
	return i ? Array.from(i.children).filter((e) => e.tagName === "TR").indexOf(n) : -1;
}, nt = (e, t = "table-primary", n = "") => {
	let r = et(e);
	if (!r) return null;
	let i = [];
	if (n) i = Array.from(document.querySelectorAll(n));
	else {
		let e = r.closest("tbody") || r.parentElement;
		e && (i = Array.from(e.querySelectorAll(":scope > tr")));
	}
	return i.forEach((e) => e.classList.remove(t)), r.classList.add(t), r;
}, rt = [
	{
		narration: "Find closest body table row",
		sourcePath: { fileName: "root" },
		func: "closest",
		arguments: { selector: "tr" }
	},
	{
		narration: "Collect all data cells from row",
		sourcePath: { fileName: "previous" },
		func: "querySelectorAll",
		arguments: { selector: "td" }
	},
	{
		narration: "Map collected cell values to columns using clientData",
		sourcePath: { fileName: "previous" },
		func: "mapValues",
		arguments: { read: "text" }
	}
], it = (e, { columns: t = [], dataset: n = [], bodySelector: r = "" } = {}) => {
	let i = et(e);
	if (!i) return null;
	let a = tt(i, r);
	return n && Array.isArray(n) && a >= 0 && a < n.length ? n[a] : Xe(i, rt, { columns: t.map((e) => typeof e == "string" ? e : e.columnName || e.field) }) || {};
}, at = /* @__PURE__ */ t({
	getRowData: () => it,
	getRowElement: () => et,
	getRowIndex: () => tt,
	highlightRow: () => nt,
	instructions: () => rt
}), ot = [
	{
		narration: "Find closest footer table row",
		sourcePath: { fileName: "root" },
		func: "closest",
		arguments: { selector: "tfoot tr" }
	},
	{
		narration: "Collect all input and select controls in footer row",
		sourcePath: { fileName: "previous" },
		func: "querySelectorAll",
		arguments: { selector: "input, select" }
	},
	{
		narration: "Map named control values into object",
		sourcePath: { fileName: "previous" },
		func: "mapNamedValues"
	}
], st = (e, t = []) => {
	let n = et(e);
	if (!n) return {};
	let r = Xe(n, ot);
	if (r && typeof r == "object" && Object.keys(r).length > 0) return r;
	let i = {};
	return t && t.length > 0 && t.forEach((e) => {
		let t = typeof e == "string" ? e : e.columnName || e.field, r = n.querySelector(`input[name="${t}"], select[name="${t}"]`) || n.querySelector(`input#${t}, select#${t}`);
		r && (i[t] = r.value.trim());
	}), i;
}, ct = (e) => {
	let t = et(e);
	if (!t) return 0;
	let n = Array.from(t.querySelectorAll("input"));
	return n.forEach((e) => {
		e.value = "";
	}), n.length;
}, y = {
	header: $e,
	body: at,
	footer: /* @__PURE__ */ t({
		clearRowInputs: () => ct,
		getFooterData: () => st,
		instructions: () => ot
	})
}, lt = {
	name: "dom-traversal-functions",
	version: "1.3.1"
};
// node_modules/dom-traversal-functions/src/v3/index.js
((e) => {
	let t = e;
	typeof globalThis < "u" && t && (globalThis.ks ??= {}, globalThis.ks.domTraversal ??= {}, globalThis.ks.domTraversal = {
		meta: lt,
		...t
	});
})({ table: y });
// node_modules/json-renderers-build-table-events/src/v2/actions/onSearch/instructions.json
var ut = [{
	narration: "From search input, find component container",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "[data-role='table-parent'], .card-body, .container, div" }
}, {
	narration: "Locate search feedback display element",
	sourcePath: { fileName: "previous" },
	func: "querySelector",
	arguments: { selector: "#search-feedback, [data-role='search-feedback']" }
}], dt = (e, t, n) => {
	let r = y?.header?.getSearchQuery ? y.header.getSearchQuery(t) : (t?.value || "").trim().toLowerCase(), i = r ? n.dataset.filter((e) => Object.values(e).some((e) => String(e ?? "").toLowerCase().includes(r))) : n.dataset;
	n.filteredData = i, typeof n.renderTable == "function" && n.renderTable(i);
	let a = Xe(t, ut);
	a && (a.textContent = r ? `Showing ${i.length} of ${n.dataset.length} records matching "${t.value.trim()}".` : `Showing all ${n.dataset.length} records.`), typeof n.onSearch == "function" && n.onSearch(r, i);
}, ft = [{
	narration: "From clicked element, traverse to closest tbody table row",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "tbody tr" }
}], pt = (e, t, n) => {
	let r = Xe(t, ft);
	if (!r || !n.container.contains(r)) return;
	r.parentElement?.querySelectorAll("tr.table-primary, tr.table-active").forEach((e) => {
		e.classList.remove("table-primary", "table-active");
	}), r.classList.add("table-primary");
	let i = y?.body?.getRowIndex ? y.body.getRowIndex(r) : Array.from(r.parentElement.children).indexOf(r), a = n.filteredData[i] || n.dataset[i];
	n.selectedIndex = i, typeof n.onRowClick == "function" && a && n.onRowClick(a, i);
}, mt = [{
	narration: "From clicked button, traverse to closest tbody table row",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "tbody tr" }
}], ht = (e, t, n) => {
	e.stopPropagation();
	let r = t.closest("button"), i = Xe(t, mt);
	if (!r || !i || !n.container.contains(i)) return;
	i.parentElement?.querySelectorAll("tr.table-primary, tr.table-active").forEach((e) => {
		e.classList.remove("table-primary", "table-active");
	}), i.classList.add("table-primary");
	let a = y?.body?.getRowIndex ? y.body.getRowIndex(i) : Array.from(i.parentElement.children).indexOf(i), o = n.filteredData[a] || n.dataset[a];
	n.selectedIndex = a;
	let s = r.dataset.action || r.textContent.trim().toLowerCase() || "show";
	typeof n.onRowAction == "function" && o && n.onRowAction(s, o, a);
}, gt = [{
	narration: "From clicked save button, traverse to closest tfoot row",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "tfoot tr" }
}], _t = (e, t, n) => {
	let r = Xe(t, gt);
	if (!r || !n.container.contains(r)) return;
	let i = y?.footer?.getFooterData ? y.footer.getFooterData(r, n.columns) : {};
	i && Object.keys(i).length !== 0 || r.querySelectorAll("input, select").forEach((e) => {
		let t = e.id || e.name;
		t && (i[t] = e.value);
	}), y?.footer?.clearRowInputs ? y.footer.clearRowInputs(r) : r.querySelectorAll("input").forEach((e) => e.value = ""), n.dataset.push(i), n.filteredData.push(i), typeof n.renderTable == "function" && n.renderTable(n.filteredData), typeof n.onSave == "function" && n.onSave(i, n.dataset);
}, vt = /* @__PURE__ */ t({
	onFooterSave: () => _t,
	onRowAction: () => ht,
	onRowClick: () => pt,
	onSearch: () => dt
}), yt = (e, t) => {
	e.addEventListener("input", (n) => {
		for (let r of je) {
			if (r.event !== "input") continue;
			let i = n.target.closest(r.selector);
			if (i && e.contains(i)) {
				let e = vt[r.action];
				typeof e == "function" && e(n, i, t);
				return;
			}
		}
	}), e.addEventListener("click", (n) => {
		for (let r of je) {
			if (r.event !== "click") continue;
			let i = n.target.closest(r.selector);
			if (i && e.contains(i)) {
				let e = vt[r.action];
				typeof e == "function" && e(n, i, t);
				return;
			}
		}
	});
}, bt = {
	name: "json-renderers-build-table-events",
	version: "v1"
}, b = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.build ??= {}, globalThis.ks.jsonRenderers.build.tableEvents = {
		meta: bt,
		...e
	});
}, xt = (e = {}) => {
	let t = typeof e.container == "string" ? document.getElementById(e.container) : e.container;
	if (!t) return e.showLog && console.warn("[json-renderers-build-table-events] Container not found:", e.container), null;
	let n = Ae({
		...e,
		container: t
	});
	return yt(t, n), { getState: () => ({ ...n }) };
};
b({ hookTableEvents: xt });
// src/v57/registerGlobal/meta.js
var St = {
	name: "json-renderers-build-table",
	version: "1.57.0"
}, Ct = ({ render: e, hookEvents: t }) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.build ??= {}, globalThis.ks.jsonRenderers.build.table = {
		meta: St,
		render: e,
		hookEvents: t
	});
}, wt = {
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
}, Tt = {
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
}, x = {
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
}, Et = {
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
}, Dt = {
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
}, Ot = {
	name: "spec-repo",
	version: "1.17.1"
};
// ../spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: Ot,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: Tt,
	tags: x,
	tagsSchema: Et,
	instructions: Dt,
	definitions: wt
});
var kt = {
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
}, At = {
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
}, jt = {
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
}, Mt = {
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
}, Nt = {
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
}, Pt = {
	name: "spec-repo",
	version: "1.17.1"
};
// ../json-renderers-run-instructions-steps/node_modules/spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: Pt,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: At,
	tags: jt,
	tagsSchema: Mt,
	instructions: Nt,
	definitions: kt
});
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-primitive/src/v10/forAttributes/index.js
var Ft = (e) => typeof e == "object" && !!e && !Array.isArray(e), It = (e, t) => {
	if (!Ft(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Ut(t, i);
	return n;
}, Lt = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Ut(t, e));
}, Rt = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, zt = (e, t) => Rt(e, t), Bt = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Vt = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, Ht = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Vt,
		applyTemplate: e
	});
}, Ut = (e, t, n) => {
	let r = e, i = t;
	Bt(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Rt(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = zt(a?.textContent, r)), "attributes" in a && (a.attributes = It(a?.attributes, r)), "children" in a && (a.children = Lt(a?.children, r))), a);
};
Ht(Ut);
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var Wt = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, Gt = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, Kt = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: Gt,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, qt = (e, t) => {
	let n = e, r = t;
	return Wt(n, r), n.map((e) => Ut(e, r));
};
Kt((e, t) => {
	let n = e;
	return Wt(n, t), n.map((e) => Ut(e, e[t]));
}, qt);
// ../json-transformer-funcs-two-dimensions/node_modules/json-transformer-funcs-primitive/src/v10/forAttributes/index.js
var Jt = (e) => typeof e == "object" && !!e && !Array.isArray(e), Yt = (e, t) => {
	if (!Jt(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = nn(t, i);
	return n;
}, Xt = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => nn(t, e));
}, Zt = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Qt = (e, t) => Zt(e, t), $t = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, en = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, tn = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: en,
		applyTemplate: e
	});
}, nn = (e, t, n) => {
	let r = e, i = t;
	$t(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Zt(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Qt(a?.textContent, r)), "attributes" in a && (a.attributes = Yt(a?.attributes, r)), "children" in a && (a.children = Xt(a?.children, r))), a);
};
tn(nn);
// ../json-transformer-funcs-one-dimension/node_modules/json-transformer-funcs-primitive/src/v9/forAttributes/index.js
var rn = (e) => typeof e == "object" && !!e && !Array.isArray(e), an = (e, t) => {
	if (!rn(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = fn(t, i);
	return n;
}, on = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => fn(t, e));
}, sn = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, cn = (e, t) => sn(e, t), ln = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, un = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, dn = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: un,
		applyTemplate: e
	});
}, fn = (e, t, n) => {
	let r = e, i = t;
	ln(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? sn(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = cn(a?.textContent, r)), "attributes" in a && (a.attributes = an(a?.attributes, r)), "children" in a && (a.children = on(a?.children, r))), a);
};
dn(fn);
// ../json-transformer-funcs-one-dimension/src/v9/guard/index.js
var pn = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, mn = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, hn = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: mn,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, gn = (e, t) => {
	let n = e, r = t;
	return pn(n, r), n.map((e) => fn(e, r));
};
hn((e, t) => {
	let n = e;
	return pn(n, t), n.map((e) => fn(e, e[t]));
}, gn);
// ../json-transformer-funcs-two-dimensions/src/v9/index.js
var _n = ({ outer: e = [], outerSpec: t, getInner: n, innerSpec: r } = {}) => e.map((e) => {
	let i = nn(e, t), a = n ? n(e) : [];
	return i.children = a.length > 0 ? gn(a, r) : [], i;
}), vn = ({ columns: e = [], data: t = [], columnSpec: n, rowSpec: r } = {}) => _n({
	outer: Array.isArray(t) ? t : t?.data ?? t?.rows ?? [],
	outerSpec: r,
	innerSpec: n,
	getInner: (t) => e.map((e) => ({
		...e,
		rowValue: t[e.columnName]
	}))
}), yn = ({ columns: e = [], data: t = [], rows: n, columnSpec: r, rowSpec: i } = {}) => {
	let a = n ?? (Array.isArray(t) ? t : t?.data ?? t?.rows ?? []);
	return _n({
		outer: e,
		outerSpec: r,
		innerSpec: i,
		getInner: (e) => Array.isArray(e.options) && e.options.length > 0 ? e.options.map((e) => typeof e == "object" ? e : { rowValue: e }) : a.map((t) => ({
			...t,
			rowValue: t[e.columnName] ?? t.value ?? t
		}))
	});
}, bn = (e) => Array.isArray(e) ? e : [e], xn = (e, t, n) => {
	e[t] = n;
}, Sn = {
	set: xn,
	push: (e, t, n) => {
		e[t].push(...bn(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...bn(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(bn(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(bn(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, Cn = Object.defineProperty, wn = Object.getOwnPropertySymbols, Tn = Object.prototype.hasOwnProperty, En = Object.prototype.propertyIsEnumerable, Dn = Math.pow, On = (e, t, n) => t in e ? Cn(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, kn = (e, t) => {
	for (var n in t ||= {}) Tn.call(t, n) && On(e, n, t[n]);
	if (wn) for (var n of wn(t)) En.call(t, n) && On(e, n, t[n]);
	return e;
}, An = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, jn = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, S = () => void 0, Mn = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = w(e);
		return r === w(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = Ln(e), a = Ln(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, Nn = (e, t, n = S) => {
	let r = [];
	if (!Mn(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!Mn(Pn(e.x, t), Pn(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !C(o, i) || !C(a, i)) return !1;
			let s = a[i];
			if (!C(o, i) || !Mn(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, C = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Pn = (e, t) => C(e, t) ? e[t] : void 0, Fn = 16383, In = 1e3, Ln = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > In) throw new jn(`Member name too long (maximum ${In} characters)`);
	return t;
}, w = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, Rn = (e) => e instanceof RangeError && /call stack/i.test(e.message), T = (e) => Array.isArray(e), zn = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), Bn = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, Vn = (e) => typeof e == "number", E = (e) => typeof e == "string", Hn = (e) => e === void 0, Un = (e) => e !== void 0;
function Wn(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function Gn(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function Kn(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var qn = class extends SyntaxError {
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
function Jn(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: qr }, a = qr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, ie = /^[*\/]/, ae = /^[a-zA-Z_]/, oe = /^[\x80-\uFFFF_]/, se = /^[a-zA-Z0-9_]/, ce = /^[0-9@$\-]/, le = /^[^\/\\]/, ue = /^[gimsuy]/, de = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, fe = /^[\uD800-\uDBFF]/, pe = /^[\uDC00-\uDFFF]/, v = /^[0-9]/, me = /^[1-9]/, he = /^[eE]/, ge = /^["\\]/, _e = /^['\\]/, ve = /^[ -\uD7FF\uE000-\uFFFF]/, ye = /^[dD]/, be = /^[89abAB]/, xe = /^[c-fC-F]/, Se = /^[0-9a-fA-F]/, Ce = /^[ \t\n\r]/, we = R([",", "]"], !1, !1, !1), Te = L("length", !1), Ee = L("count", !1), De = L("match", !1), Oe = L("search", !1), ke = L("value", !1), Ae = R(["+", "-"], !1, !1, !1), je = R(["*", "/"], !1, !1, !1), Me = Hr("string"), Ne = R([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Pe = R([["", "￿"], "_"], !1, !1, !1), Fe = R([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Ie = L("-", !1), Le = R([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Re = L("$", !1), ze = L("@", !1), Be = L("..", !1), Ve = L(".", !1), He = L("*", !1), Ue = L("&&", !1), We = L("||", !1), Ge = L("!", !1), Ke = L("==", !1), qe = L("!=", !1), Je = L(">=", !1), Ye = L(">", !1), Xe = L("<=", !1), Ze = L("<", !1), Qe = L("=~", !1), $e = L("in", !1), et = L("nin", !1), tt = L("subsetof", !1), nt = L("anyof", !1), rt = L("noneof", !1), it = L("sizeof", !1), at = L("size", !1), ot = L("empty", !1), st = L("true", !1), ct = L("false", !1), y = L("null", !1), lt = L("{", !1), ut = L("}", !1), dt = L("[", !1), ft = L("]", !1), pt = L(":", !1), mt = L(",", !1), ht = L("(", !1), gt = L(")", !1), _t = L("?", !1), vt = Hr("regex"), yt = L("/", !1), bt = R(["/", "\\"], !0, !1, !1), b = L("\\", !1), xt = Vr(), St = R([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), Ct = R([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), wt = R([["\ud800", "\udbff"]], !1, !1, !1), Tt = R([["\udc00", "\udfff"]], !1, !1, !1), x = R([["0", "9"]], !1, !1, !1), Et = Hr("number"), Dt = L("0", !1), Ot = R([["1", "9"]], !1, !1, !1), kt = Hr("integer"), At = R(["e", "E"], !1, !1, !1), jt = L("\"", !1), Mt = L("'", !1), Nt = R(["\"", "\\"], !1, !1, !1), Pt = R(["'", "\\"], !1, !1, !1), Ft = R([[" ", "퟿"], ["", "￿"]], !1, !1, !1), It = L("b", !1), Lt = L("f", !1), Rt = L("n", !1), zt = L("r", !1), Bt = L("t", !1), Vt = L("u", !1), Ht = R(["d", "D"], !1, !1, !1), Ut = R([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Wt = L("\\u", !1), Gt = R([["c", "f"], ["C", "F"]], !1, !1, !1), Kt = R([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), qt = R([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function Jt(e) {
		return {
			type: "root",
			next: Wn(e)
		};
	}
	function Yt(e) {
		return e.map((e) => e[1]);
	}
	function Xt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Zt(e) {
		return e;
	}
	function Qt(e) {
		return {
			type: "dotdot",
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
	function tn() {
		return { type: "wildcard" };
	}
	function nn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function rn(e) {
		return e;
	}
	function an(e) {
		return e;
	}
	function on(e, t) {
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
	function sn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function cn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function ln(e, t) {
		return Kn(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function un(e, t) {
		return Kn(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function dn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function fn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function pn(e, t) {
		return t !== null || Gn(e);
	}
	function mn(e, t) {
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
	function hn(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function gn(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function _n() {
		return { operator: "empty" };
	}
	function vn() {
		return "eq";
	}
	function yn() {
		return "ne";
	}
	function bn() {
		return "le";
	}
	function xn() {
		return "lt";
	}
	function Sn() {
		return "ge";
	}
	function Cn() {
		return "gt";
	}
	function wn() {
		return "in";
	}
	function Tn() {
		return "nin";
	}
	function En() {
		return "subsetof";
	}
	function Dn() {
		return "anyof";
	}
	function On() {
		return "noneof";
	}
	function kn() {
		return "sizeof";
	}
	function An() {
		return "size";
	}
	function jn(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function S() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Mn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Nn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function C(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function Pn() {
		return "length";
	}
	function Fn() {
		return "count";
	}
	function In() {
		return "match";
	}
	function Ln() {
		return "search";
	}
	function w() {
		return "value";
	}
	function Rn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function T(e, t) {
		return t.length === 0 ? e : Kn(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function zn(e, t) {
		return t.length === 0 ? e : Kn(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function Bn(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function Vn(e) {
		return {
			type: "root",
			next: Wn(e)
		};
	}
	function E(e) {
		return {
			type: "current",
			next: Wn(e)
		};
	}
	function Hn(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Un() {
		return { type: "wildcard" };
	}
	function Jn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function Yn(e) {
		return {
			type: "stringLiteral",
			value: va(e)
		};
	}
	function Xn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Zn(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Qn(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function $n(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function er() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function tr() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function nr() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function rr(e) {
		return e;
	}
	function ir(e) {
		for (let [t] of e || []) va(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function ar(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function or(e, t) {
		return [e, t.value];
	}
	function sr(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function cr(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function lr(e) {
		return va(e);
	}
	function ur(e) {
		return va(e);
	}
	function dr() {
		return "true";
	}
	function fr() {
		return "false";
	}
	function pr() {
		return "null";
	}
	function mr(e) {
		return va(e);
	}
	function hr() {
		return "true";
	}
	function gr() {
		return "false";
	}
	function _r() {
		return "null";
	}
	function vr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function D(e) {
		return e.join("");
	}
	function yr(e, t) {
		let n = parseFloat(I());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && zr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function br() {
		let e = parseInt(I(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && zr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function xr(e) {
		return e.join("");
	}
	function Sr(e) {
		return e.join("");
	}
	function Cr(e) {
		return e;
	}
	function wr() {
		return "\"";
	}
	function Tr(e) {
		return e;
	}
	function Er(e) {
		return e;
	}
	function Dr() {
		return "'";
	}
	function Or(e) {
		return e;
	}
	function kr() {
		return "\\";
	}
	function Ar() {
		return "/";
	}
	function jr() {
		return "\b";
	}
	function Mr() {
		return "\f";
	}
	function Nr() {
		return "\n";
	}
	function Pr() {
		return "\r";
	}
	function O() {
		return "	";
	}
	function k(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Fr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function A(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let j = t.peg$currPos | 0, M = j, Ir = [{
		line: 1,
		column: 1
	}], N = j, Lr = t.peg$maxFailExpected || [], P = t.peg$silentFails | 0, Rr = /* @__PURE__ */ new Map(), F;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function I() {
		return e.substring(M, j);
	}
	function zr(e, t) {
		throw t = t === void 0 ? Wr(M, j) : t, Gr(e, t);
	}
	function Br(t = j) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function L(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function R(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function Vr() {
		return { type: "any" };
	}
	function z() {
		return { type: "end" };
	}
	function Hr(e) {
		return {
			type: "other",
			description: e
		};
	}
	function Ur(t) {
		let n = Ir[t], r;
		if (n) return n;
		if (t >= Ir.length) r = Ir.length - 1;
		else for (r = t; !Ir[--r];);
		for (n = Ir[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return Ir[t] = n, n;
	}
	function Wr(e, t, n) {
		let i = Ur(e), a = Ur(t), o = {
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
	function B(e) {
		j < N || (j > N && (N = j, Lr = []), Lr.push(e));
	}
	function Gr(e, t) {
		return new qn(e, null, null, t);
	}
	function Kr(e, t, n) {
		return new qn(qn.buildMessage(e, t), e, t, n);
	}
	function qr() {
		let e, t, r, i;
		return e = j, t = ji(), t === n ? (j = e, e = n) : (r = Jr(), i = _a(), i === n ? (j = e, e = n) : (M = e, e = Jt(r))), e;
	}
	function Jr() {
		let e, t, r, i, a;
		for (e = j, t = [], r = j, i = Q(), a = Yr(), a === n ? (j = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = j, i = Q(), a = Yr(), a === n ? (j = r, r = n) : (i = [i, a], r = i);
		return M = e, t = Yt(t), e = t, e;
	}
	function Yr() {
		let e;
		return e = Zr(), e === n && (e = Xr()), e;
	}
	function Xr() {
		let e, t, r;
		return e = j, t = Pi(), t === n ? (j = e, e = n) : (r = Qr(), r === n ? (j = e, e = n) : (M = e, e = Xt(r))), e === n && (e = j, t = ei(), t !== n && (M = e, t = Zt(t)), e = t), e;
	}
	function Zr() {
		let e, t, r;
		return e = j, t = Ni(), t === n ? (j = e, e = n) : (r = $r(), r === n ? (j = e, e = n) : (M = e, e = Qt(r))), e;
	}
	function Qr() {
		let e, t;
		return e = j, t = Fi(), t !== n && (M = e, t = $t()), e = t, e === n && (e = j, t = Ai(), t !== n && (M = e, t = en(t)), e = t), e;
	}
	function $r() {
		let e, t;
		return e = j, t = Fi(), t !== n && (M = e, t = tn()), e = t, e === n && (e = j, t = Ai(), t !== n && (M = e, t = nn(t)), e = t, e === n && (e = j, t = ei(), t !== n && (M = e, t = rn(t)), e = t)), e;
	}
	function ei() {
		let e, t, r, i;
		return e = j, t = Qi(), t === n ? (j = e, e = n) : (Q(), r = ti(), r === n ? (j = e, e = n) : (Q(), i = $i(), i === n ? (j = e, e = n) : (M = e, e = an(r)))), e;
	}
	function ti() {
		let e, t, r, i, a, o, s, c;
		if (e = j, t = yi(), t !== n) {
			for (r = [], i = j, a = Q(), o = J(), o === n ? (j = i, i = n) : (s = Q(), c = yi(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = j, a = Q(), o = J(), o === n ? (j = i, i = n) : (s = Q(), c = yi(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			M = e, e = on(t, r);
		} else j = e, e = n;
		return e;
	}
	function ni() {
		let t, r, i, a, o, s, c, l, u;
		return t = j, r = na(), r === n ? (j = t, t = n) : (Q(), i = ta(), i === n ? (j = t, t = n) : (Q(), a = ri(), a === n ? (j = t, t = n) : (Q(), o = Y(), o === n ? (j = t, t = n) : (s = j, P++, c = j, l = Q(), u = e.charAt(j), re.test(u) ? j++ : (u = n, P === 0 && B(we)), u === n ? (j = c, c = n) : (l = [l, u], c = l), P--, c === n ? s = n : (j = s, s = void 0), s === n ? (j = t, t = n) : (M = t, t = sn(a)))))), t === n && (t = j, r = na(), r === n ? (j = t, t = n) : (Q(), i = ri(), i === n ? (j = t, t = n) : (M = t, t = cn(i)))), t;
	}
	function ri() {
		let e, t, r, i, a, o, s, c, l = j * 91 + 10, u = Rr.get(l);
		if (u) return j = u.nextPos, u.result;
		if (e = j, t = ii(), t !== n) {
			for (r = [], i = j, a = Q(), o = Li(), o === n ? (j = i, i = n) : (s = Q(), c = ii(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = j, a = Q(), o = Li(), o === n ? (j = i, i = n) : (s = Q(), c = ii(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			M = e, e = ln(t, r);
		} else j = e, e = n;
		return Rr.set(l, {
			nextPos: j,
			result: e
		}), e;
	}
	function ii() {
		let e, t, r, i, a, o, s, c;
		if (e = j, t = ai(), t !== n) {
			for (r = [], i = j, a = Q(), o = Ii(), o === n ? (j = i, i = n) : (s = Q(), c = ai(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = j, a = Q(), o = Ii(), o === n ? (j = i, i = n) : (s = Q(), c = ai(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			M = e, e = un(t, r);
		} else j = e, e = n;
		return e;
	}
	function ai() {
		let e, t, r, i, a;
		return e = j, t = Ri(), t === n ? (j = e, e = n) : (Q(), r = ta(), r === n ? (j = e, e = n) : (Q(), i = ri(), i === n ? (j = e, e = n) : (Q(), a = Y(), a === n ? (j = e, e = n) : (M = e, e = dn(i))))), e === n && (e = j, t = Ri(), t === n ? (j = e, e = n) : (Q(), r = li(), r === n ? (j = e, e = n) : (M = e, e = fn(r))), e === n && (e = oi())), e;
	}
	function oi() {
		let e, t, r, i, a;
		return e = j, t = mi(), t === n ? (j = e, e = n) : (r = j, i = Q(), a = si(), a === n ? (j = r, r = n) : (i = [i, a], r = i), r === n && (r = null), M = j, i = pn(t, r), i = i ? void 0 : n, i === n ? (j = e, e = n) : (M = e, e = mn(t, r))), e === n && (e = li()), e;
	}
	function si() {
		let e, t, r;
		return e = j, t = ci(), t === n ? (j = e, e = n) : (Q(), r = mi(), r === n ? (j = e, e = n) : (M = e, e = hn(t, r))), e === n && (e = j, t = Ui(), t === n ? (j = e, e = n) : (Q(), r = bi(), r === n ? (j = e, e = n) : (M = e, e = gn(r))), e === n && (e = j, t = Ji(), t !== n && (M = e, t = _n()), e = t)), e;
	}
	function ci() {
		let e, t;
		return e = j, t = zi(), t !== n && (M = e, t = vn()), e = t, e === n && (e = j, t = V(), t !== n && (M = e, t = yn()), e = t, e === n && (e = j, t = H(), t !== n && (M = e, t = bn()), e = t, e === n && (e = j, t = Hi(), t !== n && (M = e, t = xn()), e = t, e === n && (e = j, t = Bi(), t !== n && (M = e, t = Sn()), e = t, e === n && (e = j, t = Vi(), t !== n && (M = e, t = Cn()), e = t, e === n && (e = j, t = Wi(), t !== n && (M = e, t = wn()), e = t, e === n && (e = j, t = Gi(), t !== n && (M = e, t = Tn()), e = t, e === n && (e = j, t = U(), t !== n && (M = e, t = En()), e = t, e === n && (e = j, t = Ki(), t !== n && (M = e, t = Dn()), e = t, e === n && (e = j, t = W(), t !== n && (M = e, t = On()), e = t, e === n && (e = j, t = qi(), t !== n && (M = e, t = kn()), e = t, e === n && (e = j, t = G(), t !== n && (M = e, t = An()), e = t)))))))))))), e;
	}
	function li() {
		let e, t, r, i;
		return e = j, t = ta(), t === n ? (j = e, e = n) : (Q(), r = ri(), r === n ? (j = e, e = n) : (Q(), i = Y(), i === n ? (j = e, e = n) : (M = e, e = jn(r)))), e === n && (e = ui(), e === n && (e = _i(), e === n && (e = j, t = K(), t !== n && (M = e, t = S()), e = t, e === n && (e = j, t = Yi(), t !== n && (M = e, t = Mn()), e = t, e === n && (e = j, t = q(), t !== n && (M = e, t = Nn()), e = t))))), e;
	}
	function ui() {
		let e, t, r, i, a;
		return e = j, t = di(), t === n ? (j = e, e = n) : (r = ta(), r === n ? (j = e, e = n) : (Q(), i = fi(), i === n && (i = null), Q(), a = Y(), a === n ? (j = e, e = n) : (M = e, e = C(t, i)))), e;
	}
	function di() {
		let t, r;
		return t = j, e.substr(j, 6) === o ? (r = o, j += 6) : (r = n, P === 0 && B(Te)), r !== n && (M = t, r = Pn()), t = r, t === n && (t = j, e.substr(j, 5) === s ? (r = s, j += 5) : (r = n, P === 0 && B(Ee)), r !== n && (M = t, r = Fn()), t = r, t === n && (t = j, e.substr(j, 5) === c ? (r = c, j += 5) : (r = n, P === 0 && B(De)), r !== n && (M = t, r = In()), t = r, t === n && (t = j, e.substr(j, 6) === l ? (r = l, j += 6) : (r = n, P === 0 && B(Oe)), r !== n && (M = t, r = Ln()), t = r, t === n && (t = j, e.substr(j, 5) === u ? (r = u, j += 5) : (r = n, P === 0 && B(ke)), r !== n && (M = t, r = w()), t = r)))), t;
	}
	function fi() {
		let e, t, r, i, a, o, s, c;
		if (e = j, t = pi(), t !== n) {
			for (r = [], i = j, a = Q(), o = J(), o === n ? (j = i, i = n) : (s = Q(), c = pi(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = j, a = Q(), o = J(), o === n ? (j = i, i = n) : (s = Q(), c = pi(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			M = e, e = Rn(t, r);
		} else j = e, e = n;
		return e;
	}
	function pi() {
		let e;
		return e = mi(), e === n && (e = Si()), e;
	}
	function mi() {
		let t, r, i, a, o, s, c, l, u = j * 91 + 21, d = Rr.get(u);
		if (d) return j = d.nextPos, d.result;
		if (t = j, r = hi(), r !== n) {
			for (i = [], a = j, o = Q(), s = e.charAt(j), _.test(s) ? j++ : (s = n, P === 0 && B(Ae)), s === n ? (j = a, a = n) : (c = Q(), l = hi(), l === n ? (j = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = j, o = Q(), s = e.charAt(j), _.test(s) ? j++ : (s = n, P === 0 && B(Ae)), s === n ? (j = a, a = n) : (c = Q(), l = hi(), l === n ? (j = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			M = t, t = T(r, i);
		} else j = t, t = n;
		return Rr.set(u, {
			nextPos: j,
			result: t
		}), t;
	}
	function hi() {
		let t, r, i, a, o, s, c, l;
		if (t = j, r = gi(), r !== n) {
			for (i = [], a = j, o = Q(), s = e.charAt(j), ie.test(s) ? j++ : (s = n, P === 0 && B(je)), s === n ? (j = a, a = n) : (c = Q(), l = gi(), l === n ? (j = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = j, o = Q(), s = e.charAt(j), ie.test(s) ? j++ : (s = n, P === 0 && B(je)), s === n ? (j = a, a = n) : (c = Q(), l = gi(), l === n ? (j = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			M = t, t = zn(r, i);
		} else j = t, t = n;
		return t;
	}
	function gi() {
		let e, t, r, i;
		return e = j, t = ta(), t === n ? (j = e, e = n) : (Q(), r = mi(), r === n ? (j = e, e = n) : (Q(), i = Y(), i === n ? (j = e, e = n) : (M = e, e = Bn(r)))), e === n && (e = ui(), e === n && (e = xi(), e === n && (e = _i()))), e;
	}
	function _i() {
		let e, t, r;
		return e = j, t = ji(), t === n ? (j = e, e = n) : (r = Jr(), r === n ? (j = e, e = n) : (M = e, e = Vn(r))), e === n && (e = j, t = Mi(), t === n ? (j = e, e = n) : (r = Jr(), r === n ? (j = e, e = n) : (M = e, e = E(r)))), e;
	}
	function vi() {
		let e, t, r, i, a, o, s, c, l;
		return e = j, t = j, r = ua(), r === n ? (j = t, t = n) : (i = Q(), r = [r, i], t = r), t === n && (t = null), r = ea(), r === n ? (j = e, e = n) : (i = Q(), a = j, o = ua(), o === n ? (j = a, a = n) : (s = Q(), o = [o, s], a = o), a === n && (a = null), o = j, s = ea(), s === n ? (j = o, o = n) : (c = Q(), l = ua(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), M = e, e = Hn(t, a, o)), e;
	}
	function yi() {
		let e, t;
		return e = ni(), e === n && (e = vi(), e === n && (e = j, t = Fi(), t !== n && (M = e, t = Un()), e = t, e === n && (e = j, t = ua(), t !== n && (M = e, t = Jn(t)), e = t, e === n && (e = j, t = fa(), t !== n && (M = e, t = Yn(t)), e = t, e === n && (e = j, t = Oi(), t !== n && (M = e, t = Xn(t)), e = t))))), e;
	}
	function bi() {
		let e, t, r;
		return e = j, t = ra(), t === n ? (j = e, e = n) : (r = ia(), M = e, e = Zn(t, r)), e;
	}
	function xi() {
		let e, t;
		return e = j, t = Si(), t !== n && (M = e, t = Qn(t)), e = t, e === n && (e = j, t = ca(), t !== n && (M = e, t = $n(t)), e = t, e === n && (e = Ci(), e === n && (e = Ei(), e === n && (e = j, t = K(), t !== n && (M = e, t = er()), e = t, e === n && (e = j, t = Yi(), t !== n && (M = e, t = tr()), e = t, e === n && (e = j, t = q(), t !== n && (M = e, t = nr()), e = t)))))), e;
	}
	function Si() {
		let e, t;
		return P++, e = j, t = fa(), t !== n && (M = e, t = rr(t)), e = t, P--, e === n && (t = n, P === 0 && B(Me)), e;
	}
	function Ci() {
		let e, t, r, i;
		return e = j, t = Xi(), t === n ? (j = e, e = n) : (Q(), r = wi(), r === n && (r = null), Q(), i = Zi(), i === n ? (j = e, e = n) : (M = e, e = ir(r))), e;
	}
	function wi() {
		let e, t, r, i, a, o, s, c;
		if (e = j, t = Ti(), t !== n) {
			for (r = [], i = j, a = Q(), o = J(), o === n ? (j = i, i = n) : (s = Q(), c = Ti(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = j, a = Q(), o = J(), o === n ? (j = i, i = n) : (s = Q(), c = Ti(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			M = e, e = ar(t, r);
		} else j = e, e = n;
		return e;
	}
	function Ti() {
		let e, t, r, i;
		return e = j, t = fa(), t === n ? (j = e, e = n) : (Q(), r = ea(), r === n ? (j = e, e = n) : (Q(), i = xi(), i === n ? (j = e, e = n) : (M = e, e = or(t, i)))), e;
	}
	function Ei() {
		let e, t, r, i;
		return e = j, t = Qi(), t === n ? (j = e, e = n) : (Q(), r = Di(), r === n && (r = null), Q(), i = $i(), i === n ? (j = e, e = n) : (M = e, e = sr(r))), e;
	}
	function Di() {
		let e, t, r, i, a, o, s, c;
		if (e = j, t = xi(), t !== n) {
			for (r = [], i = j, a = Q(), o = J(), o === n ? (j = i, i = n) : (s = Q(), c = xi(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = j, a = Q(), o = J(), o === n ? (j = i, i = n) : (s = Q(), c = xi(), c === n ? (j = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			M = e, e = cr(t, r);
		} else j = e, e = n;
		return e;
	}
	function Oi() {
		let t, r, i, a, o, s;
		if (t = j, r = j, i = j, a = e.charAt(j), ae.test(a) ? j++ : (a = n, P === 0 && B(Ne)), a !== n) {
			for (o = [], s = ki(); s !== n;) o.push(s), s = ki();
			a = [a, o], i = a;
		} else j = i, i = n;
		if (r = i === n ? i : e.substring(r, j), r !== n && (M = t, r = lr(r)), t = r, t === n) {
			if (t = j, r = j, i = [], a = e.charAt(j), oe.test(a) ? j++ : (a = n, P === 0 && B(Pe)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(j), oe.test(a) ? j++ : (a = n, P === 0 && B(Pe));
			else i = n;
			r = i === n ? i : e.substring(r, j), r !== n && (M = t, r = ur(r)), t = r, t === n && (t = j, r = K(), r !== n && (M = t, r = dr()), t = r, t === n && (t = j, r = Yi(), r !== n && (M = t, r = fr()), t = r, t === n && (t = j, r = q(), r !== n && (M = t, r = pr()), t = r)));
		}
		return t;
	}
	function ki() {
		let t, r, i, a;
		return t = e.charAt(j), se.test(t) ? j++ : (t = n, P === 0 && B(Fe)), t === n && (t = j, e.charCodeAt(j) === 45 ? (r = "-", j++) : (r = n, P === 0 && B(Ie)), r === n ? (j = t, t = n) : (i = j, P++, a = e.charAt(j), ce.test(a) ? j++ : (a = n, P === 0 && B(Le)), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r))), t;
	}
	function Ai() {
		let e, t;
		return e = j, t = aa(), t !== n && (M = e, t = mr(t)), e = t, e === n && (e = j, t = K(), t !== n && (M = e, t = hr()), e = t, e === n && (e = j, t = Yi(), t !== n && (M = e, t = gr()), e = t, e === n && (e = j, t = q(), t !== n && (M = e, t = _r()), e = t))), e;
	}
	function ji() {
		let t;
		return e.charCodeAt(j) === 36 ? (t = "$", j++) : (t = n, P === 0 && B(Re)), t;
	}
	function Mi() {
		let t;
		return e.charCodeAt(j) === 64 ? (t = "@", j++) : (t = n, P === 0 && B(ze)), t;
	}
	function Ni() {
		let t;
		return e.substr(j, 2) === ".." ? (t = "..", j += 2) : (t = n, P === 0 && B(Be)), t;
	}
	function Pi() {
		let t;
		return e.charCodeAt(j) === 46 ? (t = ".", j++) : (t = n, P === 0 && B(Ve)), t;
	}
	function Fi() {
		let t;
		return e.charCodeAt(j) === 42 ? (t = "*", j++) : (t = n, P === 0 && B(He)), t;
	}
	function Ii() {
		let t;
		return e.substr(j, 2) === "&&" ? (t = "&&", j += 2) : (t = n, P === 0 && B(Ue)), t;
	}
	function Li() {
		let t;
		return e.substr(j, 2) === "||" ? (t = "||", j += 2) : (t = n, P === 0 && B(We)), t;
	}
	function Ri() {
		let t;
		return e.charCodeAt(j) === 33 ? (t = "!", j++) : (t = n, P === 0 && B(Ge)), t;
	}
	function zi() {
		let t;
		return e.substr(j, 2) === "==" ? (t = "==", j += 2) : (t = n, P === 0 && B(Ke)), t;
	}
	function V() {
		let t;
		return e.substr(j, 2) === "!=" ? (t = "!=", j += 2) : (t = n, P === 0 && B(qe)), t;
	}
	function Bi() {
		let t;
		return e.substr(j, 2) === ">=" ? (t = ">=", j += 2) : (t = n, P === 0 && B(Je)), t;
	}
	function Vi() {
		let t;
		return e.charCodeAt(j) === 62 ? (t = ">", j++) : (t = n, P === 0 && B(Ye)), t;
	}
	function H() {
		let t;
		return e.substr(j, 2) === "<=" ? (t = "<=", j += 2) : (t = n, P === 0 && B(Xe)), t;
	}
	function Hi() {
		let t;
		return e.charCodeAt(j) === 60 ? (t = "<", j++) : (t = n, P === 0 && B(Ze)), t;
	}
	function Ui() {
		let t;
		return e.substr(j, 2) === "=~" ? (t = "=~", j += 2) : (t = n, P === 0 && B(Qe)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = j, e.substr(j, 2) === "in" ? (r = "in", j += 2) : (r = n, P === 0 && B($e)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = j, e.substr(j, 3) === "nin" ? (r = "nin", j += 3) : (r = n, P === 0 && B(et)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function U() {
		let t, r, i, a;
		return t = j, e.substr(j, 8) === d ? (r = d, j += 8) : (r = n, P === 0 && B(tt)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = j, e.substr(j, 5) === f ? (r = f, j += 5) : (r = n, P === 0 && B(nt)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function W() {
		let t, r, i, a;
		return t = j, e.substr(j, 6) === p ? (r = p, j += 6) : (r = n, P === 0 && B(rt)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = j, e.substr(j, 6) === m ? (r = m, j += 6) : (r = n, P === 0 && B(it)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function G() {
		let t, r, i, a;
		return t = j, e.substr(j, 4) === ee ? (r = ee, j += 4) : (r = n, P === 0 && B(at)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t, r, i, a;
		return t = j, e.substr(j, 5) === h ? (r = h, j += 5) : (r = n, P === 0 && B(ot)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function K() {
		let t, r, i, a;
		return t = j, e.substr(j, 4) === te ? (r = te, j += 4) : (r = n, P === 0 && B(st)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Yi() {
		let t, r, i, a;
		return t = j, e.substr(j, 5) === ne ? (r = ne, j += 5) : (r = n, P === 0 && B(ct)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function q() {
		let t, r, i, a;
		return t = j, e.substr(j, 4) === g ? (r = g, j += 4) : (r = n, P === 0 && B(y)), r === n ? (j = t, t = n) : (i = j, P++, a = Z(), P--, a === n ? i = void 0 : (j = i, i = n), i === n ? (j = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(j) === 123 ? (t = "{", j++) : (t = n, P === 0 && B(lt)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(j) === 125 ? (t = "}", j++) : (t = n, P === 0 && B(ut)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(j) === 91 ? (t = "[", j++) : (t = n, P === 0 && B(dt)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(j) === 93 ? (t = "]", j++) : (t = n, P === 0 && B(ft)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(j) === 58 ? (t = ":", j++) : (t = n, P === 0 && B(pt)), t;
	}
	function J() {
		let t;
		return e.charCodeAt(j) === 44 ? (t = ",", j++) : (t = n, P === 0 && B(mt)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(j) === 40 ? (t = "(", j++) : (t = n, P === 0 && B(ht)), t;
	}
	function Y() {
		let t;
		return e.charCodeAt(j) === 41 ? (t = ")", j++) : (t = n, P === 0 && B(gt)), t;
	}
	function na() {
		let t;
		return e.charCodeAt(j) === 63 ? (t = "?", j++) : (t = n, P === 0 && B(_t)), t;
	}
	function ra() {
		let t, r, i, a, o, s;
		if (P++, t = j, e.charCodeAt(j) === 47 ? (r = "/", j++) : (r = n, P === 0 && B(yt)), r !== n) {
			for (i = [], a = e.charAt(j), le.test(a) ? j++ : (a = n, P === 0 && B(bt)), a === n && (a = j, e.charCodeAt(j) === 92 ? (o = "\\", j++) : (o = n, P === 0 && B(b)), o === n ? (j = a, a = n) : (e.length > j ? (s = e.charAt(j), j++) : (s = n, P === 0 && B(xt)), s === n ? (j = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(j), le.test(a) ? j++ : (a = n, P === 0 && B(bt)), a === n && (a = j, e.charCodeAt(j) === 92 ? (o = "\\", j++) : (o = n, P === 0 && B(b)), o === n ? (j = a, a = n) : (e.length > j ? (s = e.charAt(j), j++) : (s = n, P === 0 && B(xt)), s === n ? (j = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(j) === 47 ? (a = "/", j++) : (a = n, P === 0 && B(yt)), a === n ? (j = t, t = n) : (M = t, t = vr(i));
		} else j = t, t = n;
		return P--, t === n && (r = n, P === 0 && B(vt)), t;
	}
	function ia() {
		let t, r, i;
		for (t = j, r = [], i = e.charAt(j), ue.test(i) ? j++ : (i = n, P === 0 && B(St)); i !== n;) r.push(i), i = e.charAt(j), ue.test(i) ? j++ : (i = n, P === 0 && B(St));
		return M = t, r = D(r), t = r, t;
	}
	function aa() {
		let t, r, i, a, o;
		if (t = j, r = j, i = oa(), i !== n) {
			for (a = [], o = sa(); o !== n;) a.push(o), o = sa();
			i = [i, a], r = i;
		} else j = r, r = n;
		return t = r === n ? r : e.substring(t, j), t;
	}
	function oa() {
		let t, r, i;
		return t = e.charAt(j), de.test(t) ? j++ : (t = n, P === 0 && B(Ct)), t === n && (t = j, r = e.charAt(j), fe.test(r) ? j++ : (r = n, P === 0 && B(wt)), r === n ? (j = t, t = n) : (i = e.charAt(j), pe.test(i) ? j++ : (i = n, P === 0 && B(Tt)), i === n ? (j = t, t = n) : (r = [r, i], t = r))), t;
	}
	function sa() {
		let t;
		return t = oa(), t === n && (t = e.charAt(j), v.test(t) ? j++ : (t = n, P === 0 && B(x))), t;
	}
	function ca() {
		let t, r, i, a, o, s, c;
		if (P++, t = j, e.charCodeAt(j) === 45 ? (r = "-", j++) : (r = n, P === 0 && B(Ie)), r === n && (r = null), i = la(), i !== n) {
			if (a = j, e.charCodeAt(j) === 46 ? (o = ".", j++) : (o = n, P === 0 && B(Ve)), o !== n) {
				if (s = [], c = e.charAt(j), v.test(c) ? j++ : (c = n, P === 0 && B(x)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(j), v.test(c) ? j++ : (c = n, P === 0 && B(x));
				else s = n;
				s === n ? (j = a, a = n) : (o = [o, s], a = o);
			} else j = a, a = n;
			a === n && (a = null), o = da(), o === n && (o = null), M = t, t = yr(a, o);
		} else j = t, t = n;
		return P--, t === n && (r = n, P === 0 && B(Et)), t;
	}
	function la() {
		let t, r, i, a;
		if (e.charCodeAt(j) === 48 ? (t = "0", j++) : (t = n, P === 0 && B(Dt)), t === n) {
			if (t = j, r = e.charAt(j), me.test(r) ? j++ : (r = n, P === 0 && B(Ot)), r !== n) {
				for (i = [], a = e.charAt(j), v.test(a) ? j++ : (a = n, P === 0 && B(x)); a !== n;) i.push(a), a = e.charAt(j), v.test(a) ? j++ : (a = n, P === 0 && B(x));
				r = [r, i], t = r;
			} else j = t, t = n;
		}
		return t;
	}
	function ua() {
		let t, r, i, a, o, s;
		if (P++, t = j, e.charCodeAt(j) === 48 ? (r = "0", j++) : (r = n, P === 0 && B(Dt)), r === n) {
			if (r = j, e.charCodeAt(j) === 45 ? (i = "-", j++) : (i = n, P === 0 && B(Ie)), i === n && (i = null), a = e.charAt(j), me.test(a) ? j++ : (a = n, P === 0 && B(Ot)), a !== n) {
				for (o = [], s = e.charAt(j), v.test(s) ? j++ : (s = n, P === 0 && B(x)); s !== n;) o.push(s), s = e.charAt(j), v.test(s) ? j++ : (s = n, P === 0 && B(x));
				i = [
					i,
					a,
					o
				], r = i;
			} else j = r, r = n;
		}
		return r !== n && (M = t, r = br()), t = r, P--, t === n && (r = n, P === 0 && B(kt)), t;
	}
	function da() {
		let t, r, i, a, o;
		if (t = j, r = e.charAt(j), he.test(r) ? j++ : (r = n, P === 0 && B(At)), r !== n) {
			if (i = e.charAt(j), _.test(i) ? j++ : (i = n, P === 0 && B(Ae)), i === n && (i = null), a = [], o = e.charAt(j), v.test(o) ? j++ : (o = n, P === 0 && B(x)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(j), v.test(o) ? j++ : (o = n, P === 0 && B(x));
			else a = n;
			a === n ? (j = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else j = t, t = n;
		return t;
	}
	function fa() {
		let t, r, i, a;
		if (P++, t = j, e.charCodeAt(j) === 34 ? (r = "\"", j++) : (r = n, P === 0 && B(jt)), r !== n) {
			for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
			e.charCodeAt(j) === 34 ? (a = "\"", j++) : (a = n, P === 0 && B(jt)), a === n ? (j = t, t = n) : (M = t, t = xr(i));
		} else j = t, t = n;
		if (t === n) {
			if (t = j, e.charCodeAt(j) === 39 ? (r = "'", j++) : (r = n, P === 0 && B(Mt)), r !== n) {
				for (i = [], a = ma(); a !== n;) i.push(a), a = ma();
				e.charCodeAt(j) === 39 ? (a = "'", j++) : (a = n, P === 0 && B(Mt)), a === n ? (j = t, t = n) : (M = t, t = Sr(i));
			} else j = t, t = n;
		}
		return P--, t === n && (r = n, P === 0 && B(Me)), t;
	}
	function pa() {
		let t, r, i;
		return t = j, r = j, P++, i = e.charAt(j), ge.test(i) ? j++ : (i = n, P === 0 && B(Nt)), P--, i === n ? r = void 0 : (j = r, r = n), r === n ? (j = t, t = n) : (i = ha(), i === n ? (j = t, t = n) : (M = t, t = Cr(i))), t === n && (t = j, e.charCodeAt(j) === 92 ? (r = "\\", j++) : (r = n, P === 0 && B(b)), r === n ? (j = t, t = n) : (e.charCodeAt(j) === 34 ? (i = "\"", j++) : (i = n, P === 0 && B(jt)), i === n ? (j = t, t = n) : (M = t, t = wr())), t === n && (t = j, e.charCodeAt(j) === 92 ? (r = "\\", j++) : (r = n, P === 0 && B(b)), r === n ? (j = t, t = n) : (i = ga(), i === n ? (j = t, t = n) : (M = t, t = Tr(i))))), t;
	}
	function ma() {
		let t, r, i;
		return t = j, r = j, P++, i = e.charAt(j), _e.test(i) ? j++ : (i = n, P === 0 && B(Pt)), P--, i === n ? r = void 0 : (j = r, r = n), r === n ? (j = t, t = n) : (i = ha(), i === n ? (j = t, t = n) : (M = t, t = Er(i))), t === n && (t = j, e.charCodeAt(j) === 92 ? (r = "\\", j++) : (r = n, P === 0 && B(b)), r === n ? (j = t, t = n) : (e.charCodeAt(j) === 39 ? (i = "'", j++) : (i = n, P === 0 && B(Mt)), i === n ? (j = t, t = n) : (M = t, t = Dr())), t === n && (t = j, e.charCodeAt(j) === 92 ? (r = "\\", j++) : (r = n, P === 0 && B(b)), r === n ? (j = t, t = n) : (i = ga(), i === n ? (j = t, t = n) : (M = t, t = Or(i))))), t;
	}
	function ha() {
		let t, r, i, a;
		return t = e.charAt(j), ve.test(t) ? j++ : (t = n, P === 0 && B(Ft)), t === n && (t = j, r = j, i = e.charAt(j), fe.test(i) ? j++ : (i = n, P === 0 && B(wt)), i === n ? (j = r, r = n) : (a = e.charAt(j), pe.test(a) ? j++ : (a = n, P === 0 && B(Tt)), a === n ? (j = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, j)), t;
	}
	function ga() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = j, e.charCodeAt(j) === 92 ? (r = "\\", j++) : (r = n, P === 0 && B(b)), r !== n && (M = t, r = kr()), t = r, t === n && (t = j, e.charCodeAt(j) === 47 ? (r = "/", j++) : (r = n, P === 0 && B(yt)), r !== n && (M = t, r = Ar()), t = r, t === n && (t = j, e.charCodeAt(j) === 98 ? (r = "b", j++) : (r = n, P === 0 && B(It)), r !== n && (M = t, r = jr()), t = r, t === n && (t = j, e.charCodeAt(j) === 102 ? (r = "f", j++) : (r = n, P === 0 && B(Lt)), r !== n && (M = t, r = Mr()), t = r, t === n && (t = j, e.charCodeAt(j) === 110 ? (r = "n", j++) : (r = n, P === 0 && B(Rt)), r !== n && (M = t, r = Nr()), t = r, t === n && (t = j, e.charCodeAt(j) === 114 ? (r = "r", j++) : (r = n, P === 0 && B(zt)), r !== n && (M = t, r = Pr()), t = r, t === n && (t = j, e.charCodeAt(j) === 116 ? (r = "t", j++) : (r = n, P === 0 && B(Bt)), r !== n && (M = t, r = O()), t = r, t === n && (t = j, e.charCodeAt(j) === 117 ? (r = "u", j++) : (r = n, P === 0 && B(Vt)), r === n ? (j = t, t = n) : (i = j, a = j, o = e.charAt(j), ye.test(o) ? j++ : (o = n, P === 0 && B(Ht)), o === n ? (j = a, a = n) : (s = e.charAt(j), be.test(s) ? j++ : (s = n, P === 0 && B(Ut)), s === n ? (j = a, a = n) : (c = X(), c === n ? (j = a, a = n) : (l = X(), l === n ? (j = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, j), i === n ? (j = t, t = n) : (e.substr(j, 2) === "\\u" ? (a = "\\u", j += 2) : (a = n, P === 0 && B(Wt)), a === n ? (j = t, t = n) : (o = j, s = j, c = e.charAt(j), ye.test(c) ? j++ : (c = n, P === 0 && B(Ht)), c === n ? (j = s, s = n) : (l = e.charAt(j), xe.test(l) ? j++ : (l = n, P === 0 && B(Gt)), l === n ? (j = s, s = n) : (u = X(), u === n ? (j = s, s = n) : (d = X(), d === n ? (j = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, j), o === n ? (j = t, t = n) : (M = t, t = k(i, o))))), t === n && (t = j, e.charCodeAt(j) === 117 ? (r = "u", j++) : (r = n, P === 0 && B(Vt)), r === n ? (j = t, t = n) : (i = j, a = j, o = X(), o === n ? (j = a, a = n) : (s = X(), s === n ? (j = a, a = n) : (c = X(), c === n ? (j = a, a = n) : (l = X(), l === n ? (j = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, j), i === n ? (j = t, t = n) : (M = j, a = Fr(i), a = a ? n : void 0, a === n ? (j = t, t = n) : (M = t, t = A(i)))))))))))), t;
	}
	function X() {
		let t;
		return t = e.charAt(j), Se.test(t) ? j++ : (t = n, P === 0 && B(Kt)), t;
	}
	function Z() {
		let t;
		return t = e.charAt(j), se.test(t) ? j++ : (t = n, P === 0 && B(Fe)), t;
	}
	function Q() {
		let t, r;
		for (P++, t = [], r = e.charAt(j), Ce.test(r) ? j++ : (r = n, P === 0 && B(qt)); r !== n;) t.push(r), r = e.charAt(j), Ce.test(r) ? j++ : (r = n, P === 0 && B(qt));
		return P--, t;
	}
	function _a() {
		let t, r;
		return t = j, P++, e.length > j ? (r = e.charAt(j), j++) : (r = n, P === 0 && B(xt)), P--, r === n ? t = void 0 : (j = t, t = n), t;
	}
	function va(e) {
		return e.length > 1e3 && zr("Member name too long (maximum 1000 characters)"), e;
	}
	F = a();
	let ya = F !== n && j === e.length;
	function $() {
		throw F !== n && j < e.length && B(z()), Kr(Lr, N < e.length ? Br(N) : null, N < e.length ? Wr(N, N + 1) : Wr(N, N));
	}
	if (t.peg$library) return {
		peg$result: F,
		peg$currPos: j,
		peg$FAILED: n,
		peg$maxFailExpected: Lr,
		peg$maxFailPos: N,
		peg$success: ya,
		peg$throw: ya ? void 0 : $
	};
	if (ya) return F;
	$();
}
var Yn = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), Xn = {
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
}, Zn = (e) => {
	throw new An(1, 1, e);
}, Qn = (e) => e.type === "root" || e.type === "current", $n = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function er(e) {
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
		if (Qn(i)) r === "value" && !$n(i) && Zn("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && Zn(`Expected a query, found ${String(i.type)}`), i.type) {
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
				let e = Yn.has(i.operator) ? "value" : "any";
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
				let e = i.name, n = Xn[e], a = i.args;
				a.length !== n.args.length && Zn(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && Zn(`The result of ${e}() must be compared`), r === "value" && n.logical && Zn(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
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
			case "value": r === "test" && Zn("A literal must be compared");
		}
	}
}
function tr(e) {
	let t;
	try {
		t = Jn(e);
	} catch (e) {
		if (Rn(e)) throw new An(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new An(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new An(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return er(t), t;
}
var nr = /* @__PURE__ */ new Set([
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
]), rr = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), ir = (e) => e >= 55296 && e <= 56319, ar = (e) => e >= 56320 && e <= 57343, or = (e) => e !== void 0 && e >= "0" && e <= "9", sr = (e, t) => {
	let n = e.charCodeAt(t);
	return ir(n) && ar(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : ir(n) || ar(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, cr = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !nr.has(n) ? null : n === "n" ? {
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
}, lr = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return rr.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, ur = (e, t) => {
	let n = e[t];
	return n === "\\" ? cr(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : sr(e, t);
}, dr = (e, t) => {
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
			let t = lr(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = ur(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = ur(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, fr = (e, t) => {
	let n = t + 1, r = n;
	for (; or(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; or(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, pr = (e) => {
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
				let e = i ? fr(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = dr(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = lr(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = cr(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = sr(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, mr = 1e3, hr = 1e3, gr = 16, _r = /^[dgimsuy]*$/, vr = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, D = class extends Error {}, yr = 0, br = 1, xr = 2, Sr = 3, Cr = 4, wr = 5, Tr = Dn(2, 31) - 1, Er = (e, t) => {
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
	return e.scratch = void 0, (r.gen > Tr - t - 2 || r.step > Tr - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, Dr = /* @__PURE__ */ new Set([
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
]), Or = /^\{(\d+)(?:,(\d*))?\}/, kr = /^[0-9a-fA-F]{4}/, Ar = /^\(\?([ims]*)(?:-([ims]*))?:/, jr = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, Mr = class {
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
		if (this.i < this.src.length) throw new D("unexpected character");
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
				let r = Ar.exec(e.slice(t, t + 12));
				if (!r) throw new D("lookaround or named group");
				let i = kn({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new D("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new D("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new D("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(Dr.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new D("trailing backslash");
		if (r === "b" || r === "B") throw new D("word boundary");
		if (r >= "1" && r <= "9") throw new D("backreference");
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
			if (n === -1) throw new D("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && kr.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (kr.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
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
			let n = Or.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > mr || i !== Infinity && i > mr) throw new D("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, Nr = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= mr) throw new D("pattern too large");
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
		this.emit(wr);
	}
	compile(e) {
		if (++this.work > 4 * mr) throw new D("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(yr, this.atomId(e));
				return;
			case "bol":
				this.emit(Sr, +!!e.multiline);
				return;
			case "eol":
				this.emit(Cr, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(br);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(xr)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(br);
					this.x[t] = t + 1, this.compile(e.node), this.emit(xr, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(br);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, Pr = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new Mr(e, r, t, n).parse(), a = new Nr(r);
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
}, O = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, ie = !1, ae = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case yr:
					e[n++] = r;
					break;
				case wr: return u(c), ie = !0, n;
				case xr:
					h[s++] = a[r];
					break;
				case br:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case Sr:
					(_ === 0 || a[r] === 1 && jr(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case Cr: (_ === t.length || a[r] === 1 && jr(t.charCodeAt(_))) && (h[s++] = r + 1);
			}
		}
		return u(c), n;
	};
	if (g++, p = ae(d, 0, 0), ie) return !0;
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
			if (ne[i] === 1 && (m = ae(f, m, t + 1), ie)) return !0;
		}
		if (!l && (m = ae(f, m, 0), ie)) return !0;
		let i = d;
		d = f, f = i, p = m;
	}
	return !1;
}, k = (e, t, n) => {
	let r = Er(e, t.length);
	try {
		return O(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, Fr = 256, A = /* @__PURE__ */ new Map(), j = 0, M = (e, t, n, r, i = !1) => {
	if (e.length > hr || t.length > 7 || !_r.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = A.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = vr(s) > gr ? null : Pr(n ? `^(?:${s})$` : s, t, i);
	j >= Fr && (A.clear(), j = 0);
	let l = A.get(s);
	return l === void 0 && A.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), j++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, Ir = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), k(e, t, n);
}, N = class {
	constructor(e) {
		this.nodes = e;
	}
}, Lr = (e) => {
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
}, P = (e) => {
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
	return !Lr(e);
}, Rr = 256, F = /* @__PURE__ */ new Map(), I = (e, t) => {
	let n = F.get(e);
	return n === void 0 && (n = P(e), F.size >= Rr && F.clear(), F.set(Array.from(e).join(""), n)), t(e.length), n;
}, zr = /* @__PURE__ */ new Map(), Br = (e, t) => {
	let n = zr.get(e);
	return n === void 0 && (n = pr(e), n !== null && (n = Array.from(n).join("")), zr.size >= Rr && zr.clear(), zr.set(Array.from(e).join(""), n)), t(e.length), n;
}, L = 256, R = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > hr) c = null;
		else if (o) {
			let n = Br(e, i);
			c = n === null ? null : M(n, t, r, i, !0);
		} else c = I(e, i) ? M(e, t, r, i) : null;
		s !== void 0 && (s.size >= L && s.clear(), s.set(a, c));
	}
	return c !== null && Ir(c, n, i);
}, Vr = {
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
		if (T(n)) return w(n);
		if (Bn(n)) {
			let e = Ln(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !E(r) || !E(i) ? !1 : R(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !E(r) || !E(i) ? !1 : R(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, z = (e, t, n = S) => e === void 0 && t === void 0 || Nn(e, t, n), Hr = (e, t, n = S) => !Nn(e, t, n), Ur = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, Wr = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return Ur(n) - Ur(i);
	}
	return e.length - t.length;
}, B = (e, t, n = S) => Vn(e) && Vn(t) ? e < t : E(e) && E(t) ? (n(Math.min(e.length, t.length)), Wr(e, t) < 0) : !1, Gr = (e, t, n = S) => B(e, t, n) || z(e, t, n), Kr = (e, t, n = S) => Vn(e) && Vn(t) ? e > t : E(e) && E(t) ? (n(Math.min(e.length, t.length)), Wr(e, t) > 0) : !1, qr = (e, t, n = S) => Kr(e, t, n) || z(e, t, n), Jr = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, Yr = (e, t, n) => {
	let r = w(e);
	for (let i = 0; i < r; i++) {
		let r = Pn(e, i);
		if (n(1 + Jr(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, Xr = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, Zr = (e) => typeof e == "string" && e.length + 1 > Fn, Qr = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = w(e);
	for (let n = 0; n < a; n++) {
		let r = Pn(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), Zr(r) ? i.long.push(r) : i.set.add(Xr(r));
	}
	return n?.set(e, i), i;
}, $r = ({ set: e, long: t }, n, r) => {
	if (Zr(n)) {
		for (let e of t) if (r(1 + Jr(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(Xr(n)));
}, ei = (e, t, n) => {
	let r = w(e);
	for (let i = 0; i < r; i++) if (n(), C(e, i) && t(e[i])) return !0;
	return !1;
}, ti = {
	eq: z,
	ne: Hr,
	lt: B,
	le: Gr,
	gt: Kr,
	ge: qr,
	in: (e, t, n = S) => T(t) ? Yr(t, e, n) !== -1 : !1,
	nin: (e, t, n = S) => T(t) ? Yr(t, e, n) === -1 : !1,
	subsetof: (e, t, n = S, r) => {
		if (!T(e) || !T(t)) return !1;
		let i = Qr(t, n, r);
		return !ei(e, (e) => !$r(i, e, n), n);
	},
	anyof: (e, t, n = S, r) => {
		if (!T(e) || !T(t)) return !1;
		let i = Qr(t, n, r);
		return ei(e, (e) => $r(i, e, n), n);
	},
	noneof: (e, t, n = S, r) => {
		if (!T(e) || !T(t)) return !1;
		let i = Qr(t, n, r);
		return !ei(e, (e) => $r(i, e, n), n);
	},
	sizeof: (e, t) => !T(e) && !E(e) || !T(t) && !E(t) ? !1 : (T(e) ? w(e) : e.length) === (T(t) ? w(t) : t.length),
	size: (e, t) => !T(e) && !E(e) || !Vn(t) ? !1 : (T(e) ? w(e) : e.length) === t
}, ni = (e) => !T(e) && !E(e) ? !1 : (T(e) ? w(e) : e.length) === 0, ri = (e, t, n, r = S, i) => !E(e) || !E(t) ? !1 : R(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), ii = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), ai = (e, t) => e.concat(`[${t}]`), oi = (e, t) => e < 0 ? t + e : e, si = (e, t) => {
	let n = w(e), r = oi(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: C(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, ci = (e, t) => {
	for (let n of t) e.push(n);
}, li = 1e6, ui = 100, di = 1e6, fi = 20, pi = 1e4, mi = 1e4, hi = class {
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
					C(n, r) && this.visit(n[r]);
				} else if (C(n, t)) this.visit(n[t]);
				else if (++e.holes > mi) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!C(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), T(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: w(e),
				i: 0,
				holes: 0
			});
			else if (Bn(e)) {
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
}, gi = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, ii(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = ii(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = w(e);
			for (let r = 0; r < n; r++) this.tick(), C(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new hi(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(pi, Math.ceil((this.retained - this.retainedLimit) / fi))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new jn(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(li, ui * e.weight) + t, this.retainedLimit = Math.max(di, fi * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new hi(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(pi, Math.ceil((this.steps - this.stepLimit) / ui))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new jn(`Query exceeded ${this.stepLimit} evaluation steps`);
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
			if (!Bn(e)) return;
			let r = this.canonicalName(n, n.value);
			if (C(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (T(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: ai(t, r)
					});
				}), n;
			}
			if (Bn(e)) {
				let n = Ln(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) C(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!T(e)) return;
			let r = si(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: ai(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (T(e)) {
				let r = si(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: ai(t, r.index)
				} : void 0;
			}
			if (Bn(e)) {
				let r = String(n.value);
				return C(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!T(e)) return [];
			let r = w(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : oi(n.start, r), o = n.end === null ? r : oi(n.end, r)) : (a = n.start === null ? r - 1 : oi(n.start, r), o = n.end === null ? -r - 1 : oi(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: C(e, u) ? e[u] : void 0,
				paths: ai(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (Bn(e.value)) {
						let t = this.handleIdentifier(e, r);
						Un(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (Bn(e.value)) {
						let t = this.handleStringLiteral(e, r);
						Un(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (T(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						Un(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					ci(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": ci(n, this.handleBracketExpressionContent(e, r));
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
						Un(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						ci(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						ci(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						Un(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (Bn(e)) {
					let t = Ln(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else T(e) && i.push({
					parent: a,
					keys: null,
					length: w(e),
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
						if (!C(n, t)) continue;
						a = {
							value: n[t],
							paths: ai(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!C(n, r)) continue;
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
						if (!Vn(i) || !Vn(r)) i = void 0;
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
					return Vn(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return ni(n);
			if (t.operator === "reg") return ri(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = ti[t.operator];
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
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new N(r.value) : new N(Un(r?.value) ? [r?.value] : []);
			}), i = Vr[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
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
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : Un(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : Un(n);
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
					if (T(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: ai(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (Bn(n)) {
						let i = Ln(n);
						this.tick(i.length);
						for (let a of i) {
							if (!C(n, a)) continue;
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
					if (!Un(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) ci(n, a);
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
				throw Rn(e) ? new jn("Query is nested too deeply") : zn(e) ? new jn("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? li, this.retainedLimit = this.adaptiveLimit ? di : Infinity;
	}
}, _i = (e, t, n) => {
	let r = tr(t), i = new gi(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Hn(i) ? [] : [i.value] : i?.value;
}, vi = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = _i(e, i, n);
		Un(t) && r.push(t);
	}
	return r;
}, yi = (e, t, n = {}) => {
	try {
		return T(t) ? vi(e, t, n) : _i(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, bi = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = bi(n, t);
		if (e) return e;
	}
	return null;
}, xi = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = yi(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = bi(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
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
}, Si = (e, t, n, r) => {
	let { parent: i, key: a } = xi(e, t, r);
	return (Sn[t.action] || xn)(i, a, n), e;
}, Ci = (e, t) => {
	if (!e) return null;
	let n = t[e.fileName];
	if (n === void 0) throw Error(`Entry not found in state: ${e.fileName}`);
	if (e.jsonPath) {
		let t = yi(n, e.jsonPath, { returnArray: !0 });
		return t.length === 0 ? Array.isArray(n) ? n : [] : t.length === 1 ? t[0] : t;
	}
	return Array.isArray(e.filePath) && e.filePath.length > 0 ? e.filePath.reduce((e, t) => e ? e[t] : void 0, n) : n;
}, wi = (e, t, n, r = !1) => {
	if (t) {
		if (!t.filePath || t.filePath.length === 0) {
			let r = e[t.fileName];
			Array.isArray(r) ? r.push(...Array.isArray(n) ? n : [n]) : e[t.fileName] = n;
		} else try {
			Si(e, t, n, r);
		} catch {}
	}
}, Ti = {
	single: (e, t) => {
		let n = At[e.templateKey], r = Ci(e.sourcePath, t);
		return (e.func === "fromCollection" ? qt : Ut)(r, n);
	},
	rowOnColumn: (e, { data: t }) => vn({
		columns: t?.columns,
		data: t,
		columnSpec: At[e.templateKey.columnKey],
		rowSpec: At[e.templateKey.rowKey]
	}),
	columnOnRow: (e, { data: t }) => yn({
		columns: t?.columns,
		data: t,
		columnSpec: At[e.templateKey.columnKey],
		rowSpec: At[e.templateKey.rowKey]
	})
}, Ei = (e, t, n = !1) => {
	let r = Nt[e], i = Ti[r.type](r, t);
	return wi(t, r.destinationPath, i, n), i;
}, Di = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => (e.forEach((e) => {
	r && console.log(`[runStep] ${e}`), Ei(e, {
		base: t,
		data: n
	}, r);
}), t), Oi = (e) => Array.isArray(e) ? e : [e], ki = (e, t, n) => {
	e[t] = n;
}, Ai = {
	set: ki,
	push: (e, t, n) => {
		e[t].push(...Oi(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...Oi(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(Oi(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(Oi(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, ji = Object.defineProperty, Mi = Object.getOwnPropertySymbols, Ni = Object.prototype.hasOwnProperty, Pi = Object.prototype.propertyIsEnumerable, Fi = Math.pow, Ii = (e, t, n) => t in e ? ji(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Li = (e, t) => {
	for (var n in t ||= {}) Ni.call(t, n) && Ii(e, n, t[n]);
	if (Mi) for (var n of Mi(t)) Pi.call(t, n) && Ii(e, n, t[n]);
	return e;
}, Ri = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, zi = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, V = () => void 0, Bi = (e, t, n, r) => {
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
		let i = Gi(e), a = Gi(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, Vi = (e, t, n = V) => {
	let r = [];
	if (!Bi(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!Bi(Hi(e.x, t), Hi(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !H(o, i) || !H(a, i)) return !1;
			let s = a[i];
			if (!H(o, i) || !Bi(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, H = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Hi = (e, t) => H(e, t) ? e[t] : void 0, Ui = 16383, Wi = 1e3, Gi = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > Wi) throw new zi(`Member name too long (maximum ${Wi} characters)`);
	return t;
}, U = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, Ki = (e) => e instanceof RangeError && /call stack/i.test(e.message), W = (e) => Array.isArray(e), qi = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), G = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, Ji = (e) => typeof e == "number", K = (e) => typeof e == "string", Yi = (e) => e === void 0, q = (e) => e !== void 0;
function Xi(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function Zi(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function Qi(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var $i = class extends SyntaxError {
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
function ea(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Wr }, a = Wr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, ie = /^[*\/]/, ae = /^[a-zA-Z_]/, oe = /^[\x80-\uFFFF_]/, se = /^[a-zA-Z0-9_]/, ce = /^[0-9@$\-]/, le = /^[^\/\\]/, ue = /^[gimsuy]/, de = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, fe = /^[\uD800-\uDBFF]/, pe = /^[\uDC00-\uDFFF]/, v = /^[0-9]/, me = /^[1-9]/, he = /^[eE]/, ge = /^["\\]/, _e = /^['\\]/, ve = /^[ -\uD7FF\uE000-\uFFFF]/, ye = /^[dD]/, be = /^[89abAB]/, xe = /^[c-fC-F]/, Se = /^[0-9a-fA-F]/, Ce = /^[ \t\n\r]/, we = I([",", "]"], !1, !1, !1), Te = F("length", !1), Ee = F("count", !1), De = F("match", !1), Oe = F("search", !1), ke = F("value", !1), Ae = I(["+", "-"], !1, !1, !1), je = I(["*", "/"], !1, !1, !1), Me = L("string"), Ne = I([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Pe = I([["", "￿"], "_"], !1, !1, !1), Fe = I([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Ie = F("-", !1), Le = I([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Re = F("$", !1), ze = F("@", !1), Be = F("..", !1), Ve = F(".", !1), He = F("*", !1), Ue = F("&&", !1), We = F("||", !1), Ge = F("!", !1), Ke = F("==", !1), qe = F("!=", !1), Je = F(">=", !1), Ye = F(">", !1), Xe = F("<=", !1), Ze = F("<", !1), Qe = F("=~", !1), $e = F("in", !1), et = F("nin", !1), tt = F("subsetof", !1), nt = F("anyof", !1), rt = F("noneof", !1), it = F("sizeof", !1), at = F("size", !1), ot = F("empty", !1), st = F("true", !1), ct = F("false", !1), y = F("null", !1), lt = F("{", !1), ut = F("}", !1), dt = F("[", !1), ft = F("]", !1), pt = F(":", !1), mt = F(",", !1), ht = F("(", !1), gt = F(")", !1), _t = F("?", !1), vt = L("regex"), yt = F("/", !1), bt = I(["/", "\\"], !0, !1, !1), b = F("\\", !1), xt = zr(), St = I([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), Ct = I([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), wt = I([["\ud800", "\udbff"]], !1, !1, !1), Tt = I([["\udc00", "\udfff"]], !1, !1, !1), x = I([["0", "9"]], !1, !1, !1), Et = L("number"), Dt = F("0", !1), Ot = I([["1", "9"]], !1, !1, !1), kt = L("integer"), At = I(["e", "E"], !1, !1, !1), jt = F("\"", !1), Mt = F("'", !1), Nt = I(["\"", "\\"], !1, !1, !1), Pt = I(["'", "\\"], !1, !1, !1), Ft = I([[" ", "퟿"], ["", "￿"]], !1, !1, !1), It = F("b", !1), Lt = F("f", !1), Rt = F("n", !1), zt = F("r", !1), Bt = F("t", !1), Vt = F("u", !1), Ht = I(["d", "D"], !1, !1, !1), Ut = I([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Wt = F("\\u", !1), Gt = I([["c", "f"], ["C", "F"]], !1, !1, !1), Kt = I([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), qt = I([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function Jt(e) {
		return {
			type: "root",
			next: Xi(e)
		};
	}
	function Yt(e) {
		return e.map((e) => e[1]);
	}
	function Xt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Zt(e) {
		return e;
	}
	function Qt(e) {
		return {
			type: "dotdot",
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
	function tn() {
		return { type: "wildcard" };
	}
	function nn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function rn(e) {
		return e;
	}
	function an(e) {
		return e;
	}
	function on(e, t) {
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
	function sn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function cn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function ln(e, t) {
		return Qi(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function un(e, t) {
		return Qi(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function dn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function fn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function pn(e, t) {
		return t !== null || Zi(e);
	}
	function mn(e, t) {
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
	function hn(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function gn(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function _n() {
		return { operator: "empty" };
	}
	function vn() {
		return "eq";
	}
	function yn() {
		return "ne";
	}
	function bn() {
		return "le";
	}
	function xn() {
		return "lt";
	}
	function Sn() {
		return "ge";
	}
	function Cn() {
		return "gt";
	}
	function wn() {
		return "in";
	}
	function Tn() {
		return "nin";
	}
	function En() {
		return "subsetof";
	}
	function Dn() {
		return "anyof";
	}
	function On() {
		return "noneof";
	}
	function kn() {
		return "sizeof";
	}
	function An() {
		return "size";
	}
	function jn(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function S() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Mn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Nn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function C(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function Pn() {
		return "length";
	}
	function Fn() {
		return "count";
	}
	function In() {
		return "match";
	}
	function Ln() {
		return "search";
	}
	function w() {
		return "value";
	}
	function Rn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function T(e, t) {
		return t.length === 0 ? e : Qi(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function zn(e, t) {
		return t.length === 0 ? e : Qi(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function Bn(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function Vn(e) {
		return {
			type: "root",
			next: Xi(e)
		};
	}
	function E(e) {
		return {
			type: "current",
			next: Xi(e)
		};
	}
	function Hn(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Un() {
		return { type: "wildcard" };
	}
	function Wn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function Gn(e) {
		return {
			type: "stringLiteral",
			value: va(e)
		};
	}
	function Kn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function qn(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Jn(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function Yn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function Xn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Zn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Qn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function $n(e) {
		return e;
	}
	function er(e) {
		for (let [t] of e || []) va(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function tr(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function nr(e, t) {
		return [e, t.value];
	}
	function rr(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function ir(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function ar(e) {
		return va(e);
	}
	function or(e) {
		return va(e);
	}
	function sr() {
		return "true";
	}
	function cr() {
		return "false";
	}
	function lr() {
		return "null";
	}
	function ur(e) {
		return va(e);
	}
	function dr() {
		return "true";
	}
	function fr() {
		return "false";
	}
	function pr() {
		return "null";
	}
	function mr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function hr(e) {
		return e.join("");
	}
	function gr(e, t) {
		let n = parseFloat(Lr());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && P("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function _r() {
		let e = parseInt(Lr(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && P("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function vr(e) {
		return e.join("");
	}
	function D(e) {
		return e.join("");
	}
	function yr(e) {
		return e;
	}
	function br() {
		return "\"";
	}
	function xr(e) {
		return e;
	}
	function Sr(e) {
		return e;
	}
	function Cr() {
		return "'";
	}
	function wr(e) {
		return e;
	}
	function Tr() {
		return "\\";
	}
	function Er() {
		return "/";
	}
	function Dr() {
		return "\b";
	}
	function Or() {
		return "\f";
	}
	function kr() {
		return "\n";
	}
	function Ar() {
		return "\r";
	}
	function jr() {
		return "	";
	}
	function Mr(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Nr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function Pr(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let O = t.peg$currPos | 0, k = O, Fr = [{
		line: 1,
		column: 1
	}], A = O, j = t.peg$maxFailExpected || [], M = t.peg$silentFails | 0, Ir = /* @__PURE__ */ new Map(), N;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function Lr() {
		return e.substring(k, O);
	}
	function P(e, t) {
		throw t = t === void 0 ? Vr(k, O) : t, Hr(e, t);
	}
	function Rr(t = O) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function F(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function I(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function zr() {
		return { type: "any" };
	}
	function Br() {
		return { type: "end" };
	}
	function L(e) {
		return {
			type: "other",
			description: e
		};
	}
	function R(t) {
		let n = Fr[t], r;
		if (n) return n;
		if (t >= Fr.length) r = Fr.length - 1;
		else for (r = t; !Fr[--r];);
		for (n = Fr[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return Fr[t] = n, n;
	}
	function Vr(e, t, n) {
		let i = R(e), a = R(t), o = {
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
	function z(e) {
		O < A || (O > A && (A = O, j = []), j.push(e));
	}
	function Hr(e, t) {
		return new $i(e, null, null, t);
	}
	function Ur(e, t, n) {
		return new $i($i.buildMessage(e, t), e, t, n);
	}
	function Wr() {
		let e, t, r, i;
		return e = O, t = Di(), t === n ? (O = e, e = n) : (r = B(), i = _a(), i === n ? (O = e, e = n) : (k = e, e = Jt(r))), e;
	}
	function B() {
		let e, t, r, i, a;
		for (e = O, t = [], r = O, i = Q(), a = Gr(), a === n ? (O = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = O, i = Q(), a = Gr(), a === n ? (O = r, r = n) : (i = [i, a], r = i);
		return k = e, t = Yt(t), e = t, e;
	}
	function Gr() {
		let e;
		return e = qr(), e === n && (e = Kr()), e;
	}
	function Kr() {
		let e, t, r;
		return e = O, t = Ai(), t === n ? (O = e, e = n) : (r = Jr(), r === n ? (O = e, e = n) : (k = e, e = Xt(r))), e === n && (e = O, t = Xr(), t !== n && (k = e, t = Zt(t)), e = t), e;
	}
	function qr() {
		let e, t, r;
		return e = O, t = ki(), t === n ? (O = e, e = n) : (r = Yr(), r === n ? (O = e, e = n) : (k = e, e = Qt(r))), e;
	}
	function Jr() {
		let e, t;
		return e = O, t = ji(), t !== n && (k = e, t = $t()), e = t, e === n && (e = O, t = Ei(), t !== n && (k = e, t = en(t)), e = t), e;
	}
	function Yr() {
		let e, t;
		return e = O, t = ji(), t !== n && (k = e, t = tn()), e = t, e === n && (e = O, t = Ei(), t !== n && (k = e, t = nn(t)), e = t, e === n && (e = O, t = Xr(), t !== n && (k = e, t = rn(t)), e = t)), e;
	}
	function Xr() {
		let e, t, r, i;
		return e = O, t = Yi(), t === n ? (O = e, e = n) : (Q(), r = Zr(), r === n ? (O = e, e = n) : (Q(), i = q(), i === n ? (O = e, e = n) : (k = e, e = an(r)))), e;
	}
	function Zr() {
		let e, t, r, i, a, o, s, c;
		if (e = O, t = hi(), t !== n) {
			for (r = [], i = O, a = Q(), o = J(), o === n ? (O = i, i = n) : (s = Q(), c = hi(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = O, a = Q(), o = J(), o === n ? (O = i, i = n) : (s = Q(), c = hi(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			k = e, e = on(t, r);
		} else O = e, e = n;
		return e;
	}
	function Qr() {
		let t, r, i, a, o, s, c, l, u;
		return t = O, r = na(), r === n ? (O = t, t = n) : (Q(), i = ta(), i === n ? (O = t, t = n) : (Q(), a = $r(), a === n ? (O = t, t = n) : (Q(), o = Y(), o === n ? (O = t, t = n) : (s = O, M++, c = O, l = Q(), u = e.charAt(O), re.test(u) ? O++ : (u = n, M === 0 && z(we)), u === n ? (O = c, c = n) : (l = [l, u], c = l), M--, c === n ? s = n : (O = s, s = void 0), s === n ? (O = t, t = n) : (k = t, t = sn(a)))))), t === n && (t = O, r = na(), r === n ? (O = t, t = n) : (Q(), i = $r(), i === n ? (O = t, t = n) : (k = t, t = cn(i)))), t;
	}
	function $r() {
		let e, t, r, i, a, o, s, c, l = O * 91 + 10, u = Ir.get(l);
		if (u) return O = u.nextPos, u.result;
		if (e = O, t = ei(), t !== n) {
			for (r = [], i = O, a = Q(), o = Ni(), o === n ? (O = i, i = n) : (s = Q(), c = ei(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = O, a = Q(), o = Ni(), o === n ? (O = i, i = n) : (s = Q(), c = ei(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			k = e, e = ln(t, r);
		} else O = e, e = n;
		return Ir.set(l, {
			nextPos: O,
			result: e
		}), e;
	}
	function ei() {
		let e, t, r, i, a, o, s, c;
		if (e = O, t = ti(), t !== n) {
			for (r = [], i = O, a = Q(), o = Mi(), o === n ? (O = i, i = n) : (s = Q(), c = ti(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = O, a = Q(), o = Mi(), o === n ? (O = i, i = n) : (s = Q(), c = ti(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			k = e, e = un(t, r);
		} else O = e, e = n;
		return e;
	}
	function ti() {
		let e, t, r, i, a;
		return e = O, t = Pi(), t === n ? (O = e, e = n) : (Q(), r = ta(), r === n ? (O = e, e = n) : (Q(), i = $r(), i === n ? (O = e, e = n) : (Q(), a = Y(), a === n ? (O = e, e = n) : (k = e, e = dn(i))))), e === n && (e = O, t = Pi(), t === n ? (O = e, e = n) : (Q(), r = ai(), r === n ? (O = e, e = n) : (k = e, e = fn(r))), e === n && (e = ni())), e;
	}
	function ni() {
		let e, t, r, i, a;
		return e = O, t = ui(), t === n ? (O = e, e = n) : (r = O, i = Q(), a = ri(), a === n ? (O = r, r = n) : (i = [i, a], r = i), r === n && (r = null), k = O, i = pn(t, r), i = i ? void 0 : n, i === n ? (O = e, e = n) : (k = e, e = mn(t, r))), e === n && (e = ai()), e;
	}
	function ri() {
		let e, t, r;
		return e = O, t = ii(), t === n ? (O = e, e = n) : (Q(), r = ui(), r === n ? (O = e, e = n) : (k = e, e = hn(t, r))), e === n && (e = O, t = Bi(), t === n ? (O = e, e = n) : (Q(), r = gi(), r === n ? (O = e, e = n) : (k = e, e = gn(r))), e === n && (e = O, t = Ki(), t !== n && (k = e, t = _n()), e = t)), e;
	}
	function ii() {
		let e, t;
		return e = O, t = Fi(), t !== n && (k = e, t = vn()), e = t, e === n && (e = O, t = Ii(), t !== n && (k = e, t = yn()), e = t, e === n && (e = O, t = zi(), t !== n && (k = e, t = bn()), e = t, e === n && (e = O, t = V(), t !== n && (k = e, t = xn()), e = t, e === n && (e = O, t = Li(), t !== n && (k = e, t = Sn()), e = t, e === n && (e = O, t = Ri(), t !== n && (k = e, t = Cn()), e = t, e === n && (e = O, t = Vi(), t !== n && (k = e, t = wn()), e = t, e === n && (e = O, t = H(), t !== n && (k = e, t = Tn()), e = t, e === n && (e = O, t = Hi(), t !== n && (k = e, t = En()), e = t, e === n && (e = O, t = Ui(), t !== n && (k = e, t = Dn()), e = t, e === n && (e = O, t = Wi(), t !== n && (k = e, t = On()), e = t, e === n && (e = O, t = Gi(), t !== n && (k = e, t = kn()), e = t, e === n && (e = O, t = U(), t !== n && (k = e, t = An()), e = t)))))))))))), e;
	}
	function ai() {
		let e, t, r, i;
		return e = O, t = ta(), t === n ? (O = e, e = n) : (Q(), r = $r(), r === n ? (O = e, e = n) : (Q(), i = Y(), i === n ? (O = e, e = n) : (k = e, e = jn(r)))), e === n && (e = oi(), e === n && (e = pi(), e === n && (e = O, t = W(), t !== n && (k = e, t = S()), e = t, e === n && (e = O, t = qi(), t !== n && (k = e, t = Mn()), e = t, e === n && (e = O, t = G(), t !== n && (k = e, t = Nn()), e = t))))), e;
	}
	function oi() {
		let e, t, r, i, a;
		return e = O, t = si(), t === n ? (O = e, e = n) : (r = ta(), r === n ? (O = e, e = n) : (Q(), i = ci(), i === n && (i = null), Q(), a = Y(), a === n ? (O = e, e = n) : (k = e, e = C(t, i)))), e;
	}
	function si() {
		let t, r;
		return t = O, e.substr(O, 6) === o ? (r = o, O += 6) : (r = n, M === 0 && z(Te)), r !== n && (k = t, r = Pn()), t = r, t === n && (t = O, e.substr(O, 5) === s ? (r = s, O += 5) : (r = n, M === 0 && z(Ee)), r !== n && (k = t, r = Fn()), t = r, t === n && (t = O, e.substr(O, 5) === c ? (r = c, O += 5) : (r = n, M === 0 && z(De)), r !== n && (k = t, r = In()), t = r, t === n && (t = O, e.substr(O, 6) === l ? (r = l, O += 6) : (r = n, M === 0 && z(Oe)), r !== n && (k = t, r = Ln()), t = r, t === n && (t = O, e.substr(O, 5) === u ? (r = u, O += 5) : (r = n, M === 0 && z(ke)), r !== n && (k = t, r = w()), t = r)))), t;
	}
	function ci() {
		let e, t, r, i, a, o, s, c;
		if (e = O, t = li(), t !== n) {
			for (r = [], i = O, a = Q(), o = J(), o === n ? (O = i, i = n) : (s = Q(), c = li(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = O, a = Q(), o = J(), o === n ? (O = i, i = n) : (s = Q(), c = li(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			k = e, e = Rn(t, r);
		} else O = e, e = n;
		return e;
	}
	function li() {
		let e;
		return e = ui(), e === n && (e = vi()), e;
	}
	function ui() {
		let t, r, i, a, o, s, c, l, u = O * 91 + 21, d = Ir.get(u);
		if (d) return O = d.nextPos, d.result;
		if (t = O, r = di(), r !== n) {
			for (i = [], a = O, o = Q(), s = e.charAt(O), _.test(s) ? O++ : (s = n, M === 0 && z(Ae)), s === n ? (O = a, a = n) : (c = Q(), l = di(), l === n ? (O = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = O, o = Q(), s = e.charAt(O), _.test(s) ? O++ : (s = n, M === 0 && z(Ae)), s === n ? (O = a, a = n) : (c = Q(), l = di(), l === n ? (O = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			k = t, t = T(r, i);
		} else O = t, t = n;
		return Ir.set(u, {
			nextPos: O,
			result: t
		}), t;
	}
	function di() {
		let t, r, i, a, o, s, c, l;
		if (t = O, r = fi(), r !== n) {
			for (i = [], a = O, o = Q(), s = e.charAt(O), ie.test(s) ? O++ : (s = n, M === 0 && z(je)), s === n ? (O = a, a = n) : (c = Q(), l = fi(), l === n ? (O = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = O, o = Q(), s = e.charAt(O), ie.test(s) ? O++ : (s = n, M === 0 && z(je)), s === n ? (O = a, a = n) : (c = Q(), l = fi(), l === n ? (O = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			k = t, t = zn(r, i);
		} else O = t, t = n;
		return t;
	}
	function fi() {
		let e, t, r, i;
		return e = O, t = ta(), t === n ? (O = e, e = n) : (Q(), r = ui(), r === n ? (O = e, e = n) : (Q(), i = Y(), i === n ? (O = e, e = n) : (k = e, e = Bn(r)))), e === n && (e = oi(), e === n && (e = _i(), e === n && (e = pi()))), e;
	}
	function pi() {
		let e, t, r;
		return e = O, t = Di(), t === n ? (O = e, e = n) : (r = B(), r === n ? (O = e, e = n) : (k = e, e = Vn(r))), e === n && (e = O, t = Oi(), t === n ? (O = e, e = n) : (r = B(), r === n ? (O = e, e = n) : (k = e, e = E(r)))), e;
	}
	function mi() {
		let e, t, r, i, a, o, s, c, l;
		return e = O, t = O, r = ua(), r === n ? (O = t, t = n) : (i = Q(), r = [r, i], t = r), t === n && (t = null), r = ea(), r === n ? (O = e, e = n) : (i = Q(), a = O, o = ua(), o === n ? (O = a, a = n) : (s = Q(), o = [o, s], a = o), a === n && (a = null), o = O, s = ea(), s === n ? (O = o, o = n) : (c = Q(), l = ua(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), k = e, e = Hn(t, a, o)), e;
	}
	function hi() {
		let e, t;
		return e = Qr(), e === n && (e = mi(), e === n && (e = O, t = ji(), t !== n && (k = e, t = Un()), e = t, e === n && (e = O, t = ua(), t !== n && (k = e, t = Wn(t)), e = t, e === n && (e = O, t = fa(), t !== n && (k = e, t = Gn(t)), e = t, e === n && (e = O, t = wi(), t !== n && (k = e, t = Kn(t)), e = t))))), e;
	}
	function gi() {
		let e, t, r;
		return e = O, t = ra(), t === n ? (O = e, e = n) : (r = ia(), k = e, e = qn(t, r)), e;
	}
	function _i() {
		let e, t;
		return e = O, t = vi(), t !== n && (k = e, t = Jn(t)), e = t, e === n && (e = O, t = ca(), t !== n && (k = e, t = Yn(t)), e = t, e === n && (e = yi(), e === n && (e = Si(), e === n && (e = O, t = W(), t !== n && (k = e, t = Xn()), e = t, e === n && (e = O, t = qi(), t !== n && (k = e, t = Zn()), e = t, e === n && (e = O, t = G(), t !== n && (k = e, t = Qn()), e = t)))))), e;
	}
	function vi() {
		let e, t;
		return M++, e = O, t = fa(), t !== n && (k = e, t = $n(t)), e = t, M--, e === n && (t = n, M === 0 && z(Me)), e;
	}
	function yi() {
		let e, t, r, i;
		return e = O, t = Ji(), t === n ? (O = e, e = n) : (Q(), r = bi(), r === n && (r = null), Q(), i = K(), i === n ? (O = e, e = n) : (k = e, e = er(r))), e;
	}
	function bi() {
		let e, t, r, i, a, o, s, c;
		if (e = O, t = xi(), t !== n) {
			for (r = [], i = O, a = Q(), o = J(), o === n ? (O = i, i = n) : (s = Q(), c = xi(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = O, a = Q(), o = J(), o === n ? (O = i, i = n) : (s = Q(), c = xi(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			k = e, e = tr(t, r);
		} else O = e, e = n;
		return e;
	}
	function xi() {
		let e, t, r, i;
		return e = O, t = fa(), t === n ? (O = e, e = n) : (Q(), r = ea(), r === n ? (O = e, e = n) : (Q(), i = _i(), i === n ? (O = e, e = n) : (k = e, e = nr(t, i)))), e;
	}
	function Si() {
		let e, t, r, i;
		return e = O, t = Yi(), t === n ? (O = e, e = n) : (Q(), r = Ci(), r === n && (r = null), Q(), i = q(), i === n ? (O = e, e = n) : (k = e, e = rr(r))), e;
	}
	function Ci() {
		let e, t, r, i, a, o, s, c;
		if (e = O, t = _i(), t !== n) {
			for (r = [], i = O, a = Q(), o = J(), o === n ? (O = i, i = n) : (s = Q(), c = _i(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = O, a = Q(), o = J(), o === n ? (O = i, i = n) : (s = Q(), c = _i(), c === n ? (O = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			k = e, e = ir(t, r);
		} else O = e, e = n;
		return e;
	}
	function wi() {
		let t, r, i, a, o, s;
		if (t = O, r = O, i = O, a = e.charAt(O), ae.test(a) ? O++ : (a = n, M === 0 && z(Ne)), a !== n) {
			for (o = [], s = Ti(); s !== n;) o.push(s), s = Ti();
			a = [a, o], i = a;
		} else O = i, i = n;
		if (r = i === n ? i : e.substring(r, O), r !== n && (k = t, r = ar(r)), t = r, t === n) {
			if (t = O, r = O, i = [], a = e.charAt(O), oe.test(a) ? O++ : (a = n, M === 0 && z(Pe)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(O), oe.test(a) ? O++ : (a = n, M === 0 && z(Pe));
			else i = n;
			r = i === n ? i : e.substring(r, O), r !== n && (k = t, r = or(r)), t = r, t === n && (t = O, r = W(), r !== n && (k = t, r = sr()), t = r, t === n && (t = O, r = qi(), r !== n && (k = t, r = cr()), t = r, t === n && (t = O, r = G(), r !== n && (k = t, r = lr()), t = r)));
		}
		return t;
	}
	function Ti() {
		let t, r, i, a;
		return t = e.charAt(O), se.test(t) ? O++ : (t = n, M === 0 && z(Fe)), t === n && (t = O, e.charCodeAt(O) === 45 ? (r = "-", O++) : (r = n, M === 0 && z(Ie)), r === n ? (O = t, t = n) : (i = O, M++, a = e.charAt(O), ce.test(a) ? O++ : (a = n, M === 0 && z(Le)), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r))), t;
	}
	function Ei() {
		let e, t;
		return e = O, t = aa(), t !== n && (k = e, t = ur(t)), e = t, e === n && (e = O, t = W(), t !== n && (k = e, t = dr()), e = t, e === n && (e = O, t = qi(), t !== n && (k = e, t = fr()), e = t, e === n && (e = O, t = G(), t !== n && (k = e, t = pr()), e = t))), e;
	}
	function Di() {
		let t;
		return e.charCodeAt(O) === 36 ? (t = "$", O++) : (t = n, M === 0 && z(Re)), t;
	}
	function Oi() {
		let t;
		return e.charCodeAt(O) === 64 ? (t = "@", O++) : (t = n, M === 0 && z(ze)), t;
	}
	function ki() {
		let t;
		return e.substr(O, 2) === ".." ? (t = "..", O += 2) : (t = n, M === 0 && z(Be)), t;
	}
	function Ai() {
		let t;
		return e.charCodeAt(O) === 46 ? (t = ".", O++) : (t = n, M === 0 && z(Ve)), t;
	}
	function ji() {
		let t;
		return e.charCodeAt(O) === 42 ? (t = "*", O++) : (t = n, M === 0 && z(He)), t;
	}
	function Mi() {
		let t;
		return e.substr(O, 2) === "&&" ? (t = "&&", O += 2) : (t = n, M === 0 && z(Ue)), t;
	}
	function Ni() {
		let t;
		return e.substr(O, 2) === "||" ? (t = "||", O += 2) : (t = n, M === 0 && z(We)), t;
	}
	function Pi() {
		let t;
		return e.charCodeAt(O) === 33 ? (t = "!", O++) : (t = n, M === 0 && z(Ge)), t;
	}
	function Fi() {
		let t;
		return e.substr(O, 2) === "==" ? (t = "==", O += 2) : (t = n, M === 0 && z(Ke)), t;
	}
	function Ii() {
		let t;
		return e.substr(O, 2) === "!=" ? (t = "!=", O += 2) : (t = n, M === 0 && z(qe)), t;
	}
	function Li() {
		let t;
		return e.substr(O, 2) === ">=" ? (t = ">=", O += 2) : (t = n, M === 0 && z(Je)), t;
	}
	function Ri() {
		let t;
		return e.charCodeAt(O) === 62 ? (t = ">", O++) : (t = n, M === 0 && z(Ye)), t;
	}
	function zi() {
		let t;
		return e.substr(O, 2) === "<=" ? (t = "<=", O += 2) : (t = n, M === 0 && z(Xe)), t;
	}
	function V() {
		let t;
		return e.charCodeAt(O) === 60 ? (t = "<", O++) : (t = n, M === 0 && z(Ze)), t;
	}
	function Bi() {
		let t;
		return e.substr(O, 2) === "=~" ? (t = "=~", O += 2) : (t = n, M === 0 && z(Qe)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = O, e.substr(O, 2) === "in" ? (r = "in", O += 2) : (r = n, M === 0 && z($e)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function H() {
		let t, r, i, a;
		return t = O, e.substr(O, 3) === "nin" ? (r = "nin", O += 3) : (r = n, M === 0 && z(et)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = O, e.substr(O, 8) === d ? (r = d, O += 8) : (r = n, M === 0 && z(tt)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = O, e.substr(O, 5) === f ? (r = f, O += 5) : (r = n, M === 0 && z(nt)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = O, e.substr(O, 6) === p ? (r = p, O += 6) : (r = n, M === 0 && z(rt)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = O, e.substr(O, 6) === m ? (r = m, O += 6) : (r = n, M === 0 && z(it)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function U() {
		let t, r, i, a;
		return t = O, e.substr(O, 4) === ee ? (r = ee, O += 4) : (r = n, M === 0 && z(at)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = O, e.substr(O, 5) === h ? (r = h, O += 5) : (r = n, M === 0 && z(ot)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function W() {
		let t, r, i, a;
		return t = O, e.substr(O, 4) === te ? (r = te, O += 4) : (r = n, M === 0 && z(st)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = O, e.substr(O, 5) === ne ? (r = ne, O += 5) : (r = n, M === 0 && z(ct)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function G() {
		let t, r, i, a;
		return t = O, e.substr(O, 4) === g ? (r = g, O += 4) : (r = n, M === 0 && z(y)), r === n ? (O = t, t = n) : (i = O, M++, a = Z(), M--, a === n ? i = void 0 : (O = i, i = n), i === n ? (O = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t;
		return e.charCodeAt(O) === 123 ? (t = "{", O++) : (t = n, M === 0 && z(lt)), t;
	}
	function K() {
		let t;
		return e.charCodeAt(O) === 125 ? (t = "}", O++) : (t = n, M === 0 && z(ut)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(O) === 91 ? (t = "[", O++) : (t = n, M === 0 && z(dt)), t;
	}
	function q() {
		let t;
		return e.charCodeAt(O) === 93 ? (t = "]", O++) : (t = n, M === 0 && z(ft)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(O) === 58 ? (t = ":", O++) : (t = n, M === 0 && z(pt)), t;
	}
	function J() {
		let t;
		return e.charCodeAt(O) === 44 ? (t = ",", O++) : (t = n, M === 0 && z(mt)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(O) === 40 ? (t = "(", O++) : (t = n, M === 0 && z(ht)), t;
	}
	function Y() {
		let t;
		return e.charCodeAt(O) === 41 ? (t = ")", O++) : (t = n, M === 0 && z(gt)), t;
	}
	function na() {
		let t;
		return e.charCodeAt(O) === 63 ? (t = "?", O++) : (t = n, M === 0 && z(_t)), t;
	}
	function ra() {
		let t, r, i, a, o, s;
		if (M++, t = O, e.charCodeAt(O) === 47 ? (r = "/", O++) : (r = n, M === 0 && z(yt)), r !== n) {
			for (i = [], a = e.charAt(O), le.test(a) ? O++ : (a = n, M === 0 && z(bt)), a === n && (a = O, e.charCodeAt(O) === 92 ? (o = "\\", O++) : (o = n, M === 0 && z(b)), o === n ? (O = a, a = n) : (e.length > O ? (s = e.charAt(O), O++) : (s = n, M === 0 && z(xt)), s === n ? (O = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(O), le.test(a) ? O++ : (a = n, M === 0 && z(bt)), a === n && (a = O, e.charCodeAt(O) === 92 ? (o = "\\", O++) : (o = n, M === 0 && z(b)), o === n ? (O = a, a = n) : (e.length > O ? (s = e.charAt(O), O++) : (s = n, M === 0 && z(xt)), s === n ? (O = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(O) === 47 ? (a = "/", O++) : (a = n, M === 0 && z(yt)), a === n ? (O = t, t = n) : (k = t, t = mr(i));
		} else O = t, t = n;
		return M--, t === n && (r = n, M === 0 && z(vt)), t;
	}
	function ia() {
		let t, r, i;
		for (t = O, r = [], i = e.charAt(O), ue.test(i) ? O++ : (i = n, M === 0 && z(St)); i !== n;) r.push(i), i = e.charAt(O), ue.test(i) ? O++ : (i = n, M === 0 && z(St));
		return k = t, r = hr(r), t = r, t;
	}
	function aa() {
		let t, r, i, a, o;
		if (t = O, r = O, i = oa(), i !== n) {
			for (a = [], o = sa(); o !== n;) a.push(o), o = sa();
			i = [i, a], r = i;
		} else O = r, r = n;
		return t = r === n ? r : e.substring(t, O), t;
	}
	function oa() {
		let t, r, i;
		return t = e.charAt(O), de.test(t) ? O++ : (t = n, M === 0 && z(Ct)), t === n && (t = O, r = e.charAt(O), fe.test(r) ? O++ : (r = n, M === 0 && z(wt)), r === n ? (O = t, t = n) : (i = e.charAt(O), pe.test(i) ? O++ : (i = n, M === 0 && z(Tt)), i === n ? (O = t, t = n) : (r = [r, i], t = r))), t;
	}
	function sa() {
		let t;
		return t = oa(), t === n && (t = e.charAt(O), v.test(t) ? O++ : (t = n, M === 0 && z(x))), t;
	}
	function ca() {
		let t, r, i, a, o, s, c;
		if (M++, t = O, e.charCodeAt(O) === 45 ? (r = "-", O++) : (r = n, M === 0 && z(Ie)), r === n && (r = null), i = la(), i !== n) {
			if (a = O, e.charCodeAt(O) === 46 ? (o = ".", O++) : (o = n, M === 0 && z(Ve)), o !== n) {
				if (s = [], c = e.charAt(O), v.test(c) ? O++ : (c = n, M === 0 && z(x)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(O), v.test(c) ? O++ : (c = n, M === 0 && z(x));
				else s = n;
				s === n ? (O = a, a = n) : (o = [o, s], a = o);
			} else O = a, a = n;
			a === n && (a = null), o = da(), o === n && (o = null), k = t, t = gr(a, o);
		} else O = t, t = n;
		return M--, t === n && (r = n, M === 0 && z(Et)), t;
	}
	function la() {
		let t, r, i, a;
		if (e.charCodeAt(O) === 48 ? (t = "0", O++) : (t = n, M === 0 && z(Dt)), t === n) {
			if (t = O, r = e.charAt(O), me.test(r) ? O++ : (r = n, M === 0 && z(Ot)), r !== n) {
				for (i = [], a = e.charAt(O), v.test(a) ? O++ : (a = n, M === 0 && z(x)); a !== n;) i.push(a), a = e.charAt(O), v.test(a) ? O++ : (a = n, M === 0 && z(x));
				r = [r, i], t = r;
			} else O = t, t = n;
		}
		return t;
	}
	function ua() {
		let t, r, i, a, o, s;
		if (M++, t = O, e.charCodeAt(O) === 48 ? (r = "0", O++) : (r = n, M === 0 && z(Dt)), r === n) {
			if (r = O, e.charCodeAt(O) === 45 ? (i = "-", O++) : (i = n, M === 0 && z(Ie)), i === n && (i = null), a = e.charAt(O), me.test(a) ? O++ : (a = n, M === 0 && z(Ot)), a !== n) {
				for (o = [], s = e.charAt(O), v.test(s) ? O++ : (s = n, M === 0 && z(x)); s !== n;) o.push(s), s = e.charAt(O), v.test(s) ? O++ : (s = n, M === 0 && z(x));
				i = [
					i,
					a,
					o
				], r = i;
			} else O = r, r = n;
		}
		return r !== n && (k = t, r = _r()), t = r, M--, t === n && (r = n, M === 0 && z(kt)), t;
	}
	function da() {
		let t, r, i, a, o;
		if (t = O, r = e.charAt(O), he.test(r) ? O++ : (r = n, M === 0 && z(At)), r !== n) {
			if (i = e.charAt(O), _.test(i) ? O++ : (i = n, M === 0 && z(Ae)), i === n && (i = null), a = [], o = e.charAt(O), v.test(o) ? O++ : (o = n, M === 0 && z(x)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(O), v.test(o) ? O++ : (o = n, M === 0 && z(x));
			else a = n;
			a === n ? (O = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else O = t, t = n;
		return t;
	}
	function fa() {
		let t, r, i, a;
		if (M++, t = O, e.charCodeAt(O) === 34 ? (r = "\"", O++) : (r = n, M === 0 && z(jt)), r !== n) {
			for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
			e.charCodeAt(O) === 34 ? (a = "\"", O++) : (a = n, M === 0 && z(jt)), a === n ? (O = t, t = n) : (k = t, t = vr(i));
		} else O = t, t = n;
		if (t === n) {
			if (t = O, e.charCodeAt(O) === 39 ? (r = "'", O++) : (r = n, M === 0 && z(Mt)), r !== n) {
				for (i = [], a = ma(); a !== n;) i.push(a), a = ma();
				e.charCodeAt(O) === 39 ? (a = "'", O++) : (a = n, M === 0 && z(Mt)), a === n ? (O = t, t = n) : (k = t, t = D(i));
			} else O = t, t = n;
		}
		return M--, t === n && (r = n, M === 0 && z(Me)), t;
	}
	function pa() {
		let t, r, i;
		return t = O, r = O, M++, i = e.charAt(O), ge.test(i) ? O++ : (i = n, M === 0 && z(Nt)), M--, i === n ? r = void 0 : (O = r, r = n), r === n ? (O = t, t = n) : (i = ha(), i === n ? (O = t, t = n) : (k = t, t = yr(i))), t === n && (t = O, e.charCodeAt(O) === 92 ? (r = "\\", O++) : (r = n, M === 0 && z(b)), r === n ? (O = t, t = n) : (e.charCodeAt(O) === 34 ? (i = "\"", O++) : (i = n, M === 0 && z(jt)), i === n ? (O = t, t = n) : (k = t, t = br())), t === n && (t = O, e.charCodeAt(O) === 92 ? (r = "\\", O++) : (r = n, M === 0 && z(b)), r === n ? (O = t, t = n) : (i = ga(), i === n ? (O = t, t = n) : (k = t, t = xr(i))))), t;
	}
	function ma() {
		let t, r, i;
		return t = O, r = O, M++, i = e.charAt(O), _e.test(i) ? O++ : (i = n, M === 0 && z(Pt)), M--, i === n ? r = void 0 : (O = r, r = n), r === n ? (O = t, t = n) : (i = ha(), i === n ? (O = t, t = n) : (k = t, t = Sr(i))), t === n && (t = O, e.charCodeAt(O) === 92 ? (r = "\\", O++) : (r = n, M === 0 && z(b)), r === n ? (O = t, t = n) : (e.charCodeAt(O) === 39 ? (i = "'", O++) : (i = n, M === 0 && z(Mt)), i === n ? (O = t, t = n) : (k = t, t = Cr())), t === n && (t = O, e.charCodeAt(O) === 92 ? (r = "\\", O++) : (r = n, M === 0 && z(b)), r === n ? (O = t, t = n) : (i = ga(), i === n ? (O = t, t = n) : (k = t, t = wr(i))))), t;
	}
	function ha() {
		let t, r, i, a;
		return t = e.charAt(O), ve.test(t) ? O++ : (t = n, M === 0 && z(Ft)), t === n && (t = O, r = O, i = e.charAt(O), fe.test(i) ? O++ : (i = n, M === 0 && z(wt)), i === n ? (O = r, r = n) : (a = e.charAt(O), pe.test(a) ? O++ : (a = n, M === 0 && z(Tt)), a === n ? (O = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, O)), t;
	}
	function ga() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = O, e.charCodeAt(O) === 92 ? (r = "\\", O++) : (r = n, M === 0 && z(b)), r !== n && (k = t, r = Tr()), t = r, t === n && (t = O, e.charCodeAt(O) === 47 ? (r = "/", O++) : (r = n, M === 0 && z(yt)), r !== n && (k = t, r = Er()), t = r, t === n && (t = O, e.charCodeAt(O) === 98 ? (r = "b", O++) : (r = n, M === 0 && z(It)), r !== n && (k = t, r = Dr()), t = r, t === n && (t = O, e.charCodeAt(O) === 102 ? (r = "f", O++) : (r = n, M === 0 && z(Lt)), r !== n && (k = t, r = Or()), t = r, t === n && (t = O, e.charCodeAt(O) === 110 ? (r = "n", O++) : (r = n, M === 0 && z(Rt)), r !== n && (k = t, r = kr()), t = r, t === n && (t = O, e.charCodeAt(O) === 114 ? (r = "r", O++) : (r = n, M === 0 && z(zt)), r !== n && (k = t, r = Ar()), t = r, t === n && (t = O, e.charCodeAt(O) === 116 ? (r = "t", O++) : (r = n, M === 0 && z(Bt)), r !== n && (k = t, r = jr()), t = r, t === n && (t = O, e.charCodeAt(O) === 117 ? (r = "u", O++) : (r = n, M === 0 && z(Vt)), r === n ? (O = t, t = n) : (i = O, a = O, o = e.charAt(O), ye.test(o) ? O++ : (o = n, M === 0 && z(Ht)), o === n ? (O = a, a = n) : (s = e.charAt(O), be.test(s) ? O++ : (s = n, M === 0 && z(Ut)), s === n ? (O = a, a = n) : (c = X(), c === n ? (O = a, a = n) : (l = X(), l === n ? (O = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, O), i === n ? (O = t, t = n) : (e.substr(O, 2) === "\\u" ? (a = "\\u", O += 2) : (a = n, M === 0 && z(Wt)), a === n ? (O = t, t = n) : (o = O, s = O, c = e.charAt(O), ye.test(c) ? O++ : (c = n, M === 0 && z(Ht)), c === n ? (O = s, s = n) : (l = e.charAt(O), xe.test(l) ? O++ : (l = n, M === 0 && z(Gt)), l === n ? (O = s, s = n) : (u = X(), u === n ? (O = s, s = n) : (d = X(), d === n ? (O = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, O), o === n ? (O = t, t = n) : (k = t, t = Mr(i, o))))), t === n && (t = O, e.charCodeAt(O) === 117 ? (r = "u", O++) : (r = n, M === 0 && z(Vt)), r === n ? (O = t, t = n) : (i = O, a = O, o = X(), o === n ? (O = a, a = n) : (s = X(), s === n ? (O = a, a = n) : (c = X(), c === n ? (O = a, a = n) : (l = X(), l === n ? (O = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, O), i === n ? (O = t, t = n) : (k = O, a = Nr(i), a = a ? n : void 0, a === n ? (O = t, t = n) : (k = t, t = Pr(i)))))))))))), t;
	}
	function X() {
		let t;
		return t = e.charAt(O), Se.test(t) ? O++ : (t = n, M === 0 && z(Kt)), t;
	}
	function Z() {
		let t;
		return t = e.charAt(O), se.test(t) ? O++ : (t = n, M === 0 && z(Fe)), t;
	}
	function Q() {
		let t, r;
		for (M++, t = [], r = e.charAt(O), Ce.test(r) ? O++ : (r = n, M === 0 && z(qt)); r !== n;) t.push(r), r = e.charAt(O), Ce.test(r) ? O++ : (r = n, M === 0 && z(qt));
		return M--, t;
	}
	function _a() {
		let t, r;
		return t = O, M++, e.length > O ? (r = e.charAt(O), O++) : (r = n, M === 0 && z(xt)), M--, r === n ? t = void 0 : (O = t, t = n), t;
	}
	function va(e) {
		return e.length > 1e3 && P("Member name too long (maximum 1000 characters)"), e;
	}
	N = a();
	let ya = N !== n && O === e.length;
	function $() {
		throw N !== n && O < e.length && z(Br()), Ur(j, A < e.length ? Rr(A) : null, A < e.length ? Vr(A, A + 1) : Vr(A, A));
	}
	if (t.peg$library) return {
		peg$result: N,
		peg$currPos: O,
		peg$FAILED: n,
		peg$maxFailExpected: j,
		peg$maxFailPos: A,
		peg$success: ya,
		peg$throw: ya ? void 0 : $
	};
	if (ya) return N;
	$();
}
var J = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), ta = {
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
}, Y = (e) => {
	throw new Ri(1, 1, e);
}, na = (e) => e.type === "root" || e.type === "current", ra = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function ia(e) {
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
		if (na(i)) r === "value" && !ra(i) && Y("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && Y(`Expected a query, found ${String(i.type)}`), i.type) {
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
				let e = J.has(i.operator) ? "value" : "any";
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
				let e = i.name, n = ta[e], a = i.args;
				a.length !== n.args.length && Y(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && Y(`The result of ${e}() must be compared`), r === "value" && n.logical && Y(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
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
			case "value": r === "test" && Y("A literal must be compared");
		}
	}
}
function aa(e) {
	let t;
	try {
		t = ea(e);
	} catch (e) {
		if (Ki(e)) throw new Ri(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new Ri(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new Ri(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return ia(t), t;
}
var oa = /* @__PURE__ */ new Set([
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
]), sa = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), ca = (e) => e >= 55296 && e <= 56319, la = (e) => e >= 56320 && e <= 57343, ua = (e) => e !== void 0 && e >= "0" && e <= "9", da = (e, t) => {
	let n = e.charCodeAt(t);
	return ca(n) && la(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : ca(n) || la(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, fa = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !oa.has(n) ? null : n === "n" ? {
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
}, pa = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return sa.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, ma = (e, t) => {
	let n = e[t];
	return n === "\\" ? fa(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : da(e, t);
}, ha = (e, t) => {
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
			let t = pa(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = ma(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = ma(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, ga = (e, t) => {
	let n = t + 1, r = n;
	for (; ua(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; ua(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, X = (e) => {
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
				let e = i ? ga(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = ha(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = pa(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = fa(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = da(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, Z = 1e3, Q = 1e3, _a = 16, va = /^[dgimsuy]*$/, ya = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, $ = class extends Error {}, ba = 0, xa = 1, Sa = 2, Ca = 3, wa = 4, Ta = 5, Ea = Fi(2, 31) - 1, Da = (e, t) => {
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
	return e.scratch = void 0, (r.gen > Ea - t - 2 || r.step > Ea - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, Oa = /* @__PURE__ */ new Set([
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
]), ka = /^\{(\d+)(?:,(\d*))?\}/, Aa = /^[0-9a-fA-F]{4}/, ja = /^\(\?([ims]*)(?:-([ims]*))?:/, Ma = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, Na = class {
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
		if (this.i < this.src.length) throw new $("unexpected character");
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
				let r = ja.exec(e.slice(t, t + 12));
				if (!r) throw new $("lookaround or named group");
				let i = Li({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new $("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new $("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new $("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(Oa.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new $("trailing backslash");
		if (r === "b" || r === "B") throw new $("word boundary");
		if (r >= "1" && r <= "9") throw new $("backreference");
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
			if (n === -1) throw new $("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && Aa.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (Aa.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
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
			let n = ka.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > Z || i !== Infinity && i > Z) throw new $("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, Pa = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= Z) throw new $("pattern too large");
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
		this.emit(Ta);
	}
	compile(e) {
		if (++this.work > 4 * Z) throw new $("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(ba, this.atomId(e));
				return;
			case "bol":
				this.emit(Ca, +!!e.multiline);
				return;
			case "eol":
				this.emit(wa, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(xa);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(Sa)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(xa);
					this.x[t] = t + 1, this.compile(e.node), this.emit(Sa, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(xa);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, Fa = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new Na(e, r, t, n).parse(), a = new Pa(r);
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
}, Ia = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, ie = !1, ae = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case ba:
					e[n++] = r;
					break;
				case Ta: return u(c), ie = !0, n;
				case Sa:
					h[s++] = a[r];
					break;
				case xa:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case Ca:
					(_ === 0 || a[r] === 1 && Ma(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case wa: (_ === t.length || a[r] === 1 && Ma(t.charCodeAt(_))) && (h[s++] = r + 1);
			}
		}
		return u(c), n;
	};
	if (g++, p = ae(d, 0, 0), ie) return !0;
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
			if (ne[i] === 1 && (m = ae(f, m, t + 1), ie)) return !0;
		}
		if (!l && (m = ae(f, m, 0), ie)) return !0;
		let i = d;
		d = f, f = i, p = m;
	}
	return !1;
}, La = (e, t, n) => {
	let r = Da(e, t.length);
	try {
		return Ia(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, Ra = 256, za = /* @__PURE__ */ new Map(), Ba = 0, Va = (e, t, n, r, i = !1) => {
	if (e.length > Q || t.length > 7 || !va.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = za.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = ya(s) > _a ? null : Fa(n ? `^(?:${s})$` : s, t, i);
	Ba >= Ra && (za.clear(), Ba = 0);
	let l = za.get(s);
	return l === void 0 && za.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), Ba++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, Ha = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), La(e, t, n);
}, Ua = class {
	constructor(e) {
		this.nodes = e;
	}
}, Wa = (e) => {
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
}, Ga = (e) => {
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
	return !Wa(e);
}, Ka = 256, qa = /* @__PURE__ */ new Map(), Ja = (e, t) => {
	let n = qa.get(e);
	return n === void 0 && (n = Ga(e), qa.size >= Ka && qa.clear(), qa.set(Array.from(e).join(""), n)), t(e.length), n;
}, Ya = /* @__PURE__ */ new Map(), Xa = (e, t) => {
	let n = Ya.get(e);
	return n === void 0 && (n = X(e), n !== null && (n = Array.from(n).join("")), Ya.size >= Ka && Ya.clear(), Ya.set(Array.from(e).join(""), n)), t(e.length), n;
}, Za = 256, Qa = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > Q) c = null;
		else if (o) {
			let n = Xa(e, i);
			c = n === null ? null : Va(n, t, r, i, !0);
		} else c = Ja(e, i) ? Va(e, t, r, i) : null;
		s !== void 0 && (s.size >= Za && s.clear(), s.set(a, c));
	}
	return c !== null && Ha(c, n, i);
}, $a = {
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
			let e = Gi(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !K(r) || !K(i) ? !1 : Qa(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !K(r) || !K(i) ? !1 : Qa(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, eo = (e, t, n = V) => e === void 0 && t === void 0 || Vi(e, t, n), to = (e, t, n = V) => !Vi(e, t, n), no = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, ro = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return no(n) - no(i);
	}
	return e.length - t.length;
}, io = (e, t, n = V) => Ji(e) && Ji(t) ? e < t : K(e) && K(t) ? (n(Math.min(e.length, t.length)), ro(e, t) < 0) : !1, ao = (e, t, n = V) => io(e, t, n) || eo(e, t, n), oo = (e, t, n = V) => Ji(e) && Ji(t) ? e > t : K(e) && K(t) ? (n(Math.min(e.length, t.length)), ro(e, t) > 0) : !1, so = (e, t, n = V) => oo(e, t, n) || eo(e, t, n), co = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, lo = (e, t, n) => {
	let r = U(e);
	for (let i = 0; i < r; i++) {
		let r = Hi(e, i);
		if (n(1 + co(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, uo = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, fo = (e) => typeof e == "string" && e.length + 1 > Ui, po = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = U(e);
	for (let n = 0; n < a; n++) {
		let r = Hi(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), fo(r) ? i.long.push(r) : i.set.add(uo(r));
	}
	return n?.set(e, i), i;
}, mo = ({ set: e, long: t }, n, r) => {
	if (fo(n)) {
		for (let e of t) if (r(1 + co(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(uo(n)));
}, ho = (e, t, n) => {
	let r = U(e);
	for (let i = 0; i < r; i++) if (n(), H(e, i) && t(e[i])) return !0;
	return !1;
}, go = {
	eq: eo,
	ne: to,
	lt: io,
	le: ao,
	gt: oo,
	ge: so,
	in: (e, t, n = V) => W(t) ? lo(t, e, n) !== -1 : !1,
	nin: (e, t, n = V) => W(t) ? lo(t, e, n) === -1 : !1,
	subsetof: (e, t, n = V, r) => {
		if (!W(e) || !W(t)) return !1;
		let i = po(t, n, r);
		return !ho(e, (e) => !mo(i, e, n), n);
	},
	anyof: (e, t, n = V, r) => {
		if (!W(e) || !W(t)) return !1;
		let i = po(t, n, r);
		return ho(e, (e) => mo(i, e, n), n);
	},
	noneof: (e, t, n = V, r) => {
		if (!W(e) || !W(t)) return !1;
		let i = po(t, n, r);
		return !ho(e, (e) => mo(i, e, n), n);
	},
	sizeof: (e, t) => !W(e) && !K(e) || !W(t) && !K(t) ? !1 : (W(e) ? U(e) : e.length) === (W(t) ? U(t) : t.length),
	size: (e, t) => !W(e) && !K(e) || !Ji(t) ? !1 : (W(e) ? U(e) : e.length) === t
}, _o = (e) => !W(e) && !K(e) ? !1 : (W(e) ? U(e) : e.length) === 0, vo = (e, t, n, r = V, i) => !K(e) || !K(t) ? !1 : Qa(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), yo = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), bo = (e, t) => e.concat(`[${t}]`), xo = (e, t) => e < 0 ? t + e : e, So = (e, t) => {
	let n = U(e), r = xo(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: H(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, Co = (e, t) => {
	for (let n of t) e.push(n);
}, wo = 1e6, To = 100, Eo = 1e6, Do = 20, Oo = 1e4, ko = 1e4, Ao = class {
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
					H(n, r) && this.visit(n[r]);
				} else if (H(n, t)) this.visit(n[t]);
				else if (++e.holes > ko) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!H(n, r)) continue;
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
}, jo = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, yo(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = yo(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = U(e);
			for (let r = 0; r < n; r++) this.tick(), H(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Ao(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Oo, Math.ceil((this.retained - this.retainedLimit) / Do))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new zi(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(wo, To * e.weight) + t, this.retainedLimit = Math.max(Eo, Do * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Ao(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Oo, Math.ceil((this.steps - this.stepLimit) / To))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new zi(`Query exceeded ${this.stepLimit} evaluation steps`);
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
			if (H(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (W(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: bo(t, r)
					});
				}), n;
			}
			if (G(e)) {
				let n = Gi(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) H(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!W(e)) return;
			let r = So(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: bo(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (W(e)) {
				let r = So(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: bo(t, r.index)
				} : void 0;
			}
			if (G(e)) {
				let r = String(n.value);
				return H(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!W(e)) return [];
			let r = U(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : xo(n.start, r), o = n.end === null ? r : xo(n.end, r)) : (a = n.start === null ? r - 1 : xo(n.start, r), o = n.end === null ? -r - 1 : xo(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: H(e, u) ? e[u] : void 0,
				paths: bo(t, u)
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
					Co(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": Co(n, this.handleBracketExpressionContent(e, r));
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
						Co(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						Co(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						q(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (G(e)) {
					let t = Gi(e);
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
						if (!H(n, t)) continue;
						a = {
							value: n[t],
							paths: bo(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!H(n, r)) continue;
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
						if (!Ji(i) || !Ji(r)) i = void 0;
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
					return Ji(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return _o(n);
			if (t.operator === "reg") return vo(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = go[t.operator];
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
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new Ua(r.value) : new Ua(q(r?.value) ? [r?.value] : []);
			}), i = $a[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
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
							paths: bo(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (G(n)) {
						let i = Gi(n);
						this.tick(i.length);
						for (let a of i) {
							if (!H(n, a)) continue;
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
				if (o === null) Co(n, a);
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
				throw Ki(e) ? new zi("Query is nested too deeply") : qi(e) ? new zi("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? wo, this.retainedLimit = this.adaptiveLimit ? Eo : Infinity;
	}
}, Mo = (e, t, n) => {
	let r = aa(t), i = new jo(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Yi(i) ? [] : [i.value] : i?.value;
}, No = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = Mo(e, i, n);
		q(t) && r.push(t);
	}
	return r;
}, Po = (e, t, n = {}) => {
	try {
		return W(t) ? No(e, t, n) : Mo(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, Fo = (e) => typeof e == "object" && !!e && !Array.isArray(e), Io = (e, t) => {
	if (!Fo(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Uo(t, i);
	return n;
}, Lo = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Uo(t, e));
}, Ro = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, zo = (e, t) => Ro(e, t), Bo = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Vo = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, Ho = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Vo,
		applyTemplate: e
	});
}, Uo = (e, t, n) => {
	let r = e, i = t;
	Bo(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Ro(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = zo(a?.textContent, r)), "attributes" in a && (a.attributes = Io(a?.attributes, r)), "children" in a && (a.children = Lo(a?.children, r))), a);
};
Ho(Uo);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var Wo = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, Go = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
};
((e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: Go,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
})((e, t) => {
	let n = e;
	return Wo(n, t), n.map((e) => Uo(e, e[t]));
}, (e, t) => {
	let n = e, r = t;
	return Wo(n, r), n.map((e) => Uo(e, r));
});
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs/src/v24/findByRole.js
var Ko = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = Ko(n, t);
		if (e) return e;
	}
	return null;
}, qo = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = Po(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = Ko(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
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
}, Jo = (e, t, n, r) => {
	let { parent: i, key: a } = qo(e, t, r);
	return (Ai[t.action] || ki)(i, a, n), e;
}, Yo = (e) => typeof e == "object" && !!e && !Array.isArray(e), Xo = (e, t) => {
	if (!Yo(e)) return null;
	if (e[t] !== void 0) return e[t];
	let n = `show${t.charAt(0).toUpperCase()}${t.slice(1)}`;
	return e[n] === void 0 ? null : e[n];
}, Zo = (e, t) => {
	let n = Dt[e];
	if (n) for (let e of n) {
		if (e.skipIf && Po(t, e.skipIf, { returnArray: !0 }).length > 0) continue;
		let n = Tt[e.templateKey];
		try {
			Jo({ base: t }, e.destinationPath, n);
		} catch {}
	}
}, Qo = ({ options: e = {}, optionDefs: t = {}, base: n, showLog: r = !1 } = {}) => {
	if (!n || !Yo(e) || !Yo(t)) return n;
	for (let [r, i] of Object.entries(t)) {
		if (!Yo(i)) continue;
		let t = Xo(e, r);
		if (!t) continue;
		let a = typeof t == "boolean" && t === !0, o = Yo(t);
		if ((a || o) && Object.entries(i).some(([e]) => e !== "initialize" && (a || t[e] === !0))) {
			i.initialize && Zo(i.initialize, n);
			for (let [e, r] of Object.entries(i)) e !== "initialize" && (a || t[e] === !0) && Zo(r, n);
		}
	}
	return n;
}, $o = {
	name: "json-renderers-run-instructions",
	version: "1.14.1"
}, es = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.render = {
		meta: $o,
		renderFunc: e
	});
}, ts = ({ instructionMainKey: e, instructionSubKey: t, data: n, options: r, showLog: i = !1 } = {}) => {
	let a = wt[e]?.[t];
	if (!a) throw Error(`Definition not found: ${e}.${t}`);
	let o = structuredClone(Tt[a.baseFromSpec]);
	return Di({
		instructions: a.instructions ?? [],
		base: o,
		data: n,
		showLog: i
	}), Qo({
		options: r,
		optionDefs: a.options && typeof a.options == "object" ? a.options : wt[e]?.options ?? {},
		base: o,
		data: n,
		showLog: i
	}), o;
};
es(ts);
// src/v57/index.js
var ns = (e) => {
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
}, rs = (e = {}) => {
	p(e);
	let t = e?.showLog, n = (e.type || "").split("."), r = n.length > 1 ? n[0] : "table", i = n.length > 1 ? n[1] : n[0] || "simple", a = ns(e?.options);
	return ke({
		jsonSpec: ts({
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
}, is = (e = {}) => {
	let t = typeof e.container == "string" ? document.getElementById(e.container) : e.container, n = (n) => {
		if (!t) return;
		let r = t.querySelector("#table-content-container") || t.querySelector("table")?.parentElement || t;
		if (!r) return;
		let i = r.id || "table-content-container";
		r.id ||= i;
		let a = "table.bodyOnly";
		console.log("tableType : ", a), rs({
			data: n,
			columns: e.columns,
			targetHtmlId: i,
			appendPosition: "replace",
			type: a,
			options: e.options,
			classToApply: "",
			showLog: !1
		});
	};
	return xt({
		...e,
		renderTable: e.renderTable || n
	});
};
Ct({
	render: rs,
	hookEvents: is
});
export { rs as default, rs as render, is as hookEvents };
