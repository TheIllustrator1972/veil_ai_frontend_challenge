export const addPromptDialogInitialState = {
  isAddPromptOpen: false,
  newPromptText: "",
  selectedEngines: ["Gemini"] as string[],
  personasInput: "",
  personas: ["Student", "Professional"] as string[],
  locationInput: "",
  locations: ["Location", "Location two"] as string[],
};

export const AddPromptActionTypes = {
  SET_PROMPT_OPEN: "SET_PROMPT_OPEN",
  SET_PROMPT_TEXT: "SET_PROMPT_TEXT",
  SET_ENGINE: "SET_ENGINE",
  REMOVE_ENGINE: "REMOVE_ENGINE",
  SET_PERSONAS_INPUT: "SET_PERSONAS_INPUT",
  ADD_PERSONA: "ADD_PERSONA",
  REMOVE_PERSONA: "REMOVE_PERSONA",
  SET_LOCATION_INPUT: "SET_LOCATION_INPUT",
  ADD_LOCATION: "ADD_LOCATION",
  REMOVE_LOCATION: "REMOVE_LOCATION",
  RESET_FORM: "RESET_FORM",
} as const;

type State = typeof addPromptDialogInitialState;
type ActionType = { type: string; payload?: any };

export function addPromptDialogReducer(
  state: State,
  action: ActionType
): State {
  switch (action.type) {
    case AddPromptActionTypes.SET_PROMPT_OPEN:
      if (!action.payload) {
        return addPromptDialogReducer(state, {
          type: AddPromptActionTypes.RESET_FORM,
        });
      }

      return { ...state, isAddPromptOpen: action.payload as boolean };

    case AddPromptActionTypes.SET_PROMPT_TEXT:
      return { ...state, newPromptText: action.payload as string };

    case AddPromptActionTypes.SET_ENGINE:
      if (!state.selectedEngines.includes(action.payload as string)) {
        return {
          ...state,
          selectedEngines: [...state.selectedEngines, action.payload as string],
        };
      }
      return state;

    case AddPromptActionTypes.REMOVE_ENGINE:
      return {
        ...state,
        selectedEngines: state.selectedEngines.filter(
          (e) => e !== (action.payload as string)
        ),
      };

    case AddPromptActionTypes.SET_PERSONAS_INPUT:
      return { ...state, personasInput: action.payload as string };

    case AddPromptActionTypes.ADD_PERSONA: {
      const newPersona = (action.payload as string).trim();
      if (newPersona && !state.personas.includes(newPersona)) {
        return {
          ...state,
          personas: [...state.personas, newPersona],
          personasInput: "",
        };
      }
      return { ...state, personasInput: "" };
    }

    case AddPromptActionTypes.REMOVE_PERSONA:
      return {
        ...state,
        personas: state.personas.filter(
          (p) => p !== (action.payload as string)
        ),
      };

    case AddPromptActionTypes.SET_LOCATION_INPUT:
      return { ...state, locationInput: action.payload as string };

    case AddPromptActionTypes.ADD_LOCATION: {
      const newLocation = (action.payload as string).trim();
      if (newLocation && !state.locations.includes(newLocation)) {
        return {
          ...state,
          locations: [...state.locations, newLocation],
          locationInput: "",
        };
      }
      return { ...state, locationInput: "" };
    }

    case AddPromptActionTypes.REMOVE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter(
          (l) => l !== (action.payload as string)
        ),
      };

    case AddPromptActionTypes.RESET_FORM:
      return {
        ...addPromptDialogInitialState,
        isAddPromptOpen: false,
        selectedEngines: [],
        personas: [],
        locations: [],
      };

    default:
      return state;
  }
}
