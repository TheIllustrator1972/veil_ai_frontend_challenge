import {
  ALL,
  mockPrompts,
  trackedProducts,
  FILTER_CATEGORY,
} from "./constants";
import { useState } from "react";
import { Answer, Prompt } from "./types";

const usePropmts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedQuery, setSelectedQuery] = useState<Prompt | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  const [isQueryDetailOpen, setIsQueryDetailOpen] = useState(false);
  const [isDetailedAnswerOpen, setIsDetailedAnswerOpen] = useState(false);

  const [filterState, setFilterState] = useState({
    [FILTER_CATEGORY.LLM]: ALL,
    [FILTER_CATEGORY.LANGUAGE]: ALL,
    [FILTER_CATEGORY.TYPE]: ALL,
    [FILTER_CATEGORY.PRODUCT]: ALL,
  });

  const currentProduct = trackedProducts.find((p) => p.id === "product-1");
  const filteredPrompts = mockPrompts.filter((p) => {
    const filterProduct = filterState?.[FILTER_CATEGORY.PRODUCT];
    const filterLLM = filterState?.[FILTER_CATEGORY.LLM];
    const filterLanguage = filterState?.[FILTER_CATEGORY.LANGUAGE];
    const filterType = filterState?.[FILTER_CATEGORY.TYPE];

    const matchesProduct =
      filterProduct === ALL ||
      p.product ===
        trackedProducts.find((prod) => prod.id === filterProduct)?.name;
    const matchesSearch = p.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLLM = filterLLM === ALL || p.llms.includes(filterLLM);
    const matchesLanguage =
      filterLanguage === ALL || p.location.language === filterLanguage;
    const matchesType = filterType === ALL || p.type === filterType;

    const conditions = [
      matchesProduct,
      matchesSearch,
      matchesLLM,
      matchesLanguage,
      matchesType,
    ];

    return conditions.every((condition) => condition === true);
  });

  const handleQueryClick = (query: Prompt) => {
    setSelectedQuery(query);
    setIsQueryDetailOpen(true);
  };

  const handleBackToResponses = () => {
    setIsDetailedAnswerOpen(false);
    setSelectedAnswer(null);
  };

  const handleAnswerClick = (answer: Answer) => {
    setSelectedAnswer(answer);
    setIsDetailedAnswerOpen(true);
  };

  return {
    currentProduct,
    filteredPrompts,
    searchQuery,
    setSearchQuery,
    filterState,
    setFilterState,
    handleQueryClick,
    isQueryDetailOpen,
    setIsQueryDetailOpen,
    selectedQuery,
    isDetailedAnswerOpen,
    setIsDetailedAnswerOpen,
    handleBackToResponses,
    selectedAnswer,
    handleAnswerClick,
  };
};

export default usePropmts;
