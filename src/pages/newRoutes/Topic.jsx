import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const Topic = () => {
  const { topicId } = useParams();

  return (
    <>
      <div className="content">
        <Outlet />
      </div>
      <div className="bar">
        <h1>{`Topic ${topicId}`}</h1>
        <ul>
          <li><Link to="tag/1">tag 1</Link></li>
          <li><Link to="tag/2">tag 2</Link></li>
          <li><Link to="tag/3">tag 3</Link></li>
        </ul>
      </div>
    </>
  );
};
