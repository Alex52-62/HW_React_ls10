import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { List, Button } from "@material-ui/core";

//import { ChatItemView } from "../ChatItemView";

describe("Button", () => {
  it.todo("matches snapshot");

  it("calls when clicked", () => {
    const onDelete = jest.fn();
    const component = render(
      <Button onClick={onDelete}>
        <span>Hello Button</span>
      </Button>
    );

    const clickable = component.getByRole("button");
    fireEvent(clickable, new MouseEvent("click", { bubbles: true }));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  /// this test will pass if delete <Link/>

  /*it("matches snapshot", () => {
    const component = render(<ChatItemView />);

    expect(component).toMatchSnapshot();
  });*/
});
