import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const login = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
}


export default { login }