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
    
    test("Check if we can open a document to screen", async () => {
        // Arrange
        const documentButton = ren.getByRole("button", {name:`open welcome.md`});
        // Act
        user.click(documentButton);
        // Assert
        expect(await ren.findByRole("heading", {name:"Welcome to Markdown"})).not.toBeNull();
    });

    test("Check if we can create a new document", async () => {
        // Arrange
        const newDocumentButton = ren.getByRole("button", {name:"+ New Document"})
        // Act
        await user.click(newDocumentButton);
        // Assert
        expect(ren.queryByRole("heading", {name: "new-document.md"})).not.toBeNull();
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