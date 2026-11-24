// src/v2/registerGlobal/meta.js
var e = {
	version: "1.2.1",
	description: "Pre-cooked table event workflows, container delegation, and action dispatchers"
}, t = (t) => {
	typeof globalThis < "u" && t && (globalThis.ks ??= {}, globalThis.ks.domEvents ??= {}, globalThis.ks.domEvents.table ??= {}, globalThis.ks.domEvents.table = {
		meta: e,
		bindTableEvents: t
	});
}, n = (e) => {
	if (!e) return null;
	if (e.tagName === "tbody") return e;
	if (Array.isArray(e.children)) for (let t of e.children) {
		let e = n(t);
		if (e) return e;
	}
	return null;
}, r = ({ currentTbody: e, filteredRecords: t, columns: r, options: i = { serial: !0 } } = {}) => {
	if (!e) return;
	let a = globalThis.window?.ks || globalThis.ks, o = a?.jsonRenderers?.runInstructions?.render?.renderFunc, s = a?.jsonToTag?.buildSpecElement;
	if (typeof o == "function" && typeof s == "function") {
		let a = n(o({
			instructionMainKey: "table",
			instructionSubKey: i && i.options && typeof i.options == "object" ? "simple" : "bodyOnly",
			data: {
				data: t,
				columns: r
			},
			options: i
		}));
		if (a) {
			let t = s(a);
			t && e.replaceWith(t);
		}
	}
}, i = ({ input: e, rootElement: t, data: n = [], columns: i = [], options: a = { serial: !0 } } = {}) => {
	if (!e || !t) return;
	let o = (e.value || "").trim().toLowerCase(), s = o ? n.filter((e) => Object.values(e).some((e) => String(e ?? "").toLowerCase().includes(o))) : n, c = (e.closest("table") || t.querySelector("table"))?.querySelector("tbody");
	c && r({
		currentTbody: c,
		filteredRecords: s,
		columns: i,
		options: a
	});
}, a = ({ container: e, data: t, columns: n = [], options: r = { serial: !0 } } = {}) => {
	let a = typeof e == "string" ? document.getElementById(e) : e;
	if (!a) {
		console.warn("[dom-table-events-search] Container element not found:", e);
		return;
	}
	let o = t;
	a.addEventListener("input", (e) => {
		let t = e.target;
		t.matches("input[type='search'], input[name='search'], [data-role='table-search'], #tableSearch, .table-search-input") && i({
			input: t,
			rootElement: a,
			data: o,
			columns: n,
			options: r
		});
	});
}, o = a;
t(a);
export { a as bindTableEvents, o as default };
