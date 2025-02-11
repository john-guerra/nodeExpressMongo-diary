import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:37017";

function MyMongoDB() {
  const DB_NAME = "DairyDB";
  const COL_NAME = "Entries";

  const self = {};

  self.getEntries = async (query = {}) => {
    console.log("🌽 getEntries: Opening connection");
    const client = new MongoClient(uri);
    try {
      const db = client.db(DB_NAME);
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
