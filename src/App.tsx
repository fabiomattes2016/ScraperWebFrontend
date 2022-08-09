import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Pesquisar from "./components/Pesquisar";

type Resultado = {
  termo: string;
  titulo: string;
  url: string;
};

function App() {
  return <Pesquisar />;
}

export default App;
