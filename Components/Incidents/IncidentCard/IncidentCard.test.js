import React from 'react'
import IncidentCard from './IncidentCard'
import { render, fireEvent, waitFor } from "react-native-testing-library"
// import testData file (in root) that has a sample array of incident objects
import { testData } from '../../../testData'
describe('IncidentsCard', () => {
    it('Should display basic info about the incident', async () => {
        const { getByText } = render(<IncidentCard incident={testData[0]} />)
        const madMax = await waitFor(() => getByText("Date: Tue, Jul 21, 2020 6:19 PM"))
        const city = await waitFor(() => getByText("Location: Thunderdome, Colorado 80102"))
        const description = await waitFor(() => getByText("Description: Report 4"))

        expect(madMax).toBeTruthy()
        expect(city).toBeTruthy()
        expect(description).toBeTruthy()
    })
})
