import Image from "next/image"
import { useState } from "react";
import styles from './difficults.module.css'

const DIFICULTS = [
  {
    id: 1,
    name: "Fácil",
    img: "/img/DificultadFacil.png",
  },
  {
    id: 2,
    name: "Media",
    img: "/img/DificultadMedia.png",
  },
  {
    id: 3,
    name: "Difícil",
    img: "/img/DificultadDificil.png",
  },
];

const DifficultySelector = () => {

  const [dificultIdSelected, setDificultIdSelected] = useState(DIFICULTS[0].id)

  return (
    <section className={styles.difficults}>
      {DIFICULTS.map((dificult) => {
        const { id, name, img } = dificult;

        return (
          <div
            key={id}
            onClick={() => setDificultIdSelected(id)}
            className={styles.hoverdiff}
          >
            <Image  src={img} alt={name} width={70} height={70} />
          </div>
        );
      })}
    </section>
  );
};

export default DifficultySelector;