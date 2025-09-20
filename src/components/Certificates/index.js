import React from 'react';
import './index.css';

const Certificates = () => {
  // Certificates data from resume
  const certificatesData = [
    {
      title: 'Python Certification',
      issuedBy: 'NxtWave',
      date: 'April 08, 2024',
      id: 1
    },
    {
      title: 'Node.js Certification',
      issuedBy: 'NxtWave',
      date: 'July 12, 2024',
      id: 2
    },
    {
      title: 'GitHub Certification',
      issuedBy: 'NxtWave',
      date: 'July 12, 2024',
      id: 3
    },
    {
      title: 'HTML, CSS, Bootstrap',
      issuedBy: 'NxtWave',
      date: 'October 11, 2024',
      id: 4
    }
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <h2>Certificates</h2>
        <div className="certificates-grid">
          {certificatesData.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <div className="certificate-icon">🏆</div>
              <div className="certificate-content">
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-issuer">By {certificate.issuedBy}</p>
                <p className="certificate-date">{certificate.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
