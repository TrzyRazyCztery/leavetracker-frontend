const summaryCircle = {
  color: "white",
  fontSize: "4em",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  top: "-15px",
  right: "50px"
};

export const summaryCircleStyles = {
  red: {
    ...summaryCircle,
    backgroundColor: "#d91720"
  },
  green: {
    ...summaryCircle,
    backgroundColor: "#3AE836"
  }
};

const deskAvailabilityBar = {
  width: "calc(100% - 50px)",
  left: "50px",
  height: "70px",
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  borderBottomRightRadius: "20px",
  borderTopRightRadius: "20px"
};

export const deskAvailabilityBarStyles = {
  red: {
    ...deskAvailabilityBar,
    backgroundColor: "#FFA6A0"
  },
  green: {
    ...deskAvailabilityBar,
    backgroundColor: "#B2E8B9"
  }
};
