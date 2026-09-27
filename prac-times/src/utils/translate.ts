type StringKeyObject = {
  [key: string]: any;
};

const book: StringKeyObject = {
  world: "мир",
  business: "бизнес",
  politic: "политика",
};

export default function translate(word: string) {
  return book[word];
}
