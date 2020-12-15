import axios from 'azios'

const url = 'https://covid19.mathdro.id/api'


const fetchData = async () =>{
    try{
      const response =await axios.get(url) 
      return reponse
    }
    catch(error)
    {

    }
}