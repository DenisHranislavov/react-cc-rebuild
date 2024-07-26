import React, { useState } from "react";

const NewPost = ({ onCancel, onAddPost }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = { body: enteredBody, author: enteredAuthor };
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className="flex flex-col gap-10" onSubmit={submitHandler}>
      <p>
        <label htmlFor="body" className="block text-black mb-[0.05rem]">
          Text
        </label>
        <textarea
          id="body"
          className="block w-full bg-[#c4a9e4] text-[#28262c] p-2 rounded-md border-[none]"
          required
          rows={3}
          onChange={changeBodyHandler}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          className="block w-full bg-[#c4a9e4] text-[#28262c] p-2 rounded-md border-[none]"
          id="name"
          required
          onChange={changeAuthorHandler}
        />
      </p>
      <p className="flex justify-end gap-2">
        <button className="cursor-pointer rounded bg-[#34036c] text-[#e5d5f7] px-6 py-2 border-[none] hover:bg-[#23014a]">
          Submit
        </button>
        <button
          className="cursor-pointer rounded bg-[#34036c] text-[#e5d5f7] px-6 py-2 border-[none] hover:bg-[#23014a]"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </p>
    </form>
  );
};

export default NewPost;
