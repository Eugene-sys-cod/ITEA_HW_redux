import React, { memo, useEffect } from "react"
import classnames from 'classnames'
import { useSelector, useDispatch } from "react-redux"
import { setLanguageAction } from "../../redux/actions/popular.actions"
import { fetchPopularRepos } from "../../redux/thunk/popular.thunk"
import { useSearchParams } from "react-router-dom"

const languages = ['All', 'Javascript', 'Python', 'CSS', 'Java', 'Ruby']

const SelectLanguage = memo(() => {
    const dispatch = useDispatch()
    const selectedLanguage = useSelector(state => state.root.popularReducer.selectedLanguage)
    const loading = useSelector(state => state.root.popularReducer.loading)
    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        const selectedLanguageFromLS = localStorage.getItem('selectedLanguage')
        const defaultSelectedLanguage = selectedLanguageFromLS ? selectedLanguageFromLS : 'All'
        dispatch(setLanguageAction(defaultSelectedLanguage))
        dispatch(fetchPopularRepos(defaultSelectedLanguage))
        setSearchParams({"language": defaultSelectedLanguage})
    },[])

    const onSelectLanguage = (language) => {
        if(loading) return
        localStorage.setItem('selectedLanguage', language)
        setSearchParams({"language": language})
        dispatch(setLanguageAction(language))
        dispatch(fetchPopularRepos(language))
    }

return (
    <ul className="languages">
        {languages.map((language, index) => {
            return (
            <>
                <li 
                className={classnames('languages-item',{'languages-item_active': language === selectedLanguage })}
                key={index}
                onClick={()=> onSelectLanguage(language)}>    
                {language}
                </li>
            </>
            )
        })}
    </ul>
)}
)

export default SelectLanguage