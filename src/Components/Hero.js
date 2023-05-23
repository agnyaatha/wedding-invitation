import "./Hero.css";
import heroImage from "../images/hero-image.JPG";
import weddingIcon from "../images/hindu-wedding.png";
import topFlower from "../images/top-flower.png";
import bottomFlower from "../images/bottom-flower.png";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Groom and Bride" className="hero-image" />
      </div>
      <div className="hero-details-wrapper">
        <div className="image-icon">
          <img src={weddingIcon} alt="Wedding icon" className="marriage-icon" />
        </div>
        <div className="mobile-view-wrapper">
          <div className="top-flower-wrapper">
            <img src={topFlower} alt="" className="top-flower" />
          </div>
          <div className="hero-details">
            <div>Madhuri R</div>
            <div>Weds</div>
            <div>Sanjay Nambiar</div>
          </div>
          <div className="bottom-flower-wrapper">
            <img src={bottomFlower} alt="" className="bottom-flower" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
