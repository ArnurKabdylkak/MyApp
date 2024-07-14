export const authenticateUser =  (email: string, password: string): boolean => {
    
    return email === 'test@example.com' && password === 'password';
  };
  export const isAuthenticated = (): boolean => {
    
    return localStorage.getItem('isAuthenticated') === 'true';
  };