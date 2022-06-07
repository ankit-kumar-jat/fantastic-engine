export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function providesList(resultsWithIds, tagType) {
  return resultsWithIds
    ? [
        { type: tagType, id: "LIST" },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: "LIST" }];
}

export const truncate = (str = " ", no_words) => {
  return str.split(" ").splice(0, no_words).join(" ") + "...";
};
