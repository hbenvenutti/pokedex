import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { DefaultLayoutContent } from "./styles"

export const DefaultLayout = () => {
  return (
    <DefaultLayoutContent>
      <Header/>
      <Outlet/>
    </DefaultLayoutContent>
  )
}
