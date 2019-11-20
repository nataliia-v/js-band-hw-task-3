!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a),
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 5));
})([
  function(e, t) {
    var n =
      ('undefined' != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ('undefined' != typeof msCrypto &&
        'function' == typeof window.msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto));
    if (n) {
      var r = new Uint8Array(16);
      e.exports = function() {
        return n(r), r;
      };
    } else {
      var a = new Array(16);
      e.exports = function() {
        for (var e, t = 0; t < 16; t++)
          0 == (3 & t) && (e = 4294967296 * Math.random()), (a[t] = (e >>> ((3 & t) << 3)) & 255);
        return a;
      };
    }
  },
  function(e, t) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    e.exports = function(e, t) {
      var r = t || 0,
        a = n;
      return [
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        '-',
        a[e[r++]],
        a[e[r++]],
        '-',
        a[e[r++]],
        a[e[r++]],
        '-',
        a[e[r++]],
        a[e[r++]],
        '-',
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
      ].join('');
    };
  },
  function(e, t, n) {
    var r = n(3),
      a = n(4),
      o = a;
    (o.v1 = r), (o.v4 = a), (e.exports = o);
  },
  function(e, t, n) {
    var r,
      a,
      o = n(0),
      c = n(1),
      s = 0,
      i = 0;
    e.exports = function(e, t, n) {
      var d = (t && n) || 0,
        l = t || [],
        u = (e = e || {}).node || r,
        p = void 0 !== e.clockseq ? e.clockseq : a;
      if (null == u || null == p) {
        var m = o();
        null == u && (u = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]),
          null == p && (p = a = 16383 & ((m[6] << 8) | m[7]));
      }
      var f = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
        v = void 0 !== e.nsecs ? e.nsecs : i + 1,
        y = f - s + (v - i) / 1e4;
      if (
        (y < 0 && void 0 === e.clockseq && (p = (p + 1) & 16383),
        (y < 0 || f > s) && void 0 === e.nsecs && (v = 0),
        v >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (s = f), (i = v), (a = p);
      var h = (1e4 * (268435455 & (f += 122192928e5)) + v) % 4294967296;
      (l[d++] = (h >>> 24) & 255),
        (l[d++] = (h >>> 16) & 255),
        (l[d++] = (h >>> 8) & 255),
        (l[d++] = 255 & h);
      var g = ((f / 4294967296) * 1e4) & 268435455;
      (l[d++] = (g >>> 8) & 255),
        (l[d++] = 255 & g),
        (l[d++] = ((g >>> 24) & 15) | 16),
        (l[d++] = (g >>> 16) & 255),
        (l[d++] = (p >>> 8) | 128),
        (l[d++] = 255 & p);
      for (var C = 0; C < 6; ++C) l[d + C] = u[C];
      return t || c(l);
    };
  },
  function(e, t, n) {
    var r = n(0),
      a = n(1);
    e.exports = function(e, t, n) {
      var o = (t && n) || 0;
      'string' == typeof e && ((t = 'binary' === e ? new Array(16) : null), (e = null));
      var c = (e = e || {}).random || (e.rng || r)();
      if (((c[6] = (15 & c[6]) | 64), (c[8] = (63 & c[8]) | 128), t))
        for (var s = 0; s < 16; ++s) t[o + s] = c[s];
      return t || a(c);
    };
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    n(6), n(11);
    class r {
      constructor() {
        return r.instance
          ? r.instance
          : ((this.storagePrefix = 'JS-Band-'), (r.instance = this), this);
      }
      setItem(e, t) {
        let n = t;
        'object' == typeof t && (n = JSON.stringify(t)),
          localStorage.setItem(`${this.storagePrefix}${e}`, n);
      }
      getItem(e) {
        const t = localStorage.getItem(`${this.storagePrefix}${e}`);
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
    }
    var a = r;
    const o = new a();
    var c = (e, t, n, r) => {
      const a = document.createElement('div');
      a.classList.add('formRoot');
      const c = document.createElement('form'),
        s = document.createElement('button');
      (s.textContent = 'Save'),
        (s.type = 'submit'),
        c.addEventListener('submit', n => {
          n.preventDefault();
          const a = n.target.getElementsByClassName('formField-js'),
            c = {};
          Array.from(a).forEach(e => {
            (c[e.name] = e.value), (e.value = '');
          });
          const s = o.getItem(e),
            i = t(c),
            d = s ? [...s, i] : [i];
          o.setItem(e, d), r && r();
        });
      const i = document.createElement('h3');
      return (
        (i.textContent = e),
        (i.className = 'form-title'),
        n.forEach(({ name: e, type: t, options: n }) => {
          const r = document.createElement('div');
          r.classList.add('fieldRoot');
          const o = document.createElement('label');
          let d;
          switch (((o.textContent = e), t)) {
            case 'text':
            case 'number':
              (d = document.createElement('input')).setAttribute('name', e),
                d.setAttribute('type', t);
              break;
            case 'select':
              (d = document.createElement('select')).setAttribute('name', e),
                n.forEach(e => {
                  const t = document.createElement('option');
                  (t.value = e), (t.textContent = e), d.appendChild(t);
                });
              break;
            default:
              d = null;
          }
          d.classList.add('formField-js'),
            (d.required = !0),
            a.appendChild(i),
            o.appendChild(d),
            r.appendChild(o),
            c.appendChild(r),
            c.appendChild(s),
            a.appendChild(c);
        }),
        a
      );
    };
    const s = new a();
    var i = (e, t, n) => {
      const r = document.getElementById('root'),
        a = document.createElement('div');
      return (
        (a.id = n),
        r.appendChild(a),
        () => {
          const n = s.getItem(t),
            r = e(n);
          (a.innerHTML = ''), a.appendChild(r);
        }
      );
    };
    const d = [
        { name: 'model', type: 'text' },
        { name: 'producedYear', type: 'number' },
        { name: 'capacity', type: 'number' },
        { name: 'averageSpeed', type: 'number' },
      ],
      l = [
        { name: 'licensePlate', type: 'text' },
        { name: 'typeOfGas', type: 'select', options: ['Gasoline', 'Diesel'] },
      ],
      u = [
        { name: 'model', type: 'select', options: [] },
        { name: 'cargoCost', type: 'number' },
        { name: 'distanceCost', type: 'number' },
      ],
      p = new a();
    var m = class {
      constructor({ model: e, cargoCost: t, distanceCost: n }) {
        (this.model = e), (this.cargoCost = t), (this.distanceCost = n);
      }
    };
    var f = class {
        static create(e) {
          return new m(e);
        }
      },
      v = (e, t) => {
        const n = document.createElement('table');
        n.classList.add('table');
        const r = document.createElement('caption');
        r.textContent = e;
        const a = document.createElement('thead'),
          o = document.createElement('tbody');
        return (
          o.classList.add('tbody'),
          console.log(t),
          t.forEach(e => {
            const t = document.createElement('th');
            'averageSpeed' === e && ((e += ' km'), console.log(e)),
              console.log(e),
              (t.textContent = e),
              a.appendChild(t);
          }),
          n.appendChild(r),
          n.appendChild(a),
          n.appendChild(o),
          e => {
            if (((o.innerHTML = ''), e))
              e.forEach(e => {
                const n = document.createElement('tr');
                t.forEach(t => {
                  const r = document.createElement('td');
                  r.classList.add('td'), (r.textContent = e[t]), n.appendChild(r);
                }),
                  o.appendChild(n);
              });
            else {
              const e = document.createElement('div');
              (e.textContent = 'No Data'), o.appendChild(e);
            }
            return n;
          }
        );
      },
      y = n(2);
    var h = class {
      constructor({ model: e, producedYear: t, capacity: n, averageSpeed: r }) {
        (this.id = Object(y.v4)()),
          (this.model = e),
          (this.producedYear = t),
          (this.capacity = n),
          (this.averageSpeed = r);
      }
      showCapacityInPounds() {
        return 2.20462 * this.capacity;
      }
    };
    var g = class extends h {
      constructor({
        model: e,
        producedYear: t,
        capacity: n,
        averageSpeed: r,
        name: a,
        countOfTeam: o,
      }) {
        super({ model: e, producedYear: t, capacity: n, averageSpeed: r }),
          (this.name = a),
          (this.countOfTeam = o);
      }
      showAverageSpeed() {
        console.log(`${this.averageSpeed}nm`);
      }
    };
    var C = class extends h {
      constructor({
        model: e,
        producedYear: t,
        capacity: n,
        averageSpeed: r,
        licensePlate: a,
        typeOfGas: o,
      }) {
        super({ model: e, producedYear: t, capacity: n, averageSpeed: r }),
          (this.licensePlate = a),
          (this.typeOfGas = o);
      }
      showAverageSpeed() {
        alert(`${this.averageSpeed}km`);
      }
    };
    var b = class {
      static create(e, t) {
        const n = new C(t);
        switch (e) {
          case 'ship':
            return new g(t);
          case 'truck':
            return new C(t);
          default:
            return n;
        }
      }
    };
    const E = document.getElementById('root'),
      x = document.createElement('div');
    (x.className = 'formsContainer'), E.appendChild(x);
    const S = [...d, { name: 'name', type: 'text' }, { name: 'countOfTeam', type: 'number' }],
      w = [...d, ...l],
      O = ['id', ...S.map(e => e.name)],
      k = ['id', ...w.map(e => e.name)],
      j = u.map(e => e.name),
      I = i(v('Ships List', O), 'ships'),
      P = i(v('Truck list', k), 'trucks'),
      L = i(v('Costs Of Delivery', j), 'costsOfDelivery'),
      T = (() => {
        const e = document.createElement('div');
        return (
          (e.className = 'costOfDeliveryContainer'),
          document.querySelector('.formsContainer').appendChild(e),
          t => {
            const n = c(
              'costsOfDelivery',
              e => f.create(e),
              (() => {
                const e = [...(p.getItem('ships') || []), ...(p.getItem('trucks') || [])].map(
                  ({ model: e }) => e,
                );
                return [
                  { ...u.find(e => 'model' === e.name), options: e },
                  ...u.filter(e => 'model' !== e.name),
                ];
              })(),
              t,
            );
            (e.innerHTML = ''), e.appendChild(n);
          }
        );
      })(),
      A = c('ships', e => b.create('ship', e), S, () => {
        I(), T(L);
      }),
      M = c('trucks', e => b.create('truck', e), w, () => {
        P(), T(L);
      });
    x.appendChild(A), x.appendChild(M), T(), I(), P(), L();
  },
  function(e, t) {},
  ,
  ,
  ,
  ,
  function(e, t) {},
]);
