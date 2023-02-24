import React from "react";

export default function Search(props) {
  return (
    <section class="searchBar">
      <form className="row g-0" id="search-form">
        <div className="col-3 offset-4">
          <label for="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="text"
            class="form-control"
            id="search-text-input"
            placeholder="Search for your City"
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
