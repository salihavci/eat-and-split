import BillContainer from "./BillContainer";
import ListContainer from "./ListContainer";
import Button from "./Button";
import AddFriendForm from "./AddFriendForm";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [isShowAddFriend, setIsShowAddFriend] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAddFriend() {
    setIsShowAddFriend(() => !isShowAddFriend);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriends((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setIsShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <ListContainer
          data={friends}
          onSelectedFriend={handleSelectedFriend}
          selectedFriends={selectedFriends}
        />
        {isShowAddFriend && <AddFriendForm onAddFriend={handleAddFriends} />}
        <Button act={handleShowAddFriend}>
          {isShowAddFriend ? `Close` : `Add Friends`}
        </Button>
      </div>
      {selectedFriends && <BillContainer selectedFriend={selectedFriends} />}
    </div>
  );
}

export default App;
