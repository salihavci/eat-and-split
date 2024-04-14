import Button from "./Button";

function BillContainer({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💵 Bill Value</label>
      <input type="number" />
      <label>🙎‍♂️ Your expense</label>
      <input type="number" />
      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="number" disabled />
      <label>😁 Who's paying the bill ?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default BillContainer;
