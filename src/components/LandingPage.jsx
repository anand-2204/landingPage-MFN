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

            <h2>Ask Questions, Get Answers</h2>
            <p>
              A smart Q&A platform to explore ideas, ask questions, get
              meaningful answers, and share knowledge with the world. Fast,
              clean, and free to use.
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
            <img src="" alt="" />
            <h3>Ask Anything</h3>
            <p>
              Post your questions and get thoughtful answers from a community of
              knowledgeable people.
            </p>
          </div>
          <div className="featureContent">
            <img src="" alt="" />
            <h3>Share Knowledge</h3>
            <p>
              Contribute your expertise and help others learn. Build your
              reputation as a trusted expert.
            </p>
          </div>
          <div className="featureContent">
            <img src="" alt="" />
            <h3>Connect & Learn</h3>
            <p>
              Join a vibrant community of curious minds. Discover new
              perspectives and grow together.
            </p>
          </div>
          <div className="featureContent">
            <img src="" alt="" />
            <h3>Lightning Fast</h3>
            <p>
              Get instant answers with our optimized platform. No waiting, just
              pure knowledge exchange.
            </p>
          </div>
          <div className="featureContent">
            <img src="" alt="" />
            <h3>Safe & Secure</h3>
            <p>
              Your privacy matters. We ensure a safe environment for meaningful
              discussions.
            </p>
          </div>
          <div className="featureContent">
            <img src="" alt="" />
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
              Post your questions or share your knowledge by answering others'
              queries.
            </p>
          </div>
          <div className="featureContent">
            <div className="number">
              <h3>3</h3>
            </div>
            <h3>Grow Together</h3>
            <p>
              Build your reputation, connect with experts, and expand your
              knowledge..
            </p>
          </div>
        </div>
      </section>
      <section className="four">
        <h2>What Our Users Say</h2>
        <p>Join thousands of satisfied knowledge seekers</p>
        <div className="features">
          <div className="featureContent">
            <div>⭐⭐⭐⭐⭐</div>
            <div>
              <p>
                "Why&Who has completely changed how I learn. The community is
                incredibly helpful and knowledgeable!"
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
                "Best Q&A platform I've used. Fast, clean interface and
                genuinely helpful answers every time."
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
                I love sharing my knowledge here. The community appreciates
                quality answers and it's very rewarding!"
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
     

      <section>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footerDetails">
                <h2>Ready to Start Your Journey?</h2>
                <p>
                  Join thousands of curious minds on Why&Who today. It's free,
                  fast, and fun!
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
                    A modern Q&A platform where curious minds connect, learn,
                    and grow through meaningful discussions.
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
