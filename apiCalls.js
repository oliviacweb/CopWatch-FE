
export const fetchIncidents = async () => {
    const url = ''
    return await fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err))
}