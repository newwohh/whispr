import { describe, it, expect } from "bun:test";
import {
  authenticateUser,
  registerUser,
  getTokensForUser,
  verifyAccessToken,
} from "../src/services/auth";
import { findUserByEmail } from "../src/db/sqlite";

describe("AuthServiceTests", () => {
  it("should authenticate a locally created test user", async () => {
    const email = `auth_${crypto.randomUUID()}@example.invalid`;
    const password = crypto.randomUUID();
    await registerUser({ email, name: "Local test user", password, password2: password, tc: "True" });
    expect(await authenticateUser(email, password)).not.toBeNull();
    expect(await authenticateUser(email, crypto.randomUUID())).toBeNull();
  });

  it("should register a new user and allow login", async () => {
    const testEmail = `newuser_${Date.now()}@test.com`;
    const user = await registerUser({
      email: testEmail,
      name: "Test Bun User",
      password: "REDACTED_CONFIGURE_LOCALLY",
      password2: "REDACTED_CONFIGURE_LOCALLY",
      tc: "True",
    });

    expect(user.id).toBeDefined();
    expect(user.email).toBe(testEmail);

    const loggedIn = await authenticateUser(testEmail, "REDACTED_CONFIGURE_LOCALLY");
    expect(loggedIn).not.toBeNull();
    expect(loggedIn?.name).toBe("Test Bun User");
  });

  it("should create valid access and refresh tokens with SimpleJWT claims", async () => {
    const tokens = await getTokensForUser({ id: 1 });
    expect(tokens.access).toBeDefined();
    expect(tokens.refresh).toBeDefined();

    const payload = await verifyAccessToken(tokens.access);
    expect(payload).not.toBeNull();
    expect(payload?.token_type).toBe("access");
    expect(payload?.user_id).toBe("1");
  });
});
