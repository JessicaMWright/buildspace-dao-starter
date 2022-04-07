import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x41A54D802A51F63e8897113b68d939158a638393");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "TheRuler",
        description: "This NFT will give you access to ZenoDAO!",
        image: readFileSync("scripts/assets/logo.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();