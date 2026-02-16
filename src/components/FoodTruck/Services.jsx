import NavScrollExample from "../navbar";
import "./Services.css";

function Services() {
  return (
    <>
      <NavScrollExample />

      <div className="services-container">

        <h1 className="services-title">🔥 Our Food Truck Services</h1>

        <div className="services-grid">

          <div className="service-card">
            <h2>💍 Wedding Catering</h2>
            <p>
              We provide premium catering services for weddings with customized
              menus, live counters, and delicious street-style fusion food.
            </p>
          </div>

          <div className="service-card">
            <h2>🎉 Function Catering</h2>
            <p>
              Birthday parties, corporate events, family functions — we bring
              our food truck and serve fresh, hot meals on the spot.
            </p>
          </div>

          <div className="service-card">
            <h2>🍽️ Dine-In Experience</h2>
            <p>
              Visit our food truck location and enjoy freshly prepared meals
              with a vibrant and fun atmosphere.
            </p>
          </div>

          <div className="service-card">
            <h2>🥡 Takeaway Orders</h2>
            <p>
              Quick and hygienic takeaway options available. Order your
              favorite dishes and pick them up hot and fresh.
            </p>
          </div>

          <div className="service-card">
            <h2>🚚 Custom Event Orders</h2>
            <p>
              Special menu requests? Bulk food orders? We customize everything
              according to your event needs.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Services;
