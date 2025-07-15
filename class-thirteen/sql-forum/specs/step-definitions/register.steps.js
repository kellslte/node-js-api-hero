import { defineFeature, loadFeature } from "jest-cucumber";
import request from "supertest";
import { app } from "../../src/app.setup.js";
import { connectToDatabase } from "../../src/common/db.common.js";
import { join } from "path";

const feature = loadFeature(
  join(process.cwd(), "specs/features/register.feature")
);

defineFeature(feature, (test) => {
  beforeAll(async () => {
    await connectToDatabase();
  });

  let customWorld;

  beforeEach(() => {
    customWorld = {
      response: null,
    };
  });

  test("Successful user registration", ({ given, when, then }) => {
    given("the registration system is available", () => {
      // System is available by default
    });

    when(
      /^I submit registration with username "(.*)", name "(.*)", email "(.*)", password "(.*)" and confirmPassword "(.*)"$/,
      async (username, name, email, password, confirmPassword) => {
        customWorld.response = await request(app).post("/api/auth/register").send({
          name,
          username,
          email,
          password,
          confirmPassword,
        });
      }
    );

    then("I should receive a successful registration message", () => {
      expect(customWorld.response.status).toBe(201);
      expect(customWorld.response.body.success).toBe(true);
      expect(customWorld.response.body.message).toBe(
        "User registered successfully"
      );
      expect(customWorld.response.body.data).toHaveProperty("id");
      expect(customWorld.response.body.data).toHaveProperty("email");
      expect(customWorld.response.body.data).toHaveProperty("username");
    });
  });
});
