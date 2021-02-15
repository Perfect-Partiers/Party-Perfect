import React from "react";

const styles = {
  heading: {
    textAlign: "center",
    marginTop: "100px",
  },
  image: {
    height: "500px",
    width: "auto",
    borderRadius: "50px",
  },
};

function NoMatch() {
  return (
    <div style={styles.heading}>
      <h1 className="mb-5">404 Page Not Found</h1>
      <h1>
        <img
          style={styles.image}
          src={process.env.PUBLIC_URL + "/assets/images/sadparty.jpg"}
        />
      </h1>
    </div>
  );
}

export default NoMatch;
