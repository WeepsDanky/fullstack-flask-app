import type { NextApiRequest, NextApiResponse } from 'next';

type ConfigData = {
  apiUrl: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ConfigData>
) {
  // Get the API URL from the environment variable set by the entrypoint script
  // In Docker, NEXT_PUBLIC_ variables might not be properly exposed to the client
  // This API route runs on the server side and can access all environment variables
  const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  
  console.log('Config API returning apiUrl:', apiUrl);
  
  res.status(200).json({ apiUrl });
} 