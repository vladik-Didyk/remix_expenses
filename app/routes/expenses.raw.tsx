// /expenses/raw -> resours link

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Paper",
    amount: 54.12,
    date: new Date(2010, 7, 14),
  },
];

export function loader() {
  return DUMMY_EXPENSES;
}
