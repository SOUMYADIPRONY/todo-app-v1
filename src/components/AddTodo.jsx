function AddTodo() {
  return (
    <>
      <div className="container">
        <div className="row sd-row">
          <div className="col-6">
            <input type="text" placeholder="Enter ToDo here"></input>
          </div>
          <div className="col-4">
            <input type="date"></input>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success add">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
