

import axios from "axios"
import { useEffect, useState } from "react"
import { SERVER_URL } from "../const"

export function DataFromDB() {

  const [bands, setBands] = useState<{id: number, name: string}[]>([])

  useEffect(() => {
    axios.get(`${SERVER_URL}api/db-data`)
      .then(({data}) => setBands(data))
      .catch(() => setBands([{id: 0, name: 'Error'}]))
  }, [])

  const elements = bands.map(({id, name}) => <li key={id}> {name} </li>)
  return (
    <section>
      <h1>DataFromDB</h1>
      <ul>
        {elements}
      </ul>
    </section>
  )
}
