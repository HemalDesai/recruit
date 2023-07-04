import React from 'react';
// import 'global.css';

const LandingPage = () => {
  return (
    <div>
       
      

<div className="container">
        <header className="header">
          <div className="header-overlay">
            <h1>Online Recruitment Solution</h1>
            <h2>Efficiency in Hiring for Managers and HR Professionals</h2>
          </div>
        </header>

        <section className="intro-section">
          <h3>Streamline Your Hiring Process</h3>
          <p>Our online recruitment solution simplifies and accelerates the hiring process, allowing you to find the right candidates more efficiently.</p>
        </section>

        <section className="features-section">
          <h3>Key Features</h3>
          <div className="feature">
            <i className="fas fa-check-circle"></i>
            <div>
              <h4>Advanced Candidate Search</h4>
              <p>Effortlessly find the perfect candidates with our advanced search filters and intelligent matching algorithms.</p>
            </div>
          </div>
          <div className="feature">
            <i className="fas fa-check-circle"></i>
            <div>
              <h4>Automated Screening</h4>
              <p>Save time by automating the initial screening process and focus on the most qualified applicants.</p>
            </div>
          </div>
          <div className="feature">
            <i className="fas fa-check-circle"></i>
            <div>
              <h4>Collaborative Hiring Workflow</h4>
              <p>Enable seamless collaboration among hiring managers and HR professionals to streamline decision-making.</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h3>What Our Clients Say</h3>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vitae quam mollis faucibus.</p>
            </div>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Testimonial Author" />
              <div>
                <p>John Doe</p>
                <span>HR Manager, ABC Company</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>Ut pulvinar ligula a risus blandit, in fringilla mauris tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus egestas ultrices lacus, ut gravida est convallis a.</p>
            </div>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Testimonial Author" />
              <div>
                <p>Jane Smith</p>
                <span>Talent Acquisition Specialist, XYZ Corp</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h3>Ready to Improve Your Hiring Process?</h3>
          <a href='/search' className="cta-button">Get Started</a>
        </section>

        <section className="info-section">
          <h3>Additional Information</h3>
          <p>Learn more about our online recruitment solution and how it can benefit your organization:</p>
          <ul>
            <li><a href="/resources/case-studies">Case Studies</a></li>
            <li><a href="/resources/whitepapers">Whitepapers</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </section>

        <footer className="footer">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>
      <style>{`
       
      `}</style>
    </div>
  );
};

export default LandingPage;
