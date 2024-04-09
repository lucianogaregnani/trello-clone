import { Draggable, Droppable } from "react-beautiful-dnd";

/* eslint-disable @typescript-eslint/no-explicit-any */
function TaskList({ tasks, id }: { tasks: any[], id:string }) {
  return (
    <Droppable
      type="list"
      droppableId={id}
    >
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="flex flex-col gap-3 p-2"
        >
          {tasks.map((task, index) => (
            <Draggable key={index} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  key={task.id}
                  className="bg-white p-2 rounded-md shadow shadow-black/15"
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
