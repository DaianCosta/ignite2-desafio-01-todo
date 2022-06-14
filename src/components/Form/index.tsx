import styles from "./Style.module.css";
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

interface FormProps {
  onAdd: (description: string) => void;
}

export function Form({ onAdd }: FormProps) {
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onAdd(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
