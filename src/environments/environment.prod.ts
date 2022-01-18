export const environment = {
  production: true,
  apiRoute: 'http://localhost:8081'
};

declare global {
  interface Window {
      FB:any;
  }
}
