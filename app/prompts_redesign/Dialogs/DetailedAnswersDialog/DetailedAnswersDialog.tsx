import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { detailedAnswersDialogStyles as classes } from "./styles";

interface DetailedAnswersDialogProps {
  isDetailedAnswerOpen: boolean;
  setIsDetailedAnswerOpen: (isDetailedAnswerOpen: boolean) => void;
  handleBackToResponses: () => void;
  selectedAnswer: any;
  selectedQuery: any;
}

const DetailedAnswersDialog = (props: DetailedAnswersDialogProps) => {
  const {
    isDetailedAnswerOpen,
    setIsDetailedAnswerOpen,
    handleBackToResponses,
    selectedAnswer,
    selectedQuery,
  } = props;

  return (
    <Dialog open={isDetailedAnswerOpen} onOpenChange={setIsDetailedAnswerOpen}>
      <DialogContent className={classes.dialogContent}>
        <DialogHeader>
          <div className={classes.backToResponsesButton}>
            <Button
              variant="coralOutline"
              size="sm"
              onClick={handleBackToResponses}
            >
              <ArrowLeft className={classes.leftArrow} />
              Back to Responses
            </Button>
          </div>
          <div className={classes.llmAndRankBadgeContainer}>
            <div className={classes.llmAndDateContainer}>
              <Badge variant="coral" className="text-sm">
                {selectedAnswer?.llm}
              </Badge>
              <span className={classes.dateText}>{selectedAnswer?.date}</span>
            </div>
            <Badge variant="shadow" className="text-sm">
              Rank #{selectedAnswer?.rank}
            </Badge>
          </div>
        </DialogHeader>

        <div className={classes.bodyContainer}>
          <div className="space-y-4">
            <h3 className={classes.fullResponseText}>Full Response</h3>
            <p className={classes.answerText}>{selectedAnswer?.fullAnswer}</p>
          </div>

          <div className={classes.personasContainer}>
            <h3 className={classes.targetedPersonasTitle}>Targeted Personas</h3>
            <div className={classes.personasBadgesContainer}>
              {selectedAnswer?.personas.map((persona, idx) => (
                <Badge key={idx} variant="coral">
                  {persona}
                </Badge>
              ))}
            </div>
          </div>

          <div className={classes.queryDetailsContainer}>
            <h3 className={classes.queryDetailsTitle}>Query Details</h3>
            <div className={classes.cityAndCountryTextContainer}>
              <div className={classes.labelValuePair}>
                <span className={classes.textMuted}>Query:</span>
                <span className={classes.textForeground}>
                  {selectedQuery?.text}
                </span>
              </div>
              <div className={classes.labelValuePair}>
                <span className={classes.textMuted}>Location:</span>
                <span className={classes.textForeground}>
                  {selectedQuery?.location.city},{" "}
                  {selectedQuery?.location.country}
                </span>
              </div>
              <div className={classes.labelValuePair}>
                <span className={classes.textMuted}>Language:</span>
                <span className={classes.textForeground}>
                  {selectedQuery?.location.language}
                </span>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="coralOutline" onClick={handleBackToResponses}>
            Back
          </Button>
          <Button variant="coral">Copy Response</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DetailedAnswersDialog;
