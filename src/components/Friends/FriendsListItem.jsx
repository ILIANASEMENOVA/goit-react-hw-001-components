import css from "./Friends.module.css"


export function FriendsListItem({ friend: { avatar, name, isOnline } }) {
  const color = isOnline ? 'green' : 'red';
    return (
      <li  className={css.item}>
      <span className={css.status} style={{backgroundColor:color}} ></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
</li>)
}