import React, { useState } from 'react'

const Apply = () => {



    return (
        <div className='container'>
            <div class="card-header">
                <h1>Application Form</h1>
            </div>
            <div class="card-body">


                <form action="http://localhost:5000/userdashboard" method="POST" enctype="multipart/form-data">

                    <div class="form-group row">
                        <label for="full_name" class="col-md-4 col-form-label text-md-right">Applicant's Full Name *</label>
                        <div class="col-md-6">
                            <input type="text"  placeholder="Name" name="name" class="form-control" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="phone_number" class="col-md-4 col-form-label text-md-right">Upload Profile</label>
                        <div class="col-md-6">
                            <input type="file"  name="testImage" class="form-control"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <button type="submit" class="btn btn-primary">
                            Apply
                        </button>
                    </div>




                   {/* <div class="form-group row">
                        <label for="full_name" class="col-md-4 col-form-label text-md-right"> Applicant
                            Father's Name *</label>
                        <div class="col-md-6">
                            <input type="text" id="full_name" class="form-control" name="full-name"
                                value="Enter the Name" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="email_address" class="col-md-4 col-form-label text-md-right">Date of
                            Birth *</label>
                        <div class="col-md-6">
                            <input type="date" id="email_address" class="form-control" name="email-address" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Select Gender</label>
                        <div class="col-md-6">
                            <select data-placeholder="Choose country" class="C_Country_Modal form-control" id="C_Country" name="C_Country" data-bv-field="C_Country">
                                <option value="">--Select Gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>

                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="phone_number" class="col-md-4 col-form-label text-md-right">Mobile
                            Number*</label>
                        <div class="col-md-6">
                            <input type="text" id="phone_number" class="form-control" value="+91" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="full_name" class="col-md-4 col-form-label text-md-right"> Email-Id
                        </label>
                        <div class="col-md-6">
                            <input type="email" id="full_name" class="form-control" name="full-name"
                                value="abc@xyz.com" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Present
                            Address*</label>
                        <div class="col-md-6">
                            <input type="text" id="present_address" class="form-control" value="Enter Address" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Permanent
                            Address</label>
                        <div class="col-md-6">
                            <input type="text" id="present_address" class="form-control" value="Address" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Pincode</label>
                        <div class="col-md-6">
                            <input type="number" id="present_address" class="form-control" value="Enter 6 digit number" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Village/Block</label>
                        <div class="col-md-6">
                            <input type="text" id="present_address" class="form-control" value="Enter Village/Block" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">District/Tehsil</label>
                        <div class="col-md-6">
                            <input type="text" id="present_address" class="form-control" value="Enter District/Tehsil" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Select State</label>
                        <div class="col-md-6">
                            <select data-placeholder="Choose country" class="C_Country_Modal form-control" id="C_Country" name="C_Country" data-bv-field="C_Country">
                                <option value="">--Select State--</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chattisgarh">Chattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Maghalaya">Maghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttrakhand</option>
                                <option value="West Bengal">West Bengal</option>

                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Type of Disability*</label>
                        <div class="col-md-6">
                            <select data-placeholder="Choose country" class="C_Country_Modal form-control" id="C_Country" name="C_Country" data-bv-field="C_Country">
                                <option value="">--Select Type of Disability--</option>
                                <option value="Andhra Pradesh">Visual Impairment</option>
                                <option value="Arunachal Pradesh">Hearing Impairment</option>
                                <option value="Assam">Loco motor Impairment</option>
                                <option value="Bihar">Mental Illness</option>
                                <option value="Goa">Children with Learning Disabilities</option>
                                <option value="Chattisgarh">Other</option>


                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Employment Status</label>
                        <div class="col-md-6">
                            <select data-placeholder="Choose country" class="C_Country_Modal form-control" id="C_Country" name="C_Country" data-bv-field="C_Country">
                                <option value="">--Are you Employed--</option>
                                <option value="Andhra Pradesh">Yes</option>
                                <option value="Arunachal Pradesh">No</option>

                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="nid_number" class="col-md-4 col-form-label text-md-right"><abbr
                            title="National Id Card">UDID</abbr> Number*</label>
                        <div class="col-md-6">
                            <input type="text" id="nid_number" class="form-control" name="nid-number" value="Enter UDID Number" />
                        </div>
                    </div>


                    <div class="form-group row">
                        <label for="phone_number" class="col-md-4 col-form-label text-md-right">UDID Proof*</label>
                        <div class="col-md-6">
                            <input type="file" id="phone_number" class="form-control" value="" />
                        </div>
                    </div>
                    */}

                    

                </form>
            </div>
        </div>
    )
}

export default Apply