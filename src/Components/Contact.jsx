import React from "react";
import { Link } from "react-router-dom";
import SubmitCv from "./SubmitCv";


const Contact = () => {

    // footer date function
    const today = new Date();
    const CurrentYear = today.getFullYear();



    return (
        <>
            {/* heading text */}
            <div className="container mb-5" style={{ marginTop: '15em' }}>
                {/* heading text */}
                <div className="row text-center">
                    <h1 className="head-font fw-bold mb-5">Get in Touch with Evident</h1>
                    <h3 className="head-font fw-bold ">Whether you're looking for recruitment solutions, have a question, or just want to say hello, we're here to listen.</h3>
                </div>
            </div>

            {/* contact information */}
            <div className="container mt-5">
                <div className="row bg-sla">
                    <h1 className="head-font fw-bold mt-3">CONTACT INFORMATION</h1>
                    {/* mobile number */}
                    <div className="col-12 col-md-6 mt-5"><h1 className="head-font"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg> +91 8580571237 </h1>
                    </div>
                    <div className="col-12 col-md-6 mt-5">
                        {/* mail-1 */}
                        <h1 className="head-font">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg> support@evidentpvt.in</h1>
                        {/* mail-2 */}
                        <h1 className="head-font">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg> evidentpvt.ltd@gmail.com</h1></div>


                </div>

                {/* candidate option */}
                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <h2 style={{color:" #003366;"}}>I'M A CANDIDATE: <Link to="/Submit-CV" className="btn button-colour button:hover fs-5 fw-bold  ">
                            Finding a job

                        </Link></h2>
                    </div>

                    <div style={{color:" #003366;"}} className="col-12 col-md-6 "><h2 >I'M AN EMPLOYER: <a href="mailto:support@evidentpvt.in" className="btn button-colour button:hover fs-5 fw-bold"> Finding a suitable candidate</a></h2></div>
                </div>
            </div>


            {/* social media links */}
            <div className="container mt-5">
                <div className="row">
                    <h1 className="head-font fw-bold mb-5">Stay connected with us on social media</h1>
                    {/* linkedin  */}
                    <div className="col-6"><h2 className="head-font fw-bold">LinkedIn <a href="https://www.linkedin.com/company/evident-pvt/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg></a></h2></div>
                    <div className="col-6"><h2 className="head-font fw-bold">Instagram <a href="https://www.instagram.com/evidentpvt?igsh=MXZxNjR2b3RqbWMxYQ==" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a></h2></div>
                </div>

            </div>


            {/* CAT BUTTON */}
            <div className="container text-center mt-5" >
                <marquee behavior="scroll" ><h1 className="text-font text-center fw-bold fs-1 mt-5">
                    We're looking forward to connecting with you!
                </h1></marquee>
                <Link to="/Submit-CV" className="btn button-colour button:hover fs-5 mt-5">
                    Don't hesitate to reach out.
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
export default Contact;