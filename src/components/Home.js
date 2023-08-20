
import { useState } from 'react';

const Home = () => {
   // let name = 'mario';
    const [name, setName] = useState('mario');
    const handleClick = () => {
        
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }
    return (
        <div className="home">

        </div>
      );
}
 
export default Home;