import react, { useState, useRef } from "react";
import { SimpleDropdown } from "../Common_Components/Dropdowns";

// exporting the main component:

export default function SearchAndFilters() {
  const [FilterDropdownState, setFilterDropdownState] = useState(false);
  const filterSelected = useRef("All (default)");
  return (
    <form
      className="search-and-filter flex flex-col w-screen h-auto mb-20 z-0"
      method="POST"
    >
      <div className="flex flex-col gap-4 w-screen">
        <div className="search flex flex-row w-screen h-10 lg:px-20 gap-1 sm:gap-2 relative place-content-center">
          <input
            type="text"
            className="flex w-5/6 sm:w-3/6 lg:h-full lg:text-xl p-3 rounded-lg text-gray-600 bg-gray-100"
            placeholder="search for blogs or bloggers.."
          />
          <button
            className="flex lg:p-2 w-1/6 sm:w-1/6 lg:h-full bg-blue-700 lg:text-xl hover:bg-blue-800 text-white justify-center items-center font-sans rounded-md"
            name="searchQuery"
            type="submit"
          >
            Search
          </button>
        </div>
        <div className="filter flex flex-row w-full h-auto justify-center">
          <button
            className="px-4 py-2 w-fit bg-red-600 text-white rounded-sm font-sans hover:bg-red-800"
            onClick={() => {
              setFilterDropdownState((prevState) => !prevState);
            }}
            type="button"
          >
            Filters
          </button>
          {FilterDropdownState && (
            <SimpleDropdown
              itemsList={["Blogs", "Bloggers", "All (default)"]}
              selectedOptions={[filterSelected.current]}
            />
          )}
        </div>
      </div>
    </form>
  );
}
