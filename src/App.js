import React from 'react'
import {AppContextManager} from './AppContext'
import HomePage from "./HomePage";

function App() {
    return (
        <AppContextManager>
            <HomePage/>
        </AppContextManager>
    )
}

export default App;
