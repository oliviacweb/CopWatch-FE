// const axios = require('axios');

// export const fetchIncidents = async () => {
//     const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
//     const url = `${corsAnywhere}http://localhost:5000/api/v1/reports`
//     const data = await fetch(url,{
//         method: "GET"
//     })
//         // .then(res  => res.json())
//         .then(res => console.log(res))
//         .catch(err => console.error(err))
//     console.log(data)
//     return data
// }

export const fetchIncidents = async () => {

    const url = `https://copwatch-be.herokuapp.com/api/v1/reports`
    try {
        const response = await fetch(url);
            if(!response.ok) {
                console.log(response)
                throw new error(error);
            }
        const data = await response.json();
        return data;
    }
    catch (error) {
        return false
    }
}


export const postIncident = async (report) => {

    // const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
    const url = `https://copwatch-be.herokuapp.com/api/v1/reports/new`
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                description: report.description,
                zip_code: report.location,
                city: report.location,
                state: report.location,
                parties: report.parties,
                officer_name: report.officerName,
                badge_number: report.badgeNum,
                created_date: report.date
            }
            // {
            //     "description": report.description,
            //     "zip_code": report.zip,
            //     "city": report.location,
            //     "state": report.location,
            //     "parties": report.parties,
            //     "officer_name": report.officer,
            //     "badge_number": report.badgeNum,
            //     "created_date": report.date
            // }
        )
      })
        .then(response => response.json())
        .catch(err => console.error(err))
}



// export const fetchIncidents = async () => {
//     const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
//     const url = `${corsAnywhere}http://localhost:5000/api/v1/reports`
//     const data = await fetch(url)
//     return data
// }
// const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
// const url = `${corsAnywhere}http://localhost:5000/api/v1/reports`
// const data = await fetch(url)
// return data


// export const fetchIncidents = async () => {
//     return await fetch('https://fe-cors-proxy.herokuapp.com', {
//         method: "GET",
//         headers: {
//             "Target-URL": "http://localhost:5000/api/v1/reports"
//         }
//     })
//     .then(response => response.json())
//     // .then(foxData => console.log(foxData))
//     .catch(error => console.error(error))
// }


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
