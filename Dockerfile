# Stage 1: Build the Next.js application
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
# The production environment is set to ensure the app is built with optimizations.
ENV NODE_ENV=production
RUN npm run build

# Stage 2: Create the production image
FROM node:20-slim AS runner

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# The "start" script in package.json will be `next start`.
# This will serve the optimized production build.
CMD ["npm", "start"]
