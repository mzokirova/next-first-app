/*streaming breaks down the pages HTML into smaller chunks and 
contionusly send those chunks from server to the client*/

import { Suspense } from 'react'
import { PostFeed, Weather } from './Components'

export default function Posts() {
    return (
        <section>
            <Suspense fallback={<p>Loading feed...</p>}>
                <PostFeed />
            </Suspense>
            <Suspense fallback={<p>Loading weather...</p>}>
                <Weather />
            </Suspense>
        </section>
    )
}

// By using Suspense, you get the benefits of:

// Streaming Server Rendering - Progressively rendering HTML from the server to the client.
// Selective Hydration - React prioritizes what components to make interactive first based on user interaction.

