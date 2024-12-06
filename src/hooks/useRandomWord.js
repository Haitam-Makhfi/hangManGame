export default function useRandomWord() {
  const words = ["EGG", "CAT", "MOUSE"];
  return words[Math.floor(Math.random() * words.length)];
}
