import { ArrowRight, Users, Leaf, Flame, Apple, Package, Factory } from 'lucide-react';
import '../styles/TradeCategories.css';

export default function TradeCategories({ onNavigate }) {
  const categories = [
    {
      id: 1,
      title: 'Fresh produce',
      description: 'Farm-fresh bulk vegetables from trusted sources.',
      icon: Leaf,
      users: 245,
      color: '#16a34a'
    },
    {
      id: 2,
      title: 'Spices & Plantation Crops',
      description: 'Premium spices and plantation products.',
      icon: Flame,
      users: 189,
      color: '#dc2626'
    },
    {
      id: 3,
      title: 'Fruits',
      description: 'Quality fruits for domestic and global trade.',
      icon: Apple,
      users: 312,
      color: '#ea580c'
    },
    {
      id: 4,
      title: 'Processed & Value-Added',
      description: 'Ready-to-trade processed and specialty products.',
      icon: Package,
      users: 156,
      color: '#0891b2'
    },
    {
      id: 5,
      title: 'Industrial & Commercial',
      description: 'Bulk industrial and commercial supply solutions.',
      icon: Factory,
      users: 203,
      color: '#7c3aed'
    }
  ];

  return (
    <section className="trade-categories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Core Trade Categories</h2>
          <p className="section-subtitle">
            Explore our premium selection of agricultural products sourced from the best farms
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="category-card" style={{ '--category-color': category.color }}>
                <div className="card-header">
                  <div className="category-icon">
                    <Icon className="icon-component" />
                  </div>
                  <div className="user-count">
                    <Users className="users-icon" />
                    <span className="users-number">{category.users}</span>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>

                <div className="card-footer">
                  <button
                    className="view-products-btn"
                    onClick={() => onNavigate('products')}
                  >
                    View Products
                    <ArrowRight className="arrow-icon" />
                  </button>
                </div>

                <div className="card-overlay"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
