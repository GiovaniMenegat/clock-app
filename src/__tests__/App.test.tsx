import {render, screen} from '@testing-library/react'
import App from '../App'

describe('App tests', () => {
    it('Should contains a h1 with the app name', () => {
        render(<App />)
        const heading = screen.getByText(/clock apps/i)
        expect(heading).toBeInTheDocument()
    })
})