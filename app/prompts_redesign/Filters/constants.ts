import { FILTER_CATEGORY } from "../constants";

export const FILTER_CONFIG = [
  {
    category: FILTER_CATEGORY.LLM,
    placeholder: "All LLMs",
    width: "w-[150px]",
    options: [
      { value: "all", label: "All LLMs" },
      { value: "ChatGPT", label: "ChatGPT" },
      { value: "Perplexity", label: "Perplexity" },
      { value: "Gemini", label: "Gemini" },
      { value: "Google", label: "Google" },
      { value: "Reddit", label: "Reddit" },
    ],
  },
  {
    category: FILTER_CATEGORY.LANGUAGE,
    placeholder: "All Languages",
    width: "w-[150px]",
    options: [
      { value: "all", label: "All Languages" },
      { value: "English", label: "English" },
      { value: "Spanish", label: "Spanish" },
      { value: "French", label: "French" },
      { value: "German", label: "German" },
      { value: "Japanese", label: "Japanese" },
      { value: "Italian", label: "Italian" },
      { value: "Dutch", label: "Dutch" },
      { value: "Swedish", label: "Swedish" },
      { value: "Portuguese", label: "Portuguese" },
    ],
  },
  {
    category: FILTER_CATEGORY.TYPE,
    placeholder: "All Types",
    width: "w-[150px]",
    options: [
      { value: "all", label: "All Types" },
      { value: "geo", label: "GEO" },
      { value: "seo", label: "SEO" },
    ],
  },
];
