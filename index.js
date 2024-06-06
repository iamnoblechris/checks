function countWords(text) {
  // Remove leading and trailing whitespace
  const trimmedText = text.trim();

  // Split the text into an array of words using whitespace as delimiter
  const words = trimmedText.split(/\s+/);

  // Return the length of the words array (number of words)
  return words.length;
}

// Example usage
const text = "This is a string with multiple words.";
const wordCount = countWords(text);

console.log("The text has", wordCount, "words.");
