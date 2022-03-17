import React from 'react';
import { UsersList } from '../UsersList';

export const Home = ({ onSelectUser }) => {
      const USERS = [
            { username: 'GrahamCampbell' },
            { username: 'fabpot' },
            { username: 'weierophinney' },
            { username: 'rkh' },
            { username: 'josh' },
      ];

      return (
            <div>
                  <div className='main-wrapper'>
                        <UsersList
                              userList={USERS}
                              onSelectUser={onSelectUser}
                        />
                  </div>
            </div>
      );
};
