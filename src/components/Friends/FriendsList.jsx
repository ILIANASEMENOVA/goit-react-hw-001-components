import { FriendsListItem } from "./FriendsListItem";
import css from "./Friends.module.css"


export function FriendList({friends}) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendsListItem friend={friend} key={friend.id } />
      ))
      }
    </ul>
  )
}