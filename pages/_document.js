import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" href="icon-fonts/fontawesome-5.0.6/css/fontawesome-all.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" rel="stylesheet" />
            <link rel="stylesheet" href="css/bootstrap.min.css"/>
            <link rel="stylesheet" href="css/reset.css"/>
            <link rel="stylesheet" href="css/style.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="js/jquery-2.1.4.min.js"></script>
<script src="js/isotope.pkgd.min.js"></script>
<script src="js/packery-mode.pkgd.min.js"></script>  
<script src="js/imagesloaded.pkgd.min.js"></script>      
<script src="js/particles.js"></script>
<script src="js/app.js"></script>
<script src="js/modernizr.js"></script>
<script src="js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument