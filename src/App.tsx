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
      {type: 'paragraph', content: 'Acabei de subir mais um projeto É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
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
      {type: 'paragraph', content: 'Acabei de subir mais um projeto É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
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
      <sidebar />
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

