import React, { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setRepos(resJson);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      <ul className={styles.list}>
        {repos.map((repo) => (
          <li key={repo.id} className={styles.listItem}>
            <div className={styles.itemName}>
              <b>Nome</b> {repo.name}
            </div>
            <div className={styles.itemLanguage}>
              <b>Linguagens</b> {repo.language}
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.itemLink}
            >
              Visitar no Github
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposList;
