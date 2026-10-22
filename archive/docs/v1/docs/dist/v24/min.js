//#region node_modules/json-transformer-funcs-primitive/src/v9/forAttributes/index.js
var e = (e) => typeof e == "object" && !!e && !Array.isArray(e), t = (t, n) => {
	if (!e(t)) return;
	let r = {};
	for (let [e, i] of Object.entries(t)) r[e] = c(n, i);
	return r;
}, n = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => c(t, e));
}, r = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, i = (e, t) => r(e, t), a = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, o = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.0"
}, s = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: o,
		applyTemplate: e
	});
}, c = (e, o, s) => {
	let c = e, l = o;
	a(c, l, s);
	let u = structuredClone(l);
	return typeof u == "string" ? r(u, c) : (typeof u != "object" || !u || ("textContent" in u && (u.textContent = i(u?.textContent, c)), "attributes" in u && (u.attributes = t(u?.attributes, c)), "children" in u && (u.children = n(u?.children, c))), u);
};
s(c);
//#endregion
//#region node_modules/json-transformer-funcs-one-dimension/src/v5/guard/index.js
var l = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, u = (e, t) => {
	let n = e, r = t;
	return l(n, r), n.map((e) => c(e, r));
}, ee = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), te = (e, t, n) => {
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
	if (!n || typeof n != "object" || Array.isArray(n)) throw TypeError("inSpec must be an object");
	let r = e[0]?.template?.body?.tr || "buildBodyTr";
	if (!(r in n)) throw Error(`Row template "${r}" not found in inSpec`);
	for (let t = 0; t < e.length; t++) {
		let r = e[t], i = r.template?.body?.cell || r.template?.bodyCell || "buildBodyCell";
		if (!(i in n)) throw Error(`Cell template "${i}" for column "${r.columnName}" not found in inSpec`);
	}
	return !0;
}, d = (e, t) => e.map((e) => {
	let n = t[e.template?.body?.cell || e.template?.bodyCell || "buildBodyCell"];
	return c(e, n);
}), f = (e, t, n) => {
	te(e, t, n);
	let r = e, i = t, a = n, o = a[r[0]?.template?.body?.tr || "buildBodyTr"];
	return i.map((e) => {
		let t = c(e, o);
		return t.children = d(ee(r, e), a), t;
	});
}, p = {
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
			textContent: "${columnName}",
			attributes: { class: "btn btn-primary btn-sm" }
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
	}
}, ne = {
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
}, re = [{
	narration: "Build the column widths for the table using the configured columns.",
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
	narration: "Build the header row for the table using the configured columns.",
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
}], m = [{
	narration: "Build the table body rows for the table using the configured columns and data.",
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
}], h = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = h(n, t);
		if (e) return e;
	}
	return null;
}, ie = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? h(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, g = (e) => Array.isArray(e) ? e : [e], _ = (e, t, n) => {
	e[t] = n;
}, ae = {
	set: _,
	push: (e, t, n) => {
		e[t].push(...g(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...g(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(g(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(g(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, v = (e, t) => {
	let n = t.dataRole ? h(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, y = (e, t, n) => {
	let { parent: r, key: i } = v(e, t);
	(ae[t.action] || _)(r, i, n);
}, oe = (e, t, n) => {
	let r = !!(e.sourcePath?.fileName && Array.isArray(e.sourcePath?.filePath)), i = `structure/sourcePath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, se = (e, t, n) => {
	let r = !!(e.destinationPath?.fileName && Array.isArray(e.destinationPath?.filePath)), i = `structure/destinationPath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, b = (e, t, n) => {
	let r = e.templateKey === void 0 || typeof e.templateKey == "string" && e.templateKey.length > 0, i = `structure/templateKey: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, x = (e, t, n) => {
	let r = typeof e.func == "string" && e.func.length > 0, i = `structure/func: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, S = (e, t, n) => [
	oe(e, t, n),
	se(e, t, n),
	b(e, t, n),
	x(e, t, n)
].every(Boolean), C = (e, t, n, r) => {
	let i = typeof t[e.func] == "function", a = `references/func (${e.func}): ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, w = (e, t, n, r) => {
	let i = e.templateKey === void 0 || Object.hasOwn(t, e.templateKey), a = `references/templateKey${e.templateKey === void 0 ? " (not used)" : ` (${e.templateKey})`}: ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, ce = (e, t, n, r, i) => {
	let a = C(e, t, r, i), o = w(e, n, r, i);
	return a && o;
}, T = (e, t, n, r, i) => S(e, r, i) ? ce(e, t, n, r, i) : !1, le = (e, t, n, r, i, a) => {
	if (!T(e, n, r, i, a)) return;
	let o = r, s = e.templateKey, c = o[s];
	console.log("templateKey ; ", s), console.log("localSpecKey ; ", c);
	let l = ie(t, e.sourcePath), u = n[e.func](l, c);
	s === "buildFooter" && console.log("result ; ", u), y(t, e.destinationPath, u);
}, E = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		le(e, t, n, r, i, a);
	});
}, ue = (e, t, n, r, i, a) => {
	if (!T(e, n, r, i, a)) return;
	let o = n[e.func](t.data.columns, t.data.data, r);
	y(t, e.destinationPath, o);
}, D = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		ue(e, t, n, r, i, a);
	});
}, de = [
	{
		narration: "Prepend the serial column width to the table colgroup.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-colgroup",
			filePath: ["children"],
			action: "unshift"
		},
		sourcePath: {
			fileName: "data",
			filePath: ["serial", "col"]
		},
		templateKey: "buildColGroup",
		func: "applyTemplate"
	},
	{
		narration: "Prepend the serial header cell to the table header row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-header-row",
			filePath: ["children"],
			action: "unshift"
		},
		sourcePath: {
			fileName: "data",
			filePath: ["serial", "header"]
		},
		templateKey: "buildHeader",
		func: "applyTemplate"
	},
	{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"],
			action: "unshiftSerialToRows"
		},
		sourcePath: {
			fileName: "data",
			filePath: ["serial", "body"]
		},
		templateKey: "buildBodyCell",
		func: "applyTemplate"
	}
], fe = [{
	narration: "Prepend an empty cell into the table footer row if footer row is present.",
	destinationPath: {
		fileName: "base",
		dataRole: "table-footer-row",
		filePath: ["children"],
		action: "unshift"
	},
	sourcePath: {
		fileName: "data",
		filePath: ["serial", "footer"]
	},
	templateKey: "emptyCell",
	func: "applyTemplate"
}], O = { applyTemplate: c }, k = (e = {}, t = {}, n = !1, r = []) => {
	let i = e, a = t;
	e && typeof e == "object" && "inTableSpec" in e && (i = e.inTableSpec, a = e.inSerial || t);
	let o = {
		data: { serial: {
			col: { width: "50px" },
			header: { columnName: "#" },
			body: {},
			footer: {},
			...a
		} },
		base: i,
		spec: p
	};
	E(de, o, O, p, n, r);
	let s = h(i, "table-footer-row");
	return s && Array.isArray(s.children) && s.children.length > 0 && E(fe, o, O, p, n, r), i;
}, pe = [
	{
		narration: "Append the options column width to the table colgroup.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-colgroup",
			filePath: ["children"],
			action: "push"
		},
		sourcePath: {
			fileName: "data",
			filePath: ["options", "col"]
		},
		templateKey: "buildColGroup",
		func: "applyTemplate"
	},
	{
		narration: "Append the options header cell to the table header row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-header-row",
			filePath: ["children"],
			action: "push"
		},
		sourcePath: {
			fileName: "data",
			filePath: ["options", "header"]
		},
		templateKey: "buildHeader",
		func: "applyTemplate"
	},
	{
		narration: "Append the options button cell into each table body row.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"],
			action: "pushToRows"
		},
		sourcePath: {
			fileName: "data",
			filePath: ["options", "body"]
		},
		templateKey: "optionsButtonCell",
		func: "applyTemplate"
	}
], A = [{
	narration: "Append an empty cell into the table footer row if footer row is present.",
	destinationPath: {
		fileName: "base",
		dataRole: "table-footer-row",
		filePath: ["children"],
		action: "push"
	},
	sourcePath: {
		fileName: "data",
		filePath: ["options", "footer"]
	},
	templateKey: "emptyCell",
	func: "applyTemplate"
}], j = { applyTemplate: c }, M = (e = {}, t = {}, n = !1, r = []) => {
	let i = e, a = t;
	e && typeof e == "object" && "inTableSpec" in e && (i = e.inTableSpec, a = e.inOptions || t);
	let o = {
		data: { options: {
			col: { width: "100px" },
			header: { columnName: "options" },
			body: { columnName: "show" },
			footer: {},
			...a
		} },
		base: i,
		spec: p
	};
	E(pe, o, j, p, n, r);
	let s = h(i, "table-footer-row");
	return s && Array.isArray(s.children) && s.children.length > 0 && E(A, o, j, p, n, r), i;
}, N = {
	fromCollection: u,
	twoDimensional: f
}, P = (e = {}, t = !1, n = []) => {
	let r = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e, i = r.inColumns || r.columns || [], a = r.inData || r.data || [], o = r.inOptions || r.options || {}, s = structuredClone(ne), c = {
		data: {
			columns: i,
			data: a
		},
		base: s,
		spec: p
	};
	return E(re, c, N, p, t, n), D(m, c, N, p, t, n), (o.showSerial || o.serial) && k(s, o.serial || {}, t, n), (o.showOptions || o.options) && M(s, o.options || {}, t, n), s;
}, F = {
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
}, I = [{
	narration: "Build the column widths for the table using the configured columns.",
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
	narration: "Build the header row for the table using the configured columns.",
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
}], L = {
	data: {},
	base: F,
	spec: p
}, R = { fromCollection: u }, z = (e, t = !1, n = []) => (L.data = e, E(I, L, R, p, t, n), F), B = { children: [] }, me = [{
	narration: "Build the table body rows for the table using the configured columns and data.",
	destinationPath: {
		fileName: "base",
		filePath: ["children"]
	},
	sourcePath: {
		fileName: "data",
		filePath: ["columns"]
	},
	func: "twoDimensional"
}], V = {
	data: {},
	base: B,
	spec: p
}, he = { twoDimensional: f }, H = (e, t = !1, n = []) => (V.data = e, D(me, V, he, p, t, n), B.children), ge = {
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
}, _e = [
	{
		narration: "Build the column widths for the table using the configured columns.",
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
		narration: "Build the header row for the table using the configured columns.",
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
		narration: "Build the footer row for the table using the configured columns.",
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
], ve = [{
	narration: "Build the table body rows for the table using the configured columns and data.",
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
}], U = {
	fromCollection: u,
	twoDimensional: f
}, W = (e = {}, t = !1, n = []) => {
	let r = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e, i = r.inColumns || r.columns || [], a = r.inData || r.data || [], o = r.inOptions || r.options || {}, s = structuredClone(ge), c = {
		data: {
			columns: i,
			data: a
		},
		base: s,
		spec: p
	};
	return E(_e, c, U, p, t, n), D(ve, c, U, p, t, n), (o.showSerial || o.serial) && k(s, o.serial || {}, t, n), (o.showOptions || o.options) && M(s, o.options || {}, t, n), s;
}, G = { children: [] }, K = [{
	narration: "Build the footer row for the table using the configured columns.",
	destinationPath: {
		fileName: "base",
		filePath: ["children"]
	},
	sourcePath: {
		fileName: "data",
		filePath: ["columns"]
	},
	templateKey: "buildFooter",
	func: "fromCollection"
}], q = {
	data: {},
	base: G,
	spec: p
}, ye = {
	fromCollection: u,
	twoDimensional: f
}, J = (e, t = !1, n = []) => (q.data = e, E(K, q, ye, p, t, n), G?.children), Y = {
	insertSerial: k,
	insertOptions: M
}, X = (e = {}, t = !1, n = []) => {
	let r = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return P({
		...r,
		options: {
			showSerial: !0,
			serial: r.serial || r.inSerial,
			...r.options || r.inOptions
		}
	}, t, n);
}, Z = (e = {}, t = !1, n = []) => {
	let r = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return P({
		...r,
		options: {
			showOptions: !0,
			options: r.options || r.inOptions
		}
	}, t, n);
}, Q = X, $ = Z, be = {
	simple: P,
	headerOnly: z,
	bodyOnly: H,
	withFooter: W,
	footerOnly: J,
	insertSerial: k,
	insertOptions: M,
	actions: Y,
	withSerial: X,
	withOptions: Z,
	tableWithSerial: Q,
	tableWithOptions: $
};
//#endregion
export { Y as actions, H as bodyOnly, be as default, J as footerOnly, z as headerOnly, M as insertOptions, k as insertSerial, P as simple, $ as tableWithOptions, Q as tableWithSerial, W as withFooter, Z as withOptions, X as withSerial };
