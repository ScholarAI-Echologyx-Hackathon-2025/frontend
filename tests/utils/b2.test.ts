import { extractFileIdFromUrl, isB2Url } from "@/lib/b2";

describe("B2 helper functions", () => {
    describe("extractFileIdFromUrl", () => {
        const sampleUrl =
            "https://f003.backblazeb2.com/b2api/v3/b2_download_file_by_id?fileId=4_z4c3b8e37e9f469f05fbb0518_f105f5d4ca0e8a717_d20240201_m161835_c001_v0001133_t0036";

        it("returns fileId part from valid url", () => {
            const fileId = extractFileIdFromUrl(sampleUrl);
            expect(fileId).toBe(
                "4_z4c3b8e37e9f469f05fbb0518_f105f5d4ca0e8a717_d20240201_m161835_c001_v0001133_t0036"
            );
        });

        it("throws for url without fileId", () => {
            const invalidUrl = "https://example.com";
            expect(() => extractFileIdFromUrl(invalidUrl)).toThrow();
        });
    });

    describe("isB2Url", () => {
        it("detects B2 urls", () => {
            expect(
                isB2Url(
                    "https://f003.backblazeb2.com/b2api/v3/b2_download_file_by_id?fileId=abc"
                )
            ).toBe(true);
        });

        it("returns false for non B2 urls", () => {
            expect(isB2Url("https://example.com"))
                .toBe(false);
        });
    });
}); 