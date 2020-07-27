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
    console.log(report.image)
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
                created_date: report.date,
                image: report.image
            }
        )
      })
        .then(response => response.json())
        .catch(err => console.error(err))
}

const postImage = (report) => {
    console.log(report.image)
    // const corsAnywhere = `https://cors-anywhere.herokuapp.com/`;
    // const url = 'https://copwatch-be.herokuapp.com/api/v1/upload'
    const url = `http://localhost:5000/api/v1/upload`
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                image: report.image
            }
        )
      })
        // .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
}

