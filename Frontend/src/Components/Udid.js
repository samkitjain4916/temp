import React from 'react';
import "./Styles/udid.css";
import UDID from "../Images/udid.jpeg";

const Udid = () => {
  return (
    <div>
        <center><img src={UDID} alt="img" /></center>
    <h1 className='udid_h'>About Unique Disability ID</h1>
    <p className='para'>"Unique ID for Persons with Disabilities” project is being implemented with a view of creating a National Database for PwDs, and to issue a Unique Disability Identity Card to each person with disabilities. The project will not only encourage transparency, efficiency and ease of delivering the government benefits to the person with disabilities, but also ensure uniformity.The project will also help in stream-lining the tracking of physical and financial progress of beneficiary at all levels of hierarchy of implementation – from village level, block level, District level , State level and National level.</p>
   
    <h1>UDID Card Benefits</h1>
    <p class="para">The UDID card shall bring a host of benefits to the Persons with Disabilities as given below:<br />1.Persons with disabilities will not need to make multiple copies of documents, maintain, and carry multiple documents as the card will capture all the necessary details which can be decoded with the help of a reader<br />2.The UDID card will be the single document of identification, verification of the disabled for availing various benefits in future<br />3.The UDID Card will also help in stream-lining the tracking of the physical and financial progress of beneficiary at all levels of hierarchy of implementation – from village level, block level, District level , State level and National level</p>

    <h1> Document required for UDID Card:</h1>
    <p class="para">
      Scanned copy of recent color photo.<br />
      Scanned image of signature (Optional)<br />
      Scanned copy of Address Proof (Aadhar/Driving License/State Domicile etc)<br />
      Scanned copy of Identity Proof (Aadhar Card/PAN Card/Driving License etc)<br />
      Scanned copy of Disability Certificate (Only for those Persons with Disability who have been issued disability Certificate is by the competent Authority)
      </p>
    <center><button class="udid_button"  onclick='https://www.swavlambancard.gov.in/pwd/application/'>
        Apply for UDID card
    </button></center>
    </div>
  )
}

export default Udid;