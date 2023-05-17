import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/index";
import { getBooksData } from "../store/helper";
import { Book, BooksState, SHELVES } from "../store/booksModel";
import LoadingPage from "../layout/LoadingPage";
import BookShelf from "./BookShelf";
import classes from "./BooksList.module.css";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const BooksList = () => {
  const { data } = useAppSelector<BooksState>((state) => state.books);
  const dispatch = useAppDispatch();

  const renderShelf = () => {
    dispatch(getBooksData());
  };
  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);
  return (
    <div className={classes.booksList}>
      {data.length === 0 || !data ? (
        <LoadingPage />
      ) : (
        SHELVES.map((shelf) => {
          const shelfBooks = data.filter(
            (book: Book) => book.shelf === shelf.id
          );
          return (
            <BookShelf
              key={shelf.id}
              shelf={shelf.id}
              books={shelfBooks}
              title={shelf.title}
              onRenderShelf={renderShelf}
            />
          );
        })
      )}
      <Link
        to="/search"
        className={classes["search-button"]}
      >
        <div>
          <ImSearch fontSize="larger" />
        </div>
      </Link>
    </div>
  );
};

export default BooksList;
