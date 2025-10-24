import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class BarStarDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="scroll-smooth bg-slate-950">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#121e79" />
        </Head>
        <body className="bg-slate-950 text-slate-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BarStarDocument;
