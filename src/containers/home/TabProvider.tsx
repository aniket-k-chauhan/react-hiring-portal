import { Dispatch, createContext, useContext, useReducer } from "react";

const initialValue = 0;

const TabContext = createContext<number>(initialValue);

const TabDispachContext = createContext<Dispatch<any> | null>(() => null);

const TabProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tabIndex, dispatch] = useReducer(tabReducer, initialValue);

  return (
    <TabContext.Provider value={tabIndex}>
      <TabDispachContext.Provider value={dispatch}>
        {children}
      </TabDispachContext.Provider>
    </TabContext.Provider>
  );
};

export function useTabIndex() {
  return useContext(TabContext);
}

export function useTabDispatch() {
  return useContext(TabDispachContext);
}

function tabReducer(tabIndex: number, action: { type: string }): number {
  switch (action.type) {
    case "next":
      return tabIndex + 1;

    case "previous":
      return tabIndex - 1;

    default:
      return tabIndex;
  }
}

export default TabProvider;
