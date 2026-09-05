// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
//   };
//   return color;
// }

// const x = makeColor(35, 255, 150);

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
// };
// Color.prototype.rgba = function (o = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b}, ${o})`;
// };

// const c1 = new Color(40, 255, 60);

//MOST BEST AND CRAZY
class Color2 {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.calcHSL();
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  calcHSL() {
    // Make r, g, and b fractions of 1
    let { r, g, b } = this;
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }
    h *= 100;
    s *= 100;
    l *= 100;
    this.h = h;
    this.l = l;
    this.s = s;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
}

const c2 = new Color2(40, 255, 60);
const c3 = new Color2(232, 176, 150);

//SUPER AND EXTENDS!
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}
class Dog extends Pet {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  bark() {
    return `${this.name} of breed ${this.breed} is barking`;
  }
}
class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  meow() {
    return `${this.name} with color ${this.color} is meowing`;
  }
}
