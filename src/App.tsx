import React, { useEffect, useState } from 'react'
import type { CardType } from './Card'
import Card from './Card'


function App() {
  const [cards, setCards] = useState<CardType[] | null>(null)
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('weekly')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((json: CardType[]) => {
        setCards(json)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div style={{ padding: 24 }}>Loading…</div>
  if (error) return <div style={{ padding: 24 }}>Error: {error}</div>
  if (!cards) return null

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, system-ui, sans-serif', background: '#0f1724', minHeight: '100vh' }}>
      <header style={{ marginBottom: 24, color: '#e6eef8' }}>
        <h1 style={{ margin: 0 }}>Time Tracker</h1>
      </header>

      <section style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
        <div style={{ minWidth: 220, background: '#5847eb', borderRadius: 12, padding: 20, color: '#fff' }}>
          <div style={{ fontSize: 14, opacity: 0.9 }}>Report for</div>
          <div style={{ fontSize: 28, marginTop: 10 }}>Jeremy Robson</div>

          <nav style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {(['daily','weekly','monthly'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: period === p ? '#fff' : '#cbd5e1',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0
                }}
              >
                {p[0].toUpperCase() + p.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, flex: 1 }}>
          {cards.map((c) => (
            <Card key={c.title} data={c} period={period} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
