import { FriendListItem } from "components/FriendListItem/FriendListItem"
import PropsTypes from 'prop-types'
import css from './FriendList.module.css'


export function FriendList({friends}) {
    return (<ul className={css.friendList}>
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



FriendList.PropsTypes = {
    friends: PropsTypes.arrayOf(PropsTypes.shape({id: PropsTypes.number.isRequired}).isRequired).isRequired
}