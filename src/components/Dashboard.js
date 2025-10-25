import React, { useEffect, useState } from 'react';
import BotControl from './BotControl';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    const id = window.location.pathname.split('/').pop();
    setUser({ username, id });
  }, []);

  return (
    <div className="empire-dashboard">
      {user && (
        <div className="empire-user">
          <h2>Welcome, <span className="highlight">{user.username}</span></h2>
          <p className="user-id">Discord ID: {user.id}</p>
        </div>
      )}
      <BotControl />
    </div>
  );
}

export default Dashboard;
