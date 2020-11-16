import React from 'react'
import ArticleCard from './ArticleCard'
import '../../index.css'

const articles = [
    {
        id: 1,
        title: 'Lemon',
        author: 'avaji',
        content: 'I love lemons',
        rate: 20
    },
    {
        id: 2,
        title: 'War',
        author: 'cat',
        content: 'war is a war',
        rate: -800
    },
    {
        id: 3,
        title: 'Peace',
        author: 'psyco',
        content: 'War is a peace',
        rate: 190710
    }
]

function ArticleList() {
    return (
    <section className='articlelist'>{articles.map((article) => { 
        return <ArticleCard key={article.id} {...article}/> 
    })}</section>
    )
}

export default ArticleList;