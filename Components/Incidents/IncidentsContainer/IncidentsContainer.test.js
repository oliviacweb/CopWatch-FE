import React from 'react'
import IncidentsContainer from './IncidentsContainer'

import { render, fireEvent, waitFor } from "react-native-testing-library"

// import testData file (in root) that has a sample array of incident objects
import { testData } from '../../../testData'

// imports to mock fetch call
jest.mock('../../../apiCalls')
import { fetchIncidents } from '../../../apiCalls'

// mock fetch call
fetchIncidents.mockImplementation(() => Promise.resolve(testData))


describe('IncidentsContainer', () => {
    it('Should show info for multiple incidents', async () => {
        const { getByText } = render(<IncidentsContainer />)

        const bob = await waitFor(() => getByText("Parties: Bob Barker"))
        const bobCity = await waitFor(() => getByText("City: Denver"))

        const mary = await waitFor(() => getByText("Parties: Mary May"))
        const maryCity = await waitFor(() => getByText("City: Phoenix"))

        const neil = await waitFor(() => getByText("Parties: Neil Tyson"))
        const neilCity = await waitFor(() => getByText("City: Space"))

        expect(bob).toBeTruthy()
        expect(bobCity).toBeTruthy()

        expect(mary).toBeTruthy()
        expect(maryCity).toBeTruthy()

        expect(neil).toBeTruthy()
        expect(neilCity).toBeTruthy()
    })   
})