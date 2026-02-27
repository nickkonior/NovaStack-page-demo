import { useState } from 'react'

export function useTavusConversation() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [conversationUrl, setConversationUrl] = useState(null)

  const createConversation = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://tavusapi.com/v2/conversations', {
        method: 'POST',
        headers: {
          'x-api-key': import.meta.env.VITE_TAVUS_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          persona_id: import.meta.env.VITE_TAVUS_PERSONA_ID,
          replica_id: import.meta.env.VITE_TAVUS_REPLICA_ID,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create conversation')
      }

      const data = await response.json()
      setConversationUrl(data.conversation_url)
      return data.conversation_url
    } catch (err) {
      setError(err.message || 'Failed to create conversation')
      console.error('Error creating conversation:', err)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { createConversation, loading, error, conversationUrl }
}
