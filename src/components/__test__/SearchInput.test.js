import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from "../custom/SearchInput";
import '@testing-library/jest-dom'


test("SearchInput component renders correctly", () => {
  render(<SearchInput />);
  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();
});

test("SearchInput component triggers onChange event", () => {
  const handleChange = jest.fn();
  render(<SearchInput onChange={handleChange} />);
  const searchInput = screen.getByPlaceholderText("Search");
  fireEvent.change(searchInput, { target: { value: "example" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(searchInput.value).toBe("example");
});
