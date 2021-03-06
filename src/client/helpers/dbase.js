const fetchOne = query => {
  return fetch("http://localhost:3000/api/title/onetitle")
    .then(res => {
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

const searchDB = query => {
  const searchParams = new URLSearchParams();
  searchParams.append("query", query);

  const url = `http://localhost:3000/api/search?${searchParams.toString()}`;
  return fetch(url)
    .then(res => {
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

const fetchByID = id => {
  const url = `http://localhost:3000/api/title/${id}`;
  return fetch(url)
    .then(res => {
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

module.exports = { fetchOne, searchDB, fetchByID };
