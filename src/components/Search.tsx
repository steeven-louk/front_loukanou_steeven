import './search.scss'

const Search = () => {
  return (
    <div className="searchComponents mx-auto p-3 rounded bg-white">
      <div className="head mb-3 d-flex gap-3 align-items-center">
        <span>one-way</span>
        <select name="" className="border-0 fw-semibold">
          <option value="">1 Adult, No Discount card</option>
        </select>
      </div>
      <div className="form">
        <div className="row">
          <div className="form-group position-relative col-md-3">
            <input type="text" placeholder="from: city, station or airport" className="form-control mb-2" />
          </div>
          <div className="form-group position-relative col-md-3">
            <input type="text" placeholder="to: city, station or airport" className="form-control mb-2" />
          </div>
          <div className="form-group col-md-4 d-inline-flex">
            <input type="date" className="form-control mb-2 rounded-0" />
            <input type="date" className="form-control mb-2 rounded-0" />
          </div>
          <div className="form-group col-md-2">
            <button className="btn btn-warning form-control">Search</button>
          </div>
        </div>

        <div className="form-check form-switch mt-3">
          <input type="checkbox" role="switch" className="form-check-input" id="flexSwitchCheckDefault" />
          <label htmlFor="flexSwitchCheckDefault" className="form-check-label fw-semibold">Find my accomodation</label>
        </div>
      </div>
    </div>
  )
}

export default Search