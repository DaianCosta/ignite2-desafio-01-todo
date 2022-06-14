import styles from "./Style.module.css";

import emptyIcon from "../../assets/Clipboard.svg";

interface IsEmptyProps {
  title: string;
  description: string;
}

export function IsEmpty({ title, description }: IsEmptyProps) {
  return (
    <div className={styles.container}>
      <img src={emptyIcon} />
      <p className={styles.title}>{title}</p>
      <p>{description}</p>
    </div>
  );
}
