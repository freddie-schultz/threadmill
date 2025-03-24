import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App.tsx'
import Layout from './components/Layout.tsx'
import Home from './components/Home.tsx'
import Workouts from './components/Workouts.tsx'
import Stats from './components/Stats.tsx'
import ViewWorkout from './components/ViewWorkout.tsx'

export default createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index path="/" element={<Home />} />
    <Route path="/workouts" element={<Workouts />} />
    <Route path="/workouts/:id" element={<ViewWorkout />} />
    <Route path="/stats" element={<Stats />} />
  </Route>
)
