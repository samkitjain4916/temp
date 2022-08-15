import React from 'react';
import "./Styles/eligibility.css";
import dis_car_1 from "../Images/dis_car_1.jpeg";

const Eligibility = () => {
    return (
        <div>
            <br />
            <div class="my1">

                <div class="my3">
                    <h1><u>Eligibility Criteria :</u></h1>
                </div>

                <p>A handicapped person who satisfies the below following Criteria would be eligible for assistance under ADIP Scheme:

                    <div class="my4">
                        <li>Must be a citizen of India under any age group</li>
                        <li>Must hold a copy of Disability Certificate with 40%</li>
                        <li>Monthly income from all sources must not exceed the value of Rs. 20,000/- per month.</li>
                        <li>In the case of dependents, the income of parents or guardians must not exceed the value of Rs. 20,000/- per month.</li>
                    </div>

                    <br />
                    Those who are not receiving any assistance from the Government and Non-Official Organisations for the past three years for the same object from any source are eligible to apply for this scheme. However, for the children under 12 years of age group, the limit would be restricted for one year.
                </p>
            </div>

            <br />

            <div class="wrapper2">

                <div class="box">

                    <div class="my1">
                        <div class="my3">
                            <h1><u>Documents Required :</u></h1>
                        </div>
                        <li>A copy of Disability Certificate</li>
                        <li>Two passport size photo of the applicant</li>
                        <li>Income Certificate from Revenue Agencies</li>
                        <li>Identity Proof: PAN Card, Aadhar Card, Driving License, Voter ID Card, etc.</li>
                        <li>Address Proof: Aadhar Card, Valid Passport, Utility bill, Property tax bill, etc.</li>
                    </div>

                </div>

                <div class="box">
                    <img src={dis_car_1} alt="Loading" />
                </div>

            </div>

            <div class="about-section">
                <h1>AVAILABLE SCHEMES</h1>

                <div class="my6">
                    <p><u>Assistance to Disabled Persons for Purchase (ADIP Scheme):</u></p>
                </div>

                <div class="my5">
                    <p>The main objective of the scheme is to assist needy persons with disabilities in procuring durable sophisticated and scientifically manufactured, modern, standard aids and appliances that can promote their physical, social and psychological rehabilitation by reducing the effects of disabilities and enhance their economic potential. Aids and appliances which do not cost less than Rs. 50 and not more than Rs. 6,000 are covered under the scheme. Further travelling cost would be admissible and limited to a bus fare in the ordinary class or railway by second class sleeper subject to a limit of Rs. 250 for the beneficiary irrespective of the number of visits to a medical centre.</p>
                </div>

                <hr />
                <div class="my6">
                    <p><u>Deendayal Disabled Rehabilitation Scheme (DDRS):</u></p>
                </div>

                <div class="my5">
                    <p> Under this scheme financial assistance is provided through NGOs for various projects for providing education, vocational training and rehabilitation of persons with disabilities. It is a scheme to promote voluntary action for persons with disabilities. The maximum level of support could be up to 90% of the eligible amount of grant for the project. During the 10th Five Year Plan grant-in-aid to the extent of Rs. 335.4 cr. was released to NGOs under the revised DDRS.</p>
                </div>

                <hr />

                <div class="my6">
                    <p><u>Technology Development Projects in Mission Mode:</u></p>
                </div>

                <div class="my5">
                    <p> The scheme is implemented through the IITs. Educational Institutes, Research Agencies and Voluntary Organisations etc. Financial assistance is provided on 100% basis. The four Technical Advisory Groups monitor the selection of the projects and also their progress at different stages in areas of disabilities, namely, Orthopaedic (including Cerebral Palsy), Visual, Speech and Hearing and Mental. All the projects those are recommended by the respective Technical Advisory Groups placed before the Apex Level Committee headed by Secretary, Ministry of Social Justice and Empowerment.</p>
                </div>

            </div>
            </div>
            )
            }

            export default Eligibility;