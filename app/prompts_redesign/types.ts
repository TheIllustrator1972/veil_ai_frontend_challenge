export type Prompt = {
  id: number;
  text: string;
  source: string;
  personas: string[];
  position: number;
  topic: string;
  type: string | "geo" | "seo";
  location: {
    country: string;
    city: string;
    language: string;
  };
  llms: string[];
  productSnippet: string;
  product: string;
};

export type Answer = {
  date: string;
  llm: string;
  answer: string;
  fullAnswer: string;
  rank: number;
  personas: string[];
};

export type Product = {
  id: string;
  name: string;
  count: number;
  domain: string;
};
