const request = require("supertest");
const app = require("../../app");

const mongoose = require("mongoose");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

describe("test signup controllers", () => {
  beforeAll(() => {
    mongoose
      .connect(DB_HOST)
      .then(() => app.listen(PORT))
      .catch((error) => {
        console.log(error.message);
        process.exit(1);
      });
  });

  test("signup ", async () => {
    const {
      status,
      body: {
        data: { user },
      },
    } = await request(app)
      .post("/api/users/signup")
      .set("Content-type", "application/json")
      .send({
        email: "test@gmail.com",
        password: "123456",
        subscription: "starter",
      });

    expect(status).toBe(201);
    expect(typeof user).toBe("object");
    expect(typeof user.email).toBe("string");
    expect(typeof user.subscription).toBe("string");
  });
});
