import React from 'react';
import { useAppContext } from './AppContext';

const ComponentA: React.FC = () => {
  const { state, setState } = useAppContext();

  return (
    <div>
      <p> состояние{state}</p>
      <button onClick={() => setState('new state')}>изм состояние</button>
    </div>
  );
};

export default ComponentA;
