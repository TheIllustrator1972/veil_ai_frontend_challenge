import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AddPromptActionTypes,
  addPromptDialogReducer,
  addPromptDialogInitialState,
} from "./constants";
import { X } from "lucide-react";
import { useReducer } from "react";
import { ENGINES } from "../../constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { addPromptDialogStyles as classes } from "./styles";

const AddPromptDialog = () => {
  const [state, dispatch] = useReducer(
    addPromptDialogReducer,
    addPromptDialogInitialState
  );

  const {
    isAddPromptOpen,
    newPromptText,
    selectedEngines,
    personasInput,
    personas,
    locationInput,
    locations,
  } = state;

  const handleLocationKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && locationInput.trim()) {
      e.preventDefault();
      dispatch({
        type: AddPromptActionTypes.ADD_LOCATION,
        payload: locationInput.trim(),
      });
    }
  };

  const handlePersonasKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && personasInput.trim()) {
      e.preventDefault();
      dispatch({
        type: AddPromptActionTypes.ADD_PERSONA,
        payload: personasInput.trim(),
      });
    }
  };

  const handleAddPrompt = () => {
    dispatch({ type: AddPromptActionTypes.RESET_FORM });
  };

  return (
    <Dialog
      open={isAddPromptOpen}
      onOpenChange={(open) =>
        dispatch({ type: AddPromptActionTypes.SET_PROMPT_OPEN, payload: open })
      }
    >
      <DialogTrigger asChild>
        <Button size="default" className="gap-2" variant="coral">
          Add Prompt
        </Button>
      </DialogTrigger>
      <DialogContent className={classes.dialogContent}>
        <DialogHeader>
          <DialogTitle>Add Prompt</DialogTitle>
          <DialogDescription>
            Configure targeting for your prompt across locations, personas, and
            engines.
          </DialogDescription>
        </DialogHeader>

        <div className={classes.bodyContainer}>
          <div className={classes.spaceY2}>
            <Label htmlFor="prompt-text">Prompt</Label>
            <Textarea
              id="prompt-text"
              variant="coral"
              placeholder="Enter your prompt text..."
              value={newPromptText}
              onChange={(e) =>
                dispatch({
                  type: AddPromptActionTypes.SET_PROMPT_TEXT,
                  payload: e.target.value,
                })
              }
              rows={3}
            />
          </div>

          <div className={classes.spaceY2}>
            <Label>Select Engines</Label>
            <div className={classes.enginesContainer}>
              {ENGINES.map((engine) => (
                <div key={engine} className={classes.engineContainer}>
                  <input
                    type="checkbox"
                    id={`engine-${engine}`}
                    checked={selectedEngines.includes(engine)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch({
                          type: AddPromptActionTypes.SET_ENGINE,
                          payload: engine,
                        });
                      } else {
                        dispatch({
                          type: AddPromptActionTypes.REMOVE_ENGINE,
                          payload: engine,
                        });
                      }
                    }}
                    className={classes.checkbox}
                  />
                  <label
                    htmlFor={`engine-${engine}`}
                    className={classes.engineLabel}
                  >
                    {engine}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={classes.spaceY2}>
            <Label htmlFor="personas-input">Personas</Label>
            <Input
              id="personas-input"
              variant="coral"
              placeholder="Type and press Enter or comma to add personas..."
              value={personasInput}
              onChange={(e) =>
                dispatch({
                  type: AddPromptActionTypes.SET_PERSONAS_INPUT,
                  payload: e.target.value,
                })
              }
              onKeyDown={handlePersonasKeyDown}
            />
            {personas.length > 0 && (
              <div className={classes.badgesContainer}>
                {personas.map((persona) => (
                  <Badge key={persona} variant="coral">
                    {persona}
                    <button
                      onClick={() =>
                        dispatch({
                          type: AddPromptActionTypes.REMOVE_PERSONA,
                          payload: persona,
                        })
                      }
                      className={classes.removeButton}
                    >
                      <X className={classes.iconSize4} />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
            <p className={classes.helperText}>
              Press Enter or comma to add each persona
            </p>
          </div>

          <div className={classes.spaceY2}>
            <Label htmlFor="location-input">Location</Label>
            <Input
              id="location-input"
              variant="coral"
              placeholder="Type and press Enter or comma to add locations..."
              value={locationInput}
              onChange={(e) =>
                dispatch({
                  type: AddPromptActionTypes.SET_LOCATION_INPUT,
                  payload: e.target.value,
                })
              }
              onKeyDown={handleLocationKeyDown}
            />
            {locations.length > 0 && (
              <div className={classes.badgesContainer}>
                {locations.map((location) => (
                  <Badge key={location} variant="coral" className="gap-1 pr-1">
                    {location}
                    <button
                      onClick={() =>
                        dispatch({
                          type: AddPromptActionTypes.REMOVE_LOCATION,
                          payload: location,
                        })
                      }
                      className={classes.removeButton}
                    >
                      <X className={classes.iconSize4} />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
            <p className={classes.helperText}>
              Press Enter or comma to add each location (e.g., "United States",
              "San Francisco", "English")
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="coralOutline"
            onClick={() =>
              dispatch({
                type: AddPromptActionTypes.SET_PROMPT_OPEN,
                payload: false,
              })
            }
          >
            Cancel
          </Button>
          <Button
            variant="coral"
            onClick={handleAddPrompt}
            disabled={!newPromptText.trim()}
          >
            Add Prompt
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPromptDialog;
