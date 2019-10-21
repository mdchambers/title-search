const fetchOne = query => {
  // console.log('fetchone')
  return fetch("http://localhost:3000/api/oneTitle")
    .then(res => {
      // Catch errors from backend
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("failed");
      }
      // console.log('fetched');
      // console.log(res.json());
      return res.json();
    })
    .then(resData => {
      // console.log(resData);
      return resData;
    })
    .catch(err => {
      // Only local errors (i.e. network connectivity), not errors thrown by backend caught here
      console.log(err);
    });
};

const searchDB = query => {
  const searchParams = new URLSearchParams();
  searchParams.append("query", query);

  const url = `http://localhost:3000/api/search?${searchParams.toString()}`;
  console.log(url);
  return fetch(url)
    .then(res => {
      console.log('fetched');
      // Catch errors from backend
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("failed");
      }
      return res.json();
    })
    .then(resData => {
      return resData;
    })
    .catch(err => {
      // Only local errors (i.e. network connectivity), not errors thrown by backend caught here
      console.log(err);
    });
};

module.exports = { fetchOne, searchDB };
