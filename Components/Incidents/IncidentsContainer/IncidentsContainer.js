import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { fetchIncidents } from '../../../apiCalls'
import IncidentCard from '../IncidentCard/IncidentCard'

export default function IncidentsContainer() {
    // const [ incidents, updateIncidents ] = useState([])
    
    // api call to get all incidents?
    // use hook to make call on render and hook to store incidents
    // map over incidents to cerate an IncidentCard for each
    
//   useEffect(() => {
//     async function getIncidents() {
//         // const incidentsData = await Promise(fetchIncidents())
//         const incidentsData = await fetchIncidents()
//         console.log('data', incidentsData)
//         if (incidentsData !== undefined) {
//             updateIncidents(incidentsData)
//         }
//     }
//     getIncidents()
    
//   }, [])
// useEffect(() => {
//     const getIncidents = async ()=> {
//         try {
//           const data = await fetchIncidents();
//           if (data) updateIncidents(data);
//         } catch (e) {   
//           console.error(e);
//         }
//       };
//     getIncidents()
// })


// useEffect(() => {
//     Promise.all([fetchIncidents().then(res => res.json())]).then(data => updateIncidents(data[0]))
// })


    // test data:
    const incidents = [
        {
        "badge_number": "12314142-1231",
        "city": "Denver",
        "description": "Report 1",
        "id": 1,
        "officer_name": "Deputy Harris, Officer Riley",
        "parties": "Bob Barker",
        "self.created_date": "Fri, 03 Jul 2020 02:41:00 GMT",
        "state": "Colorado",
        "zip_code": "80104"
        },
        {
        "badge_number": "123141412-2313",
        "city": "Tampa",
        "description": "Report 2",
        "id": 2,
        "officer_name": "Officer Lin",
        "parties": "Daniel Davidson",
        "self.created_date": "Tue, 16 Jun 2020 06:23:00 GMT",
        "state": "Florida",
        "zip_code": "12345"
        },
        {
        "badge_number": "",
        "city": "Phoenix",
        "description": "Report 3",
        "id": 3,
        "officer_name": "",
        "parties": "Mary May",
        "self.created_date": "Mon, 20 Jul 2020 19:40:00 GMT",
        "state": "Arizona",
        "zip_code": "22222"
        }
        ]

    const allIncidentCards = () => {
        console.log('allIncidentsCards', incidents)
        if (incidents !== undefined) {
            return incidents.map(incident => <IncidentCard incident={incident} key={incident.id}/>)

        }
    }
    return (
        <ScrollView>
            {allIncidentCards()}
        </ScrollView>
    )
}