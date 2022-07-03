import s from './FriendList.module.css';

function FriendlistItem({avatar, status, name }) {
   
                return (
                    <li className={s.Item} key=''>
                        <span className={status ? s.Online : s.Offline}
                            // style={{ backgroundColor: status ? 'green' : 'red' }}
                        ></span> 
                        <img className={s.Avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={s.Name}>{ name}</p>
                    </li>)
    
} 

export default FriendlistItem