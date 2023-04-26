import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles/App.css'
import UserForm from './Components/UserForm'
import useGetStory from './Hooks/useGetStory'
import Story from './Components/Story'
function App() {

  const { data, isLoading, error, fetchStory } = useGetStory();
  const [story, setStory] = useState()

  useEffect(() => {
    if(data) {
      setStory(data.data.choices[0].message.content)
    }
  }, [data])

  return (
    <div className='app light'>
      <h1>User Form</h1>
      <UserForm fetchStory={fetchStory} />
      {isLoading ? <h3 style={{color: 'red'}}>Loading...</h3> : <Story text={story}/>}
    </div>
  )
}

export default App
