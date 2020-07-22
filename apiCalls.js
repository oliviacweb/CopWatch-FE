// const axios = require('axios');

// export const fetchIncidents = async () => {
//     const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
//     const url = `${corsAnywhere}http://localhost:5000/api/v1/reports`
//     const data = await fetch(url)
//         .then(res  => res.json())
//         .catch(err => console.error(err))
//     console.log(data)
//     return data
// }
export const fetchIncidents = async () => {
    const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
    const url = `${corsAnywhere}http://localhost:5000/api/v1/reports`
    const data = await fetch(url)
    return data
}




// export const fetchIncidents = () => {
//     console.log('fetch! ')
//     const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
//     const url = `${corsAnywhere}http://localhost:5000/api/v1/reports`

//         return axios.get(url)
//         // {
//         // //   headers: {
//         // //     'Content-Type': 'multipart/form-data'
//         // //   }
//         // })
      
// }
// export const fetchIncidents = () => {
//     const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
//     const url = `${corsAnywhere}http://localhost:5000/api/v1/reports`
//     axios.get(url)
//     .then(function (response) {
//       // handle success
//       console.log(response);
//       return response
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .finally(function () {
//       // always executed
//     });
      
// }