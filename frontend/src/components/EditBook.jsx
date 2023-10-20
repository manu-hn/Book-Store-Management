import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from "../assets/Spinner";
import axios from 'axios';
import BackButton from '../assets/BackButton';
import {useSnackbar} from 'notistack'



function EditBook() {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const {enqueueSnackbar}=useSnackbar()
  const { id } = useParams();

  useEffect(() => {

    setLoading(true)
    console.log(id)

    axios.get(`http://localhost:4500/api/books/getonebook/${id}`)
      .then((response) => {

        setBookName(response.data.bookName)
        setAuthorName(response.data.authorName)
        setPublishedYear(response.data.publishedYear)
        setBookPrice(response.data.bookPrice)
        setLoading(false)

      }).catch((error) => {

        setLoading(false);
        alert(`An Error has Occurred Please try after Some Time`);
        console.log(error)
      })
  }, [id])
  const editBook = () => {
    const data = {
      bookName,
      authorName,
      publishedYear,
      bookPrice
    }
    setLoading(true);
    axios.put(`http://localhost:5500/api/books/updatebook/${id}`, data).then(() => {
      setLoading(false);
      enqueueSnackbar(`Book Updated Successfully`,{variant : `success`})
      navigate('/')

    }).catch((error) => {
      setLoading(false);
      // alert(`An Error has Occurred Please try after Some Time`);
      enqueueSnackbar(`Error While Updating`, {variant : `error`})
      console.log(error)
    })
  }

  return (
    <div className='p-4'>
      <BackButton />
     
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}

      <div className='flex flex-col border-2 border-sky-500 rounded-xl w-[40em] p-4 m-auto '>
        {/* Book name Setting */}
        <div className="my-4">
          <label htmlFor="title" className='text-xl mr-4 text-blue-600'>Book Title</label>
          <input placeholder='Enter Book Name' type="text" value={bookName} id="title" onChange={e => { setBookName(e.target.value) }}
            className='border-2 border-gray-600 px-4 w-full py-4' />
        </div>
        {/* Author Name */}
        <div className="my-4">
          <label htmlFor="author" className='text-xl mr-4 text-blue-600'>Author Name</label>
          <input placeholder='Enter Author Name' type="text" value={authorName} id="author" onChange={e => { setAuthorName(e.target.value) }}
            className='border-2 border-gray-600 px-4 w-full py-4' />
        </div>
        {/* Published Year */}
        <div className="my-4">
          <label htmlFor="year" className='text-xl mr-4 text-blue-600'>Published year</label>
          <input placeholder='Enter Published Year' type="text" value={publishedYear} id="year" onChange={e => { setPublishedYear(e.target.value) }}
            className='border-2 border-gray-600 px-4 w-full py-4' />
        </div>
        {/* Book Price */}
        <div className="my-4">
          <label htmlFor="price" className='text-xl mr-4 text-blue-600'>Book Price</label>
          <input placeholder='Enter Book Price' type="text" value={bookPrice} id="price" onChange={e => { setBookPrice(e.target.value) }}
            className='border-2 border-gray-600 px-4 w-full py-4' />
        </div>
        <button className='p-3 bg-red-400 m-8' onClick={editBook}>Update and Save</button>
      </div>

    </div>
  )
}

export default EditBook