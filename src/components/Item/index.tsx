import { Trash, CheckCircle, Circle } from "phosphor-react";
import { useState } from "react";
import { Todo } from "../../models/Todo";
import styles from "./Style.module.css";

interface ItemProps {
  item: Todo;
  onUpdateStatus: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export function Item({ item, onUpdateStatus, onDelete }: ItemProps) {
  const [status, setStatus] = useState<boolean>(false);

  const handleDeleteTodo = (id: string) => {
    onDelete(id);
  };
  const handleUpdateStatus = (id: string) => {
    setStatus(!status);
    onUpdateStatus(id, !status);
  };

  return (
    <div className={styles.item}>
      <header>
        <button
          className={styles.edit}
          onClick={() => handleUpdateStatus(item.id)}
        >
          {item.completed ? (
            <CheckCircle size={24} className={styles.completed} />
          ) : (
            <Circle size={24} className={styles.inProgress} />
          )}
        </button>
        {item.completed ? (
          <p>
            <s className={styles.paragraphCompleted}>{item.description}</s>
          </p>
        ) : (
          <p>{item.description}</p>
        )}
      </header>
      <button
        className={styles.trash}
        onClick={() => {
          handleDeleteTodo(item.id);
        }}
        title="Deletar item"
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
