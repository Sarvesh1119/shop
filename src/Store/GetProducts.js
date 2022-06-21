import axios from "axios"

const GetProducts = async (url) => {
    try{
        const response= await axios.get(url)
        return response
    }catch(e){
        console.error(e.message)
    }

}

export default GetProducts