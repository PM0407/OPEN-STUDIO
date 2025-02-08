const WhyMe = () => {
    return (
      <section className="why-me">
        <p className="section-tag">Why me?</p>
        
        <h2>
          Mad capabilities for slick<br />
          procedures and superior webpages
        </h2>
        
        <p className="section-description">
          Discover my capabilities that distinguish me from the rest of the marketplace's innovators!
        </p>
  
        <div className="features-grid">
          {/* Lead Conversion Feature */}
          <div className="feature-box">
            <h3>Enhanced Lead Conversion Design</h3>
            <p>
              Our vibrant design approaches foster exceptional surge in conversion rates by
              inspiring guests to undertake resolved, intentional steps.
            </p>
            <div className="feature-visual conversion-visual">
              <div className="avatars">
                <img src="reactbits-icon.jpg" alt="Avatar 1" className="avatar" />
                <img src="/placeholder.svg" alt="Avatar 2" className="avatar" />
                <img src="/placeholder.svg" alt="Avatar 3" className="avatar" />
              </div>
              <div className="mockup">
                <button className="btn-touch">Get in Touch</button>
                <span className="badge">3+</span>
              </div>
            </div>
          </div>
  
          {/* Performance Feature */}
          <div className="feature-box">
            <h3>Peak Performance Across All Screens</h3>
            <p>
              Our flawless website design guarantees impeccable performance on all screens,
              from desktops and laptops to tablets and mobile phones.
            </p>
            <div className="feature-visual devices-visual">
              <div className="device-type">
                <span className="check">✓</span>
                <span>Large Screens</span>
                <div className="device-mock large"></div>
              </div>
              <div className="device-type">
                <span className="check">✓</span>
                <span>Small Screens</span>
                <div className="device-mock medium"></div>
              </div>
              <div className="device-type">
                <span className="check">✓</span>
                <span>Mobiles</span>
                <div className="device-mock small"></div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bottom-features">
          {/* Swift Completion */}
          <div className="bottom-feature">
            <h3>Swift Completion Pace</h3>
            <p>
              Expedite the rollout of your landing pages from a week to a fortnight, enabling speedy visibility to digital prospects while preserving the quality.
            </p>
            <div className="completion-visual">
              <div className="checklist"></div>
            </div>
          </div>
  
          {/* Superiority */}
          <div className="bottom-feature">
            <h3>Superiority Without Upselling</h3>
            <p>
              Persistently experience exceptional quality without added costs, reassuming unparalleled value and trust in every amenity we deliver.
            </p>
            <div className="graph-visual">
              <div className="bar quality">Quality Work</div>
              <div className="bar price">Low Price</div>
            </div>
          </div>
  
          {/* Effortless Experience */}
          <div className="bottom-feature">
            <h3>Effortless Experience</h3>
            <p>
              Our streamlined processes and high-quality strategies minimize your involvement, saving your time whilst boosting efficiency
            </p>
            <div className="progress-visual">
              <div className="progress-bar">
                <span className="start">Start</span>
                <img src="/placeholder.svg" alt="Progress Avatar" className="progress-avatar" />
                <span className="done">Done</span>
              </div>
              <span className="no-distractions">No Distractions</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyMe;
  