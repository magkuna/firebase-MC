import React, { Component } from 'react'

import { database } from '../firebaseConf'
import moment from 'moment'
import 'moment/locale/pl'

moment.locale('pl')




class Chat extends Component {
    state = {
        messages: null,
    }

    componentDidMount() {
        database.ref('/JFDDL7/messages')
            .on(
                'value',
                (snapshot) => {
                    this.setState({
                        messages: snapshot.val(),
                    })
                }
            )
    }

    render() {
        return (
            <div>
                {
                    this.state.messages &&
                    Object.entries(this.state.messages)
                        .map(
                            ([key, message]) => (
                                <div key={key}
                                >
                                    {moment(message.date).fromNow()}
                                    |
                                    {message.text}
                                </div>
                            )


                        )
                }
            </div>
        )
    }
}
export default Chat
