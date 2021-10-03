import React from "react";
import { render, mock, shallow } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Ava } from "../AvatarComponent";

describe("Avatar", () => {
  it("matches snapshot", () => {
    const component = render(<Ava />);

    expect(component).toMatchSnapshot();
  });
});
