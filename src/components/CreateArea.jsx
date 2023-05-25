import React, { useState } from "react";

function CreateArea(props) {
  const [array, changeArray] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    changeArray((prevArray) => {
      return {
        ...prevArray,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(array);
    changeArray({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={array.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={array.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
