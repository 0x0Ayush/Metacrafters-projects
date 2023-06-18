Project: Create a NFT Collection

#Create a NFT Collection
This is a JavaScript project that allows you to mint and manage NFTs (Non-Fungible Tokens). It provides functions to mint new NFTs, list existing NFTs, and retrieve the total supply of minted NFTs.

:#Functions
mintNFT(name, eyeColor, shirtType, bling, face)
This function mints a new NFT by creating an NFT object with the provided metadata and stores it in the NFTs array. It takes the following parameters:

`name:` The name of the NFT.
`eyeColor:` The eye color of the NFT.
`shirtType:` The type of shirt the NFT wears.
`bling:` The bling or accessory of the NFT.
`face:` The facial expression of the NFT.

Example usage:

```mintNFT("Sunate", "red", "hoodie", "Gold-chain", "happy");```

:#listNFTs()

This function lists all the minted NFTs and prints their metadata. It iterates over the NFTs array and displays the following information for each NFT:

`ID:` The unique identifier for the NFT.
`Name:` The name of the NFT.
`EyeColor:` The eye color of the NFT.
`ShirtType:` The type of shirt the NFT wears.
`Bling:` The bling or accessory of the NFT.
`Face:` The facial expression of the NFT.

:#getTotalSupply()
This function retrieves and prints the total number of minted NFTs. It simply outputs the length of the NFTs array.

#Styling
The project has been styled to improve readability and maintainability. Here are some of the changes made:

* The code has been organized into functions and a class for better modularity.
* Template literals have been used for string concatenation to improve readability.
* Function parameters have been renamed to follow standard JavaScript naming conventions.
* Comments have been added to explain the purpose of each function and section of code.
* Feel free to explore and modify the code according to your needs.

#Getting Started
To use this project, follow these steps:

* Clone the repository to your local machine.
* Open the main.js file vs code or any other editor.
* compile the main.js code inorder to use the functions !
* Call the functions mintNFT, listNFTs, and getTotalSupply to interact with the NFT Manager.

#License
This project is licensed under the MIT License. Feel free to use and modify the code as per the terms of the license.

Enjoy managing your NFTs with this project! If you have any questions or suggestions, please open an issue or contribute to the project.


