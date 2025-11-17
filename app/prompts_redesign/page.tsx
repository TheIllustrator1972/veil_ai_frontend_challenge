"use client";

import usePropmts from "./usePrompts";
import PromptsList from "./List/PromptsList";
import PromptFilters from "./Filters/PromptFilters";
import { promptsClasses as classes } from "./styles";
import AddPromptDialog from "./Dialogs/AddPrompt/AddPromptDialog";
import QueryDetailsDialog from "./Dialogs/QueryDetailsDialog/QueryDetailsDialog";
import DetailedAnswersDialog from "./Dialogs/DetailedAnswersDialog/DetailedAnswersDialog";

function PromptsV2() {
  const {
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
  } = usePropmts();

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <div className="flex-1">
          <div className={classes.titleContainer}>
            {currentProduct?.domain && (
              <img
                src={`https://www.google.com/s2/favicons?domain=${currentProduct.domain}&sz=32`}
                alt={`${currentProduct.name} logo`}
                className="w-6 h-6 shrink-0"
              />
            )}
            <h1 className={classes.titleText}>
              {filteredPrompts.length} prompts for "{currentProduct?.name}"
            </h1>
          </div>
          <p className={classes.configureText}>
            Configure your prompts to optimize for specific locations, personas,
            and LLMs
          </p>
          <p className={classes.lastQueriedText}>Last queried 28 Jun, 25</p>
        </div>
        <AddPromptDialog />
      </div>
      <PromptFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterState={filterState}
        setFilterState={setFilterState}
      />
      <PromptsList
        filteredPrompts={filteredPrompts}
        handleQueryClick={handleQueryClick}
      />
      <QueryDetailsDialog
        isQueryDetailOpen={isQueryDetailOpen}
        setIsQueryDetailOpen={setIsQueryDetailOpen}
        selectedQuery={selectedQuery}
        handleAnswerClick={handleAnswerClick}
      />
      <DetailedAnswersDialog
        isDetailedAnswerOpen={isDetailedAnswerOpen}
        setIsDetailedAnswerOpen={setIsDetailedAnswerOpen}
        handleBackToResponses={handleBackToResponses}
        selectedAnswer={selectedAnswer}
        selectedQuery={selectedQuery}
      />
    </div>
  );
}

export default PromptsV2;
