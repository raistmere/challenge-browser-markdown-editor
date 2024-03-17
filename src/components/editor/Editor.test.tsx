import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react"
import { userEvent, pointerKey } from "@testing-library/user-event"
import Editor from "./Editor.tsx";

let mock_markdown: string = "# Welcome to Markdown";

const mock_updateMarkdown = (value: string) => {
    mock_markdown = value;
}

describe("Editor.tsx", () => {
    // Arrange
    const ren = render(<Editor markdown={mock_markdown} updateMarkdown={mock_updateMarkdown}/>);
    const user = userEvent.setup();
    const editorTextarea = ren.getByLabelText("edit markdown text");

    test("Check displayed markdown text", () => {
        // Act
        // Assert
        expect(editorTextarea.textContent).toBe("# Welcome to Markdown");
    })
    
    test("Check if markdown gets updated correctly", async () => {
        // Act
        await user.type(editorTextarea, "!"); // Simple add to the markdown to make sure we are changing it.
        // Assert
        expect(mock_markdown).toBe("# Welcome to Markdown!");
    });
})