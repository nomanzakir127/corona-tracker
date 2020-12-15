import React, {useState} from 'react'

let initialState = []

export const MyContext = React.createContext(initialState)

export const CovProvider = (props) =>{

    let [state, setState] = useState(initialState)
    let [countries, setCoutries] = useState([])
    let [dailyData, setDailyData] = useState([])
    let [country, setCountry] = useState('')
    const getAllData = () =>{
        getData('https://covid19.mathdro.id/api')
    }
    const getCountryData = (country) =>{
        getData('https://covid19.mathdro.id/api/countries/' + country)
    }
    const getCountries = () =>{
        getData('https://covid19.mathdro.id/api/countries', true)

    }
    const getDailyData = () =>{
        getData('https://covid19.mathdro.id/api/daily', false, true)

    }

    const getCountry=(country)=>{
       setCountry(country)
    }

    async function getData(url, countryUrl, dailyUrl)
    {
        const data = await fetch(url)
        const state = await data.json()
        if(countryUrl)
        {
            setCoutries(state)
        }
        else if(dailyUrl){
          setDailyData(state)
        }
        else
        {
            setState(state)
        }    
    }


    return (
        <>
            <MyContext.Provider value={{state, countries, country, dailyData, getCountryData, getAllData, getCountries,getDailyData, getCountry}}>
                {props.children}
            </MyContext.Provider>
        </>
    )
}