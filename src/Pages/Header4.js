import React from 'react'
import "../Pages/Header4.css";

function Header4() {
  return (
    <div className="holistic-container">
      <h2 className="title">A holistic approach to healing</h2>
      <div className="approach-cards">
        <div className="card">
          <i className="icon fa fa-stethoscope" aria-hidden="true"></i>
          <h3>World class alternative therapies</h3>
          <p>
            Our naturopathic cancer expert tailors therapies based on cancer type and stage,
            not replacing traditional treatments like chemotherapy or surgery, but integrating
            technology and nutrition for enhanced healing. Therapies include nutritional suite of IVs,
            PEMF, sauna, Celsius42 Local Regional Hyperthermia. Our unique holistic cancer retreat with spa
            and therapies is unmatched in Canada.
          </p>
        </div>
        <div className="card">
          <i className="icon fa fa-apple" aria-hidden="true"></i>
          <h3>Farm To Table Daily Meals</h3>
          <p>
            We provide a dedicated chef who sources local, fresh ingredients that help support the body for cancer recovery.
            The chef will prepare 3 meals a day tailored to the needs of all our guests. We will also provide high-quality,
            freshly squeezed juices made from organic veggies and fruits.
          </p>
        </div>
        <div className="card">
          <i className="icon fa fa-tint" aria-hidden="true"></i>
          <h3>Drink Living Water And Feel Alive</h3>
          <p>
            Our land has a natural spring that produces living water full of minerals that makes you feel alive when you drink it.
            "Alive water" is incredibly important when on your journey of healing and now you don't even need to go somewhere to find it,
            you'll have 24/7 access to all the water you need.
          </p>
        </div>
        <div className="card">
          <i className="icon fa fa-lightbulb-o" aria-hidden="true"></i>
          <h3>Staying Active Encourages Healing</h3>
          <p>
            No matter what stage you are at with your healing journey, you will find a way to stay active at our healing oasis.
            You can simply go on a walk in the forest, absorbing all the energy from the trees, or play a round of disc golf,
            paddle on a kayak, or swim and feel vitalized. Yoga in the meadow or on the beach is also available.
          </p>
        </div>
        <div className="card">
          <i className="icon fa fa-bed" aria-hidden="true"></i>
          <h3>Have A Deep Sleep Surrounded By Nature</h3>
          <p>
            Sleep is vital to recovering from any kind of disease as it's the time your body gets to recharge and mend itself.
            Each cabin stays nice and cool in the summer and is very quiet and dark, giving you the best environment for sleeping.
          </p>
        </div>
        <div className="card">
          <i className="icon fa fa-leaf" aria-hidden="true"></i>
          <h3>Supplements That Empower Your Body</h3>
          <p>
            We source some of the best quality supplements that will give your body a "boost" as it is actively working to heal itself.
            Supplements include enzymes which are essential to recovery and usually very depleted in most people's bodies, vitamins, and herbs.
          </p>
        </div>
      </div>
      <div><hr></hr></div>
    </div>
  )
}

export default Header4
