import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropsTypes from 'prop-types';

export function FriendList({friends}) {
    return (<ul className="friend-list">
        {friends.map((friend) => {
            return (<FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
            />);
            
        })}
        
    </ul>);
}



FriendList.propsTypes = {
    friends: PropsTypes.arrayOf(PropsTypes.shape({id: PropsTypes.number.isRequired}).isRequired).isRequired
}