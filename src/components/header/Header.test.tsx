import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import Header from "./Header";





test("Check if we can edit document name", async () => {
    // Arrange
    const ren = render(<Header isSidebar={false} openSidebar={() => console.log("open sidebar")} closeSidebar={() => console.log("close sidebar")} documentName="document-01.md" />);
    const user = userEvent.setup();
    const documentNameButton = ren.getByRole("button", {name:"edit document name"});
    // Act
    await user.click(documentNameButton);
    // Assert
    expect(await ren.findByLabelText("document name")).not.toBeNull();
});