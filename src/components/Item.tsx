import React, { useContext } from 'react';
import { appContext } from '../index';

interface Props {
  id: number;
  name: string;
  email: string;
}

/* const Item: React.FC<Props> = props => {
  return (
    <appContext.Consumer>
      {value => {
        return (
          <li>
            {value.username}--
            name: {props.name}
            email: {props.email}
          </li>
        );
      }}
    </appContext.Consumer>
  );
}; */
const Item: React.FC<Props> = props => {
  const value = useContext(appContext);
  return (
    <li>
      {value.username}-- name: {props.name}
      email: {props.email}
    </li>
  );
};

export default Item;
