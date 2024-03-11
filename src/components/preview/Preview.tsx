import styles from "./Preview.module.css";

const Preview = () => {
    const HTML_EXAMPLE = 
    <>
        <h1>Welcome to Markdown</h1>

        <p>Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.</p>

        <h2>How to use this?</h2>

        <ol>
            <li>Write markdown in the markdown editor window</li>
            <li>See the rendered markdown in the preview window</li>
        </ol>

        <h3>Features</h3>

        <ul>
            <li>Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists</li>
            <li>Name and save the document to access again later</li>
            <li>Choose between Light or Dark mode depending on your preference</li>
        </ul>

        <blockquote>
            <p>This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this <a href="https://www.markdownguide.org/cheat-sheet/">markdown cheatsheet</a>.</p>
        </blockquote>

        <h4>Headings</h4>

        <p>To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You&#39;ll see in this guide that we&#39;ve used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n</p>

        <h5>Lists</h5>

        <p>You can see examples of ordered and unordered lists above.</p>

        <h6>Code Blocks</h6>
        
        <p>This markdown editor allows for inline-code snippets, like this: <code>&lt;p&gt;I&#39;m inline&lt;/p&gt;</code>. It also allows for larger code blocks like this:</p>
    </>;

    return (
        <section id="PREVIEW" className={styles.wrapper} aria-label="preview document">
            <header>
                <h2 className="text-style-heading-s">PREVIEW</h2>
                <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z" fill="#7C8187"/>
                </svg>
            </header>
            <main>
                <div className={styles.textBox}>
                    {HTML_EXAMPLE}
                </div>
            </main>
            <footer></footer>
        </section>
    )
}

export default Preview;