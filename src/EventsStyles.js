const EventsStyles = (showJanuaryCards, showFebruaryCards, showMarchCards) => {
  const bodyStyle = {
    backgroundImage: `url('/imgs/.png')`,
    backgroundSize: "64%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#706233 ",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  };

  const h1Style = {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#ffffff",
  };

  const buttonContainerStyle = {
    position: "absolute",
    top: "45%",
    left: "15%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    margin: "30px",
    marginTop: "50%",
    padding: "20px 30px",
    border: "2px solid #706233",
    color: "#ffffff",
    backgroundColor: "#8B4513",
  };

  const cardContainerStyleJan = {
    position: "absolute",
    top: "5%",
    left: "18%",
    height: "100%",
    width: "45%",
    display: showJanuaryCards ? "flex" : "none",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const cardContainerStyleFeb = {
    position: "absolute",
    top: "5%",
    left: "18%",
    height: "100%",
    width: "45%",
    display: showFebruaryCards ? "flex" : "none",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const cardContainerStyleMar = {
    position: "absolute",
    top: "5%",
    left: "18%",
    height: "100%",
    width: "45%",
    display: showMarchCards ? "flex" : "none",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const cardContainerStyleGall = {
    position: "absolute",
    bottom: "10%",
    marginLeft: "5%",
    display: "flex",
    width: "45%",
    flexDirection: "column",
    alignItems: "flex-end",
  };

  const cardStyle = {
    marginRight: "20px",
    marginLeft: "15px",
    marginBottom: "30px",
    marginTop: "20px",
    width: "35%",
    height: "65%",
    border: "2px solid #706233",
    color: "#ffffff",
    backgroundColor: "#B0926A ",
  };

  const cardImgStyle = {
    maxHeight: "40%",
  };

  const singleGalleryImageStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: "20px",
    border: "5px solid #B0926A",
    borderRadius: "10px",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10px",
  };

  const imageCarouselStyle = {
    width: "100%",
    height: "100%",
    float: "right",
    marginRight: "-20%",
    marginTop: "8%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const carouselOverrideStyle = {
    "&:hover .control-arrow": {
      display: "none  !important",
    },
  };

  return {
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
    imageCarouselStyle: {
      ...imageCarouselStyle,
      ...carouselOverrideStyle,
    },
  };
};

export default EventsStyles;
