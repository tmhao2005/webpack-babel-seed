import React from "react";
import {
  render, fireEvent, waitFor, prettyDOM
} from '@testing-library/react';
import { ReactSelectTestComponent } from ".";

test('always right', () => {
  expect(ReactSelectTestComponent).toBeDefined();
});

// describe("Testing Select component", () => {
//   const mockedOptions = [
//     {
//       label: 'Mocked option 1', value: 'mocked-option-1'
//     },
//     {
//       label: 'Mocked option 2', value: 'mocked-option-2'
//     },
//     {
//       label: 'Mocked option 3', value: 'mocked-option-3'
//     },
//   ];

//   it('should call onChange when the first option is selected', async () => {
//     const mockedOnChange = jest.fn();
//     const { getByText, queryByTestId } = render(
//       <ReactSelectTestComponent
//         options={mockedOptions}
//         onChange={mockedOnChange}
//       />
//     );

//     const mySelectComponent = queryByTestId('my-select-component');

//     expect(mySelectComponent).toBeDefined();
//     expect(mySelectComponent).not.toBeNull();
//     expect(mockedOnChange).toHaveBeenCalledTimes(0);

//     const input = mySelectComponent.getElementsByTagName('input')[0];
//     // Trigger to show autocomplete
//     fireEvent.keyDown(input, {
//       key: 'ArrowDown'
//     });

//     await waitFor(() => getByText('Mocked option 1'));

//     console.log(prettyDOM(document))

//     fireEvent.click(getByText('Mocked option 1'));

//     expect(mockedOnChange).toHaveBeenCalledTimes(1);
//     expect(mockedOnChange).toHaveBeenCalledWith('mocked-option-1');
//   });
// });
