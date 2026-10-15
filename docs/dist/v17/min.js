//#region node_modules/json-transformer-funcs-primitive/src/v7/forAttributes/index.js
var e = (e) => typeof e == "object" && !!e && !Array.isArray(e), t = (t, n) => {
	if (!e(t)) return;
	let r = {};
	for (let [e, i] of Object.entries(t)) r[e] = o(i, n);
	return r;
}, n = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => o(t, e));
}, r = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, i = (e, t) => r(e, t), a = (e, t, n) => {
	if (n && console.log("inTemplate : ", e), n && console.log("inElement : ", t), e == null) throw TypeError("inTemplate is required");
	if (typeof e != "object" && typeof e != "string") throw TypeError("inTemplate must be an object or string");
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("inElement must be an object");
	return !0;
}, o = (e, o, s) => {
	let c = e, l = o;
	a(c, l, s);
	let u = structuredClone(l);
	return typeof u == "string" ? r(u, c) : (typeof u != "object" || !u || ("textContent" in u && (u.textContent = i(u?.textContent, c)), "attributes" in u && (u.attributes = t(u?.attributes, c)), "children" in u && (u.children = n(u?.children, c))), u);
}, s = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, c = (e, t) => {
	let n = e, r = t;
	return s(n, r), n.map((e) => o(e, r));
}, l = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), u = (e, t, n) => {
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
	return o(e, n);
}), f = (e, t, n) => {
	u(e, t, n);
	let r = e, i = t, a = n, s = a[r[0]?.template?.body?.tr || "buildBodyTr"];
	return i.map((e) => {
		let t = o(e, s);
		return t.children = d(l(r, e), a), t;
	});
}, p = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = p(n, t);
		if (e) return e;
	}
	return null;
}, m = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? p(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, h = {
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
}, g = {
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
}, _ = [{
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
}], v = [{
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
}], y = (e) => Array.isArray(e) ? e : [e], b = {
	set: (e, t, n) => {
		e[t] = n;
	},
	push: (e, t, n) => {
		e[t].push(...y(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...y(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(y(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(y(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, x = (e, t, n) => {
	let r = t.dataRole ? p(e[t.fileName], t.dataRole) : e[t.fileName], i = [...t.filePath ?? []], a = i.pop(), o = i.reduce((e, t) => e[t], r);
	(b[t.action] || b.set)(o, a, n);
}, S = {
	data: {},
	base: g,
	spec: h
}, C = {
	fromCollection: c,
	twoDimensional: f
}, w = (e) => {
	e.forEach((e) => {
		let t = m(S, e.sourcePath);
		if (t) {
			let n = C[e.func](t, h[e.templateKey]);
			x(S, e.destinationPath, n);
		} else console.log("   !instruction : ", e), console.log("   !source : ", t);
	});
}, T = (e) => {
	e.forEach((e) => {
		let t = C[e.func](S.data.columns, S.data.data, h);
		x(S, e.destinationPath, t);
	});
}, E = (e) => (S.data = e, w(_), T(v), g);
//#endregion
export { E as simple };
