import React from 'react';

import { database } from './firebaseConf'

// const courseRef = database.ref('/JFDDL7')

database.ref('/JFDDL7').once(
  'value'
)
  .then(snapshot => console.log(snapshot.val()))


const App = (props) => (
  <div>
    App
  </div>
)

export default App;
