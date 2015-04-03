if ("undefined" == typeof XIAOMI || !XIAOMI) var XIAOMI = {};
XIAOMI.namespace = function() {
        var t, e, n, o = arguments,
            i = null;
        for (t = 0; t < o.length; t += 1)
            for (n = ("" + o[t]).split("."), i = XIAOMI, e = "XIAOMI" == n[0] ? 1 : 0; e < n.length; e += 1) i[n[e]] = i[n[e]] || {}, i = i[n[e]];
        return i
    }, XIAOMI.lang = XIAOMI.lang || {},
    function() {
        var t = XIAOMI.lang,
            e = Object.prototype,
            n = "[object Array]",
            o = "[object Function]",
            i = "[object Object]",
            r = [],
            a = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;",
                "`": "&#x60;"
            },
            s = ["toString", "valueOf"],
            c = {
                isArray: function(t) {
                    return e.toString.apply(t) === n
                },
                isBoolean: function(t) {
                    return "boolean" == typeof t
                },
                isFunction: function(t) {
                    return "function" == typeof t || e.toString.apply(t) === o
                },
                isNull: function(t) {
                    return null === t
                },
                isNumber: function(t) {
                    return "number" == typeof t && isFinite(t)
                },
                isObject: function(e) {
                    return e && ("object" == typeof e || t.isFunction(e)) || !1
                },
                isString: function(t) {
                    return "string" == typeof t
                },
                isUndefined: function(t) {
                    return "undefined" == typeof t
                },
                _IEEnumFix: -[1] ? function() {} : function(n, o) {
                    var i, r, a;
                    for (i = 0; i < s.length; i += 1) r = s[i], a = o[r], t.isFunction(a) && a != e[r] && (n[r] = a)
                },
                escapeHTML: function(t) {
                    return t.replace(/[&<>"'\/`]/g, function(t) {
                        return a[t]
                    })
                },
                extend: function(n, o, i) {
                    if (!o || !n) throw new Error("extend failed, please check that all dependencies are included.");
                    var r, a = function() {};
                    if (a.prototype = o.prototype, n.prototype = new a, n.prototype.constructor = n, n.superclass = o.prototype, o.prototype.constructor == e.constructor && (o.prototype.constructor = o), i) {
                        for (r in i) t.hasOwnProperty(i, r) && (n.prototype[r] = i[r]);
                        t._IEEnumFix(n.prototype, i)
                    }
                },
                augmentObject: function(e, n) {
                    if (!n || !e) throw new Error("Absorb failed, verify dependencies.");
                    var o, i, r = arguments,
                        a = r[2];
                    if (a && a !== !0)
                        for (o = 2; o < r.length; o += 1) e[r[o]] = n[r[o]];
                    else {
                        for (i in n) !a && i in e || (e[i] = n[i]);
                        t._IEEnumFix(e, n)
                    }
                    return e
                },
                augmentProto: function(e, n) {
                    if (!n || !e) throw new Error("Augment failed, verify dependencies.");
                    var o, i = [e.prototype, n.prototype];
                    for (o = 2; o < arguments.length; o += 1) i.push(arguments[o]);
                    return t.augmentObject.apply(this, i), e
                },
                dump: function(e, n) {
                    var o, i, r = [],
                        a = "{...}",
                        s = "f(){...}",
                        c = ", ",
                        u = " => ";
                    if (!t.isObject(e)) return e + "";
                    if (e instanceof Date || "nodeType" in e && "tagName" in e) return e;
                    if (t.isFunction(e)) return s;
                    if (n = t.isNumber(n) ? n : 3, t.isArray(e)) {
                        for (r.push("["), o = 0, i = e.length; i > o; o += 1) r.push(t.isObject(e[o]) ? n > 0 ? t.dump(e[o], n - 1) : a : e[o]), r.push(c);
                        r.length > 1 && r.pop(), r.push("]")
                    } else {
                        r.push("{");
                        for (o in e) t.hasOwnProperty(e, o) && (r.push(o + u), r.push(t.isObject(e[o]) ? n > 0 ? t.dump(e[o], n - 1) : a : e[o]), r.push(c));
                        r.length > 1 && r.pop(), r.push("}")
                    }
                    return r.join("")
                },
                substitute: function(e, n, o, r) {
                    for (var a, s, c, u, l, p, d, m, f, h = [], I = e.length, g = "dump", O = " ", v = "{", A = "}";
                        (a = e.lastIndexOf(v, I), !(0 > a)) && (s = e.indexOf(A, a), !(a + 1 > s));) d = e.substring(a + 1, s), u = d, p = null, c = u.indexOf(O), c > -1 && (p = u.substring(c + 1), u = u.substring(0, c)), l = n[u], o && (l = o(u, l, p)), t.isObject(l) ? t.isArray(l) ? l = t.dump(l, parseInt(p, 10)) : (p = p || "", m = p.indexOf(g), m > -1 && (p = p.substring(4)), f = l.toString(), l = f === i || m > -1 ? t.dump(l, parseInt(p, 10)) : f) : t.isString(l) || t.isNumber(l) || (l = "~-" + h.length + "-~", h[h.length] = d), e = e.substring(0, a) + l + e.substring(s + 1), r === !1 && (I = a - 1);
                    for (a = h.length - 1; a >= 0; a -= 1) e = e.replace(new RegExp("~-" + a + "-~"), "{" + h[a] + "}", "g");
                    return e
                },
                trim: function(t) {
                    try {
                        return t.replace(/^\s+|\s+$/g, "")
                    } catch (e) {
                        return t
                    }
                },
                merge: function() {
                    var e, n = {},
                        o = arguments,
                        i = o.length;
                    for (e = 0; i > e; e += 1) t.augmentObject(n, o[e], !0);
                    return n
                },
                later: function(e, n, o, i, a) {
                    e = e || 0, n = n || {};
                    var s, c, u = o,
                        l = i;
                    if (t.isString(o) && (u = n[o]), !u) throw new TypeError("method undefined");
                    return t.isUndefined(i) || t.isArray(l) || (l = [i]), s = function() {
                        u.apply(n, l || r)
                    }, c = a ? setInterval(s, e) : setTimeout(s, e), {
                        interval: a,
                        cancel: function() {
                            this.interval ? clearInterval(c) : clearTimeout(c)
                        }
                    }
                },
                isValue: function(e) {
                    return t.isObject(e) || t.isString(e) || t.isNumber(e) || t.isBoolean(e)
                }
            };
        t.hasOwnProperty = e.hasOwnProperty ? function(t, e) {
            return t && t.hasOwnProperty && t.hasOwnProperty(e)
        } : function(e, n) {
            return !t.isUndefined(e[n]) && e.constructor.prototype[n] !== e[n]
        }, c.augmentObject(t, c, !0), t.augment = t.augmentProto, XIAOMI.augment = t.augmentProto, XIAOMI.extend = t.extend
    }(),
    function() {
        function t(t, e, n) {
            var o = e && n || 0,
                i = 0;
            for (e = e || [], t.toLowerCase().replace(/[0-9a-f]{2}/g, function(t) {
                    16 > i && (e[o + i++] = d[t])
                }); 16 > i;) e[o + i++] = 0;
            return e
        }

        function e(t, e) {
            var n = e || 0,
                o = p;
            return o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + "-" + o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]] + o[t[n++]]
        }

        function n(t, n, o) {
            var i = n && o || 0,
                r = n || [];
            t = t || {};
            var a = null != t.clockseq ? t.clockseq : I,
                s = null != t.msecs ? t.msecs : (new Date).getTime(),
                c = null != t.nsecs ? t.nsecs : O + 1,
                u = s - g + (c - O) / 1e4;
            if (0 > u && null == t.clockseq && (a = a + 1 & 16383), (0 > u || s > g) && null == t.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            g = s, O = c, I = a, s += 122192928e5;
            var l = (1e4 * (268435455 & s) + c) % 4294967296;
            r[i++] = l >>> 24 & 255, r[i++] = l >>> 16 & 255, r[i++] = l >>> 8 & 255, r[i++] = 255 & l;
            var p = s / 4294967296 * 1e4 & 268435455;
            r[i++] = p >>> 8 & 255, r[i++] = 255 & p, r[i++] = p >>> 24 & 15 | 16, r[i++] = p >>> 16 & 255, r[i++] = a >>> 8 | 128, r[i++] = 255 & a;
            for (var d = t.node || h, m = 0; 6 > m; m++) r[i + m] = d[m];
            return n ? n : e(r)
        }

        function o(t, n, o) {
            var r = n && o || 0;
            "string" == typeof t && (n = "binary" == t ? new l(16) : null, t = null), t = t || {};
            var a = t.random || (t.rng || i)();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, n)
                for (var s = 0; 16 > s; s++) n[r + s] = a[s];
            return n || e(a)
        }
        var i, r = this;
        if ("function" == typeof require) try {
            var a = require("crypto").randomBytes;
            i = a && function() {
                return a(16)
            }
        } catch (s) {}
        if (!i && r.crypto && crypto.getRandomValues) {
            var c = new Uint8Array(16);
            i = function() {
                return crypto.getRandomValues(c), c
            }
        }
        if (!i) {
            var u = new Array(16);
            i = function() {
                for (var t, e = 0; 16 > e; e++) 0 === (3 & e) && (t = 4294967296 * Math.random()), u[e] = t >>> ((3 & e) << 3) & 255;
                return u
            }
        }
        for (var l = "function" == typeof Buffer ? Buffer : Array, p = [], d = {}, m = 0; 256 > m; m++) p[m] = (m + 256).toString(16).substr(1), d[p[m]] = m;
        var f = i(),
            h = [1 | f[0], f[1], f[2], f[3], f[4], f[5]],
            I = 16383 & (f[6] << 8 | f[7]),
            g = 0,
            O = 0,
            v = o;
        if (v.v1 = n, v.v4 = o, v.parse = t, v.unparse = e, v.BufferClass = l, r.define && define.amd) define("source/js/libs/uuid", [], function() {
            return v
        });
        else if ("undefined" != typeof module && module.exports) module.exports = v;
        else {
            var A = r.uuid;
            v.noConflict = function() {
                return r.uuid = A, v
            }, r.uuid = v
        }
    }.call(this),
    function() {
        for (var t, e = function() {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], o = n.length, i = window.console = window.console || {}; o--;) t = n[o], i[t] || (i[t] = e)
    }(), XIAOMI.namespace("app.miniLogin, app.cookie, app.lazyLoad, app.setLoginInfo, app.updateMiniCart, app.Recommend, app.History, app.addShopCart, app.addShopCartEvent, app.search, app.miniCart, app.getRegions, app.selector, app.placeholder, app.navigation, app.footer, app.countdown, app.googleAnalytics, app.analytics"), XIAOMI.lang.preventDefault = function(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }, XIAOMI.app.miniLogin = function() {
        this.protocol = XIAOMI.GLOBAL_CONFIG.protocol, this.orderSite = XIAOMI.GLOBAL_CONFIG.orderSite, this.httpsOrderSite = XIAOMI.GLOBAL_CONFIG.httpsOrderSite, this.quickLoginUrl = XIAOMI.GLOBAL_CONFIG.quickLoginUrl
    }, XIAOMI.app.miniLogin.prototype = {
        constructor: XIAOMI.app.miniLogin,
        _proxyiframe: function() {
            var t = ("https" == this.protocol ? this.httpsOrderSite : this.orderSite) + "/login/proxy",
                e = "<iframe src='" + t + "' width='0' height='0' name='proxy' id='proxy' frameborder='0' scrolling='no'></iframe>";
            $(document.body).append(e), $("iframe[name='proxy']").load(function() {
                $("iframe[name='proxy']").remove()
            })
        },
        _toLogin: function(t) {
            function e(t) {
                var e = t ? t : i.quickLoginUrl,
                    n = "<iframe src='" + e + "' width='100%' height='100%' name='miniLoginFrame' id='miniLoginFrame' frameborder='0' scrolling='no'></iframe>",
                    o = $("#loginBox").attr(XIAOMI.app.cookie("sns_type") ? "data-width-sns" : "data-width"),
                    r = $("#loginBox").attr("data-Height");
                $("#loginBox-con").css({
                    height: r
                }).html(n), XIAOMI.app.cookie("sns_type") && $("#loginBox-con").css({
                    "padding-left": "100px"
                }), $("#loginBox").css({
                    width: o
                }).modal({
                    backdrop: !0,
                    keyboard: !0,
                    show: !0
                })
            }

            function n() {
                clearInterval(a), t ? window.location.href = t : window.location.reload(!0)
            }

            function o() {
                -1 !== window.location.href.indexOf("order") ? XIAOMI.app.cookie("serviceToken") && n() : XIAOMI.app.cookie("userId") && n()
            }
            var i = this,
                r = encodeURIComponent(window.location.href);
            $.ajax({
                url: i.orderSite + "/site/loginurl?followup=" + r,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function(t) {
                    e(t.url)
                },
                Complete: function() {},
                error: function() {
                    e()
                }
            });
            var a = window.setInterval(o, 1e3)
        },
        init: function() {
            var t = this; - 1 !== window.location.pathname.indexOf("cart") && XIAOMI.app.cookie("userId") && !XIAOMI.app.cookie("serviceToken") && t._proxyiframe(), $("[data-needLogin='true']").live("click", function(e) {
                var n = $(this).attr("data-rel");
                t._isLogined(n, e)
            })
        },
        _isLogined: function(t, e) {
            XIAOMI.app.cookie("serviceToken") || (XIAOMI.app.cookie("userId") ? this._proxyiframe() : (e && XIAOMI.lang.preventDefault(e), this._toLogin(t)))
        },
        autoExec: function(t) {
            this._isLogined(t)
        }
    }, XIAOMI.app.cookie = function(t, e, n) {
        if (arguments.length > 1 && "[object Object]" !== String(e)) {
            if (n = jQuery.extend({}, n), (null === e || void 0 === e) && (n.expires = -1), "number" == typeof n.expires) {
                var o = n.expires,
                    i = n.expires = new Date;
                i.setDate(i.getDate() + o)
            }
            return e = String(e), document.cookie = [encodeURIComponent(t), "=", n.raw ? e : encodeURIComponent(e), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
        }
        n = e || {};
        var r, a = n.raw ? function(t) {
            return t
        } : decodeURIComponent;
        return (r = new RegExp("(?:^|; )" + encodeURIComponent(t) + "=([^;]*)").exec(document.cookie)) ? a(r[1]) : null
    }, XIAOMI.app.analytics = function(t, e) {
        this.options = {
            page: "首页",
            position: ["A1"],
            url: !0,
            mstSite: "CN-WW",
            mstPage: "PC",
            mstArea: "RM",
            mstPosition: ["A"],
            mstHostParams: "",
            isMst: !1,
            JQelement: !1
        };
        for (var n in e) this.options[n] = e[n];
        for (var o = this, i = o.options.url ? !0 : !1, r = function(t) {
                $.each(t, function(t, e) {
                    var n = i ? $(e).attr("href") : XIAOMI.lang.trim($(e).text()),
                        r = t,
                        s = ("'" + o.options.page + "', '" + o.options.position[a] + "_" + r + "','" + n + "'", "'" + o.options.mstSite + "-" + o.options.mstPage + "-" + o.options.mstArea + "-" + o.options.mstPosition[a] + r + "', '" + n);
                    s = s += "" === o.options.mstHostParams ? "', '" + r + "'" : "', '" + o.options.mstHostParams + "'", o.options.isMst && $(e).attr("onclick", "_msq.push(['trackEvent'," + s + "])")
                })
            }, a = 0; a < t.length; a++) {
            var s = o.options.JQelement ? t : $(t[a]).find("a");
            r(s)
        }
    }, XIAOMI.app.googleAnalytics = function(t, e) {
        this.options = {
            page: "首页",
            mstPage: "H",
            mstFunction: "A",
            mstPosition: ["A1"],
            position: ["A1"],
            url: !0,
            isMst: !1,
            JQelement: !1
        };
        for (var n in e) this.options[n] = e[n];
        for (var o = this, i = o.options.url ? !0 : !1, r = function(t) {
                $.each(t, function(t, e) {
                    var n = i ? $(e).attr("href") : XIAOMI.lang.trim($(e).text()),
                        r = t,
                        s = ("'" + o.options.page + "', '" + o.options.position[a] + "_" + r + "','" + n + "'", "'" + o.options.mstPage + "', '" + o.options.mstPage + "-" + o.options.mstFunction + "-" + o.options.position[a] + "_" + r + "','" + n + "'");
                    o.options.isMst && $(e).attr("onclick", "_msq.push(['trackEvent',event," + s + "])")
                })
            }, a = 0; a < t.length; a++) {
            var s = o.options.JQelement ? t : $(t[a]).find("a");
            r(s)
        }
    }, XIAOMI.app.lazyLoad = function(t) {
        var e = {
            defObj: "#lazyLoad-box",
            defHeight: 50
        };
        e = $.extend(e, t || {});
        var n = (e.defHeight, "object" == typeof e.defObj ? e.defObj.find("img") : $(e.defObj).find("img")),
            o = "ipad" === navigator.userAgent.toLowerCase().match(/iPad/i) ? !0 : !1,
            i = function() {
                var t = document,
                    n = o ? window.pageYOffset : Math.max(t.documentElement.scrollTop, t.body.scrollTop);
                return o && (e.defHeight = 0), t.documentElement.clientHeight + n + e.defHeight
            },
            r = function(t) {
                var e = t.attr("src2");
                e && t.css({
                    opacity: "0.3"
                }).attr("src", e).removeAttr("src2").animate({
                    opacity: "1"
                })
            },
            a = function() {
                n.each(function() {
                    o ? r($(this)) : $(this).offset().top <= i() && r($(this))
                })
            };
        a(), $(window).bind("scroll", function() {
            a()
        }), $(window).bind("resize", function() {
            a()
        })
    }, XIAOMI.app.setLoginInfo = {
        data: {
            userId: 0,
            userName: "",
            goodsNum: 0
        },
        miid: XIAOMI.app.cookie("userId"),
        init: function() {
            if (this.data.userId = this.miid, this.uuidCookie(), this.data.userId) {
                var t = XIAOMI.app.cookie("XM_" + this.miid + "_UN");
                if (this.data.userName = this.miid ? t ? t.replace(/[<>]/g, "") : t : "", this.data.goodsNum = XIAOMI.app.cookie("xm_user_" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "_num"), this.data.goodsNum = null == this.data.goodsNum ? 0 : this.data.goodsNum, null == this.data.userName || "" === this.data.userName) {
                    var e = document.createElement("script");
                    e.src = "https://account.xiaomi.com/pass/userInfoJsonP?userId=" + this.miid + "&callback=setLoginInfo_getAccountInfo", e.type = "text/javascript", e.async = !0, document.getElementsByTagName("head")[0].appendChild(e)
                } else this.updateDom()
            }
        },
        updateDom: function() {
            var t = "";
            t = this.data.userName.length > 7 ? this.data.userName.substr(0, 7) + "..." : this.data.userName;
            var e = '<strong class="name">' + t + '</strong></span><a class="out" href="' + this.orderUrl + '">[Sign Out]</a>';
            $(".J_head_1").html(e), $(".J_head_2").show()
        },
        uuidCookie: function() {
            var t = ("xmguest-" + uuid.v1()).toUpperCase(),
                e = XIAOMI.app.cookie("xmuuid");
            if (!e) {
                var n = {
                    path: "/" + XIAOMI.GLOBAL_CONFIG.appLocal.name,
                    domain: ".mi.com",
                    expires: 18250
                };
                XIAOMI.app.cookie("xmuuid", t, n)
            }
        }
    };
var setLoginInfo_getAccountInfo = function(t) {
    var e = XIAOMI.app.setLoginInfo;
    if (t && t.userId) {
        e.data.userName = t.miliaoInfo && t.miliaoInfo.nickName ? t.miliaoInfo.nickName : t.userId;
        var n = {
            path: "/" + XIAOMI.GLOBAL_CONFIG.appLocal.name,
            domain: ".mi.com"
        };
        XIAOMI.app.cookie("XM_" + e.miid + "_UN", e.data.userName, n), e.updateDom()
    }
};
XIAOMI.app.updateMiniCart = function() {
    var t = XIAOMI.app.cookie("xm_user_" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "_num");
    if (t && parseFloat(t) > 0) {
        var e = "(" + t + ")";
        return $("#miniCartNum").html(e).show(), t
    }
    return $("#miniCartNum").html("(0)").hide(), 0
}, XIAOMI.app.History = function(t) {
    var e = XIAOMI.app.cookie("xm_store_goods_history"),
        n = null,
        o = null,
        i = "<ul class='xm-goods-sublist xm-goods-sublist-l'>";
    if (!e) return !1;
    e = e.split(";");
    for (var r = e.length - 1, a = 0; r > a; a += 1) n = e[a].split(","), o = XIAOMI.GLOBAL_CONFIG.orderSite + "/item/" + n[3], i += '<li><div class="item-name"><a href="' + o + '">' + n[1] + "</a></div>", i += '<div class="item-price">' + "US $ " + n[2] + "</div>", i += '<div class="item-thumb"><a href="' + o + '"><img src="' + n[0] + '" alt="' + n[1] + '"></a></div></li>';
    return i += "</ul>", t ? void t.html(i) : i
}, XIAOMI.app.jsonP = function(t, e, n) {
    t.show();
    var o = document.createElement("script");
    itemrecommend = function(e) {
        var o = doT.template($("#" + n).html()),
            i = e.result,
            r = [];
        if ("undefined" == typeof i || "error" == i || 0 == i.length) return void t.hide();
        for (var a in i) 5 > a && r.push(i[a]);
        0 !== r.length ? t.html(o(r)) : t.hide()
    }, requestTimer = setTimeout(function() {
        t.hide()
    }, 4e3), o.onload = o.onreadystatechange = function() {
        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (window.clearTimeout(requestTimer), o.onload = o.onreadystatechange = null)
    }, o.onerror = function() {
        window.clearTimeout(requestTimer)
    }, $("#getItemRecommend").remove(), o.src = e, o.type = "text/javascript", o.id = "getItemRecommend", o.async = !0, document.getElementsByTagName("head")[0].appendChild(o)
}, XIAOMI.app.addShopCart = function(t, e, n) {
    if (t && "function" == typeof e) {
        var o = XIAOMI.GLOBAL_CONFIG.orderSite + "/cart/add/" + t;
        $.ajax({
            url: o,
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            success: function(t) {
                if (e(t, n), 1 == t.code) {
                    var o = "xm_user_" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "_num",
                        i = XIAOMI.app.cookie(o);
                    XIAOMI.app.cookie(o, Number(i) + 1, {
                        domain: ".mi.com",
                        path: "/" + XIAOMI.GLOBAL_CONFIG.appLocal.name
                    }), XIAOMI.app.updateMiniCart()
                }
            }
        })
    }
}, XIAOMI.app.addShopCartEvent = function(t) {
    var e = {
        obj: ".xmAddShopCart",
        callback: null
    };
    $.extend(e, t || {}), $(document).on("click", e.obj, function() {
        var t = $(this).attr("data-gid"),
            n = $(this).attr("data-disabled"),
            o = $(this).attr("data-package");
        if ("false" === n) {
            if ($(this).attr("data-disabled", "true"), !t || "true" === o || null === e.callback) return !0;
            var i = XIAOMI.GLOBAL_CONFIG.damiaoGoodsId ? XIAOMI.GLOBAL_CONFIG.damiaoGoodsId : !1,
                r = !1;
            if (i !== !1 && "object" == typeof i && $.inArray(t, i) > -1 && (r = !0), r === !0) {
                var a = new XIAOMI.app.miniLogin;
                XIAOMI.app.cookie("serviceToken") ? XIAOMI.app.dmFun.init({
                    sku: t,
                    callback: e.callback,
                    obj: $(this)
                }) : XIAOMI.app.cookie("userId") ? (a._proxyiframe(), XIAOMI.app.dmFun.init({
                    sku: t,
                    callback: e.callback,
                    obj: $(this)
                })) : window.location.href = XIAOMI.GLOBAL_CONFIG.orderSite + "/site/login?ac=1"
            } else XIAOMI.app.addShopCart(t, e.callback, $(this))
        }
        return !1
    })
}, XIAOMI.app.miniCart = {
    loadingStr: "<div class='loading'>loading...</div>",
    speed: 500,
    init: function() {
        var t = this,
            e = null,
            n = null;
        return "undefined" != typeof miniCartDisable && miniCartDisable ? !1 : ($("#miniCart").hover(function() {
            return "undefined" != typeof cartUnFoldFlag && cartUnFoldFlag ? !1 : (clearTimeout(e), n = $(this).hasClass("mini-cart-on") ? !0 : !1, void(n || ($(this).addClass("mini-cart-on"), t.show(), t.getData())))
        }, function() {
            e = setTimeout(function() {
                t.close()
            }, t.speed)
        }), $("#miniCartList").hover(function() {
            clearTimeout(e)
        }, function() {
            e = setTimeout(function() {
                t.close()
            }, t.speed)
        }), void $("#miniCartList").find("li").find(".delItem").live("click", function() {
            var e = ($(this).parent(), $(this).attr("gid"));
            return t.delGoods(e), !1
        }))
    },
    show: function() {
        $("#miniCartList").show(50)
    },
    close: function() {
        $("#miniCart").removeClass("mini-cart-on"), $("#miniCartList").html(this.loadingStr).hide()
    },
    delGoods: function(t) {
        var e = this,
            n = ("https" == XIAOMI.GLOBAL_CONFIG.protocol ? XIAOMI.GLOBAL_CONFIG.httpsOrderSite : XIAOMI.GLOBAL_CONFIG.orderSite) + "/cart/delete/" + t;
        $.getJSON(n + "?jsonpcallback=?", function() {
            e.getData(), XIAOMI.app.updateMiniCart()
        })
    },
    getData: function() {
        var t = this;
        $.ajax({
            type: "GET",
            url: ("https" == XIAOMI.GLOBAL_CONFIG.protocol ? XIAOMI.GLOBAL_CONFIG.httpsOrderSite : XIAOMI.GLOBAL_CONFIG.orderSite) + "/cart/miniNew",
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            cache: !1,
            success: function(e) {
                t.formatData(e), XIAOMI.app.updateMiniCart()
            }
        })
    },
    formatData: function(t) {
        if (0 === t.errorno && t.totalItem > 0) {
            var e, n = t.items.length,
                o = null,
                i = "<ul>",
                r = t.total > 1 ? "items" : "item";
            if (countHtml = '<div class="count"><p>Subtotal (<em>' + t.total + "</em> " + r + ")<strong><em>" + "US $ " + t.totalPrice + '</em></strong></p><a href="' + XIAOMI.GLOBAL_CONFIG.orderSite + '/cart"  class="btn btn-primary" >Checkout</a></div>', t.totalItem > 5) {
                var a = 405;
                i = "<ul style='height:" + a + "px;overflow-x:hidden;overflow-y:scroll'>"
            }
            for (var s = 0; n > s; s += 1) 0 === t.items[s].noLink ? (e = XIAOMI.CONST.ShowType[t.items[s].show_type], e = e ? '<em style="color:#e05e40;">' + e + "</em> " : "", o = XIAOMI.GLOBAL_CONFIG.orderSite + "/item/" + t.items[s].product_id, i += '<li class="clearfix"><a href="' + o + '" class="pic"><img alt="" src="' + t.items[s].image_url + '?width=60&height=60"></a><a href="' + o + '" class="name">' + e + t.items[s].product_name + '</a><span class="price">' + "US $ " + t.items[s].salePrice + " x " + t.items[s].num + '</span><a href="#" class="icon-common icon-common-close  delItem" gid="' + t.items[s].itemId + '"></a></li>') : i += '<li class="clearfix"><span class="pic"><img alt="" src="' + t.items[s].image_url + '"></span><span   class="name">' + e + t.items[s].product_name + '</span><span class="price">' + "US $ " + t.items[s].salePrice + " x " + t.items[s].num + '</span><span class="icon-common icon-common-close  delItem" gid="' + t.items[s].itemId + '"></span></li>';
            i += "</ul>", $("#miniCartList").html(i + countHtml)
        } else $("#miniCartList").html("<p class='tip'>Your cart is empty！</p>")
    }
}, XIAOMI.app.getRegions = {
    getData: function(t, e, n) {
        var o = this;
        $.ajax({
            type: "GET",
            url: XIAOMI.GLOBAL_CONFIG.httpsOrderSite + "/region/index",
            data: "parent=" + t,
            dataType: "json",
            success: function(t) {
                t && o.formatData(t, e, n)
            }
        })
    },
    formatData: function(t, e, n) {
        for (var o = t.regions, i = o.length, r = $("#" + e), a = "<option value='0'>" + r.children("option").eq(0).html() + "</option>", s = 0; i > s; s += 1) {
            var c = o[s].region_id === n ? "selected" : "";
            a += "<option zipcode='" + o[s].zipcode + "' value='" + o[s].region_id + "'" + c + ">" + o[s].region_name + "</option>"
        }
        $("#" + e).html(a).attr("disabled", !1)
    }
}, XIAOMI.countdown = {
    countdown: function(t, e) {
        var n = this,
            o = e,
            i = o - t,
            r = parseInt(i % 60, 10),
            a = parseInt(i / 60 % 60, 10),
            s = parseInt(i / 3600 % 24, 10),
            c = parseInt(i / 3600 / 24, 10),
            u = [r.toString(), a.toString(), s.toString()];
        return 1 >= i ? ["", !0] : [parseInt(u[2], 10) + parseInt(24 * c, 10) + " : " + n.formatNum(u[1]) + " : " + n.formatNum(u[0]), !1]
    },
    formatNum: function(t) {
        return 10 > t ? "0" + t : t
    },
    init: function(t, e) {
        var n = this,
            o = t || (new Date).getTime() / 1e3,
            i = e;
        if ($(".xmcounttime")) var r = n.countdown(o, i),
            a = setInterval(function() {
                r = n.countdown(o, i), r[1] ? (clearInterval(a), $(".xmcounttime").html('<label class="timebtn" >秒杀正在进行中...</label>')) : (o++, $(".xmcounttime").html('<label id="xmtime" class="time"><span>剩余时间</span>' + r[0] + "</label>"))
            }, 1e3)
    }
}, XIAOMI.app.selector = {
    defaultOption: {
        reorder: !1,
        buildLI: function(t, e, n) {
            var o = $('<li data-index="' + t + '"><span>' + e.text + "</span></li>");
            e.selected && o.addClass("selected"), n.append(o)
        },
        afterChange: function() {}
    },
    init: function(t, e) {
        function n(t) {
            t.insertBefore(t.closest("ul").children("li")[0]), a.text(t.text())
        }
        var o, i, r, a, s, c, u = this,
            l = [];
        return 0 === t.length ? t : t.length > 1 ? (t.each(function() {
            u.init($(this), e)
        }), this) : (o = $.extend({}, u.defaultOption, e), i = t, r = $('<div class="xm-select"></div>').insertAfter(i), a = $('<div class="dropdown-text"></div>'), s = $('<ul class="dropdown-menu"></ul>'), c = $('<span class="arrow-down"></span>'), i.children("option").each(function() {
            l.push({
                text: $(this).text(),
                value: $(this).attr("value"),
                selected: $(this).attr("selected")
            })
        }), $(l).each(function(t, e) {
            o.buildLI(t, e, s)
        }), r.append(a, s, c, i), i.hide(), o.reorder === !0 && 0 !== s.children("li").index(s.children(".selected")) ? n(s.children(".selected")) : a.text(l[0].text), s.on("click", "li", function() {
            var t = i.children("option").eq($(this).attr("data-index")).val();
            i.val(t).change(), $(this).addClass("selected").siblings("li").removeClass("selected"), o.reorder === !0 ? 0 !== s.children("li").index(this) && (n($(this)), s.hide()) : (a.text($(this).text()), s.hide()), o.afterChange(t)
        }), void r.on({
            mouseover: function() {
                r.addClass("toggled"), s.show()
            },
            mouseout: function() {
                r.removeClass("toggled"), s.hide()
            }
        }))
    }
}, XIAOMI.app.placeholder = function(t, e) {
    var n, o, i, r = $(t),
        a = "placeholder" in document.createElement("input");
    return 0 === r.length ? r : r.length > 1 ? (r.each(function() {
        XIAOMI.app.placeholder($(this), e)
    }), this) : (n = {
        blurClass: "xm-ph-blur"
    }, o = $.extend({}, n, e), i = r.attr("placeholder"), void(!a && i && (r.is("textarea") ? "" === r.html() && r.addClass(o.blurClass).html(i) : "" === r.val() && r.addClass(o.blurClass).val(i), r.on({
        focus: function() {
            $(this).is("textarea") ? $(this).html() === i && $(this).removeClass(o.blurClass).html("") : $(this).val() === i && $(this).removeClass(o.blurClass).val("")
        },
        blur: function() {
            $(this).is("textarea") ? "" === $(this).html() && $(this).addClass(o.blurClass).html(i) : "" === $(this).val() && $(this).addClass(o.blurClass).val(i)
        }
    }))))
}, XIAOMI.namespace("app.dmFun"), XIAOMI.app.dmFun = {
    init: function(t) {
        this.config = {
            sku: null,
            callback: null,
            obj: null,
            source: "bigtap"
        }, this.inTheQueue = !1, $.extend(this.config, t), this.startQueue(), this.getDmSys();
        var e = this;
        $("#xmDmReload").on("click", function() {
            e.config.obj.trigger("click")
        })
    },
    getDmSys: function() {
        var t = this,
            e = XIAOMI.GLOBAL_CONFIG.damiaoSite + "hdget/" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "?source=" + t.config.source + "&product=" + t.config.sku + "&addcart=1&m=1&_=" + (new Date).getTime();
        $.ajax({
            type: "GET",
            url: e,
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            jsonpCallback: "hdcontrol",
            timeout: 6e4,
            error: function() {
                return t.inTheQueue ? (t.stopQueue(), void $("#xmDmError").modal({
                    show: !0,
                    backdrop: "static"
                })) : !1
            },
            success: function(e) {
                var n = e.status,
                    o = n[t.config.sku].hdurl,
                    i = n[t.config.sku].hdstart === !1 && n[t.config.sku].hdstop === !0 ? !0 : !1,
                    r = e.d22a51 ? 1e3 * e.d22a51 : 5e3;
                return t.inTheQueue ? i === !0 ? (t.stopQueue(), alert("We are sorry to tell you this item is sold out."), window.location.reload(), !1) : (t.getDmTimer && clearTimeout(t.getDmTimer), void(o ? t.getShopCart(o) : (t.inTheQueue || t.startQueue(), t.getDmTimer = setTimeout(function() {
                    t.getDmSys()
                }, r)))) : !1
            }
        })
    },
    getShopCart: function(t) {
        if (!t) return !1;
        var e = this,
            n = XIAOMI.GLOBAL_CONFIG.orderSite + "/cart/add/" + this.config.sku + "?token=" + t + "&source=" + e.config.source;
        $.ajax({
            type: "GET",
            url: n,
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            success: function(t) {
                e.stopQueue(), e.config.callback(t, e.config.obj);
                var n = "xm_user_" + XIAOMI.GLOBAL_CONFIG.appLocal.name + "_num",
                    o = XIAOMI.app.cookie(n);
                XIAOMI.app.cookie(n, Number(o) + 1, {
                    domain: ".mi.com",
                    path: "/" + XIAOMI.GLOBAL_CONFIG.appLocal.name
                }), XIAOMI.app.updateMiniCart()
            }
        })
    },
    startQueue: function() {
        var t = this;
        $("#xmDmError").modal("hide"), $("#xmDmQueue").modal({
            show: !0,
            backdrop: "static"
        }), t.queueAnimate(), t.inTheQueue = !0, $("#xmDmQueue").on("hidden.bs.modal", function() {
            t.stopQueue(), t.config.obj.attr("data-disabled", "false")
        })
    },
    stopQueue: function() {
        $("#xmDmQueue").modal("hide"), this.inTheQueue = !1, this.getDmTimer && clearTimeout(this.getDmTimer), window.queueAnimateTimer && clearInterval(queueAnimateTimer)
    },
    queueAnimate: function() {
        var t = 0,
            e = 200,
            n = function() {
                t -= 90, -900 >= t && (t = 0), $("#mituWalking").css({
                    "background-position": t + "px 0"
                })
            };
        window.queueAnimateTimer = setInterval(n, e)
    }
}, XIAOMI.app.footer = {
    init: function() {
        var t = this;
        t.events()
    },
    events: function() {
        var t = this;
        t.phoneAction()
    },
    phoneAction: function() {
        $(".J_footer_1").hover(function() {
            $(".J_footer_4").show(), $(".J_footer_2").show(), $(".J_footer_3").show()
        }, function() {
            $(".J_footer_4").hide(), $(".J_footer_2").hide(), $(".J_footer_3").hide()
        })
    }
}, XIAOMI.app.headPrompt = function(t) {
    if (!XIAOMI.app.cookie("headPrompt") && t) {
        var e = $('<span class="hdclose"></span>'),
            n = $('<div class="head-prompt show"><p>' + t + "</p></div>");
        e.on("click", function() {
            n.removeClass("show"), XIAOMI.app.cookie("headPrompt", "1", {
                path: "/",
                domain: ".mi.com"
            })
        }), n.append(e), $(".header:first").prepend(n)
    }
}, $(function() {
    XIAOMI.app.miniCart.init(), XIAOMI.app.updateMiniCart(), XIAOMI.app.footer.init(), XIAOMI.app.analytics([".nav .lnks-li"], {
        page: "导航",
        position: ["A1"],
        mstPage: "HP",
        mstArea: "NV",
        mstPosition: ["A"],
        isMst: !0
    }), XIAOMI.app.googleAnalytics([".hot"], {
        page: "搜索热词",
        position: ["搜索热词"],
        url: !1
    })
}), window.XIAOMI = $.extend(window.XIAOMI, {
    CONST: {
        ShowType: {
            buy: "",
            bargain: "[Sale]",
            gift: "[Gift]",
            seckill: "[Seckill]",
            special: "[Special]",
            ernie: "[Shake]",
            presales: "[Pre-sale]",
            fcode: "[F-code]"
        }
    }
}), XIAOMI.app.userCountry = {
    speed: 500,
    currentCountry: "",
    constructCountrySelect: function() {
        var t = this,
            e = "",
            n = XIAOMI.app.cookie("xm_viewer_locale");
        $.each(XIAOMI.GLOBAL_CONFIG.globalLocales, function(o, i) {
            e += '<li><a class="dropdown-country" href="#"><i data-country="' + o + '" class="icon-country icon-' + o + '"></i>' + i + "</a></li>", n == o && (t.currentCountry = n)
        }), $("#countryDropdown .dropdown").html(e), "" != t.currentCountry ? ($("#userCountry").removeClass("no-country-selected").find(".current-user-country").html('Shipping to<i class="icon-country user-country-icon icon-' + t.currentCountry + '"></i>'), $("#countryDropdown .current-country").html('<i class="icon-country icon-' + t.currentCountry + '"></i>' + XIAOMI.GLOBAL_CONFIG.globalLocales[t.currentCountry])) : $.each(XIAOMI.GLOBAL_CONFIG.separateSites, function(t, e) {
            n == t && $("#userCountrySelector").append('                        <div class="site-switch">                            <p>Shipping to ' + e.title + '?</p>                            <p><a href="' + e.link + '">Visit ' + e.link.replace("http://", "").replace("/index.html", "") + "</a></p>                        </div>")
        })
    },
    init: function() {
        var t = this,
            e = null,
            n = null;
        return "undefined" != typeof shipToDisable && shipToDisable ? !1 : ($("#userCountry").hover(function() {
            clearTimeout(e), n = $(this).hasClass("user-country-on") ? !0 : !1, n || ($(this).addClass("user-country-on"), $("#userCountrySelector").show(50))
        }, function() {
            e = setTimeout(function() {
                $("#userCountry").removeClass("user-country-on"), $("#userCountrySelector").hide(), $("#countryDropdown").removeClass("active")
            }, t.speed)
        }), $("#userCountrySelector").hover(function() {
            clearTimeout(e)
        }, function() {
            e = setTimeout(function() {
                $("#userCountry").removeClass("user-country-on"), $("#userCountrySelector").hide(), $("#countryDropdown").removeClass("active")
            }, t.speed)
        }), t.constructCountrySelect(), void $("#countryDropdown").click(function(e) {
            if ($(this).hasClass("active")) {
                var n = $(e.target).closest(".dropdown-country");
                1 == n.length && setTimeout(function() {
                    t.currentCountry = $("#countryDropdown .current-country").html(n.html()).find(".icon-country").data("country"), $("#userCountry").removeClass("no-country-selected").find(".current-user-country").html('Shipping to<i class="user-country-icon icon-country icon-' + t.currentCountry + '"></i>'), XIAOMI.app.cookie("xm_viewer_locale", t.currentCountry, {
                        domain: ".mi.com",
                        path: "/",
                        expires: 3650
                    })
                }, 300), $(this).removeClass("active")
            } else $(this).addClass("active");
            return !1
        }))
    }
}, $(function() {
    XIAOMI.app.userCountry.init()
});