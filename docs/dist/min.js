// node_modules/json-transformer-funcs-primitive/src/v9/forAttributes/index.js
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
// node_modules/json-transformer-funcs-one-dimension/src/v6/guard/index.js
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
}, p = (e) => typeof e == "object" && !!e && !Array.isArray(e), ne = (e, t) => {
	if (!p(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = _(t, i);
	return n;
}, re = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => _(t, e));
}, m = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, h = (e, t) => m(e, t), g = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, ie = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.0"
}, ae = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: ie,
		applyTemplate: e
	});
}, _ = (e, t, n) => {
	let r = e, i = t;
	g(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? m(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = h(a?.textContent, r)), "attributes" in a && (a.attributes = ne(a?.attributes, r)), "children" in a && (a.children = re(a?.children, r))), a);
};
ae(_);
// ../json-instruction-single/node_modules/json-transformer-funcs-one-dimension/src/v6/guard/index.js
var v = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, y = (e, t) => {
	let n = e, r = t;
	return v(n, r), n.map((e) => _(e, r));
}, b = (e) => Array.isArray(e) ? e : [e], x = (e, t, n) => {
	e[t] = n;
}, oe = {
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
}, S = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = S(n, t);
		if (e) return e;
	}
	return null;
}, se = (e, t) => {
	let n = t.dataRole ? S(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, ce = (e, t, n) => {
	let { parent: r, key: i } = se(e, t);
	(oe[t.action] || x)(r, i, n);
}, C = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = C(n, t);
		if (e) return e;
	}
	return null;
}, w = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? C(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, T = {
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
}, E = {
	applyTemplate: _,
	fromCollection: y
}, D = (e, t, n) => e?.sourcePath === null ? null : w(t, e.sourcePath), O = (e, t, n) => {
	let r = (t?.spec ?? T)[e.templateKey], i = D(e, t, n), a = i === null ? r : E[e.func](i, r);
	console.log("runSingleInstruction ----: ", a, e.func), ce(t, e.destinationPath, a);
}, k = (e, t, n, r) => {
	e.forEach((e) => {
		console.log("instruction ----: ", e?.sourcePath, e?.templateKey), O(e, t, n, r);
	});
}, A = (e) => Array.isArray(e) ? e : [e], j = (e, t, n) => {
	e[t] = n;
}, M = {
	set: j,
	push: (e, t, n) => {
		e[t].push(...A(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...A(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(A(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(A(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, N = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = N(n, t);
		if (e) return e;
	}
	return null;
}, P = (e, t) => {
	let n = t.dataRole ? N(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, F = (e, t, n) => {
	let { parent: r, key: i } = P(e, t);
	(M[t.action] || j)(r, i, n);
}, I = {
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
}, L = {
	applyTemplate: c,
	fromCollection: u,
	twoDimensional: f
}, R = (e, t, n, r) => {
	let i = L[e.func](t.data.columns, t.data.data, I);
	F(t, e.destinationPath, i);
}, z = (e, t, n, r) => {
	e.forEach((e) => {
		R(e, t, n, r);
	});
}, B = (e, t, n) => {
	let r = !(!e || typeof e != "object" || Array.isArray(e)), i = `guards/base: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, V = (e, t, n) => {
	let r = !(!e || typeof e != "object" || Array.isArray(e)), i = `guards/options: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, H = (e, t, n) => {
	let r = typeof e == "boolean", i = `guards/showLog: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, le = (e, t, n) => {
	let r = Array.isArray(e), i = `guards/returnLog: ${r ? "passed" : "failed"}`;
	return r ? e.push(i) : Array.isArray(n) && n.push(i), t && console.log(i), r;
}, U = ({ options: e, base: t, showLog: n, returnLog: r }) => ({
	base: B(t, n, r),
	options: V(e, n, r),
	showLog: H(n, n, r),
	returnLog: le(r, n, r)
}), W = [
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
], ue = [
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
], G = (e, t) => !e || typeof e != "object" ? !1 : e.attributes?.["data-role"] === t || Array.isArray(e.children) && e.children.some((e) => G(e, t)), K = (e, t) => e.filter(({ destinationPath: e }) => G(t, e?.dataRole)), q = ({ options: e = {}, base: t, showLog: n = !1, returnLog: r = [] } = {}) => {
	let i = U({
		options: e,
		base: t,
		showLog: n,
		returnLog: r
	});
	if (!Object.values(i).every(Boolean)) return t;
	let a = e, o = t, s = n, c = r;
	return (a.showSerial || a.serial) && k(K(W, o), { base: o }, s, c), (a.showOptions || a.options) && k(K(ue, o), { base: o }, s, c), a.showSearch, o;
}, J = {
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
}, de = {
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
}, fe = [{
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
}], pe = [{
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
}], Y = ({ data: e, columns: t, options: n, showLog: r }) => {
	let i = r, a = structuredClone(de), o = {
		data: {
			columns: t,
			data: e
		},
		base: a,
		spec: J,
		...n
	};
	return k(fe, o, i), z(pe, o), q({
		options: n,
		base: a
	}), a;
}, me = {
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
}, he = [
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
], ge = [{
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
}], X = ({ data: e, columns: t, options: n }) => {
	let r = structuredClone(me), i = {
		data: {
			columns: t,
			data: e
		},
		base: r,
		spec: J,
		...n
	};
	return k(he, i), z(ge, i), q({
		options: n,
		base: r,
		showLog: !1,
		returnLog: []
	}), r;
}, _e = {
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
}, ve = [{
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
}], Z = ({ data: e, columns: t, options: n, showLog: r }) => {
	let i = r, a = structuredClone(_e);
	return k(ve, {
		data: {
			columns: t,
			data: e
		},
		base: a,
		spec: J,
		...n
	}, i), q({
		options: n,
		base: a
	}), a;
}, ye = {
	tagName: "tbody",
	attributes: { "data-role": "table-body" },
	children: []
}, be = [{
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
}], Q = ({ data: e, columns: t, options: n }) => {
	let r = structuredClone(ye);
	return z(be, {
		data: {
			columns: t,
			data: e
		},
		base: r,
		spec: J,
		...n
	}), q({
		options: n,
		base: r
	}), r;
}, xe = {
	tagName: "tfoot",
	attributes: { "data-role": "table-footer" },
	children: [{
		tagName: "tr",
		attributes: { "data-role": "table-footer-row" },
		children: []
	}]
}, Se = [{
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
}], $ = ({ data: e, columns: t, options: n }) => {
	let r = structuredClone(xe);
	return k(Se, {
		data: {
			columns: t,
			data: e
		},
		base: r,
		spec: J,
		...n
	}), console.log("options : ", n), q({
		options: n,
		base: r,
		showLog: !1,
		returnLog: []
	}), r;
}, Ce = {
	simple: Y,
	withFooter: X,
	bodyOnly: Q,
	footerOnly: $,
	headerOnly: Z
};
export { Q as bodyOnly, Ce as default, $ as footerOnly, Z as headerOnly, Y as simple, X as withFooter };
