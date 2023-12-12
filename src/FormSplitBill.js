import { useState } from "react";
import Button from "./Button";


function FormSplitBill({selectedfriend ,onSplitBill}){
    const[bill,setbBill]=useState("");
    const[paidByUser,setPaidByUser]=useState("");
    const[whoIsPaying,setWhoIsPaying]=useState("user");
    const billPaid=bill?bill-paidByUser:"";
    function handleSubmit(e){
        e.preventDefault();
        if(!bill || !paidByUser ) return;
        onSplitBill(whoIsPaying==="user"?paidByUser:-paidByUser)
    }
    return(
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>SPLIT A BILL WITH {selectedfriend.name}</h2>

            <label>💰Bill Value</label>
            <input type="text" value={bill} onChange={(e)=>setbBill(Number(e.target.value))}/>

            <label>🕴️Your expense</label>
            <input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value) > bill ? paidByUser: Number(e.target.value))}/>

            <label>🧑‍🤝‍🧑{selectedfriend.name} expense</label>
            <input type="text" disabled value={billPaid}/>

            <label>🤑who is paying the bill</label>
            <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedfriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}
export default FormSplitBill;