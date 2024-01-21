import axios from 'axios'

const instance=axios.create({
    baseURL:"https://api.themoviesdb.org/3"
})

export default instance