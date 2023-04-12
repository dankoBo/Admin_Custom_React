import Fetch from './Fetch'

function Users() {
    const link = 'https://jsonplaceholder.typicode.com/users?_limit=10' //?_limit=2
    return <Fetch link={link} />
}

export default Users;