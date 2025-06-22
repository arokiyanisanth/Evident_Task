import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"




const Service = () => {
    // footer date function
    const today = new Date();
    const CurrentYear = today.getFullYear();
    return (
        <>
            {/* head line and intro */}
            <div className="container mb-5" >
                <h1 className="text-font text-center fw-bold fs-1" style={{ marginTop: "5em" }}>Expert Recruitment Solutions for Ambitious Businesses</h1>
                <p className="text-font mt-5 ">
                    At Evident, we offer a comprehensive range of recruitment outsourcing services designed to meet the unique needs of our clients. From talent acquisition to workforce management, we've got you covered.

                </p>
            </div>

            {/* service list */}
            <div className="container mt-5">
                <h1 className="text-center head-font fw-bold mb-5">OUR SERVICES</h1>
                {/* service list */}
                {/* service 1 */}
                <motion.div className="card mb-3 bg-manual" style={{ maxwidth: "540px" }} initial={{ opacity: 0, y: -100, scale: 0.5 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} transition={{ duration: "1" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://media.istockphoto.com/id/1350793901/photo/the-magnet-attracts-figures-from-the-crowd-talent-acquisition-concept.jpg?s=612x612&w=0&k=20&c=b11QAzwQ-NJX-s6RpL4tvpQTo1DiDu-QD66K6zvEtGU=" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title head-font fw-bold"> Talent Acquisition</h2>
                                <ul className="text-font">
                                    <li>Customized recruitment strategies</li>
                                    <li> Sourcing and screening top talent</li>
                                    <li> Interview management and candidate selection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* service 2 */}
                <motion.div className="card mb-3 bg-manual" style={{ maxwidth: "540px" }} initial={{ opacity: 0, y: -100, scale: 0.5 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} transition={{ duration: "1" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://img.freepik.com/free-photo/leader-holding-float_1156-566.jpg?semt=ais_hybrid&w=740" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title head-font fw-bold"> Recruitment Process Outsourcing </h2>
                                <ul className="text-font">
                                    <li>End-to-end recruitment management</li>
                                    <li>Process optimization and efficiency gains</li>
                                    <li>Scalable recruitment solutions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* service 3 */}
                <motion.div className="card mb-3 bg-manual" style={{ maxwidth: "540px" }} initial={{ opacity: 0, y: -100, scale: 0.5 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} transition={{ duration: "1" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title head-font fw-bold">Workforce Management</h2>
                                <ul className="text-font">
                                    <li>Temporary and contract staffing solutions</li>
                                    <li>Payroll management and compliance</li>
                                    <li>Workforce analytics and insights</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* service 4 */}
                <motion.div className="card mb-3 bg-manual" style={{ maxwidth: "540px" }} initial={{ opacity: 0, y: -100, scale: 0.7 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} transition={{ duration: "1" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://gexsearch.com/wp-content/uploads/2019/05/Executive-Search-optimized.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title head-font fw-bold">Executive Search</h2>
                                <ul className="text-font">
                                    <li>Senior-level talent acquisition</li>
                                    <li>Board and C-suite appointments</li>
                                    <li> Confidential search and selection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* sla */}
            <div className="container" style={{ marginTop: "10em" }}>

                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed bg-sla  w-100  align-item-center d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">

                                <div className="d-flex justify-content-between w-100 align-items-center">
                                    <h1 className="head-font fw-bold"> SERVICE LEVEL AGREEMENTS</h1>
                                    <img src="https://cdn-icons-png.flaticon.com/128/2915/2915324.png" alt="" />
                                </div>

                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse bg-sla" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-font "> We're committed to delivering exceptional results. If a candidate leaves within 90 days, we'll replace them free of charge.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* loyoalty program and what set us apart*/}
            <div className="bg-loyal mt-5 loyal-container" >
                <div className="container ">
                    <div className="head-font"><h3 className="fw-bold fs-1" style={{ color: "white" }}>Loyalty Program</h3></div>
                    <div className="mb-5"><h3 className="fw-bold fs-1" style={{ color: "rgb(102, 0, 102)" }}>We reward our loyal clients with exclusive discounts!</h3></div>

                    {/* carousel */}
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    {/* card 1 */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card" style={{ width: "18rem", height: "11rem", background: "black" }}>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-center" style={{ color: "#D3D3D3" }}>SILVER</h5>
                                                <ul className="fw-bold" style={{ color: "#D3D3D3" }}>
                                                    <li>5-9 hires in a quarter</li>
                                                    <li>10% discount on total billing</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    {/* card 2 */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card" style={{ width: "18rem", height: "11rem", background: "black" }}>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-center" style={{ color: "#FFD700" }}>GOLD</h5>
                                                <ul className="fw-bold" style={{ color: "#FFD700" }}>
                                                    <li>10+ hires in a quarter</li>
                                                    <li> 15% discount on total billing</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                    {/* card 3 */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card" style={{ width: "18rem", height: "11rem", background: "black" }}>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-center" style={{ color: "#E5E4E2" }}>PLATINUM</h5>
                                                <ul className="fw-bold" style={{ color: "#E5E4E2" }}>
                                                    <li>15+ hires in a quarter</li>
                                                    <li>  20% discount on total billing, plus a dedicated account manager</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* 2nd carousel */}
                            <div className="carousel-item">
                                <div className="row">
                                    {/* card 1 */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card" style={{ width: "18rem", height: "11rem", background: "black" }}>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-center" style={{ color: "#D3D3D3" }}>SILVER</h5>
                                                <ul className="fw-bold" style={{ color: "#D3D3D3" }}>
                                                    <li>5-9 hires in a quarter</li>
                                                    <li>10% discount on total billing</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    {/* card 2 */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card" style={{ width: "18rem", height: "11rem", background: "black" }}>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-center" style={{ color: "#FFD700" }}>GOLD</h5>
                                                <ul className="fw-bold" style={{ color: "#FFD700" }}>
                                                    <li>10+ hires in a quarter</li>
                                                    <li> 15% discount on total billing</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                    {/* card 3 */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card" style={{ width: "18rem", height: "11rem", background: "black" }}>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-center" style={{ color: "#E5E4E2" }}>PLATINUM</h5>
                                                <ul className="fw-bold" style={{ color: "#E5E4E2" }}>
                                                    <li>15+ hires in a quarter</li>
                                                    <li>  20% discount on total billing, plus a dedicated account manager</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* 3rd carousel */}
                            <div className="carousel-item">
                                {/* 3rd carousel */}
                                <div className="row">
                                    {/* card 1 */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card" style={{ width: "18rem", height: "11rem", background: "black" }}>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-center" style={{ color: "#D3D3D3" }}>SILVER</h5>
                                                <ul className="fw-bold" style={{ color: "#D3D3D3" }}>
                                                    <li>5-9 hires in a quarter</li>
                                                    <li>10% discount on total billing</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    {/* card 2 */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card" style={{ width: "18rem", height: "11rem", background: "black" }}>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-center" style={{ color: "#FFD700" }}>GOLD</h5>
                                                <ul className="fw-bold" style={{ color: "#FFD700" }}>
                                                    <li>10+ hires in a quarter</li>
                                                    <li> 15% discount on total billing</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                    {/* card 3 */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card" style={{ width: "18rem", height: "11rem", background: "black" }}>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-center" style={{ color: "#E5E4E2" }}>PLATINUM</h5>
                                                <ul className="fw-bold" style={{ color: "#E5E4E2" }}>
                                                    <li>15+ hires in a quarter</li>
                                                    <li>  20% discount on total billing, plus a dedicated account manager</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                    {/* what set us apart */}
                    <div className="container mt-5 ">
                        <div className="card border-primary mb-3" style={{ maxwidth: " 18rem" }}>
                            <div className="card-header bg-sla"><marquee behavior="scroll" direction=""><h1 className="head-font">What Sets Us Apart</h1></marquee></div>
                            <div className="card-body text-primary bg-manual">
                                {/* <h5 className="card-title">Primary card title</h5> */}
                                <ul className="text-font">
                                    <li>Personalized service and dedicated account management</li>
                                    <li>Access to our global network of top talent</li>
                                    <li>Proven track record of delivering exceptional results</li>
                                </ul>
                            </div>
                        </div>
                    </div>





                </div>

            </div>

            {/* CAT BUTTON */}
            <div className="container text-center mt-5" >
                <marquee behavior="scroll" ><h1 className="text-font text-center fw-bold fs-1 mt-5">
                    Discover how our expert recruitment solutions can transform your business.
                </h1></marquee>
                <Link to="/Contact" className="btn button-colour button:hover fs-5 mt-5">
                    Get in touch with us today to learn more!
                </Link>
            </div>











            {/* footer */}

            <div className="" style={{ marginTop: '10em' }}>
                <footer className="text-center footer-font mt-5">
                    <div className="text-center pt-5 pb-5 mt-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        © {CurrentYear} Evident. All rights reserved.
                    </div>
                </footer>
            </div>


        </>
    )
}
export default Service;