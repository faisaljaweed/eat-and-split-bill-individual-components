import FriendList from "./FriendList";
import "./index.css";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";
import initialFriends from "./data";
export default function App(){ 
  const [freinds,setfriend]=useState(initialFriends);
  const [show,setshow]=useState(false);
  const [selected,setselected]=useState(null);
  function handleShowAddFriend()
    {
        setshow((e)=>!e);

    }

    function addfriends(friend){
        setfriend((freinds)=>[...freinds,friend])
        setshow(false);
    }
    function handleselection(friend){
      // setselected(friend);
      setselected((cur)=>cur?.id===friend.id?null:friend)
    }

    function handleSplitBill(value){
      console.log(value);
      setfriend((friends)=>friends.map((friend)=>friend.id===selected.id?{...friend,balance:friend.balance+value}:friend))
      setselected(null);
    }
  return (
    <div className="app">
      <div className="sidebar">
      <FriendList friends={freinds} onAddselect={handleselection} onselected={selected}/>
     {show && <FormAddFriend onAddFriend={addfriends} />}
      <Button onClick={handleShowAddFriend}>{show?"Close":"Add Friend"}</Button>
      </div>
      <div>
       {selected&& <FormSplitBill selectedfriend={selected} onSplitBill={handleSplitBill}/>}
      </div>
    </div>
  );
}