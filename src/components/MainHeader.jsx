import { MdPostAdd, MdMessage } from "react-icons/md";

function MainHeader({ creatingPost }) {
  return (
    <header className="text-center flex justify-between items-center mx-[10%] my-8 p-4 border-b-2 border-b-[#121212] border-solid">
      <h1 className="text-[2rem] flex gap-6 items-center text-[#000000]">
        <MdMessage />
        React Rebuild Excersise
      </h1>
      <p>
        <button
          className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-[#2a2630] rounded shadow-[0_2px_8px_rgba(0,0,0,0.2)] cursor-pointer font-bold px-6 py-3 border-[none] hover:bg-[#000000] hover:text-white"
          onClick={creatingPost}
        >
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
