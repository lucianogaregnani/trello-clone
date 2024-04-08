import { Draggable } from "react-beautiful-dnd";
import TaskList from "./TaskList";

/* eslint-disable @typescript-eslint/no-explicit-any */
function Column({
  tasks,
  title,
  index,
}: {
  tasks: any[];
  title: string;
  index: number;
}) {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="rounded-2xl h-[20rem] bg-slate-100"
        >
          <h3 className="bg-slate-300 p-2 rounded-t-2xl">{title}</h3>
          <TaskList tasks={tasks} />
        </div>
      )}
    </Draggable>
  );
}

export default Column;
