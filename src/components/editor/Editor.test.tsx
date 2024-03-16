import { expect, test } from "vitest";
import { render } from "@testing-library/react"
import Editor from "./Editor.tsx";

const mock_Markdown: string = "# Welcome to Markdown";

test("Check displayed markdown text", () => {
    // Arrange
    const ren = render(<Editor markdown={mock_Markdown} updateMarkdown={() => console.log("markdown updated")}/>);
    const editorTextarea = ren.getByLabelText("edit markdown text");
    // Act
    // Assert
    expect(editorTextarea.textContent).toBe("# Welcome to Markdown");
})