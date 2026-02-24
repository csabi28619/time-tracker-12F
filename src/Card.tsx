import React from 'react'

export type CardType = {
  title: string
  timeframes: {
    daily: { current: number; previous: number }
    weekly: { current: number; previous: number }
    monthly: { current: number; previous: number }
  }
}

type Period = 'daily' | 'weekly' | 'monthly'

const periodLabel: Record<Period, string> = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month',
}

const Card: React.FC<{ data: CardType; period?: Period }> = ({ data, period = 'weekly' }) => {
  const tf = data.timeframes[period]
  return (
    <article style={{
      background: '#1f1b3a',
      color: '#fff',
      borderRadius: 12,
      padding: 20,
      width: 220,
      boxSizing: 'border-box'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>{data.title}</h3>
        <button aria-label="menu" style={{
          background: 'transparent', border: 'none', color: '#9aa0c3', cursor: 'pointer'
        }}>⋯</button>
      </div>

      <div style={{ marginTop: 18 }}>
        <div style={{ fontSize: 36, fontWeight: 300 }}>{tf.current}hrs</div>
        <div style={{ color: '#9aa0c3', marginTop: 6, fontSize: 13 }}>
          {periodLabel[period]} - {tf.previous}hrs
        </div>
      </div>
    </article>
  )
}

export default Card
