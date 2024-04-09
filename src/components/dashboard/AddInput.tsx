import { IoCloseOutline } from "react-icons/io5";

function AddInput({
  changeIsClicked,
  text,
  placeholder,
  type,
}: {
  changeIsClicked: (newState: boolean) => void;
  text: string;
  placeholder: string;
  type?: "card" | "list";
}) {
  return (
    <div
      className={`flex flex-col ${
        type === "list" || !type ? "w-[15rem] bg-gray-200 p-3" : "w-full"
      } gap-2 rounded-2xl`}
    >
      <textarea
        className={`${
          type === "card" && "pb-5 shadow shadow-black/15"
        } resize-none p-[0.4rem] rounded-md focus:outline-blue-500`}
        placeholder={placeholder}
        autoFocus
      />
      <div className="flex gap-2">
        <button className="text-white font-semibold text-sm bg-blue-500 hover:bg-blue-600 transition-all w-[6rem] py-1 rounded-md">
          {text}
        </button>
        <button
          onClick={() => {
            changeIsClicked(false);
          }}
          className="text-3xl transition-all text-slate-800 hover:bg-slate-300 rounded-md"
        >
          <IoCloseOutline />
        </button>
      </div>
    </div>
  );
}

export default AddInput;
