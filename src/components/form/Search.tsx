import { useEffect, useRef } from "react";
import { useSearchStore } from "@/services/";
import styles from "./Search.module.scss";

type SearchActions = "closeSearch";

interface SearchProps {
  actions: SearchActions[];
  searchTextHandler: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

export function Search(props:SearchProps) {
  const { actions, searchTextHandler } = props;

  const searchInput = useRef<HTMLInputElement>(null);
  const setSearchInput = useSearchStore( state => state.setSearchInput );
  const closeSearch = useSearchStore( state => state.closeSearch );

  function closeSearchHandler() {
    closeSearch();
  }

  useEffect( () => {
    setSearchInput(searchInput);
    searchInput.current && searchInput.current.focus();
  } , [] );

  return (
    <>
      <aside className={styles["search"]}>
        <p className={styles["search-istruction"]}>type a text in the field below to filter the products by title</p>

        <input
          className={styles["search-field"]}
          type="search"
          onChange={ event => searchTextHandler(event) }
          ref={searchInput}
        />

        <div className={styles["search-ctas"]}>
          {
            actions.includes("closeSearch") &&
            <button className={styles["search-cta"]} type="button" onClick={closeSearchHandler}>Close</button>
          }
        </div>
      </aside>
    </>
  )
}