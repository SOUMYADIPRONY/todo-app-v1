function TodoItem2() {
  let todoName = "Learn React";
  let todoDate = "27/01/2024";
  return (
    <div className="container">
      <div class="row sd-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
