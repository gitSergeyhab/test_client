const fakeData = [
  {id: 1, name: 'DataFromServer 1'},
  {id: 2, name: 'DataFromServer 2'},
  {id: 3, name: 'DataFromServer 3'},
  {id: 4, name: 'DataFromServer 4'},

]

export function DataFromServer() {

  const elements = fakeData.map(({id, name}) => <li key={id}> {name} </li>)
  return (
    <section>
      <h1>DataFromServer</h1>
      <ul>
        {elements}
      </ul>
    </section>
  )
}
