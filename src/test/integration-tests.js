const chai = require("chai");
const chaiHttp = require("chai-http");
const trianguloApi = require("../trianguloApi");

const { expect } = chai;

chai.use(chaiHttp);

describe("Tests invalid", () => {
  it("should error out", done => {
    chai
      .request(trianguloApi)
      .get("/triangulo?lado1=3&lado2=4&lado3=50")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("error");
        expect(res.body.result).to.equals("invalid triangle");
        done();
      });
  });
});

describe("Isosceles", () => {
  let temp = 20;
  it("returns Isosceles", done => {
    chai
      .request(trianguloApi)
      .get("/triangulo?lado1=3&lado2=4&lado3=4")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals("Isosceles");
        done();
      });
  });
});

describe("Escaleno", () => {
  it("returns Escaleno", done => {
    chai
      .request(trianguloApi)
      .get("/triangulo?lado1=3&lado2=4&lado3=5")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals("Escaleno");
        done();
      });
  });
});

describe("Equilatero", () => {
  it("returns Equilatero", done => {
    chai
      .request(trianguloApi)
      .get("/triangulo?lado1=5&lado2=5&lado3=5")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals("Equilatero");
        done();
      });
  });
});

describe('Tries missing lado', () => {
  it("returns an error indicating a missing parameter", done => {
    chai
      .request(trianguloApi)
      .get("/triangulo?lado1=3&lado2=4")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("error");
        expect(res.body.result).to.equals("missing parameter");
        done();
      });
  });
});
