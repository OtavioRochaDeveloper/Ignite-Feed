import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css';


const posts: PostType [] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tvnn.png',
      name: 'Otavio custodio',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      {type: 'link', content: 'otavio.design/docdesign'},
    ],
    publishedAt: new Date ('2024-05-03 22:55:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/tvnn.png',
      name: 'Otavio custodio',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      {type: 'link', content: 'otavio.design/docdesign'},
    ],
    publishedAt: new Date ('2024-05-03 22:55:00'),
    },
  ];

export function App() {
  return (
  <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
       {posts.map(post => {
        return (
          <Post 
            key={post.id}
            post={post}
          />
        )
       })}
      </main>
    </div>
  </div>
  )
}

