import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Routes , Route,BrowserRouter as Router} from 'react-router-dom'
import {Actors,MovieInformation,Movies,NavBar,Profile} from './index.js'

import useStyles from './styles.js'
function AppContent() {
  const classes= useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <NavBar/>
      <main className={classes.content}>
      <div className={classes.toolbar}>

      
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movie/:id" element={<MovieInformation />} />
              <Route path="/actors/:id" element={<Actors />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </div>
      </main>
      
    </div>
    
  )
}
function App() {
  return (
    <Router>
      <AppContent/>
    </Router>
  )
}

export default App