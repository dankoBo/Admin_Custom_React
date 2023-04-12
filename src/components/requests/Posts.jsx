import Fetch from './Fetch'

function Posts() {
    const link = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
    return <Fetch link={link}/>
}

export default Posts;