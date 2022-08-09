import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";
import Logo from "../../images/logo.svg";
import { service } from "../../services/webScraper";
import Loader from "../Loader";

type Resultado = {
  termo: string;
  titulo: string;
  url: string;
};

function Pesquisar() {
  const [input, setInput] = useState("");
  const [resultados, setResultados] = useState<Resultado[] | null>([]);
  const [loading, setLoading] = useState(false);

  const search = (e: any) => {
    e.preventDefault();

    if (input === "") {
      toast.warn("Preencha o termo de busca");
    } else {
      setLoading(true);
      setResultados([]);

      service
        .get(`/search?assunto=${input}`)
        .then((response) => {
          setResultados(response.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="searchPage">
      <ToastContainer autoClose={5000} hideProgressBar={true} />;
      <div className="searchPage__header">
        <img src={Logo} alt="Logo" />
        <div className="searchPage__headerBody">
          <form className="search" onSubmit={search}>
            <div className="search__input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div className="search__buttons">
                <button type="submit">Pesquisar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="searchPage__results"></div>
      <div className="searchPage__result">
        {loading && (
          <div className="loading">
            <Loader />
          </div>
        )}
        {resultados?.length != 0 && (
          <ul>
            {resultados?.map((res) => {
              return (
                <li key={res.url}>
                  <h2 className="searchPage_resultTitle">{res.titulo}</h2>
                  <a
                    href={res.url}
                    className="searchPage__resultLink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {res.url}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Pesquisar;
