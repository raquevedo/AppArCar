import React from 'react';
import { useParams } from 'react-router-dom';

export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const { id } = useParams();

  return(
    <div>{id}</div>
  );
}
