# Navjeevan NGO - Deployment Guide

## Prerequisites

- Node.js (v14+)
- npm or yarn
- Git
- GitHub account
- Vercel account (free at vercel.com)

## Local Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## GitHub Deployment Preparation

### 1. Create GitHub Repository

- Go to [github.com/new](https://github.com/new)
- Name it: `Navjeevan-NGO` (or your preferred name)
- Make it Public or Private as needed
- Copy the repository URL

### 2. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/Navjeevan-NGO.git
git branch -M main
git push -u origin main
```

## Vercel Deployment

### Step 1: Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository

### Step 2: Configure Environment Variables

In Vercel Dashboard:

1. Go to Project Settings
2. Navigate to Environment Variables
3. Add the following variables:
   ```
   REACT_APP_API_URL = https://the-sanjivani-ngo-server.onrender.com
   ```

### Step 3: Deploy

- Vercel will automatically:
  - Install dependencies (`npm install`)
  - Build the project (`npm run build`)
  - Deploy to production (auto-deploy on every git push to main)

### Step 4: Custom Domain (Optional)

1. In Vercel Dashboard, go to Project Settings
2. Navigate to Domains
3. Add your custom domain

## Build Settings (Already Configured in vercel.json)

- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

## What Happens After Deployment

- Every time you push to the `main` branch on GitHub, Vercel automatically deploys
- You'll get a unique URL like: `https://your-project-name.vercel.app`
- Previous deployments are archived and can be rolled back

## Environment Variables for Different Stages

### Development (.env.local)

```
REACT_APP_API_URL=http://localhost:5000
```

### Production (.env)

```
REACT_APP_API_URL=https://the-sanjivani-ngo-server.onrender.com
```

## Troubleshooting

### Build Fails

- Check that all dependencies are installed: `npm install`
- Verify Node.js version: `node --version` (should be v14+)
- Check for console errors: `npm run build`

### API Calls Not Working

- Ensure REACT_APP_API_URL is set in Vercel Environment Variables
- The backend server must be accessible from Vercel

### Rewrite Issues

- vercel.json is configured to handle SPA routing (all routes go to /index.html)

## Next Steps

1. Create GitHub repository
2. Push code to GitHub
3. Connect Vercel to GitHub
4. Add environment variables
5. Deploy!

## Support

For more info, visit:

- [Vercel Docs](https://vercel.com/docs)
- [React Deployment](https://create-react-app.dev/docs/deployment/)
