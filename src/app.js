import { useState, useEffect } from 'react'
import Loading from './components/loading'
import Verse from './components/verse'

const App = () => {
  const [choice, setChoice] = useState()

  useEffect(async () => {
    const {books, verses} = await (await fetch(`${process.env.REACT_APP_API_URL}/0`)).json()

    const book_ID = Math.round(Math.random() * (verses.length - 1))
    const chapter_ID = Math.round(Math.random() * (verses[book_ID].length - 1))
    const verse_ID = Math.round(Math.random() * (verses[book_ID][chapter_ID] - 1))

    const {verse} = await (await fetch(`${process.env.REACT_APP_API_URL}/0/${book_ID}/${chapter_ID}/${verse_ID}`)).json()

    setChoice({
      text: verse,
      def: `${books[book_ID]} ${chapter_ID + 1}:${verse_ID + 1}`
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
