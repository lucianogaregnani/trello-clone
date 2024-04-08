import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./components/Column";

const DATA = [
  {
    id: "123456",
    title: "In Progress",
    tasks: [
      {
        id: "12123253456",
        description: "Esta es una descripcion",
        title: "este es un titulo",
      },
    ],
  },
  {
    id: "789012",
    title: "To Do",
    tasks: [
      {
        id: "78901234567",
        description: "Otra descripción aquí",
        title: "Otro título",
      },
      {
        id: "78901234568",
        description: "Descripción adicional",
        title: "Título adicional",
      },
    ],
  },
  {
    id: "345678",
    title: "Done",
    listId: "21342334",
    tasks: [
      {
        id: "34567890123",
        description: "Una descripción diferente",
        title: "Un título diferente",
      },
    ],
  },
];

function App() {
  const [columns, setColumns] = useState(DATA);

  return (
    <DragDropContext onDragEnd={() => {}}>
      <section className="h-screen flex gap-6 items-center ml-3">
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided) => (
            <div
              className="flex gap-6"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {columns.map((column, index) => (
                <Column
                  key={column.id}
                  index={index}
                  title={column.title}
                  tasks={column.tasks}
                />
              ))}
            </div>
          )}
        </Droppable>
      </section>
    </DragDropContext>
  );
}

export default App;
