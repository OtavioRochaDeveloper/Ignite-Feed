import {format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/ptBR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'Link';
    Content : String;
}

export interface PostType {
    id: Number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: Post;
}


export function Post ({post}: PostProps) {

    const [comments, setComments] = useState ([
        1,
        2,
        'Post muito bacana, hein?!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');


    const publishedDateFormatted = format (post.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale:ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow (post.publishedAt, {
        locale:ptBR,
        addSuffix: true
    }); 

    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment (event: FormEvent) {
        event.preventDefault()

        setComments ([...comments, newCommentText ]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement> ) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement> ){
        event.target.setCustomValidity('Este campo e obrigatorio')
    }

    function deleteComment (commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter (comment => {
            return comment!== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }



    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>  
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                        } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
            
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                        key={comment} 
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    )
}
