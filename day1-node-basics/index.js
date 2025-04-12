//JavaScript Basics

// 1. Variables:
let name = "Imane Zouine"; // String
let age = 20; // Number
let isStudent = true; // Boolean
const PI = 3.14; // Constant

//2.Functions:
function surfaceCircle(radius) {
  return PI * radius * radius;
}
console.log(surfaceCircle(5)); 
// Output: 78.5


// 3.Asynchronous JavaScript (async/await)
// exemple de fonction asynchrone qui télécharge un fichier
async function downloadFile(url) {
    try {
        let response = await fetch(url);
        let fileData = await response.blob();
        console.log("Fichier téléchargé avec succès!");
    } catch (error) {
        console.log("Erreur:", error);
    }
}

downloadFile('https://example.com/file.jpg');
// Output: Fichier téléchargé avec succès! (or error message if failed)


