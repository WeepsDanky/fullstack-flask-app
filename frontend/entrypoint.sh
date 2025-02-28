#!/bin/sh

set -e

# Set the API URL from environment variable
export NEXT_PUBLIC_API_URL=${API_URL:-http://localhost:4000}

# Remove trailing slash if present
export NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL%/}

# Log the configuration for debugging
echo "Starting Next.js with API URL: $NEXT_PUBLIC_API_URL"

# Start the Next.js server
exec node server.js
