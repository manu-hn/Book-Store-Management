import { useState, useEffect } from "react"
import axios from "axios"
import Spinner from "../assets/Spinner"
import { Link } from "react-router-dom"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import BookTable from "../pages/BookTable"
import CardList from "../pages/CardList"
import { BsInfoCircle } from "react-icons/bs"
import { AiOutlineEdit } from "react-icons/ai"

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
      {/* {
        loading ? (<Spinner />) : showType==='table' ? ( <BookTable books={books}/>) : ( <CardList books={books}/>)


      } */}
      <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">Title</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Year</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Price</th>
                <th className="border border-slate-600 rounded-md ">Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book, index) => (
                  <tr key={book._id} className="h-8">
                    <td className="border border-slate-800 rounded-md text-center">
                      {index + 1}
                    </td>
                    <td className="border border-slate-800 rounded-md text-center">
                      {book.bookName}
                    </td>
                    <td className="border border-slate-800 rounded-md text-center max-md:hidden">
                      {book.authorName}
                    </td>
                    <td className="border border-slate-800 rounded-md text-center max-md:hidden">
                      {book.publishedYear}
                    </td>
                    <td className="border border-slate-800 rounded-md text-center max-md:hidden">
                      {book.bookPrice}
                    </td>
                    <td className="border border-slate-800 rounded-md text-center">
                      <div className="flex justify-center gap-x-4">
                        <Link to={`/books/details/${book._id}`}>
                          <BsInfoCircle className="text-2xl text-green-500 " />
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                          <AiOutlineEdit className="text-2xl text-yellow-500 " />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                          <MdOutlineDelete className="text-2xl text-red-500 " />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
    </div>
  
  )
}




export default Home
