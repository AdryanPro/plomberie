import { useState } from 'react'
import './App.css'
import plobierBg from "./assets/plombierMainImg.jpg"
import { Wrench, Droplet,  Flame, Toilet, ShowerHead as Shower, AlertCircle, PhoneCall, Clock } from 'lucide-react';

function App() {
  const services = [
    {
      title: "Réparation de fuite de plomberie",
      Icon: Droplet
    },
    {
      title: "Débouchage des canalisations",
      Icon: Wrench
    },
    {
      title: "Installation, dépannage de votre chauffe-eau ou ballon d'eau chaude",
      Icon: Flame
    },
    {
      title: "Pose et réparation de tous type d'éviers et de lavabos",
      Icon: Wrench
    },
    {
      title: "Pose de WC",
      Icon: Toilet
    },
    {
      title: "Pose et remplacement du siphon",
      Icon: Wrench
    },
    {
      title: "Mise en place de votre robinetterie",
      Icon: Shower
    },
    {
      title: "Vidanges fosses septiques",
      Icon: Droplet
    }
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / 10).toFixed(2);
    const rotateY = (-(x - centerX) / 10).toFixed(2);
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    card.style.transition = 'none';
  };
  
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    e.currentTarget.style.transition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)';
  };

  const steps = [
    {
      title: "IDENTIFIEZ BRIÈVEMENT VOTRE PROBLÈME",
      Icon: AlertCircle,
      description: "Prenez un moment pour identifier clairement le problème de plomberie que vous rencontrez. Plus vous serez précis, plus nous pourrons vous aider efficacement."
    },
    {
      title: "CONTACTEZ GARCIA ASSISTANCE",
      Icon: PhoneCall,
      description: "Appelez notre service d'assistance disponible 24/7. Nos experts sont là pour vous écouter et planifier une intervention rapide adaptée à votre situation."
    },
    {
      title: "GARDEZ VOTRE CALME JUSQU'À L'ARRIVÉE DU TECHNICIEN",
      Icon: Clock,
      description: "Notre équipe se déplace dans les plus brefs délais. En attendant, suivez les conseils de sécurité donnés par notre service d'assistance."
    }
  ];
  return (
    <div className='appWrapper'>
    <header>
      {/* <nav>
        <img className='logoNavBar' src="https://tse3.mm.bing.net/th?id=OIP.N0UY3OGIDK7VMCzBZC1oTQHaHa&w=474&h=474&c=7" alt="Description of the image" />
      </nav> */}
      <h1>Besoin d'un <span class="souligne">Plombier</span> À <br/><span class="souligne">Paris ?</span> Disponible 24h/24 7J/7 <br /> au <span class="souligne">+33123456789</span></h1>
      <button className='btnContactezNousHeader sizeBtn'>
        <a href="tel:+33769084998" class="a">Appelez-nous</a>
        </button>
    </header>
    <div className="container">
      <section className="section">
        <div className="section-content">
          <h2 className="title">
            Nos Services
          </h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon-container">
                  <div className="icon">
                    <service.Icon size={40} />
                  </div>
                </div>
                <h3 className="card-title">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

    <section className='WrappeCommentProceder'>
      <div className="section-content">
        <h2 className="title">Comment Procéder ?</h2>
        
        <div className='wrappeCardsCommentAgir'>
          {steps.map((step, index) => (
            <div 
              key={index}
              className="step-card"
            >
              <div className="step-icon-container">
                <step.Icon size={32} />
              </div>
              <h3 className="step-title">
                {step.title}
              </h3>
              <p className="step-description">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="styleBtn">
      <button className='btnContactezNousHeader'>
        <a href="tel:+33769084998" class="a">Appelez-nous</a>
      </button>
    </div>

    <section className="PourquoiNousChoisir-container">
      <div className="PourquoiNousChoisir-header">
        <h3 className="PourquoiNousChoisir-title">
          Experts en plomberie depuis plus de 35 ans.
        </h3>
        <p className="PourquoiNousChoisir-description">
          Garcia assistance, c'est 35 ans de problèmes résolus dans toute la région de l'Hérault.
        </p>
      </div>

      <div className="PourquoiNousChoisir-grid">
        <div className="PourquoiNousChoisir-card">
          <h3 className="PourquoiNousChoisir-title">EXPERTISE</h3>
          <p className="PourquoiNousChoisir-text">
            Faites confiance à notre équipe de professionnels qualifiés pour des solutions de plomberie efficaces et durables.
          </p>
        </div>
        <div className="PourquoiNousChoisir-card">
          <h3 className="PourquoiNousChoisir-title">RÉACTIVITÉ</h3>
          <p className="PourquoiNousChoisir-text">
            Intervention rapide en moins de 30 minutes pour toutes vos urgences, disponibles 24/7.
          </p>
        </div>
        <div className="PourquoiNousChoisir-card">
          <h3 className="PourquoiNousChoisir-title">TRANSPARENCE</h3>
          <p className="PourquoiNousChoisir-text">
            Des tarifs clairs et compétitifs, avec devis gratuits et sans engagement.
          </p>
        </div>
      </div>

      <div className="cta-container">
        <h3 className="cta-text">
          "DES TECHNICIENS DE LA RÉGION AVEC DU SAVOIR FAIRE"
        </h3>
        <a href="tel:0972101723" className="cta-button">
          CONTACTEZ-NOUS 09 72 10 17 23
        </a>
      </div>
    </section>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#team">Meet the Team</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal Information</h3>
          <ul>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-service">Terms of Service</a></li>
            <li><a href="#cookies-policy">Cookies Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>To Discover</h3>
          <ul>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#events">Upcoming Events</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default App
