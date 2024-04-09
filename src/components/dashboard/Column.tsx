import { Draggable } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import AddInput from "./AddInput";

/* eslint-disable @typescript-eslint/no-explicit-any */
function Column({
  tasks,
  title,
  index,
  id,
}: {
  tasks: any[];
  title: string;
  index: number;
  id: string;
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="rounded-2xl w-[15rem] h-full bg-gray-100"
        >
          <h3 className="px-4 pt-3 text-slate-800 text-md font-bold">
            {title}
          </h3>
          <TaskList tasks={tasks} id={id} />
          <footer className="p-2">
            {!isClicked ? (
              <button
                onClick={() => setIsClicked(true)}
                className="text-slate-600 transition-all hover:bg-gray-200 flex gap-2 items-center px-3 text-left bg-white/20 text-[0.9rem] font-semibold w-full py-2 rounded-xl"
              >
                <FaPlus /> Add another card
              </button>
            ) : (
              <AddInput
                placeholder="Enter the title of the card..."
                text="Add card"
                changeIsClicked={setIsClicked}
                type="card"
              />
            )}
          </footer>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
