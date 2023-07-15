const fakeData = [
  {id: 1, name: 'DataFromClient 1'},
  {id: 2, name: 'DataFromClient 2'},
  {id: 3, name: 'DataFromClient 3'},
  {id: 4, name: 'DataFromClient 4'},

]

export function DataFromClient() {

  const elements = fakeData.map(({id, name}) => <li key={id}> {name} </li>)
  return (
    <section>
      <h1>DataFromClient</h1>
      <ul>
        {elements}
      </ul>
    </section>
  )
}
