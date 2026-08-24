import { describe, expect, it } from "vitest";
import { getThemeAttribute, mergeBrandOverride } from "./index";

describe("theme contract", () => {
  it("normalizes system mode to a DOM-safe theme attribute", () => {
    expect(getThemeAttribute("finance", "system")).toEqual({ theme: "finance", mode: "system" });
  });

  it("keeps brand overrides separate from the base theme", () => {
    expect(mergeBrandOverride({ accent: "var(--brand-accent)" }, { accent: "#123456" })).toEqual({
      accent: "#123456",
    });
  });
});
