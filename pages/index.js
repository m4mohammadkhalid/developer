import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
  <section className="main">
    <div className="main-content">
      <span className="hello">Hello Everyone!</span>
      <h1 className="main-title">We're Amokachi, a team of<br />
        Interactive Developers &amp; UX Designers.</h1>
      <div className="social">
        <a href="#"><i className="fab fa-twitter" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-dribbble" /></a>
        <a href="#"><i className="fab fa-telegram-plane" /></a>
      </div>
    </div>
    <a className="down-arrow">
      <div className="down-inner">
        <img src="img/icons/down-arrow.svg" alt="mohammad khalid" />
        <div className="line" />
      </div>
    </a>
    <div className="language">
      <a className="active" href="#">En.</a>
      <a href="#">Fr.</a>
    </div>
    <div id="particles-js" />
  </section>
  {/* PORTFOLIO CONTENT
================================================== */}
  <section className="content bottom_90">
    <div className="container">
      <div className="vf">
        <div className="zigzag">
          <svg viewBox="0 0 69.172 14.975" width={37} height={28} y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.357,12.26 10.807,2.81 20.328,12.332
              29.781,2.879 39.223,12.321 48.754,2.79  58.286,12.321" />
          </svg>
        </div>
        <p>View Filter</p>
      </div>
      <div className="portfolio_filter">
        <ul>
          <li><a className="select-cat" data-filter="*" href="#">All Works</a></li>
          <li><a data-filter=".web-design" href="#">Web Design</a></li>
          <li><a data-filter=".branding" href="#">Branding</a></li>
          <li><a data-filter=".photography" href="#">Photography</a></li>
        </ul>   
      </div>
      <div className="isotope_items row">
        {/* Item */}
        <a href="portfolio-detail.html" className="single_item web-design col-md-6">
          <figure>
            <img src="img/portfolio/01.jpg" alt="mohammad khalid" />
            <figcaption>
              <ul>
                <li> <span>web design</span> </li>
                <li><h3 className="title">Natural Squares</h3></li>
              </ul>
            </figcaption>
          </figure>
        </a>
        {/* Item */}
        <a href="portfolio-detail.html" className="single_item photography col-md-6">
          <figure>
            <img src="img/portfolio/02.jpg" alt="mohammad khalid" />
            <figcaption>
              <ul>
                <li> <span>photography</span> </li>
                <li><h3 className="title">Hipster Manuel</h3></li>
              </ul>
            </figcaption>
          </figure>
        </a>
        {/* Item */}
        <a href="portfolio-detail.html" className="single_item web-design col-md-3">
          <figure>
            <img src="img/portfolio/04.jpg" alt="mohammad khalid" />
            <figcaption>
              <ul>
                <li> <span>web design</span> </li>
                <li><h3 className="title">Dark Places of Man</h3></li>
              </ul>
            </figcaption>
          </figure>
        </a>
        {/* Item */}
        <a href="portfolio-detail.html" className="single_item branding col-md-3">
          <figure>
            <img src="img/portfolio/05.jpg" alt="mohammad khalid" />
            <figcaption>
              <ul>
                <li> <span>branding</span> </li>
                <li><h3 className="title">Chinese Girl</h3></li>
              </ul>
            </figcaption>
          </figure>
        </a>
        {/* Item */}
        <a href="portfolio-detail.html" className="single_item branding col-md-6">
          <figure>
            <img src="img/portfolio/03.jpg" alt="mohammad khalid" />
            <figcaption>
              <ul>
                <li> <span>branding</span> </li>
                <li><h3 className="title">Retro Zielona Revelujca</h3></li>
              </ul>
            </figcaption>
          </figure>
        </a>
        {/* Item */}
        <a href="portfolio-detail.html" className="single_item photography col-md-6">
          <figure>
            <img src="img/portfolio/06.jpg" alt="mohammad khalid" />
            <figcaption>
              <ul>
                <li> <span>photography</span> </li>
                <li><h3 className="title">Muse Metta Food</h3></li>
              </ul>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  </section>
</div>

    </>
  )
}
