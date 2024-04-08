import { Draggable, Droppable } from "react-beautiful-dnd";

/* eslint-disable @typescript-eslint/no-explicit-any */
function TaskList({ tasks }: { tasks: any[] }) {
  return (
    <Droppable
      type="list"
      droppableId={String(Math.floor(Math.random() * 1000))}
    >
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="flex flex-col gap-4 p-2"
        >
          {tasks.map((task, index) => (
            <Draggable draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  key={task.id}
                  className="bg-red-400 p-2 rounded-2xl"
                >
                  {task.description}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TaskList;
