import React, { useState, useEffect } from "react";
import { Container, Button, Row, Card } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventsStyles from "../EventsStyles";
import NavbarEl from "../Components/NavbarEl";
import "../app.css"

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

  // Use useEffect to load scripts once the component mounts
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
    <div style={singleGalleryImageStyle}>
      <img alt="gallery" src={src} style={imageStyle} />
    </div>
  );
  const ImageCarousel = () => (
    <div style={imageCarouselStyle}>
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
    <div style={bodyStyle}>
      <Container>
      <NavbarEl className="w-100"/>
        <div className=""> </div>
        <h1 className="beige-text page-title" style={h1Style}>
          Upcoming Events
        </h1>
        <div style={buttonContainerStyle}>
          <Button
            style={buttonStyle}
            className="no-button-outline brown-bg"
            id="input"
            type="submit"
            onClick={handleJanuaryClick}
          >
            January
          </Button>
          <Button
            style={buttonStyle}
            className="no-button-outline brown-bg"
            id="input"
            type="submit"
            onClick={handleFebruaryClick}
          >
            February
          </Button>
          <Button
            style={buttonStyle}
            className="no-button-outline brown-bg"
            id="input"
            type="submit"
            onClick={handleMarchClick}
          >
            March
          </Button>
        </div>
        <div style={cardContainerStyleJan}>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="/imgs/Cercle.png"
              style={cardImgStyle}
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
              <button id="eventbrite-widget-modal-trigger-802605343187" type="button" style="background-color: #8B4513; color: #ffffff; border: 2px solid #706233; border-radius: 5px;">Get Tickets</button>
            `,
                }}
              />
            </Card.Body>
          </Card>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="/imgs/LaMartina.png"
              style={cardImgStyle}
            />
            <Card.Body>
              <Card.Title>StoryTelling</Card.Title>
              <Card.Text>
                La Martina Kids&Us School, From <span className="numbers">6</span>pm, Storytelling in English and
                making a craft for girls and boys from four to ten years old.
              </Card.Text>
              <Card.Text className="numbers">Date: January 26, 2024</Card.Text>
              <Card.Text className="numbers">Time: 6:00 PM</Card.Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <!-- Noscript content for added SEO -->
<noscript><a href="https://www.eventbrite.co.uk/e/storytelling-tickets-803801330417" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
<button id="eventbrite-widget-modal-trigger-803801330417"  type="button"style="background-color: #8B4513; color: #ffffff; border: 2px solid #706233; border-radius: 5px;">Get Tickets</button> 
`,
                }}
              />
            </Card.Body>
          </Card>
        </div>
        <div style={cardContainerStyleFeb}>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="/imgs/Tertulia.png"
              style={cardImgStyle}
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
                  <!-- Noscript content for added SEO -->
<noscript><a href="https://www.eventbrite.co.uk/e/tertulia-poetica-tickets-803803446747" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
<button id="eventbrite-widget-modal-trigger-803803446747" type="button"style="background-color: #8B4513; color: #ffffff; border: 2px solid #706233; border-radius: 5px;">Get Tickets</button>
 `,
                }}
              />
            </Card.Body>
          </Card>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="/imgs/soloSe.png"
              style={cardImgStyle}
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
                  __html: `<!-- Noscript content for added SEO -->
                  <noscript><a href="https://www.eventbrite.co.uk/e/presentacio-del-nou-llibre-d-elisabeta-helena-kocsis-tickets-803806736587" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
                  <button id="eventbrite-widget-modal-trigger-803806736587" type="button"style="background-color: #8B4513; color: #ffffff; border: 2px solid #706233; border-radius: 5px;">Get Tickets</button>
                  
                `,
                }}
              />
            </Card.Body>
          </Card>
        </div>
        <div style={cardContainerStyleMar}>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="/imgs/Gessa.png"
              style={cardImgStyle}
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
                  __html: `<!-- Noscript content for added SEO -->
                  <noscript><a href="https://www.eventbrite.co.uk/e/presentacio-del-llibre-els-ranxos-de-la-gessa-tickets-803808000367" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
                  <button id="eventbrite-widget-modal-trigger-803808000367" type="button"style="background-color: #8B4513; color: #ffffff; border: 2px solid #706233; border-radius: 5px;">Get Tickets</button>
                  `,
                }}
              />
            </Card.Body>
          </Card>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="/imgs/cuentropia.png"
              style={cardImgStyle}
            />
            <Card.Body>
              <Card.Title>Cuentropia</Card.Title>
              <Card.Text>
                Cuentropia is a cooperative that was born in <span className="numbers">2019</span> as a
                non-profit association, with the idea of ​​doing transformative
                social education projects.
              </Card.Text>
              <Card.Text className="numbers">Date: March 08, 2024</Card.Text>
              <Card.Text className="numbers">Time: 6:00 PM</Card.Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<!-- Noscript content for added SEO -->
                  <noscript><a href="https://www.eventbrite.co.uk/e/cuentropia-tickets-803812132727" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
                  <button id="eventbrite-widget-modal-trigger-803812132727" type="button"style="background-color: #8B4513; color: #ffffff; border: 2px solid #706233; border-radius: 5px;">Get Tickets</button>
                  `,
                }}
              />
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Row>
        <Container fluid className="beige-bg">
          <div className="photo-container"> </div>
          <div style={cardContainerStyleGall}>
            <ImageCarousel />
          </div>
        </Container>
      </Row>
    </div>
  );
};

export default Events;
