import { useState } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./components/dashboard/Column";
import { FaPlus } from "react-icons/fa6";
import AddListButton from "./components/dashboard/AddListButton";

const DATA = [
  {
    id: "123456",
    title: "In Progress",
    tasks: [
      {
        id: "12123253456",
        description: "Esta es una descripcion",
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
      },
      {
        id: "78901234568",
        description: "Descripción adicional",
      },
    ],
  },
  {
    id: "345678",
    title: "Done",
    tasks: [
      {
        id: "34567890123",
        description: "Una descripción diferente",
      },
    ],
  },
];

function App() {
  const [columns, setColumns] = useState(DATA);

  const handleOnDragEnd = (results: DropResult) => {
    const { destination, source, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const newColumns = [...columns];
    if (type === "COLUMN") {
      const [removedColumn] = newColumns.splice(source.index, 1);

      newColumns.splice(destination.index, 0, removedColumn);

      setColumns(newColumns);
    } else {
      const sourceColumnIndex = newColumns.findIndex(
        (column) => column.id === source.droppableId
      );
      const destinationColumnIndex = newColumns.findIndex(
        (column) => column.id === destination.droppableId
      );

      const [removedTask] = newColumns[sourceColumnIndex].tasks.splice(
        source.index,
        1
      );

      newColumns[destinationColumnIndex].tasks.splice(
        destination.index,
        0,
        removedTask
      );

      setColumns(newColumns);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <section className="h-screen flex gap-6 items-start pt-5 ml-3 overflow-x-auto">
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided) => (
            <div
              className="flex gap-6"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {columns.map((column, index) => (
                <Column
                  id={column.id}
                  key={column.id}
                  index={index}
                  title={column.title}
                  tasks={column.tasks}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <AddListButton />
      </section>
    </DragDropContext>
  );
}

export default App;
