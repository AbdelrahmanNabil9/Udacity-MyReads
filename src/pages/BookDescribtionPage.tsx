import { useAppSelector, useAppDispatch } from "../store/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../store/helper";
import { BooksState } from "../store/booksModel";
import dummyImg from "../assets/img-dummy.jpg";
import { Book } from "../store/booksModel";
import Loader from "../layout/LoadingPage";
import classes from "./BookDescribtionPage.module.css";



type bookIdParams = {
    bookId: string;
  };
  
  const BOOK = {
    id: "",
    authors: [""],
    title: "",
    description: "",
    imageLinks: {
      smallThumbnail: "",
      thumbnail: "",
    },
    shelf: "",
    subtitle: "",
};


const BookDescribtionPage = () => {

    const [state, setState] = useState<Book[]>([BOOK]);
  const { searchResults, loading, data } = useAppSelector<BooksState>(
    (state) => state.books
  );
  const dispatch = useAppDispatch();
  const { bookId } = useParams<bookIdParams>();

  useEffect(() => {
    if (bookId) dispatch(getBook(bookId));
    setState(() => searchResults.concat(data));
  }, [dispatch, bookId]);

  const loadingIsTrue = <Loader />;
  const dataNotAvailable = !state || state.length === 0;
  console.log("State: ", state);
  return (
    <div className={classes["book-detail"]}>
      {loading ? (
        loadingIsTrue
      ) : dataNotAvailable ? (
        "No book details To Display"
      ) : (
        <>
          <div className={classes["book-cover"]}>
            <img
              src={state[0].imageLinks ? state[0].imageLinks.thumbnail : dummyImg}
              alt={state[0].title}
            />
          </div>
          <div className={classes["book-titles"]}>
            <h3>{state[0].title}</h3>
            <h5>{state[0].subtitle}</h5>
          </div>
          <div className="book-detail-desc">
            <p> {state[0].description}</p>
          </div>
          <div className="book-detail-authors">
            <p>By: {state[0].authors.join(" & ")}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDescribtionPage;