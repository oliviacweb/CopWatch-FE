import React from 'react'
import Header from './Header'

import { render, fireEvent, waitFor } from "react-native-testing-library"

describe('Header', () => {
    it('Should display CopWatch', async () => {
        const { getByText } = render(<Header />)

        const title = await waitFor(() => getByText("CopWatch"))

        expect(title).toBeTruthy()
    })   
})