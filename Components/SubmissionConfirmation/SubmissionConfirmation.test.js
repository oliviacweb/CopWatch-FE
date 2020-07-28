import React from 'react'
import SubmissionConfirmation from './SubmissionConfirmation';
import { render, fireEvent, waitFor } from "react-native-testing-library";
import { act } from "react-test-renderer";

describe('SubmissionConfirmation', () => {
    it('should display a confirmation message', async ()  => {
        const { getByText } = render(<SubmissionConfirmation />)
        const message = await waitFor(() => getByText('Thank you - you\'re report has been successfully submitted.'))
        expect(message).toBeTruthy()
    })

})
