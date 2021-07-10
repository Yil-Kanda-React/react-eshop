import { useState } from "react";
import { useQuery } from "react-query";

import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

function App() {
  const getProducts = async () =>
    await (await fetch("https://fakestoreapi.com/products/")).json();
  return (
    <h1>eShop</h1>
  );
}

export default App;
