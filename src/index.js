import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./components/Theme"

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
