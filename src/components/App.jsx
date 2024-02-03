import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ImageModal } from './ImageModal/ImageModal';
import { fetch } from '../api';
import css from './App.module.css';

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const searchImages = async newQuery => {
    const id = nanoid(5);
    setQuery(`${id}-${newQuery}`);
    setPage(1);
    setImages([]);
  }

  useEffect(() => {
    if (query === "") {
      return
    }

    async function fetchImages() {
      try {
        setLoad(true);
        setError(false);
        const fetchedImages = await fetch(query.split('-')[1], page);
        setImages(prevImages => [...prevImages, ...fetchedImages]);
      } catch {
        setError(true);
      } finally {
        setLoad(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleClick = () => {
    setPage(page + 1);
  }

  function openModal(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  function afterOpenModal() {
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.body.style.overflow = "scroll";
    setIsOpen(false);
  }

  return (
    <div className={css.container}>
      <SearchBar onSearch={searchImages} />
      {images.length > 0 && <ImageGallery items={images} onClick={openModal} />}
      {load && <Loader />}
      {error && <ErrorMessage />}
      {selectedItem && <ImageModal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} selectedItem={selectedItem} />}
      {images.length > 0 && !load && (<LoadMoreBtn onClick={handleClick} />)}
      <Toaster />
    </div>
  );
};
