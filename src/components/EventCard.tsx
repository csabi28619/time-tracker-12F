import type { TimeEvent } from "../types/Event"

type EventCardProps = {
    data: TimeEvent
}

const EventCard = ({data}: EventCardProps) => {
    const small = data.title.toLowerCase().replaceAll(" ", "-");


  return (
    <div>
      <header style={{
        backgroundColor: `var(--color-${small})`
      }}>
        <img src={`/images/icon-${small}.svg`} alt={data.title} />
      </header>
    </div>
  )
}

export default EventCard