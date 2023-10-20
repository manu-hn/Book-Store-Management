import { useState, useEffect } from "react"
import axios from "axios"
import Spinner from "../assets/Spinner"
import { Link } from "react-router-dom"
import { MdOutlineAddBox } from "react-icons/md"
import BookTable from "../pages/BookTable"
import CardList from "../pages/CardList"

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:5500/api/books/getbooks')
      .then((response) => {
        // console.log(response.data)
        setBooks(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)

      })

  }, []);


  return (

    <div className="p-4">
      {console.log('hello')}
      <div className="flex justify-center items-center gap-4">
        <button className="bg-teal-400 hover:bg-blue-500 px-4 py-2 rounded-lg" onClick={()=>setShowType('table')}>Table View</button>
        <button className="bg-teal-400 hover:bg-blue-500 px-4 py-2 rounded-lg" onClick={()=>setShowType('card')}>Card View</button>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to={'/books/create'}>
          <MdOutlineAddBox className="text-sky-500 text-4xl" />
        </Link>
      </div>
      {
        loading ? (<Spinner />) : showType==='table' ? ( <BookTable books={books}/>) : ( <CardList books={books}/>)


      }
    </div>
  
  )
}




export default Home
