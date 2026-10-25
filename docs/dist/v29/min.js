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
}, ne = {
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
}, h = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = h(n, t);
		if (e) return e;
	}
	return null;
}, re = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? h(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, ie = (e, t) => {
	let n = t.dataRole ? h(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, g = (e, t, n) => {
	let { parent: r, key: i } = ie(e, t);
	(ne[t.action] || m)(r, i, n);
}, _ = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = _(n, t);
		if (e) return e;
	}
	return null;
}, v = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? _(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, y = (e, t, n) => {
	let r = !!(e.sourcePath?.fileName && Array.isArray(e.sourcePath?.filePath)), i = `structure/sourcePath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, b = (e, t, n) => {
	let r = !!(e.destinationPath?.fileName && Array.isArray(e.destinationPath?.filePath)), i = `structure/destinationPath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, ae = (e, t, n) => {
	let r = e.templateKey === void 0 || typeof e.templateKey == "string" && e.templateKey.length > 0, i = `structure/templateKey: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, oe = (e, t, n) => {
	let r = typeof e.func == "string" && e.func.length > 0, i = `structure/func: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, se = (e, t, n) => [
	y(e, t, n),
	b(e, t, n),
	ae(e, t, n),
	oe(e, t, n)
].every(Boolean), ce = (e, t, n, r) => {
	let i = typeof t[e.func] == "function", a = `references/func (${e.func}): ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, le = (e, t, n, r) => {
	let i = e.templateKey === void 0 || Object.hasOwn(t, e.templateKey), a = `references/templateKey${e.templateKey === void 0 ? " (not used)" : ` (${e.templateKey})`}: ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, ue = (e, t, n, r, i) => {
	let a = ce(e, t, r, i), o = le(e, n, r, i);
	return a && o;
}, x = (e, t, n, r, i) => se(e, r, i) ? ue(e, t, n, r, i) : !1, S = {
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
}, C = {
	applyTemplate: c,
	fromCollection: u
}, de = (e, t, n, r) => {
	if (!x(e, C, S, n, r)) return;
	let i = n, a = S, o = e.templateKey, s = a[o];
	i && console.log("singleInstruction ; ", o, s);
	let c = v(t, e.sourcePath), l = C[e.func](c, s);
	g(t, e.destinationPath, l);
}, fe = (e, t, n, r) => {
	e.forEach((e) => {
		de(e, t, n, r);
	});
}, w = {
	applyTemplate: c,
	fromCollection: u,
	twoDimensional: f
}, pe = (e, t, n, r) => {
	if (!x(e, w, S, n, r)) return;
	let i = w[e.func](t.data.columns, t.data.data, S);
	g(t, e.destinationPath, i);
}, me = (e, t, n, r) => {
	e.forEach((e) => {
		pe(e, t, n, r);
	});
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
}, he = {
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
}, ge = [{
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
}], _e = [{
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
}], ve = [
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
], ye = [{
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
}], E = (e) => Array.isArray(e) ? e : [e], D = (e, t, n) => {
	e[t] = n;
}, O = {
	set: D,
	push: (e, t, n) => {
		e[t].push(...E(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...E(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(E(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(E(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, k = (e, t) => {
	let n = t.dataRole ? h(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, A = (e, t, n) => {
	let { parent: r, key: i } = k(e, t);
	(O[t.action] || D)(r, i, n);
}, j = (e, t, n) => {
	let r = !!(e.sourcePath?.fileName && Array.isArray(e.sourcePath?.filePath)), i = `structure/sourcePath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, M = (e, t, n) => {
	let r = !!(e.destinationPath?.fileName && Array.isArray(e.destinationPath?.filePath)), i = `structure/destinationPath: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, N = (e, t, n) => {
	let r = e.templateKey === void 0 || typeof e.templateKey == "string" && e.templateKey.length > 0, i = `structure/templateKey: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, P = (e, t, n) => {
	let r = typeof e.func == "string" && e.func.length > 0, i = `structure/func: ${r ? "passed" : "failed"}`;
	return n.push(i), t && console.log(i), r;
}, be = (e, t, n) => [
	j(e, t, n),
	M(e, t, n),
	N(e, t, n),
	P(e, t, n)
].every(Boolean), xe = (e, t, n, r) => {
	let i = typeof t[e.func] == "function", a = `references/func (${e.func}): ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, Se = (e, t, n, r) => {
	let i = e.templateKey === void 0 || Object.hasOwn(t, e.templateKey), a = `references/templateKey${e.templateKey === void 0 ? " (not used)" : ` (${e.templateKey})`}: ${i ? "passed" : "failed"}`;
	return r.push(a), n && console.log(a), i;
}, Ce = (e, t, n, r, i) => {
	let a = xe(e, t, r, i), o = Se(e, n, r, i);
	return a && o;
}, F = (e, t, n, r, i) => be(e, r, i) ? Ce(e, t, n, r, i) : !1, we = (e, t, n, r, i, a) => {
	if (!F(e, n, r, i, a)) return;
	let o = i, s = r, c = e.templateKey, l = s[c];
	o && console.log("singleInstruction ; ", c, l);
	let u = re(t, e.sourcePath), d = n[e.func](u, l);
	A(t, e.destinationPath, d);
}, I = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		we(e, t, n, r, i, a);
	});
}, L = { applyTemplate: c }, Te = (e = {}, t = {}, n = !1, r = []) => {
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
		spec: T
	};
	I(ve, o, L, T, n, r);
	let s = h(i, "table-footer-row");
	return s && Array.isArray(s.children) && s.children.length > 0 && I(ye, o, L, T, n, r), i;
}, Ee = [
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
], De = [{
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
}], R = { applyTemplate: c }, Oe = (e = {}, t = {}, n = !1, r = []) => {
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
		spec: T
	};
	I(Ee, o, R, T, n, r);
	let s = h(i, "table-footer-row");
	return s && Array.isArray(s.children) && s.children.length > 0 && I(De, o, R, T, n, r), i;
}, z = ({ inOptions: e = {}, inBase: t, showLog: n = !1, returnLog: r = [] }) => {
	let i = e, a = t;
	return console.log(i), (i.showSerial || i.serial) && Te(a, i.serial || {}, n, r), (i.showOptions || i.options) && Oe(a, i.options || {}, n, r), i.showSearch, a;
}, B = (e = {}, t = !1, n = []) => {
	let r = e, i = r.columns || [], a = r.data || [], o = r.options, s = structuredClone(he), c = {
		data: {
			columns: i,
			data: a
		},
		base: s,
		spec: T,
		...o
	};
	return console.log(" localOptions ", o, c), fe(ge, c, t, n), me(_e, c, t, n), z({
		inOptions: o,
		inBase: s
	}), s;
}, V = {
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
}, ke = [{
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
	base: V,
	spec: T
}, Ae = { fromCollection: u }, U = (e, t = !1, n = []) => (H.data = e, I(ke, H, Ae, T, t, n), V), W = { children: [] }, je = [{
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
}], Me = (e, t, n, r, i, a) => {
	if (!F(e, n, r, i, a)) return;
	let o = n[e.func](t.data.columns, t.data.data, r);
	A(t, e.destinationPath, o);
}, G = (e, t, n, r, i, a) => {
	e.forEach((e) => {
		Me(e, t, n, r, i, a);
	});
}, K = {
	data: {},
	base: W,
	spec: T
}, Ne = { twoDimensional: f }, q = (e, t = !1, n = []) => (K.data = e, G(je, K, Ne, T, t, n), W.children), Pe = {
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
], J = [{
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
		spec: T
	};
	return I(Fe, c, Y, T, t, n), G(J, c, Y, T, t, n), z({
		inOptions: o,
		inBase: s
	}), s;
}, Z = { children: [] }, Ie = [{
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
	spec: T
}, Le = {
	fromCollection: u,
	twoDimensional: f
}, $ = (e, t = !1, n = []) => (Q.data = e, I(Ie, Q, Le, T, t, n), Z?.children), Re = {
	simple: B,
	headerOnly: U,
	bodyOnly: q,
	withFooter: X,
	footerOnly: $
};
//#endregion
export { q as bodyOnly, Re as default, $ as footerOnly, U as headerOnly, B as simple, X as withFooter };
