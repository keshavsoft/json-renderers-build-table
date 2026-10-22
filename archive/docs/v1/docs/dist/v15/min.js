//#region node_modules/json-transformer-funcs/src/v19/applyTemplate/forAttributes/index.js
var e = (e) => typeof e == "object" && !!e && !Array.isArray(e), t = (t, n) => {
	if (!e(t)) return;
	let r = {};
	for (let [e, i] of Object.entries(t)) r[e] = a(i, n);
	return r;
}, n = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => a(e, t));
}, r = (e, t) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, i = (e, t) => r(e, t), a = (e, a) => {
	let o = structuredClone(e);
	return typeof o == "string" ? r(o, a) : (typeof o != "object" || !o || ("textContent" in o && (o.textContent = i(o?.textContent, a)), "attributes" in o && (o.attributes = t(o?.attributes, a)), "children" in o && (o.children = n(o?.children, a))), o);
}, o = (e, t) => {
	let n = e, r = t;
	return n.map((e) => a(r, e));
}, s = (e, t, n) => {
	let r = n, i = t, o = [];
	return r.forEach((t) => {
		let n = e[t?.template?.bodyCell];
		if (n) {
			t.rowData = i[t.columnName];
			let e = a(n, t);
			o.push(e);
		}
	}), o;
}, c = (e, t, n) => {
	e.forEach((e, r) => {
		let i = t?.data[r];
		e.children = s(n, i, t?.columns);
	});
}, l = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = l(n, t);
		if (e) return e;
	}
	return null;
}, u = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? l(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, d = {
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
	}
}, f = {
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
}, p = [
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
		narration: "Build the table header row from the column metadata.",
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
		narration: "Build the table footer row from the column metadata.",
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
], m = [{
	narration: "Create one table row for each record and place it into the table body container.",
	destinationPath: {
		fileName: "base",
		dataRole: "table-body",
		filePath: ["children"]
	},
	sourcePath: {
		fileName: "data",
		filePath: ["data"]
	},
	templateKey: "buildBodyTr",
	func: "fromCollection"
}], h = [
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
	},
	{
		narration: "Prepend an empty cell into the table footer row.",
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
		templateKey: "buildBodyCell",
		func: "applyTemplate"
	}
], g = [
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
		templateKey: "buttonCell",
		func: "applyTemplate"
	},
	{
		narration: "Append the save button cell into the table footer row.",
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
		templateKey: "buttonCell",
		func: "applyTemplate"
	}
], _ = (e) => Array.isArray(e) ? e : [e], v = {
	set: (e, t, n) => {
		e[t] = n;
	},
	push: (e, t, n) => {
		e[t].push(..._(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(..._(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(_(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(_(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, y = ({ inRegistry: e, inPath: t, inValue: n }) => {
	let r = e, i = t, a = n, o = i.dataRole ? l(r[i.fileName], i.dataRole) : r[i.fileName];
	if (!o) return;
	let s = [...i.filePath ?? []], c = s.pop(), u = s.reduce((e, t) => e?.[t], o);
	u && (v[i.action] || v.set)(u, c, a);
}, ee = {
	fromCollection: o,
	tableBody: s,
	buildBody: c,
	applyTemplate: (e, t) => a(t, e)
}, b = ({ inInstructions: e, inRegistry: t }) => {
	let n = e, r = t;
	n.forEach((e) => {
		let t = u(r, e.sourcePath);
		if (t) {
			let n = ee[e.func](t, r.spec[e.templateKey]);
			y({
				inRegistry: r,
				inPath: e.destinationPath,
				inValue: n
			});
		}
	});
}, x = ({ inConfig: e }) => {
	let t = e, n = structuredClone(f), r = structuredClone(d), i = t?.options?.showFooter !== !1 && t?.options?.footer !== !1 && t?.showFooter !== !1 && t?.footer !== !1;
	i || (n.children = n.children.filter((e) => e.tagName !== "tfoot"));
	let a = (t?.columns || []).map((e) => {
		let t = structuredClone(e);
		return t.template = {
			bodyCell: "buildBodyCell",
			...t.template || {}
		}, t;
	}), o = !!(t?.serial || t?.options?.showSerial), s = t?.serial || (o ? {
		col: { width: "50px" },
		header: { columnName: "#" },
		body: {},
		footer: {}
	} : null), u = {
		...t,
		columns: a,
		...s ? { serial: s } : {}
	}, _ = {
		data: u,
		base: n,
		spec: r
	};
	b({
		inInstructions: m,
		inRegistry: _
	}), b({
		inInstructions: i ? p : p.filter((e) => e.templateKey !== "buildFooter"),
		inRegistry: _
	});
	let v = l(n, "table-body");
	return v && Array.isArray(v.children) && c(v.children, u, r), s && b({
		inInstructions: i ? h : h.filter((e) => e.destinationPath?.dataRole !== "table-footer-row"),
		inRegistry: _
	}), t?.options && typeof t.options == "object" && t.options.header && b({
		inInstructions: i ? g : g.filter((e) => e.destinationPath?.dataRole !== "table-footer-row"),
		inRegistry: _
	}), n;
}, S = (e) => x({ inConfig: e && typeof e == "object" && "inConfig" in e ? e.inConfig : e }), C = {
	version: "1.15.0",
	name: "json-renderers-build-table"
}, w = ({ inDefinition: e } = {}) => {
	let t = e;
	if (typeof globalThis > "u" || !t) return;
	globalThis.ks ??= {};
	let n = typeof t == "function" ? t : t.render, r = typeof t == "object" ? t.buildSpec : void 0, i = {
		meta: C,
		renderToDom: n,
		render: n,
		...r ? { buildSpec: r } : {},
		...typeof t == "object" ? t : {}
	};
	globalThis.ks.jsonRenderersBuildTable = i, globalThis.ks.jsonRenderersBuild ??= i;
}, T = (e) => Array.isArray(e) ? e : [e], E = {
	set: (e, t, n) => {
		e[t] = n;
	},
	push: (e, t, n) => {
		e[t].push(...T(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...T(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(T(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(T(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, D = ({ inRegistry: e, inPath: t, inValue: n }) => {
	let r = e, i = t, a = n, o = i.dataRole ? l(r[i.fileName], i.dataRole) : r[i.fileName];
	if (!o) return;
	let s = [...i.filePath ?? []], c = s.pop(), u = s.reduce((e, t) => e?.[t], o);
	u && (E[i.action] || E.set)(u, c, a);
}, te = {
	fromCollection: o,
	tableBody: s,
	buildBody: c,
	applyTemplate: (e, t) => a(t, e)
}, O = ({ inInstructions: e, inRegistry: t }) => {
	let n = e, r = t;
	n.forEach((e) => {
		let t = u(r, e.sourcePath);
		if (t) {
			let n = te[e.func](t, r.spec[e.templateKey]);
			D({
				inRegistry: r,
				inPath: e.destinationPath,
				inValue: n
			});
		}
	});
}, ne = {
	tagName: "table",
	attributes: { class: "table table-hover table-striped align-middle border mb-0" },
	children: [{
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
	}, {
		tagName: "tbody",
		attributes: { "data-role": "table-body" },
		children: []
	}]
}, re = [{
	narration: "Build the table header row from the column metadata.",
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
}, {
	narration: "Create one table row for each record and place it into the table body container.",
	destinationPath: {
		fileName: "base",
		dataRole: "table-body",
		filePath: ["children"]
	},
	sourcePath: {
		fileName: "data",
		filePath: ["data"]
	},
	templateKey: "buildBodyTr",
	func: "fromCollection"
}], ie = ({ inColumns: e = [], inData: t = [] } = {}) => {
	let n = e, r = t, i = structuredClone(ne), a = structuredClone(d), o = {
		columns: n.map((e) => {
			let t = structuredClone(e);
			return t.template = {
				bodyCell: "buildBodyCell",
				...t.template || {}
			}, t;
		}),
		data: r
	};
	O({
		inInstructions: re,
		inRegistry: {
			data: o,
			base: i,
			spec: a
		}
	});
	let s = l(i, "table-body");
	return s && Array.isArray(s.children) && c(s.children, o, a), i;
}, k = (e = {}) => {
	let t = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return ie({
		inColumns: t.columns || [],
		inData: t.data || []
	});
}, A = {
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
}, j = [
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
		narration: "Build the table header row from the column metadata.",
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
		narration: "Create one table row for each record and place it into the table body container.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			filePath: ["data"]
		},
		templateKey: "buildBodyTr",
		func: "fromCollection"
	}
], M = ({ inColumns: e = [], inData: t = [] } = {}) => {
	let n = e, r = t, i = structuredClone(A), a = structuredClone(d), o = {
		columns: n.map((e) => {
			let t = structuredClone(e);
			return t.template = {
				bodyCell: "buildBodyCell",
				...t.template || {}
			}, t;
		}),
		data: r
	};
	O({
		inInstructions: j,
		inRegistry: {
			data: o,
			base: i,
			spec: a
		}
	});
	let s = l(i, "table-body");
	return s && Array.isArray(s.children) && c(s.children, o, a), i;
}, N = (e = {}) => {
	let t = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return M({
		inColumns: t.columns || [],
		inData: t.data || []
	});
}, P = {
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
}, F = [
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
		narration: "Build the table header row from the column metadata.",
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
		narration: "Create one table row for each record and place it into the table body container.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			filePath: ["data"]
		},
		templateKey: "buildBodyTr",
		func: "fromCollection"
	},
	{
		narration: "Build the table footer row from the column metadata.",
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
], I = ({ inColumns: e = [], inData: t = [] } = {}) => {
	let n = e, r = t, i = structuredClone(P), a = structuredClone(d), o = {
		columns: n.map((e) => {
			let t = structuredClone(e);
			return t.template = {
				bodyCell: "buildBodyCell",
				...t.template || {}
			}, t;
		}),
		data: r
	};
	O({
		inInstructions: F,
		inRegistry: {
			data: o,
			base: i,
			spec: a
		}
	});
	let s = l(i, "table-body");
	return s && Array.isArray(s.children) && c(s.children, o, a), i;
}, L = (e = {}) => {
	let t = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return I({
		inColumns: t.columns || [],
		inData: t.data || []
	});
}, R = {
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
}, z = [
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
		narration: "Build the table header row from the column metadata.",
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
		narration: "Create one table row for each record and place it into the table body container.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			filePath: ["data"]
		},
		templateKey: "buildBodyTr",
		func: "fromCollection"
	},
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
], B = ({ inColumns: e = [], inData: t = [], inSerial: n = {} } = {}) => {
	let r = e, i = t, a = {
		col: { width: "50px" },
		header: { columnName: "#" },
		body: {},
		...n
	}, o = structuredClone(R), s = structuredClone(d), u = {
		columns: r.map((e) => {
			let t = structuredClone(e);
			return t.template = {
				bodyCell: "buildBodyCell",
				...t.template || {}
			}, t;
		}),
		data: i,
		serial: a
	};
	O({
		inInstructions: z,
		inRegistry: {
			data: u,
			base: o,
			spec: s
		}
	});
	let f = l(o, "table-body");
	return f && Array.isArray(f.children) && c(f.children, u, s), o;
}, V = (e = {}) => {
	let t = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return B({
		inColumns: t.columns || [],
		inData: t.data || [],
		inSerial: t.serial || {}
	});
}, H = {
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
}, U = [
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
		narration: "Build the table header row from the column metadata.",
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
		narration: "Create one table row for each record and place it into the table body container.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			filePath: ["data"]
		},
		templateKey: "buildBodyTr",
		func: "fromCollection"
	},
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
		templateKey: "buttonCell",
		func: "applyTemplate"
	}
], W = ({ inColumns: e = [], inData: t = [], inOptions: n = {} } = {}) => {
	let r = e, i = t, a = {
		col: { width: "100px" },
		header: { columnName: "options" },
		body: { columnName: "show" },
		...n
	}, o = structuredClone(H), s = structuredClone(d), u = {
		columns: r.map((e) => {
			let t = structuredClone(e);
			return t.template = {
				bodyCell: "buildBodyCell",
				...t.template || {}
			}, t;
		}),
		data: i,
		options: a
	};
	O({
		inInstructions: U,
		inRegistry: {
			data: u,
			base: o,
			spec: s
		}
	});
	let f = l(o, "table-body");
	return f && Array.isArray(f.children) && c(f.children, u, s), o;
}, G = (e = {}) => {
	let t = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return W({
		inColumns: t.columns || [],
		inData: t.data || [],
		inOptions: t.options || {}
	});
}, K = {
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
}, q = [
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
		narration: "Build the table header row from the column metadata.",
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
		narration: "Create one table row for each record and place it into the table body container.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			filePath: ["data"]
		},
		templateKey: "buildBodyTr",
		func: "fromCollection"
	}
], J = ({ inColumns: e = [], inData: t = [] } = {}) => {
	let n = e, r = t, i = structuredClone(K), a = structuredClone(d), o = {
		columns: n.map((e) => {
			let t = structuredClone(e);
			return t.template = { bodyCell: t.template?.bodyCell || "buttonCell" }, t;
		}),
		data: r
	};
	O({
		inInstructions: q,
		inRegistry: {
			data: o,
			base: i,
			spec: a
		}
	});
	let s = l(i, "table-body");
	return s && Array.isArray(s.children) && c(s.children, o, a), i;
}, Y = (e = {}) => {
	let t = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return J({
		inColumns: t.columns || [],
		inData: t.data || []
	});
}, ae = {
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
}, oe = [
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
		narration: "Build the table header row from the column metadata.",
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
		narration: "Create one table row for each record and place it into the table body container.",
		destinationPath: {
			fileName: "base",
			dataRole: "table-body",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			filePath: ["data"]
		},
		templateKey: "buildBodyTr",
		func: "fromCollection"
	},
	{
		narration: "Build the table footer row from the column metadata.",
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
	},
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
	},
	{
		narration: "Prepend an empty cell into the table footer row.",
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
		templateKey: "buildBodyCell",
		func: "applyTemplate"
	},
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
		templateKey: "buttonCell",
		func: "applyTemplate"
	},
	{
		narration: "Append the save button cell into the table footer row.",
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
		templateKey: "buttonCell",
		func: "applyTemplate"
	}
], se = ({ inColumns: e = [], inData: t = [], inSerial: n = {}, inOptions: r = {} } = {}) => {
	let i = e, a = t, o = {
		col: { width: "50px" },
		header: { columnName: "#" },
		body: {},
		footer: {},
		...n
	}, s = {
		col: { width: "100px" },
		header: { columnName: "options" },
		body: { columnName: "show" },
		footer: { columnName: "save" },
		...r
	}, u = structuredClone(ae), f = structuredClone(d), p = {
		columns: i.map((e) => {
			let t = structuredClone(e);
			return t.template = {
				bodyCell: "buildBodyCell",
				...t.template || {}
			}, t;
		}),
		data: a,
		serial: o,
		options: s
	};
	O({
		inInstructions: oe,
		inRegistry: {
			data: p,
			base: u,
			spec: f
		}
	});
	let m = l(u, "table-body");
	return m && Array.isArray(m.children) && c(m.children, p, f), u;
}, X = (e = {}) => {
	let t = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return se({
		inColumns: t.columns || [],
		inData: t.data || [],
		inSerial: t.serial || {},
		inOptions: t.options || {}
	});
}, ce = {
	tagName: "table",
	attributes: { class: "table table-hover table-striped align-middle border mb-0" },
	children: [{
		tagName: "tbody",
		attributes: { "data-role": "table-body" },
		children: []
	}]
}, Z = [{
	narration: "Create one table row for each record and place it into the table body container.",
	destinationPath: {
		fileName: "base",
		dataRole: "table-body",
		filePath: ["children"]
	},
	sourcePath: {
		fileName: "data",
		filePath: ["data"]
	},
	templateKey: "buildBodyTr",
	func: "fromCollection"
}], le = ({ inColumns: e = [], inData: t = [] } = {}) => {
	let n = e, r = t, i = structuredClone(ce), a = structuredClone(d), o = {
		columns: n.map((e) => {
			let t = structuredClone(e);
			return t.template = {
				bodyCell: "buildBodyCell",
				...t.template || {}
			}, t;
		}),
		data: r
	};
	O({
		inInstructions: Z,
		inRegistry: {
			data: o,
			base: i,
			spec: a
		}
	});
	let s = l(i, "table-body");
	return s && Array.isArray(s.children) && c(s.children, o, a), i;
}, Q = (e = {}) => {
	let t = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e;
	return le({
		inColumns: t.columns || [],
		inData: t.data || []
	});
}, $ = (e = {}) => {
	let t = e && typeof e == "object" && "inConfig" in e ? e.inConfig : e, n = t.columns || [], r = t.data || [], i = t.options || {}, a = t.serial, o = t.targetHtmlId, s = S({ inConfig: {
		columns: n,
		data: r,
		options: i,
		serial: a
	} });
	if (o && typeof document < "u") {
		let e = document.getElementById(o);
		if (e) {
			let t = globalThis?.ks?.jsonToTag?.buildSpecElement;
			if (typeof t == "function") {
				let n = t(s);
				e.innerHTML = "", e.append(n);
			}
		}
	}
	return s;
};
w({ inDefinition: {
	render: $,
	renderToDom: $,
	buildSpec: S,
	spec: d,
	simpleTable: k,
	tableWithWidths: N,
	tableWithFooter: L,
	tableWithSerial: V,
	tableWithOptions: G,
	tableWithButtonCell: Y,
	tableFullGrid: X,
	tableHeadless: Q
} });
//#endregion
export { S as buildSpec, $ as default, $ as render, $ as renderToDom, k as simpleTable, d as spec, X as tableFullGrid, Q as tableHeadless, Y as tableWithButtonCell, L as tableWithFooter, G as tableWithOptions, V as tableWithSerial, N as tableWithWidths };
