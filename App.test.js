import React from 'react'
import App from './App'

import { render, fireEvent, waitFor } from "react-native-testing-library"

describe('App', () => {
    it('Should display CopWatch', async () => {
        const { getByText } = render(<App />)

        const title = await waitFor(() => getByText("App!"))

        expect(title).toBeTruthy()
    })   
})