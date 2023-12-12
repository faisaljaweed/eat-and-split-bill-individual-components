import Friend from "./Friend";
function FriendList({friends,onAddselect,onselected}){
    
    return(
        <>
          {friends.map((e)=><Friend friendObj={e} key={e.id} onAddselect={onAddselect} onselected={onselected}/>)}
        </>
    );
}
export default FriendList;