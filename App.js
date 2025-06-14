import React, { useEffect } from "react";
import "./app.css";
import qlikLoader from "./qlik";

const App = () => {
  useEffect(() => {
    qlikLoader
      .then(qlik => {
        // You can now use the qlik APIs
        qlik.openApp('4e022e73-e134-4fe9-bf56-9a82dd2e2d32', config.OUTPUT_PATH_development)
          .then(app => {
            console.log("App opened successfully:", app);
            // You can now interact with the app
          })
          .catch(err => console.error("Error opening app:", err));
      })
      .catch(err => console.log(err));
      qlikLoader
      .then(qlik => {
        // You can now use the qlik APIs
        qlik.openApp('5c424fe5-463c-41bd-8fc0-462683a346c0', config.OUTPUT_PATH_development)
          .then(app => {
            console.log("App opened successfully:", app);
            // You can now interact with the app
          })
          .catch(err => console.error("Error opening app:", err));
      })
      .catch(err => console.log(err));
  });

  return (
    <main className="mashup">
      <div className="mashup__content">Hello Qlik!!!!!!</div>
    </main>
  );
};

export default App;
