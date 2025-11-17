export const promptListStyles = {
  tableContainer:
    "flex-1 h-0 overflow-y-scroll background-white border rounded-[4px]",
  tableHeader: "sticky top-0 bg-lightGrey z-10 border-b",
  size4: "w-4 h-4",
  py2: "py-2",
  headerRows: {
    prompts: "py-4 pl-6 w-[45%]",
    source: "py-4 w-[8%]",
    persona: "py-4 w-[15%]",
    location: "py-4 w-[15%]",
    averagePosition: "py-4 w-[12%] text-right",
    actions: "py-4 pr-6 w-[5%] text-right",
  },
  promptRow: "hover:bg-muted/50 cursor-pointer",
  promptText: "font-medium text-sm pl-6",
  personasContainer: "flex flex-wrap gap-1",
  badgeContainer: "flex gap-1",
  smallMediumText: "text-xs font-medium",
  rightMediumText: "text-right font-medium",
  deleteCell: "text-right pr-6",
  deleteButton: "h-8 w-8 p-0 text-muted-foreground hover:text-destructive",
};
