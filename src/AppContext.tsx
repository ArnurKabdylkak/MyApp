import React, { createContext, useContext, useState, ReactNode } from 'react';

// Определяем форму данных контекста
interface AppContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

// Создаем контекст с значением по умолчанию
const AppContext = createContext<AppContextType | undefined>(undefined);

// Создаем компонент провайдера
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<string>('initial state');

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// Создаем пользовательский хук для использования контекста
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
