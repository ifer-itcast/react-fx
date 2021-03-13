import React, { useContext } from 'react';
import { appContext, appSetStateContext } from '../AppState';

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
const Item: React.FC<Props> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext);
  const addToCart = () => {
    if (setState) {
      setState(state => ({
        ...state,
        shoppingCart: {
          items: [
            ...state.shoppingCart.items,
            {
              id,
              name,
            },
          ],
        },
      }));
    }
  };
  return (
    <li>
      {value.username}-- name: {name}
      email: {email}
      <button onClick={addToCart}>加入购物车</button>
    </li>
  );
};

export default Item;
