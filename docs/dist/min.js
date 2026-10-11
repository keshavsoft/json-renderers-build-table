//#region node_modules/json-transformer-funcs/src/v3/collectionFromKey/index.js
var e = (e, t) => {
	let n = e, r = t, i = r?.textContent?.replace("${", "").replace("}", "");
	return n.map((e) => {
		let t = structuredClone(r);
		return t.textContent = e?.[i], t;
	});
}, t = (e, t, r) => {
	let i = e, a = t, o = r;
	return i.map((e) => {
		let t = structuredClone(a);
		return t.children = n({
			inSource: e,
			inTemplate: o
		}), t;
	});
}, n = ({ inSource: e, inTemplate: t }) => {
	let n = e, r = t, i = [];
	for (let [e, t] of Object.entries(n)) {
		let e = structuredClone(r);
		e.textContent = e.textContent.replace("${rowValue}", t).replace("${}", t), i.push(e);
	}
	return i;
}, r = ({ inData: n, inSpec: r, inTable: i }) => {
	let a = n, o = r, s = structuredClone(i), c = e(a.columns, o.buildHeader), l = t(a.rows, o.buildBody.outerTemplate, o.buildBody.innerTemplate), u = s.children.find((e) => e.tagName === "thead"), d = s.children.find((e) => e.tagName === "tbody");
	return u.children[0].children = c, d.children = l, s;
}, i = {
	version: "v9",
	description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, a = ({ inFuncDefinition: e, inReviewSpec: t } = {}) => {
	if (typeof globalThis > "u" || !e) return;
	globalThis.ks ??= {};
	let n = {
		meta: i,
		buildSpecElement: e,
		reviewSpec: t
	};
	globalThis.ks["json-to-tag"] = n, globalThis.ks.jsonToTag = n;
}, o = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : typeof e == "object" && (e.nodeType === 3 || e.tagName === "#text" || !e.tagName && (e.textContent !== void 0 || e.text !== void 0)) ? document.createTextNode(e.textContent ?? e.text ?? "") : v(e), s = (e) => Array.isArray(e) ? e.map(o).flat(Infinity).filter(Boolean) : [], c = (e) => e ?? e, l = "http://www.w3.org/2000/svg", u = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), d = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return u.has(t) ? document.createElementNS(l, t) : document.createElement(t);
}, f = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), p = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), m = "http://www.w3.org/1999/xlink", h = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(m, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, g = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, _ = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = d({ inTagName: e.tagName });
	if (!t) return null;
	if (f({
		inElement: t,
		inTextContent: c(e.textContent),
		inTagName: e.tagName
	}), p({
		inElement: t,
		inProperties: e.properties
	}), h({
		inElement: t,
		inAttributes: e.attributes
	}), g({
		inElement: t,
		inClassList: e.classList
	}), Array.isArray(e.children)) {
		let n = s(e.children);
		n.length && t.append(...n);
	}
	return t;
}, v = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : Array.isArray(e) ? s(e) : typeof e == "object" ? _(e) : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : null, y = {
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
}, b = ({ inSpec: e }) => {
	let t = e;
	if (!t) return [];
	if (Array.isArray(t)) return t.flatMap((e) => b({ inSpec: e }));
	if (typeof t != "object") return [];
	let n = [];
	return typeof t.tagName == "string" && t.tagName.trim().length > 0 && n.push(t.tagName.toLowerCase()), Array.isArray(t.children) && t.children.length > 0 && t.children.forEach((e) => {
		let t = b({ inSpec: e });
		n.push(...t);
	}), n;
}, x = ({ inTagsFound: e, inAllowedTags: t }) => {
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
}, S = ({ inSpec: e, inTags: t = y } = {}) => {
	let n = e, r = t, i = x({
		inTagsFound: b({ inSpec: n }),
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
}, C = (e = {}) => v(e?.spec ?? e?.inSpec ?? e);
a({
	inFuncDefinition: C,
	inReviewSpec: S
});
var w = {
	buildHeader: {
		tagName: "th",
		textContent: "${label}",
		attributes: { scope: "col" }
	},
	buildBody: {
		outerTemplate: { tagName: "tr" },
		innerTemplate: {
			tagName: "td",
			textContent: "${rowValue}"
		}
	}
}, T = {
	tagName: "table",
	attributes: { class: "table table-hover table-striped align-middle border mb-0" },
	children: [{
		tagName: "thead",
		attributes: { class: "table-dark" },
		children: [{
			tagName: "tr",
			children: []
		}]
	}, {
		tagName: "tbody",
		children: []
	}]
}, E = ({ targetHtmlId: e, columns: t = [], data: n = [], colGroup: i = [] } = {}) => {
	let a = e, o = t, s = n, c = i, l = r({
		inData: {
			columns: o,
			rows: s
		},
		inSpec: w,
		inTable: T
	});
	if (Array.isArray(c) && c.length > 0) {
		let e = {
			tagName: "colgroup",
			children: c.map((e) => {
				let t = typeof e == "string" ? e : e?.width, n = typeof e == "object" ? e?.style : void 0, r = {};
				return n ? r.style = n : t && (r.style = `width: ${t};`), typeof e == "object" && e?.class && (r.class = e.class), {
					tagName: "col",
					...Object.keys(r).length > 0 ? { attributes: r } : {}
				};
			})
		};
		l.children.unshift(e);
	}
	let u = C(l);
	if (a && typeof document < "u") {
		let e = document.getElementById(a);
		e && (e.innerHTML = "", e.append(u));
	}
	return u;
};
//#endregion
export { E as default, E as render, E as renderTable };
