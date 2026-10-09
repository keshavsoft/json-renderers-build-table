//#region src/v1/table/row/index.js
var e = (e) => e && typeof e == "object" && !Array.isArray(e) && typeof e.tagName == "string", t = (t) => e(t) && typeof structuredClone == "function" ? structuredClone(t) : t, n = ({ inValue: n, inCellTagName: r = "td", inAttributes: i = {} } = {}) => {
	let a = { tagName: r }, o = { ...i };
	return Object.keys(o).length > 0 && (a.attributes = o), e(n) ? (a.children = [t(n)], a) : (n !== void 0 && (a.attributes ??= {}, a.attributes.value = n, a.textContent = n), a);
}, r = ({ inValues: e = [], inCellTagName: t = "td", inCellAttributes: r = {} } = {}) => (Array.isArray(e) ? e : []).map((e) => n({
	inValue: e,
	inCellTagName: t,
	inAttributes: r
})), i = ({ inValues: e = [], inCellTagName: t = "td", inCellAttributes: n = {}, inRowOptions: i = {} } = {}) => {
	let a = i || {}, o = {
		tagName: "tr",
		children: r({
			inValues: e,
			inCellTagName: t,
			inCellAttributes: n
		})
	};
	return a.attributes && (o.attributes = { ...a.attributes }), Array.isArray(a.prependCells) && o.children.unshift(...r({
		inValues: a.prependCells,
		inCellTagName: t,
		inCellAttributes: n
	})), Array.isArray(a.appendCells) && o.children.push(...r({
		inValues: a.appendCells,
		inCellTagName: t,
		inCellAttributes: n
	})), o;
}, a = ({ inColumns: e = [] } = {}) => ({
	tagName: "thead",
	children: [i({
		inValues: e,
		inCellTagName: "th"
	})]
}), o = (e) => typeof e == "string" ? e : e?.key, s = ({ inRow: e, inColumns: t = [] } = {}) => Array.isArray(e) ? e : (Array.isArray(t) ? t : []).map((t) => e?.[o(t)]), c = ({ inOptions: e = {}, inRow: t, inIndex: n } = {}) => {
	let r = e?.row;
	return typeof r == "function" ? r({
		inRow: t,
		inIndex: n
	}) : r;
}, l = ({ inData: e = [], inColumns: t = [], inOptions: n = {} } = {}) => ({
	tagName: "tbody",
	children: (Array.isArray(e) ? e : []).map((e, r) => i({
		inValues: s({
			inRow: e,
			inColumns: t
		}),
		inCellTagName: "td",
		inRowOptions: c({
			inOptions: n,
			inRow: e,
			inIndex: r
		})
	}))
}), u = (e) => typeof e == "string" ? e : e?.key, d = ({ inRow: e, inColumns: t = [] } = {}) => Array.isArray(e) ? e : (Array.isArray(t) ? t : []).map((t) => e?.[u(t)]), f = ({ inOptions: e = {}, inRow: t, inIndex: n } = {}) => {
	let r = e?.footerRow ?? e?.row;
	return typeof r == "function" ? r({
		inRow: t,
		inIndex: n
	}) : r;
}, p = ({ inData: e = [], inColumns: t = [], inOptions: n = {} } = {}) => ({
	tagName: "tfoot",
	children: (Array.isArray(e) ? e : []).map((e, r) => i({
		inValues: d({
			inRow: e,
			inColumns: t
		}),
		inCellTagName: "td",
		inRowOptions: f({
			inOptions: n,
			inRow: e,
			inIndex: r
		})
	}))
}), m = ({ inColumns: e = [], inData: t = [], inFooterData: n = [], inOptions: r = {} } = {}) => {
	let i = {
		tagName: "table",
		attributes: { class: r?.table?.class || "table table-hover table-striped mb-0" },
		children: [a({ inColumns: e }), l({
			inData: t,
			inColumns: e,
			inOptions: r
		})]
	};
	return Array.isArray(n) && n.length > 0 && i.children.push(p({
		inData: n,
		inColumns: e,
		inOptions: r
	})), i;
}, h = {
	table: m,
	tableHead: a,
	tableBody: l,
	tableFoot: p
}, g = ({ type: e = "table", data: t = [], columns: n = [], footerData: r = [], options: i = {} } = {}) => {
	let a = h[e];
	if (typeof a != "function") throw Error(`Unknown table renderer type "${e}".`);
	return a({
		inColumns: n,
		inData: t,
		inFooterData: r,
		inOptions: i
	});
};
//#endregion
export { g as default, g as render, m as renderTable, l as renderTableBody, p as renderTableFoot, a as renderTableHead };
