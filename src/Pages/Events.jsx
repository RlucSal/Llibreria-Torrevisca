import React, { useState, useEffect } from "react";
import { Container, Button, Row, Card } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventsStyles from "../EventsStyles";
import NavbarEl from "../Components/NavbarEl";
import "../app.css";

const Events = () => {
  const [showJanuaryCards, setShowJanuaryCards] = useState(false);
  const [showFebruaryCards, setShowFebruaryCards] = useState(false);
  const [showMarchCards, setShowMarchCards] = useState(false);
  const [showSingleGalleryImage, setShowSingleGalleryImage] = useState(true);

  const {
    bodyStyle,
    h1Style,
    buttonContainerStyle,
    buttonStyle,
    cardContainerStyleJan,
    cardContainerStyleFeb,
    cardContainerStyleMar,
    cardContainerStyleGall,
    cardStyle,
    cardImgStyle,
    singleGalleryImageStyle,
    imageStyle,
    imageCarouselStyle,
  } = EventsStyles(
    showJanuaryCards,
    showFebruaryCards,
    showMarchCards,
    showSingleGalleryImage
  );

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

  const handleJanuaryClick = () => {
    setShowJanuaryCards(!showJanuaryCards);
    setShowFebruaryCards(false);
    setShowMarchCards(false);
    setShowSingleGalleryImage(false);
  };

  const handleFebruaryClick = () => {
    setShowJanuaryCards(false);
    setShowFebruaryCards(!showFebruaryCards);
    setShowMarchCards(false);
    setShowSingleGalleryImage(false);
  };

  const handleMarchClick = () => {
    setShowJanuaryCards(false);
    setShowFebruaryCards(false);
    setShowMarchCards(!showMarchCards);
    setShowSingleGalleryImage(false);
  };

  const SingleGalleryImage = ({ src }) => (
    <div className="single-gallery-image">
      <img alt="gallery" src={src} className="image" />
    </div>
  );

  const ImageCarousel = () => (
    <div className="image-carousel">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        width="65%"
      >
        <SingleGalleryImage src="/imgs/car1.png" />
        <SingleGalleryImage src="/imgs/car2.png" />
        <SingleGalleryImage src="/imgs/car3.png" />
        <SingleGalleryImage src="/imgs/car4.png" />
        <SingleGalleryImage src="/imgs/car5.png" />
        <SingleGalleryImage src="/imgs/car6.png" />
        <SingleGalleryImage src="/imgs/car7.png" />
        <SingleGalleryImage src="/imgs/car8.png" />
        <SingleGalleryImage src="/imgs/car9.png" />
        <SingleGalleryImage src="/imgs/car10.png" />
        <SingleGalleryImage src="/imgs/car11.png" />
        <SingleGalleryImage src="/imgs/car12.png" />
        <SingleGalleryImage src="/imgs/car13.png" />
        <SingleGalleryImage src="/imgs/car14.png" />
        <SingleGalleryImage src="/imgs/car15.png" />
      </Carousel>
    </div>
  );

  return (
      <div className="events-body">
        <Container>
          <NavbarEl className="w-100" />
          <h1 className="beige-text page-title">
            Upcoming Events
          </h1>
          <div className="button-container">
            <Button
              className="no-button-outline brown-bg"
              id="input"
              type="submit"
              onClick={handleJanuaryClick}
            >
              January
            </Button>
            <Button
              className="no-button-outline brown-bg"
              id="input"
              type="submit"
              onClick={handleFebruaryClick}
            >
              February
            </Button>
            <Button
              className="no-button-outline brown-bg"
              id="input"
              type="submit"
              onClick={handleMarchClick}
            >
              March
            </Button>
          </div>
    
          <div className="card-container-january">
            <Card>
              <Card.Img
                variant="top"
                src="/imgs/Cercle.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Cercle de Dones</Card.Title>
                <Card.Text>
                  Safe space where all women can talk calmly without anyone
                  judging them, the talk will be in charge of Nua Pedrell as
                  facilitator.
                </Card.Text>
                <Card.Text className="numbers">Date: January 25, 2024</Card.Text>
                <Card.Text className="numbers">Time: 7:00 PM</Card.Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                  <noscript><a href="https://www.eventbrite.co.uk/e/entradas-cercle-de-dones-802605343187" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
                  <button id="eventbrite-widget-modal-trigger-802605343187" type="button" class="get-tickets-button">Get Tickets</button>
                `,
                  }}
                />
              </Card.Body>
            </Card>
    
            <Card>
              <Card.Img
                variant="top"
                src="/imgs/LaMartina.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>StoryTelling</Card.Title>
                <Card.Text>
                  La Martina Kids&Us School, From{" "}
                  <span className="numbers">6</span>pm, Storytelling in English
                  and making a craft for girls and boys from four to ten years
                  old.
                </Card.Text>
                <Card.Text className="numbers">Date: January 26, 2024</Card.Text>
                <Card.Text className="numbers">Time: 6:00 PM</Card.Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <noscript><a href="https://www.eventbrite.co.uk/e/storytelling-tickets-803801330417" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
                      <button id="eventbrite-widget-modal-trigger-803801330417"  type="button" class="get-tickets-button">Get Tickets</button> 
                    `,
                  }}
                />
              </Card.Body>
            </Card>
          </div>
    
          <div className="card-container-february">
            <Card>
              <Card.Img
                variant="top"
                src="/imgs/Tertulia.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Tertúlia Poètica</Card.Title>
                <Card.Text>
                  Presentation of the poem La casa de les Absències by Helena
                  Ferreruela. La casa de les Absències is the house of memory but
                  also of the rebellion of critical observation.
                </Card.Text>
                <Card.Text className="numbers">Date: February 16, 2024</Card.Text>
                <Card.Text className="numbers">Time: 7:00 PM</Card.Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <noscript><a href="https://www.eventbrite.co.uk/e/tertulia-poetica-tickets-803803446747" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
                      <button id="eventbrite-widget-modal-trigger-803803446747" type="button" class="get-tickets-button">Get Tickets</button>
                     `,
                  }}
                />
              </Card.Body>
            </Card>
    
            <Card>
              <Card.Img
                variant="top"
                src="/imgs/soloSe.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Presentació</Card.Title>
                <Card.Text>
                  Presentation of the book 'Només sé que no es res' by Elisabeta
                  Helena Kocsis. We invite you to enjoy an afternoon full of
                  literature accompanied by a glass of wine.
                </Card.Text>
                <Card.Text className="numbers">Date: February 29, 2024</Card.Text>
                <Card.Text className="numbers">Time: 7:00 PM</Card.Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <noscript><a href="https://www.eventbrite.co.uk/e/presentacio-del-nou-llibre-d-elisabeta-helena-kocsis-tickets-803806736587" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
                      <button id="eventbrite-widget-modal-trigger-803806736587" type="button" class="get-tickets-button">Get Tickets</button>
                    `,
                  }}
                />
              </Card.Body>
            </Card>
          </div>
    
          <div className="card-container-march">
            <Card>
              <Card.Img
                variant="top"
                src="/imgs/Gessa.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Presentació</Card.Title>
                <Card.Text>
                  Gessamí Caramés is a television and culinary figure beloved in
                  Catalonia. She is known for her joy, closeness and
                  professionalism.
                </Card.Text>
                <Card.Text className="numbers">Date: March 01, 2024</Card.Text>
                <Card.Text className="numbers">Time: 7:00 PM</Card.Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <noscript><a href="https://www.eventbrite.co.uk/e/entradas-presentacio-del-llibre-803808000367" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
                      <button id="eventbrite-widget-modal-trigger-803808000367" type="button" class="get-tickets-button">Get Tickets</button>
                    `,
                  }}
                />
              </Card.Body>
            </Card>
    
            <Card>
              <Card.Img
                variant="top"
                src="/imgs/ElTertulianisme.png"
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Presentació</Card.Title>
                <Card.Text>
                  The social phenomenon that led to the creation of numerous
                  ephemeral programs on Catalan TV channels, the tertulianisme of
                  the 21st century. Guest speaker Jordi San José.
                </Card.Text>
                <Card.Text className="numbers">Date: March 08, 2024</Card.Text>
                <Card.Text className="numbers">Time: 7:00 PM</Card.Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <noscript><a href="https://www.eventbrite.co.uk/e/tertulianisme-en-directe-tickets-803812132727" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
                      <button id="eventbrite-widget-modal-trigger-803812132727" type="button" class="get-tickets-button">Get Tickets</button>
                    `,
                  }}
                />
              </Card.Body>
            </Card>
          </div>
    
          <div className="gallery">
            {showSingleGalleryImage ? (
              <ImageCarousel />
            ) : (
              <div></div>
            )}
          </div>
        </Container>
      </div>
    );
    
  
};

export default Events;
