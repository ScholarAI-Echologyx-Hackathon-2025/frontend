import { formatDate } from "@/lib/utils/date";

describe("formatDate", () => {
    it("formats ISO date strings to a readable US date", () => {
        const isoDateString = "2020-04-15T12:00:00Z";
        const result = formatDate(isoDateString);
        expect(result).toBe("Apr 15, 2020");
    });
}); 