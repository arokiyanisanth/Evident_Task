import React from "react";
import { motion } from "framer-motion";
import aboutintro from "../assets/aboutintro.avif";
import { Link } from "react-router-dom";
import Service from "./Service";

const About = () => {
    // footer date function
    const today = new Date();
    const CurrentYear = today.getFullYear();
    return (
        <>
            {/* head line for about us page */}
            <motion.div className="container" initial={{ opacity: 0, y: -100, scale: 0.8 }} animate={{ opacity: 5, y: 0, scale: 1 }}
                transition={{ duration: 2 }} >
                <h1 className="text-font text-center fw-bold fs-1" style={{ marginTop: "5em" }}>Our Story, Our Mission, Our Values</h1>
            </motion.div>
            {/* introduction text for about us page */}
            <div className="container mt-5 mb-5">
                {/* about text */}
                <div className="clearfix">
                    <motion.img initial={{ opacity: 0, y: -100, scale: 0.8 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} transition={{ duration: "3" }} src={aboutintro} className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid img-hover" alt="..." />

                    <p className="about-text-font fw-semibold">
                        At Evident, we're passionate about connecting exceptional talent with forward-thinking businesses.
                    </p>

                    <p className="about-text-font fw-semibold">
                        Our story began with a simple yet ambitious goal  to revolutionize the recruitment outsourcing industry.
                    </p>


                </div>
                {/* company history */}
                <div style={{ marginTop: "12em" }} >
                    <h1 className="head-font text-center fw-bold mb-5">COMPANY HISTORY</h1>
                    <div className="clearfix">
                        <motion.img src="https://www.shutterstock.com/image-photo/looking-modern-highrise-office-buildings-600nw-2474144379.jpg" initial={{ opacity: 0, y: -100, scale: 0.8 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} transition={{ duration: "2" }} className="col-md-6 float-md-start mb-3 ms-md-3 img-fluid me-2 " alt="..." />

                        <p className="about-text-font fw-semibold">
                            Evident was founded on the principles of innovation, excellence, and customer satisfaction.
                        </p>

                        <p className="about-text-font fw-semibold">
                            Over the years, we've grown into a global leader in recruitment outsourcing, serving clients across various industries.
                        </p>

                    </div>
                </div>
                {/* our mission */}
                <div className="mt-5 mb-5">
                    <motion.h1 initial={{ opacity: 0, y: -100, scale: 0.8 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} transition={{ duration: "2" }} className="text-font fw-bold text-center">OUR MISSION</motion.h1>
                    <p className="about-text-font fw-semibold mt-5 mb-5">
                        Empowering businesses to thrive by providing personalized recruitment solutions that connect exceptional talent, drive growth, and foster long-term success.
                    </p>
                </div>
                {/* values */}
                <div className="mt-5 mb-5">
                    <motion.h1 initial={{ opacity: 0, y: -100, scale: 0.8 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} transition={{ duration: "2" }} className="text-font fw-bold text-center">OUR VALUES</motion.h1>
                </div>


            </div>
            {/* values card */}

            <div className="container">
                <div className="row text-center  mob-card">
                    {/* value1  */}
                    <div className=" col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <motion.img initial={{ opacity: 1, y: -100, scale: 0.8 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: "2" }} src="https://media.istockphoto.com/id/1257382919/vector/creative-smart-ideas-icon-blue-vector.jpg?s=612x612&w=0&k=20&c=KyEeXb0zTwdzkkEss7OOCaSIhc_GfvducoqfUuoqBVc=" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title head-font fw-bold">Innovation</h5>
                                <p className="card-text card-font">We continuously strive to improve our processes, technology, and services to stay ahead of the curve.</p>
                            </div>
                        </div>
                    </div>
                    {/* value 2 */}
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <motion.img initial={{ opacity: 1, y: -100, scale: 0.8 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: "2" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLaV1ByBzsgSGva9I1aATZNEQ8CwoY-0YW_BzlHn_-6JNmF36YaF4u-QBfJYrBpel-s0&usqp=CAU" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title head-font fw-bold">Excellence</h5>
                                <p className="card-text card-font"> We're committed to delivering exceptional results, exceeding client expectations, and setting new standards in recruitment outsourcing.</p>
                            </div>
                        </div>
                    </div>
                    {/* value 3 */}
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <motion.img initial={{ opacity: 1, y: -100, scale: 0.8 }} whileInView={{ opacity: 5, y: 0, scale: 1 }} whileHover={{ scale: 1.1, duration: "1" }} transition={{ duration: "2" }} src="data:image/png;base64,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" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title head-font fw-bold">Customer Satisfaction</h5>
                                <p className="card-text card-font">We prioritize building long-term relationships with our clients, understanding their unique needs, and providing tailored solutions.
                                </p>
                            </div>
                        </div>
                    </div>






                </div>
            </div>
            {/* CTA BUTTON */}
            <div className="container text-center mt-5" >
                <marquee behavior="scroll" ><h1 className="text-font text-center fw-bold fs-1 mt-5">
                    Learn more about our services and how we can help your business thrive.
                </h1></marquee>
                <Link to="/Service" className="btn button-color button:hover fs-5 mt-5">
                     Explore our solutions today!
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
export default About;