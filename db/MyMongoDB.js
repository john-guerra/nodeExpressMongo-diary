import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const uri = process.env.MONGODB_URI || "mongodb://localhost:37017";

console.log("🌽 MyMongoDB: uri", uri.slice(0, 10));

function MyMongoDB() {
  const DB_NAME = "DairyDB";
  const COL_NAME = "Entries";

  const self = {};

  const connect = () => {
    const client = new MongoClient(uri);
    const db = client.db(DB_NAME);

    return { client, db };
  };

  self.getEntries = async (query = {}) => {
    console.log("🌽 getEntries: Opening connection");

    const { client, db } = connect();
    try {
      const collection = db.collection(COL_NAME);
      console.log("🌽 getEntries: running query", query);
      const users = await collection.find(query).toArray();
      console.log("🌽 getEntries: gotResponse", users?.length);
      return users;
    } finally {
      console.log("🌽 getEntries: Closing connection");
      await client.close();
    }
  };

  return self;
}

const myMongoDB = MyMongoDB();

export default myMongoDB;
