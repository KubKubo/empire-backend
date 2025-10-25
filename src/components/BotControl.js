import React from 'react';

function BotControl() {
  const launchBot = async (name) => {
    await fetch(`/launch/bot/${name}`, { method: 'POST' });
    alert(`${name} launched`);
  };

  const startFiveM = async () => {
    await fetch('/launch/fivem/start', { method: 'POST' });
    alert('FiveM server started');
  };

  return (
    <div className="empire-control">
      <h3>Bot & Server Controls</h3>
      <div className="button-group">
        <button onClick={() => launchBot('ForgeStatus')}>Launch ForgeStatus</button>
        <button onClick={() => launchBot('MusicBot')}>Launch MusicBot</button>
        <button onClick={startFiveM}>Start FiveM Server</button>
      </div>
    </div>
  );
}

export default BotControl;
