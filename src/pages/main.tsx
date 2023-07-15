import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { AppRoute } from '../app'


const LinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`

export function Main() {
  return (
    <LinksDiv>
      <Link to={AppRoute.DataFromClient}>DataFromClient</Link>
      <Link to={AppRoute.DataFromServer}>DataFromServer</Link>
      <Link to={AppRoute.DataFromDB}>DataFromDB</Link>
      <Link to={AppRoute.ImageFromClient}>ImageFromClient</Link>
      <Link to={AppRoute.ImageFromServer}>ImageFromServer</Link>
    </LinksDiv>
  )
}
