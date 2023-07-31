import React, { useState } from "react";
import "./SearchView.css";
import SearchResultContainer from "../../components/SearchContainer/SearchResultContainer";

interface Breadcrumb {
  label: string;
  link: string;
}


const SearchView: React.FC = () => {
  const [privatePerson, setPrivatePerson] = useState<boolean>(false);
  const [shelter, setShelter] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("newest");

  const handleSearch = (query: string, location: string, category: string) => {
    // Your search logic here, considering all the filters and sorting options.
    // You can use this data to fetch results from a server or perform filtering on a local dataset.
    console.log("Query:", query);
    console.log("Location:", location);
    console.log("Category:", category);
    console.log("Private Person:", privatePerson);
    console.log("Shelter:", shelter);
    console.log("Sort By:", sortBy);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const dummySearchResults = [
    {
      id: 1,
      title: "Item 1",
      description: "Description for Item 1",
      location: "Location 1",
      imageUrl: "https://unsplash.com/photos/MoDcnVRN5JU", // URL of the image for Item 1
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description for Item 2",
      location: "Location 2",
      imageUrl: "https://unsplash.com/photos/yMSecCHsIBc", // URL of the image for Item 2
    },
  ];

  const breadcrumbs: Breadcrumb[] = [
    { label: "Home", link: "/" },
    { label: "Search", link: "/search" },
  ];

  return (
    <div className="search-view">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              <a href={breadcrumb.link}>{breadcrumb.label}</a>
              {index !== breadcrumbs.length - 1 && <span> / </span>}
            </React.Fragment>
        ))}
      </div>
      <div className="filters-container">
        {" "}
        <div className="additional-filters">
          <h1 className="filters-text">Filtry: </h1>
          {/* Additional Filters */}

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={privatePerson}
              onChange={(e) => setPrivatePerson(e.target.checked)}
            />
            Osoba prywatna
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={shelter}
              onChange={(e) => setShelter(e.target.checked)}
            />
            Schronisko
          </label>
        </div>
        {/* Sorting Dropdown */}
        <div className="sorting">
          <span>Sort by:</span>
          <select value={sortBy} onChange={handleSortChange}>
            <option value="newest">Od Najnowszych</option>
            <option value="newest">Od Najstarszych</option>
            <option value="most_liked">Najulubiensze</option>
          </select>
        </div>
        {/* Display search results here */}
      </div>
      {/* Render the SearchResultContainer with the dummy search results */}
      <SearchResultContainer searchResults={dummySearchResults} />
      {/* Display search results here */}
    </div>
  );
};

export default SearchView;
