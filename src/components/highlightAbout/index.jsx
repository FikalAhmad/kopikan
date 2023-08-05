import { HAContainer } from "./styles";
import Button from "../Button";

const HighlightAbout = () => {
  return (
    <div className={HAContainer}>
      <div className="image"></div>
      <div className="description">
        <h1>About Kopikan</h1>
        <p>
          Kopikan is a coffee startup that focuses on providing customers with
          unique and innovative coffee experiences. They create a cozy and
          friendly atmosphere for coffee lovers to enjoy various types of
          high-quality coffee. Kopikan has a modern and attractive concept, with
          aesthetically pleasing interior design and provides fast and efficient
          service.
        </p>
        <div className="button--more">
          <Button link="/tentang">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default HighlightAbout;
