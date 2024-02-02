import { useState } from "react";
import "./App.css";

const phrases = [
  "No? :c",
  "why :c say yes bruh",
  "please please please :c",
  "pretty honey please be my valentineeee",
  "About to literally cry",
  "WAHHHHHHHHHHH",
  "say yes >:c",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="For my honey Aaliyah">
      {yesPressed ? (
        <>
          <img
            alt="valentine cat"
            src="https://gifdb.com/images/high/milk-and-mocha-kiss-2vwjr4s7usa2g5kj.gif"
          />
          <div className="text">
            YAYYAYAYAYAY, THANK YOU FOR BEING MY VALENTINE I LOVE YOU SO MUCH!!!
          </div>
        </>
      ) : (
        <>
          <img
            alt="Two bears"
            src="https://gifdb.com/images/high/milk-and-mocha-bear-498-x-424-gif-86yyedkwh61tdqpt.gif"
          />

          <div>Will you please be my valentine C:</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
