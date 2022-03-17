import React, { useEffect, useState } from 'react';
import './styles.scss';

export const UserDetail = ({ userSelected }) => {
      const [userData, setUserData] = useState(null);

      useEffect(() => {
            const fetchData = async () => {
                  const res = await fetch(
                        `https://api.github.com/users/${userSelected.username}`
                  );
                  const json = await res.json();
                  setUserData(json);
            };
            fetchData();
      }, []);

      return (
            <div className='main-wrapper'>
                  {userData ? (
                        <div className='user-detail-wrapper'>
                              <div className='avatar-wrapper'>
                                    <img
                                          src={userData.avatar_url}
                                          alt={userData.name}
                                    />
                              </div>

                              <div>
                                    <h3>{userData.name}</h3>
                                    <p>{userData.location}</p>
                              </div>
                        </div>
                  ) : (
                        'Loading...'
                  )}
            </div>
      );
};
