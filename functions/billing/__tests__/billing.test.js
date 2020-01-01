import { calculateCost } from "../../../libs/billing-lib";

describe("Suite: calculateCost (billing-lib)", () => {
  test("Lowest tier: 'cost' should equal 'expectedCost'", () => {
    const storage = 10;

    const cost = 4000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
  });

  test("Middle tier: 'cost' should equal 'expectedCost'", () => {
    const storage = 100;

    const cost = 20000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
  });

  test("Highest tier: 'cost' should equal 'expectedCost'", () => {
    const storage = 101;

    const cost = 10100;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
  });
});
