import axios from "axios"
import { useEffect, useState } from "react"
import { SERVER_URL } from "../const"

// const fakeData = [
//   {id: 1, name: 'DataFromServer 1'},
//   {id: 2, name: 'DataFromServer 2'},
//   {id: 3, name: 'DataFromServer 3'},
//   {id: 4, name: 'DataFromServer 4'},

// ]

export function DataFromServer() {

  const [bands, setBands] = useState<{id: number, name: string}[]>([])

  useEffect(() => {
    axios.get(`${SERVER_URL}api/simple-data`)
      .then(({data}) => setBands(data))
      .catch(() => setBands([{id: 0, name: 'Error'}]))
  }, [])

  const elements = bands.map(({id, name}) => <li key={id}> {name} </li>)
  return (
    <section>
      <h1>DataFromServer</h1>
      <ul>
        {elements}
      </ul>
    </section>
  )
}
