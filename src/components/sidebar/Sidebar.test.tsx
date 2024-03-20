import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "./Sidebar.tsx";

const mock_myDocumentsData : Array<{id:string, createdAt:string, name:string, content:string}> = [
    {
        "id": (crypto.randomUUID).toString(),
        "createdAt": "04-01-2022",
        "name": "untitled-document.md",
        "content": "# HELLO WORLD"
    },
    {
        "id": (crypto.randomUUID).toString(),
        "createdAt": "04-01-2022",
        "name": "welcome.md",
        "content": ""
    }
]

// Arrange
const ren = render(<Sidebar myDocuments={mock_myDocumentsData} openDocument={() => null} createNewDocument={() => console.log("New Document")}/>);

test("Check if My Documents get loaded",() => {
    // Assert
    expect(ren.getByText("welcome.md")).not.toBeNull();
});