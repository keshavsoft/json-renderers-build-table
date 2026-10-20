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
}, d = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), ee = (e, t, n) => {
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
}, f = (e, t) => e.map((e) => {
	let n = t[e.template?.body?.cell || e.template?.bodyCell || "buildBodyCell"];
	return c(e, n);
}), p = (e, t, n) => {
	ee(e, t, n);
	let r = e, i = t, a = n, o = a[r[0]?.template?.body?.tr || "buildBodyTr"];
	return i.map((e) => {
		let t = c(e, o);
		return t.children = f(d(r, e), a), t;
	});
}, m = {
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
}, te = {
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
}, ne = [{
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
}], re = [{
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
}, v = {
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
}, y = (e, t) => {
	let n = t.dataRole ? h(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, b = (e, t, n) => {
	let { parent: r, key: i } = y(e, t);
	(v[t.action] || _)(r, i, n);
}, x = (e, t, n) => {
	let r = !!(e.sourcePath?.fileName && Array.isArray(e.sourcePath?.filePath)), i = `structure/sourcePath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, S = (e, t, n) => {
	let r = !!(e.destinationPath?.fileName && Array.isArray(e.destinationPath?.filePath)), i = `structure/destinationPath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, C = (e, t, n) => {
	let r = e.templateKey === void 0 || typeof e.templateKey == "string" && e.templateKey.length > 0, i = `structure/templateKey: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, w = (e, t, n) => {
	let r = typeof e.func == "string" && e.func.length > 0, i = `structure/func: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, T = (e, t, n) => [
	x(e, t, n),
	S(e, t, n),
	C(e, t, n),
	w(e, t, n)
].every(Boolean), E = (e, t, n, r) => {
	let i = typeof t[e.func] == "function", a = `references/func (${e.func}): ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, ae = (e, t, n, r) => {
	let i = e.templateKey === void 0 || Object.hasOwn(t, e.templateKey), a = `references/templateKey${e.templateKey === void 0 ? " (not used)" : ` (${e.templateKey})`}: ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, oe = (e, t, n, r, i) => {
	let a = E(e, t, r, i), o = ae(e, n, r, i);
	return a && o;
}, D = (e, t, n, r, i) => T(e, r, i) ? oe(e, t, n, r, i) : !1, se = (e, t, n, r, i, a) => {
	if (!D(e, n, r, i, a)) return;
	let o = r, s = e.templateKey, c = o[s];
	console.log("templateKey ; ", s), console.log("localSpecKey ; ", c);
	let l = ie(t, e.sourcePath), u = n[e.func](l, c);
	s === "buildFooter" && console.log("result ; ", u), b(t, e.destinationPath, u);
}, O = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		se(e, t, n, r, i, a);
	});
}, ce = (e, t, n, r, i, a) => {
	if (!D(e, n, r, i, a)) return;
	let o = n[e.func](t.data.columns, t.data.data, r);
	b(t, e.destinationPath, o);
}, k = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		ce(e, t, n, r, i, a);
	});
}, A = [
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
], j = [{
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
}], M = { applyTemplate: c }, N = (e = {}, t = {}, n = !1, r = []) => {
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
		spec: m
	};
	O(A, o, M, m, n, r);
	let s = h(i, "table-footer-row");
	return s && Array.isArray(s.children) && s.children.length > 0 && O(j, o, M, m, n, r), i;
}, P = [
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
], F = [{
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
}], I = { applyTemplate: c }, L = (e = {}, t = {}, n = !1, r = []) => {
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
		spec: m
	};
	O(P, o, I, m, n, r);
	let s = h(i, "table-footer-row");
	return s && Array.isArray(s.children) && s.children.length > 0 && O(F, o, I, m, n, r), i;
}, R = {
	fromCollection: u,
	twoDimensional: p
}, z = (e = {}, t = !1, n = []) => {
	let r = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e, i = r.inColumns || r.columns || [], a = r.inData || r.data || [], o = r.inOptions || r.options || {}, s = structuredClone(te), c = {
		data: {
			columns: i,
			data: a
		},
		base: s,
		spec: m
	};
	return O(ne, c, R, m, t, n), k(re, c, R, m, t, n), (o.showSerial || o.serial) && N(s, o.serial || {}, t, n), (o.showOptions || o.options) && L(s, o.options || {}, t, n), s;
}, B = {
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
}, V = [{
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
}], H = {
	data: {},
	base: B,
	spec: m
}, U = { fromCollection: u }, W = (e, t = !1, n = []) => (H.data = e, O(V, H, U, m, t, n), B), G = { children: [] }, le = [{
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
}], K = {
	data: {},
	base: G,
	spec: m
}, ue = { twoDimensional: p }, q = (e, t = !1, n = []) => (K.data = e, k(le, K, ue, m, t, n), G.children), de = {
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
}, J = [
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
], fe = [{
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
}], pe = ({ inOptions: e = {}, inBase: t, showLog: n = !1, returnLog: r = [] }) => {
	let i = e, a = t;
	return (i.showSerial || i.serial) && N(a, i.serial || {}, n, r), (i.showOptions || i.options) && L(a, i.options || {}, n, r), a;
}, Y = {
	fromCollection: u,
	twoDimensional: p
}, X = (e = {}, t = !1, n = []) => {
	let r = e, i = r.inColumns || r.columns || [], a = r.inData || r.data || [], o = r.inOptions || r.options || {}, s = structuredClone(de), c = {
		data: {
			columns: i,
			data: a
		},
		base: s,
		spec: m
	};
	return O(J, c, Y, m, t, n), k(fe, c, Y, m, t, n), pe({
		inOptions: o,
		inBase: s
	}), s;
}, Z = { children: [] }, me = [{
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
}], Q = {
	data: {},
	base: Z,
	spec: m
}, he = {
	fromCollection: u,
	twoDimensional: p
}, $ = (e, t = !1, n = []) => (Q.data = e, O(me, Q, he, m, t, n), Z?.children), ge = {
	simple: z,
	headerOnly: W,
	bodyOnly: q,
	withFooter: X,
	footerOnly: $
};
//#endregion
export { q as bodyOnly, ge as default, $ as footerOnly, W as headerOnly, z as simple, X as withFooter };
