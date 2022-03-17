import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UserDetail } from './components/UserDetail';

import './globalStyles.scss';

function App() {
      const [userSelected, setSelectedUser] = useState(null);

      return (
            <div className='App'>
                  <Header
                        title='Home'
                        showBack={userSelected !== null}
                        onClickBack={() => setSelectedUser(null)}
                  />

                  {userSelected ? (
                        <UserDetail userSelected={userSelected} />
                  ) : (
                        <Home onSelectUser={setSelectedUser} />
                  )}
            </div>
      );
}

export default App;
