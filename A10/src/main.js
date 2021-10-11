import {km2mi, mi2km} from "./dUtils";
import {c2f, c2k, f2c, f2k, k2c, k2f} from "./tUtils";

const km = document.getElementById("km");
const mi = document.getElementById("mi");

km.addEventListener("input", (e) => {
    mi.value = km2mi(Number(km.value));
});

mi.addEventListener("input", (e) => {
    km.value = mi2km(Number(mi.value));
});

const c = document.getElementById("c");
const f = document.getElementById("f");
const k = document.getElementById("k");

c.addEventListener("input", (e) => {
    let val = Number(c.value);
    f.value = c2f(val);
    k.value = c2k(val);
});

f.addEventListener("input", (e) => {
    let val = Number(f.value);
    c.value = f2c(val);
    k.value = f2k(val);
});

k.addEventListener("input", (e) => {
    let val = Number(k.value);
    c.value = k2c(val);
    f.value = k2f(val);
});