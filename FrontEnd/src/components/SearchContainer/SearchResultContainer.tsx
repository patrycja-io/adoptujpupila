import React from "react";
import "./SearchResultContainer.css";
import ItemView from "../../pages/ItemView/ItemView";
import ItemThumbnail from "../ItemThumbnail/ItemThumbnail";

interface SearchResult {
  id: number;
  title: string;
  dateAdded: string;
  category: string;
  location: string;
  imageUrl: string;
}

interface SearchResultContainerProps {
  searchResults: SearchResult[];
}

const SearchResultContainer: React.FC<SearchResultContainerProps> = ({
  searchResults,
}) => {
  return (
    <div className="search-result-container">
      {searchResults.map((result) => (
        <div key={result.id}>
          {/* Render the item thumbnail with the link to the item view */}
          <ItemThumbnail
            id={result.id}
            title={result.title}
            dateAdded={result.dateAdded}
            category={result.category}
            location={result.location}
            imageUrl={result.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchResultContainer;
