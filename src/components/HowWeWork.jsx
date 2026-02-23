import { Leaf, Search, Check, Package, Plane, Ship } from 'lucide-react';
import '../styles/HowWeWork.css';

export default function HowWeWork() {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'PRODUCT SOURCING',
      description: 'From trusted farms & manufactures',
      icon: Leaf,
      color: '#16a34a',
      bgColor: '#dcfce7'
    },
    {
      id: 2,
      number: '02',
      title: 'QUALITY & INSPECTION',
      description: 'Strict quality control & compliance',
      icon: Check,
      color: '#3b82f6',
      bgColor: '#dbeafe'
    },
    {
      id: 3,
      number: '03',
      title: 'PACKAGING & DOCUMENTATION',
      description: 'Export-ready processing',
      icon: Package,
      color: '#14b8a6',
      bgColor: '#ccfbf1'
    },
    {
      id: 4,
      number: '04',
      title: 'GLOBAL SHIPPING',
      description: 'Sea & Air freight coordination',
      icon: Ship,
      secondaryIcon: Plane,
      color: '#3b82f6',
      bgColor: '#dbeafe'
    }
  ];

  return (
    <section className="how-we-work-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How We Work</h2>
        </div>

        <div className="steps-container">
          <div className="connection-line">
            <div className="line-dot dot-1"></div>
            <div className="line-dot dot-2"></div>
            <div className="line-dot dot-3"></div>
            <div className="line-dot dot-4"></div>
          </div>

          <div className="steps-grid">
            {steps.map((step) => {
              const Icon = step.icon;
              const SecondaryIcon = step.secondaryIcon;
              return (
                <div key={step.id} className="step-card">
                  <div className="step-icon-circle" style={{ '--step-color': step.color, '--step-bg': step.bgColor }}>
                    <div className="icon-container">
                      {step.secondaryIcon ? (
                        <div className="dual-shipping-icons">
                          <Icon className="primary-shipping-icon" />
                          <SecondaryIcon className="secondary-shipping-icon" />
                        </div>
                      ) : (
                        <Icon className="step-icon" />
                      )}
                    </div>
                  </div>

                  <div className="step-number">{step.number}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
