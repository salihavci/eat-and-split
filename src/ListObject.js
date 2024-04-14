import Button from "./Button";

function ListObject({ data, onSelectedFriend, selectedFriends }) {
  const isSelected = selectedFriends?.id === data.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={data.image} alt={data.name} />
      <h3> {data.name}</h3>
      <p
        className={data.balance > 0 ? `green` : data.balance < 0 ? `red` : null}
      >
        {data.balance < 0
          ? `You owe ${data.name} ${Math.abs(data.balance)}€`
          : data.balance > 0
          ? `${data.name} owes you ${data.balance}€`
          : `${data.name} and You are even`}
      </p>
      <Button act={() => onSelectedFriend(data)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default ListObject;
