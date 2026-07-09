const baseUrl = (typeof window !== 'undefined' && (window as any).NEXT_PUBLIC_API_URL)
  || "https://quick-start-ai-backend.vercel.app/api/v1";

export default baseUrl;