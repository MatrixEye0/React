import { useState, lazy, Suspense } from 'react'

const Post = lazy(() => import('./post')) // lazy loading import like this they alway import export deffault
// Don't download a component until I need it, and while it is downloading, show something else.
// suspence jabtak kuch load nhi hoga taabtak xyz khuch bhi show karega jo apne dikhaya hai. While this lazy component is loading, show this fallback UI.”
function App() {
  const [post, setPost] = useState(false)

  return (
    <>
      <button onClick={() => setPost(true)}>
        Show Post
      </button>

      {post && (
        <Suspense fallback={<p>Loading.....</p>}>
          <Post />
        </Suspense> 
      )}
    </>
  )
}

export default App