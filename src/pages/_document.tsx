import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'



export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/fontawesome.min.css" crossOrigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"  />
        <script src="/static/main.js" />
      </Head>
      <body>
        <div id="preloader">
          <div className="loader_line"></div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
