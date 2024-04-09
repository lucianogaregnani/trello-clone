import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import AddInput from "./AddInput";

function AddListButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      {!isClicked ? (
        <button
          onClick={() => {
            setIsClicked(true);
          }}
          className="transition-all hover:bg-white/10 flex gap-2 items-center px-3 text-left bg-white/20 text-[0.9rem] font-semibold w-[15rem] py-3 text-white rounded-xl"
        >
          <FaPlus /> Add another list
        </button>
      ) : (
        <AddInput
          placeholder="Enter the title of the list..."
          changeIsClicked={setIsClicked}
          text="Add list"
        />
      )}
    </div>
  );
}

export default AddListButton;
