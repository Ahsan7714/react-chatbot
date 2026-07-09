const baseUrl = (typeof window !== 'undefined' && (window as any).NEXT_PUBLIC_API_URL)
  || (typeof window !== 'undefined' && window.location.hostname === 'localhost' 
    ? "http://localhost:3100/api/v1" 
    : "https://quick-start-ai-backend.vercel.app/api/v1");

export default baseUrl;