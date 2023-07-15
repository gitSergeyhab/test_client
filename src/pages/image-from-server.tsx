import { SERVER_URL } from "../const"

export function ImageFromServer() {
  return (
    <section>
      <h1>ImageFromServer</h1>
      <img src={`${SERVER_URL}images/1.jpg`} alt="" />
    </section>
  )
}
