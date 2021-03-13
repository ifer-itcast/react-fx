import React from 'react';
import styles from './App.module.css';
import logo from './assets/images/logo.svg';
import ShoppingCart from './components/ShoppingCart';

interface Props {}
interface State {
  robotGallery: any[];
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
    };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data =>
      this.setState({
        robotGallery: data,
      })
    );
  }
  render() {
    return (
      <div className={styles.red}>
        <img src={logo} width="200" alt="" />
        <h1>今天星期一，全校升国旗！</h1>
        <ShoppingCart />
        <ul style={{textAlign: 'left', color: 'black', lineHeight: '30px'}}>
          {
            this.state.robotGallery.map(r => <li key={r.id}>
              name: {r.name}
              email: {r.email}
            </li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
