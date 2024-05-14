//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const LandingPage = () => {
  return (
    <div>
      {/* Intro Section */}
      <section className="intro-section">
        <div className="cover-image">
          <img src="cover-image.jpg" alt="Cover " />
        </div>
        <div className="intro-content">
          <h1>Welcome to TradeHub</h1>
          <p>Welcome to our e-commerce platform, where buyers and sellers converge to explore a world of goods and services. 
            Our platform serves as the ultimate marketplace, connecting individuals and businesses alike in a seamless online shopping experience. 
            Explore, buy, sell, and interact with ease on our dynamic platform.
          </p>
          <nav>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
          <a href="#app" className="btn">Explore Now</a>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="feature-section">
        <h2>Key Features</h2>
        <div className="feature">
          <img src="feature1.jpg" alt="Feature 1" />
          <div className="feature-info">
            <h3>What do you sell?</h3>
            <p>Dive into our diverse marketplace offering a plethora of products ranging from electronics and fashion to home essentials and beyond. 
              Whether you're a seasoned retailer or a budding entrepreneur, showcase your merchandise to a vast audience of potential buyers. 
              With our user-friendly interface and robust features, selling has never been easier.</p>
          </div>
        </div>
        <div className="feature">
          <img src="feature2.jpg" alt="Feature 2" />
          <div className="feature-info">
            <h3>What services do you offer?</h3>
            <p>Beyond just products, our platform facilitates the exchange of services, 
              enabling skilled professionals to showcase their expertise and connect with clients seeking their talents. 
              From freelance writing and graphic design to tutoring and consulting, 
              discover a world of opportunities to offer and receive services tailored to your needs.
              </p>
          </div>
        </div>
        <div className="feature">
          <img src="feature3.jpg" alt="Feature 3" />
          <div className="feature-info">
            <h3>What do you want to buy?</h3>
            <p>On our platform, your desired products are just a click away. 
              Explore an extensive array of offerings from trusted sellers, ranging from everyday essentials to unique finds. 
              With advanced search filters and personalized recommendations, finding exactly what you're looking for has never been more convenient. 
              Whether it's a must-have gadget, a fashionable accessory, 
              or a specialty item, fulfill your shopping desires effortlessly.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>Our e-commerce platform was born out of a necessity for seamless digital commerce in Nigeria. 
          Faced with the absence of a comprehensive online marketplace, we set out to create a platform 
          that empowers businesses and individuals to engage in transactions effortlessly. Driven by the vision of 
          bridging the gap between buyers and sellers, we're dedicated to providing a solution that revolutionizes 
          the way commerce is conducted in Nigeria, fostering growth and opportunity for all.</p>
        <p> This project is a Portfolio Project for Holberton School.</p>
        <div className="team-members">
          <div className="member">
            <h3>Olaosebikan Fawas</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/fawas-olaosebikan-8a3846159">LinkedIn</a></li>
              <li><a href="github.com/success96">GitHub</a></li>
              <li><a href="twitter.com/Fawasola">Twitter</a></li>
            </ul>
          </div>
          {/* Add more team members as needed */}
        </div>
        <a href="https://github.com/success96/TradeHub" className="btn">GitHub Repository</a>
      </section>
    </div>
  );
}

export default LandingPage;
