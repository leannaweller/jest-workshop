import React from 'react';
import users from './users.json';
import css from './userList.css';

export const UsersList = ({ onClick = () => console.log('xcvnxcnvxbcv')}) => {
    return (
        <div className={css.root}>
            <ul className={css.list} onClick={() => {
                onClick();
                onClick();
                onClick();
            }}>
                {
                    users.map((user) => (
                        <li className={css.listItem} key={user.username} data-id={user.username}>
                            <span>NAME: {user.name} <br/></span>
                            USERNAME: {user.username} <br/>
                            EMAIL: {user.email} <br />
                            PHONE: {user.phone}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};


