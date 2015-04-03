! function() {
    function e(e, t, n) {
        if (e.addEventListener) return e.addEventListener(t, n, !1), !0;
        if (e.attachEvent) {
            var o = e.attachEvent("on" + t, n);
            return o
        }
        e["on" + t] = n
    }

    function t() {
        e(window, "load", function() {
            n(), a()
        });
        var t = window.onerror;
        window.onerror = function(e, o) {
            "function" == typeof t && t.apply(window, arguments);
            var i = o.split("/").pop();
            ++d.ec, d.us = d.us ? d.us + "," + i : i, n()
        }, p.Ready(r)
    }

    function n() {
        0 != d.ec && "undefined" != typeof _msq && "undefined" != typeof _msq.push && (_msq.push(["trackJSError", {
            ec: d.ec,
            us: d.us
        }]), d.ec = 0, d.us = "")
    }

    function o(e) {
        var t = {
            t: 0,
            l: 0
        };
        if (e.offsetParent)
            for (; e.offsetParent;) t.t += e.offsetTop, t.l += e.offsetLeft, e = e.offsetParent;
        else e.x ? t.l += e.x : e.x && (t.t += e.y);
        return {
            x: t.l,
            y: t.t
        }
    }

    function i() {
        return {
            w: window.screen.width,
            h: window.screen.height
        }
    }

    function r() {
        y = (new Date).getTime();
        var t = document.getElementsByTagName("img");
        0 === t.length && (u = f);
        for (var n = 0, r = 0, a = function() {
                ++n, n === r && (u = (new Date).getTime())
            }, d = i(), c = t.length, s = 0; c > s; ++s)
            if ("undefined" != typeof t[s].complete && t[s].complete !== !0) {
                var l = o(t[s]);
                (0 != l.x || 0 != l.y) && l.x < d.w && l.y < d.h && (++r, e(t[s], "load", function() {
                    a()
                }), e(t[s], "error", function() {
                    a()
                }))
            }
        0 == r && (u = f)
    }

    function a() {
        var e = window.performance || window.webkitPerformance,
            e = e && e.timing;
        if (e) {
            var t = e.navigationStart;
            s = new Date - t, s = s > 0 ? s : 0, c = u - t, c = c > 0 ? c : s, c = c > 0 ? c : 0, l = f - t, m = y - t;
            var n = {
                fs: c,
                ua: m,
                ws: l,
                td: s
            };
            "undefined" != typeof _msq && "undefined" != typeof _msq.push && _msq.push(["trackPerformance", n])
        }
    }
    if ("undefined" == typeof _mi_ti && (_mi_ti = {}), "undefined" == typeof d) var d = {
        ec: 0,
        us: ""
    };
    var f = (new Date).getTime(),
        u = null,
        c = null,
        s = null,
        l = null,
        m = null,
        y = null,
        p = new function() {
            var e = [];
            return e.isReady = !1, e.isFunction = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }, e.Ready = function(t) {
                e.initReady(), e.isFunction(t) && (e.isReady ? t() : e.push(t))
            }, e.fireReady = function() {
                if (!e.isReady) {
                    e.isReady = !0;
                    for (var t = 0, n = e.length; n > t; t++) {
                        var o = e[t];
                        o()
                    }
                    e.length = 0
                }
            }, e.initReady = function() {
                document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
                    document.removeEventListener("DOMContentLoaded", arguments.callee, !1), e.fireReady()
                }, !1) : document.getElementById && (document.write('<script id="ie-domReady" defer=\'defer\'src="//:"></script>'), document.getElementById("ie-domReady").onreadystatechange = function() {
                    "complete" === this.readyState && (e.fireReady(), this.onreadystatechange = null, this.parentNode.removeChild(this))
                })
            }, e
        };
    t()
}(),
function() {
    function e(e) {
        var o = n.match(e);
        "[object Array]" == Object.prototype.toString.call(o) && "undefined" != typeof o[0] && (_STAT_HASHNAME = t + o[0])
    }
    var t = window.location.host;
    if ("buy.mi.com" == t || "store.mi.com" == t) {
        var n = window.location.pathname,
            o = /^\/([^\/]*)\/search_/,
            i = /^\/([^\/]*)\/([^\/]*)\/\d/,
            r = /^\/([^\/]*)\/([^\/]*)\//,
            a = /^\/([^\/]*)\/([^\/]*)\/([^\/]*)/;
        o.test(n) ? e(o) : i.test(n) ? e(r) : a.test(n) && e(a)
    }
}();