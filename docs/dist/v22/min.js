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
})), f = (e, t, n) => {
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
}, ee = (e, t) => e.map((e) => {
	let n = t[e.template?.body?.cell || e.template?.bodyCell || "buildBodyCell"];
	return c(e, n);
}), p = (e, t, n) => {
	f(e, t, n);
	let r = e, i = t, a = n, o = a[r[0]?.template?.body?.tr || "buildBodyTr"];
	return i.map((e) => {
		let t = c(e, o);
		return t.children = ee(d(r, e), a), t;
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
	}
}, h = {
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
}, g = [{
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
}], _ = [{
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
}], v = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = v(n, t);
		if (e) return e;
	}
	return null;
}, y = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? v(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, b = (e) => Array.isArray(e) ? e : [e], x = (e, t, n) => {
	e[t] = n;
}, S = {
	set: x,
	push: (e, t, n) => {
		e[t].push(...b(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...b(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(b(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(b(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, C = (e, t) => {
	let n = t.dataRole ? v(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, w = (e, t, n) => {
	let { parent: r, key: i } = C(e, t);
	(S[t.action] || x)(r, i, n);
}, T = (e, t, n) => {
	let r = !!(e.sourcePath?.fileName && Array.isArray(e.sourcePath?.filePath)), i = `structure/sourcePath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, E = (e, t, n) => {
	let r = !!(e.destinationPath?.fileName && Array.isArray(e.destinationPath?.filePath)), i = `structure/destinationPath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, D = (e, t, n) => {
	let r = e.templateKey === void 0 || typeof e.templateKey == "string" && e.templateKey.length > 0, i = `structure/templateKey: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, O = (e, t, n) => {
	let r = typeof e.func == "string" && e.func.length > 0, i = `structure/func: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, k = (e, t, n) => [
	T(e, t, n),
	E(e, t, n),
	D(e, t, n),
	O(e, t, n)
].every(Boolean), te = (e, t, n, r) => {
	let i = typeof t[e.func] == "function", a = `references/func (${e.func}): ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, A = (e, t, n, r) => {
	let i = e.templateKey === void 0 || Object.hasOwn(t, e.templateKey), a = `references/templateKey${e.templateKey === void 0 ? " (not used)" : ` (${e.templateKey})`}: ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, j = (e, t, n, r, i) => {
	let a = te(e, t, r, i), o = A(e, n, r, i);
	return a && o;
}, M = (e, t, n, r, i) => k(e, r, i) ? j(e, t, n, r, i) : !1, N = (e, t, n, r, i, a) => {
	if (!M(e, n, r, i, a)) return;
	let o = r, s = e.templateKey, c = o[s];
	console.log("templateKey ; ", s), console.log("localSpecKey ; ", c);
	let l = y(t, e.sourcePath), u = n[e.func](l, c);
	s === "buildFooter" && console.log("result ; ", u), w(t, e.destinationPath, u);
}, P = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		N(e, t, n, r, i, a);
	});
}, F = (e, t, n, r, i, a) => {
	if (!M(e, n, r, i, a)) return;
	let o = n[e.func](t.data.columns, t.data.data, r);
	w(t, e.destinationPath, o);
}, I = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		F(e, t, n, r, i, a);
	});
}, L = {
	data: {},
	base: h,
	spec: m
}, R = {
	fromCollection: u,
	twoDimensional: p
}, z = (e, t = !1, n = []) => (L.data = e, P(g, L, R, m, t, n), I(_, L, R, m, t, n), h), B = {
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
}, U = { fromCollection: u }, W = (e, t = !1, n = []) => (H.data = e, P(V, H, U, m, t, n), B), G = { children: [] }, K = [{
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
}], q = {
	data: {},
	base: G,
	spec: m
}, J = { twoDimensional: p }, Y = (e, t = !1, n = []) => (q.data = e, I(K, q, J, m, t, n), G.children), X = {
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
}, Z = [
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
], ne = [{
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
}], Q = {
	data: {},
	base: X,
	spec: m
}, $ = {
	fromCollection: u,
	twoDimensional: p
}, re = (e, t = !1, n = []) => (Q.data = e, P(Z, Q, $, m, t, n), I(ne, Q, $, m, t, n), X);
//#endregion
export { Y as bodyOnly, W as headerOnly, z as simple, re as withFooter };
