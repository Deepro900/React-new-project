import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="bogura" special="doi"></District>
      <District name="natore" special="kacagolla"></District>
      <District name="rajshi" special="Mango"></District>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [])
  return (
    <div>
      <h1>Posts:{posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props) {
  return (
    <div style={{ backgroundColor: 'lightblue', margin: '20px', border: '4px solid salmon' }}>
      <h2>Title:{props.title}</h2>
      <p>body:{props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'gray',
  margin: '20px',
  borderRadious: '20px'
}
function District(props) {
  const [power, setPower] = useState(1)
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name} </h2>
      <p>Scpicialty:{props.special}</p>
      <h2>Power: {power}</h2>
      <button onClick={boostPower}>PowerOn</button>
    </div>
  )
}

export default App;
