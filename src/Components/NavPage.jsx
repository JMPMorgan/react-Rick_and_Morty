function NavPage({ actualpage, setPage }) {
  return (
    <header className="d-flex justify-content-between my-2 align-items-center">
      {actualpage === 1 ? (
        ""
      ) : (
        <button
          className="btn btn-outline-primary"
          onClick={() => setPage(actualpage - 1)}
        >
          Page {actualpage - 1}
        </button>
      )}
      <h4>Page {actualpage}</h4>
      <button
        className="btn btn-outline-primary"
        onClick={() => setPage(actualpage + 1)}
      >
        Page {actualpage + 1}
      </button>
    </header>
  );
}

export default NavPage;
