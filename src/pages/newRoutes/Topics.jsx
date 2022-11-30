import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import './Topics.scss';

export const Topics = () => {
  const navigate = useNavigate();

  const onSelect = () => {
    navigate('topic/1');
  };

  return (
    <div className="topic">
      <div className="bar">
        <h2>Topics</h2>
        <ul>
          <li><Link to="topic/1">topic 1</Link></li>
          <li><Link to="topic/2">topic 2</Link></li>
          <li><Link to="topic/3">topic 3</Link></li>
          <li><button onClick={onSelect}>select</button></li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
