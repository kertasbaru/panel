const getPagination = (query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 10;
  const offset = (page - 1) * limit;

  return { page, limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows } = data;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    rows,
    pagination: {
      totalItems,
      totalPages,
      currentPage: page,
      perPage: limit,
    },
  };
};

module.exports = { getPagination, getPagingData };
