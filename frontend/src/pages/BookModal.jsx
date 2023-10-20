import { AiOutlineClose } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { PiBookOpenTextLight } from 'react-icons/pi'


const BookModalView = ({ book, onClick }) => {
    return (
        <div className="fixed bg-black bg-opacity-60 top-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClick}>
            <div className="" onClick={event => event.stopPropagation()}>
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' />
                <div className="w-fit flex justify-start items-center gap-x-2">
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
            </div>
        </div>
    )
}


export default BookModalView