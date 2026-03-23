import { Shelby } from "../packages/sdk/index.js";

const shelby = new Shelby({ apiKey: "demo" });

await shelby.store("Shelby is fast");
const res = await shelby.search("fast");

console.log(res);
