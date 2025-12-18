import { Routes, Route } from 'react-router-dom'
import UserLayout from './Layout'
import IntroWrapper from './components/Intro';

const App = () => {
  return (
    <IntroWrapper>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </IntroWrapper>
  )
}
export default App
