import React from "react";
import { useState } from "react";


const SubmitCv = () => {

    // js for handling the input data of the form


    // useState hook for managing form data
    const [InputData, setInputData] = useState({
        username: "",
        email: "",
        mobNo: "",
        currentLocation: "",
        preferredJobLocations: "",
        jobTitle: "",
        industry: "",
        qualifications: "",
        skills: "",
        ctc: "",
        expectedCTC: "",
        linkedin: "",
        cv: "",

    });
    // storing data from the user from object to array usestate hook
    const [savedDataArray, setsavedDataArray] = useState([]);


    // handleInputChange function
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputData({ ...InputData, [name]: value })

    }

    // handleSubmit function
    const handleSubmit = () => {
        setsavedDataArray([...savedDataArray, InputData]);
        console.log(InputData);
        alert("Your CV has been submitted successfully!");

        // refreshing the input after submit
        setInputData({
            username: "",
            email: "",
            mobNo: "",
            currentLocation: "",
            preferredJobLocations: "",
            jobTitle: "",
            industry: "",
            qualifications: "",
            skills: "",
            ctc: "",
            expectedCTC: "",
            linkedin: "",
            cv: "",



        });


    }
    return (
        <>
            {/* heading text */}
            <div className="container mb-5" style={{ marginTop: '15em' }}>
                {/* heading text */}
                <div className="row text-center">
                    <h1 className="head-font fw-bold mb-5">Submit Your CV for Future Opportunities</h1>
                    <h3 className="head-font fs-2 ">At Evident, we're committed to connecting exceptional talent with top companies. By submitting your CV, you'll be added to our database, making it easier for us to consider you for future opportunities, both within our company and with our clients.</h3>
                </div>
            </div>

            {/* Benefits of Submitting Your CV  */}
            <div className="container mt-5 ">
                <div className="card border-primary mb-3" style={{ maxwidth: " 18rem" }}>
                    <div className="card-header bg-sla"><marquee behavior="scroll" direction=""><h1 className="head-font fw-bold">Benefits of Submitting Your CV</h1></marquee></div>
                    <div className="card-body text-primary bg-manual">

                        <ul className="text-font ">
                            <li>Increase your visibility to top employers</li>
                            <li>Get considered for job openings that match your skills and experience</li>
                            <li>Stay connected with our recruitment team for future opportunities</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CV submission form*/}
            <div className="container mt-5">
                {/* cv form heading */}
                <div className="text-center ">
                    <h1 className="head-font fw-bold">Submit Your CV</h1>
                    <h5 className="text-font fw-bold">Please fill out the form below to submit your CV</h5>
                </div>
                {/* form data filling */}
                <div className="card bg-sla box-cv">
                    <div className="card-body">
                        <form>
                            {/* name */}
                            <div className="mb-3">
                                <label htmlFor="InputName" className="form-label head-font fw-bold fs-4">NAME</label>
                                <input type="text" name="username" value={InputData.username} className="form-control text" id="InputName" placeholder="Enter Your Name" onChange={handleInputChange} requi />

                            </div>
                            {/* email */}
                            <div className="mb-3">
                                <label htmlFor="InputEmail" className="form-label head-font fw-bold fs-4">EMAIL ADDRESS</label>
                                <input type="email" className="form-control" name="email" value={InputData.email} id="InputEmail" placeholder="Enter Your Email" onChange={handleInputChange} required />

                            </div>
                            {/* phone number */}

                            <div className="mb-3">
                                <label htmlFor="InputContact" className="form-label head-font fw-bold fs-4">CONTACT NUMBER</label>
                                <input type="tel" name="mobNo" className="form-control" id="InputContact" value={InputData.mobNo} placeholder="Enter Your Contact Number" onChange={handleInputChange} />

                            </div>
                            {/* current location */}
                            <div className="mb-3">
                                <label htmlFor="InputCurrentLocation" className="form-label head-font fw-bold fs-4">CURRENT LOCATION</label>
                                <input type="text" name="currentLocation" value={InputData.currentLocation} className="form-control" id="InputCurrentLocation" placeholder="Enter Your Current Location" onChange={handleInputChange} />
                            </div>
                            {/* PREFERRED JOB LOCATIONS */}
                            <div className="mb-3">
                                <label htmlFor="InputPreferredJobLocations" className="form-label head-font fw-bold fs-4">PREFERRED JOB LOCATIONS</label>
                                <input type="text" name="preferredJobLocations" value={InputData.preferredJobLocations} className="form-control" id="InputPreferredJobLocations" placeholder="Enter Your Preferred Job Locations" onChange={handleInputChange} />

                            </div>
                            {/* JOB TITLE */}

                            <div className="mb-3">
                                <label htmlFor="InputJobTitle" className="form-label head-font fw-bold fs-4">JOB TITLE</label>
                                <input type="text" name="jobTitle" value={InputData.jobTitle} className="form-control" id="InputJobTitle" placeholder="Enter Your Job Title" onChange={handleInputChange} />

                            </div>
                            {/* INDUSTRY */}

                            <div className="mb-3">
                                <label htmlFor="InputIndustry" className="form-label head-font fw-bold fs-4">INDUSTRY</label>
                                <input type="text" name="industry" value={InputData.industry} className="form-control" id="InputIndustry" placeholder="Enter Your Industry" onChange={handleInputChange} />

                            </div>


                            {/* SKILLLS */}

                            <div className="mb-3">
                                <label htmlFor="InputSkills" className="form-label head-font fw-bold fs-4">SKILLS</label>
                                <input type="text" name="skills" value={InputData.skills} className="form-control" id="InputSkills" placeholder="Enter Your Skills" onChange={handleInputChange} />

                            </div>
                            {/* QUALIFICATIONS */}

                            <div className="mb-3">
                                <label htmlFor="InputQualifications" className="form-label head-font fw-bold fs-4">QUALIFICATIONS</label>
                                <input type="text" name="qualifications" value={InputData.qualifications} className="form-control" id="InputQualifications" placeholder="Enter Your Qualifications" onChange={handleInputChange} />

                            </div>
                            {/* LINKEDIN PROFILE */}

                            <div className="mb-3">
                                <label htmlFor="InputLinkedIn" className="form-label head-font fw-bold fs-4">LINKEDIN PROFILE</label>
                                <input type="url" name="linkedin" value={InputData.linkedin} className="form-control" id="InputLinkedIn" placeholder="Enter Your LinkedIn Profile URL" onChange={handleInputChange} />

                            </div>
                            {/* CURRENT CTC */}
                            <div className="mb-3">
                                <label htmlFor="InputCTC" className="form-label head-font fw-bold fs-4">CURRENT CTC</label>
                                <input type="text" name="ctc" value={InputData.ctc} className="form-control" id="InputCTC" placeholder="Enter Your Current CTC" onChange={handleInputChange} />

                            </div>
                            {/* EXPECTED CTC */}
                            <div className="mb-3">
                                <label htmlFor="InputExpectedCTC" className="form-label head-font fw-bold fs-4">EXPECTED CTC</label>
                                <input type="text" name="expectedCTC" value={InputData.expectedCTC} className="form-control" id="InputExpectedCTC" placeholder="Enter Your Expected CTC" onChange={handleInputChange} />

                            </div>
                            {/* UPLOAD CV */}
                            <div className="mb-3">
                                <label htmlFor="InputCV" className="form-label head-font fw-bold fs-4">UPLOAD CV</label>
                                <input type="file" name="cv" value={InputData.cv} className="form-control" id="InputCV" accept=".doc,.docx, .pdf," onChange={handleInputChange} />

                            </div>
                        </form>
                        <div className="text-center"><button type="submit" className="btn button-colour button:hover  fs-5" onClick={handleSubmit}>Submit</button></div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SubmitCv;
