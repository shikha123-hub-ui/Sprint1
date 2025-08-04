import React from "react";
import "../style/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png"
import Subtitle from "../shared/Subtitle.jsx";
import SearchBar from "../shared/SearchBar.jsx";
import ServicesList from "../services/ServicesList.jsx";
import FeaturedToursList from "../components/Featured-Tours/FeaturedToursList.jsx";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery.jsx";
import Testimonials from "../components/Testimonial/Testimonials.jsx";
import Newletter from "../shared/Newletter.jsx";


const Home = () => {
  return (
    <>
      {/*========================== Hero Section ==========================*/}
      <section>
        <Container>
          <Row className="align-items-center">
            {/* Left Content Section */}
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="World Map" />
                </div>
                <h1>
                  Traveling Opens the Door to Creating{" "}
                  <span className="highlight">Memories</span>
                </h1>
                <p>
                "Travel isn’t just a trip — it’s the beginning of memories that last forever. 🌟
Every destination holds a story, every moment turns into magic.
Explore the world, capture the feeling, and create memories that stay with you.
Let the journey begin today!".
                </p>
              </div>
            </Col>
            <Col lg="2"> 
              <div className="hero__img-box a">
                <img src={heroImg} alt="" />

              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box b hero__video-box mt-4" >
                <video src={heroVideo} alt="" controls />

              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box c mt-5">
                <img src={heroImg02} alt="" />

              </div>
            </Col>
            <SearchBar />
           
          </Row>
        </Container>
      </section>
      {/**===============================================  hero seaction start  ============================================================== */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
            <h5 className="service__subtitle">{/*<Subtitle subtitle='What A Server'/>*/}What A Server</h5>
            <h2 className="service__title">We Offer Our Best Services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/*==========================================featured tour section start================================================================ */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>

      {/*==========================================featured tour section end================================================================ */}


      {/*==========================================experienced section start================================================================ */}4

      <section>
        <Container>

          <Row>
            <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>

              <h2>
                With Our ALL Experience <br/> We Will Serve You
              </h2>
              <p>
              Years of exploring, planning, and guiding — all for one goal: your perfect journey.
Trust our expertise to craft unforgettable moments, wherever you roam.



                <br/>
                Let us handle the details while you live the adventure! 🧳✨               {/**======1.07.36======= */}
              </p>


            </div>
            <div className="container__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>12k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>13</span>
                <h6>Years Experiences</h6>
              </div>
            </div>
            </Col>
            <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/*==========================================experienced section end================================================================ */} 
      
      {/*==========================================Gallery section Start================================================================ */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
               <Subtitle subtitle={'Gallery'} />
               <h2 className="gallery__title">Visit Our Customer Tour Gallery</h2>
            </Col>
            <Col lg='12'>
            <MasonryImagesGallery />

            
            </Col>
          </Row>
        </Container>
      </section>

      {/*==========================================Gallery section End================================================================ */} 
      
      {/*==========================================testimonial section start================================================================ */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="testimonial__title">What Our Fans Say About Us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/*==========================================testimonial section End================================================================ */} 

      <Newletter />


    </>
  );
};

export default Home;
         