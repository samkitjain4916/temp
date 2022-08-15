import React from 'react'
import "./Styles/contact.css";

const Contact = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-2"> </div>
                <div class="col-md-8">
                    <h1>Contact Us</h1>
                    <p class="lead">Have a question or want further information?</p>

                    <p>Fill in the short form and we will get back to you as soon as possible.</p> <br />

                    <div class="panel panel-default well">
                        <div class="panel-body">
                            <form action="" class="form-horizontal track-event-form bv-form" data-goaltype="”General”" data-formname="”ContactUs”" method="post" id="contact-us-all" novalidate="novalidate">
                                {/* <input name="elqSiteId" type="hidden" value="928" />
                                <input name="sFDCLastCampaignID" type="hidden" value="701400000012Lql" />
                                <input name="elqFormName" type="hidden" value="EMEAAllContactUsSubmissions" />
                                <input name="nexturl" type="hidden" value="" />
                                <input name="Partner" type="hidden" value="" />
                                <input name="language" type="hidden" value="en" /> */}

                                <div class="form-group">
                                    <div class="col-sm-6">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-user"></i>
                                            </div>
                                            <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter first name" name="C_FirstName" data-bv-field="C_FirstName" />
                                        </div>
                                        <small data-bv-validator="notEmpty" data-bv-validator-for="C_FirstName" class="help-block">Required</small></div>
                                    <div class="col-sm-6">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-user"></i>
                                            </div>
                                            <input type="text" class="form-control" id="exampleInputLastName" placeholder="Enter last name" name="C_LastName" data-bv-field="C_LastName" /></div>
                                        <small data-bv-validator="notEmpty" data-bv-validator-for="C_LastName" class="help-block">Required</small></div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-6">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-envelope"></i>
                                            </div>
                                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter email" name="C_EmailAddress" data-bv-field="C_EmailAddress" />
                                        </div>
                                        <small data-bv-validator="notEmpty" data-bv-validator-for="C_EmailAddress" class="help-block">Required</small></div>
                                    <div class="col-sm-6">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-briefcase"></i>
                                            </div>
                                            <input type="text" class="form-control" id="exampleInputCompany" placeholder="Enter company" name="C_Company" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-6">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-globe"></i>
                                            </div>

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
                                        <small data-bv-validator="callback" data-bv-validator-for="C_Country" class="help-block">Choose one</small></div>

                                    <div class="col-sm-6">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-globe"></i>
                                            </div>

                                            <select data-placeholder="Choose state" class="C_State_Prov_Modal form-control" id="C_State_Prov" name="C_State_Prov">
                                                <option value="" selected="selected">- Not applicable -</option>
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="DC">District Of Columbia</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                                <option value="AB">Alberta</option>
                                                <option value="BC">British Columbia</option>
                                                <option value="MB">Manitoba</option>
                                                <option value="NB">New Brunswick</option>
                                                <option value="NL">Newfoundland and Labrador</option>
                                                <option value="NS">Nova Scotia</option>
                                                <option value="NT">Northwest Territories</option>
                                                <option value="NU">Nunavut</option>
                                                <option value="ON">Ontario</option>
                                                <option value="PE">Prince Edward Island</option>
                                                <option value="QC">Quebec</option>
                                                <option value="SK">Saskatchewan</option>
                                                <option value="YT">Yukon</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-phone"></i>
                                            </div>
                                            <input type="text" class="form-control" id="C_BusPhone" placeholder="Phone" name="C_BusPhone" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-comment fa-2"></i>
                                            </div>
                                            <textarea class="form-control" name="Comments" id="Comments" rows="5" placeholder="Enter your message here"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <button id="contacts-submit" type="submit" class="btn btn-default btn-info">CONTACT US</button>
                                    </div>
                                </div>
                                <input type="hidden" value=""></input>

                            </form>
                        </div>

                    </div>
                    {/* <!-- END DOWNLOAD PANEL --> */}
                </div>
                {/* <div class="col-md-2">
                </div> */}




            </div>


</div>

            )
}

            export default Contact;