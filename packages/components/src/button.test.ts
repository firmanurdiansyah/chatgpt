import { describe, expect, it } from "vitest";
import { buttonClassName } from "./button";

describe("buttonClassName", () => {
  it("produces semantic variant and size classes", () => {
    expect(buttonClassName("primary", "md")).toBe("ui-button ui-button--primary ui-button--md");
  });
});
