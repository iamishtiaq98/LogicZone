import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    try {
      const sheets = new ServerStyleSheets();
      const originalRenderPage = ctx.renderPage;

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      // Return the expected object structure with 'html' prop
      return {
        ...initialProps,
        html: initialProps.html, // You may not need to modify this property
        // Add other properties as needed
      };
    } catch (error) {
      console.error('Error in getInitialProps:', error);
      return {}; // Return an empty object or handle the error appropriately
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;