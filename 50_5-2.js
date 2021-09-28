// localStorage.setItem('hello', 'khan');
// const x = localStorage.getItem('hello');
// console.log(x);

const addToDb = (key, item) => {
  db = getDb(key) ? getDb(key) : {};
  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }
  console.log(db);
  saveToDv(key, db);
};

const removeFromDb = (item) => {
  delete db[item];
  // return db;

  // console.log(db);
};

const saveToDv = (key, db) => {
  jsonDb = JSON.stringify(db);
  localStorage.setItem(key, jsonDb);
};

const getDb = (key) => {
  const db = localStorage.getItem(key);
  // console.log(db);
  const parseDb = JSON.parse(db);
  // console.log(parseDb);
  return parseDb;
};

// removeFromDb('a');
