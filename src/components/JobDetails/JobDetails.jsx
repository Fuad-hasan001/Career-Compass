import React from 'react';
import './JobDetails.css'

const JobDetails = () => {
    return (
        <div>
            <h1>Job Details</h1>

            <div className='details-container'>
                <div>
                    <p><small><span className='font-bold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</small></p>

                    <p><small><span>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</small></p>

                    <div>
                        <h3>Educational Requirements:</h3>
                        <p><small>Bachelor degree to complete any reputational university.</small></p>
                    </div>

                    <div>
                        <h3>Experiences:</h3>
                        <p><small>2-3 Years in this field.</small></p>
                    </div>
                </div>
            </div>

            <div className='details'>
                <div>
                    <h3>Job Details</h3>
                    <hr />
                    <p><span>Salary :</span> 100K - 150K (Per Month)</p>
                    <p><span>Job Title :</span>  Product Designer</p>
                </div>
                <div>
                    <h3>Contact Information</h3>
                    <hr />
                    <p><span>Phone :</span> 01750-00 00 00</p>
                    <p><span>Email :</span> info@gmail.com</p>
                    <p><span>Address :</span> Dhanmondi 32, Sukrabad
                        Dhaka, Bangladesh</p>
                </div> 

                <button className='btn-Apply'>Apply Now</button> 

            </div>
        </div>
    );
};

export default JobDetails;