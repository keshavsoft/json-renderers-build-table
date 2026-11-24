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
}, v = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName;
	return !o || typeof o != "string" || o.trim() === "" ? (a.push({ reason: "Missing or empty 'tagName'" }), !1) : i && typeof i == "object" && !(i[o] || Object.keys(i).includes(o)) ? (a.push({
		tagName: o,
		reason: `Unrecognized tagName '${o}' not found in spec catalog`
	}), !1) : !0;
}, ie = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsTextContent === !1 && r.textContent ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow direct textContent`
	}), !1) : !0;
}, ae = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsChildren === !1 && Array.isArray(r.children) && r.children.length > 0 ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow children (void element)`
	}), !1) : "children" in r && !Array.isArray(r.children) ? (a.push({
		tagName: o,
		reason: "'children' must be an array"
	}), !1) : !0;
}, oe = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && Array.isArray(s.childTags) && s.childTags.length > 0 && Array.isArray(r.children) && r.children.forEach((e) => {
		e && e.tagName && !s.childTags.includes(e.tagName) && a.push({
			tagName: e.tagName,
			reason: `Tag '${e.tagName}' is not an allowed child of '${o}' (allowed: ${s.childTags.join(", ")})`
		});
	}), !0;
}, se = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t, i = n.tagName;
	return "attributes" in n && (!n.attributes || typeof n.attributes != "object" || Array.isArray(n.attributes)) ? (r.push({
		tagName: i,
		reason: "'attributes' must be a key-value object"
	}), !1) : !0;
}, ce = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n;
	_({
		inNode: r,
		inErrors: a
	}) && (v({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), ie({
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
		inErrors: a
	}));
}, le = {
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
}, ue = {
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
}, de = {
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
}, fe = {
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
}, y = {
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
}, pe = {
	name: "spec-repo",
	version: "1.17.1"
};
// node_modules/spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: pe,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: ue,
	tags: de,
	tagsSchema: fe,
	instructions: y,
	definitions: le
});
// node_modules/json-to-tag-validate/src/v4/index.js
function me({ inJson: e, inCatalog: t, inSpec: n }) {
	let r = e, i = t ?? n ?? de, a = [];
	return re({
		inSpec: r,
		inFunc: (e) => {
			ce({
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
var he = "http://www.w3.org/2000/svg", ge = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), _e = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return ge.has(t) ? document.createElementNS(he, t) : document.createElement(t);
}, ve = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), ye = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), be = "http://www.w3.org/1999/xlink", xe = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(be, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, Se = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, Ce = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = _e({ inTagName: e.tagName });
	return t ? (ve({
		inElement: t,
		inTextContent: e.textContent,
		inTagName: e.tagName
	}), ye({
		inElement: t,
		inProperties: e.properties
	}), xe({
		inElement: t,
		inAttributes: e.attributes
	}), Se({
		inElement: t,
		inClassList: e.classList
	}), t) : null;
}, we = (e = {}) => re({
	inSpec: e?.spec ?? e?.inSpec ?? e,
	inFunc: Ce
});
te({
	buildSpecElement: we,
	buildSpecElementWithValidate: (e = {}) => {
		let t = e?.spec ?? e?.inSpec ?? e, n = me({ inJson: t });
		return n.isValid || console.warn("[json-to-tag] Specification validation issues:", n.errors), re({
			inSpec: t,
			inFunc: Ce
		});
	}
});
// node_modules/spec-to-dom/src/v2/register/meta.js
var Te = {
	version: "2.1.1",
	name: "spec-to-dom"
}, Ee = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.specToDom = {
		meta: Te,
		appendToDom: e
	});
}, De = ({ buildSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => {
	let i = e, a = t, o = n, s = r;
	s && console.log("renderToDom 1 (content):", i);
	let c = document.getElementById(a);
	return c ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? o === "prepend" ? c.prepend(...i) : c.append(...i) : o === "prepend" ? c.prepend(i) : (c.innerHTML = "", c.append(i)), s && console.log("renderToDom 2 (mounted):", c), c) : null;
};
Ee(De);
// node_modules/@keshavsoft/json-to-dom/src/v42/index.js
var Oe = ({ jsonSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => De({
	buildSpec: we(e),
	targetHtmlId: t,
	appendPosition: n,
	showLog: r
});
ee(Oe);
// node_modules/json-renderers-build-table-events/src/v2/state.js
var ke = ({ container: e, dataset: t = [], columns: n = [], options: r = {}, renderTable: i = null, onSearch: a = null, onRowClick: o = null, onRowAction: s = null, onSave: c = null, showLog: l = !1 } = {}) => ({
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
}), Ae = [
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
], je = {
	version: "1.19.1",
	name: "dom-primitive-engine"
}, Me = (e) => {
	e && typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.domPrimitive ??= {}, globalThis.ks.domPrimitive.engine = {
		meta: je,
		runInstructions: e
	});
}, Ne = ({ element: e, previousResult: t, instruction: n, clientData: r }) => {
	let i = n.sourcePath.fileName;
	if (i === "root") return e;
	if (i === "previous") return t;
	if (i === "clientData") return r;
}, Pe = (e, t) => {
	let n = e.arguments ?? {}, r = n.columns ?? t.columns, i = n.options ?? t.options, a = n.data ?? t.data;
	return {
		...n,
		columns: r,
		options: i,
		data: a
	};
}, Fe = ({ element: e, previousResult: t, instruction: n, clientData: r, operations: i }) => {
	let a = Ne({
		element: e,
		previousResult: t,
		instruction: n,
		clientData: r
	}), o = Pe(n, r), s = i[n.func] ?? r[n.func] ?? r?.functions?.[n.func];
	if (typeof s != "function") throw TypeError(`Unknown primitive operation: "${n.func}"`);
	return s(a, o, r);
}, Ie = (e, t, n) => {
	let r = e, i = t.selector;
	return r.closest(i);
}, Le = (e, t, n) => {
	let r = e, i = t.selector;
	return !r || typeof r.querySelector != "function" ? null : r.querySelector(i);
}, Re = (e, t, n) => {
	let r = e, i = t.selector;
	return Array.from(r.querySelectorAll(i));
}, ze = /* @__PURE__ */ t({
	closest: () => Ie,
	querySelector: () => Le,
	querySelectorAll: () => Re
}), Be = (e, t, n) => {
	let r = e, i = t.trim ?? !0, a = r.textContent ?? "";
	return i ? a.trim() : a;
}, Ve = (e, t, n) => {
	let r = e, i = r.tagName?.toLowerCase(), a = r.type?.toLowerCase();
	return a === "checkbox" ? r.checked ? r.value || !0 : !1 : a === "radio" ? r.checked ? r.value : void 0 : i === "select" && r.multiple ? Array.from(r.selectedOptions, (e) => e.value) : "value" in r && i !== "button" ? r.value : r.textContent?.trim() ?? "";
}, He = (e, t, n) => {
	let r = e, i = t.columns ?? n.columns ?? [], a = t.read ?? "text", o = {};
	return r.forEach((e, t) => {
		let r = i[t];
		if (!r) return;
		let s = a === "value" ? Ve(e, {}, n) : Be(e, {}, n);
		o[r] = s;
	}), o;
}, Ue = (e, t, n) => {
	let r = e, i = {};
	return r.forEach((e) => {
		let t = e.name;
		if (!t) return;
		let r = Ve(e, {}, n);
		(e.type?.toLowerCase() !== "radio" || r !== void 0) && (Object.hasOwn(i, t) ? (Array.isArray(i[t]) || (i[t] = [i[t]]), i[t].push(r)) : i[t] = r);
	}), i;
}, We = /* @__PURE__ */ t({
	mapNamedValues: () => Ue,
	mapValues: () => He,
	readText: () => Be,
	readValue: () => Ve
}), Ge = (e, t, n) => {
	let r = t?.key ?? "Enter", i = e && typeof e == "object" && "key" in e ? e : t?.event ?? n?.event;
	return !i || i.key !== r ? null : i.target ?? i.currentTarget ?? e;
}, Ke = /* @__PURE__ */ t({ isKey: () => Ge }), qe = {
	...ze,
	...We,
	...Ke
}, Je = (e, t, n = {}) => {
	let r = e;
	for (let i of t) {
		if (r === null) return null;
		r = Fe({
			element: e,
			previousResult: r,
			instruction: i,
			clientData: n,
			operations: qe
		});
	}
	return r;
}, Ye = Je;
Me(Je);
// node_modules/dom-traversal-functions/src/v3/table/header/instructions.json
var Xe = [{
	narration: "Find search input control if event came from within header container",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "input, form, div" }
}, {
	narration: "Read search query value from input",
	sourcePath: { fileName: "previous" },
	func: "readValue"
}], Ze = (e) => e ? (Ye(e.target || e, Xe) || "").trim().toLowerCase() : "", Qe = /* @__PURE__ */ t({
	default: () => Ze,
	getSearchQuery: () => Ze,
	instructions: () => Xe
}), $e = (e) => e ? e.tagName === "TR" ? e : e.closest("tr") || null : null, et = (e, t = "") => {
	let n = $e(e);
	if (!n) return -1;
	if (t) return Array.from(document.querySelectorAll(t)).indexOf(n);
	let r = n.closest("tbody");
	if (r) return Array.from(r.querySelectorAll(":scope > tr")).indexOf(n);
	let i = n.parentElement;
	return i ? Array.from(i.children).filter((e) => e.tagName === "TR").indexOf(n) : -1;
}, tt = (e, t = "table-primary", n = "") => {
	let r = $e(e);
	if (!r) return null;
	let i = [];
	if (n) i = Array.from(document.querySelectorAll(n));
	else {
		let e = r.closest("tbody") || r.parentElement;
		e && (i = Array.from(e.querySelectorAll(":scope > tr")));
	}
	return i.forEach((e) => e.classList.remove(t)), r.classList.add(t), r;
}, nt = [
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
], rt = (e, { columns: t = [], dataset: n = [], bodySelector: r = "" } = {}) => {
	let i = $e(e);
	if (!i) return null;
	let a = et(i, r);
	return n && Array.isArray(n) && a >= 0 && a < n.length ? n[a] : Ye(i, nt, { columns: t.map((e) => typeof e == "string" ? e : e.columnName || e.field) }) || {};
}, it = /* @__PURE__ */ t({
	getRowData: () => rt,
	getRowElement: () => $e,
	getRowIndex: () => et,
	highlightRow: () => tt,
	instructions: () => nt
}), at = [
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
], ot = (e, t = []) => {
	let n = $e(e);
	if (!n) return {};
	let r = Ye(n, at);
	if (r && typeof r == "object" && Object.keys(r).length > 0) return r;
	let i = {};
	return t && t.length > 0 && t.forEach((e) => {
		let t = typeof e == "string" ? e : e.columnName || e.field, r = n.querySelector(`input[name="${t}"], select[name="${t}"]`) || n.querySelector(`input#${t}, select#${t}`);
		r && (i[t] = r.value.trim());
	}), i;
}, st = (e) => {
	let t = $e(e);
	if (!t) return 0;
	let n = Array.from(t.querySelectorAll("input"));
	return n.forEach((e) => {
		e.value = "";
	}), n.length;
}, b = {
	header: Qe,
	body: it,
	footer: /* @__PURE__ */ t({
		clearRowInputs: () => st,
		getFooterData: () => ot,
		instructions: () => at
	})
}, ct = {
	name: "dom-traversal-functions",
	version: "1.3.1"
};
// node_modules/dom-traversal-functions/src/v3/index.js
((e) => {
	let t = e;
	typeof globalThis < "u" && t && (globalThis.ks ??= {}, globalThis.ks.domTraversal ??= {}, globalThis.ks.domTraversal = {
		meta: ct,
		...t
	});
})({ table: b });
// node_modules/json-renderers-build-table-events/src/v2/actions/onSearch/instructions.json
var lt = [{
	narration: "From search input, find component container",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "[data-role='table-parent'], .card-body, .container, div" }
}, {
	narration: "Locate search feedback display element",
	sourcePath: { fileName: "previous" },
	func: "querySelector",
	arguments: { selector: "#search-feedback, [data-role='search-feedback']" }
}], ut = (e, t, n) => {
	let r = b?.header?.getSearchQuery ? b.header.getSearchQuery(t) : (t?.value || "").trim().toLowerCase(), i = r ? n.dataset.filter((e) => Object.values(e).some((e) => String(e ?? "").toLowerCase().includes(r))) : n.dataset;
	n.filteredData = i, typeof n.renderTable == "function" && n.renderTable(i);
	let a = Ye(t, lt);
	a && (a.textContent = r ? `Showing ${i.length} of ${n.dataset.length} records matching "${t.value.trim()}".` : `Showing all ${n.dataset.length} records.`), typeof n.onSearch == "function" && n.onSearch(r, i);
}, dt = [{
	narration: "From clicked element, traverse to closest tbody table row",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "tbody tr" }
}], ft = (e, t, n) => {
	let r = Ye(t, dt);
	if (!r || !n.container.contains(r)) return;
	r.parentElement?.querySelectorAll("tr.table-primary, tr.table-active").forEach((e) => {
		e.classList.remove("table-primary", "table-active");
	}), r.classList.add("table-primary");
	let i = b?.body?.getRowIndex ? b.body.getRowIndex(r) : Array.from(r.parentElement.children).indexOf(r), a = n.filteredData[i] || n.dataset[i];
	n.selectedIndex = i, typeof n.onRowClick == "function" && a && n.onRowClick(a, i);
}, pt = [{
	narration: "From clicked button, traverse to closest tbody table row",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "tbody tr" }
}], mt = (e, t, n) => {
	e.stopPropagation();
	let r = t.closest("button"), i = Ye(t, pt);
	if (!r || !i || !n.container.contains(i)) return;
	i.parentElement?.querySelectorAll("tr.table-primary, tr.table-active").forEach((e) => {
		e.classList.remove("table-primary", "table-active");
	}), i.classList.add("table-primary");
	let a = b?.body?.getRowIndex ? b.body.getRowIndex(i) : Array.from(i.parentElement.children).indexOf(i), o = n.filteredData[a] || n.dataset[a];
	n.selectedIndex = a;
	let s = r.dataset.action || r.textContent.trim().toLowerCase() || "show";
	typeof n.onRowAction == "function" && o && n.onRowAction(s, o, a);
}, ht = [{
	narration: "From clicked save button, traverse to closest tfoot row",
	sourcePath: { fileName: "root" },
	func: "closest",
	arguments: { selector: "tfoot tr" }
}], gt = (e, t, n) => {
	let r = Ye(t, ht);
	if (!r || !n.container.contains(r)) return;
	let i = b?.footer?.getFooterData ? b.footer.getFooterData(r, n.columns) : {};
	i && Object.keys(i).length !== 0 || r.querySelectorAll("input, select").forEach((e) => {
		let t = e.id || e.name;
		t && (i[t] = e.value);
	}), b?.footer?.clearRowInputs ? b.footer.clearRowInputs(r) : r.querySelectorAll("input").forEach((e) => e.value = ""), n.dataset.push(i), n.filteredData.push(i), typeof n.renderTable == "function" && n.renderTable(n.filteredData), typeof n.onSave == "function" && n.onSave(i, n.dataset);
}, _t = /* @__PURE__ */ t({
	onFooterSave: () => gt,
	onRowAction: () => mt,
	onRowClick: () => ft,
	onSearch: () => ut
}), vt = (e, t) => {
	e.addEventListener("input", (n) => {
		for (let r of Ae) {
			if (r.event !== "input") continue;
			let i = n.target.closest(r.selector);
			if (i && e.contains(i)) {
				let e = _t[r.action];
				typeof e == "function" && e(n, i, t);
				return;
			}
		}
	}), e.addEventListener("click", (n) => {
		for (let r of Ae) {
			if (r.event !== "click") continue;
			let i = n.target.closest(r.selector);
			if (i && e.contains(i)) {
				let e = _t[r.action];
				typeof e == "function" && e(n, i, t);
				return;
			}
		}
	});
}, yt = {
	name: "json-renderers-build-table-events",
	version: "v1"
}, x = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.build ??= {}, globalThis.ks.jsonRenderers.build.tableEvents = {
		meta: yt,
		...e
	});
}, bt = (e = {}) => {
	let t = typeof e.container == "string" ? document.getElementById(e.container) : e.container;
	if (!t) return e.showLog && console.warn("[json-renderers-build-table-events] Container not found:", e.container), null;
	let n = ke({
		...e,
		container: t
	});
	return vt(t, n), { getState: () => ({ ...n }) };
};
x({ hookTableEvents: bt });
// src/v57/registerGlobal/meta.js
var xt = {
	name: "json-renderers-build-table",
	version: "1.57.0"
}, St = ({ render: e, hookEvents: t }) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.build ??= {}, globalThis.ks.jsonRenderers.build.table = {
		meta: xt,
		render: e,
		hookEvents: t
	});
}, Ct = {
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
}, wt = {
	name: "declarative-definitions",
	version: "1.0.1"
};
// ../json-renderers-run-instructions/node_modules/declarative-definitions/src/v2/index.js
((e) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.declarative ??= {}, globalThis.ks.declarative.definitions = {
		meta: wt,
		data: e
	});
})(Ct);
var S = {
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
}, Tt = {
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
}, Et = {
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
}, Dt = {
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
}, Ot = {
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
}, kt = {
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
}, At = {
	name: "spec-repo",
	version: "1.17.1"
};
// ../json-renderers-run-instructions-steps/node_modules/spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: At,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: Et,
	tags: Dt,
	tagsSchema: Ot,
	instructions: kt,
	definitions: Tt
});
// ../json-renderers-run-instructions-steps/node_modules/declarative-instructions/src/v1/index.js
var jt = {
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
}, Mt = (e) => typeof e == "object" && !!e && !Array.isArray(e), Nt = (e, t) => {
	if (!Mt(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Bt(t, i);
	return n;
}, Pt = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Bt(t, e));
}, Ft = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, It = (e, t) => Ft(e, t), Lt = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Rt = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, zt = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Rt,
		applyTemplate: e
	});
}, Bt = (e, t, n) => {
	let r = e, i = t;
	Lt(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Ft(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = It(a?.textContent, r)), "attributes" in a && (a.attributes = Nt(a?.attributes, r)), "children" in a && (a.children = Pt(a?.children, r))), a);
};
zt(Bt);
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var Vt = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, Ht = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, Ut = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: Ht,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, Wt = (e, t) => {
	let n = e, r = t;
	return Vt(n, r), n.map((e) => Bt(e, r));
};
Ut((e, t) => {
	let n = e;
	return Vt(n, t), n.map((e) => Bt(e, e[t]));
}, Wt);
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-two-dimensions/src/v9/index.js
var Gt = ({ outer: e = [], outerSpec: t, getInner: n, innerSpec: r } = {}) => e.map((e) => {
	let i = Bt(e, t), a = n ? n(e) : [];
	return i.children = a.length > 0 ? Wt(a, r) : [], i;
}), Kt = ({ columns: e = [], data: t = [], columnSpec: n, rowSpec: r } = {}) => Gt({
	outer: Array.isArray(t) ? t : t?.data ?? t?.rows ?? [],
	outerSpec: r,
	innerSpec: n,
	getInner: (t) => e.map((e) => ({
		...e,
		rowValue: t[e.columnName]
	}))
}), qt = ({ columns: e = [], data: t = [], rows: n, columnSpec: r, rowSpec: i } = {}) => {
	let a = n ?? (Array.isArray(t) ? t : t?.data ?? t?.rows ?? []);
	return Gt({
		outer: e,
		outerSpec: r,
		innerSpec: i,
		getInner: (e) => Array.isArray(e.options) && e.options.length > 0 ? e.options.map((e) => typeof e == "object" ? e : { rowValue: e }) : a.map((t) => ({
			...t,
			rowValue: t[e.columnName] ?? t.value ?? t
		}))
	});
}, Jt = (e) => Array.isArray(e) ? e : [e], Yt = (e, t, n) => {
	e[t] = n;
}, Xt = {
	set: Yt,
	push: (e, t, n) => {
		e[t].push(...Jt(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...Jt(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(Jt(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(Jt(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, Zt = Object.defineProperty, Qt = Object.getOwnPropertySymbols, $t = Object.prototype.hasOwnProperty, en = Object.prototype.propertyIsEnumerable, tn = Math.pow, nn = (e, t, n) => t in e ? Zt(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, rn = (e, t) => {
	for (var n in t ||= {}) $t.call(t, n) && nn(e, n, t[n]);
	if (Qt) for (var n of Qt(t)) en.call(t, n) && nn(e, n, t[n]);
	return e;
}, an = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, on = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, C = () => void 0, sn = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = T(e);
		return r === T(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = fn(e), a = fn(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, cn = (e, t, n = C) => {
	let r = [];
	if (!sn(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!sn(ln(e.x, t), ln(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !w(o, i) || !w(a, i)) return !1;
			let s = a[i];
			if (!w(o, i) || !sn(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, w = (e, t) => Object.prototype.hasOwnProperty.call(e, t), ln = (e, t) => w(e, t) ? e[t] : void 0, un = 16383, dn = 1e3, fn = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > dn) throw new on(`Member name too long (maximum ${dn} characters)`);
	return t;
}, T = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, pn = (e) => e instanceof RangeError && /call stack/i.test(e.message), E = (e) => Array.isArray(e), mn = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), hn = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, gn = (e) => typeof e == "number", D = (e) => typeof e == "string", _n = (e) => e === void 0, O = (e) => e !== void 0;
function vn(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function yn(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function bn(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var xn = class extends SyntaxError {
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
function Sn(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Wr }, a = Wr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, v = /^[*\/]/, ie = /^[a-zA-Z_]/, ae = /^[\x80-\uFFFF_]/, oe = /^[a-zA-Z0-9_]/, se = /^[0-9@$\-]/, ce = /^[^\/\\]/, le = /^[gimsuy]/, ue = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, de = /^[\uD800-\uDBFF]/, fe = /^[\uDC00-\uDFFF]/, y = /^[0-9]/, pe = /^[1-9]/, me = /^[eE]/, he = /^["\\]/, ge = /^['\\]/, _e = /^[ -\uD7FF\uE000-\uFFFF]/, ve = /^[dD]/, ye = /^[89abAB]/, be = /^[c-fC-F]/, xe = /^[0-9a-fA-F]/, Se = /^[ \t\n\r]/, Ce = V([",", "]"], !1, !1, !1), we = B("length", !1), Te = B("count", !1), Ee = B("match", !1), De = B("search", !1), Oe = B("value", !1), ke = V(["+", "-"], !1, !1, !1), Ae = V(["*", "/"], !1, !1, !1), je = zr("string"), Me = V([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Ne = V([["", "￿"], "_"], !1, !1, !1), Pe = V([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Fe = B("-", !1), Ie = V([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Le = B("$", !1), Re = B("@", !1), ze = B("..", !1), Be = B(".", !1), Ve = B("*", !1), He = B("&&", !1), Ue = B("||", !1), We = B("!", !1), Ge = B("==", !1), Ke = B("!=", !1), qe = B(">=", !1), Je = B(">", !1), Ye = B("<=", !1), Xe = B("<", !1), Ze = B("=~", !1), Qe = B("in", !1), $e = B("nin", !1), et = B("subsetof", !1), tt = B("anyof", !1), nt = B("noneof", !1), rt = B("sizeof", !1), it = B("size", !1), at = B("empty", !1), ot = B("true", !1), st = B("false", !1), b = B("null", !1), ct = B("{", !1), lt = B("}", !1), ut = B("[", !1), dt = B("]", !1), ft = B(":", !1), pt = B(",", !1), mt = B("(", !1), ht = B(")", !1), gt = B("?", !1), _t = zr("regex"), vt = B("/", !1), yt = V(["/", "\\"], !0, !1, !1), x = B("\\", !1), bt = Rr(), xt = V([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), St = V([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), Ct = V([["\ud800", "\udbff"]], !1, !1, !1), wt = V([["\udc00", "\udfff"]], !1, !1, !1), S = V([["0", "9"]], !1, !1, !1), Tt = zr("number"), Et = B("0", !1), Dt = V([["1", "9"]], !1, !1, !1), Ot = zr("integer"), kt = V(["e", "E"], !1, !1, !1), At = B("\"", !1), jt = B("'", !1), Mt = V(["\"", "\\"], !1, !1, !1), Nt = V(["'", "\\"], !1, !1, !1), Pt = V([[" ", "퟿"], ["", "￿"]], !1, !1, !1), Ft = B("b", !1), It = B("f", !1), Lt = B("n", !1), Rt = B("r", !1), zt = B("t", !1), Bt = B("u", !1), Vt = V(["d", "D"], !1, !1, !1), Ht = V([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Ut = B("\\u", !1), Wt = V([["c", "f"], ["C", "F"]], !1, !1, !1), Gt = V([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Kt = V([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function qt(e) {
		return {
			type: "root",
			next: vn(e)
		};
	}
	function Jt(e) {
		return e.map((e) => e[1]);
	}
	function Yt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Xt(e) {
		return e;
	}
	function Zt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function Qt() {
		return { type: "wildcard" };
	}
	function $t(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function en() {
		return { type: "wildcard" };
	}
	function tn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function nn(e) {
		return e;
	}
	function rn(e) {
		return e;
	}
	function an(e, t) {
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
	function on(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function C(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function sn(e, t) {
		return bn(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function cn(e, t) {
		return bn(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function w(e) {
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
		return t !== null || yn(e);
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
	function T(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function pn() {
		return { operator: "empty" };
	}
	function E() {
		return "eq";
	}
	function mn() {
		return "ne";
	}
	function hn() {
		return "le";
	}
	function gn() {
		return "lt";
	}
	function D() {
		return "ge";
	}
	function _n() {
		return "gt";
	}
	function O() {
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
		return t.length === 0 ? e : bn(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function Bn(e, t) {
		return t.length === 0 ? e : bn(e, t, (e, t) => ({
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
			next: vn(e)
		};
	}
	function Un(e) {
		return {
			type: "current",
			next: vn(e)
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
	function k(e) {
		return {
			type: "stringLiteral",
			value: _a(e)
		};
	}
	function qn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Jn(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Yn(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function Xn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function Zn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Qn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function $n() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function er(e) {
		return e;
	}
	function tr(e) {
		for (let [t] of e || []) _a(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function nr(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function rr(e, t) {
		return [e, t.value];
	}
	function ir(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function ar(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function or(e) {
		return _a(e);
	}
	function sr(e) {
		return _a(e);
	}
	function cr() {
		return "true";
	}
	function lr() {
		return "false";
	}
	function ur() {
		return "null";
	}
	function dr(e) {
		return _a(e);
	}
	function fr() {
		return "true";
	}
	function pr() {
		return "false";
	}
	function mr() {
		return "null";
	}
	function hr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function gr(e) {
		return e.join("");
	}
	function _r(e, t) {
		let n = parseFloat(z());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && Ir("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function vr() {
		let e = parseInt(z(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && Ir("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function yr(e) {
		return e.join("");
	}
	function br(e) {
		return e.join("");
	}
	function xr(e) {
		return e;
	}
	function Sr() {
		return "\"";
	}
	function Cr(e) {
		return e;
	}
	function wr(e) {
		return e;
	}
	function Tr() {
		return "'";
	}
	function Er(e) {
		return e;
	}
	function Dr() {
		return "\\";
	}
	function Or() {
		return "/";
	}
	function kr() {
		return "\b";
	}
	function Ar() {
		return "\f";
	}
	function jr() {
		return "\n";
	}
	function Mr() {
		return "\r";
	}
	function A() {
		return "	";
	}
	function j(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Nr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function M(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let N = t.peg$currPos | 0, P = N, F = [{
		line: 1,
		column: 1
	}], I = N, Pr = t.peg$maxFailExpected || [], L = t.peg$silentFails | 0, Fr = /* @__PURE__ */ new Map(), R;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function z() {
		return e.substring(P, N);
	}
	function Ir(e, t) {
		throw t = t === void 0 ? Vr(P, N) : t, Hr(e, t);
	}
	function Lr(t = N) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function B(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function V(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function Rr() {
		return { type: "any" };
	}
	function H() {
		return { type: "end" };
	}
	function zr(e) {
		return {
			type: "other",
			description: e
		};
	}
	function Br(t) {
		let n = F[t], r;
		if (n) return n;
		if (t >= F.length) r = F.length - 1;
		else for (r = t; !F[--r];);
		for (n = F[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return F[t] = n, n;
	}
	function Vr(e, t, n) {
		let i = Br(e), a = Br(t), o = {
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
		N < I || (N > I && (I = N, Pr = []), Pr.push(e));
	}
	function Hr(e, t) {
		return new xn(e, null, null, t);
	}
	function Ur(e, t, n) {
		return new xn(xn.buildMessage(e, t), e, t, n);
	}
	function Wr() {
		let e, t, r, i;
		return e = N, t = Ei(), t === n ? (N = e, e = n) : (r = Gr(), i = ga(), i === n ? (N = e, e = n) : (P = e, e = qt(r))), e;
	}
	function Gr() {
		let e, t, r, i, a;
		for (e = N, t = [], r = N, i = $(), a = Kr(), a === n ? (N = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = N, i = $(), a = Kr(), a === n ? (N = r, r = n) : (i = [i, a], r = i);
		return P = e, t = Jt(t), e = t, e;
	}
	function Kr() {
		let e;
		return e = Jr(), e === n && (e = qr()), e;
	}
	function qr() {
		let e, t, r;
		return e = N, t = q(), t === n ? (N = e, e = n) : (r = Yr(), r === n ? (N = e, e = n) : (P = e, e = Yt(r))), e === n && (e = N, t = Zr(), t !== n && (P = e, t = Xt(t)), e = t), e;
	}
	function Jr() {
		let e, t, r;
		return e = N, t = Di(), t === n ? (N = e, e = n) : (r = Xr(), r === n ? (N = e, e = n) : (P = e, e = Zt(r))), e;
	}
	function Yr() {
		let e, t;
		return e = N, t = Oi(), t !== n && (P = e, t = Qt()), e = t, e === n && (e = N, t = Ti(), t !== n && (P = e, t = $t(t)), e = t), e;
	}
	function Xr() {
		let e, t;
		return e = N, t = Oi(), t !== n && (P = e, t = en()), e = t, e === n && (e = N, t = Ti(), t !== n && (P = e, t = tn(t)), e = t, e === n && (e = N, t = Zr(), t !== n && (P = e, t = nn(t)), e = t)), e;
	}
	function Zr() {
		let e, t, r, i;
		return e = N, t = Zi(), t === n ? (N = e, e = n) : ($(), r = Qr(), r === n ? (N = e, e = n) : ($(), i = Qi(), i === n ? (N = e, e = n) : (P = e, e = rn(r)))), e;
	}
	function Qr() {
		let e, t, r, i, a, o, s, c;
		if (e = N, t = gi(), t !== n) {
			for (r = [], i = N, a = $(), o = Y(), o === n ? (N = i, i = n) : (s = $(), c = gi(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = N, a = $(), o = Y(), o === n ? (N = i, i = n) : (s = $(), c = gi(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			P = e, e = an(t, r);
		} else N = e, e = n;
		return e;
	}
	function $r() {
		let t, r, i, a, o, s, c, l, u;
		return t = N, r = na(), r === n ? (N = t, t = n) : ($(), i = ea(), i === n ? (N = t, t = n) : ($(), a = ei(), a === n ? (N = t, t = n) : ($(), o = ta(), o === n ? (N = t, t = n) : (s = N, L++, c = N, l = $(), u = e.charAt(N), re.test(u) ? N++ : (u = n, L === 0 && U(Ce)), u === n ? (N = c, c = n) : (l = [l, u], c = l), L--, c === n ? s = n : (N = s, s = void 0), s === n ? (N = t, t = n) : (P = t, t = on(a)))))), t === n && (t = N, r = na(), r === n ? (N = t, t = n) : ($(), i = ei(), i === n ? (N = t, t = n) : (P = t, t = C(i)))), t;
	}
	function ei() {
		let e, t, r, i, a, o, s, c, l = N * 91 + 10, u = Fr.get(l);
		if (u) return N = u.nextPos, u.result;
		if (e = N, t = ti(), t !== n) {
			for (r = [], i = N, a = $(), o = Ai(), o === n ? (N = i, i = n) : (s = $(), c = ti(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = N, a = $(), o = Ai(), o === n ? (N = i, i = n) : (s = $(), c = ti(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			P = e, e = sn(t, r);
		} else N = e, e = n;
		return Fr.set(l, {
			nextPos: N,
			result: e
		}), e;
	}
	function ti() {
		let e, t, r, i, a, o, s, c;
		if (e = N, t = ni(), t !== n) {
			for (r = [], i = N, a = $(), o = ki(), o === n ? (N = i, i = n) : (s = $(), c = ni(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = N, a = $(), o = ki(), o === n ? (N = i, i = n) : (s = $(), c = ni(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			P = e, e = cn(t, r);
		} else N = e, e = n;
		return e;
	}
	function ni() {
		let e, t, r, i, a;
		return e = N, t = J(), t === n ? (N = e, e = n) : ($(), r = ea(), r === n ? (N = e, e = n) : ($(), i = ei(), i === n ? (N = e, e = n) : ($(), a = ta(), a === n ? (N = e, e = n) : (P = e, e = w(i))))), e === n && (e = N, t = J(), t === n ? (N = e, e = n) : ($(), r = oi(), r === n ? (N = e, e = n) : (P = e, e = ln(r))), e === n && (e = ri())), e;
	}
	function ri() {
		let e, t, r, i, a;
		return e = N, t = di(), t === n ? (N = e, e = n) : (r = N, i = $(), a = ii(), a === n ? (N = r, r = n) : (i = [i, a], r = i), r === n && (r = null), P = N, i = un(t, r), i = i ? void 0 : n, i === n ? (N = e, e = n) : (P = e, e = dn(t, r))), e === n && (e = oi()), e;
	}
	function ii() {
		let e, t, r;
		return e = N, t = ai(), t === n ? (N = e, e = n) : ($(), r = di(), r === n ? (N = e, e = n) : (P = e, e = fn(t, r))), e === n && (e = N, t = Li(), t === n ? (N = e, e = n) : ($(), r = _i(), r === n ? (N = e, e = n) : (P = e, e = T(r))), e === n && (e = N, t = Gi(), t !== n && (P = e, t = pn()), e = t)), e;
	}
	function ai() {
		let e, t;
		return e = N, t = ji(), t !== n && (P = e, t = E()), e = t, e === n && (e = N, t = Mi(), t !== n && (P = e, t = mn()), e = t, e === n && (e = N, t = Fi(), t !== n && (P = e, t = hn()), e = t, e === n && (e = N, t = Ii(), t !== n && (P = e, t = gn()), e = t, e === n && (e = N, t = Ni(), t !== n && (P = e, t = D()), e = t, e === n && (e = N, t = Pi(), t !== n && (P = e, t = _n()), e = t, e === n && (e = N, t = Ri(), t !== n && (P = e, t = O()), e = t, e === n && (e = N, t = zi(), t !== n && (P = e, t = Sn()), e = t, e === n && (e = N, t = Bi(), t !== n && (P = e, t = Cn()), e = t, e === n && (e = N, t = Vi(), t !== n && (P = e, t = wn()), e = t, e === n && (e = N, t = Hi(), t !== n && (P = e, t = Tn()), e = t, e === n && (e = N, t = Ui(), t !== n && (P = e, t = En()), e = t, e === n && (e = N, t = Wi(), t !== n && (P = e, t = Dn()), e = t)))))))))))), e;
	}
	function oi() {
		let e, t, r, i;
		return e = N, t = ea(), t === n ? (N = e, e = n) : ($(), r = ei(), r === n ? (N = e, e = n) : ($(), i = ta(), i === n ? (N = e, e = n) : (P = e, e = On(r)))), e === n && (e = si(), e === n && (e = mi(), e === n && (e = N, t = Ki(), t !== n && (P = e, t = kn()), e = t, e === n && (e = N, t = qi(), t !== n && (P = e, t = An()), e = t, e === n && (e = N, t = Ji(), t !== n && (P = e, t = jn()), e = t))))), e;
	}
	function si() {
		let e, t, r, i, a;
		return e = N, t = ci(), t === n ? (N = e, e = n) : (r = ea(), r === n ? (N = e, e = n) : ($(), i = li(), i === n && (i = null), $(), a = ta(), a === n ? (N = e, e = n) : (P = e, e = Mn(t, i)))), e;
	}
	function ci() {
		let t, r;
		return t = N, e.substr(N, 6) === o ? (r = o, N += 6) : (r = n, L === 0 && U(we)), r !== n && (P = t, r = Nn()), t = r, t === n && (t = N, e.substr(N, 5) === s ? (r = s, N += 5) : (r = n, L === 0 && U(Te)), r !== n && (P = t, r = Pn()), t = r, t === n && (t = N, e.substr(N, 5) === c ? (r = c, N += 5) : (r = n, L === 0 && U(Ee)), r !== n && (P = t, r = Fn()), t = r, t === n && (t = N, e.substr(N, 6) === l ? (r = l, N += 6) : (r = n, L === 0 && U(De)), r !== n && (P = t, r = In()), t = r, t === n && (t = N, e.substr(N, 5) === u ? (r = u, N += 5) : (r = n, L === 0 && U(Oe)), r !== n && (P = t, r = Ln()), t = r)))), t;
	}
	function li() {
		let e, t, r, i, a, o, s, c;
		if (e = N, t = ui(), t !== n) {
			for (r = [], i = N, a = $(), o = Y(), o === n ? (N = i, i = n) : (s = $(), c = ui(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = N, a = $(), o = Y(), o === n ? (N = i, i = n) : (s = $(), c = ui(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			P = e, e = Rn(t, r);
		} else N = e, e = n;
		return e;
	}
	function ui() {
		let e;
		return e = di(), e === n && (e = yi()), e;
	}
	function di() {
		let t, r, i, a, o, s, c, l, u = N * 91 + 21, d = Fr.get(u);
		if (d) return N = d.nextPos, d.result;
		if (t = N, r = fi(), r !== n) {
			for (i = [], a = N, o = $(), s = e.charAt(N), _.test(s) ? N++ : (s = n, L === 0 && U(ke)), s === n ? (N = a, a = n) : (c = $(), l = fi(), l === n ? (N = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = N, o = $(), s = e.charAt(N), _.test(s) ? N++ : (s = n, L === 0 && U(ke)), s === n ? (N = a, a = n) : (c = $(), l = fi(), l === n ? (N = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			P = t, t = zn(r, i);
		} else N = t, t = n;
		return Fr.set(u, {
			nextPos: N,
			result: t
		}), t;
	}
	function fi() {
		let t, r, i, a, o, s, c, l;
		if (t = N, r = pi(), r !== n) {
			for (i = [], a = N, o = $(), s = e.charAt(N), v.test(s) ? N++ : (s = n, L === 0 && U(Ae)), s === n ? (N = a, a = n) : (c = $(), l = pi(), l === n ? (N = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = N, o = $(), s = e.charAt(N), v.test(s) ? N++ : (s = n, L === 0 && U(Ae)), s === n ? (N = a, a = n) : (c = $(), l = pi(), l === n ? (N = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			P = t, t = Bn(r, i);
		} else N = t, t = n;
		return t;
	}
	function pi() {
		let e, t, r, i;
		return e = N, t = ea(), t === n ? (N = e, e = n) : ($(), r = di(), r === n ? (N = e, e = n) : ($(), i = ta(), i === n ? (N = e, e = n) : (P = e, e = Vn(r)))), e === n && (e = si(), e === n && (e = vi(), e === n && (e = mi()))), e;
	}
	function mi() {
		let e, t, r;
		return e = N, t = Ei(), t === n ? (N = e, e = n) : (r = Gr(), r === n ? (N = e, e = n) : (P = e, e = Hn(r))), e === n && (e = N, t = K(), t === n ? (N = e, e = n) : (r = Gr(), r === n ? (N = e, e = n) : (P = e, e = Un(r)))), e;
	}
	function hi() {
		let e, t, r, i, a, o, s, c, l;
		return e = N, t = N, r = la(), r === n ? (N = t, t = n) : (i = $(), r = [r, i], t = r), t === n && (t = null), r = $i(), r === n ? (N = e, e = n) : (i = $(), a = N, o = la(), o === n ? (N = a, a = n) : (s = $(), o = [o, s], a = o), a === n && (a = null), o = N, s = $i(), s === n ? (N = o, o = n) : (c = $(), l = la(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), P = e, e = Wn(t, a, o)), e;
	}
	function gi() {
		let e, t;
		return e = $r(), e === n && (e = hi(), e === n && (e = N, t = Oi(), t !== n && (P = e, t = Gn()), e = t, e === n && (e = N, t = la(), t !== n && (P = e, t = Kn(t)), e = t, e === n && (e = N, t = da(), t !== n && (P = e, t = k(t)), e = t, e === n && (e = N, t = Ci(), t !== n && (P = e, t = qn(t)), e = t))))), e;
	}
	function _i() {
		let e, t, r;
		return e = N, t = ra(), t === n ? (N = e, e = n) : (r = ia(), P = e, e = Jn(t, r)), e;
	}
	function vi() {
		let e, t;
		return e = N, t = yi(), t !== n && (P = e, t = Yn(t)), e = t, e === n && (e = N, t = sa(), t !== n && (P = e, t = Xn(t)), e = t, e === n && (e = bi(), e === n && (e = Si(), e === n && (e = N, t = Ki(), t !== n && (P = e, t = Zn()), e = t, e === n && (e = N, t = qi(), t !== n && (P = e, t = Qn()), e = t, e === n && (e = N, t = Ji(), t !== n && (P = e, t = $n()), e = t)))))), e;
	}
	function yi() {
		let e, t;
		return L++, e = N, t = da(), t !== n && (P = e, t = er(t)), e = t, L--, e === n && (t = n, L === 0 && U(je)), e;
	}
	function bi() {
		let e, t, r, i;
		return e = N, t = Yi(), t === n ? (N = e, e = n) : ($(), r = W(), r === n && (r = null), $(), i = Xi(), i === n ? (N = e, e = n) : (P = e, e = tr(r))), e;
	}
	function W() {
		let e, t, r, i, a, o, s, c;
		if (e = N, t = xi(), t !== n) {
			for (r = [], i = N, a = $(), o = Y(), o === n ? (N = i, i = n) : (s = $(), c = xi(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = N, a = $(), o = Y(), o === n ? (N = i, i = n) : (s = $(), c = xi(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			P = e, e = nr(t, r);
		} else N = e, e = n;
		return e;
	}
	function xi() {
		let e, t, r, i;
		return e = N, t = da(), t === n ? (N = e, e = n) : ($(), r = $i(), r === n ? (N = e, e = n) : ($(), i = vi(), i === n ? (N = e, e = n) : (P = e, e = rr(t, i)))), e;
	}
	function Si() {
		let e, t, r, i;
		return e = N, t = Zi(), t === n ? (N = e, e = n) : ($(), r = G(), r === n && (r = null), $(), i = Qi(), i === n ? (N = e, e = n) : (P = e, e = ir(r))), e;
	}
	function G() {
		let e, t, r, i, a, o, s, c;
		if (e = N, t = vi(), t !== n) {
			for (r = [], i = N, a = $(), o = Y(), o === n ? (N = i, i = n) : (s = $(), c = vi(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = N, a = $(), o = Y(), o === n ? (N = i, i = n) : (s = $(), c = vi(), c === n ? (N = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			P = e, e = ar(t, r);
		} else N = e, e = n;
		return e;
	}
	function Ci() {
		let t, r, i, a, o, s;
		if (t = N, r = N, i = N, a = e.charAt(N), ie.test(a) ? N++ : (a = n, L === 0 && U(Me)), a !== n) {
			for (o = [], s = wi(); s !== n;) o.push(s), s = wi();
			a = [a, o], i = a;
		} else N = i, i = n;
		if (r = i === n ? i : e.substring(r, N), r !== n && (P = t, r = or(r)), t = r, t === n) {
			if (t = N, r = N, i = [], a = e.charAt(N), ae.test(a) ? N++ : (a = n, L === 0 && U(Ne)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(N), ae.test(a) ? N++ : (a = n, L === 0 && U(Ne));
			else i = n;
			r = i === n ? i : e.substring(r, N), r !== n && (P = t, r = sr(r)), t = r, t === n && (t = N, r = Ki(), r !== n && (P = t, r = cr()), t = r, t === n && (t = N, r = qi(), r !== n && (P = t, r = lr()), t = r, t === n && (t = N, r = Ji(), r !== n && (P = t, r = ur()), t = r)));
		}
		return t;
	}
	function wi() {
		let t, r, i, a;
		return t = e.charAt(N), oe.test(t) ? N++ : (t = n, L === 0 && U(Pe)), t === n && (t = N, e.charCodeAt(N) === 45 ? (r = "-", N++) : (r = n, L === 0 && U(Fe)), r === n ? (N = t, t = n) : (i = N, L++, a = e.charAt(N), se.test(a) ? N++ : (a = n, L === 0 && U(Ie)), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r))), t;
	}
	function Ti() {
		let e, t;
		return e = N, t = aa(), t !== n && (P = e, t = dr(t)), e = t, e === n && (e = N, t = Ki(), t !== n && (P = e, t = fr()), e = t, e === n && (e = N, t = qi(), t !== n && (P = e, t = pr()), e = t, e === n && (e = N, t = Ji(), t !== n && (P = e, t = mr()), e = t))), e;
	}
	function Ei() {
		let t;
		return e.charCodeAt(N) === 36 ? (t = "$", N++) : (t = n, L === 0 && U(Le)), t;
	}
	function K() {
		let t;
		return e.charCodeAt(N) === 64 ? (t = "@", N++) : (t = n, L === 0 && U(Re)), t;
	}
	function Di() {
		let t;
		return e.substr(N, 2) === ".." ? (t = "..", N += 2) : (t = n, L === 0 && U(ze)), t;
	}
	function q() {
		let t;
		return e.charCodeAt(N) === 46 ? (t = ".", N++) : (t = n, L === 0 && U(Be)), t;
	}
	function Oi() {
		let t;
		return e.charCodeAt(N) === 42 ? (t = "*", N++) : (t = n, L === 0 && U(Ve)), t;
	}
	function ki() {
		let t;
		return e.substr(N, 2) === "&&" ? (t = "&&", N += 2) : (t = n, L === 0 && U(He)), t;
	}
	function Ai() {
		let t;
		return e.substr(N, 2) === "||" ? (t = "||", N += 2) : (t = n, L === 0 && U(Ue)), t;
	}
	function J() {
		let t;
		return e.charCodeAt(N) === 33 ? (t = "!", N++) : (t = n, L === 0 && U(We)), t;
	}
	function ji() {
		let t;
		return e.substr(N, 2) === "==" ? (t = "==", N += 2) : (t = n, L === 0 && U(Ge)), t;
	}
	function Mi() {
		let t;
		return e.substr(N, 2) === "!=" ? (t = "!=", N += 2) : (t = n, L === 0 && U(Ke)), t;
	}
	function Ni() {
		let t;
		return e.substr(N, 2) === ">=" ? (t = ">=", N += 2) : (t = n, L === 0 && U(qe)), t;
	}
	function Pi() {
		let t;
		return e.charCodeAt(N) === 62 ? (t = ">", N++) : (t = n, L === 0 && U(Je)), t;
	}
	function Fi() {
		let t;
		return e.substr(N, 2) === "<=" ? (t = "<=", N += 2) : (t = n, L === 0 && U(Ye)), t;
	}
	function Ii() {
		let t;
		return e.charCodeAt(N) === 60 ? (t = "<", N++) : (t = n, L === 0 && U(Xe)), t;
	}
	function Li() {
		let t;
		return e.substr(N, 2) === "=~" ? (t = "=~", N += 2) : (t = n, L === 0 && U(Ze)), t;
	}
	function Ri() {
		let t, r, i, a;
		return t = N, e.substr(N, 2) === "in" ? (r = "in", N += 2) : (r = n, L === 0 && U(Qe)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = N, e.substr(N, 3) === "nin" ? (r = "nin", N += 3) : (r = n, L === 0 && U($e)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = N, e.substr(N, 8) === d ? (r = d, N += 8) : (r = n, L === 0 && U(et)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = N, e.substr(N, 5) === f ? (r = f, N += 5) : (r = n, L === 0 && U(tt)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = N, e.substr(N, 6) === p ? (r = p, N += 6) : (r = n, L === 0 && U(nt)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = N, e.substr(N, 6) === m ? (r = m, N += 6) : (r = n, L === 0 && U(rt)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = N, e.substr(N, 4) === ee ? (r = ee, N += 4) : (r = n, L === 0 && U(it)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = N, e.substr(N, 5) === h ? (r = h, N += 5) : (r = n, L === 0 && U(at)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = N, e.substr(N, 4) === te ? (r = te, N += 4) : (r = n, L === 0 && U(ot)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = N, e.substr(N, 5) === ne ? (r = ne, N += 5) : (r = n, L === 0 && U(st)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t, r, i, a;
		return t = N, e.substr(N, 4) === g ? (r = g, N += 4) : (r = n, L === 0 && U(b)), r === n ? (N = t, t = n) : (i = N, L++, a = Q(), L--, a === n ? i = void 0 : (N = i, i = n), i === n ? (N = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(N) === 123 ? (t = "{", N++) : (t = n, L === 0 && U(ct)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(N) === 125 ? (t = "}", N++) : (t = n, L === 0 && U(lt)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(N) === 91 ? (t = "[", N++) : (t = n, L === 0 && U(ut)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(N) === 93 ? (t = "]", N++) : (t = n, L === 0 && U(dt)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(N) === 58 ? (t = ":", N++) : (t = n, L === 0 && U(ft)), t;
	}
	function Y() {
		let t;
		return e.charCodeAt(N) === 44 ? (t = ",", N++) : (t = n, L === 0 && U(pt)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(N) === 40 ? (t = "(", N++) : (t = n, L === 0 && U(mt)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(N) === 41 ? (t = ")", N++) : (t = n, L === 0 && U(ht)), t;
	}
	function na() {
		let t;
		return e.charCodeAt(N) === 63 ? (t = "?", N++) : (t = n, L === 0 && U(gt)), t;
	}
	function ra() {
		let t, r, i, a, o, s;
		if (L++, t = N, e.charCodeAt(N) === 47 ? (r = "/", N++) : (r = n, L === 0 && U(vt)), r !== n) {
			for (i = [], a = e.charAt(N), ce.test(a) ? N++ : (a = n, L === 0 && U(yt)), a === n && (a = N, e.charCodeAt(N) === 92 ? (o = "\\", N++) : (o = n, L === 0 && U(x)), o === n ? (N = a, a = n) : (e.length > N ? (s = e.charAt(N), N++) : (s = n, L === 0 && U(bt)), s === n ? (N = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(N), ce.test(a) ? N++ : (a = n, L === 0 && U(yt)), a === n && (a = N, e.charCodeAt(N) === 92 ? (o = "\\", N++) : (o = n, L === 0 && U(x)), o === n ? (N = a, a = n) : (e.length > N ? (s = e.charAt(N), N++) : (s = n, L === 0 && U(bt)), s === n ? (N = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(N) === 47 ? (a = "/", N++) : (a = n, L === 0 && U(vt)), a === n ? (N = t, t = n) : (P = t, t = hr(i));
		} else N = t, t = n;
		return L--, t === n && (r = n, L === 0 && U(_t)), t;
	}
	function ia() {
		let t, r, i;
		for (t = N, r = [], i = e.charAt(N), le.test(i) ? N++ : (i = n, L === 0 && U(xt)); i !== n;) r.push(i), i = e.charAt(N), le.test(i) ? N++ : (i = n, L === 0 && U(xt));
		return P = t, r = gr(r), t = r, t;
	}
	function aa() {
		let t, r, i, a, o;
		if (t = N, r = N, i = oa(), i !== n) {
			for (a = [], o = X(); o !== n;) a.push(o), o = X();
			i = [i, a], r = i;
		} else N = r, r = n;
		return t = r === n ? r : e.substring(t, N), t;
	}
	function oa() {
		let t, r, i;
		return t = e.charAt(N), ue.test(t) ? N++ : (t = n, L === 0 && U(St)), t === n && (t = N, r = e.charAt(N), de.test(r) ? N++ : (r = n, L === 0 && U(Ct)), r === n ? (N = t, t = n) : (i = e.charAt(N), fe.test(i) ? N++ : (i = n, L === 0 && U(wt)), i === n ? (N = t, t = n) : (r = [r, i], t = r))), t;
	}
	function X() {
		let t;
		return t = oa(), t === n && (t = e.charAt(N), y.test(t) ? N++ : (t = n, L === 0 && U(S))), t;
	}
	function sa() {
		let t, r, i, a, o, s, c;
		if (L++, t = N, e.charCodeAt(N) === 45 ? (r = "-", N++) : (r = n, L === 0 && U(Fe)), r === n && (r = null), i = ca(), i !== n) {
			if (a = N, e.charCodeAt(N) === 46 ? (o = ".", N++) : (o = n, L === 0 && U(Be)), o !== n) {
				if (s = [], c = e.charAt(N), y.test(c) ? N++ : (c = n, L === 0 && U(S)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(N), y.test(c) ? N++ : (c = n, L === 0 && U(S));
				else s = n;
				s === n ? (N = a, a = n) : (o = [o, s], a = o);
			} else N = a, a = n;
			a === n && (a = null), o = ua(), o === n && (o = null), P = t, t = _r(a, o);
		} else N = t, t = n;
		return L--, t === n && (r = n, L === 0 && U(Tt)), t;
	}
	function ca() {
		let t, r, i, a;
		if (e.charCodeAt(N) === 48 ? (t = "0", N++) : (t = n, L === 0 && U(Et)), t === n) {
			if (t = N, r = e.charAt(N), pe.test(r) ? N++ : (r = n, L === 0 && U(Dt)), r !== n) {
				for (i = [], a = e.charAt(N), y.test(a) ? N++ : (a = n, L === 0 && U(S)); a !== n;) i.push(a), a = e.charAt(N), y.test(a) ? N++ : (a = n, L === 0 && U(S));
				r = [r, i], t = r;
			} else N = t, t = n;
		}
		return t;
	}
	function la() {
		let t, r, i, a, o, s;
		if (L++, t = N, e.charCodeAt(N) === 48 ? (r = "0", N++) : (r = n, L === 0 && U(Et)), r === n) {
			if (r = N, e.charCodeAt(N) === 45 ? (i = "-", N++) : (i = n, L === 0 && U(Fe)), i === n && (i = null), a = e.charAt(N), pe.test(a) ? N++ : (a = n, L === 0 && U(Dt)), a !== n) {
				for (o = [], s = e.charAt(N), y.test(s) ? N++ : (s = n, L === 0 && U(S)); s !== n;) o.push(s), s = e.charAt(N), y.test(s) ? N++ : (s = n, L === 0 && U(S));
				i = [
					i,
					a,
					o
				], r = i;
			} else N = r, r = n;
		}
		return r !== n && (P = t, r = vr()), t = r, L--, t === n && (r = n, L === 0 && U(Ot)), t;
	}
	function ua() {
		let t, r, i, a, o;
		if (t = N, r = e.charAt(N), me.test(r) ? N++ : (r = n, L === 0 && U(kt)), r !== n) {
			if (i = e.charAt(N), _.test(i) ? N++ : (i = n, L === 0 && U(ke)), i === n && (i = null), a = [], o = e.charAt(N), y.test(o) ? N++ : (o = n, L === 0 && U(S)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(N), y.test(o) ? N++ : (o = n, L === 0 && U(S));
			else a = n;
			a === n ? (N = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else N = t, t = n;
		return t;
	}
	function da() {
		let t, r, i, a;
		if (L++, t = N, e.charCodeAt(N) === 34 ? (r = "\"", N++) : (r = n, L === 0 && U(At)), r !== n) {
			for (i = [], a = fa(); a !== n;) i.push(a), a = fa();
			e.charCodeAt(N) === 34 ? (a = "\"", N++) : (a = n, L === 0 && U(At)), a === n ? (N = t, t = n) : (P = t, t = yr(i));
		} else N = t, t = n;
		if (t === n) {
			if (t = N, e.charCodeAt(N) === 39 ? (r = "'", N++) : (r = n, L === 0 && U(jt)), r !== n) {
				for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
				e.charCodeAt(N) === 39 ? (a = "'", N++) : (a = n, L === 0 && U(jt)), a === n ? (N = t, t = n) : (P = t, t = br(i));
			} else N = t, t = n;
		}
		return L--, t === n && (r = n, L === 0 && U(je)), t;
	}
	function fa() {
		let t, r, i;
		return t = N, r = N, L++, i = e.charAt(N), he.test(i) ? N++ : (i = n, L === 0 && U(Mt)), L--, i === n ? r = void 0 : (N = r, r = n), r === n ? (N = t, t = n) : (i = ma(), i === n ? (N = t, t = n) : (P = t, t = xr(i))), t === n && (t = N, e.charCodeAt(N) === 92 ? (r = "\\", N++) : (r = n, L === 0 && U(x)), r === n ? (N = t, t = n) : (e.charCodeAt(N) === 34 ? (i = "\"", N++) : (i = n, L === 0 && U(At)), i === n ? (N = t, t = n) : (P = t, t = Sr())), t === n && (t = N, e.charCodeAt(N) === 92 ? (r = "\\", N++) : (r = n, L === 0 && U(x)), r === n ? (N = t, t = n) : (i = ha(), i === n ? (N = t, t = n) : (P = t, t = Cr(i))))), t;
	}
	function pa() {
		let t, r, i;
		return t = N, r = N, L++, i = e.charAt(N), ge.test(i) ? N++ : (i = n, L === 0 && U(Nt)), L--, i === n ? r = void 0 : (N = r, r = n), r === n ? (N = t, t = n) : (i = ma(), i === n ? (N = t, t = n) : (P = t, t = wr(i))), t === n && (t = N, e.charCodeAt(N) === 92 ? (r = "\\", N++) : (r = n, L === 0 && U(x)), r === n ? (N = t, t = n) : (e.charCodeAt(N) === 39 ? (i = "'", N++) : (i = n, L === 0 && U(jt)), i === n ? (N = t, t = n) : (P = t, t = Tr())), t === n && (t = N, e.charCodeAt(N) === 92 ? (r = "\\", N++) : (r = n, L === 0 && U(x)), r === n ? (N = t, t = n) : (i = ha(), i === n ? (N = t, t = n) : (P = t, t = Er(i))))), t;
	}
	function ma() {
		let t, r, i, a;
		return t = e.charAt(N), _e.test(t) ? N++ : (t = n, L === 0 && U(Pt)), t === n && (t = N, r = N, i = e.charAt(N), de.test(i) ? N++ : (i = n, L === 0 && U(Ct)), i === n ? (N = r, r = n) : (a = e.charAt(N), fe.test(a) ? N++ : (a = n, L === 0 && U(wt)), a === n ? (N = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, N)), t;
	}
	function ha() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = N, e.charCodeAt(N) === 92 ? (r = "\\", N++) : (r = n, L === 0 && U(x)), r !== n && (P = t, r = Dr()), t = r, t === n && (t = N, e.charCodeAt(N) === 47 ? (r = "/", N++) : (r = n, L === 0 && U(vt)), r !== n && (P = t, r = Or()), t = r, t === n && (t = N, e.charCodeAt(N) === 98 ? (r = "b", N++) : (r = n, L === 0 && U(Ft)), r !== n && (P = t, r = kr()), t = r, t === n && (t = N, e.charCodeAt(N) === 102 ? (r = "f", N++) : (r = n, L === 0 && U(It)), r !== n && (P = t, r = Ar()), t = r, t === n && (t = N, e.charCodeAt(N) === 110 ? (r = "n", N++) : (r = n, L === 0 && U(Lt)), r !== n && (P = t, r = jr()), t = r, t === n && (t = N, e.charCodeAt(N) === 114 ? (r = "r", N++) : (r = n, L === 0 && U(Rt)), r !== n && (P = t, r = Mr()), t = r, t === n && (t = N, e.charCodeAt(N) === 116 ? (r = "t", N++) : (r = n, L === 0 && U(zt)), r !== n && (P = t, r = A()), t = r, t === n && (t = N, e.charCodeAt(N) === 117 ? (r = "u", N++) : (r = n, L === 0 && U(Bt)), r === n ? (N = t, t = n) : (i = N, a = N, o = e.charAt(N), ve.test(o) ? N++ : (o = n, L === 0 && U(Vt)), o === n ? (N = a, a = n) : (s = e.charAt(N), ye.test(s) ? N++ : (s = n, L === 0 && U(Ht)), s === n ? (N = a, a = n) : (c = Z(), c === n ? (N = a, a = n) : (l = Z(), l === n ? (N = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, N), i === n ? (N = t, t = n) : (e.substr(N, 2) === "\\u" ? (a = "\\u", N += 2) : (a = n, L === 0 && U(Ut)), a === n ? (N = t, t = n) : (o = N, s = N, c = e.charAt(N), ve.test(c) ? N++ : (c = n, L === 0 && U(Vt)), c === n ? (N = s, s = n) : (l = e.charAt(N), be.test(l) ? N++ : (l = n, L === 0 && U(Wt)), l === n ? (N = s, s = n) : (u = Z(), u === n ? (N = s, s = n) : (d = Z(), d === n ? (N = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, N), o === n ? (N = t, t = n) : (P = t, t = j(i, o))))), t === n && (t = N, e.charCodeAt(N) === 117 ? (r = "u", N++) : (r = n, L === 0 && U(Bt)), r === n ? (N = t, t = n) : (i = N, a = N, o = Z(), o === n ? (N = a, a = n) : (s = Z(), s === n ? (N = a, a = n) : (c = Z(), c === n ? (N = a, a = n) : (l = Z(), l === n ? (N = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, N), i === n ? (N = t, t = n) : (P = N, a = Nr(i), a = a ? n : void 0, a === n ? (N = t, t = n) : (P = t, t = M(i)))))))))))), t;
	}
	function Z() {
		let t;
		return t = e.charAt(N), xe.test(t) ? N++ : (t = n, L === 0 && U(Gt)), t;
	}
	function Q() {
		let t;
		return t = e.charAt(N), oe.test(t) ? N++ : (t = n, L === 0 && U(Pe)), t;
	}
	function $() {
		let t, r;
		for (L++, t = [], r = e.charAt(N), Se.test(r) ? N++ : (r = n, L === 0 && U(Kt)); r !== n;) t.push(r), r = e.charAt(N), Se.test(r) ? N++ : (r = n, L === 0 && U(Kt));
		return L--, t;
	}
	function ga() {
		let t, r;
		return t = N, L++, e.length > N ? (r = e.charAt(N), N++) : (r = n, L === 0 && U(bt)), L--, r === n ? t = void 0 : (N = t, t = n), t;
	}
	function _a(e) {
		return e.length > 1e3 && Ir("Member name too long (maximum 1000 characters)"), e;
	}
	R = a();
	let va = R !== n && N === e.length;
	function ya() {
		throw R !== n && N < e.length && U(H()), Ur(Pr, I < e.length ? Lr(I) : null, I < e.length ? Vr(I, I + 1) : Vr(I, I));
	}
	if (t.peg$library) return {
		peg$result: R,
		peg$currPos: N,
		peg$FAILED: n,
		peg$maxFailExpected: Pr,
		peg$maxFailPos: I,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return R;
	ya();
}
var Cn = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), wn = {
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
}, Tn = (e) => {
	throw new an(1, 1, e);
}, En = (e) => e.type === "root" || e.type === "current", Dn = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function On(e) {
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
		if (En(i)) r === "value" && !Dn(i) && Tn("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && Tn(`Expected a query, found ${String(i.type)}`), i.type) {
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
				let e = Cn.has(i.operator) ? "value" : "any";
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
				let e = i.name, n = wn[e], a = i.args;
				a.length !== n.args.length && Tn(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && Tn(`The result of ${e}() must be compared`), r === "value" && n.logical && Tn(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
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
			case "value": r === "test" && Tn("A literal must be compared");
		}
	}
}
function kn(e) {
	let t;
	try {
		t = Sn(e);
	} catch (e) {
		if (pn(e)) throw new an(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new an(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new an(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return On(t), t;
}
var An = /* @__PURE__ */ new Set([
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
]), jn = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), Mn = (e) => e >= 55296 && e <= 56319, Nn = (e) => e >= 56320 && e <= 57343, Pn = (e) => e !== void 0 && e >= "0" && e <= "9", Fn = (e, t) => {
	let n = e.charCodeAt(t);
	return Mn(n) && Nn(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : Mn(n) || Nn(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, In = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !An.has(n) ? null : n === "n" ? {
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
}, Ln = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return jn.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, Rn = (e, t) => {
	let n = e[t];
	return n === "\\" ? In(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : Fn(e, t);
}, zn = (e, t) => {
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
			let t = Ln(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = Rn(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = Rn(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, Bn = (e, t) => {
	let n = t + 1, r = n;
	for (; Pn(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; Pn(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, Vn = (e) => {
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
				let e = i ? Bn(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = zn(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = Ln(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = In(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = Fn(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, Hn = 1e3, Un = 1e3, Wn = 16, Gn = /^[dgimsuy]*$/, Kn = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, k = class extends Error {}, qn = 0, Jn = 1, Yn = 2, Xn = 3, Zn = 4, Qn = 5, $n = tn(2, 31) - 1, er = (e, t) => {
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
	return e.scratch = void 0, (r.gen > $n - t - 2 || r.step > $n - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, tr = /* @__PURE__ */ new Set([
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
]), nr = /^\{(\d+)(?:,(\d*))?\}/, rr = /^[0-9a-fA-F]{4}/, ir = /^\(\?([ims]*)(?:-([ims]*))?:/, ar = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, or = class {
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
		if (this.i < this.src.length) throw new k("unexpected character");
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
				let r = ir.exec(e.slice(t, t + 12));
				if (!r) throw new k("lookaround or named group");
				let i = rn({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new k("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new k("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new k("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(tr.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new k("trailing backslash");
		if (r === "b" || r === "B") throw new k("word boundary");
		if (r >= "1" && r <= "9") throw new k("backreference");
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
			if (n === -1) throw new k("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && rr.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (rr.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
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
			let n = nr.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > Hn || i !== Infinity && i > Hn) throw new k("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, sr = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= Hn) throw new k("pattern too large");
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
		this.emit(Qn);
	}
	compile(e) {
		if (++this.work > 4 * Hn) throw new k("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(qn, this.atomId(e));
				return;
			case "bol":
				this.emit(Xn, +!!e.multiline);
				return;
			case "eol":
				this.emit(Zn, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(Jn);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(Yn)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(Jn);
					this.x[t] = t + 1, this.compile(e.node), this.emit(Yn, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(Jn);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, cr = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new or(e, r, t, n).parse(), a = new sr(r);
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
}, lr = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, v = !1, ie = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case qn:
					e[n++] = r;
					break;
				case Qn: return u(c), v = !0, n;
				case Yn:
					h[s++] = a[r];
					break;
				case Jn:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case Xn:
					(_ === 0 || a[r] === 1 && ar(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case Zn: (_ === t.length || a[r] === 1 && ar(t.charCodeAt(_))) && (h[s++] = r + 1);
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
}, ur = (e, t, n) => {
	let r = er(e, t.length);
	try {
		return lr(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, dr = 256, fr = /* @__PURE__ */ new Map(), pr = 0, mr = (e, t, n, r, i = !1) => {
	if (e.length > Un || t.length > 7 || !Gn.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = fr.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = Kn(s) > Wn ? null : cr(n ? `^(?:${s})$` : s, t, i);
	pr >= dr && (fr.clear(), pr = 0);
	let l = fr.get(s);
	return l === void 0 && fr.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), pr++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, hr = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), ur(e, t, n);
}, gr = class {
	constructor(e) {
		this.nodes = e;
	}
}, _r = (e) => {
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
}, vr = (e) => {
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
	return !_r(e);
}, yr = 256, br = /* @__PURE__ */ new Map(), xr = (e, t) => {
	let n = br.get(e);
	return n === void 0 && (n = vr(e), br.size >= yr && br.clear(), br.set(Array.from(e).join(""), n)), t(e.length), n;
}, Sr = /* @__PURE__ */ new Map(), Cr = (e, t) => {
	let n = Sr.get(e);
	return n === void 0 && (n = Vn(e), n !== null && (n = Array.from(n).join("")), Sr.size >= yr && Sr.clear(), Sr.set(Array.from(e).join(""), n)), t(e.length), n;
}, wr = 256, Tr = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > Un) c = null;
		else if (o) {
			let n = Cr(e, i);
			c = n === null ? null : mr(n, t, r, i, !0);
		} else c = xr(e, i) ? mr(e, t, r, i) : null;
		s !== void 0 && (s.size >= wr && s.clear(), s.set(a, c));
	}
	return c !== null && hr(c, n, i);
}, Er = {
	length: (e, t) => {
		let n = e[0];
		if (D(n)) {
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
		if (E(n)) return T(n);
		if (hn(n)) {
			let e = fn(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !D(r) || !D(i) ? !1 : Tr(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !D(r) || !D(i) ? !1 : Tr(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, Dr = (e, t, n = C) => e === void 0 && t === void 0 || cn(e, t, n), Or = (e, t, n = C) => !cn(e, t, n), kr = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, Ar = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return kr(n) - kr(i);
	}
	return e.length - t.length;
}, jr = (e, t, n = C) => gn(e) && gn(t) ? e < t : D(e) && D(t) ? (n(Math.min(e.length, t.length)), Ar(e, t) < 0) : !1, Mr = (e, t, n = C) => jr(e, t, n) || Dr(e, t, n), A = (e, t, n = C) => gn(e) && gn(t) ? e > t : D(e) && D(t) ? (n(Math.min(e.length, t.length)), Ar(e, t) > 0) : !1, j = (e, t, n = C) => A(e, t, n) || Dr(e, t, n), Nr = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, M = (e, t, n) => {
	let r = T(e);
	for (let i = 0; i < r; i++) {
		let r = ln(e, i);
		if (n(1 + Nr(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, N = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, P = (e) => typeof e == "string" && e.length + 1 > un, F = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = T(e);
	for (let n = 0; n < a; n++) {
		let r = ln(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), P(r) ? i.long.push(r) : i.set.add(N(r));
	}
	return n?.set(e, i), i;
}, I = ({ set: e, long: t }, n, r) => {
	if (P(n)) {
		for (let e of t) if (r(1 + Nr(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(N(n)));
}, Pr = (e, t, n) => {
	let r = T(e);
	for (let i = 0; i < r; i++) if (n(), w(e, i) && t(e[i])) return !0;
	return !1;
}, L = {
	eq: Dr,
	ne: Or,
	lt: jr,
	le: Mr,
	gt: A,
	ge: j,
	in: (e, t, n = C) => E(t) ? M(t, e, n) !== -1 : !1,
	nin: (e, t, n = C) => E(t) ? M(t, e, n) === -1 : !1,
	subsetof: (e, t, n = C, r) => {
		if (!E(e) || !E(t)) return !1;
		let i = F(t, n, r);
		return !Pr(e, (e) => !I(i, e, n), n);
	},
	anyof: (e, t, n = C, r) => {
		if (!E(e) || !E(t)) return !1;
		let i = F(t, n, r);
		return Pr(e, (e) => I(i, e, n), n);
	},
	noneof: (e, t, n = C, r) => {
		if (!E(e) || !E(t)) return !1;
		let i = F(t, n, r);
		return !Pr(e, (e) => I(i, e, n), n);
	},
	sizeof: (e, t) => !E(e) && !D(e) || !E(t) && !D(t) ? !1 : (E(e) ? T(e) : e.length) === (E(t) ? T(t) : t.length),
	size: (e, t) => !E(e) && !D(e) || !gn(t) ? !1 : (E(e) ? T(e) : e.length) === t
}, Fr = (e) => !E(e) && !D(e) ? !1 : (E(e) ? T(e) : e.length) === 0, R = (e, t, n, r = C, i) => !D(e) || !D(t) ? !1 : Tr(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), z = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), Ir = (e, t) => e.concat(`[${t}]`), Lr = (e, t) => e < 0 ? t + e : e, B = (e, t) => {
	let n = T(e), r = Lr(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: w(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, V = (e, t) => {
	for (let n of t) e.push(n);
}, Rr = 1e6, H = 100, zr = 1e6, Br = 20, Vr = 1e4, U = 1e4, Hr = class {
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
					w(n, r) && this.visit(n[r]);
				} else if (w(n, t)) this.visit(n[t]);
				else if (++e.holes > U) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!w(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), E(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: T(e),
				i: 0,
				holes: 0
			});
			else if (hn(e)) {
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
}, Ur = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, z(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = z(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = T(e);
			for (let r = 0; r < n; r++) this.tick(), w(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Hr(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Vr, Math.ceil((this.retained - this.retainedLimit) / Br))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new on(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(Rr, H * e.weight) + t, this.retainedLimit = Math.max(zr, Br * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Hr(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Vr, Math.ceil((this.steps - this.stepLimit) / H))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new on(`Query exceeded ${this.stepLimit} evaluation steps`);
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
			if (!hn(e)) return;
			let r = this.canonicalName(n, n.value);
			if (w(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (E(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: Ir(t, r)
					});
				}), n;
			}
			if (hn(e)) {
				let n = fn(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) w(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!E(e)) return;
			let r = B(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: Ir(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (E(e)) {
				let r = B(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: Ir(t, r.index)
				} : void 0;
			}
			if (hn(e)) {
				let r = String(n.value);
				return w(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!E(e)) return [];
			let r = T(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : Lr(n.start, r), o = n.end === null ? r : Lr(n.end, r)) : (a = n.start === null ? r - 1 : Lr(n.start, r), o = n.end === null ? -r - 1 : Lr(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: w(e, u) ? e[u] : void 0,
				paths: Ir(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (hn(e.value)) {
						let t = this.handleIdentifier(e, r);
						O(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (hn(e.value)) {
						let t = this.handleStringLiteral(e, r);
						O(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (E(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						O(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					V(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": V(n, this.handleBracketExpressionContent(e, r));
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
						O(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						V(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						V(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						O(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (hn(e)) {
					let t = fn(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else E(e) && i.push({
					parent: a,
					keys: null,
					length: T(e),
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
						if (!w(n, t)) continue;
						a = {
							value: n[t],
							paths: Ir(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!w(n, r)) continue;
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
						if (!gn(i) || !gn(r)) i = void 0;
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
					return gn(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return Fr(n);
			if (t.operator === "reg") return R(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = L[t.operator];
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
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new gr(r.value) : new gr(O(r?.value) ? [r?.value] : []);
			}), i = Er[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
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
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : O(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : O(n);
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
					if (E(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: Ir(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (hn(n)) {
						let i = fn(n);
						this.tick(i.length);
						for (let a of i) {
							if (!w(n, a)) continue;
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
					if (!O(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) V(n, a);
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
				throw pn(e) ? new on("Query is nested too deeply") : mn(e) ? new on("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? Rr, this.retainedLimit = this.adaptiveLimit ? zr : Infinity;
	}
}, Wr = (e, t, n) => {
	let r = kn(t), i = new Ur(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? _n(i) ? [] : [i.value] : i?.value;
}, Gr = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = Wr(e, i, n);
		O(t) && r.push(t);
	}
	return r;
}, Kr = (e, t, n = {}) => {
	try {
		return E(t) ? Gr(e, t, n) : Wr(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, qr = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = qr(n, t);
		if (e) return e;
	}
	return null;
}, Jr = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = Kr(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = qr(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
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
}, Yr = (e, t, n, r) => {
	let { parent: i, key: a } = Jr(e, t, r);
	return (Xt[t.action] || Yt)(i, a, n), e;
}, Xr = (e, t) => {
	if (!e) return null;
	let n = t[e.fileName];
	if (n === void 0) throw Error(`Entry not found in state: ${e.fileName}`);
	if (e.jsonPath) {
		let t = Kr(n, e.jsonPath, { returnArray: !0 });
		return t.length === 0 ? Array.isArray(n) ? n : [] : t.length === 1 ? t[0] : t;
	}
	return Array.isArray(e.filePath) && e.filePath.length > 0 ? e.filePath.reduce((e, t) => e ? e[t] : void 0, n) : n;
}, Zr = (e, t, n, r = !1) => {
	if (t) {
		if (!t.filePath || t.filePath.length === 0) {
			let r = e[t.fileName];
			Array.isArray(r) ? r.push(...Array.isArray(n) ? n : [n]) : e[t.fileName] = n;
		} else try {
			Yr(e, t, n, r);
		} catch {}
	}
}, Qr = {
	single: (e, t) => {
		let n = Et[e.templateKey], r = Xr(e.sourcePath, t);
		return (e.func === "fromCollection" ? Wt : Bt)(r, n);
	},
	rowOnColumn: (e, { data: t }) => Kt({
		columns: t?.columns,
		data: t,
		columnSpec: Et[e.templateKey.columnKey],
		rowSpec: Et[e.templateKey.rowKey]
	}),
	columnOnRow: (e, { data: t }) => qt({
		columns: t?.columns,
		data: t,
		columnSpec: Et[e.templateKey.columnKey],
		rowSpec: Et[e.templateKey.rowKey]
	})
}, $r = (e, t, n = !1) => {
	let r = jt[e], i = Qr[r.type](r, t);
	return Zr(t, r.destinationPath, i, n), i;
}, ei = {
	name: "json-renderers-run-instructions",
	version: "1.7.1"
}, ti = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.steps = {
		meta: ei,
		runInstructions: e
	});
}, ni = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => (e.forEach((e) => {
	r && console.log(`[runStep] ${e}`), $r(e, {
		base: t,
		data: n
	}, r);
}), t);
ti(ni);
var ri = {
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
}, ii = {
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
}, ai = {
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
}, oi = {
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
}, si = {
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
}, ci = {
	name: "spec-repo",
	version: "1.17.1"
};
// ../json-renderers-run-instructions/node_modules/spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: ci,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: ii,
	tags: ai,
	tagsSchema: oi,
	instructions: si,
	definitions: ri
});
// ../json-renderers-run-instructions/node_modules/json-write-path/src/v4/utils/toArray.js
var li = (e) => Array.isArray(e) ? e : [e], ui = (e, t, n) => {
	e[t] = n;
}, di = {
	set: ui,
	push: (e, t, n) => {
		e[t].push(...li(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...li(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(li(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(li(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, fi = Object.defineProperty, pi = Object.getOwnPropertySymbols, mi = Object.prototype.hasOwnProperty, hi = Object.prototype.propertyIsEnumerable, gi = Math.pow, _i = (e, t, n) => t in e ? fi(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, vi = (e, t) => {
	for (var n in t ||= {}) mi.call(t, n) && _i(e, n, t[n]);
	if (pi) for (var n of pi(t)) hi.call(t, n) && _i(e, n, t[n]);
	return e;
}, yi = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, bi = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, W = () => void 0, xi = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = K(e);
		return r === K(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = Ei(e), a = Ei(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, Si = (e, t, n = W) => {
	let r = [];
	if (!xi(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!xi(Ci(e.x, t), Ci(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !G(o, i) || !G(a, i)) return !1;
			let s = a[i];
			if (!G(o, i) || !xi(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, G = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Ci = (e, t) => G(e, t) ? e[t] : void 0, wi = 16383, Ti = 1e3, Ei = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > Ti) throw new bi(`Member name too long (maximum ${Ti} characters)`);
	return t;
}, K = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, Di = (e) => e instanceof RangeError && /call stack/i.test(e.message), q = (e) => Array.isArray(e), Oi = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), ki = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, Ai = (e) => typeof e == "number", J = (e) => typeof e == "string", ji = (e) => e === void 0, Mi = (e) => e !== void 0;
function Ni(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function Pi(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function Fi(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var Ii = class extends SyntaxError {
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
function Li(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Vr }, a = Vr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, v = /^[*\/]/, ie = /^[a-zA-Z_]/, ae = /^[\x80-\uFFFF_]/, oe = /^[a-zA-Z0-9_]/, se = /^[0-9@$\-]/, ce = /^[^\/\\]/, le = /^[gimsuy]/, ue = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, de = /^[\uD800-\uDBFF]/, fe = /^[\uDC00-\uDFFF]/, y = /^[0-9]/, pe = /^[1-9]/, me = /^[eE]/, he = /^["\\]/, ge = /^['\\]/, _e = /^[ -\uD7FF\uE000-\uFFFF]/, ve = /^[dD]/, ye = /^[89abAB]/, be = /^[c-fC-F]/, xe = /^[0-9a-fA-F]/, Se = /^[ \t\n\r]/, Ce = z([",", "]"], !1, !1, !1), we = R("length", !1), Te = R("count", !1), Ee = R("match", !1), De = R("search", !1), Oe = R("value", !1), ke = z(["+", "-"], !1, !1, !1), Ae = z(["*", "/"], !1, !1, !1), je = B("string"), Me = z([
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
	], !1, !1, !1), Le = R("$", !1), Re = R("@", !1), ze = R("..", !1), Be = R(".", !1), Ve = R("*", !1), He = R("&&", !1), Ue = R("||", !1), We = R("!", !1), Ge = R("==", !1), Ke = R("!=", !1), qe = R(">=", !1), Je = R(">", !1), Ye = R("<=", !1), Xe = R("<", !1), Ze = R("=~", !1), Qe = R("in", !1), $e = R("nin", !1), et = R("subsetof", !1), tt = R("anyof", !1), nt = R("noneof", !1), rt = R("sizeof", !1), it = R("size", !1), at = R("empty", !1), ot = R("true", !1), st = R("false", !1), b = R("null", !1), ct = R("{", !1), lt = R("}", !1), ut = R("[", !1), dt = R("]", !1), ft = R(":", !1), pt = R(",", !1), mt = R("(", !1), ht = R(")", !1), gt = R("?", !1), _t = B("regex"), vt = R("/", !1), yt = z(["/", "\\"], !0, !1, !1), x = R("\\", !1), bt = Ir(), xt = z([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), St = z([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), Ct = z([["\ud800", "\udbff"]], !1, !1, !1), wt = z([["\udc00", "\udfff"]], !1, !1, !1), S = z([["0", "9"]], !1, !1, !1), Tt = B("number"), Et = R("0", !1), Dt = z([["1", "9"]], !1, !1, !1), Ot = B("integer"), kt = z(["e", "E"], !1, !1, !1), At = R("\"", !1), jt = R("'", !1), Mt = z(["\"", "\\"], !1, !1, !1), Nt = z(["'", "\\"], !1, !1, !1), Pt = z([[" ", "퟿"], ["", "￿"]], !1, !1, !1), Ft = R("b", !1), It = R("f", !1), Lt = R("n", !1), Rt = R("r", !1), zt = R("t", !1), Bt = R("u", !1), Vt = z(["d", "D"], !1, !1, !1), Ht = z([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Ut = R("\\u", !1), Wt = z([["c", "f"], ["C", "F"]], !1, !1, !1), Gt = z([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Kt = z([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function qt(e) {
		return {
			type: "root",
			next: Ni(e)
		};
	}
	function Jt(e) {
		return e.map((e) => e[1]);
	}
	function Yt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Xt(e) {
		return e;
	}
	function Zt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function Qt() {
		return { type: "wildcard" };
	}
	function $t(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function en() {
		return { type: "wildcard" };
	}
	function tn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function nn(e) {
		return e;
	}
	function rn(e) {
		return e;
	}
	function an(e, t) {
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
	function on(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function C(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function sn(e, t) {
		return Fi(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function cn(e, t) {
		return Fi(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function w(e) {
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
		return t !== null || Pi(e);
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
	function T(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function pn() {
		return { operator: "empty" };
	}
	function E() {
		return "eq";
	}
	function mn() {
		return "ne";
	}
	function hn() {
		return "le";
	}
	function gn() {
		return "lt";
	}
	function D() {
		return "ge";
	}
	function _n() {
		return "gt";
	}
	function O() {
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
		return t.length === 0 ? e : Fi(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function In(e, t) {
		return t.length === 0 ? e : Fi(e, t, (e, t) => ({
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
			next: Ni(e)
		};
	}
	function zn(e) {
		return {
			type: "current",
			next: Ni(e)
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
			value: _a(e)
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
	function k(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function qn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Jn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Yn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function Xn(e) {
		return e;
	}
	function Zn(e) {
		for (let [t] of e || []) _a(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function Qn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function $n(e, t) {
		return [e, t.value];
	}
	function er(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function tr(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function nr(e) {
		return _a(e);
	}
	function rr(e) {
		return _a(e);
	}
	function ir() {
		return "true";
	}
	function ar() {
		return "false";
	}
	function or() {
		return "null";
	}
	function sr(e) {
		return _a(e);
	}
	function cr() {
		return "true";
	}
	function lr() {
		return "false";
	}
	function ur() {
		return "null";
	}
	function dr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function fr(e) {
		return e.join("");
	}
	function pr(e, t) {
		let n = parseFloat(Pr());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && L("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function mr() {
		let e = parseInt(Pr(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && L("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function hr(e) {
		return e.join("");
	}
	function gr(e) {
		return e.join("");
	}
	function _r(e) {
		return e;
	}
	function vr() {
		return "\"";
	}
	function yr(e) {
		return e;
	}
	function br(e) {
		return e;
	}
	function xr() {
		return "'";
	}
	function Sr(e) {
		return e;
	}
	function Cr() {
		return "\\";
	}
	function wr() {
		return "/";
	}
	function Tr() {
		return "\b";
	}
	function Er() {
		return "\f";
	}
	function Dr() {
		return "\n";
	}
	function Or() {
		return "\r";
	}
	function kr() {
		return "	";
	}
	function Ar(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function jr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function Mr(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let A = t.peg$currPos | 0, j = A, Nr = [{
		line: 1,
		column: 1
	}], M = A, N = t.peg$maxFailExpected || [], P = t.peg$silentFails | 0, F = /* @__PURE__ */ new Map(), I;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function Pr() {
		return e.substring(j, A);
	}
	function L(e, t) {
		throw t = t === void 0 ? Rr(j, A) : t, zr(e, t);
	}
	function Fr(t = A) {
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
	function Ir() {
		return { type: "any" };
	}
	function Lr() {
		return { type: "end" };
	}
	function B(e) {
		return {
			type: "other",
			description: e
		};
	}
	function V(t) {
		let n = Nr[t], r;
		if (n) return n;
		if (t >= Nr.length) r = Nr.length - 1;
		else for (r = t; !Nr[--r];);
		for (n = Nr[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return Nr[t] = n, n;
	}
	function Rr(e, t, n) {
		let i = V(e), a = V(t), o = {
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
	function H(e) {
		A < M || (A > M && (M = A, N = []), N.push(e));
	}
	function zr(e, t) {
		return new Ii(e, null, null, t);
	}
	function Br(e, t, n) {
		return new Ii(Ii.buildMessage(e, t), e, t, n);
	}
	function Vr() {
		let e, t, r, i;
		return e = A, t = G(), t === n ? (A = e, e = n) : (r = U(), i = ga(), i === n ? (A = e, e = n) : (j = e, e = qt(r))), e;
	}
	function U() {
		let e, t, r, i, a;
		for (e = A, t = [], r = A, i = $(), a = Hr(), a === n ? (A = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = A, i = $(), a = Hr(), a === n ? (A = r, r = n) : (i = [i, a], r = i);
		return j = e, t = Jt(t), e = t, e;
	}
	function Hr() {
		let e;
		return e = Wr(), e === n && (e = Ur()), e;
	}
	function Ur() {
		let e, t, r;
		return e = A, t = Ti(), t === n ? (A = e, e = n) : (r = Gr(), r === n ? (A = e, e = n) : (j = e, e = Yt(r))), e === n && (e = A, t = qr(), t !== n && (j = e, t = Xt(t)), e = t), e;
	}
	function Wr() {
		let e, t, r;
		return e = A, t = wi(), t === n ? (A = e, e = n) : (r = Kr(), r === n ? (A = e, e = n) : (j = e, e = Zt(r))), e;
	}
	function Gr() {
		let e, t;
		return e = A, t = Ei(), t !== n && (j = e, t = Qt()), e = t, e === n && (e = A, t = Si(), t !== n && (j = e, t = $t(t)), e = t), e;
	}
	function Kr() {
		let e, t;
		return e = A, t = Ei(), t !== n && (j = e, t = en()), e = t, e === n && (e = A, t = Si(), t !== n && (j = e, t = tn(t)), e = t, e === n && (e = A, t = qr(), t !== n && (j = e, t = nn(t)), e = t)), e;
	}
	function qr() {
		let e, t, r, i;
		return e = A, t = Zi(), t === n ? (A = e, e = n) : ($(), r = Jr(), r === n ? (A = e, e = n) : ($(), i = Qi(), i === n ? (A = e, e = n) : (j = e, e = rn(r)))), e;
	}
	function Jr() {
		let e, t, r, i, a, o, s, c;
		if (e = A, t = fi(), t !== n) {
			for (r = [], i = A, a = $(), o = Y(), o === n ? (A = i, i = n) : (s = $(), c = fi(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = A, a = $(), o = Y(), o === n ? (A = i, i = n) : (s = $(), c = fi(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			j = e, e = an(t, r);
		} else A = e, e = n;
		return e;
	}
	function Yr() {
		let t, r, i, a, o, s, c, l, u;
		return t = A, r = na(), r === n ? (A = t, t = n) : ($(), i = ea(), i === n ? (A = t, t = n) : ($(), a = Xr(), a === n ? (A = t, t = n) : ($(), o = ta(), o === n ? (A = t, t = n) : (s = A, P++, c = A, l = $(), u = e.charAt(A), re.test(u) ? A++ : (u = n, P === 0 && H(Ce)), u === n ? (A = c, c = n) : (l = [l, u], c = l), P--, c === n ? s = n : (A = s, s = void 0), s === n ? (A = t, t = n) : (j = t, t = on(a)))))), t === n && (t = A, r = na(), r === n ? (A = t, t = n) : ($(), i = Xr(), i === n ? (A = t, t = n) : (j = t, t = C(i)))), t;
	}
	function Xr() {
		let e, t, r, i, a, o, s, c, l = A * 91 + 10, u = F.get(l);
		if (u) return A = u.nextPos, u.result;
		if (e = A, t = Zr(), t !== n) {
			for (r = [], i = A, a = $(), o = Di(), o === n ? (A = i, i = n) : (s = $(), c = Zr(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = A, a = $(), o = Di(), o === n ? (A = i, i = n) : (s = $(), c = Zr(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			j = e, e = sn(t, r);
		} else A = e, e = n;
		return F.set(l, {
			nextPos: A,
			result: e
		}), e;
	}
	function Zr() {
		let e, t, r, i, a, o, s, c;
		if (e = A, t = Qr(), t !== n) {
			for (r = [], i = A, a = $(), o = K(), o === n ? (A = i, i = n) : (s = $(), c = Qr(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = A, a = $(), o = K(), o === n ? (A = i, i = n) : (s = $(), c = Qr(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			j = e, e = cn(t, r);
		} else A = e, e = n;
		return e;
	}
	function Qr() {
		let e, t, r, i, a;
		return e = A, t = q(), t === n ? (A = e, e = n) : ($(), r = ea(), r === n ? (A = e, e = n) : ($(), i = Xr(), i === n ? (A = e, e = n) : ($(), a = ta(), a === n ? (A = e, e = n) : (j = e, e = w(i))))), e === n && (e = A, t = q(), t === n ? (A = e, e = n) : ($(), r = ni(), r === n ? (A = e, e = n) : (j = e, e = ln(r))), e === n && (e = $r())), e;
	}
	function $r() {
		let e, t, r, i, a;
		return e = A, t = si(), t === n ? (A = e, e = n) : (r = A, i = $(), a = ei(), a === n ? (A = r, r = n) : (i = [i, a], r = i), r === n && (r = null), j = A, i = un(t, r), i = i ? void 0 : n, i === n ? (A = e, e = n) : (j = e, e = dn(t, r))), e === n && (e = ni()), e;
	}
	function ei() {
		let e, t, r;
		return e = A, t = ti(), t === n ? (A = e, e = n) : ($(), r = si(), r === n ? (A = e, e = n) : (j = e, e = fn(t, r))), e === n && (e = A, t = Li(), t === n ? (A = e, e = n) : ($(), r = pi(), r === n ? (A = e, e = n) : (j = e, e = T(r))), e === n && (e = A, t = Gi(), t !== n && (j = e, t = pn()), e = t)), e;
	}
	function ti() {
		let e, t;
		return e = A, t = Oi(), t !== n && (j = e, t = E()), e = t, e === n && (e = A, t = ki(), t !== n && (j = e, t = mn()), e = t, e === n && (e = A, t = ji(), t !== n && (j = e, t = hn()), e = t, e === n && (e = A, t = Mi(), t !== n && (j = e, t = gn()), e = t, e === n && (e = A, t = Ai(), t !== n && (j = e, t = D()), e = t, e === n && (e = A, t = J(), t !== n && (j = e, t = _n()), e = t, e === n && (e = A, t = Ri(), t !== n && (j = e, t = O()), e = t, e === n && (e = A, t = zi(), t !== n && (j = e, t = vn()), e = t, e === n && (e = A, t = Bi(), t !== n && (j = e, t = yn()), e = t, e === n && (e = A, t = Vi(), t !== n && (j = e, t = bn()), e = t, e === n && (e = A, t = Hi(), t !== n && (j = e, t = xn()), e = t, e === n && (e = A, t = Ui(), t !== n && (j = e, t = Sn()), e = t, e === n && (e = A, t = Wi(), t !== n && (j = e, t = Cn()), e = t)))))))))))), e;
	}
	function ni() {
		let e, t, r, i;
		return e = A, t = ea(), t === n ? (A = e, e = n) : ($(), r = Xr(), r === n ? (A = e, e = n) : ($(), i = ta(), i === n ? (A = e, e = n) : (j = e, e = wn(r)))), e === n && (e = ri(), e === n && (e = ui(), e === n && (e = A, t = Ki(), t !== n && (j = e, t = Tn()), e = t, e === n && (e = A, t = qi(), t !== n && (j = e, t = En()), e = t, e === n && (e = A, t = Ji(), t !== n && (j = e, t = Dn()), e = t))))), e;
	}
	function ri() {
		let e, t, r, i, a;
		return e = A, t = ii(), t === n ? (A = e, e = n) : (r = ea(), r === n ? (A = e, e = n) : ($(), i = ai(), i === n && (i = null), $(), a = ta(), a === n ? (A = e, e = n) : (j = e, e = On(t, i)))), e;
	}
	function ii() {
		let t, r;
		return t = A, e.substr(A, 6) === o ? (r = o, A += 6) : (r = n, P === 0 && H(we)), r !== n && (j = t, r = kn()), t = r, t === n && (t = A, e.substr(A, 5) === s ? (r = s, A += 5) : (r = n, P === 0 && H(Te)), r !== n && (j = t, r = An()), t = r, t === n && (t = A, e.substr(A, 5) === c ? (r = c, A += 5) : (r = n, P === 0 && H(Ee)), r !== n && (j = t, r = jn()), t = r, t === n && (t = A, e.substr(A, 6) === l ? (r = l, A += 6) : (r = n, P === 0 && H(De)), r !== n && (j = t, r = Mn()), t = r, t === n && (t = A, e.substr(A, 5) === u ? (r = u, A += 5) : (r = n, P === 0 && H(Oe)), r !== n && (j = t, r = Nn()), t = r)))), t;
	}
	function ai() {
		let e, t, r, i, a, o, s, c;
		if (e = A, t = oi(), t !== n) {
			for (r = [], i = A, a = $(), o = Y(), o === n ? (A = i, i = n) : (s = $(), c = oi(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = A, a = $(), o = Y(), o === n ? (A = i, i = n) : (s = $(), c = oi(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			j = e, e = Pn(t, r);
		} else A = e, e = n;
		return e;
	}
	function oi() {
		let e;
		return e = si(), e === n && (e = hi()), e;
	}
	function si() {
		let t, r, i, a, o, s, c, l, u = A * 91 + 21, d = F.get(u);
		if (d) return A = d.nextPos, d.result;
		if (t = A, r = ci(), r !== n) {
			for (i = [], a = A, o = $(), s = e.charAt(A), _.test(s) ? A++ : (s = n, P === 0 && H(ke)), s === n ? (A = a, a = n) : (c = $(), l = ci(), l === n ? (A = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = A, o = $(), s = e.charAt(A), _.test(s) ? A++ : (s = n, P === 0 && H(ke)), s === n ? (A = a, a = n) : (c = $(), l = ci(), l === n ? (A = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			j = t, t = Fn(r, i);
		} else A = t, t = n;
		return F.set(u, {
			nextPos: A,
			result: t
		}), t;
	}
	function ci() {
		let t, r, i, a, o, s, c, l;
		if (t = A, r = li(), r !== n) {
			for (i = [], a = A, o = $(), s = e.charAt(A), v.test(s) ? A++ : (s = n, P === 0 && H(Ae)), s === n ? (A = a, a = n) : (c = $(), l = li(), l === n ? (A = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = A, o = $(), s = e.charAt(A), v.test(s) ? A++ : (s = n, P === 0 && H(Ae)), s === n ? (A = a, a = n) : (c = $(), l = li(), l === n ? (A = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			j = t, t = In(r, i);
		} else A = t, t = n;
		return t;
	}
	function li() {
		let e, t, r, i;
		return e = A, t = ea(), t === n ? (A = e, e = n) : ($(), r = si(), r === n ? (A = e, e = n) : ($(), i = ta(), i === n ? (A = e, e = n) : (j = e, e = Ln(r)))), e === n && (e = ri(), e === n && (e = mi(), e === n && (e = ui()))), e;
	}
	function ui() {
		let e, t, r;
		return e = A, t = G(), t === n ? (A = e, e = n) : (r = U(), r === n ? (A = e, e = n) : (j = e, e = Rn(r))), e === n && (e = A, t = Ci(), t === n ? (A = e, e = n) : (r = U(), r === n ? (A = e, e = n) : (j = e, e = zn(r)))), e;
	}
	function di() {
		let e, t, r, i, a, o, s, c, l;
		return e = A, t = A, r = la(), r === n ? (A = t, t = n) : (i = $(), r = [r, i], t = r), t === n && (t = null), r = $i(), r === n ? (A = e, e = n) : (i = $(), a = A, o = la(), o === n ? (A = a, a = n) : (s = $(), o = [o, s], a = o), a === n && (a = null), o = A, s = $i(), s === n ? (A = o, o = n) : (c = $(), l = la(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), j = e, e = Bn(t, a, o)), e;
	}
	function fi() {
		let e, t;
		return e = Yr(), e === n && (e = di(), e === n && (e = A, t = Ei(), t !== n && (j = e, t = Vn()), e = t, e === n && (e = A, t = la(), t !== n && (j = e, t = Hn(t)), e = t, e === n && (e = A, t = da(), t !== n && (j = e, t = Un(t)), e = t, e === n && (e = A, t = W(), t !== n && (j = e, t = Wn(t)), e = t))))), e;
	}
	function pi() {
		let e, t, r;
		return e = A, t = ra(), t === n ? (A = e, e = n) : (r = ia(), j = e, e = Gn(t, r)), e;
	}
	function mi() {
		let e, t;
		return e = A, t = hi(), t !== n && (j = e, t = Kn(t)), e = t, e === n && (e = A, t = sa(), t !== n && (j = e, t = k(t)), e = t, e === n && (e = gi(), e === n && (e = yi(), e === n && (e = A, t = Ki(), t !== n && (j = e, t = qn()), e = t, e === n && (e = A, t = qi(), t !== n && (j = e, t = Jn()), e = t, e === n && (e = A, t = Ji(), t !== n && (j = e, t = Yn()), e = t)))))), e;
	}
	function hi() {
		let e, t;
		return P++, e = A, t = da(), t !== n && (j = e, t = Xn(t)), e = t, P--, e === n && (t = n, P === 0 && H(je)), e;
	}
	function gi() {
		let e, t, r, i;
		return e = A, t = Yi(), t === n ? (A = e, e = n) : ($(), r = _i(), r === n && (r = null), $(), i = Xi(), i === n ? (A = e, e = n) : (j = e, e = Zn(r))), e;
	}
	function _i() {
		let e, t, r, i, a, o, s, c;
		if (e = A, t = vi(), t !== n) {
			for (r = [], i = A, a = $(), o = Y(), o === n ? (A = i, i = n) : (s = $(), c = vi(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = A, a = $(), o = Y(), o === n ? (A = i, i = n) : (s = $(), c = vi(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			j = e, e = Qn(t, r);
		} else A = e, e = n;
		return e;
	}
	function vi() {
		let e, t, r, i;
		return e = A, t = da(), t === n ? (A = e, e = n) : ($(), r = $i(), r === n ? (A = e, e = n) : ($(), i = mi(), i === n ? (A = e, e = n) : (j = e, e = $n(t, i)))), e;
	}
	function yi() {
		let e, t, r, i;
		return e = A, t = Zi(), t === n ? (A = e, e = n) : ($(), r = bi(), r === n && (r = null), $(), i = Qi(), i === n ? (A = e, e = n) : (j = e, e = er(r))), e;
	}
	function bi() {
		let e, t, r, i, a, o, s, c;
		if (e = A, t = mi(), t !== n) {
			for (r = [], i = A, a = $(), o = Y(), o === n ? (A = i, i = n) : (s = $(), c = mi(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = A, a = $(), o = Y(), o === n ? (A = i, i = n) : (s = $(), c = mi(), c === n ? (A = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			j = e, e = tr(t, r);
		} else A = e, e = n;
		return e;
	}
	function W() {
		let t, r, i, a, o, s;
		if (t = A, r = A, i = A, a = e.charAt(A), ie.test(a) ? A++ : (a = n, P === 0 && H(Me)), a !== n) {
			for (o = [], s = xi(); s !== n;) o.push(s), s = xi();
			a = [a, o], i = a;
		} else A = i, i = n;
		if (r = i === n ? i : e.substring(r, A), r !== n && (j = t, r = nr(r)), t = r, t === n) {
			if (t = A, r = A, i = [], a = e.charAt(A), ae.test(a) ? A++ : (a = n, P === 0 && H(Ne)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(A), ae.test(a) ? A++ : (a = n, P === 0 && H(Ne));
			else i = n;
			r = i === n ? i : e.substring(r, A), r !== n && (j = t, r = rr(r)), t = r, t === n && (t = A, r = Ki(), r !== n && (j = t, r = ir()), t = r, t === n && (t = A, r = qi(), r !== n && (j = t, r = ar()), t = r, t === n && (t = A, r = Ji(), r !== n && (j = t, r = or()), t = r)));
		}
		return t;
	}
	function xi() {
		let t, r, i, a;
		return t = e.charAt(A), oe.test(t) ? A++ : (t = n, P === 0 && H(Pe)), t === n && (t = A, e.charCodeAt(A) === 45 ? (r = "-", A++) : (r = n, P === 0 && H(Fe)), r === n ? (A = t, t = n) : (i = A, P++, a = e.charAt(A), se.test(a) ? A++ : (a = n, P === 0 && H(Ie)), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r))), t;
	}
	function Si() {
		let e, t;
		return e = A, t = aa(), t !== n && (j = e, t = sr(t)), e = t, e === n && (e = A, t = Ki(), t !== n && (j = e, t = cr()), e = t, e === n && (e = A, t = qi(), t !== n && (j = e, t = lr()), e = t, e === n && (e = A, t = Ji(), t !== n && (j = e, t = ur()), e = t))), e;
	}
	function G() {
		let t;
		return e.charCodeAt(A) === 36 ? (t = "$", A++) : (t = n, P === 0 && H(Le)), t;
	}
	function Ci() {
		let t;
		return e.charCodeAt(A) === 64 ? (t = "@", A++) : (t = n, P === 0 && H(Re)), t;
	}
	function wi() {
		let t;
		return e.substr(A, 2) === ".." ? (t = "..", A += 2) : (t = n, P === 0 && H(ze)), t;
	}
	function Ti() {
		let t;
		return e.charCodeAt(A) === 46 ? (t = ".", A++) : (t = n, P === 0 && H(Be)), t;
	}
	function Ei() {
		let t;
		return e.charCodeAt(A) === 42 ? (t = "*", A++) : (t = n, P === 0 && H(Ve)), t;
	}
	function K() {
		let t;
		return e.substr(A, 2) === "&&" ? (t = "&&", A += 2) : (t = n, P === 0 && H(He)), t;
	}
	function Di() {
		let t;
		return e.substr(A, 2) === "||" ? (t = "||", A += 2) : (t = n, P === 0 && H(Ue)), t;
	}
	function q() {
		let t;
		return e.charCodeAt(A) === 33 ? (t = "!", A++) : (t = n, P === 0 && H(We)), t;
	}
	function Oi() {
		let t;
		return e.substr(A, 2) === "==" ? (t = "==", A += 2) : (t = n, P === 0 && H(Ge)), t;
	}
	function ki() {
		let t;
		return e.substr(A, 2) === "!=" ? (t = "!=", A += 2) : (t = n, P === 0 && H(Ke)), t;
	}
	function Ai() {
		let t;
		return e.substr(A, 2) === ">=" ? (t = ">=", A += 2) : (t = n, P === 0 && H(qe)), t;
	}
	function J() {
		let t;
		return e.charCodeAt(A) === 62 ? (t = ">", A++) : (t = n, P === 0 && H(Je)), t;
	}
	function ji() {
		let t;
		return e.substr(A, 2) === "<=" ? (t = "<=", A += 2) : (t = n, P === 0 && H(Ye)), t;
	}
	function Mi() {
		let t;
		return e.charCodeAt(A) === 60 ? (t = "<", A++) : (t = n, P === 0 && H(Xe)), t;
	}
	function Li() {
		let t;
		return e.substr(A, 2) === "=~" ? (t = "=~", A += 2) : (t = n, P === 0 && H(Ze)), t;
	}
	function Ri() {
		let t, r, i, a;
		return t = A, e.substr(A, 2) === "in" ? (r = "in", A += 2) : (r = n, P === 0 && H(Qe)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = A, e.substr(A, 3) === "nin" ? (r = "nin", A += 3) : (r = n, P === 0 && H($e)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = A, e.substr(A, 8) === d ? (r = d, A += 8) : (r = n, P === 0 && H(et)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = A, e.substr(A, 5) === f ? (r = f, A += 5) : (r = n, P === 0 && H(tt)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = A, e.substr(A, 6) === p ? (r = p, A += 6) : (r = n, P === 0 && H(nt)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = A, e.substr(A, 6) === m ? (r = m, A += 6) : (r = n, P === 0 && H(rt)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = A, e.substr(A, 4) === ee ? (r = ee, A += 4) : (r = n, P === 0 && H(it)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = A, e.substr(A, 5) === h ? (r = h, A += 5) : (r = n, P === 0 && H(at)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = A, e.substr(A, 4) === te ? (r = te, A += 4) : (r = n, P === 0 && H(ot)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = A, e.substr(A, 5) === ne ? (r = ne, A += 5) : (r = n, P === 0 && H(st)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t, r, i, a;
		return t = A, e.substr(A, 4) === g ? (r = g, A += 4) : (r = n, P === 0 && H(b)), r === n ? (A = t, t = n) : (i = A, P++, a = Q(), P--, a === n ? i = void 0 : (A = i, i = n), i === n ? (A = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(A) === 123 ? (t = "{", A++) : (t = n, P === 0 && H(ct)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(A) === 125 ? (t = "}", A++) : (t = n, P === 0 && H(lt)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(A) === 91 ? (t = "[", A++) : (t = n, P === 0 && H(ut)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(A) === 93 ? (t = "]", A++) : (t = n, P === 0 && H(dt)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(A) === 58 ? (t = ":", A++) : (t = n, P === 0 && H(ft)), t;
	}
	function Y() {
		let t;
		return e.charCodeAt(A) === 44 ? (t = ",", A++) : (t = n, P === 0 && H(pt)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(A) === 40 ? (t = "(", A++) : (t = n, P === 0 && H(mt)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(A) === 41 ? (t = ")", A++) : (t = n, P === 0 && H(ht)), t;
	}
	function na() {
		let t;
		return e.charCodeAt(A) === 63 ? (t = "?", A++) : (t = n, P === 0 && H(gt)), t;
	}
	function ra() {
		let t, r, i, a, o, s;
		if (P++, t = A, e.charCodeAt(A) === 47 ? (r = "/", A++) : (r = n, P === 0 && H(vt)), r !== n) {
			for (i = [], a = e.charAt(A), ce.test(a) ? A++ : (a = n, P === 0 && H(yt)), a === n && (a = A, e.charCodeAt(A) === 92 ? (o = "\\", A++) : (o = n, P === 0 && H(x)), o === n ? (A = a, a = n) : (e.length > A ? (s = e.charAt(A), A++) : (s = n, P === 0 && H(bt)), s === n ? (A = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(A), ce.test(a) ? A++ : (a = n, P === 0 && H(yt)), a === n && (a = A, e.charCodeAt(A) === 92 ? (o = "\\", A++) : (o = n, P === 0 && H(x)), o === n ? (A = a, a = n) : (e.length > A ? (s = e.charAt(A), A++) : (s = n, P === 0 && H(bt)), s === n ? (A = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(A) === 47 ? (a = "/", A++) : (a = n, P === 0 && H(vt)), a === n ? (A = t, t = n) : (j = t, t = dr(i));
		} else A = t, t = n;
		return P--, t === n && (r = n, P === 0 && H(_t)), t;
	}
	function ia() {
		let t, r, i;
		for (t = A, r = [], i = e.charAt(A), le.test(i) ? A++ : (i = n, P === 0 && H(xt)); i !== n;) r.push(i), i = e.charAt(A), le.test(i) ? A++ : (i = n, P === 0 && H(xt));
		return j = t, r = fr(r), t = r, t;
	}
	function aa() {
		let t, r, i, a, o;
		if (t = A, r = A, i = oa(), i !== n) {
			for (a = [], o = X(); o !== n;) a.push(o), o = X();
			i = [i, a], r = i;
		} else A = r, r = n;
		return t = r === n ? r : e.substring(t, A), t;
	}
	function oa() {
		let t, r, i;
		return t = e.charAt(A), ue.test(t) ? A++ : (t = n, P === 0 && H(St)), t === n && (t = A, r = e.charAt(A), de.test(r) ? A++ : (r = n, P === 0 && H(Ct)), r === n ? (A = t, t = n) : (i = e.charAt(A), fe.test(i) ? A++ : (i = n, P === 0 && H(wt)), i === n ? (A = t, t = n) : (r = [r, i], t = r))), t;
	}
	function X() {
		let t;
		return t = oa(), t === n && (t = e.charAt(A), y.test(t) ? A++ : (t = n, P === 0 && H(S))), t;
	}
	function sa() {
		let t, r, i, a, o, s, c;
		if (P++, t = A, e.charCodeAt(A) === 45 ? (r = "-", A++) : (r = n, P === 0 && H(Fe)), r === n && (r = null), i = ca(), i !== n) {
			if (a = A, e.charCodeAt(A) === 46 ? (o = ".", A++) : (o = n, P === 0 && H(Be)), o !== n) {
				if (s = [], c = e.charAt(A), y.test(c) ? A++ : (c = n, P === 0 && H(S)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(A), y.test(c) ? A++ : (c = n, P === 0 && H(S));
				else s = n;
				s === n ? (A = a, a = n) : (o = [o, s], a = o);
			} else A = a, a = n;
			a === n && (a = null), o = ua(), o === n && (o = null), j = t, t = pr(a, o);
		} else A = t, t = n;
		return P--, t === n && (r = n, P === 0 && H(Tt)), t;
	}
	function ca() {
		let t, r, i, a;
		if (e.charCodeAt(A) === 48 ? (t = "0", A++) : (t = n, P === 0 && H(Et)), t === n) {
			if (t = A, r = e.charAt(A), pe.test(r) ? A++ : (r = n, P === 0 && H(Dt)), r !== n) {
				for (i = [], a = e.charAt(A), y.test(a) ? A++ : (a = n, P === 0 && H(S)); a !== n;) i.push(a), a = e.charAt(A), y.test(a) ? A++ : (a = n, P === 0 && H(S));
				r = [r, i], t = r;
			} else A = t, t = n;
		}
		return t;
	}
	function la() {
		let t, r, i, a, o, s;
		if (P++, t = A, e.charCodeAt(A) === 48 ? (r = "0", A++) : (r = n, P === 0 && H(Et)), r === n) {
			if (r = A, e.charCodeAt(A) === 45 ? (i = "-", A++) : (i = n, P === 0 && H(Fe)), i === n && (i = null), a = e.charAt(A), pe.test(a) ? A++ : (a = n, P === 0 && H(Dt)), a !== n) {
				for (o = [], s = e.charAt(A), y.test(s) ? A++ : (s = n, P === 0 && H(S)); s !== n;) o.push(s), s = e.charAt(A), y.test(s) ? A++ : (s = n, P === 0 && H(S));
				i = [
					i,
					a,
					o
				], r = i;
			} else A = r, r = n;
		}
		return r !== n && (j = t, r = mr()), t = r, P--, t === n && (r = n, P === 0 && H(Ot)), t;
	}
	function ua() {
		let t, r, i, a, o;
		if (t = A, r = e.charAt(A), me.test(r) ? A++ : (r = n, P === 0 && H(kt)), r !== n) {
			if (i = e.charAt(A), _.test(i) ? A++ : (i = n, P === 0 && H(ke)), i === n && (i = null), a = [], o = e.charAt(A), y.test(o) ? A++ : (o = n, P === 0 && H(S)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(A), y.test(o) ? A++ : (o = n, P === 0 && H(S));
			else a = n;
			a === n ? (A = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else A = t, t = n;
		return t;
	}
	function da() {
		let t, r, i, a;
		if (P++, t = A, e.charCodeAt(A) === 34 ? (r = "\"", A++) : (r = n, P === 0 && H(At)), r !== n) {
			for (i = [], a = fa(); a !== n;) i.push(a), a = fa();
			e.charCodeAt(A) === 34 ? (a = "\"", A++) : (a = n, P === 0 && H(At)), a === n ? (A = t, t = n) : (j = t, t = hr(i));
		} else A = t, t = n;
		if (t === n) {
			if (t = A, e.charCodeAt(A) === 39 ? (r = "'", A++) : (r = n, P === 0 && H(jt)), r !== n) {
				for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
				e.charCodeAt(A) === 39 ? (a = "'", A++) : (a = n, P === 0 && H(jt)), a === n ? (A = t, t = n) : (j = t, t = gr(i));
			} else A = t, t = n;
		}
		return P--, t === n && (r = n, P === 0 && H(je)), t;
	}
	function fa() {
		let t, r, i;
		return t = A, r = A, P++, i = e.charAt(A), he.test(i) ? A++ : (i = n, P === 0 && H(Mt)), P--, i === n ? r = void 0 : (A = r, r = n), r === n ? (A = t, t = n) : (i = ma(), i === n ? (A = t, t = n) : (j = t, t = _r(i))), t === n && (t = A, e.charCodeAt(A) === 92 ? (r = "\\", A++) : (r = n, P === 0 && H(x)), r === n ? (A = t, t = n) : (e.charCodeAt(A) === 34 ? (i = "\"", A++) : (i = n, P === 0 && H(At)), i === n ? (A = t, t = n) : (j = t, t = vr())), t === n && (t = A, e.charCodeAt(A) === 92 ? (r = "\\", A++) : (r = n, P === 0 && H(x)), r === n ? (A = t, t = n) : (i = ha(), i === n ? (A = t, t = n) : (j = t, t = yr(i))))), t;
	}
	function pa() {
		let t, r, i;
		return t = A, r = A, P++, i = e.charAt(A), ge.test(i) ? A++ : (i = n, P === 0 && H(Nt)), P--, i === n ? r = void 0 : (A = r, r = n), r === n ? (A = t, t = n) : (i = ma(), i === n ? (A = t, t = n) : (j = t, t = br(i))), t === n && (t = A, e.charCodeAt(A) === 92 ? (r = "\\", A++) : (r = n, P === 0 && H(x)), r === n ? (A = t, t = n) : (e.charCodeAt(A) === 39 ? (i = "'", A++) : (i = n, P === 0 && H(jt)), i === n ? (A = t, t = n) : (j = t, t = xr())), t === n && (t = A, e.charCodeAt(A) === 92 ? (r = "\\", A++) : (r = n, P === 0 && H(x)), r === n ? (A = t, t = n) : (i = ha(), i === n ? (A = t, t = n) : (j = t, t = Sr(i))))), t;
	}
	function ma() {
		let t, r, i, a;
		return t = e.charAt(A), _e.test(t) ? A++ : (t = n, P === 0 && H(Pt)), t === n && (t = A, r = A, i = e.charAt(A), de.test(i) ? A++ : (i = n, P === 0 && H(Ct)), i === n ? (A = r, r = n) : (a = e.charAt(A), fe.test(a) ? A++ : (a = n, P === 0 && H(wt)), a === n ? (A = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, A)), t;
	}
	function ha() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = A, e.charCodeAt(A) === 92 ? (r = "\\", A++) : (r = n, P === 0 && H(x)), r !== n && (j = t, r = Cr()), t = r, t === n && (t = A, e.charCodeAt(A) === 47 ? (r = "/", A++) : (r = n, P === 0 && H(vt)), r !== n && (j = t, r = wr()), t = r, t === n && (t = A, e.charCodeAt(A) === 98 ? (r = "b", A++) : (r = n, P === 0 && H(Ft)), r !== n && (j = t, r = Tr()), t = r, t === n && (t = A, e.charCodeAt(A) === 102 ? (r = "f", A++) : (r = n, P === 0 && H(It)), r !== n && (j = t, r = Er()), t = r, t === n && (t = A, e.charCodeAt(A) === 110 ? (r = "n", A++) : (r = n, P === 0 && H(Lt)), r !== n && (j = t, r = Dr()), t = r, t === n && (t = A, e.charCodeAt(A) === 114 ? (r = "r", A++) : (r = n, P === 0 && H(Rt)), r !== n && (j = t, r = Or()), t = r, t === n && (t = A, e.charCodeAt(A) === 116 ? (r = "t", A++) : (r = n, P === 0 && H(zt)), r !== n && (j = t, r = kr()), t = r, t === n && (t = A, e.charCodeAt(A) === 117 ? (r = "u", A++) : (r = n, P === 0 && H(Bt)), r === n ? (A = t, t = n) : (i = A, a = A, o = e.charAt(A), ve.test(o) ? A++ : (o = n, P === 0 && H(Vt)), o === n ? (A = a, a = n) : (s = e.charAt(A), ye.test(s) ? A++ : (s = n, P === 0 && H(Ht)), s === n ? (A = a, a = n) : (c = Z(), c === n ? (A = a, a = n) : (l = Z(), l === n ? (A = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, A), i === n ? (A = t, t = n) : (e.substr(A, 2) === "\\u" ? (a = "\\u", A += 2) : (a = n, P === 0 && H(Ut)), a === n ? (A = t, t = n) : (o = A, s = A, c = e.charAt(A), ve.test(c) ? A++ : (c = n, P === 0 && H(Vt)), c === n ? (A = s, s = n) : (l = e.charAt(A), be.test(l) ? A++ : (l = n, P === 0 && H(Wt)), l === n ? (A = s, s = n) : (u = Z(), u === n ? (A = s, s = n) : (d = Z(), d === n ? (A = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, A), o === n ? (A = t, t = n) : (j = t, t = Ar(i, o))))), t === n && (t = A, e.charCodeAt(A) === 117 ? (r = "u", A++) : (r = n, P === 0 && H(Bt)), r === n ? (A = t, t = n) : (i = A, a = A, o = Z(), o === n ? (A = a, a = n) : (s = Z(), s === n ? (A = a, a = n) : (c = Z(), c === n ? (A = a, a = n) : (l = Z(), l === n ? (A = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, A), i === n ? (A = t, t = n) : (j = A, a = jr(i), a = a ? n : void 0, a === n ? (A = t, t = n) : (j = t, t = Mr(i)))))))))))), t;
	}
	function Z() {
		let t;
		return t = e.charAt(A), xe.test(t) ? A++ : (t = n, P === 0 && H(Gt)), t;
	}
	function Q() {
		let t;
		return t = e.charAt(A), oe.test(t) ? A++ : (t = n, P === 0 && H(Pe)), t;
	}
	function $() {
		let t, r;
		for (P++, t = [], r = e.charAt(A), Se.test(r) ? A++ : (r = n, P === 0 && H(Kt)); r !== n;) t.push(r), r = e.charAt(A), Se.test(r) ? A++ : (r = n, P === 0 && H(Kt));
		return P--, t;
	}
	function ga() {
		let t, r;
		return t = A, P++, e.length > A ? (r = e.charAt(A), A++) : (r = n, P === 0 && H(bt)), P--, r === n ? t = void 0 : (A = t, t = n), t;
	}
	function _a(e) {
		return e.length > 1e3 && L("Member name too long (maximum 1000 characters)"), e;
	}
	I = a();
	let va = I !== n && A === e.length;
	function ya() {
		throw I !== n && A < e.length && H(Lr()), Br(N, M < e.length ? Fr(M) : null, M < e.length ? Rr(M, M + 1) : Rr(M, M));
	}
	if (t.peg$library) return {
		peg$result: I,
		peg$currPos: A,
		peg$FAILED: n,
		peg$maxFailExpected: N,
		peg$maxFailPos: M,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return I;
	ya();
}
var Ri = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), zi = {
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
}, Bi = (e) => {
	throw new yi(1, 1, e);
}, Vi = (e) => e.type === "root" || e.type === "current", Hi = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function Ui(e) {
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
		if (Vi(i)) r === "value" && !Hi(i) && Bi("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && Bi(`Expected a query, found ${String(i.type)}`), i.type) {
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
				let e = Ri.has(i.operator) ? "value" : "any";
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
				let e = i.name, n = zi[e], a = i.args;
				a.length !== n.args.length && Bi(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && Bi(`The result of ${e}() must be compared`), r === "value" && n.logical && Bi(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
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
			case "value": r === "test" && Bi("A literal must be compared");
		}
	}
}
function Wi(e) {
	let t;
	try {
		t = Li(e);
	} catch (e) {
		if (Di(e)) throw new yi(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new yi(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new yi(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return Ui(t), t;
}
var Gi = /* @__PURE__ */ new Set([
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
]), Ki = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), qi = (e) => e >= 55296 && e <= 56319, Ji = (e) => e >= 56320 && e <= 57343, Yi = (e) => e !== void 0 && e >= "0" && e <= "9", Xi = (e, t) => {
	let n = e.charCodeAt(t);
	return qi(n) && Ji(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : qi(n) || Ji(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, Zi = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !Gi.has(n) ? null : n === "n" ? {
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
}, Qi = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return Ki.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, $i = (e, t) => {
	let n = e[t];
	return n === "\\" ? Zi(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : Xi(e, t);
}, Y = (e, t) => {
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
			let t = Qi(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = $i(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = $i(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, ea = (e, t) => {
	let n = t + 1, r = n;
	for (; Yi(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; Yi(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, ta = (e) => {
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
				let e = i ? ea(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = Y(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = Qi(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = Zi(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = Xi(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, na = 1e3, ra = 1e3, ia = 16, aa = /^[dgimsuy]*$/, oa = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, X = class extends Error {}, sa = 0, ca = 1, la = 2, ua = 3, da = 4, fa = 5, pa = gi(2, 31) - 1, ma = (e, t) => {
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
	return e.scratch = void 0, (r.gen > pa - t - 2 || r.step > pa - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, ha = /* @__PURE__ */ new Set([
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
]), Z = /^\{(\d+)(?:,(\d*))?\}/, Q = /^[0-9a-fA-F]{4}/, $ = /^\(\?([ims]*)(?:-([ims]*))?:/, ga = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, _a = class {
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
		if (this.i < this.src.length) throw new X("unexpected character");
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
				let r = $.exec(e.slice(t, t + 12));
				if (!r) throw new X("lookaround or named group");
				let i = vi({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new X("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new X("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new X("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(ha.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new X("trailing backslash");
		if (r === "b" || r === "B") throw new X("word boundary");
		if (r >= "1" && r <= "9") throw new X("backreference");
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
			if (n === -1) throw new X("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && Q.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (Q.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
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
			let n = Z.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > na || i !== Infinity && i > na) throw new X("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, va = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= na) throw new X("pattern too large");
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
		this.emit(fa);
	}
	compile(e) {
		if (++this.work > 4 * na) throw new X("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(sa, this.atomId(e));
				return;
			case "bol":
				this.emit(ua, +!!e.multiline);
				return;
			case "eol":
				this.emit(da, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(ca);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(la)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(ca);
					this.x[t] = t + 1, this.compile(e.node), this.emit(la, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(ca);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, ya = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new _a(e, r, t, n).parse(), a = new va(r);
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
}, ba = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, v = !1, ie = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case sa:
					e[n++] = r;
					break;
				case fa: return u(c), v = !0, n;
				case la:
					h[s++] = a[r];
					break;
				case ca:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case ua:
					(_ === 0 || a[r] === 1 && ga(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case da: (_ === t.length || a[r] === 1 && ga(t.charCodeAt(_))) && (h[s++] = r + 1);
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
}, xa = (e, t, n) => {
	let r = ma(e, t.length);
	try {
		return ba(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, Sa = 256, Ca = /* @__PURE__ */ new Map(), wa = 0, Ta = (e, t, n, r, i = !1) => {
	if (e.length > ra || t.length > 7 || !aa.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = Ca.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = oa(s) > ia ? null : ya(n ? `^(?:${s})$` : s, t, i);
	wa >= Sa && (Ca.clear(), wa = 0);
	let l = Ca.get(s);
	return l === void 0 && Ca.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), wa++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, Ea = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), xa(e, t, n);
}, Da = class {
	constructor(e) {
		this.nodes = e;
	}
}, Oa = (e) => {
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
}, ka = (e) => {
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
	return !Oa(e);
}, Aa = 256, ja = /* @__PURE__ */ new Map(), Ma = (e, t) => {
	let n = ja.get(e);
	return n === void 0 && (n = ka(e), ja.size >= Aa && ja.clear(), ja.set(Array.from(e).join(""), n)), t(e.length), n;
}, Na = /* @__PURE__ */ new Map(), Pa = (e, t) => {
	let n = Na.get(e);
	return n === void 0 && (n = ta(e), n !== null && (n = Array.from(n).join("")), Na.size >= Aa && Na.clear(), Na.set(Array.from(e).join(""), n)), t(e.length), n;
}, Fa = 256, Ia = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > ra) c = null;
		else if (o) {
			let n = Pa(e, i);
			c = n === null ? null : Ta(n, t, r, i, !0);
		} else c = Ma(e, i) ? Ta(e, t, r, i) : null;
		s !== void 0 && (s.size >= Fa && s.clear(), s.set(a, c));
	}
	return c !== null && Ea(c, n, i);
}, La = {
	length: (e, t) => {
		let n = e[0];
		if (J(n)) {
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
		if (q(n)) return K(n);
		if (ki(n)) {
			let e = Ei(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !J(r) || !J(i) ? !1 : Ia(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !J(r) || !J(i) ? !1 : Ia(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, Ra = (e, t, n = W) => e === void 0 && t === void 0 || Si(e, t, n), za = (e, t, n = W) => !Si(e, t, n), Ba = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, Va = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return Ba(n) - Ba(i);
	}
	return e.length - t.length;
}, Ha = (e, t, n = W) => Ai(e) && Ai(t) ? e < t : J(e) && J(t) ? (n(Math.min(e.length, t.length)), Va(e, t) < 0) : !1, Ua = (e, t, n = W) => Ha(e, t, n) || Ra(e, t, n), Wa = (e, t, n = W) => Ai(e) && Ai(t) ? e > t : J(e) && J(t) ? (n(Math.min(e.length, t.length)), Va(e, t) > 0) : !1, Ga = (e, t, n = W) => Wa(e, t, n) || Ra(e, t, n), Ka = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, qa = (e, t, n) => {
	let r = K(e);
	for (let i = 0; i < r; i++) {
		let r = Ci(e, i);
		if (n(1 + Ka(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, Ja = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, Ya = (e) => typeof e == "string" && e.length + 1 > wi, Xa = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = K(e);
	for (let n = 0; n < a; n++) {
		let r = Ci(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), Ya(r) ? i.long.push(r) : i.set.add(Ja(r));
	}
	return n?.set(e, i), i;
}, Za = ({ set: e, long: t }, n, r) => {
	if (Ya(n)) {
		for (let e of t) if (r(1 + Ka(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(Ja(n)));
}, Qa = (e, t, n) => {
	let r = K(e);
	for (let i = 0; i < r; i++) if (n(), G(e, i) && t(e[i])) return !0;
	return !1;
}, $a = {
	eq: Ra,
	ne: za,
	lt: Ha,
	le: Ua,
	gt: Wa,
	ge: Ga,
	in: (e, t, n = W) => q(t) ? qa(t, e, n) !== -1 : !1,
	nin: (e, t, n = W) => q(t) ? qa(t, e, n) === -1 : !1,
	subsetof: (e, t, n = W, r) => {
		if (!q(e) || !q(t)) return !1;
		let i = Xa(t, n, r);
		return !Qa(e, (e) => !Za(i, e, n), n);
	},
	anyof: (e, t, n = W, r) => {
		if (!q(e) || !q(t)) return !1;
		let i = Xa(t, n, r);
		return Qa(e, (e) => Za(i, e, n), n);
	},
	noneof: (e, t, n = W, r) => {
		if (!q(e) || !q(t)) return !1;
		let i = Xa(t, n, r);
		return !Qa(e, (e) => Za(i, e, n), n);
	},
	sizeof: (e, t) => !q(e) && !J(e) || !q(t) && !J(t) ? !1 : (q(e) ? K(e) : e.length) === (q(t) ? K(t) : t.length),
	size: (e, t) => !q(e) && !J(e) || !Ai(t) ? !1 : (q(e) ? K(e) : e.length) === t
}, eo = (e) => !q(e) && !J(e) ? !1 : (q(e) ? K(e) : e.length) === 0, to = (e, t, n, r = W, i) => !J(e) || !J(t) ? !1 : Ia(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), no = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), ro = (e, t) => e.concat(`[${t}]`), io = (e, t) => e < 0 ? t + e : e, ao = (e, t) => {
	let n = K(e), r = io(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: G(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, oo = (e, t) => {
	for (let n of t) e.push(n);
}, so = 1e6, co = 100, lo = 1e6, uo = 20, fo = 1e4, po = 1e4, mo = class {
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
					G(n, r) && this.visit(n[r]);
				} else if (G(n, t)) this.visit(n[t]);
				else if (++e.holes > po) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!G(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), q(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: K(e),
				i: 0,
				holes: 0
			});
			else if (ki(e)) {
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
}, ho = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, no(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = no(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = K(e);
			for (let r = 0; r < n; r++) this.tick(), G(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new mo(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(fo, Math.ceil((this.retained - this.retainedLimit) / uo))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new bi(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(so, co * e.weight) + t, this.retainedLimit = Math.max(lo, uo * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new mo(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(fo, Math.ceil((this.steps - this.stepLimit) / co))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new bi(`Query exceeded ${this.stepLimit} evaluation steps`);
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
			if (!ki(e)) return;
			let r = this.canonicalName(n, n.value);
			if (G(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (q(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: ro(t, r)
					});
				}), n;
			}
			if (ki(e)) {
				let n = Ei(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) G(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!q(e)) return;
			let r = ao(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: ro(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (q(e)) {
				let r = ao(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: ro(t, r.index)
				} : void 0;
			}
			if (ki(e)) {
				let r = String(n.value);
				return G(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!q(e)) return [];
			let r = K(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : io(n.start, r), o = n.end === null ? r : io(n.end, r)) : (a = n.start === null ? r - 1 : io(n.start, r), o = n.end === null ? -r - 1 : io(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: G(e, u) ? e[u] : void 0,
				paths: ro(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (ki(e.value)) {
						let t = this.handleIdentifier(e, r);
						Mi(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (ki(e.value)) {
						let t = this.handleStringLiteral(e, r);
						Mi(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (q(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						Mi(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					oo(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": oo(n, this.handleBracketExpressionContent(e, r));
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
						Mi(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						oo(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						oo(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						Mi(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (ki(e)) {
					let t = Ei(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else q(e) && i.push({
					parent: a,
					keys: null,
					length: K(e),
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
						if (!G(n, t)) continue;
						a = {
							value: n[t],
							paths: ro(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!G(n, r)) continue;
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
						if (!Ai(i) || !Ai(r)) i = void 0;
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
					return Ai(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return eo(n);
			if (t.operator === "reg") return to(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = $a[t.operator];
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
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new Da(r.value) : new Da(Mi(r?.value) ? [r?.value] : []);
			}), i = La[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
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
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : Mi(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : Mi(n);
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
					if (q(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: ro(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (ki(n)) {
						let i = Ei(n);
						this.tick(i.length);
						for (let a of i) {
							if (!G(n, a)) continue;
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
					if (!Mi(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) oo(n, a);
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
				throw Di(e) ? new bi("Query is nested too deeply") : Oi(e) ? new bi("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? so, this.retainedLimit = this.adaptiveLimit ? lo : Infinity;
	}
}, go = (e, t, n) => {
	let r = Wi(t), i = new ho(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? ji(i) ? [] : [i.value] : i?.value;
}, _o = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = go(e, i, n);
		Mi(t) && r.push(t);
	}
	return r;
}, vo = (e, t, n = {}) => {
	try {
		return q(t) ? _o(e, t, n) : go(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, yo = (e) => typeof e == "object" && !!e && !Array.isArray(e), bo = (e, t) => {
	if (!yo(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Do(t, i);
	return n;
}, xo = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Do(t, e));
}, So = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Co = (e, t) => So(e, t), wo = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, To = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, Eo = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: To,
		applyTemplate: e
	});
}, Do = (e, t, n) => {
	let r = e, i = t;
	wo(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? So(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Co(a?.textContent, r)), "attributes" in a && (a.attributes = bo(a?.attributes, r)), "children" in a && (a.children = xo(a?.children, r))), a);
};
Eo(Do);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var Oo = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, ko = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
};
((e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: ko,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
})((e, t) => {
	let n = e;
	return Oo(n, t), n.map((e) => Do(e, e[t]));
}, (e, t) => {
	let n = e, r = t;
	return Oo(n, r), n.map((e) => Do(e, r));
});
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs/src/v24/findByRole.js
var Ao = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = Ao(n, t);
		if (e) return e;
	}
	return null;
}, jo = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = vo(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = Ao(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
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
}, Mo = (e, t, n, r) => {
	let { parent: i, key: a } = jo(e, t, r);
	return (di[t.action] || ui)(i, a, n), e;
}, No = (e) => typeof e == "object" && !!e && !Array.isArray(e), Po = (e, t) => {
	if (!No(e)) return null;
	if (e[t] !== void 0) return e[t];
	let n = `show${t.charAt(0).toUpperCase()}${t.slice(1)}`;
	return e[n] === void 0 ? null : e[n];
}, Fo = (e, t) => {
	let n = si[e];
	if (n) for (let e of n) {
		if (e.skipIf && vo(t, e.skipIf, { returnArray: !0 }).length > 0) continue;
		let n = ii[e.templateKey];
		try {
			Mo({ base: t }, e.destinationPath, n);
		} catch {}
	}
}, Io = ({ options: e = {}, optionDefs: t = {}, base: n, showLog: r = !1 } = {}) => {
	if (!n || !No(e) || !No(t)) return n;
	for (let [r, i] of Object.entries(t)) {
		if (!No(i)) continue;
		let t = Po(e, r);
		if (!t) continue;
		let a = typeof t == "boolean" && t === !0, o = No(t);
		if ((a || o) && Object.entries(i).some(([e]) => e !== "initialize" && (a || t[e] === !0))) {
			i.initialize && Fo(i.initialize, n);
			for (let [e, r] of Object.entries(i)) e !== "initialize" && (a || t[e] === !0) && Fo(r, n);
		}
	}
	return n;
}, Lo = {
	name: "json-renderers-run-instructions",
	version: "1.15.1"
}, Ro = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.render = {
		meta: Lo,
		renderFunc: e
	});
}, zo = ({ instructionMainKey: e, instructionSubKey: t, data: n, options: r, showLog: i = !1 } = {}) => {
	let a = Ct[e]?.[t];
	if (!a) throw Error(`Definition not found: ${e}.${t}`);
	let o = structuredClone(S[a.baseFromSpec]);
	return ni({
		instructions: a.instructions ?? [],
		base: o,
		data: n,
		showLog: i
	}), Io({
		options: r,
		optionDefs: a.options && typeof a.options == "object" ? a.options : Ct[e]?.options ?? {},
		base: o,
		data: n,
		showLog: i
	}), o;
};
Ro(zo);
// src/v57/index.js
var Bo = (e) => {
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
}, Vo = (e = {}) => {
	console.log("config : ", e), p(e);
	let t = e?.showLog, n = (e.type || "").split("."), r = n.length > 1 ? n[0] : "table", i = n.length > 1 ? n[1] : n[0] || "simple", a = Bo(e?.options), o = zo({
		instructionMainKey: r,
		instructionSubKey: i,
		data: {
			data: e?.data,
			columns: e?.columns
		},
		options: a,
		showLog: t
	});
	return console.log("spec : ", o), Oe({
		jsonSpec: o,
		targetHtmlId: e.targetHtmlId,
		appendPosition: e.appendPosition,
		classToApply: e.classToApply ?? "",
		showLog: t
	});
}, Ho = (e = {}) => {
	let t = typeof e.container == "string" ? document.getElementById(e.container) : e.container, n = (n) => {
		if (!t) return;
		let r = t.querySelector("#table-content-container") || t.querySelector("table")?.parentElement || t;
		if (!r) return;
		let i = r.id || "table-content-container";
		r.id ||= i;
		let a = "table.bodyOnly";
		console.log("tableType : ", a), Vo({
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
	return bt({
		...e,
		renderTable: e.renderTable || n
	});
};
St({
	render: Vo,
	hookEvents: Ho
});
export { Vo as default, Vo as render, Ho as hookEvents };
