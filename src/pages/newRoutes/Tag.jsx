import React from 'react';
import { useParams } from 'react-router-dom';

export const Tags = () => {
  const { tagId } = useParams();

  return (
    <h1>{`Tags ${tagId}`}</h1>
  );
};
