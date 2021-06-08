/* global supertest */
import "module-alias/register";
import supertest from "supertest";
import app from "@app/index";

describe("Test endpoint response", () => {
  const request = supertest(app);

  it("gets the api endpoint", async () => {
    const resp = await request.get("/api/images");
    expect(resp.status).toBe(200);
    // done();
  });

  it("gets the expected response", async () => {
    const resp = await request
      .get("/api/images")
      .query({ fn: "argentina", w: "200", h: "200" });
    expect(resp.body).toContain(
      "<img src='localhost:3000/api/images?fn=argentina&w='200'&h=200'>"
    );
  });
});

/**
 * 
  "overrides": [
    {
      "files": ["*-test.js","*.spec.js"],
      "rules": {
        "no-unused-expressions": "off"
      }
    }
  ]
 */
