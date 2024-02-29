import { useState } from "react";

function App() {
  //logic question 1
  const [showYesContainer1, setShowYesContainer1] = useState(false);
  const [showNoContainer1, setShowNoContainer1] = useState(false);
  const [question2, setQuestion2] = useState(false);

  const handleYesClick1 = () => {
    setShowYesContainer1(true);
    setShowNoContainer1(false);
    setQuestion2(true);
  };

  const handleNoClick1 = () => {
    setShowYesContainer1(false);
    setShowNoContainer1(true);
    setQuestion2(true);
  };
  
  //logic question 2
  const [showYesContainer2, setShowYesContainer2] = useState(false);
  const [showNoContainer2, setShowNoContainer2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  const handleYesClick2 = () => {
    setShowYesContainer2(true);
    setShowNoContainer2(false);
    setQuestion3(true);
  };

  const handleNoClick2 = () => {
    setShowYesContainer2(false);
    setShowNoContainer2(true);
    setQuestion3(true);
  };
  
  //logic question 3
  const [showYesContainer3, setShowYesContainer3] = useState(false);
  const [showNoContainer3, setShowNoContainer3] = useState(false);
  const [end, setEnd] = useState(false);

  const handleYesClick3 = () => {
    setShowYesContainer3(true);
    setShowNoContainer3(false);
    setEnd(true)
  };

  const handleNoClick3 = () => {
    setShowYesContainer3(false);
    setShowNoContainer3(true);
    setEnd(true)
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen pt-5">
      <div className="flex gap-16 text-center">
        <p>
          Hora de depertar <br /> <span className="">7:30 AM</span>
        </p>
        <p>
          Hora de dormir <br /> <span>11:30 PM</span>
        </p>
      </div>
      <div className="flex flex-col gap-5 text-center">
        <div id="question-1">
          <div>
            <h2>Dormiste bien?</h2>
            <div className="flex justify-between">
              <button onClick={handleYesClick1}>si</button>
              <button onClick={handleNoClick1}>no</button>
            </div>
          </div>
          <div id="si-1" className={showYesContainer1 ? "" : "hidden"}>
            <h2>ejercicio de 20 min</h2>
            <h2>estiramiento</h2>
            <h2>desayunar</h2>
          </div>
          <div id="no-1" className={showNoContainer1 ? "" : "hidden"}>
            <h2>meditacion de 10 min</h2>
            <h2>desayunar</h2>
          </div>
        </div>
        <div id="question-2" className={question2 ? "" : "hidden"}>
          <div>
            <h2>Te duchas por la manana?</h2>
            <div className="flex justify-between">
              <button onClick={handleYesClick2}>si</button>
              <button onClick={handleNoClick2}>no</button>
            </div>
          </div>
          <div id="si-2" className={showYesContainer2 ? "" : "hidden"}>
            <h2>ducharse</h2>
            <h2>vestirse</h2>
            <h2>cepillar los dientes</h2>
          </div>
          <div id="no-2" className={showNoContainer2 ? "" : "hidden"}>
            <h2>vestirse</h2>
            <h2>cepillar los dientes</h2>
          </div>
        </div>
        <div id="question-3" className={question3 ? "" : "hidden"}>
          <div>
            <h2>esta dedsordenado tu espacio?</h2>
            <div className="flex justify-between">
              <button onClick={handleYesClick3}>si</button>
              <button onClick={handleNoClick3}>no</button>
            </div>
          </div>
          <div id="si-3" className={showYesContainer3 ? "" : "hidden"}>
            <h2>ordenar 15 min</h2>
            <h2>hacer una lista de tareas</h2>
          </div>
          <div id="no-3" className={showNoContainer3 ? "" : "hidden"}>
            <h2>hacer una lista de tareas</h2>
          </div>
        </div>
        <div id="end" className={end ? "" : "hidden"}>
          <h2>Bien tu dia ha comenzado fuerte, sigue asi....</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
