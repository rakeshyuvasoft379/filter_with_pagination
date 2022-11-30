import { LayoutIndex } from "../Layout/LayoutIndex"
import { PublicRoutes } from "./PublicRoutes"

export const IndexRoute=()=>{
    return(
        <LayoutIndex>
        <PublicRoutes/>
        </LayoutIndex>
    )
}