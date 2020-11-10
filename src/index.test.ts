import { replace } from ".";

test('should work', () => {
  const arr = [
    { id: 1, name: 'Foo' },
    { id: 2, name: 'Bar' },
    { id: 3, name: 'Baz' },
  ]
  expect(replace(arr, elem => elem.id === 2, { name: 'Bar*' })).toEqual([
    { id: 1, name: 'Foo' },
    { id: 2, name: 'Bar*' },
    { id: 3, name: 'Baz' },
  ])
})
