import React from 'react';
import { ListItem } from './ListItem';

import './styles.scss';

export const UsersList = ({ userList, onSelectUser }) => {
      return (
            <div>
                  <h1>Top Five GitHub Users</h1>
                  <p>Tap the username to see more information</p>

                  {userList.map((item) => (
                        <ListItem
                              key={item.username}
                              labelText={item.username}
                              onClick={() => onSelectUser(item)}
                        />
                  ))}
            </div>
      );
};
