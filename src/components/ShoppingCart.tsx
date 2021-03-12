import React from 'react';
import styles from './ShoppingCart.module.css';

interface Props {}

interface State {
  isOpen: boolean
}

export default class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={() => {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }}>购物车</button>
        <div className={styles.cartDropDown} style={{
          display: this.state.isOpen ? 'block' : 'none'
        }}>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}