

type ActionType = {
    type: string
  }

export const SWITCH_COLLAPSED = 'SWITCH-COLLAPSED';

export const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case SWITCH_COLLAPSED:
      return !state;

    default:
      return state;
  } 
}