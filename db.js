const db = {};
// const a = localStorage.getItem('shopping-cart');
// const db = JSON.parse(a);
// console.log(db);
// console.log(db);
const addToDb = (item) => {
  const db = getDb();
  // console.log(cd);
  if (item in db) {
    db[item] += 1;
  } else {
    db[item] = 1;
  }
  saveToDv(db);
  console.log(db);
};
const getDb = () => {
  let savedDb = localStorage.getItem('shopping-cart');
  savedDb = JSON.parse(savedDb);
  console.log(typeof savedDb);
  return savedDb;
};

const removeDbItem = (item) => {
  const db = getDb();
  delete db[item];
};

const saveToDv = (db) => {
  localStorage.setItem('shopping-cart', JSON.stringify(db));
};

// const a = {};
// a['hello'] = 1;
// console.log(a);
// console.log('h');
