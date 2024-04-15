import React , {useState} from "react";

function Section({ title, content , isVisible , setIsVisible }) {

  const handleClick = () => {
    setIsVisible(title);
  };

  return (
    <>
      <div
        style={{
          height: 'fit-content',
          width: "100vw",
          border: "2px solid black",
          padding: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <h1>{title}</h1>
        {isVisible == title ? <p>{content}</p> : null}
      </div>
    </>
  );
}

function App() {
  const [isVisible , setIsVisible] = useState("accordian 1");
  return (
    <div className="App">
      <Section title="accordian 1" content="this is the first section" isVisible = {isVisible} setIsVisible = {setIsVisible} />
      <Section title="accordian 2" content="this is the second section" isVisible = {isVisible} setIsVisible = {setIsVisible} />
      <Section title="accordian 3" content="this is the third section" isVisible = {isVisible} setIsVisible = {setIsVisible} />
    </div>
  );
}

export default App; 
