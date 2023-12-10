import { About } from "./containers/About";
import { Home } from "./containers/Home";

const routes=[
    {
        path: "/",
        element : <Home/>
    },
    {
        path: "/about",
        element : <About/>
    }
]


export default routes;