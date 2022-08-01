import * as mongoDB from "mongodb";

const Collections: {
  BuyerUserCollection?: mongoDB.Collection;
  SellerUserCollection?: mongoDB.Collection;
  TransportUserCollection?: mongoDB.Collection;
} = {};

async function dbConnectBuyerUser() {
  const CONNURL = process.env.MONGOURL? process.env.MONGOURL : "mongodb://127.0.0.1:27017"
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    CONNURL
  );

  await client.connect();

  const db: mongoDB.Db = client.db("BestPreco");

  const dbCol: mongoDB.Collection = db.collection("BuyerUser");

  Collections.BuyerUserCollection = dbCol;
}

async function dbConnectSellerUser() {
  const CONNURL = process.env.MONGOURL? process.env.MONGOURL : "mongodb://127.0.0.1:27017"
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    CONNURL
  );

  await client.connect();

  const db: mongoDB.Db = client.db("BestPreco");

  const dbCol: mongoDB.Collection = db.collection("SellerUser");

  Collections.SellerUserCollection = dbCol;
}

async function dbConnectTransportUser() {
  const CONNURL = process.env.MONGOURL? process.env.MONGOURL : "mongodb://127.0.0.1:27017"
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    CONNURL
  );

  await client.connect();

  const db: mongoDB.Db = client.db("BestPreco");

  const dbCol: mongoDB.Collection = db.collection("TransportUser");

  Collections.TransportUserCollection = dbCol;
}

export { Collections, dbConnectBuyerUser, dbConnectSellerUser, dbConnectTransportUser };
