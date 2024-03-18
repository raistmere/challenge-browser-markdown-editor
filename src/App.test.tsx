import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Check if we can open sidebar", async () => {
    // Arrange
    const ren = render(<App />);
    const user = userEvent.setup();
    const openSidebarButton = ren.getByRole("button", {name: "open sidebar button"});
    // Act
    await user.click(openSidebarButton);
    // Assert
    expect(ren.getByRole("heading", {name: "MY DOCUMENTS"})).not.toBeNull();
})