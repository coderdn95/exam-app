const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className="flex justify-center items-center list-none">
        {pages.map((page) => (
          <li
            key={page}
            className={`flex justify-center items-center w-4 h-4 border-2 cursor-pointer m-4 p-4
              ${page === currentPage ? " bg-red-600" : ""}`}
          >
            <a className="cursor-pointer" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
