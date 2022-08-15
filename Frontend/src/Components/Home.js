import React from 'react';
import wheelchair_2 from "../Images/wheelchair_2.jpg";
import wheelchair_3 from "../Images/wheelchair_3.jpg";
import earmachine_1 from "../Images/earmachine_1.jpg";
import masswheel from "../Images/masswheel.jpg";
import wheelchair_1 from "../Images/wheelchair_1.jpg";

const Home = () => {


  return (
    <>
        <div>
    <h1 class="aim">ADIP Scheme</h1>
    <p class="aim-content">Assistance to Disabled Persons for Purchase / Fitting of Aids and Appliances (ADIP) is a
      scheme initiated by the Ministry of Social Justice and Empowerment, Government of India. This scheme has been
      launched to provide assistance to disabled persons in obtaining standard aids and appliances in order to enhance
      their economic conditions. In this article, we look at the quantum of assistance, eligibility and application
      procedure of ADIP Scheme in detail.
    </p>
  </div>



  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src={wheelchair_3} alt="First slide"></img>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={wheelchair_1} alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={wheelchair_2} alt="Third slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={earmachine_1} alt="Third slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={masswheel} alt="Third slide" />
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <div>
    <h1 class="aim">Objective of the Scheme</h1>
    <p class="aim-content">The primary objective of the scheme is to help people with disabilities by bringing new
      possibilities with
      suitable, durable and scientifically manufactured with modern technologies to overcome the effects of
      disabilities. These appliances may promote the physical, social and psychological rehabilitation of the disabled
      persons.
    </p>
  </div>

  <hr />

  <div>
    <h1 class="aim">Quantum of Assistance to Specially abeled Person</h1>
    <p class="aim-content">Only for those aids/appliances which do not rate more than Rs. 6,000/- are covered under this
      ADIP Scheme. However, for visually, mentally, speech and hearing or multiple disabilities, the limit must be Rs.
      8,000/- during their study period after 9th standards. The limits will apply to individual equipment of aid and
      where more than one aid is required, the ceiling will apply separately
    </p>
    <br />
    <p class="quantum">
      The aids/appliances which do not Rs. 10,000/- are covered under this Scheme. Aids/appliances that do not cost more
      than Rs. 10,000/- are eligible under the ADIP Scheme for a single disability. However, in the case of SwDs, the
      students beyond the 9th class, the limit would be raised to Rs.12,000/-.
    </p>
    <br />
    <p class="quantum">
      In the case of multiple disabilities, the limits will apply to individual equipment of aid and where more than one
      aid/appliances are required, the ceiling will apply separately.
    </p>
  </div>
  <hr />

  <div>
    <h1 class="mission">Our Mission</h1>
    <p class="aim-content">To empower Persons with Disabilities, through its various Acts/ Institutions/Organizations
      and Schemes for rehabilitation and to create an enabling environment that provides such persons with equal
      opportunities, protection of their rights and enables them to participate as independent and productive members of
      society.
    </p>
  </div>
  <hr />

  <div>
    <h1 class="mission">Our Vision</h1>
    <p class="aim-content">To build an inclusive society in which equal opportunities are provided for the growth and
      development of Persons with Disabilities so that they can lead productive, safe and dignified lives.
    </p>
  </div>

    </>
  )
}

export default Home