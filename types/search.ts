export interface AISearchResult {
  type: "suggestion" | "result";
  content: string;
  action: string;
}