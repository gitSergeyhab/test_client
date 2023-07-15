
const fakeData = [
  {id: 1, name: 'DataFromDB 1'},
  {id: 2, name: 'DataFromDB 2'},
  {id: 3, name: 'DataFromDB 3'},
  {id: 4, name: 'DataFromDB 4'},

]

export function DataFromDB() {

  const elements = fakeData.map(({id, name}) => <li key={id}> {name} </li>)
  return (
    <section>
      <h1>DataFromDB</h1>
      <ul>
        {elements}
      </ul>
    </section>
  )
}
