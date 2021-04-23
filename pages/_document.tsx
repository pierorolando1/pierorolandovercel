import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="description" content="Piero Rolando Portafolio Website" />
          <meta 
            charSet="UTF-8"
          />
          <meta name="keywords" content="Fullstack developer, freelancer, Piero Rolando" />
          {/* Nprogress css */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          />
           <meta name="robots" content="index"/>
          <link 
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" 
            rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <title>Inicio | Piero Rolando</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
