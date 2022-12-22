import Carousel from 'react-bootstrap/Carousel';

function Desc(){
    return(
        <>
            <div className='Desc'>
                <div>
                    <Carousel fade interval={2000}>
                        <Carousel.Item className='home_div'>
                            <img height={500}
                            className="d-block w-100 home_img"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Patents.Carousel.1.PNG"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className='carouseltextcont'>
                                <h1 className='PCarouselh1'>Patents under Cellix Bio</h1>
                                <p className='PCarouselp'>Under <b>Mr. Mahesh Kandula's</b> direction We have created world-class medications that are powerful and effective.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item className='home_div'>
                            <img height={500}
                            className="d-block w-100 home_img"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Patents.Carousel.2.PNG"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <div className='carouseltextcont'>
                                <h1 className='PCarouselh1'>Number of U.S. patents that have been issued or are pending</h1>
                                <ul className='PCarouselul'>
                                    <li className='liCarouselp'>GLOBAL PATENTS: <b>432</b></li>
                                    <li className='liCarouselp'>ISSUED U.S. PATENTS: <b>63</b></li>
                                    <li className='liCarouselp'>PENDING U.S. PATENETS: <b>28</b></li>
                                </ul>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='home_div'>
                            <img height={500}
                            className="d-block w-100 home_img"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Patents.Carousel.3.PNG"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <div className='carouseltextcont'>
                            <h1 className='PCarouselh1'>List of patents that Cellix Bio issued each year on a global basis.</h1>
                            <p className='PCarouselp'>View the patents that were issued between 2009 and 2022 by scrolling down.</p>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                
            </div>
            <div className='DescContainerh3'><span></span>
                <span className="WWDh3">PATENTS UNDER CELLIX BIO</span><span></span>
                </div>
                <div className='DescpContainerp'>
                    <p className='Descp'>Cellix Bio has over 400 international patents in its portfolio. The Company has 63 Composition of Matter Allowed / Issued US Patents and 28 US Patent Pending Applications from the US Patent & Trademark Office in various therapeutic areas. We are also committed to safeguarding our intellectual property estate, which includes patent rights and trade secrets, as well as the potential commercial and clinical benefits that this safeguard provides for our proprietary technology.</p>
                </div>
        </>
    );
}
export default Desc;