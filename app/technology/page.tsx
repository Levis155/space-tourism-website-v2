import React from "react";

const TechnologyPage = () => {
  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>

      <div
        className="number-indicators flex"
        role="tablist"
        aria-label="technology list"
      >
        <button
          aria-selected="true"
          role="tab"
          aria-controls="vehicle-tab"
          data-image="vehicle-image"
          className="bg-dark text-white fs-600 ff-serif"
        >
          1
        </button>
        <button
          aria-selected="false"
          role="tab"
          aria-controls="spaceport-tab"
          data-image="spaceport-image"
          className="bg-dark text-white fs-600 ff-serif"
        >
          2
        </button>
        <button
          aria-selected="false"
          role="tab"
          aria-controls="capsule-tab"
          data-image="capsule-image"
          className="bg-dark text-white fs-600 ff-serif"
        >
          3
        </button>
      </div>

      {/* Launch Vehicle */}
      <article
        className="technology-details flow"
        id="vehicle-tab"
        role="tabpanel"
      >
        <header className="flow flow--space-small">
          <h2
            className="text-accent fs-400 ff-sans-cond uppercase"
            style={{ letterSpacing: "0.1475rem" }}
          >
            The terminology...
          </h2>
          <p id="technology-name" className="fs-700 ff-serif uppercase">
            Launch vehicle
          </p>
        </header>

        <p id="technology-description" className="text-accent">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </article>

      {/* SpacePort */}
      <article
        hidden
        className="technology-details flow"
        id="spaceport-tab"
        role="tabpanel"
      >
        <header className="flow flow--space-small">
          <h2
            className="text-accent fs-400 ff-sans-cond uppercase"
            style={{ letterSpacing: "0.1475rem" }}
          >
            The terminology...
          </h2>
          <p id="technology-name" className="fs-700 ff-serif uppercase">
            Spaceport
          </p>
        </header>

        <p id="technology-description" className="text-accent">
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      </article>

      {/* Space Capsule */}
      <article
        hidden
        className="technology-details flow"
        id="capsule-tab"
        role="tabpanel"
      >
        <header className="flow flow--space-small">
          <h2
            className="text-accent fs-400 ff-sans-cond uppercase"
            style={{ letterSpacing: "0.1475rem" }}
          >
            The terminology...
          </h2>
          <p id="technology-name" className="fs-700 ff-serif uppercase">
            Space capsule
          </p>
        </header>

        <p id="technology-description" className="text-accent">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </article>

      <picture id="vehicle-image">
        <img
          src="/technology/image-launch-vehicle-portrait.jpg"
          alt="the launch vehicle"
        />
        {/* <img
          hidden
          src="/technology/image-launch-vehicle-landscape.jpg"
          alt="the launch vehicle"
        />  */}
      </picture>
      <picture hidden id="capsule-image">
        <img
          src="/technology/image-space-capsule-portrait.jpg"
          alt="the space capsule"
        />
        {/* <img
          hidden
          src="/technology/image-space-capsule-landscape.jpg"
          alt="the space capsule"
        />  */}
      </picture>
      <picture hidden id="spaceport-image">
        <img
          src="/technology/image-spaceport-portrait.jpg"
          alt="the spaceport"
        />
        {/* <img
          hidden
          src="/technology/image-spaceport-landscape.jpg"
          alt="the spaceport"
        />  */}
      </picture>
    </main>
  );
};

export default TechnologyPage;
