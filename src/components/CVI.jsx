import React, { useState } from 'react'
import { Conversation } from './cvi/components/conversation'
import { useTavusConversation } from '../hooks/useTavusConversation'

function CVI() {
  const { createConversation, loading, error, conversationUrl } = useTavusConversation()
  const envUrl = import.meta.env.VITE_TAVUS_CONVERSATION_URL || ''
  const [activeUrl, setActiveUrl] = useState('')

  const handleLeave = () => {
    console.log('User left the conversation')
  }

  const handleStart = async () => {
    const url = await createConversation()
    if (url) {
      setActiveUrl(url)
    }
  }

  if (!activeUrl) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#e5e7eb' }}>
        <p style={{ marginBottom: '1rem' }}>
          Start a new Tavus conversation from the app.
        </p>
        <button
          onClick={handleStart}
          disabled={loading}
          style={{
            padding: '0.7rem 1.2rem',
            borderRadius: '6px',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            background: '#22c55e',
            color: '#0f172a',
            fontWeight: 'bold',
          }}
        >
          {loading ? 'Creating...' : 'Start Conversation'}
        </button>
        {envUrl ? (
          <div style={{ marginTop: '1rem' }}>
            <button
              onClick={() => setActiveUrl(envUrl)}
              style={{
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                border: '1px solid #334155',
                cursor: 'pointer',
                background: '#0b1220',
                color: '#e5e7eb',
              }}
            >
              Use Existing URL
            </button>
          </div>
        ) : null}
        {error ? (
          <p style={{ marginTop: '1rem', color: '#fca5a5' }}>
            {error}
          </p>
        ) : null}
        {conversationUrl ? (
          <p style={{ marginTop: '1rem', color: '#94a3b8' }}>
            New conversation created. Loading...
          </p>
        ) : null}
      </div>
    )
  }

  return (
      <div
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          margin: '0',
        }}
      >
        <Conversation conversationUrl={activeUrl} onLeave={handleLeave} variant="embed" />
      </div>
  )
}

export default CVI
