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
        console.log(error)
        return false
    }
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
                zip_code: report.zip,
                city: report.city,
                state: report.state,
                parties: report.parties,
                officer_name: report.officerName,
                badge_number: report.badgeNum,
                created_date: `${report.date}, ${report.time}`,
                image: report.image
            }
        )
      })
        .then(response => response.json())
        // .then(data => console.log(data))
        .catch(err => console.error(err))
}

export const sendImage = async (image) => {
    
    const url = 'https://copwatch-be.herokuapp.com/api/v1/upload'
    return await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                image: image
            }
        )
      })
        .then(response => response.json())
        // .then(data => console.log(data))
        .catch(err => console.error(err))
}

