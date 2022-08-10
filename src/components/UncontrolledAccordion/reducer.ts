

export type ActionType = {
  type: string
}

export const SWITCH_COLLAPSED = 'SWITCH-COLLAPSED';

export type StateType = {
  collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case SWITCH_COLLAPSED:
      const stateCopy = {
        ...state,
        collapsed: !state.collapsed
      };

      return stateCopy;

    default:
      return state;
  }
}