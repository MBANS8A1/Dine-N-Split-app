import { useState } from "react";

const startingFriends = [
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
    name: "Ralph",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = startingFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="redText">
          You owe {friend.name} £{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="greenText">
          {friend.name} owes you £{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-text">🧑‍🤝‍🧑Friend name</label>
      <input id="friend-text" type="text" />
      <label htmlFor="friend-image">🌄Image HTML</label>
      <input type="text" id="friend-image" />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X </h2>
      <label htmlFor="bill-value">💰Bill value</label>
      <input type="text" id="bill-value" />
      <label htmlFor="your-value">🧍‍♂️Your expense</label>
      <input type="text" id="your-value" />
      <label htmlFor="friend-value">🧑‍🤝‍🧑X's expense</label>
      <input type="text" id="friend-value" disabled />
      <label htmlFor="whopays">🤑Who is paying the bill?</label>
      <select id="whopays">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
export default App;
