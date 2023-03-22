import { render } from '@testing-library/react';
import axios from 'axios';
import { Home } from '..';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedIpAddressReturn = {
    id: "America/Noronha",
}

describe('Home tests', () => {
    // const renderComponent = () => (render(<Home />))

    it('Should get the user ip address', async () => {
        // mockedAxios.get.mockImplementationOnce(() => Promise.resolve(mockedIpAddressReturn));

        // expect(mockedAxios).toHaveBeenCalled()
    })
})
