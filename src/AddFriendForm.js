import { useState } from "react";
import Button from "./Button";

function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();

    if (!name || !url) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${url}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setUrl("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>🐩 Name : </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>👜 URL : </label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}

export default AddFriendForm;
