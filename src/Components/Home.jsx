import React from "react";
import evidentVideo from "../assets/evidentVideo.mp4";
import {Link} from "react-router-dom";
import Service from "./Service";


const Home = () => {
// footer date function
  const today=new Date();
  const CurrentYear=today.getFullYear();


  
  return (
    <>
      {/* heading text */}
      <div className="container" style={{ marginTop: '15em' }}>
        {/* heading text */}
        <div className="row text-center">
          <h1 className="head-font fw-bold">Elevate Your Workforce with Evident's Expert Recruitment Solutions</h1>
          <h4 className="head-font fw-bold ">Infinity of Talent, Evident Results</h4>
        </div>
      </div>
      {/* video of evident */}
      <video className="ratio ratio-4x3 bg-video" style={{ marginTop: '2em' }} autoPlay muted loop playsInline src={evidentVideo}></video>

{/* compnay introduction text */}
      <div className="container mt-5"  >
        <h2 className="text-center head-font fw-bold"><u>Why Evident ?</u></h2>
        <div className="container-sm">
          <p className="text-font">In a rapidly evolving business landscape, securing top talent is crucial for driving growth, innovation, and success. At Evident, we leverage our global expertise, cutting-edge technology, and extensive network to deliver tailored recruitment outsourcing solutions that empower organizations to thrive.
          </p>
        </div>

      </div>
{/* compny overview text */}
 <div className="container mt-5"  >
        <h2 className="text-center head-font fw-bold"><u>Company Overview</u></h2>
        <div className="container-sm">
          <p className="text-font">As a trusted partner to leading businesses worldwide, Evident combines strategic insight, operational expertise, and a commitment to excellence to provide recruitment solutions that meet the unique needs of our clients. Our team of experts collaborates closely with clients to understand their specific challenges, develop targeted solutions, and deliver exceptional results.
          </p>
        </div>
        </div>

{/* mission Statement */}
 <div className="container mt-5 mb-5"  >
        <h2 className="text-center head-font fw-bold"><u>Mission Statement</u></h2>
        <div className="container-sm">
          <p className="text-font">Empowering global businesses to achieve their full potential by providing innovative, personalized recruitment solutions that connect exceptional talent, drive growth, and foster long-term success.
          </p>
        </div>
        </div>
{/* cta button */}
<div className="container text-center" style={{marginBottom: '10em',marginTop: '5em'}}>
  <div className="row align-items-start">
    <div className="col">
     <h2 className="CTA-font">Discover how Evident's recruitment expertise can transform your business.</h2>
    </div>
    <div className="col">
      <h2 className="CTA-font">Explore our solutions today and experience the difference of working with a global leader in recruitment outsourcing.</h2>
    </div>
  </div>
  <Link to="/Service" className="btn button-color button:hover fs-5">
  Explore Our Solutions
</Link>


</div>
{/* footer */}

<div>
  <footer className="text-center footer-font">
    <div className="text-center pt-5 pb-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © {CurrentYear} Evident. All rights reserved.
    </div>
  </footer>
</div>


    </>
  )
}
export default Home;