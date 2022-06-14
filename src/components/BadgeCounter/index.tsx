import styles from "./Style.module.css";

interface BadgeCounterProps {
  type: "all" | "completed";
  total: number | 0;
}

export function BadgeCounter({ type, total }: BadgeCounterProps) {
  return (
    <div className={styles.badgeCounter}>
      {type === "all" ? (
        <p className={styles.all}>Tarefas Criadas</p>
      ) : (
        <p className={styles.completed}>Concluídas</p>
      )}

      <span>{total}</span>
    </div>
  );
}
