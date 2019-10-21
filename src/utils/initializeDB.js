var faker = require("faker");
var mysql = require("mysql");

const Connection = mysql.createConnection({
  host: "mydb.c9evr1zbg7ar.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "geralt",
  password: "password",
  database: "chirpr"
});

const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const createTables = async () => {
  try {
    let tables = await Query(
      `select table_name from information_schema.tables where table_schema = "chirpr";`
    );

    tables = tables.map(t => {
      return t.table_name;
    });
    if (tables.includes("Mentions")) await Query(`drop table Mentions`);
    if (tables.includes("Chirps")) await Query(`drop table Chirps`);
    if (tables.includes("Users")) await Query(`drop table Users`);

    await Query(`
    create table Users(
      id int not null auto_increment primary key,
        name varchar(50) not null,
        email varchar(50) not null,
        password text null,
        avatar text,
        _created timestamp default current_timestamp)`);

    await Query(`
      create table Chirps(
        id int not null auto_increment primary key,
        userid int not null,
        text text,
        location varchar(50),
        _created timestamp default current_timestamp)`);

    await Query(`  alter table Chirps
    add constraint fk_userid
    foreign key (userid)
    references Users(id)`);

    await Query(`  create table Mentions(
      _created timestamp default current_timestamp,
      userid int,
        chirpid int,
        primary key(userid, chirpid) )`);

    await Query(`alter table Mentions
    add constraint fk_muserid
    foreign key (userid)
    references Users(id)`);

    await Query(`alter table Mentions
    add constraint fk_mchirpid
    foreign key (chirpid)
    references Chirps(id)`);
  } catch (e) {
    console.log(e);
  }
};

const addData = async () => {
  const numUsers = 25;
  const numChirps = 100;
  const numMentions = 0;
  // Generate users
  for (let i = 0; i < numUsers; i += 1) {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const avatar = faker.image.avatar();
    // const post = faker.lorem.sentence();
    await Query("INSERT INTO Users(name, email, avatar) values(?, ?, ?)", [
      name,
      email,
      avatar
    ]);
  }
  // Generate chirps
  for (let i = 0; i < numChirps; i += 1) {
    const uid = Math.floor(Math.random() * numUsers) + 1;
    const post = faker.lorem.sentence();
    const location = faker.address.city();
    await Query("INSERT INTO Chirps(userid, text, location) values(?, ?, ?)", [
      uid,
      post,
      location
    ]);
  }
};

const run = async () => {
  await createTables();
  await addData();
  console.log("done");
  Connection.end();
};

run();
