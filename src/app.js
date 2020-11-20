import { useState, useEffect } from 'react'
import Loading from './components/loading'
import Verse from './components/verse'

const App = () => {
  const [variables, setVariables] = useState()
  const [random, setRandom] = useState()
  const [def, setDef] = useState()

  useEffect(async () => {
    const data = await (await fetch(`${process.env.REACT_APP_API_URL}`)).json()
    setVariables(data)

    const book = Math.floor(Math.random() * data.books.length)
    const chapter = Math.floor(Math.random() * data.chapters[book])

    const verses = await (await fetch(`${process.env.REACT_APP_API_URL}/0/${book}/${chapter}`)).json()

    const verse = Math.floor(Math.random() * verses.length)

    const choice = verses[verse]
    setRandom(choice)
    setDef(`${data.books[book]} ${chapter + 1}:${verse + 1}`)
  }, [])

  return (
    <>
      <img className="image" src={`https://picsum.photos/${window.innerWidth}/${window.innerHeight}`} alt="" />
      {random && def ? <Verse verse={random} def={def} /> : <Loading />}
    </>
  )
}

export default App
