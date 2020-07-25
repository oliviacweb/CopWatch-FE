export const fetchIncidents = async () => {
    const url = 'https://copwatch-be.herokuapp.com/api/v1/reports'
    const data = await fetch(url,{
        method: "GET"
    })
        .then(res  => res.json())
        // .then(res => console.log(res))
        .catch(err => console.error(err))
    console.log(data)
    return data
}

export const postIncident = async (report) => {
    const url = 'https://copwatch-be.herokuapp.com/api/v1/reports/new'
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
        )
      })
        .then(response => response.json())
        .catch(err => console.error(err))
}
