import PropTypes from "prop-types";
import FriendlistItem from "./FriendListItem";
import s from './FriendList.module.css';

function Friendlist({friends} ) {
     // props ={avatar, name, ststus, id}
    return (
        <ul className={s.List} >
            {friends.map(friend => {
                return <FriendlistItem avatar={friend.avatar} name={friend.name} status={friend.isOnline} key={friend.id}
                />
            })}  
</ul>
) 

};

Friendlist.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        ststus: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,

        }
))

}
    
export default Friendlist