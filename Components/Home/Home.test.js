import React from 'react'
import Home from './Home'

import { render, fireEvent, waitFor } from "react-native-testing-library"

// import mock coords from test file
import { coords } from '../../testData'

// router imports
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";


describe('Home', () => {

//     let Stack;

//   beforeEach(() => {
//     Stack = createStackNavigator();
//   });

    xit('Should display the header', async () => {
        // const mock = jest.spyOn(Home, 'findCoordinates')
        // mock.mockImplementation(() => coords)
        const homeFormComponent = () => <Home navigation={jest.fn()}/>
        const { getByText } = render(
        <NavigationContainer>
           <Stack.Screen 
            name="Home"
            component={homeFormComponent}
            />
          </NavigationContainer>)

        // 
        // Home.findCoordinates.mockImplementation(() => Promise.resolve(coords))

        const header = await waitFor(() => getByText('CopWatch'))

        expect(header).toBeTruthy()
    })
    xit('Should display the File a Report button', async () => {

    })
    xit('Should display the header', async () => {

    })
})