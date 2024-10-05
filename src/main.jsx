import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/Vazirmatn-font-face.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const apiUrl = import.meta.env.VITE_API_GAME;
const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
