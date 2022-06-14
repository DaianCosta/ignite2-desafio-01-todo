import styles from "./Style.module.css";

import todoLogo from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo Todo" />
    </header>
  );
}
