import React, { useState } from "react";
import "../assets/style.css";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleBackground = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <section className={`one ${darkMode ? "dark" : ""}`}>
        <div className="header">
          <button onClick={toggleBackground}>
            <img
              src={darkMode ? "/sunny.png" : "/moon.png"}
              alt={darkMode ? "light mode" : "dark mode"}
            />
          </button>
        </div>

        <div className="main">
          <div className="content">
            <div className="logo">
              <a href="https://whynwho.com/">
                <img src="/34.png" alt="logo" className="logobtn" />
              </a>
            </div>

            <h2>Find Lost Items Easily with GPS</h2>
            <p>
              Use our app to easily discover lost items nearby with the help of AI assistance and smart geo‑tagging.
               Our intelligent system quickly matches lost and found reports, making it faster to reunite owners with their belongings
            </p>

            <div className="btn">
              <button className="playstore">
                <img src="/playstore.png" alt="android" />
                Download on Android
              </button>
              <button className="chrome">
                <img src="/chrome.png" alt="website" />
                Visit Website
              </button>
            </div>
          </div>

          <div className="animation"></div>
        </div>
      </section>
      <section className="two">
        <h2>Why Choose Missing Found Network</h2>
        <p>Join thousands of curious minds exploring knowledge togetter</p>
        <div className="features">
          <div className="featureContent">
            <div className="imageBox">   <img src="/question.png" alt="" />  </div>
           
            <h3>Ask Anything</h3>
            <p>
              Post your questions and get thoughtful answers from a community of
              knowledgeable people.
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">    <img src="/file.png" alt="" /> </div>
           
            <h3>Share Knowledge</h3>
            <p>
              Contribute your expertise and help others learn. Build your
              reputation as a trusted expert.
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">   <img src="/connect.png" alt="" />  </div>
           
            <h3>Connect & Learn</h3>
            <p>
              Join a vibrant community of curious minds. Discover new
              perspectives and grow together.
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">   <img src="/lightning.png" alt="" />  </div>
           
            <h3>Lightning Fast</h3>
            <p>
              Get instant answers with our optimized platform. No waiting, just
              pure knowledge exchange.
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">     <img src="/shield.png" alt="" /> </div>
          
            <h3>Safe & Secure</h3>
            <p>
              Your privacy matters. We ensure a safe environment for meaningful
              discussions.
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">  <img src="/doller.png" alt="" />  </div>
            
            <h3>100% Free</h3>
            <p>
              No hidden costs, no premium tiers. Knowledge should be accessible
              to everyone, always.
            </p>
          </div>
        </div>
      </section>
      <section className="three">
        <h2>How It Works</h2>
        <p>Get started in three simple steps</p>
        <div className="features">
          <div className="featureContent">
            <div className="number">
              <h3>1</h3>
            </div>
            <h3>Sign Up Free</h3>
            <p>
              Create your account in seconds. No credit card required,
              completely free forever.
            </p>
          </div>
          <div className="featureContent">
            <div className="number">
              <h3>2</h3>
            </div>
            <h3>Ask or Answer</h3>
            <p>
               "Report your lost items or help others by sharing what you’ve found."

            </p>
          </div>
          <div className="featureContent">
            <div className="number">
              <h3>3</h3>
            </div>
            <h3>Grow Together</h3>
            <p>
              "Post details of what you’ve lost,
              or assist others by responding to their 
              listings."

            </p>
          </div>
        </div>
      </section>
      <section className="four">
        <h2>What Our Users Say</h2>
        <p>Join thousands of satisfied users</p>
        <div className="features">
          <div className="featureContent">
            <div>⭐⭐⭐⭐⭐</div>
            <div>
              <p>
               I’m so relieved to have my laptop back! The process was smooth,
                and I really appreciate the verification step—it made me feel secure that my item was returned to the right person."
              </p>
            </div>
            <div className="user">
              <div className="profile">
                <h3>A</h3>
              </div>
              <div>
                <h3>Amit kumar</h3>
                <p>Student</p>
              </div>
            </div>
          </div>

          <div className="featureContent">
            <div>⭐⭐⭐⭐⭐</div>
            <div>
              <p>
                Posting my lost phone was simple, and I quickly got matched with the finder.
                 The clear instructions and mobile-friendly design made the whole experience stress-free."
              </p>
            </div>
            <div className="user">
              <div className="profile">
                <h3>P</h3>
              </div>
              <div>
                <h3>Priya Sharma</h3>
                <p>Developer</p>
              </div>
            </div>
          </div>

          <div className="featureContent">
            <div>⭐⭐⭐⭐⭐</div>
            <div>
              <p>
               "I never thought I’d see my wallet again, but thanks to this platform and the kind people using it, 
               I did. It’s wonderful to have a space that encourages honesty and helps connect people."
              </p>
            </div>
            <div className="user">
              <div className="profile">
                <h3>R</h3>
              </div>
              <div>
                <h3>Rahul Verma</h3>
                <p>Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="five">
        <div className="firstBox">
          <h2>Our Mission</h2>
          <p>
            
            The Lost and Found Network is a 
            GPS-based platform that allows users to report 
            found items and search for lost belongings 
            using AI-generated descriptions and geo tags 
            for easy retrieval
          </p>
          <p>
           Join our community to help reunite lost 
           items with their owners. Simply take a picture, 
           submit it, and let our AI assist in finding what 
           you’ve lost or reporting what you’ve found.
          </p>
        </div>
        <div class="secondBox">
          <div className="bulbSection">
          <div class="partOne">
            <div class="bulb">
              <img src="/bulb.png" alt="icon" />
            </div>
            <h3>1, 00, 000 +</h3>
            <p>Items Recovered</p>
          </div>

          <div class="partTwo">
            <div className="usercount">
              <h3>50, 000 +</h3>
              <p>Active Users</p>
            </div>
            <div className="TopicCount">
              <h3>500 +</h3>
              <p>Topics</p>
            </div>
          </div>
          </div>
          </div>
        
      </section>

      <section>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footerDetails">
                <h2>Get in Touch</h2>
                <p>
                 Reach out to us for assistance with lost items or to report
                  found objects using our GPS-based platform.
                </p>

                <div className="btn">
                  <button className="playstore">
                    <img src="/playstore.png" alt="android" />
                    Download on Android
                  </button>
                  <button className="chrome">
                    <img src="/chrome.png" alt="website" />
                    Visit Website
                  </button>
                </div>
              </div>

              <div className="logo-links">
                <div className="footer-logo">
                  <a href="#">
                    <img src="/37.png" alt="MFN Logo" width="200" height="60" />
                  </a>
                  <p className="footer-description">
                   You can set up Find Hub so you’re prepared in case
                    you lose your device. This feature works for phone,
                     tablet, Wear OS watch, Android XR device, headphones,
                      or something that has a tracker tag attached
                  </p>
                  <div className="footer-actions">
                    <a href="#">Visit Website</a>
                  </div>
                </div>

                <div className="footer-links">
                  <div className="footer-column">
                    <h4>Platform</h4>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Questions</a>
                      </li>
                      <li>
                        <a href="#">Answers</a>
                      </li>
                      <li>
                        <a href="#">Topics</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2026 MFN . All rights reserved.</p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
