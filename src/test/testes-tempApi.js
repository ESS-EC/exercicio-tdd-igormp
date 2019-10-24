const chai = require("chai");
const chaiHttp = require("chai-http");
const tempApi = require("../tempApi");

const { expect } = chai;

chai.use(chaiHttp);

describe("Converts from C to C", () => {
  let temp = 20;
  it("returns the same input temperature", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=C&para=C")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(20);
        done();
      });
  });
});

describe("Converts from C to K", () => {
  let temp = 20;
  it("returns the temperature in Kelvin", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=C&para=K")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(293.15);
        done();
      });
  });
});

describe("Converts from C to F", () => {
  let temp = 20;
  it("returns the temperature in Fahrenheit", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=C&para=F")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(68);
        done();
      });
  });
});

describe("Converts from F to F", () => {
  let temp = 68;
  it("returns the same input temperature", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=F&para=F")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(68);
        done();
      });
  });
});

describe("Converts from F to C", () => {
  let temp = 68;
  it("returns the temperature in Celsius", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=F&para=C")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(20);
        done();
      });
  });
});

describe("Converts from F to K", () => {
  let temp = 68;
  it("returns the temperature in Kelvin", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=F&para=K")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(293.15);
        done();
      });
  });
});

describe("Converts from K to K", () => {
  let temp = 293.15;
  it("returns the same input temperature", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=K&para=K")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(293.15);
        done();
      });
  });
});

describe("Converts from K to C", () => {
  let temp = 293.15;
  it("returns the temperature in Celsius", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=K&para=C")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(20);
        done();
      });
  });
});

describe("Converts from K to F", () => {
  let temp = 293.15;
  it("returns the temperature in Fahrenheit", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=K&para=F")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(68);
        done();
      });
  });
});

describe('Tries missing "de"', () => {
  let temp = 293.15;
  it("returns an error indicating a missing parameter", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&para=F")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("error");
        expect(res.body.result).to.equals("missing parameter");
        done();
      });
  });
});

describe('Tries missing "para"', () => {
  let temp = 293.15;
  it("returns an error indicating a missing parameter", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?valor=" + temp + "&de=K")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("error");
        expect(res.body.result).to.equals("missing parameter");
        done();
      });
  });
});

describe('Tries missing "valor"', () => {
  it("returns an error indicating a missing parameter", done => {
    chai
      .request(tempApi)
      .get("/converterTemperatura?de=K&para=C")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("error");
        expect(res.body.result).to.equals("missing parameter");
        done();
      });
  });
});
