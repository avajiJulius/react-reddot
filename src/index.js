import React from 'react'
import ReactDom from 'react-dom'
import Navigation from './Components/Navigation'
import ArticleList from './Components/Article/ArticleList'


function Home() {
    return (<section>
        <Navigation/>
        <ArticleList />
    </section>)
}

ReactDom.render(<Home />, document.getElementById('root'))