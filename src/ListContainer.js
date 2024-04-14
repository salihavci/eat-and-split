import ListObject from "./ListObject";

function ListContainer({ data, onSelectedFriend, selectedFriends }) {
  return (
    <ul>
      {data.map((obj, index) => {
        return (
          <ListObject
            key={index}
            data={obj}
            onSelectedFriend={onSelectedFriend}
            selectedFriends={selectedFriends}
          />
        );
      })}
    </ul>
  );
}

export default ListContainer;
