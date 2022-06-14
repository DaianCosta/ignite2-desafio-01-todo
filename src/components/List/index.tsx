import { useState } from "react";
import * as uuid from "uuid";
import styles from "./Style.module.css";
import { Form } from "../Form";
import { Item } from "../Item";
import { Todo } from "../../models/Todo";
import { BadgeCounter } from "../BadgeCounter";
import { IsEmpty } from "../IsEmpty";

export function List() {
  const [todoAll, setTodoAll] = useState<Todo[]>([]);
  const total = todoAll.length;
  const totalCompleted = todoAll.filter((todo) => todo.completed).length;

  const handleAddItem = (description: string) => {
    const exist = todoAll.find((todo) => todo.description === description);

    if (!description || exist) {
      return false;
    }

    const newItem = {
      id: uuid.v4(),
      description,
      completed: false,
    } as Todo;

    setTodoAll([...todoAll, newItem]);
  };

  const handleDelete = (id: string) => {
    const todoAllLastVersion = todoAll.filter((t) => t.id !== id);
    setTodoAll(todoAllLastVersion);
  };

  const handleUpdateStatus = (id: string, completed: boolean) => {
    console.log(completed);
    const todoAllLastVersion = todoAll.map((todo) => {
      if (todo.id === id) {
        todo.completed = completed;
      }

      return todo;
    });

    setTodoAll(todoAllLastVersion);
  };

  return (
    <>
      <Form onAdd={handleAddItem} />
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.badgeCounter}>
            <BadgeCounter type="all" total={total} />
            <BadgeCounter type="completed" total={totalCompleted} />
          </div>

          {total == 0 && (
            <IsEmpty
              title="Você ainda não tem tarefas cadastradas"
              description="Crie tarefas e organize seus itens a fazer"
            />
          )}
          {todoAll?.map((todo) => {
            return (
              <Item
                onDelete={handleDelete}
                onUpdateStatus={handleUpdateStatus}
                key={todo.id}
                item={todo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
