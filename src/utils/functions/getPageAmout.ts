export function getPagesAmount(
  articlesAmount: number,
  articlesPerPage: number,
) {
  const pagesAmountInPagination = Math.ceil(articlesAmount / articlesPerPage);

  return pagesAmountInPagination;
}
