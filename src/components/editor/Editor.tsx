import styles from "./Editor.module.css";

const Editor = () => {
    const MARKDOWN_EXAMPLE: string = `# Welcome to Markdown
    \n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
    \n\n## How to use this?
    \n\n1. Write markdown in the markdown editor window
    \n\n2. See the rendered markdown in the preview window
    \n\n###Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
    \n\n- Name and save the document to access again later
    \n\n- Choose between Light or Dark mode depending on your preference
    \n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).
    \n\n#### Headings
    \n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n
    \n\n##### Lists
    \n\nYou can see examples of ordered and unordered lists above.
    \n\n###### Code Blocks
    \n\nThis markdown editor allows for inline-code snippets, like this: <p>I'm inline</p>. It also allows for larger code blocks like this:
    `;

    return (
        <section id="EDITOR" className={styles.wrapper} aria-label='edit document'>
            <header>
                <h2 className="text-style-heading-s">MARKDOWN</h2>
                <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z" fill="#7C8187"/>
                </svg>
            </header>
            <main>
                <textarea className="text-style-markdown-code" defaultValue={MARKDOWN_EXAMPLE}/>
            </main>
        </section>
    )
}

export default Editor;