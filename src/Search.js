import React from "react";
export default function Search(props) {
  function changeCity(event) {
    props.setCity(event.target.value);
  }

  return (
    <section className="searchBar">
      <form
        onSubmit={props.handleSubmit}
        className="row g-0"
        id="search-form"
        onChange={changeCity}
      >
        <div className="col-3 offset-4">
          <input
            type="text"
            className="form-control"
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
