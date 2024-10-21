import React from 'react'

function Hero({title,subTitle,description,imgSrc ,none}) {
  return (
    <>
        <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>{title} <span clsas="d-block">{subTitle}</span></h1>
                                <p className={`mb-4 ${none}`}>{description}</p>
                                <p className={none}><a href className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
                            </div>
                        </div>
                        <div className={`col-md-5 col-lg-7 ${none}`}>
                            <div className="hero-img-wrap">
                                <img src={imgSrc} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Hero
