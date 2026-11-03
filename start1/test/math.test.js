import { test } from "node:test";
import assert from "node:assert";
import { add, divide } from "../src/math.js";

test("add", () => assert.strictEqual(add(2, 3), 5));
test("divide", () => assert.strictEqual(divide(6, 3), 2));
test("divide by zero throws", () => assert.throws(() => divide(1, 0)));