import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import logo from './assets/images/logo.svg';
import ShoppingCart from './components/ShoppingCart';

interface Props {}
interface State {
  robotGallery: any[];
}

const App: React.FC = props => {
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setRobotGallery(data);
      } catch (e) {
        setError(e.message);
      }

      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.red}>
      <img src={logo} width="200" alt="" />
      <h1>今天星期一，全校升国旗！</h1>
      <ShoppingCart />
      {error &&
        <div>
          出错：{error}
        </div>}
      {!loading
        ? <ul style={{ textAlign: 'left', color: 'black', lineHeight: '30px' }}>
            {robotGallery.map(r =>
              <li key={r.id}>
                name: {r.name}
                email: {r.email}
              </li>
            )}
          </ul>
        : <h2>loading...</h2>}
    </div>
  );
};

export default App;
