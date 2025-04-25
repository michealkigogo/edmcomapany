import React from 'react';

const App = () => {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">ED&M ENGINEERING</div>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content container">
          <h1>Building the Future with Excellence</h1>
          <p>ED&M Engineering provides innovative civil engineering solutions and expert consulting services for projects of all scales.</p>
          <a href="#contact" className="btn">Get a Consultation</a>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services">
            <div className="service-card">
              <h3>Structural Engineering</h3>
              <p>Comprehensive structural analysis and design services for residential, commercial, and industrial buildings.</p>
            </div>
            <div className="service-card">
              <h3>Construction Management</h3>
              <p>Professional oversight of construction projects from planning to completion, ensuring quality and efficiency.</p>
            </div>
            <div className="service-card">
              <h3>Geotechnical Engineering</h3>
              <p>Soil analysis, foundation design, and earthworks solutions tailored to your project requirements.</p>
            </div>
            <div className="service-card">
              <h3>Transportation Engineering</h3>
              <p>Design and planning of roads, highways, and transportation systems with a focus on sustainability.</p>
            </div>
            <div className="service-card">
              <h3>Water Resources Engineering</h3>
              <p>Solutions for water supply, drainage, flood control, and wastewater management systems.</p>
            </div>
            <div className="service-card">
              <h3>Project Consulting</h3>
              <p>Expert advice and guidance throughout all phases of your construction project.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={{background: 'var(--light)'}}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p style={{textAlign: 'center'}}>[Project gallery with images and descriptions would be implemented here]</p>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About ED&M Engineering</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <p>ED&M Engineering Company Limited is a premier civil engineering and consulting firm dedicated to delivering innovative, sustainable, and cost-effective solutions to our clients.</p>
            <p>Founded in [YEAR], our company has grown to become a trusted partner for both public and private sector projects, with a reputation for excellence, integrity, and technical expertise.</p>
            <p>Our team of certified engineers and consultants brings decades of combined experience to every project, ensuring the highest standards of quality and safety.</p>
          </div>
        </div>
      </section>

      <section id="contact" style={{background: 'var(--light)'}}>
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <div>
              <h3>Get in Touch</h3>
              <p><strong>Address:</strong> [edmengineering24@gmail.com]</p>
              <p><strong>Phone:</strong> [+256786365493
                                      +256767504743
                                      +256763192462
                                      +256700462603    ]</p>
              <p><strong>Email:</strong> info@edmengineering.com</p>
              <p><strong>Hours:</strong> Monday-Friday: 8:00 AM - 5:00 PM</p>
            </div>
            <div>
              <h3>Send Us a Message</h3>
              <form>
                <div style={{marginBottom: '1rem'}}>
                  <input type="text" placeholder="Your Name" style={{width: '100%', padding: '0.8rem'}} />
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <input type="email" placeholder="Your Email" style={{width: '100%', padding: '0.8rem'}} />
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <input type="text" placeholder="Subject" style={{width: '100%', padding: '0.8rem'}} />
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <textarea placeholder="Your Message" style={{width: '100%', padding: '0.8rem', height: '150px'}}></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2023 ED&M Engineering Company Limited. All Rights Reserved.</p>
          <p>Professional Civil Engineering & Consulting Services</p>
        </div>
      </footer>
    </div>
  );
}

export default App;