import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";


describe("Sidebar Functionality", () => {
    // Arrange
    const ren = render(<App />);
    const user = userEvent.setup();
    
    test("Check if we can open sidebar", async () => {
        // Arrange
        const openSidebarButton = ren.getByRole("button", {name: "open sidebar button"});
        // Act
        await user.click(openSidebarButton);
        // Assert
        expect(ren.queryByRole("heading", {name: "MY DOCUMENTS"})).not.toBeNull();
    })
    
    test("check if we can close sidebar", async () => {
        // Arrange
        const closeSidebarButton = ren.getByRole("button", {name:"close sidebar button"});
        // Act
        await user.click(closeSidebarButton);
        // Assert
        expect(ren.queryByRole("heading", {name: "MY DOCUMENTS"})).toBeNull();
    })
})