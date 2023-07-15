import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { DataFromClient } from "./pages/data-from-client";
import { DataFromServer } from "./pages/data-from-server";
import { DataFromDB } from "./pages/data-from-db";
import { ImageFromClient } from "./pages/image-from-client";
import { ImageFromServer } from "./pages/image-from-server";


export const AppRoute = {
  Main: '/',
  DataFromClient: 'client-data',
  DataFromServer: 'server-data',
  DataFromDB: 'db-data',
  ImageFromClient: 'client-img',
  ImageFromServer: 'server-img'
}


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main/>}/>
        <Route path={AppRoute.DataFromClient} element={<DataFromClient/>}/>
        <Route path={AppRoute.DataFromServer} element={<DataFromServer/>}/>
        <Route path={AppRoute.DataFromDB} element={<DataFromDB/>}/>
        <Route path={AppRoute.ImageFromClient} element={<ImageFromClient/>}/>
        <Route path={AppRoute.ImageFromServer} element={<ImageFromServer/>}/>
      </Routes>
  </BrowserRouter>
  )

}
