import React from 'react'
import style from "./Web.module.css"

const Carousel = () => {
  return (<>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous" />
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className={`carousel-inner ${style.carouselResizer}`}>
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/669319514/photo/indian-concierge-welcome-guest-at-hotel-entrance-agra-india.jpg?s=1024x1024&w=is&k=20&c=So7A0MBLh2ecmkJoQHgDaps4EAUWEpTwaoebzH9zwKo=" className={`${style.carousel} d-block w-100`} alt="Photo Gallery" />
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/139959582/photo/entrance-lobby-of-a-luxurious-hotel.jpg?s=1024x1024&w=is&k=20&c=gw73CM0t_hwxFkUiCqXLli61AQOYHvop4We2op8TL6E=" className={`${style.carousel} d-block w-100`} alt="Photo Gallery" />
    </div>
    <div className="carousel-item">
    <img src="https://media.istockphoto.com/id/172646761/photo/luxury-lobby-banff-springs-hotel.jpg?s=1024x1024&w=is&k=20&c=67KWBbBT-bF3xAcdR1ytURDSKjE7ldrwrAz343Fj2KY=" className={`${style.carousel} d-block w-100`} alt="Photo Gallery" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
  )
}

export default Carousel