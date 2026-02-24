import React, { useEffect } from 'react'
import { getData } from './types/services/service'
import type { TimeEvent } from './types/Event';
import EventCard from './components/EventCard';

const App = () => {
  const [data, setData] = React.useState<TimeEvent[]>([]);

  useEffect(()=>{
    setTimeout(()=>{
      getData().then(data => setData(data))
    },2000)
  },[])

  return (
    <div>
      {data.map(temp => <EventCard data={temp}/>)}
    </div>
  )
}

export default App
