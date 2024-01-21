const EventsStyles = (
  showJanuaryCards,
  showFebruaryCards,
  showMarchCards,
  showSingleGalleryImage
) => {
  const bodyStyle = {
    backgroundImage: `url('/imgs/CultEv.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  };

  const h1Style = {
    position: "absolute",
    top: "10%",
    left: "25%",
    transform: "translateX(-50%)",
    color: "#ffffff",
  };

  const h1Style1 = {
    position: "absolute",
    top: "40%",
    left: "25%",
    transform: "translateX(-50%)",
    color: "#ffffff",
  };

  const buttonContainerStyle = {
    position: "absolute",
    top: "35%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonContainerStyle1 = {
    position: "absolute",
    top: "63%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    margin: "30px",
    padding: "20px 30px",
    border: "2px solid #706233",
    color: "#ffffff",
    backgroundColor: "#8B4513",
  };

  const cardContainerStyleJan = {
    position: "absolute",
    top: "0",
    right: "12%",
    height: "90%",
    width: "40%",
    display: showJanuaryCards ? "flex" : "none",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const cardContainerStyleFeb = {
    position: "absolute",
    top: "0",
    right: "12%",
    height: "90%",
    width: "40%",
    display: showFebruaryCards ? "flex" : "none",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const cardContainerStyleMar = {
    position: "absolute",
    top: "0",
    right: "12%",
    height: "90%",
    width: "40%",
    display: showMarchCards ? "flex" : "none",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const cardContainerStyleGall = {
    position: "absolute",
    top: "0",
    right: "20%",
    height: "100%",
    display: showSingleGalleryImage ? "flex" : "none",
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
    borderRadius: "50%",
    border: "4px solid  #706233",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "50%",
  };

  const imageCarouselStyle = {
    width: "50%",
    height: "70%",
    float: "right",
    marginRight: "-20%",
    marginTop: "8%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return {
    bodyStyle,
    h1Style,
    h1Style1,
    buttonContainerStyle,
    buttonContainerStyle1,
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
  };
};

export default EventsStyles;
