import React from 'react'
import '../../index.css';

function ArticleCard({id ,title, author, content}) {
    const authorClickHandler = () => {
        alert(`Article ID ${id}`)
    }
    return (
        <section className='article'>
            <h1>{title}</h1>
            <h4 onClick={authorClickHandler}>{author}</h4>
            <p>{content}</p>
        </section>
    )
}

export default ArticleCard;

