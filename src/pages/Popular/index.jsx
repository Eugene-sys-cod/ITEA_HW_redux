import React from "react"
import Repos from "./Repos"
import { useSelector } from "react-redux"
import SelectLanguage from "./SelectLanguages"

const Popular = () => {
 
    const loading = useSelector(state => state.root.popularReducer.loading)

    return (
       <>
        <SelectLanguage />
        {loading ? <p>Loading...</p> : <Repos />}
       </>
       
    )
}
export default Popular