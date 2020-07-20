import React from 'react'
import ReportForm from './ReportForm'

import { render, fireEvent, waitFor } from "react-native-testing-library"

describe('ReportForm', () => {
    xit('Should display 7 inputs', async () => {
        const { getByPlaceholder } = render(<ReportForm />)

        const parties = await waitFor(() => getByPlaceholder("Enter Involved Parties"))
        const date = await waitFor(() => getByPlaceholder("Enter Date"))
        const time = await waitFor(() => getByPlaceholder("Enter Time"))
        const location = await waitFor(() => getByPlaceholder("Enter Location"))
        const names = await waitFor(() => getByPlaceholder("Enter Officer Name(s)"))
        const badges = await waitFor(() => getByPlaceholder("Enter Officer Badge Number(s)"))
        const description = await waitFor(() => getByPlaceholder("Enter A Description Of What Happened"))

        expect(parties).toBeTruthy()
        expect(date).toBeTruthy()
        expect(time).toBeTruthy()
        expect(location).toBeTruthy()
        expect(names).toBeTruthy()
        expect(badges).toBeTruthy()
        expect(description).toBeTruthy()
    })

    xit('should update display values as they are entered', () => {
        const { getByDisplayValue } = render(<ReportForm/>)
    })
})