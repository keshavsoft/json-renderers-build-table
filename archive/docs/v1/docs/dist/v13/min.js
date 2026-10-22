//#region node_modules/json-transformer-funcs/src/v4/collectionFromKey/getContentKey.js
var e = (e) => {
	let t = e;
	if (t && t.startsWith("$")) return t?.replace("${", "").replace("}", "");
}, t = (t, n) => {
	let r = {};
	for (let [i, a] of Object.entries(t)) {
		r[i] = a;
		let t = e(a);
		t && t in n && (r[i] = n?.[t]);
	}
	return r;
}, n = (n, r) => {
	let i = n, a = r, o = e(a?.textContent);
	return i.map((e) => {
		let n = structuredClone(a);
		return o && (n.textContent = e?.[o]), "attributes" in n && (n.attributes = t(n.attributes, e)), n;
	});
}, r = (e, t, n) => {
	let r = e, a = t, o = n;
	return r.map((e) => {
		let t = structuredClone(a);
		return t.children = i({
			inSource: e,
			inTemplate: o
		}), t;
	});
}, i = ({ inSource: e, inTemplate: t }) => {
	let n = e, r = t, i = [];
	for (let [e, t] of Object.entries(n)) {
		let e = structuredClone(r);
		e.textContent = e.textContent.replace("${rowValue}", t).replace("${}", t), i.push(e);
	}
	return i;
}, a = {
	buildColGroup: {
		tagName: "col",
		attributes: { width: "${width}" }
	},
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	buildBody: {
		outerTemplate: {
			tagName: "tr",
			attributes: { class: "align-middle" }
		},
		innerTemplate: {
			tagName: "td",
			textContent: "${rowValue}",
			attributes: { class: "py-3 px-3 text-secondary" }
		}
	},
	buildFooter: {
		tagName: "td",
		children: [{
			tagName: "input",
			attributes: {
				type: "text",
				placeholder: "${columnName}",
				class: "form-control"
			}
		}]
	}
}, o = {
	tagName: "table",
	attributes: { class: "table table-hover table-striped align-middle border mb-0" },
	children: [
		{
			tagName: "colgroup",
			children: []
		},
		{
			tagName: "thead",
			attributes: { class: "table-dark" },
			children: [{
				tagName: "tr",
				children: []
			}]
		},
		{
			tagName: "tbody",
			children: []
		},
		{
			tagName: "tfoot",
			children: [{
				tagName: "tr",
				children: []
			}]
		}
	]
}, s = [
	{
		destinationPath: [
			"children",
			0,
			"children"
		],
		sourceKey: "colGroup",
		templateKey: "buildColGroup",
		func: "collectionFromKey"
	},
	{
		destinationPath: [
			"children",
			1,
			"children",
			0,
			"children"
		],
		sourceKey: "columns",
		templateKey: "buildHeader",
		func: "collectionFromKey"
	},
	{
		destinationPath: [
			"children",
			2,
			"children"
		],
		sourceKey: "rows",
		templateKey: "buildBody",
		func: "collectionFromInternal"
	},
	{
		destinationPath: [
			"children",
			3,
			"children",
			0,
			"children"
		],
		sourceKey: "columns",
		templateKey: "buildFooter",
		func: "collectionFromKey"
	}
], c = (e, t, n) => {
	let r = [...t], i = r.pop(), a = r.reduce((e, t) => e[t], e);
	a[i] = n;
}, l = {
	collectionFromKey: ({ source: e, template: t }) => n(e, t),
	collectionFromInternal: ({ source: e, template: t }) => r(e, t.outerTemplate, t.innerTemplate)
}, u = (e) => {
	let t = structuredClone(o);
	return s.forEach((n) => {
		let r = {
			source: e[n.sourceKey],
			template: a[n.templateKey]
		}, i = l[n.func](r);
		c(t, n.destinationPath, i);
	}), t;
}, d = {
	version: "v9",
	description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, f = ({ inFuncDefinition: e, inReviewSpec: t } = {}) => {
	if (typeof globalThis > "u" || !e) return;
	globalThis.ks ??= {};
	let n = {
		meta: d,
		buildSpecElement: e,
		reviewSpec: t
	};
	globalThis.ks["json-to-tag"] = n, globalThis.ks.jsonToTag = n;
}, p = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : typeof e == "object" && (e.nodeType === 3 || e.tagName === "#text" || !e.tagName && (e.textContent !== void 0 || e.text !== void 0)) ? document.createTextNode(e.textContent ?? e.text ?? "") : T(e), m = (e) => Array.isArray(e) ? e.map(p).flat(Infinity).filter(Boolean) : [], h = (e) => e ?? e, g = "http://www.w3.org/2000/svg", _ = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), v = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return _.has(t) ? document.createElementNS(g, t) : document.createElement(t);
}, y = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), b = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), x = "http://www.w3.org/1999/xlink", S = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(x, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, C = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, w = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = v({ inTagName: e.tagName });
	if (!t) return null;
	if (y({
		inElement: t,
		inTextContent: h(e.textContent),
		inTagName: e.tagName
	}), b({
		inElement: t,
		inProperties: e.properties
	}), S({
		inElement: t,
		inAttributes: e.attributes
	}), C({
		inElement: t,
		inClassList: e.classList
	}), Array.isArray(e.children)) {
		let n = m(e.children);
		n.length && t.append(...n);
	}
	return t;
}, T = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : Array.isArray(e) ? m(e) : typeof e == "object" ? w(e) : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : null, E = {
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
}, D = ({ inSpec: e }) => {
	let t = e;
	if (!t) return [];
	if (Array.isArray(t)) return t.flatMap((e) => D({ inSpec: e }));
	if (typeof t != "object") return [];
	let n = [];
	return typeof t.tagName == "string" && t.tagName.trim().length > 0 && n.push(t.tagName.toLowerCase()), Array.isArray(t.children) && t.children.length > 0 && t.children.forEach((e) => {
		let t = D({ inSpec: e });
		n.push(...t);
	}), n;
}, O = ({ inTagsFound: e, inAllowedTags: t }) => {
	let n = e ?? [], r = new Set(Object.keys(t ?? {}).filter((e) => e !== "$schema").map((e) => e.toLowerCase())), i = {}, a = [], o = [];
	n.forEach((e) => {
		i[e] = (i[e] || 0) + 1, r.has(e) ? a.includes(e) || a.push(e) : o.includes(e) || o.push(e);
	});
	let s = n.length, c = o.length === 0;
	return {
		totalTags: s,
		tagCounts: i,
		uniqueTags: Object.keys(i),
		recognizedTags: a,
		unrecognizedTags: o,
		areAllTagsPresent: c
	};
}, k = ({ inSpec: e, inTags: t = E } = {}) => {
	let n = e, r = t, i = O({
		inTagsFound: D({ inSpec: n }),
		inAllowedTags: r
	});
	return {
		areAllTagsPresent: i.areAllTagsPresent,
		totalTags: i.totalTags,
		tagCounts: i.tagCounts,
		uniqueTags: i.uniqueTags,
		recognizedTags: i.recognizedTags,
		unrecognizedTags: i.unrecognizedTags
	};
}, A = (e = {}) => T(e?.spec ?? e?.inSpec ?? e);
f({
	inFuncDefinition: A,
	inReviewSpec: k
});
//#endregion
//#region src/v13/index.js
var j = ({ targetHtmlId: e, inSpec: t } = {}) => {
	let n = e, r = A(t);
	if (n && typeof document < "u") {
		let e = document.getElementById(n);
		e && (e.innerHTML = "", e.append(r));
	}
	return r;
}, M = ({ columns: e = [], data: t = [], colGroup: n = [], targetHtmlId: r } = {}) => {
	j({
		targetHtmlId: r,
		inSpec: u({
			colGroup: n,
			columns: e,
			rows: t
		})
	});
};
//#endregion
export { M as default };
