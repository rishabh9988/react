import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement: React.FC = () => {
  const err: any = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <h1>{err.status}</h1>
    </div>
  );
};

export default ErrorElement;
