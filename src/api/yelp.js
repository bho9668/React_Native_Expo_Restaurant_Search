import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer pKsRA6IyhmRXW05haiubRPpou-uR9xzH2CRxPgD0nMrDpV5GGNS629vYvWsYJK6tn-Apgh4VcJFM8lSFEldOW7vCIZmk43LwuGc5wqNwsD4hXYNufZVHbpQOaecjXHYx',
    }
})

