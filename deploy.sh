#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

DOMAIN="nelson.smartmavuno.com"

echo -e "${GREEN}🚀 Starting deployment to ${DOMAIN}...${NC}"

# Build and export in one command
echo -e "${YELLOW}📦 Building and exporting project...${NC}"
npm run build:export

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
else
    echo -e "${RED}❌ Build failed. Aborting deployment.${NC}"
    exit 1
fi

# Check if out folder exists
if [ ! -d "out" ]; then
    echo -e "${RED}❌ 'out' folder not found.${NC}"
    exit 1
fi

# Deploy to cPanel
echo -e "${YELLOW}📤 Pushing to cPanel...${NC}"
git add .
git commit -m "Deploy to ${DOMAIN}: $(date '+%Y-%m-%d %H:%M:%S')"
git push cpanel main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment complete! 🎉${NC}"
    echo -e "${GREEN}🌐 Visit: https://${DOMAIN}${NC}"
else
    echo -e "${RED}❌ Deployment failed.${NC}"
    exit 1
fi