import { useState, useEffect } from 'react'
import Loading from './components/loading'
import Verse from './components/verse'

const App = () => {
  const [choice, setChoice] = useState()

  useEffect(async () => {
    const data = await (await fetch(`${process.env.REACT_APP_API_URL}`)).json()

    const book = Math.round(Math.random() * (data.books.length - 1))
    const chapter = Math.round(Math.random() * (data.chapters[book] - 1))

    const verses = await (await fetch(`${process.env.REACT_APP_API_URL}/0/${book}/${chapter}`)).json()
    const verse = Math.round(Math.random() * (verses.length - 1))

    setChoice({
      text: verses[verse],
      def: `${data.books[book]} ${chapter + 1}:${verse + 1}`
    })
  }, [])

  return (
    <>
      <img className="image" src={`https://picsum.photos/${window.innerWidth}/${window.innerHeight}`} alt="" />
      {choice ? <Verse {...choice} /> : <Loading />}
    </>
  )
}

export default App
