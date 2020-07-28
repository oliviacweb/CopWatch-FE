import React from 'react'
import IncidentDetails from './IncidentDetails'
import { render, fireEvent, waitFor } from "react-native-testing-library"
// import testData file (in root) that has a sample array of incident objects
import { testData } from '../../../testData'
describe('IncidentDetails', () => {
    it('Should display incident details', async () => {
        const { getByText } = render(<IncidentDetails incident={testData[0]} />)
        const madMax = await waitFor(() => getByText("Date: Tue, Jul 21, 2020 6:19 PM"))
        const location = await waitFor(() => getByText("Location: Thunderdome, Colorado 80102"))
        const description = await waitFor(() => getByText("Description: Report 4"))

        expect(madMax).toBeTruthy()
        // expect(location).toBeTruthy()
        // expect(description).toBeTruthy()
    })
})
