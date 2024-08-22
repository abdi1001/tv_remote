import React from 'react';
import './TVRemote.css';

function TVRemote() {
  return (
    <div className="tv-remote-container">
      <header className="header-section">
        <div className="container">
          <img src="/assets/app-logo.png"alt="App Logo" className="app-logo" />
          <h1 className="app-title">Take Control of Your TV</h1>
          <p className="app-subtitle">The Ultimate TV Remote App</p>
          <a href="link-to-app-store" className="cta-button">Download on the App Store</a>
        </div>
      </header>

      <section className="features-section">
        <div className="features-content">
          <div className="features-text">
            <h2 className="section-title">Why Choose Our App?</h2>
            <div className="feature-grid">
              <div className="feature-item">
                <h3>Effortless Setup</h3>
                <p>Get started in minutes with our easy-to-follow setup guide.</p>
              </div>
              <div className="feature-item">
                <h3>Ergonomic Design</h3>
                <p>An intuitive interface that’s comfortable and easy to use.</p>
              </div>
              <div className="feature-item">
                <h3>Always Within Reach</h3>
                <p>Your remote is always with you, right on your smartphone.</p>
              </div>
              <div className="feature-item">
                <h3>Comprehensive Control</h3>
                <p>Manage power, volume, channels, and inputs seamlessly.</p>
              </div>
              <div className="feature-item">
                <h3>Battery-Free Operation</h3>
                <p>Powered by your smartphone, no more need for batteries.</p>
              </div>
              <div className="feature-item">
                <h3>Easy-Connect</h3>
                <p>Automatically connects based on your preferences.</p>
              </div>
            </div>
          </div>
          <div className="features-image">
            <img src="/assets/remote-screen.png" alt="Remote Control Screen" />
          </div>
        </div>
      </section>

      <section className="settings-section">
        <div className="container">
          <h2 className="section-title">How to Use the Settings</h2>
          <ol className="settings-list">
            <li><strong>Enter the TV IP Address:</strong> Find this in your TV's network settings.</li>
            <li><strong>Enter the Auth PSK:</strong> Set this on your TV’s network settings page.</li>
            <li><strong>Save the Settings:</strong> Click "Save" to connect your app to the TV.</li>
          </ol>
          <img src="/assets/settings-screen.png" alt="Settings Screenshot" className="screenshot-image"/>
        </div>
      </section>

      <section className="download-section">
        <div className="container">
          <h2 className="section-title">Get the App</h2>
          <p>Available exclusively on the App Store.</p>
          <a href="link-to-app-store" className="download-button">Download on the App Store</a>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <form action="https://formspree.io/f/xwpenakl" method="POST" className="contact-form">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default TVRemote;
