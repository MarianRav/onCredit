const api = 'https://63bf83f0e262345656ea879c.mockapi.io/';

export const getClients = () => {
    return fetch(`${api}clients`)
    .then(response => response.json())
    .then(data => {return data})
}

export const createNewClient = (data) => {
   return fetch(`${api}clients`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => response)
      .catch(error => console.error('Error:', error))
}