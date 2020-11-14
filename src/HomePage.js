import React, {Component} from 'react'
import AppContext from './AppContext'

class HomePage extends Component {
    // use the App context as mentioned by https://reactjs.org/docs/context.html#classcontexttype
    static contextType = AppContext

    render() {// user the global state and the corresponding update function
        const {global, update} = this.context // this can be used because of the contextType

        return (
            <div>
                <button
                    onClick={() => {
                        global.user.authenticated = true; // then the global state can be changed
                        update(global) // the change is only published after the call of update
                    }}
                >
                    Update User
                </button>

                Hello: {global.user.name}, your authentication is: {global.user.authenticated.toString()}
            </div>
        )
    }
}

export default HomePage;