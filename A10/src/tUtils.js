export const f2k = (x) => {
    return c2k(f2c(x)); //the formula at http://www.solano.edu/academic_success_center/forms/math/Temperature%20Scales.pdf actually simplifies to this so yeah
};

export const k2f = (x) => {
    return c2f(k2c(x)); //same here
};

export const c2f = (x) => {
    return x * 1.8 + 32;
};

export const f2c = (x) => {
    return (x - 32) / 1.8;
};

export const c2k = (x) => {
    return x + 273.15;
};

export const k2c = (x) => {
    return x - 273.15;
};