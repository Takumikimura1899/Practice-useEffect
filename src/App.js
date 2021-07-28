import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   // fetchメソッドで外部API(今回はJSONPlaceholderというテストに便利なAPI)と通信を行う
  //   // 今回はpostsデータを取得してくる
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     // 帰ってきたhttp通信をjson形式に変換
  //     .then((res) => res.json())
  //     // その中のデータをsetPosts関数を使ってpostsにセットする
  //     // .then((data) => console.log(data));
  //     .then((data) => {
  //       setPosts(data);
  //     }, []);
  // });

  async function getDataByJson() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();
    console.log(json);
    setPosts(json);
  }

  useEffect(() => getDataByJson(), []);

  return (
    <div className='App'>
      <h1>Learn useEffect</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
