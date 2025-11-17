import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FILTER_CATEGORY, trackedProducts } from "../constants";
import { FILTER_CONFIG } from "./constants";

interface PromptFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterState: any;
  setFilterState: (state: any) => void;
}

const PromptFilters = (props: PromptFilterProps) => {
  const { searchQuery, setSearchQuery, filterState, setFilterState } = props;

  const handleFilterChange = (category: string, value: string) => {
    setFilterState((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  return (
    <div className="flex items-center justify-between gap-3 mb-4 p-3 bg-muted/30 border border-border rounded-[4px]">
      <Input
        placeholder="Search prompts..."
        variant="coral"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-xs"
      />
      <div className="flex gap-2">
        <Select
          value={filterState?.[FILTER_CATEGORY.PRODUCT]}
          onValueChange={(newVal) => {
            handleFilterChange(FILTER_CATEGORY.PRODUCT, newVal);
          }}
        >
          <SelectTrigger variant="coral" className="w-[200px]">
            <SelectValue placeholder="Filter by product" />
          </SelectTrigger>
          <SelectContent>
            {trackedProducts.map((product) => (
              <SelectItem key={product.id} value={product.id}>
                {product.name === "All Products"
                  ? "All Products"
                  : product.name.substring(0, 30) + "..."}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {FILTER_CONFIG.map((config) => (
          <Select
            key={config.category}
            value={filterState?.[config.category]}
            onValueChange={(newVal) => {
              handleFilterChange(config.category, newVal);
            }}
          >
            <SelectTrigger variant="coral" className={config.width}>
              <SelectValue placeholder={config.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {config.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>
    </div>
  );
};

export default PromptFilters;
