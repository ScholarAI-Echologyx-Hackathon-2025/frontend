import { cn } from "@/lib/utils/cn";

describe("cn utility", () => {
    it("merges class names into a single string", () => {
        const result = cn("foo", "bar");
        expect(result).toBe("foo bar");
    });

    it("ignores falsy values", () => {
        const result = cn("foo", null as any, undefined as any, false as any, "bar");
        expect(result).toBe("foo bar");
    });

    it("deduplicates tailwind classes, preferring the last occurrence", () => {
        const result = cn("p-2", "p-4");
        expect(result).toBe("p-4");
    });
}); 