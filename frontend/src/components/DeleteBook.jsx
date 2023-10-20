import axios from "axios"
import Spinner from "../assets/Spinner"
import BackButton from "../assets/BackButton"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { useSnackbar } from 'notistack'


const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  const handleBookDeletion = () => {
    setLoading(true);
    axios.delete(`http://localhost:5500/api/books/deletebook/${id}`)
      .then(() => {
        setLoading(false)
        enqueueSnackbar(`Book Deleted Successfully`, { variant: `success` })
        navigate('/')
      }).catch((error) => {
        setLoading(false);
    
        enqueueSnackbar(`Error while Deleting the book`, { variant: `error` })
        console.log(error)
      })


  }
  return (
    <div>
      <BackButton />
      <h1 className="text-3xl my-4">DeleteBook</h1>
      {loading ? <Spinner /> : " "}
      <div className="flex flex-col items-center border-2 border-teal-300 rounded-xl w-[40em] p-8 mx-auto ">
        <h3>Are you sure you want delete the book</h3>

        <button className="p-4 bg-red-500 text-black m-8 w-full" onClick={handleBookDeletion}>
          Delete it!
        </button>
      </div>
    </div>
  )
}

export default DeleteBook