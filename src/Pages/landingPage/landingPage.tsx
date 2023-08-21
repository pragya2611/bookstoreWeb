import { useEffect } from "react";
import { getAllBook } from "../../service/books.service";

const LandingPage = () => {
  useEffect(() => {
    getAllBooks().then((books) => {
    });
  }, []);
  const getAllBooks = async () => {
    try {
      const books = await getAllBook(0);
    } catch (error) {
      console.log(error);
    }
  };
  return <div className="App"></div>;
};

export default LandingPage;
