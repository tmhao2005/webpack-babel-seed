import { replace, throwError } from ".";

test("should work", () => {
  const arr = [
    { id: 1, name: "Foo" },
    { id: 2, name: "Bar" },
    { id: 3, name: "Baz" },
  ];
  expect(replace(arr, (elem) => elem.id === 2, { name: "Bar*" })).toEqual([
    { id: 1, name: "Foo" },
    { id: 2, name: "Bar*" },
    { id: 3, name: "Baz" },
  ]);
});

test("should wait a async function to throw", async () => {
  await expect(throwError()).rejects.toThrow("foo");
});
