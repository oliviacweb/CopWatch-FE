import React from 'react'
import Header from './Header'

import { render, fireEvent, waitFor } from "react-native-testing-library"

describe('Header', () => {
    it('Should display a title', async () => {
        const { getByText } = render(<Header />)

        const copWatch = await waitFor(()=> getByText('CopWatch'))

        expect(copWatch).toBeTruthy()
    })
})