import "./VenueDetails.css";
import receptionDetails from "../images/reception-details.svg";
import marriageDetails from "../images/marriage-details.svg";
import inviteImage from "../images/invite-image.jpg";
import locationIcon from "../images/map-location-dot-solid.svg";
import instaIcon from "../images/icons8-instagram-32.png";
import React from "react";

const VenueDetails = () => {
  const fixedDate = new Date("2023-07-14");
  const [remainingDays, setRemainingDays] = React.useState(0);
  // const remainingDays = fixedDate.getTime() - dueDate.getTime();
  // console.log(Math.floor(remainingDays / (1000 * 3600 * 24)));
  // const gmapIntegrationString = `<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=Yashaswi Convention Center Mysore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://capcuttemplate.org/">Capcut Templates</a></div><style>.mapouter{position:relative;text-align:right;width:300px;height:300px;}.gmap_canvas {overflow:hidden;background:none!important;width:300px;height:300px;}.gmap_iframe {width:300px!important;height:300px!important;}</style></div>`;
  // const gmapIntegration = document.createElement("div");
  // gmapIntegration.innerHTML = gmapIntegrationString;
  const timerFunction = () => {
    const newTime = new Date();
    const daysLeft = Math.floor(
      (fixedDate.getTime() - newTime.getTime()) / (1000 * 3600 * 24)
    );
    // console.log("DAYS LEFT " + daysLeft);
    if (daysLeft !== remainingDays) {
      setRemainingDays(daysLeft);
    }
  };
  setInterval(() => {
    timerFunction();
  }, 1000 * 60);
  React.useEffect(() => {
    // console.log(remainingDays);
    timerFunction();
  }, []);

  return (
    <div className="venue-details-wrapper">
      <div className="invite-details">
        <div>
          We warmly invite you and your family to join us as we start a new
          journey of life together. Your presence will be a blessing to us.
        </div>
        <div className="reception-details">Reception :</div>
        <img src={receptionDetails} alt="" className="svg-image" />
        <div className="marriage-details">Marriage :</div>
        <img src={marriageDetails} alt="" className="svg-image" />
        {/* <div>We can't wait to celebrate our special day with you...</div> */}
      </div>
      <div className="invite-image-wrapper">
        <img src={inviteImage} alt="" className="invite-image" />
      </div>
      <div className="countdown-timer-wrapper">
        <div>Countdown :</div>
        <div className="days-left">{remainingDays}</div>
        <div className="days-togo">Days to go</div>
        <div>We can't wait to celebrate our special day with you...</div>
        {/* {gmapIntegration} */}
        <div className="location-wrapper">
          Let me help you with directions to venue...
        </div>
        <div className="location-wrapper">
          <a
            href="https://goo.gl/maps/fMH5aiunqSjM45ou6"
            className="location-icon"
          >
            <img
              src={locationIcon}
              alt="Show direction"
              className="location-icon-img"
            />
          </a>
        </div>
        <div className="contact-dev">
          <a href="https://www.instagram.com/freak__0_0/">
            <img src={instaIcon} alt="link to wen dev" />
            @freak__0_0
          </a>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
