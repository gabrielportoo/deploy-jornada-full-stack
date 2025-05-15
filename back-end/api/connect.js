import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://gabrielposorio:wjqVOgv1wcP7MDCs@cluster0.1t2runq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
