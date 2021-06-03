import { sum } from "./calculator";

describe("Calculator", () => {
  describe("sum", () => {
    it("should add integer", () => {
      // Arrange
      const x = 6;
      const y = 4;

      // Act
      const result = sum(x, y);

      // Assert
      expect(result).toEqual(10);
    });
  });
});
