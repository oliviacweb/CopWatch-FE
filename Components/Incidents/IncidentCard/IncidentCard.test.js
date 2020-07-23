import React from 'react'
import IncidentCard from './IncidentCard'

import { render, fireEvent, waitFor } from "react-native-testing-library"

// import testData file (in root) that has a sample array of incident objects
import { testData } from '../../../testData'

describe('IncidentsCard', () => {
    it('Should display basic info about the incident', async () => {
        const { getByText } = render(<IncidentCard incident={testData[0]} />)

        const madMax = await waitFor(() => getByText("Parties: Max Miller"))

        const city = await waitFor(() => getByText("City: Denver"))

        const description = await waitFor(() => getByText("Description: Report 4"))
        
        const badge = await waitFor(() => getByText("Badge Number: 12"))

        expect(madMax).toBeTruthy()
        expect(city).toBeTruthy()
        expect(description).toBeTruthy()
        expect(badge).toBeTruthy()
    })   
})