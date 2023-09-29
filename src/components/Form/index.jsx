import { useState, useEffect } from "react";

const Form = () => {
  let [materiaA, setMateriaA] = useState(0);
  let [materiaB, setMateriaB] = useState(0);
  let [materiaC, setMateriaC] = useState(0);

  const renderiizarResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return <p>Você foi aprovado</p>;
    } else {
      return <p>Você foi reprovado</p>;
    }
  };
  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={(e) => setMateriaA(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={(e) => setMateriaB(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={(e) => setMateriaC(Number(e.target.value))}
      />
      {renderiizarResultado()}
    </form>
  );
};

export default Form;
