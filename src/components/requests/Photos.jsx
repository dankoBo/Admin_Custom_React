import Fetch from './Fetch'

function Photos() {
    const link = 'https://jsonplaceholder.typicode.com/photos?_limit=9'
    return <Fetch link={link}/>
}

export default Photos;