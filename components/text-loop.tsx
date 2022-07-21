import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import styles from "../styles/cycle-text.module.css";


interface Props {
    texts: string[];
    interval: number;
}

const TextLoop = ({texts, interval}: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      interval
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
      <TextTransition inline={true} springConfig={presets.stiff} className={styles.cycle_text}>
        { texts[index % texts.length] }
      </TextTransition>
  );
};


export default TextLoop;
