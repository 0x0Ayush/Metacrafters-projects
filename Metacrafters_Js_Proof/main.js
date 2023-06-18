/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// Define an NFT class to represent each NFT object
class NFT {
    constructor(name, eyeColor, shirtType, bling, face) {
      this.name = name;
      this.eyeColor = eyeColor;
      this.shirtType = shirtType;
      this.bling = bling;
      this.face = face;
    }
  }
  
  const NFTs = [];
  
  // Function to mint a new NFT and store it in the NFTs array
  function mintNFT(name, eyeColor, shirtType, bling, face) {
    const newNFT = new NFT(name, eyeColor, shirtType, bling, face);
    NFTs.push(newNFT);
    console.log(`Minted: ${name}`);
  }
  
  // Function to list all the NFTs and print their metadata
  function listNFTs() {
    NFTs.forEach((nft, index) => {
      console.log(`\nID: \t${index + 10000}`);
      console.log(`Name: \t${nft.name}`);
      console.log(`EyeColor: ${nft.eyeColor}`);
      console.log(`ShirtType: ${nft.shirtType}`);
      console.log(`Bling: \t${nft.bling}`);
      console.log(`Face: \t${nft.face}`);
    });
  }
  
  // Function to print the total number of minted NFTs
  function getTotalSupply() {
    console.log(`\nTotal Supply: ${NFTs.length}`);
  }
  
  // Call the functions below this line
  
  mintNFT("Sunate", "red", "hoodie", "Gold-chain", "happy");
  mintNFT("Neki", "blue", "shirt", "silver-chain", "angry");
  mintNFT("Shinzo", "green", "t-shirt", "Diamond-ring", "sad");
  mintNFT("shinobi", "white", "formal", "iron-chain", "ultrahappy");
  mintNFT("Radiant", "black", "semi-formals", "Gold-chain", "crying");
  listNFTs();
  getTotalSupply();
  



















