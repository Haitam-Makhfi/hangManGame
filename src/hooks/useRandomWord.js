export default function useRandomWord() {
  const words = ["EGG", "AABBIJCC"];
  return words[Math.floor(Math.random() * words.length)];
}
