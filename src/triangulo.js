function Triangulo(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangulo.prototype.tipo = function() {
  let res = "";
  if (this.a == this.b && this.b == this.c) res = "Equilatero";
  else if (this.a != this.b && this.b != this.c && this.c != this.a)
    res = "Escaleno";
  else res = "Isosceles";
  return res;
};

Triangulo.prototype.valido = function() {
  return !(
    this.a + this.b <= this.c ||
    this.a + this.c <= this.b ||
    this.b + this.c <= this.a
  );
};

module.exports = Triangulo;
