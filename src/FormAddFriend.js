import { useState } from "react";
import Button from "./Button";


function FormAddFriend({onAddFriend}){
    const [name,setname]=useState();
    const [image,steimage]=useState('https://i.pravatar.cc/48?');
    function handleSubmit(e){
    e.preventDefault();
    if(!name||!image)return;
    const id=crypto.randomUUID();
    const newFriend={
        id,
        name,
        image :`${image}?=${id}`,
        balance : 0,
        
    }
    onAddFriend(newFriend);
    setname("");
    steimage("https://i.pravatar.cc/48?");
    }
    
    return(
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧑‍🤝‍🧑Friend name</label>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} ></input>

            <label>🧱Image URL</label>
            <input type="text" value={image} onChange={(e)=>steimage(e.target.value)} ></input>

            <Button>Add</Button>
        </form>
    );
}
export default FormAddFriend;