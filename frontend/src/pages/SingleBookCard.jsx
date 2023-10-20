import { Link } from "react-router-dom"

import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"
import { BiUserCircle,  } from 'react-icons/bi'
import { PiBookOpenTextLight } from 'react-icons/pi'
import PropTypes from 'prop-types';



const SingleBookCard = ({ book }) => {
  


    return (<>
        <div className="border-2 border-gray-400 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl" key={book._id}>
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-orange-500 rounded-xl">{book.publishedYear}</h2>
            <h4 className="my-2 text-gray-600">{book._id}</h4>

            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-red-400 text-2xl" />
                <h2 className="my-1">{book.bookName}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-red-400 text-2xl" />
                <h2 className="my-1">{book.authorName}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-red-400 text-2xl" />
                <h2 className="my-1">{book.bookPrice}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-teal-500 hover:text-black" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-orange-400 hover:text-black" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                </Link>
            </div>
          
        </div>

    </>);
}

SingleBookCard.propTypes = {
    book: PropTypes.object.isRequired
}
export default SingleBookCard;