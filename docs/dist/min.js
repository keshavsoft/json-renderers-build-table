// src/v46/registerGlobal/meta.js
var e = {
	version: "1.45.1",
	description: "Browser DOM component renderer built on top of json-renderers-specs and @keshavsoft/json-to-dom"
}, t = (t) => {
	let n = t;
	typeof globalThis < "u" && n && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.build ??= {}, globalThis.ks.jsonRenderers.build.table = {
		meta: e,
		render: n
	});
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
}, h = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.jsonToDom = {
		meta: m,
		appendToDom: e
	});
}, ee = {
	version: "v12",
	description: "JSON-to-DOM engine powered by decoupled external-action traversal engine"
}, te = (e) => {
	if (typeof globalThis > "u" || !e) return;
	globalThis.ks ??= {};
	let t = typeof e == "function" ? e : e.buildSpecElement, n = e.buildSpecElementWithValidate, r = {
		meta: ee,
		buildSpecElement: t,
		...n ? { buildSpecElementWithValidate: n } : {}
	};
	globalThis.ks["json-to-tag"] = r, globalThis.ks.jsonToTag = r;
}, g = ({ inItems: e, inFunc: t }) => {
	let n = e, r = t;
	return Array.isArray(n) ? n.map((e) => _({
		inSpec: e,
		inFunc: r
	})).flat(Infinity).filter(Boolean) : [];
}, ne = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	if (!n || typeof n != "object" || Array.isArray(n)) return null;
	let i = typeof r == "function" ? r(n) : null;
	if (Array.isArray(n.children)) {
		let e = g({
			inItems: n.children,
			inFunc: r
		});
		if (i && typeof i.append == "function" && Array.isArray(e)) {
			let t = e.filter(Boolean);
			t.length && i.append(...t);
		}
	}
	return i;
}, _ = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	return n == null ? null : typeof Node < "u" && n instanceof Node ? n : Array.isArray(n) ? g({
		inItems: n,
		inFunc: r
	}) : typeof n == "object" ? ne({
		inSpec: n,
		inFunc: r
	}) : typeof n == "string" || typeof n == "number" ? typeof document < "u" ? document.createTextNode(String(n)) : String(n) : null;
}, re = ({ inNode: e, inErrors: t }) => {
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
	re({
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
		attributes: { id: "LedgerName" },
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: { "data-name": "${columnName}" },
		children: []
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
}, v = ue;
// node_modules/json-to-tag-validate/src/v4/index.js
function fe({ inJson: e, inCatalog: t, inSpec: n }) {
	let r = e, i = t ?? n ?? de, a = [];
	return _({
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
var pe = "http://www.w3.org/2000/svg", me = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), he = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return me.has(t) ? document.createElementNS(pe, t) : document.createElement(t);
}, ge = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), _e = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), ve = "http://www.w3.org/1999/xlink", ye = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(ve, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, be = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, y = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = he({ inTagName: e.tagName });
	return t ? (ge({
		inElement: t,
		inTextContent: e.textContent,
		inTagName: e.tagName
	}), _e({
		inElement: t,
		inProperties: e.properties
	}), ye({
		inElement: t,
		inAttributes: e.attributes
	}), be({
		inElement: t,
		inClassList: e.classList
	}), t) : null;
}, b = (e = {}) => _({
	inSpec: e?.spec ?? e?.inSpec ?? e,
	inFunc: y
});
te({
	buildSpecElement: b,
	buildSpecElementWithValidate: (e = {}) => {
		let t = e?.spec ?? e?.inSpec ?? e, n = fe({ inJson: t });
		return n.isValid || console.warn("[json-to-tag] Specification validation issues:", n.errors), _({
			inSpec: t,
			inFunc: y
		});
	}
});
// node_modules/spec-to-dom/src/v2/register/meta.js
var xe = {
	version: "2.1.1",
	name: "spec-to-dom"
}, Se = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.specToDom = {
		meta: xe,
		appendToDom: e
	});
}, x = ({ buildSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => {
	let i = e, a = t, o = n, s = r;
	s && console.log("renderToDom 1 (content):", i);
	let c = document.getElementById(a);
	return c ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? o === "prepend" ? c.prepend(...i) : c.append(...i) : o === "prepend" ? c.prepend(i) : (c.innerHTML = "", c.append(i)), s && console.log("renderToDom 2 (mounted):", c), c) : null;
};
Se(x);
// node_modules/@keshavsoft/json-to-dom/src/v42/index.js
var S = ({ jsonSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => x({
	buildSpec: b(e),
	targetHtmlId: t,
	appendPosition: n,
	showLog: r
});
h(S);
// node_modules/dom-primitive-bindings/src/v3/register/meta.js
var C = {
	name: "dom-primitive-bindings",
	version: "3.0.0"
}, w = (e, t = C) => {
	if (e && typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.domPrimitiveBindings = {
		meta: t,
		bindEvents: e
	}, globalThis.ks.bindEvents ??= e, globalThis.ks.domPrimitiveBindings;
}, T = (e) => typeof e == "string" ? document.getElementById(e) || document.querySelector(e) : e && typeof e == "object" && "addEventListener" in e ? e : null, E = (e) => e && T(e) || null, D = (e) => Array.isArray(e) ? e.filter((e) => e && typeof e == "object" && typeof e.event == "string" && typeof e.selector == "string") : [], O = (e) => {
	let t = D(e);
	return t.length === 0 ? null : t;
}, k = (e, t) => {
	let n = E(e);
	if (!n) return null;
	let r = O(t);
	return r ? {
		container: n,
		bindings: r
	} : null;
}, A = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.event) ?? [];
		e.push(n), t.set(n.event, e);
	}
	return t;
}, j = (e) => A(e), Ce = (e, t, n) => e.root === "event" || t?.type?.startsWith("key") ? t : n, we = (e, t, n) => ({
	...e.clientData,
	event: t,
	targetElement: n
}), Te = ({ binding: e, event: t, matchElement: n }) => {
	let r = Ce(e, t, n), i = we(e, t, n), a = e.runner, o = typeof a == "function" ? a(r, e.instructions, i) : r;
	return o != null && typeof e.onExtract == "function" && e.onExtract(o, t, n), o;
}, Ee = ({ bindings: e, event: t, container: n }) => {
	for (let r of e) {
		let e = t.target?.closest?.(r.selector);
		e && n.contains(e) && Te({
			binding: r,
			event: t,
			matchElement: e
		});
	}
}, De = (e, t, n) => {
	e.addEventListener(t, (t) => {
		Ee({
			bindings: n,
			event: t,
			container: e
		});
	});
}, Oe = (e, t) => {
	for (let [n, r] of t.entries()) De(e, n, r);
	return e;
}, M = (e, t = []) => {
	let n = k(e, t);
	if (!n) return null;
	let { container: r, bindings: i } = n;
	return Oe(r, j(i)), r;
};
w(M);
// node_modules/json-renderers-specs/src/v4/register/meta.js
var ke = {
	version: "1.4.1",
	name: "json-renderers-specs"
}, Ae = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderersSpecs = {
		meta: ke,
		render: e
	});
}, N = {
	table: {
		simple: {
			base: {
				tagName: "div",
				attributes: { "data-role": "table-parent" },
				children: [{
					tagName: "table",
					attributes: { class: "table table-hover table-striped align-middle border mb-0" },
					children: [
						{
							tagName: "colgroup",
							attributes: { "data-role": "table-colgroup" },
							children: []
						},
						{
							tagName: "thead",
							attributes: {
								class: "table-dark",
								"data-role": "table-header"
							},
							children: [{
								tagName: "tr",
								attributes: { "data-role": "table-header-row" },
								children: []
							}]
						},
						{
							tagName: "tbody",
							attributes: { "data-role": "table-body" },
							children: []
						},
						{
							tagName: "tfoot",
							attributes: { "data-role": "table-footer" },
							children: [{
								tagName: "tr",
								attributes: { "data-role": "table-footer-row" },
								children: []
							}]
						}
					]
				}]
			},
			single: [{
				narration: "Build column widths",
				destinationPath: {
					fileName: "base",
					dataRole: "table-colgroup",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildColGroup",
				func: "fromCollection"
			}, {
				narration: "Build table header",
				destinationPath: {
					fileName: "base",
					dataRole: "table-header-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildHeader",
				func: "fromCollection"
			}],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				func: "twoDimensional"
			}]
		},
		withFooter: {
			base: {
				tagName: "table",
				attributes: { class: "table table-hover table-striped align-middle border mb-0" },
				children: [
					{
						tagName: "colgroup",
						attributes: { "data-role": "table-colgroup" },
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header"
						},
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-header-row" },
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: { "data-role": "table-body" },
						children: []
					},
					{
						tagName: "tfoot",
						attributes: { "data-role": "table-footer" },
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-footer-row" },
							children: []
						}]
					}
				]
			},
			single: [
				{
					narration: "Build column widths",
					destinationPath: {
						fileName: "base",
						dataRole: "table-colgroup",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildColGroup",
					func: "fromCollection"
				},
				{
					narration: "Build table header",
					destinationPath: {
						fileName: "base",
						dataRole: "table-header-row",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildHeader",
					func: "fromCollection"
				},
				{
					narration: "Build footer input cells",
					destinationPath: {
						fileName: "base",
						dataRole: "table-footer-row",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildFooter",
					func: "fromCollection"
				}
			],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				func: "twoDimensional"
			}]
		},
		bodyOnly: {
			base: {
				tagName: "tbody",
				attributes: { "data-role": "table-body" },
				children: []
			},
			single: [],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				func: "twoDimensional"
			}]
		},
		footerOnly: {
			base: {
				tagName: "tfoot",
				attributes: { "data-role": "table-footer" },
				children: [{
					tagName: "tr",
					attributes: { "data-role": "table-footer-row" },
					children: []
				}]
			},
			single: [{
				narration: "Build footer input cells",
				destinationPath: {
					fileName: "base",
					dataRole: "table-footer-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildFooter",
				func: "fromCollection"
			}],
			double: []
		},
		headerOnly: {
			base: {
				tagName: "table",
				attributes: { class: "table table-hover table-striped align-middle border mb-0" },
				children: [
					{
						tagName: "colgroup",
						attributes: { "data-role": "table-colgroup" },
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header"
						},
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-header-row" },
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: { "data-role": "table-body" },
						children: []
					}
				]
			},
			single: [{
				narration: "Build column widths",
				destinationPath: {
					fileName: "base",
					dataRole: "table-colgroup",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildColGroup",
				func: "fromCollection"
			}, {
				narration: "Build table header",
				destinationPath: {
					fileName: "base",
					dataRole: "table-header-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildHeader",
				func: "fromCollection"
			}],
			double: []
		}
	},
	select: {
		base: {
			tagName: "select",
			attributes: {
				id: "${columnName}",
				"data-name": "${columnName}"
			},
			children: []
		},
		single: [{
			narration: "Build select options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["data"]
			},
			templateKey: "buildOption",
			func: "fromCollection"
		}],
		double: []
	},
	dataList: {
		simple: {
			base: {
				tagName: "div",
				attributes: { "data-role": "datalist-parent" },
				children: []
			},
			single: [{
				narration: "Build datalist control from columns",
				destinationPath: {
					fileName: "base",
					dataRole: "datalist-parent",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildDataList",
				func: "fromCollection"
			}, {
				narration: "Build datalist options from data",
				destinationPath: {
					fileName: "base",
					dataRole: "datalist-control",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["data"]
				},
				templateKey: "buildOption",
				func: "fromCollection"
			}],
			double: []
		},
		base: {
			tagName: "div",
			attributes: { "data-role": "datalist-parent" },
			children: []
		},
		single: [{
			narration: "Build datalist control from columns",
			destinationPath: {
				fileName: "base",
				dataRole: "datalist-parent",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["columns"]
			},
			templateKey: "buildDataList",
			func: "fromCollection"
		}, {
			narration: "Build datalist options from data",
			destinationPath: {
				fileName: "base",
				dataRole: "datalist-control",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["data"]
			},
			templateKey: "buildOption",
			func: "fromCollection"
		}],
		double: []
	},
	selectOptionsOnly: {
		base: [],
		single: [{
			narration: "Build options array",
			destinationPath: {
				fileName: "base",
				filePath: []
			},
			sourcePath: {
				fileName: "data",
				filePath: ["data"]
			},
			templateKey: "buildOption",
			func: "fromCollection"
		}],
		double: []
	},
	searchInput: {
		base: {
			tagName: "div",
			attributes: { class: "d-flex align-items-center gap-2" },
			children: [{
				tagName: "label",
				textContent: "${label}",
				attributes: {
					class: "form-label mb-0 text-nowrap fw-semibold",
					for: "${id}"
				}
			}, {
				tagName: "input",
				attributes: {
					type: "search",
					placeholder: "${placeholder}",
					class: "form-control",
					id: "${id}"
				}
			}]
		},
		single: [],
		double: []
	},
	form: { base: {
		tagName: "div",
		attributes: { class: "card shadow-sm border-0" },
		children: [{
			tagName: "div",
			attributes: { class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center" },
			children: [{
				tagName: "h2",
				textContent: "${title}",
				attributes: { class: "h5 fw-bold mb-0 text-dark" }
			}]
		}, {
			tagName: "div",
			attributes: { class: "card-body p-4" },
			children: [{
				tagName: "form",
				attributes: {
					id: "${formId}",
					"data-role": "form-body"
				},
				children: []
			}]
		}]
	} }
}, P = (e) => Array.isArray(e) ? e : [e], F = (e, t, n) => {
	e[t] = n;
}, je = {
	set: F,
	push: (e, t, n) => {
		e[t].push(...P(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...P(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(P(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(P(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, Me = (e) => typeof e == "object" && !!e && !Array.isArray(e), Ne = (e, t) => {
	if (!Me(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = L(t, i);
	return n;
}, Pe = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => L(t, e));
}, I = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Fe = (e, t) => I(e, t), Ie = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Le = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, Re = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: Le,
		applyTemplate: e
	});
}, L = (e, t, n) => {
	let r = e, i = t;
	Ie(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? I(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Fe(a?.textContent, r)), "attributes" in a && (a.attributes = Ne(a?.attributes, r)), "children" in a && (a.children = Pe(a?.children, r))), a);
};
Re(L);
// node_modules/json-transformer-funcs-one-dimension/src/v8/guard/index.js
var ze = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, R = (e, t) => {
	let n = e, r = t;
	return ze(n, r), n.map((e) => L(e, r));
}, Be = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), Ve = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inColumns must be an Array");
	if (e.length === 0) throw Error("inColumns cannot be empty");
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!n || typeof n != "object") throw TypeError(`inColumns[${t}] must be an object`);
		if (typeof n.columnName != "string" || !n.columnName.trim()) throw TypeError(`inColumns[${t}].columnName must be a non-empty string`);
	}
	if (!Array.isArray(t)) throw TypeError("inData must be an Array");
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (!n || typeof n != "object") throw TypeError(`inData[${e}] must be an object`);
	}
	return !0;
}, He = ({ inRowColumns: e, inSpec: t }) => e.map((e) => L(e, t)), Ue = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => {
	Ve(e, t);
	let i = e;
	return t.map((e) => {
		let t = L(e, r);
		return t.children = He({
			inRowColumns: Be(i, e),
			inSpec: n
		}), t;
	});
}, z = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = z(n, t);
		if (e) return e;
	}
	return null;
}, We = (e, t, n) => {
	let r = t.fileName, i = z(e[r], t.dataRole), a = t.dataRole ? i : e[t.fileName], o = [...t.filePath ?? []], s = o.pop();
	return {
		parent: o.reduce((e, t) => e[t], a),
		key: s
	};
}, B = (e, t, n, r) => {
	r && console.log("v4 index :", e, t, n);
	let { parent: i, key: a } = We(e, t, r);
	(je[t.action] || F)(i, a, n);
}, V = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = V(n, t);
		if (e) return e;
	}
	return null;
}, Ge = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? V(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, Ke = {
	applyTemplate: L,
	fromCollection: R
}, qe = (e, t, n) => e?.sourcePath === null ? null : Ge(t, e.sourcePath), Je = (e, t, n) => {
	let r = t?.spec ?? v, i = e.templateKey, a = e?.func, o = r[i], s = qe(e, t, n), c = a === null ? o : Ke[e.func](s, o);
	return s === null ? o : c;
}, Ye = (e, t, n) => {
	let r = n;
	r && console.log("runSingleInstruction 1 :", e, t);
	let i = Je(e, t, n);
	r && console.log("runSingleInstruction 2 :", i), B(t, e.destinationPath, i);
}, H = (e, t, n, r) => {
	e.forEach((e) => {
		Ye(e, t, n, r);
	});
}, Xe = {
	applyTemplate: L,
	fromCollection: R,
	twoDimensional: Ue
}, Ze = (e, t, n, r) => {
	console.log("localShowLog : ", n);
	let i = t?.spec ?? v, a = Xe[e.func]({
		columns: t.data.columns,
		data: t.data.data,
		columnSpec: i.buildBodyCell,
		rowSpec: i.buildBodyTr
	});
	B(t, e.destinationPath, a);
}, U = (e, t, n, r) => {
	e.forEach((e) => {
		Ze(e, t, n, r);
	});
}, Qe = (e, t, n) => {
	let r = !(!e || typeof e != "object" || Array.isArray(e)), i = `guards/base: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, $e = (e, t, n) => {
	let r = !(!e || typeof e != "object" || Array.isArray(e)), i = `guards/options: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, et = (e, t, n) => {
	let r = typeof e == "boolean", i = `guards/showLog: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, tt = (e, t, n) => {
	let r = Array.isArray(e), i = `guards/returnLog: ${r ? "passed" : "failed"}`;
	return r ? e.push(i) : Array.isArray(n) && n.push(i), t && console.log(i), r;
}, nt = ({ options: e, base: t, showLog: n, returnLog: r }) => ({
	base: Qe(t, n, r),
	options: $e(e, n, r),
	showLog: et(n, n, r),
	returnLog: tt(r, n, r)
}), rt = [
	{
		narration: "Prepend the serial column width to the table colgroup.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-colgroup",
			filePath: ["children"],
			action: "unshift"
		},
		sourcePath: null,
		templateKey: "colGroupForSerial",
		func: null
	},
	{
		narration: "Prepend the serial header cell to the table header row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-header-row",
			filePath: ["children"],
			action: "unshift"
		},
		sourcePath: null,
		templateKey: "headerSerialCell",
		func: null
	},
	{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"],
			action: "unshiftSerialToRows"
		},
		sourcePath: null,
		templateKey: "buildBodyCell",
		func: null
	},
	{
		narration: "Prepend the serial footer cell to the table footer row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-footer-row",
			filePath: ["children"],
			action: "unshift"
		},
		sourcePath: null,
		templateKey: "headerSerialCell",
		func: null
	}
], it = [
	{
		narration: "Append the options column width to the table colgroup.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-colgroup",
			filePath: ["children"],
			action: "push"
		},
		sourcePath: null,
		templateKey: "colGroupForOption",
		func: null
	},
	{
		narration: "Append the options header cell to the table header row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-header-row",
			filePath: ["children"],
			action: "push"
		},
		sourcePath: null,
		templateKey: "headerForOption",
		func: null
	},
	{
		narration: "Append the options button cell into each table body row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"],
			action: "pushToRows"
		},
		sourcePath: null,
		templateKey: "optionsButtonCell",
		func: null
	},
	{
		narration: "Append the options footer cell to the table footer row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-footer-row",
			filePath: ["children"],
			action: "push"
		},
		sourcePath: null,
		templateKey: "tdWithButtonSaveWarning",
		func: null
	}
], at = [{
	narration: "Prepend the search row to top of the table.",
	destinationPath: {
		fileName: "base",
		dataRole: "table-parent",
		filePath: ["children"],
		action: "unshift"
	},
	sourcePath: null,
	templateKey: "tableSearch",
	func: null
}], W = (e, t) => !e || typeof e != "object" ? !1 : e.attributes?.["data-role"] === t || Array.isArray(e.children) && e.children.some((e) => W(e, t)), G = (e, t) => e.filter(({ destinationPath: e }) => W(t, e?.dataRole)), ot = ({ options: e = {}, base: t, showLog: n = !1, returnLog: r = [] } = {}) => {
	let i = nt({
		options: e,
		base: t,
		showLog: n,
		returnLog: r
	});
	if (!Object.values(i).every(Boolean)) return t;
	let a = e, o = t, s = n, c = r;
	return (a.showSerial || a.serial) && H(G(rt, o), { base: o }, s, c), (a.showOptions || a.options) && H(G(it, o), { base: o }, s, c), a.showSearch && H(G(at, o), { base: o }, s, c), o;
}, K = ({ inData: e = [], inColumns: t = [], inType: n = "simple", footer: r = [], inOptions: i = {}, options: a = {}, inShowLog: o = !1 } = {}) => {
	let s = !n || n === "table" ? "simple" : n, c = Object.keys(i || {}).length > 0 ? i : a, l = o, u = N.table[s] || N.table.simple;
	if (!u) throw Error(`Unknown table type: "${s}". Available types: ${Object.keys(N.table).join(", ")}`);
	let d = structuredClone(u.base), f = {
		data: {
			columns: t,
			data: e
		},
		base: d,
		...c
	};
	return u.single && u.single.length > 0 && H(u.single, f, l), u.double && u.double.length > 0 && U(u.double, f), ot({
		options: c,
		base: d
	}), d;
}, st = ({ inData: e = [], inColumns: t = [], inOptions: n = {}, options: r = {} } = {}) => {
	let i = Object.keys(n || {}).length > 0 ? n : r, a = N.select, o = t;
	if (i.columnName || i.column) {
		let e = i.columnName || i.column;
		o = t.filter((t) => (t.columnName || t) === e);
	} else t.length > 1 && !i.allColumns && (o = [t.find((e) => e.type === "select") || t[0]]);
	return o.map((t) => {
		let n = t?.columnName || t?.name || t || "", r = structuredClone(a.base);
		return r.attributes.id = n, r.attributes["data-name"] = n, r.children = R(e, {
			tagName: "option",
			textContent: `\${${n}}`,
			attributes: { value: `\${${n}}` }
		}), r;
	});
}, ct = ({ inData: e = [], inColumns: t = [] } = {}) => t.map((t) => {
	let n = t?.columnName || "";
	return R(e, {
		tagName: "option",
		textContent: `\${${n}}`,
		attributes: { value: `\${${n}}` }
	});
}), q = ({ inData: e = [], inColumns: t = [], inType: n = "simple", inOptions: r = {}, options: i = {}, inShowLog: a = !1 } = {}) => {
	let o = !n || n === "dataList" || n === "datalist" ? "simple" : n, s = Object.keys(r || {}).length > 0 ? r : i, c = a, l = N.dataList[o] || N.dataList.simple || N.dataList;
	if (!l) throw Error("dataList definition not found in definitions.json");
	let u = t;
	if (s.columnName || s.column) {
		let e = s.columnName || s.column;
		u = t.filter((t) => (t.columnName || t.name || t) === e);
	} else t.length > 1 && !s.allColumns && (u = [t[0]]);
	let d = u[0], f = d?.columnName || d?.name || d || "itemName", p = e.map((e) => ({
		rowValue: e[f] ?? "",
		[f]: e[f] ?? ""
	})), m = structuredClone(l.base), h = {
		data: {
			columns: u,
			data: p
		},
		base: m,
		spec: {
			buildDataList: {
				tagName: "datalist",
				attributes: {
					id: "${columnName}",
					"data-name": "${columnName}",
					"data-role": "datalist-control"
				},
				children: []
			},
			buildOption: {
				tagName: "option",
				textContent: "${rowValue}",
				attributes: { value: "${rowValue}" }
			}
		},
		...s
	};
	return l.single && l.single.length > 0 && H(l.single, h, c), l.double && l.double.length > 0 && U(l.double, h), m;
}, J = ({ inOptions: e = {}, options: t = {} } = {}) => {
	let n = Object.keys(e || {}).length > 0 ? e : t, r = structuredClone(N.searchInput.base), i = n.label ?? "Search:", a = n.placeholder ?? "Search...", o = n.id ?? "searchInputId", s = n.class ?? "form-control";
	return r.children[0].textContent = i, r.children[0].attributes.for = o, r.children[1].attributes.placeholder = a, r.children[1].attributes.id = o, r.children[1].attributes.class = s, r;
}, lt = (e, t = {}) => {
	let n = e.columnName || e.name || "", r = e.label || n, i = e.type || "text", a = e.placeholder || "", o = t[n] ?? e.value ?? "", s = e.required ?? !1;
	if (i === "textarea") {
		let e = {
			tagName: "textarea",
			textContent: String(o),
			attributes: {
				class: "form-control",
				id: n,
				name: n,
				placeholder: a,
				rows: "3"
			}
		};
		return s && (e.attributes.required = "true"), {
			tagName: "div",
			attributes: { class: "mb-3" },
			children: [{
				tagName: "label",
				textContent: r,
				attributes: {
					class: "form-label fw-semibold small text-secondary",
					for: n
				}
			}, e]
		};
	}
	if (i === "select") {
		let t = (e.options || []).map((e) => {
			let t = typeof e == "object" ? e.value : e, n = typeof e == "object" ? e.label : e, r = {
				tagName: "option",
				textContent: String(n),
				attributes: { value: String(t) }
			};
			return String(t) === String(o) && (r.attributes.selected = "true"), r;
		});
		return {
			tagName: "div",
			attributes: { class: "mb-3" },
			children: [{
				tagName: "label",
				textContent: r,
				attributes: {
					class: "form-label fw-semibold small text-secondary",
					for: n
				}
			}, {
				tagName: "select",
				attributes: {
					class: "form-select",
					id: n,
					name: n
				},
				children: t
			}]
		};
	}
	if (i === "checkbox") {
		let e = {
			tagName: "input",
			attributes: {
				type: "checkbox",
				class: "form-check-input",
				id: n,
				name: n
			}
		};
		return o && (e.attributes.checked = "true"), {
			tagName: "div",
			attributes: { class: "mb-3 form-check" },
			children: [e, {
				tagName: "label",
				textContent: r,
				attributes: {
					class: "form-check-label small fw-semibold text-secondary",
					for: n
				}
			}]
		};
	}
	let c = {
		tagName: "input",
		attributes: {
			type: i,
			class: "form-control",
			id: n,
			name: n,
			placeholder: a
		}
	};
	return o !== "" && (c.attributes.value = String(o)), s && (c.attributes.required = "true"), {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: r,
			attributes: {
				class: "form-label fw-semibold small text-secondary",
				for: n
			}
		}, c]
	};
}, ut = {
	table: K,
	tableFromSpec: K,
	select: st,
	selectOptionsOnly: ct,
	dataList: q,
	datalist: q,
	searchInput: J,
	search: J,
	inputRow: J,
	form: ({ inData: e = [], inColumns: t = [], inOptions: n = {}, options: r = {} } = {}) => {
		let i = Object.keys(n || {}).length > 0 ? n : r, a = structuredClone(N.form?.base), o = i.title || i.ariaLabel || "Form", s = i.formId || "formElement", c = i.submitLabel || "Submit";
		a.children[0].children[0].textContent = o;
		let l = a.children[1].children[0];
		l.attributes.id = s;
		let u = Array.isArray(e) && e.length > 0 ? e[0] : e || {}, d = t.map((e) => lt(e, u)), f = {
			tagName: "div",
			attributes: { class: "d-flex justify-content-end gap-2 mt-4 pt-3 border-top" },
			children: [{
				tagName: "button",
				textContent: "Reset",
				attributes: {
					type: "reset",
					class: "btn btn-outline-secondary"
				}
			}, {
				tagName: "button",
				textContent: c,
				attributes: {
					type: "submit",
					class: "btn btn-primary px-4 fw-medium"
				}
			}]
		};
		return l.children = [...d, f], a;
	}
}, Y = (e = {}) => {
	o(e);
	let t = e?.showLog, n = e.type, r = e?.options, i = n, a = n;
	if (n.includes(".")) {
		let e = n.split(".");
		i = e[0], a = e[1];
	}
	t && console.log("localMainType : ", i, a);
	let s = ut[i];
	if (!s) throw Error(`Renderer for type "${i}" not found.`);
	let c = s({
		inType: a,
		inColumns: e.columns,
		inData: e.data,
		inOptions: r,
		options: e.options,
		inShowLog: t
	});
	return t && console.log("json-renderers-build output:", c), c;
};
Ae(Y);
// ../json-renderers-actions/src/v1/register/meta.js
var dt = {
	name: "json-renderers-actions",
	version: "1.0.0"
}, ft = (e, t = dt) => {
	if (e && typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.jsonRenderersActions = {
		meta: t,
		applyActions: e
	}, globalThis.ks.jsonRenderersActions;
}, pt = (e) => typeof e == "string" ? document.getElementById(e) || document.querySelector(e) : e && typeof e == "object" && "addEventListener" in e ? e : null, mt = (e) => e && pt(e) || null, ht = (e) => !e || typeof e != "object" ? null : Object.entries(e).filter(([, e]) => typeof e == "function").length > 0 ? e : null, gt = (e) => e ? ht(e) : null, _t = (e, t) => {
	let n = mt(e);
	if (!n) return null;
	let r = gt(t);
	return r ? {
		container: n,
		actions: r
	} : null;
}, vt = (e, t = "tbody button, tfoot button, button, tbody tr") => typeof e == "function" ? {
	event: "click",
	selector: t,
	onExtract: (t, n) => {
		e(t, n);
	}
} : null, yt = (e, t, n) => vt(e, t, n), bt = (e, t = "input[type='search'], .table-search-input, thead input, input") => typeof e == "function" ? {
	event: "keydown",
	selector: t,
	onExtract: (t, n, r) => {
		n?.key === "Enter" && e(r?.value ?? n?.target?.value ?? "", n, r);
	}
} : null, xt = (e, t) => bt(e, t), St = (e, t = "tfoot button") => typeof e == "function" ? {
	event: "click",
	selector: t,
	onExtract: (t, n) => {
		e(t, n);
	}
} : null, Ct = (e, t, n) => St(e, t, n), wt = ({ actions: e = {}, options: t = {} } = {}) => {
	let n = [], r = e.rowClick || e.buttonClick || e.row;
	if (r) {
		let e = yt(r, t?.rowSelector);
		e && n.push(e);
	}
	let i = e.searchKeydown || e.search;
	if (i) {
		let e = xt(i, t?.searchSelector);
		e && n.push(e);
	}
	let a = e.footerClick || e.footer;
	if (a) {
		let e = Ct(a, t?.footerSelector);
		e && n.push(e);
	}
	return Array.isArray(e?.custom) && n.push(...e.custom), n;
}, Tt = {
	name: "dom-primitive-bindings",
	version: "3.0.0"
}, Et = (e, t = Tt) => {
	if (e && typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.domPrimitiveBindings = {
		meta: t,
		bindEvents: e
	}, globalThis.ks.bindEvents ??= e, globalThis.ks.domPrimitiveBindings;
}, Dt = (e) => typeof e == "string" ? document.getElementById(e) || document.querySelector(e) : e && typeof e == "object" && "addEventListener" in e ? e : null, Ot = (e) => e && Dt(e) || null, kt = (e) => Array.isArray(e) ? e.filter((e) => e && typeof e == "object" && typeof e.event == "string" && typeof e.selector == "string") : [], X = (e) => {
	let t = kt(e);
	return t.length === 0 ? null : t;
}, At = (e, t) => {
	let n = Ot(e);
	if (!n) return null;
	let r = X(t);
	return r ? {
		container: n,
		bindings: r
	} : null;
}, jt = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.event) ?? [];
		e.push(n), t.set(n.event, e);
	}
	return t;
}, Mt = (e) => jt(e), Nt = (e, t, n) => e.root === "event" || t?.type?.startsWith("key") ? t : n, Pt = (e, t, n) => ({
	...e.clientData,
	event: t,
	targetElement: n
}), Ft = ({ binding: e, event: t, matchElement: n }) => {
	let r = Nt(e, t, n), i = Pt(e, t, n), a = e.runner, o = typeof a == "function" ? a(r, e.instructions, i) : r;
	return o != null && typeof e.onExtract == "function" && e.onExtract(o, t, n), o;
}, It = ({ bindings: e, event: t, container: n }) => {
	for (let r of e) {
		let e = t.target?.closest?.(r.selector);
		e && n.contains(e) && Ft({
			binding: r,
			event: t,
			matchElement: e
		});
	}
}, Lt = (e, t, n) => {
	e.addEventListener(t, (t) => {
		It({
			bindings: n,
			event: t,
			container: e
		});
	});
}, Rt = (e, t) => {
	for (let [n, r] of t.entries()) Lt(e, n, r);
	return e;
}, Z = (e, t = []) => {
	let n = At(e, t);
	if (!n) return null;
	let { container: r, bindings: i } = n;
	return Rt(r, Mt(i)), r;
};
Et(Z);
// ../json-renderers-actions/src/v1/listeners/attach/attachBindings.js
var zt = (e, t = []) => {
	let n = Z || globalThis.ks?.domPrimitiveBindings?.bindEvents;
	return typeof n == "function" ? n(e, t) : null;
}, Bt = (e, t) => zt(e, t), Vt = (e, t) => Bt(e, t), Q = (e, t = {}) => {
	let n = t?.actions && typeof t.actions == "object" ? t.actions : t, r = t?.options ?? {}, i = t?.columns ?? [], a = _t(e, n);
	if (!a) return null;
	let { container: o, actions: s } = a;
	return Vt(o, wt({
		actions: s,
		columns: i,
		options: r
	})), o;
};
ft(Q);
// src/v46/index.js
var $ = (e = {}) => {
	p(e);
	let t = e?.showLog, n = e?.options;
	t && console.log("first : ", e?.options, e?.columns, e?.data, e?.appendPosition);
	let r = Y({
		type: e.type,
		data: e.data,
		columns: e.columns,
		showLog: e.showLog,
		options: n
	});
	t && console.log("spec : ", r);
	let i = S({
		jsonSpec: r,
		targetHtmlId: e.targetHtmlId,
		appendPosition: e.appendPosition,
		showLog: t
	});
	return t && console.log("dom : ", i), Array.isArray(e?.bindings) && e.bindings.length > 0 ? M(e.targetHtmlId, e.bindings) : (e?.actions || e?.options?.bindEvents) && Q(e.targetHtmlId, {
		actions: e.actions,
		options: n
	}), i;
};
t($);
export { $ as default, $ as render };
