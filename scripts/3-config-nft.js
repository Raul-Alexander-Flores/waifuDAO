import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0xEfcFdC245c8BA4cf49C7D5c487D775518389fd92");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Layla",
        description: "This NFT will give you access to WaifuDAO!",
        image: readFileSync("scripts/assets/Layla.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();