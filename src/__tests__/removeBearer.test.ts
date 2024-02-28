import { removeBearer } from ".."

describe("Unit test: remove Bearer", () => {
    test("remove Bearer should work correctly", () => {
        const token = removeBearer("Bearer 1234");

        expect(token).toBe("1234");
    })
})