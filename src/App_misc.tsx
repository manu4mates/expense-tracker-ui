import { useState } from "react";
import Alert from "./components/misc-compenents/Alerts";
import MyButton from "./components/misc-compenents/MyButton";
import ListGroup from "./components/misc-compenents/ListGroup";

function App_misc() {
  let cityItems = ["New York", "San Francisco", " Tokyo", "New Delhi", "Tokyo"];
  let uiFrameworkItems = ["React", "Angular", "NodeJS", "jQuery", "Vue"];

  const [alertContent, setAlertContent] = useState("");

  function handleSelectedItem(item: string) {
    console.log("In App.tsx -> " + item);
  }

  function myButtonClicked(): void {
    setAlertContent("A simple primary alert—check it out!");
  }

  return (
    <div>
      <div id="myButtonAlert"></div>
      <Alert>{alertContent}</Alert>

      <MyButton onButtonClick={myButtonClicked}></MyButton>

      <ListGroup
        items={cityItems}
        heading="Cities"
        onSelectedItem={(item) => handleSelectedItem(item)}
      />

      <br></br>

      <ListGroup
        items={uiFrameworkItems}
        heading={"UI Frameworks"}
        onSelectedItem={(item) => handleSelectedItem(item)}
      />
    </div>
  );
}

export default App_misc;
