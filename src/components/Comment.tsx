import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: String;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }
    
    return (
        <div className={styles.comment}>
            <Avatar 
            hasBorder={false} 
            src="https://github.com/tvnn.png" 
            alt=""
         />

            
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
             <header>
                <div className={styles.authorAndTime}>
                    <strong>
                        Otavio custodio
                    </strong>
                    <time title='29 de maio de 2024'dateTime="2024-05-29">Cerca de 1Hora atras</time>
                </div>

                <button onClick={handleDeleteComment} title="Deletar comentario">
                    <trash size={24} />
                </button>
            </header>

            <p>{content}</p>
        </div>

        <footer>
            <button onClick={handleLikeComment}>
                <thumbsUp/>
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>    
        </div>
    </div>
    )
}