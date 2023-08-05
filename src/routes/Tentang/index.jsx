import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";
import { tentangContainer } from "./styles";

const Tentang = () => {
  return (
    <div>
      <Navbar />
      <div className={tentangContainer}>
        <div className="tentang--image"></div>
        <div>
          <h1 className="tentang--h1">About Kopikan</h1>
          <p>
            Kopikan is a coffee startup that focuses on providing customers with
            unique and innovative coffee experiences. They create a cozy and
            friendly atmosphere for coffee lovers to enjoy various types of
            high-quality coffee. Kopikan has a modern and attractive concept,
            with aesthetically pleasing interior design and provides fast and
            efficient service.
          </p>
          <hr />
          <h1>Visi dan Misi KOPIKAN</h1>
          <h2>Our Vision</h2>
          <p>
            Being a leading company in the F&B industry with a focus on coffee
            and coffee shops, creating memorable experiences for our customers.
            We aim to be an internationally recognized and trusted brand in
            terms of coffee quality, superior customer service, and unique
            atmosphere in every KOPIKAN outlet.
          </p>
          <h2>Our Mission</h2>
          <ol>
            <li>
              Delivering the best quality coffee: We are committed to serving
              the best coffee by using high-quality coffee beans from trusted
              sources. We maintain strict standards in the roasting process and
              selection of coffee beans to provide a consistent and satisfying
              taste for our customers.
            </li>
            <li>
              Serving an innovative menu: We continue to develop innovative
              menus by introducing unique coffee drinks and new discovery food
              variations. We strive to cater to the varying preferences of our
              customers and provide an exciting culinary experience on every
              visit.
            </li>
            <li>
              Provide superior customer service: Our customers are our most
              valuable asset. We are committed to providing friendly, responsive
              and professional customer service. We teach our employees about
              the importance of maintaining good relationships with customers,
              listening to their feedback, and providing satisfactory solutions.
            </li>
            <li>
              Creating a comfortable atmosphere: We understand that a
              comfortable and relaxing environment is an important factor in the
              customer experience. We design KOPIKAN stores with attractive
              interior designs, warm ambience, and adequate facilities to make
              customers feel at home and come back for more.
            </li>
            <li>
              Sustainable and responsible: We aim to conduct business in a
              socially and environmentally responsible manner. We are committed
              to supporting sustainable business practices, including supporting
              local coffee farmers, using environmentally friendly materials,
              and reducing the impact of our carbon footprint.
            </li>
          </ol>
          <br />
          <p>
            With this vision and mission, we hope to create a widely recognized
            KOPIKAN brand and become a destination place for coffee lovers, as
            well as make a positive contribution to the local community and the
            F&B industry as a whole.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tentang;
