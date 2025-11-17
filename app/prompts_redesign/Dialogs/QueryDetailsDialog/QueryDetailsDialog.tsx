import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe } from "lucide-react";
import { ENGINES, mockAnswers } from "../../constants";
import { queryDetailsDialogStyles as classes } from "./styles";

interface QueryDetailsDialogProps {
  isQueryDetailOpen: boolean;
  setIsQueryDetailOpen: (isQueryDetailOpen: boolean) => void;
  selectedQuery: any;
  handleAnswerClick: (answer: any) => void;
}

const QueryDetailsDialog = (props: QueryDetailsDialogProps) => {
  const {
    isQueryDetailOpen,
    setIsQueryDetailOpen,
    selectedQuery,
    handleAnswerClick,
  } = props;

  return (
    <Dialog open={isQueryDetailOpen} onOpenChange={setIsQueryDetailOpen}>
      <DialogContent className={classes.dialogContent}>
        <DialogHeader>
          <div className={classes.headerContainer}>
            <div className="flex-1">
              <DialogTitle className={classes.selectedQueryText}>
                {selectedQuery?.text}
              </DialogTitle>
              <Badge
                variant={selectedQuery?.type === "geo" ? "coral" : "secondary"}
                className="text-xs"
              >
                {selectedQuery?.type === "geo" ? "GEO Query" : "SEO Query"}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className={classes.bodyContainer}>
          <div className={classes.spaceY2}>
            <h3 className={classes.querySettingsTitle}>Query Settings</h3>

            <div className={classes.locationContainer}>
              <Label className={classes.labelIconContainer}>
                <MapPin className={classes.labelIcon} color="orange" />
                Location
              </Label>
              <Input
                variant="coral"
                defaultValue={`${selectedQuery?.location.country}, ${selectedQuery?.location.city}, ${selectedQuery?.location.language}`}
                placeholder="e.g., United States, San Francisco, English"
              />
              <p className={classes.helperText}>
                Enter location details (country, city, language)
              </p>
            </div>

            <div className={classes.spaceY4}>
              <Label className={classes.labelIconContainer}>
                <Globe className={classes.labelIcon} />
                LLMs Targeted
              </Label>
              <div className={classes.enginesContainer}>
                {ENGINES.map((llm) => (
                  <Badge
                    key={llm}
                    variant={
                      selectedQuery?.llms.includes(llm) ? "coral" : "outline"
                    }
                    className="cursor-pointer"
                  >
                    {llm}
                  </Badge>
                ))}
              </div>
            </div>

            <div className={classes.spaceY4}>
              <Label className="text-sm">Product Snippet</Label>
              <Input
                variant="coral"
                defaultValue={selectedQuery?.productSnippet}
              />
            </div>
          </div>

          <div className={classes.spaceY4}>
            <h3 className={classes.answersQueryHelperText}>
              Answers for this Query
            </h3>
            <div className={classes.mockAnswersContainer}>
              {mockAnswers.map((answer, idx) => (
                <div
                  key={idx}
                  className={classes.mockAnswerContainer}
                  onClick={() => handleAnswerClick(answer)}
                >
                  <div className={classes.badgeAndRankContainer}>
                    <div className={classes.llmBadgeContainer}>
                      <Badge variant="coral" className="text-xs">
                        {answer.llm}
                      </Badge>
                      <span className={classes.helperText}>{answer.date}</span>
                    </div>
                    <Badge variant="shadow" className="text-xs">
                      Rank #{answer.rank}
                    </Badge>
                  </div>

                  <p className={classes.answerText}>{answer.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="coralOutline"
            onClick={() => setIsQueryDetailOpen(false)}
          >
            Close
          </Button>
          <Button variant="coral">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QueryDetailsDialog;
