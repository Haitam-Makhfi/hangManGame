export default function useRandomWord() {
  const words = ["EGG"];
  return words[Math.floor(Math.random() * words.length)];
}
