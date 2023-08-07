import React, { useState } from "react";
import styles from "./SearchBarMobile.module.css"; // Import CSS Modules styles
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface SearchBarMobileProps {
  onSearch: (query: string) => void;
}

const SearchBarMobile: React.FC<SearchBarMobileProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const handleSearch = () => {
    onSearch(query);
    navigate("/searchView");
  };

  return (
    <div className={styles["search-bar-mobile"]}>
      <input
        type="text"
        placeholder="Szukaj..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles["search-icon"]} onClick={handleSearch}>
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBarMobile;
