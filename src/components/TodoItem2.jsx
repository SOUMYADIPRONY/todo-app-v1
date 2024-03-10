function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "5/10/2024";
  return (
    <div className="container">
      <div class="row sd-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" className="btn btn-danger delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
