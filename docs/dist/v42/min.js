var e = {
	simple: {
		base: {
			tagName: "div",
			attributes: { "data-role": "table-parent" },
			children: [{
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
			}]
		},
		single: [{
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
		}],
		double: [{
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
		}]
	},
	withFooter: {
		base: {
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
		},
		single: [
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
		],
		double: [{
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
		}]
	},
	bodyOnly: {
		base: {
			tagName: "tbody",
			attributes: { "data-role": "table-body" },
			children: []
		},
		single: [],
		double: [{
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
		}]
	},
	footerOnly: {
		base: {
			tagName: "tfoot",
			attributes: { "data-role": "table-footer" },
			children: [{
				tagName: "tr",
				attributes: { "data-role": "table-footer-row" },
				children: []
			}]
		},
		single: [{
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
		}],
		double: []
	},
	headerOnly: {
		base: {
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
		},
		single: [{
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
		}],
		double: []
	}
}, t = (e) => typeof e == "object" && !!e && !Array.isArray(e), n = (e, n) => {
	if (!t(e)) return;
	let r = {};
	for (let [t, i] of Object.entries(e)) r[t] = l(n, i);
	return r;
}, r = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => l(t, e));
}, i = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, a = (e, t) => i(e, t), o = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, s = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.0"
}, c = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: s,
		applyTemplate: e
	});
}, l = (e, t, s) => {
	let c = e, l = t;
	o(c, l, s);
	let u = structuredClone(l);
	return typeof u == "string" ? i(u, c) : (typeof u != "object" || !u || ("textContent" in u && (u.textContent = a(u?.textContent, c)), "attributes" in u && (u.attributes = n(u?.attributes, c)), "children" in u && (u.children = r(u?.children, c))), u);
};
c(l);
// ../json-instruction-single/node_modules/json-transformer-funcs-one-dimension/src/v6/guard/index.js
var u = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, ee = (e, t) => {
	let n = e, r = t;
	return u(n, r), n.map((e) => l(e, r));
}, d = (e) => Array.isArray(e) ? e : [e], f = (e, t, n) => {
	e[t] = n;
}, p = {
	set: f,
	push: (e, t, n) => {
		e[t].push(...d(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...d(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(d(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(d(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, m = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = m(n, t);
		if (e) return e;
	}
	return null;
}, te = (e, t) => {
	let n = t.dataRole ? m(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, h = (e, t, n, r) => {
	let { parent: i, key: a } = te(e, t);
	(p[t.action] || f)(i, a, n);
}, g = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = g(n, t);
		if (e) return e;
	}
	return null;
}, _ = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? g(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, v = {
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
	},
	tableSearch: {
		tagName: "div",
		attributes: { class: "row mb-3 justify-content-end" },
		children: [{
			tagName: "div",
			attributes: { class: "col-md-4" },
			children: [{
				tagName: "div",
				attributes: { class: "input-group" },
				children: [{
					tagName: "span",
					attributes: { class: "input-group-text bg-white" },
					children: [{
						tagName: "i",
						attributes: { class: "bi bi-search" },
						textContent: "🔍"
					}]
				}, {
					tagName: "input",
					attributes: {
						type: "text",
						id: "tableSearch",
						class: "form-control",
						placeholder: "Search table..."
					}
				}]
			}]
		}]
	}
}, ne = {
	applyTemplate: l,
	fromCollection: ee
}, y = (e, t, n) => e?.sourcePath === null ? null : _(t, e.sourcePath), re = (e, t, n) => {
	let r = t?.spec ?? v, i = e.templateKey, a = e?.func, o = r[i], s = y(e, t, n), c = a === null ? o : ne[e.func](s, o), l = s === null ? o : c;
	h(t, e.destinationPath, l);
}, b = (e, t, n, r) => {
	e.forEach((e) => {
		re(e, t, n, r);
	});
}, x = (e) => typeof e == "object" && !!e && !Array.isArray(e), S = (e, t) => {
	if (!x(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = k(t, i);
	return n;
}, C = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => k(t, e));
}, w = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, T = (e, t) => w(e, t), E = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, D = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.0"
}, O = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: D,
		applyTemplate: e
	});
}, k = (e, t, n) => {
	let r = e, i = t;
	E(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? w(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = T(a?.textContent, r)), "attributes" in a && (a.attributes = S(a?.attributes, r)), "children" in a && (a.children = C(a?.children, r))), a);
};
O(k);
// node_modules/json-transformer-funcs-one-dimension/src/v6/guard/index.js
var A = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, j = (e, t) => {
	let n = e, r = t;
	return A(n, r), n.map((e) => k(e, r));
}, M = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), N = (e, t, n) => {
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
}, P = (e, t) => e.map((e) => {
	let n = t[e.template?.body?.cell || e.template?.bodyCell || "buildBodyCell"];
	return k(e, n);
}), F = (e, t, n) => {
	N(e, t, n);
	let r = e, i = t, a = n, o = a[r[0]?.template?.body?.tr || "buildBodyTr"];
	return i.map((e) => {
		let t = k(e, o);
		return t.children = P(M(r, e), a), t;
	});
}, I = (e) => Array.isArray(e) ? e : [e], L = (e, t, n) => {
	e[t] = n;
}, R = {
	set: L,
	push: (e, t, n) => {
		e[t].push(...I(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...I(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(I(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(I(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, z = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = z(n, t);
		if (e) return e;
	}
	return null;
}, B = (e, t) => {
	let n = t.dataRole ? z(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []], i = r.pop();
	return {
		parent: r.reduce((e, t) => e[t], n),
		key: i
	};
}, V = (e, t, n) => {
	let { parent: r, key: i } = B(e, t);
	(R[t.action] || L)(r, i, n);
}, H = {
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
}, U = {
	applyTemplate: k,
	fromCollection: j,
	twoDimensional: F
}, W = (e, t, n, r) => {
	let i = U[e.func](t.data.columns, t.data.data, H);
	V(t, e.destinationPath, i);
}, G = (e, t, n, r) => {
	e.forEach((e) => {
		W(e, t, n, r);
	});
}, K = (e, t, n) => {
	let r = !(!e || typeof e != "object" || Array.isArray(e)), i = `guards/base: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, q = (e, t, n) => {
	let r = !(!e || typeof e != "object" || Array.isArray(e)), i = `guards/options: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, J = (e, t, n) => {
	let r = typeof e == "boolean", i = `guards/showLog: ${r ? "passed" : "failed"}`;
	return Array.isArray(n) && n.push(i), t && console.log(i), r;
}, Y = (e, t, n) => {
	let r = Array.isArray(e), i = `guards/returnLog: ${r ? "passed" : "failed"}`;
	return r ? e.push(i) : Array.isArray(n) && n.push(i), t && console.log(i), r;
}, X = ({ options: e, base: t, showLog: n, returnLog: r }) => ({
	base: K(t, n, r),
	options: q(e, n, r),
	showLog: J(n, n, r),
	returnLog: Y(r, n, r)
}), ie = [
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
], ae = [
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
], oe = [{
	narration: "Prepend the search row to top of the table.",
	destinationPath: {
		fileName: "base",
		dataRole: "table-parent",
		filePath: ["children"],
		action: "unshift"
	},
	sourcePath: null,
	templateKey: "tableSearch",
	func: null
}], Z = (e, t) => !e || typeof e != "object" ? !1 : e.attributes?.["data-role"] === t || Array.isArray(e.children) && e.children.some((e) => Z(e, t)), Q = (e, t) => e.filter(({ destinationPath: e }) => Z(t, e?.dataRole)), se = ({ options: e = {}, base: t, showLog: n = !1, returnLog: r = [] } = {}) => {
	let i = X({
		options: e,
		base: t,
		showLog: n,
		returnLog: r
	});
	if (!Object.values(i).every(Boolean)) return t;
	let a = e, o = t, s = n, c = r;
	return (a.showSerial || a.serial) && b(Q(ie, o), { base: o }, s, c), (a.showOptions || a.options) && b(Q(ae, o), { base: o }, s, c), a.showSearch && b(Q(oe, o), { base: o }, s, c), o;
}, $ = ({ type: t = "simple", data: n = [], columns: r = [], options: i = {}, showLog: a = !1 } = {}) => {
	let o = e[t];
	if (!o) throw Error(`Unknown table type: "${t}". Available types: ${Object.keys(e).join(", ")}`);
	let s = structuredClone(o.base), c = {
		data: {
			columns: r,
			data: n
		},
		base: s,
		...i
	};
	return o.single && o.single.length > 0 && b(o.single, c, a), o.double && o.double.length > 0 && G(o.double, c), se({
		options: i,
		base: s
	}), s;
};
export { $ as buildTable, $ as default, e as definitions };
