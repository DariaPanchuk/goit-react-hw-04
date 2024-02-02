import toast from 'react-hot-toast';
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import css from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
    const handleSubmit = evt => {
        evt.preventDefault();

        if (evt.target.elements.query.value === "") {
            toast.error('This is an empty field!', {
                duration: 2000,
                position: 'bottom-center',
            });
            return;
        }

        onSearch(evt.target.elements.query.value);
        evt.target.reset();
    }

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                    className={css.input}
                />
                <IconContext.Provider value={{ size: '2em', color: "rgba(253, 45, 126, 0.5)" }}>
                    <button type="submit" className={css.button}><AiOutlineSearch /></button>
                </IconContext.Provider>
            </form>
        </header>
    );
};