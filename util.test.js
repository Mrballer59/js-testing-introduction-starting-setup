const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
  //   const text2 = generateText("Jacob", 10);
  //   expect(text2).toBe("Jacob (10 years old)");
});

// test("should output data-less test", () => {
//   const text = generateText("", null);
//   expect(text).toBe(" (null years old)");
// });
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});
//
