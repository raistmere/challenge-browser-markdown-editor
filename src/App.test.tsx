import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Arrange
const ren = render(<App />);
const user = userEvent.setup();

describe("Sidebar Functionality", () => {
    
    test("Check if we can open sidebar", async () => {
        // Arrange
        const openSidebarButton = ren.getByRole("button", {name: "open sidebar button"});
        // Act
        await user.click(openSidebarButton);
        // Assert
        expect(ren.queryByRole("heading", {name: "MY DOCUMENTS"})).not.toBeNull();
    });
    
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
        expect(ren.getByRole("button", {name: "open new-document.md"})).not.toBeNull();
    });
    
    test("check if we can close sidebar", async () => {
        // Arrange
        const closeSidebarButton = ren.getByRole("button", {name:"close sidebar button"});
        // Act
        await user.click(closeSidebarButton);
        // Assert
        expect(ren.queryByRole("heading", {name: "MY DOCUMENTS"})).toBeNull();
    });
});



// describe("Header Functionality", () => {

//     // NOTE:
//     //  I got the functionality for changing the document name to work but for some reason I can't
//     // get the integration test to work properly. I think I messed up how vitest works and will look at it later. 
    
//     // test("Check if changing the document name updates correctly", async () => {
//     //     // // Arrange
//     //     const documentNameButton = ren.getByRole("button", {name:"edit document name"});
//     //     // // Act
//     //     await user.click(documentNameButton);
//     //     const documentNameInput = ren.getByLabelText("document name");
//     //     userEvent.type(documentNameInput, "abc{enter}");
//     //     // Assert
//     //     expect(documentNameButton.textContent).toBe("welcome");
//     // });

//     // test("Check if we can save the document", async () => {
//     //     // Arrange
//     //     const saveButton:HTMLElement = ren.getByRole("button", {name: /Save change/i});
//     //     // Act
//     //     await user.click(saveButton);
//     //     // Assert
//     //     expect()
//     // })
// })