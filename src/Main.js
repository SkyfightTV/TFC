import React from 'react';
import { Navigator } from 'react-native-navigation'
import Home from './home/Home'
import Project from './project/Project'

const nav = Navigator({
    Home: {screen: Home},
    Project: {screen: Project}
})

export default class Main extends React.Component {
    render() {
        return (
            <Home/>
        )
    }
}