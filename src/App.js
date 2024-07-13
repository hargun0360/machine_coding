import React, { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [accept, setIssAccept] = useState(false);


  // out side modal close effect 
  const handleClick = (e) => {
    console.log(e.target.className);
    if(e.target.className === "App"){
      setIsShow(false);
    }
  }

  return (
    <div
      className="App"
      onClick={handleClick}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isShow ? "rgb(169, 169, 169)" : "transparent",
      }}
    >
      {!isShow && (
        <div className="show-offer">
          <button
            className="show-btn"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsShow((prev) => !prev);
            }}
          >
            {accept ? "Offer Accepted" : "Show Offer"}
          </button>
        </div>
      )}

      {isShow && (
        <div
          className="modal"
          
          style={{
            width: "250px",
            height: "250px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid black",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <div
            className="x"
            style={{
              position: "absolute",
              left: 10,
              top: 10,
              cursor: "pointer",
            }}
            onClick={() => setIsShow(false)}
          >
            X
          </div>
          <p>Hey Hargun, Here is the Div</p>
          <button
            className="accept-offer"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIssAccept((prev) => !prev);
              setIsShow(false);
            }}
          >
            Accept Offer
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
