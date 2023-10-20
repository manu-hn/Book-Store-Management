
import PropTypes from 'prop-types';
import SingleBookCard from "./SingleBookCard"


const CardList = ({ books }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            
            {
                books.map((book) => {
                    return (
                        <SingleBookCard key={book._id} book={book}/>
                    )

                })
            }
        </div>
    )
}

CardList.propTypes = {
    books: PropTypes.array.isRequired
}

export default CardList