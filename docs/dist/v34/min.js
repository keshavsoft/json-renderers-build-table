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
//#region node_modules/json-transformer-funcs-one-dimension/src/v6/guard/index.js
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
}, te = (e, t) => e.map((e) => {
	let n = t[e.template?.body?.cell || e.template?.bodyCell || "buildBodyCell"];
	return c(e, n);
}), f = (e, t, n) => {
	ee(e, t, n);
	let r = e, i = t, a = n, o = a[r[0]?.template?.body?.tr || "buildBodyTr"];
	return i.map((e) => {
		let t = c(e, o);
		return t.children = te(d(r, e), a), t;
	});
}, p = (e) => Array.isArray(e) ? e : [e], m = (e, t, n) => {
	e[t] = n;
}, h = {
	set: m,
	push: (e, t, n) => {
		e[t].push(...p(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...p(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(p(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(p(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, g = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = g(n, t);
		if (e) return e;
	}
	return null;
}, ne = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? g(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, re = (e, t) => {
	let n = t.dataRole ? g(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, _ = (e, t, n) => {
	let { parent: r, key: i } = re(e, t);
	(h[t.action] || m)(r, i, n);
}, v = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = v(n, t);
		if (e) return e;
	}
	return null;
}, y = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? v(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, ie = (e, t, n) => {
	let r = !!(e.sourcePath?.fileName && Array.isArray(e.sourcePath?.filePath)), i = `structure/sourcePath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, ae = (e, t, n) => {
	let r = !!(e.destinationPath?.fileName && Array.isArray(e.destinationPath?.filePath)), i = `structure/destinationPath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, oe = (e, t, n) => {
	let r = e.templateKey === void 0 || typeof e.templateKey == "string" && e.templateKey.length > 0, i = `structure/templateKey: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, se = (e, t, n) => {
	let r = typeof e.func == "string" && e.func.length > 0, i = `structure/func: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, ce = (e, t, n) => [
	ie(e, t, n),
	ae(e, t, n),
	oe(e, t, n),
	se(e, t, n)
].every(Boolean), le = (e, t, n, r) => {
	let i = typeof t[e.func] == "function", a = `references/func (${e.func}): ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, ue = (e, t, n, r) => {
	let i = e.templateKey === void 0 || Object.hasOwn(t, e.templateKey), a = `references/templateKey${e.templateKey === void 0 ? " (not used)" : ` (${e.templateKey})`}: ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, de = (e, t, n, r, i) => {
	let a = le(e, t, r, i), o = ue(e, n, r, i);
	return a && o;
}, fe = (e, t, n, r, i) => ce(e, r, i) ? de(e, t, n, r, i) : !1, b = {
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
	}
}, pe = {
	applyTemplate: c,
	fromCollection: u
}, me = (e, t) => e?.sourcePath === null ? null : y(t, e.sourcePath), he = (e, t, n, r) => {
	let i = b[e.templateKey], a = me(e, t), o = pe[e.func](a, i);
	a === null && (o = i), _(t, e.destinationPath, o);
}, x = (e, t, n, r) => {
	e.forEach((e) => {
		he(e, t, n, r);
	});
}, S = {
	applyTemplate: c,
	fromCollection: u,
	twoDimensional: f
}, ge = (e, t, n, r) => {
	if (!fe(e, S, b, n, r)) return;
	let i = S[e.func](t.data.columns, t.data.data, b);
	_(t, e.destinationPath, i);
}, _e = (e, t, n, r) => {
	e.forEach((e) => {
		ge(e, t, n, r);
	});
}, C = {
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
}, ve = {
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
}, w = [{
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
}], T = [{
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
}], E = (e, t, n) => {
	let r = !(!e || typeof e != "object" || Array.isArray(e)), i = `guards/base: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, D = (e, t, n) => {
	let r = !(!e || typeof e != "object" || Array.isArray(e)), i = `guards/options: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, O = (e, t, n) => {
	let r = typeof e == "boolean", i = `guards/showLog: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, k = (e, t, n) => {
	let r = Array.isArray(e), i = `guards/returnLog: ${r ? "passed" : "failed"}`;
	return r ? e.push(i) : Array.isArray(n) && n.push(i), t && console.log(i), r;
}, A = ({ options: e, base: t, showLog: n, returnLog: r }) => ({
	base: E(t, n, r),
	options: D(e, n, r),
	showLog: O(n, n, r),
	returnLog: k(r, n, r)
}), j = [
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
], M = [
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
], N = ({ options: e = {}, base: t, showLog: n = !1, returnLog: r = [] } = {}) => {
	let i = A({
		options: e,
		base: t,
		showLog: n,
		returnLog: r
	});
	if (!Object.values(i).every(Boolean)) return t;
	let a = e, o = t, s = n, c = r;
	return (a.showSerial || a.serial) && x(j, { base: o }, s, c), (a.showOptions || a.options) && x(M, { base: o }, s, c), a.showSearch, o;
}, P = ({ inOptions: e = {}, inBase: t, showLog: n = !1, returnLog: r = [] }) => N({
	options: e,
	base: t,
	showLog: n,
	returnLog: r
}), F = (e = {}, t = !1, n = []) => {
	let r = e, i = r.columns || [], a = r.data || [], o = r.options || {}, s = r?.showLog, c = structuredClone(ve), l = {
		data: {
			columns: i,
			data: a
		},
		base: c,
		spec: C,
		...o
	};
	return console.log("registry : ", s, l), x(w, l, s, n), _e(T, l, t, n), P({
		inOptions: o,
		inBase: c
	}), c;
}, I = {
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
}, ye = [{
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
}], L = (e) => Array.isArray(e) ? e : [e], R = (e, t, n) => {
	e[t] = n;
}, be = {
	set: R,
	push: (e, t, n) => {
		e[t].push(...L(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...L(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(L(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(L(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, xe = (e, t) => {
	let n = t.dataRole ? g(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, z = (e, t, n) => {
	let { parent: r, key: i } = xe(e, t);
	(be[t.action] || R)(r, i, n);
}, Se = (e, t, n) => {
	let r = !!(e.sourcePath?.fileName && Array.isArray(e.sourcePath?.filePath)), i = `structure/sourcePath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, Ce = (e, t, n) => {
	let r = !!(e.destinationPath?.fileName && Array.isArray(e.destinationPath?.filePath)), i = `structure/destinationPath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, we = (e, t, n) => {
	let r = e.templateKey === void 0 || typeof e.templateKey == "string" && e.templateKey.length > 0, i = `structure/templateKey: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, Te = (e, t, n) => {
	let r = typeof e.func == "string" && e.func.length > 0, i = `structure/func: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, Ee = (e, t, n) => [
	Se(e, t, n),
	Ce(e, t, n),
	we(e, t, n),
	Te(e, t, n)
].every(Boolean), De = (e, t, n, r) => {
	let i = typeof t[e.func] == "function", a = `references/func (${e.func}): ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, Oe = (e, t, n, r) => {
	let i = e.templateKey === void 0 || Object.hasOwn(t, e.templateKey), a = `references/templateKey${e.templateKey === void 0 ? " (not used)" : ` (${e.templateKey})`}: ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, ke = (e, t, n, r, i) => {
	let a = De(e, t, r, i), o = Oe(e, n, r, i);
	return a && o;
}, B = (e, t, n, r, i) => Ee(e, r, i) ? ke(e, t, n, r, i) : !1, Ae = (e, t, n, r, i, a) => {
	if (!B(e, n, r, i, a)) return;
	let o = i, s = r, c = e.templateKey, l = s[c];
	o && console.log("singleInstruction ; ", c, l);
	let u = ne(t, e.sourcePath), d = n[e.func](u, l);
	z(t, e.destinationPath, d);
}, V = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		Ae(e, t, n, r, i, a);
	});
}, H = {
	data: {},
	base: I,
	spec: C
}, je = { fromCollection: u }, U = (e, t = !1, n = []) => (H.data = e, V(ye, H, je, C, t, n), I), W = { children: [] }, Me = [{
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
}], Ne = (e, t, n, r, i, a) => {
	if (!B(e, n, r, i, a)) return;
	let o = n[e.func](t.data.columns, t.data.data, r);
	z(t, e.destinationPath, o);
}, G = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		Ne(e, t, n, r, i, a);
	});
}, K = {
	data: {},
	base: W,
	spec: C
}, q = { twoDimensional: f }, J = (e, t = !1, n = []) => (K.data = e, G(Me, K, q, C, t, n), W.children), Pe = {
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
}, Fe = [
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
], Ie = [{
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
}], Y = {
	fromCollection: u,
	twoDimensional: f
}, X = (e = {}, t = !1, n = []) => {
	let r = e, i = r.inColumns || r.columns || [], a = r.inData || r.data || [], o = r.inOptions || r.options || {}, s = structuredClone(Pe), c = {
		data: {
			columns: i,
			data: a
		},
		base: s,
		spec: C
	};
	return V(Fe, c, Y, C, t, n), G(Ie, c, Y, C, t, n), P({
		inOptions: o,
		inBase: s
	}), s;
}, Z = { children: [] }, Le = [{
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
	spec: C
}, Re = {
	fromCollection: u,
	twoDimensional: f
}, $ = (e, t = !1, n = []) => (Q.data = e, V(Le, Q, Re, C, t, n), Z?.children), ze = {
	simple: F,
	headerOnly: U,
	bodyOnly: J,
	withFooter: X,
	footerOnly: $
};
//#endregion
export { J as bodyOnly, ze as default, $ as footerOnly, U as headerOnly, F as simple, X as withFooter };
