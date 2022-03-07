import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";

function App() {
  const [pins, setPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
        client_id: "yRvsjO36o5tlmXlHjrlPJKuJEoMwu4joj-eazxr8YLA",
      },
    });
  };

  const onSearchSubmit = (term) => {
    console.log("on search submit", term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setPins(newPins);
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['bali', 'sport', 'bird', 'boat']

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          })
        })
      )
    })
    Promise.all(promises).then(() => {
      setPins(pinData);
    })
  }

  useEffect(() => {
    getNewPins();
  }, [])

  onSearchSubmit("dog");

  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
    </div>
  );
}

export default App;
