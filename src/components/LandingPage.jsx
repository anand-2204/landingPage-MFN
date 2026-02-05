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

            <h2>Center For Unidentified & Missing Persons</h2>
            <p>
              Missing Found Network is a Non-profit 100% volunteer organization devoted to
               assisting investigating agencies in bringing closure to national 
              cold cases concerning Missing & Unidentified Persons.
               It is our mission to give the nameless back their names and return the
                missing to their families.</p>

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
        <p>Join hands with families, volunteers,
           and communities to bring missing loved ones back home.</p>
        <div className="features">
          <div className="featureContent">
            <div className="imageBox">   <img src="/missing.png" alt="" />  </div>
           
            <h3>Instant Alerts</h3>
            <p>
              Receive immediate notifications when someone
               goes missing in your area, so you can act 
               quickly.
     
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">    <img src="/location.png" alt="" /> </div>
           
            <h3>Location Tracking</h3>
            <p>
             Share last‑seen details and track search efforts
              with interactive maps to coordinate effectively.
      
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">   <img src="/connect.png" alt="" />  </div>
           
            <h3>Community Support</h3>
            <p>
               Connect with volunteers, NGOs, and local 
               authorities to strengthen search and rescue 
               efforts.
     
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">   <img src="/lightning.png" alt="" />  </div>
           
            <h3>Rapid Response</h3>
            <p>
               Our platform ensures fast communication between families and responders, reducing critical delays.
      
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">     <img src="/shield.png" alt="" /> </div>
          
            <h3>Safe & Verified</h3>
            <p>
                All reports are verified to prevent misinformation,
                 ensuring a safe and trustworthy environment.
      
            </p>
          </div>
          <div className="featureContent">
             <div className="imageBox">  <img src="/doller.png" alt="" />  </div>
            
            <h3>Always Free</h3>
            <p>
              Families should never pay to find their loved ones. Our mission is free and accessible to all.
     
            </p>
          </div>
        </div>
      </section>
      <section className="three">
        <h2>How It Works</h2>
        <p>Reconnect in three simple steps</p>
        <div className="features">
          <div className="featureContent">
            <div className="number">
              <h3>1</h3>
            </div>
            <h3>Create Your Profile</h3>
            <p>
               Sign up quickly and securely. Share basic details so the community
        knows who you are and how to reach you.

            </p>
          </div>
          <div className="featureContent">
            <div className="number">
              <h3>2</h3>
            </div>
            <h3>Report or Search</h3>
            <p>
                Post information about missing persons, or browse listings
        to see if someone has already reported a match.

            </p>
          </div>
          <div className="featureContent">
            <div className="number">
              <h3>3</h3>
            </div>
            <h3>Connect & Reunite</h3>
            <p>
              Reach out directly through the platform, share updates, and help
        bring people back together safely.


            </p>
          </div>
        </div>
      </section>
      <section className="four">
        <h2>What Our Users Say</h2>
        <p>Join thousands of grateful families</p>
        <div className="features">
          <div className="featureContent">
            <div>⭐⭐⭐⭐</div>
            <div>
              <p>
               "When my younger brother went missing in the city, I was terrified.
          Thanks to this network, we were able to post details quickly and
          connect with someone who had seen him nearby. We reunited within
          hours—it felt like a miracle."
</p>
            </div>
            <div className="user">
              <div className="profile">
                <h3>A</h3>
              </div>
              <div>
                <h3>Anjali Rao</h3>
                <p>Student</p>
              </div>
            </div>
          </div>

          <div className="featureContent">
            <div>⭐⭐⭐⭐⭐</div>
            <div>
               <p>
          "My elderly father, who has memory issues, wandered off one evening.
          A kind stranger reported him here, and we were notified immediately.
          The platform gave us hope and helped bring him home safely."
        </p>

            </div>
            <div className="user">
              <div className="profile">
                <h3>M</h3>
              </div>
              <div>
                <h3>Mehul Desai</h3>
                <p>Entrepreneur</p>
              </div>
            </div>
          </div>

          <div className="featureContent">
            <div>⭐⭐⭐⭐⭐</div>
            <div>
             <p>
          "We were reunited with our little daughter after she got separated
          during a crowded festival. The community’s quick response and the
          platform’s alerts made all the difference. We’ll always be grateful."
        </p>

            </div>
            <div className="user">
              <div className="profile">
                <h3>R</h3>
              </div>
              <div>
                <h3>Ritika Sharma</h3>
                <p>Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="five">
        <div className="firstBox">
          <h2>Our Mission</h2>
          <p>
      The Missing & Found Network is a GPS-powered platform designed to bring
      peace of mind to families and communities. Whether it’s a misplaced item
      or a missing loved one, our AI-driven system uses smart descriptions and
      geo-tags to make searching faster, safer, and more reliable.
    </p>
    <p>
      We believe in the power of community. By joining us, you can help reunite
      people with what matters most. Simply share a photo or description, and
      let our intelligent matching system connect reports with potential leads
      in real time.
    </p>

        </div>
        <div class="secondBox">
          <div className="bulbSection">
          <div class="partOne">
            <div class="bulb">
              <img src="/bulb.png" alt="icon" />
            </div>
            <h3>1, 00, 000 +</h3>
            <p>Successful Reunions</p>
          </div>

          <div class="partTwo">
            <div className="usercount">
              <h3>50, 000 +</h3>
              <p>Active Members</p>
            </div>
            <div className="TopicCount">
              <h3>500 +</h3>
              <p>Communities & Topics</p>
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
            Need help finding a missing person or reporting someone found?
            Our GPS-powered platform is here to connect families, friends,
            and communities with real-time updates and secure communication.
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
              The Missing & Found Network helps reunite families and restore
              peace of mind. Whether it’s a child, an elderly loved one, or
              someone separated in a crowd, our platform uses GPS and AI
              matching to bring people back together safely.
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
                        <a href="#">Report</a>
                      </li>
                      <li>
                        <a href="#">Matches</a>
                      </li>
                      <li>
                        <a href="#">Community</a>
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
             <p>© 2026 Missing & Found Network. All rights reserved.</p>

            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
