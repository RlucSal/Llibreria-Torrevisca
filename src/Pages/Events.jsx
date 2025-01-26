import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavbarEl from "../Components/NavbarEl";
import "../app.css";

// Helper for Event Card
const EventCard = ({ title, description, date, time, imgSrc, eventId }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imgSrc} className="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="numbers">Date: {date}</Card.Text>
        <Card.Text className="numbers">Time: {time}</Card.Text>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <noscript><a href="https://www.eventbrite.co.uk/e/${eventId}" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
              <button id="eventbrite-widget-modal-trigger-${eventId}" type="button" class="get-tickets-button">Get Tickets</button>
            `,
          }}
        />
      </Card.Body>
    </Card>
  );
};

const Events = () => {
  const [activeMonth, setActiveMonth] = useState("January");
  const [showSingleGalleryImage, setShowSingleGalleryImage] = useState(true);

  const loadEventbriteScripts = (eventId) => {
    const script1 = document.createElement("script");
    script1.src = "https://www.eventbrite.co.uk/static/widgets/eb_widgets.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.innerHTML = `
      var exampleCallback = function() {
        console.log('Order complete!');
      };
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '${eventId}',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-${eventId}',
        onOrderComplete: exampleCallback
      });
    `;
    document.head.appendChild(script2);
  };

  useEffect(() => {
    loadEventbriteScripts("802605343187");
    loadEventbriteScripts("803801330417");
    loadEventbriteScripts("803803446747");
    loadEventbriteScripts("803806736587");
    loadEventbriteScripts("803808000367");
    loadEventbriteScripts("803812132727");
  }, []);

  const handleMonthClick = (month) => {
    setActiveMonth(month);
    setShowSingleGalleryImage(false);  // Hide the gallery when a month is selected
  };

  const ImageCarousel = () => (
    <div className="image-carousel">
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop width="65%">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i}>
            <img src={`/imgs/car${i + 1}.png`} alt={`gallery-${i + 1}`} className="image" />
          </div>
        ))}
      </Carousel>
    </div>
  );

  const eventCards = {
    January: [
      {
        title: "Cercle de Dones",
        description: "Safe space where all women can talk calmly...",
        date: "January 25, 2024",
        time: "7:00 PM",
        imgSrc: "/imgs/Cercle.png",
        eventId: "802605343187",
      },
      {
        title: "StoryTelling",
        description: "Storytelling in English and making a craft...",
        date: "January 26, 2024",
        time: "6:00 PM",
        imgSrc: "/imgs/LaMartina.png",
        eventId: "803801330417",
      },
    ],
    February: [
      {
        title: "Tertúlia Poètica",
        description: "Presentation of the poem La casa de les Absències...",
        date: "February 16, 2024",
        time: "7:00 PM",
        imgSrc: "/imgs/Tertulia.png",
        eventId: "803803446747",
      },
      {
        title: "Presentació",
        description: "Presentation of the book 'Només sé que no es res'...",
        date: "February 29, 2024",
        time: "7:00 PM",
        imgSrc: "/imgs/soloSe.png",
        eventId: "803806736587",
      },
    ],
    March: [
      {
        title: "Presentació",
        description: "Gessamí Caramés is a television and culinary figure...",
        date: "March 01, 2024",
        time: "7:00 PM",
        imgSrc: "/imgs/Gessa.png",
        eventId: "803808000367",
      },
      {
        title: "Presentació",
        description: "The social phenomenon of tertulianisme...",
        date: "March 08, 2024",
        time: "7:00 PM",
        imgSrc: "/imgs/cuentropia.png",
        eventId: "803812132727",
      },
    ],
  };

  return (
    <div className="events-body">
      <NavbarEl className="w-100" />
      <div className="container-title">
      <h1 className="beige-text page-title">Upcoming Events</h1>
      </div>
      <div className="button-container">
        <Button className="button" onClick={() => handleMonthClick("January")}>
          January
        </Button>
        <Button className="button" onClick={() => handleMonthClick("February")}>
          February
        </Button>
        <Button className="button" onClick={() => handleMonthClick("March")}>
          March
        </Button>
      </div>

      <div id="card-container" className={`card-container-${activeMonth.toLowerCase()}`}>
        {eventCards[activeMonth].map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
<div className="container-gallery">
      <div className="gallery">
  {showSingleGalleryImage ? (
    <ImageCarousel className="image-carousel">
      <img src="car1.png" alt="Event 1" className="carousel-image" />
      <img src="car2.png" alt="Event 2" className="carousel-image" />
      <img src="car3.png" alt="Event 2" className="carousel-image" />
      <img src="car4.png" alt="Event 2" className="carousel-image" />
      <img src="car5.png" alt="Event 2" className="carousel-image" />
      <img src="car6.png" alt="Event 2" className="carousel-image" />
      <img src="car7.png" alt="Event 2" className="carousel-image" />
      <img src="car8.png" alt="Event 2" className="carousel-image" />
      <img src="car9.png" alt="Event 2" className="carousel-image" />
      <img src="car10.png" alt="Event 2" className="carousel-image" />
      <img src="car11.png" alt="Event 2" className="carousel-image" />
      <img src="car12.png" alt="Event 2" className="carousel-image" />
      <img src="car13.png" alt="Event 2" className="carousel-image" />
      <img src="car14.png" alt="Event 2" className="carousel-image" />
      <img src="car15.png" alt="Event 2" className="carousel-image" />
    </ImageCarousel>
  ) : (
    <div className="empty-gallery-placeholder"></div>
  )}
</div>
</div>
    </div>
  );
};

export default Events;
