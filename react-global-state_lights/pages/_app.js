import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ]);

  function handleToggle(id) {
    const mutateLights = lights.map((light) => {
      if (light.id !== id) {
        return light;
      } else {
        return {
          ...light,
          isOn: !light.isOn,
        };
      }
    });
    setLights(mutateLights);
  }

  function turnOnAllLights() {
    const mutateLights = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(mutateLights);
  }

  function turnOnAllLightsOff() {
    const mutateLights = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(mutateLights);
  }

  /*function sum() {
    let count = 0;
    lights.forEach((light) => {
      if (light.isOn) {
        return count++;
      }
    });
    return count;
  }*/

  function sum() {
    const onLights = lights.filter((light) => light.isOn);
    return onLights.length;
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        turnOnAllLights={turnOnAllLights}
        turnOnAllLightsOff={turnOnAllLightsOff}
        sum={sum}
        lights={lights}
        toggleLight={handleToggle}
        {...pageProps}
      />
    </Layout>
  );
}
