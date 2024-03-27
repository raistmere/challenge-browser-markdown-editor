import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Preview from "./Preview";

let mock_markdown: string = "# Welcome to Markdown";

test("Check if preview displays correctly", async () => {
    // Arrange
    const ren = render(<Preview markdown={mock_markdown} isPreview={false} disablePreview={() => console.log("Disable preview")} enablePreview={() => console.log("Enable preview")} isDarkMode={false}/>);
    const previewMarkdown = await ren.findByText("Welcome to Markdown");
    // Act
    // Assert
    expect(previewMarkdown.textContent).toBe("Welcome to Markdown");
});