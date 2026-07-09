# GitHub Actions CI/CD Setup Guide

## Overview
This project is configured with automated CI/CD deployment to cPanel using GitHub Actions. Every push to the `main` branch triggers an automatic build and deployment.

## Prerequisites

You need these secrets configured in your GitHub repository:

### Setting up GitHub Secrets

1. Go to: **Repository → Settings → Secrets and variables → Actions**
2. Click **New repository secret** and add:

| Secret Name | Description | Example |
|---|---|---|
| `CPANEL_HOST` | Your cPanel server hostname/IP | `smartmavuno.com` or server IP |
| `CPANEL_USER` | Your cPanel/SSH username | `nelsonto` |
| `SSH_PRIVATE_KEY` | Your SSH private key (full content) | Copy from downloaded .pem file |
| `SSH_PORT` | (Optional) SSH port, defaults to 22 | `22` or custom port |

## How to Get SSH Credentials from cPanel

1. **Log into cPanel**
2. Navigate to **SSH Access** under **Security**
3. Click **Manage SSH Keys**
4. If you don't have a key:
   - Click **Generate New Key**
   - Key Name: `github-actions`
   - Password: Leave empty (or save password)
   - Click **Generate**
5. Under **Public Keys**, click **Authorize** next to your new key
6. Download the private key (`.pem` file)
7. Open the `.pem` file in a text editor and copy ALL the content
8. Paste into GitHub secret `SSH_PRIVATE_KEY`

## How the Workflow Works

**File:** `.github/workflows/deploy.yml`

Triggered on:
- ✅ Push to `main` branch
- ✅ Manual trigger (Actions tab)

Steps:
1. **Checkout** - Pulls your code
2. **Setup Node.js & pnpm** - Installs build tools
3. **Install dependencies** - Runs `pnpm install`
4. **Build** - Runs `pnpm run build`
5. **Deploy to cPanel** - SSHs into server and:
   - Pulls latest code
   - Installs dependencies
   - Builds project
   - Copies static files to public_html

## Testing the Setup

1. **Verify secrets are added** - Go to Settings → Secrets, all 3 should be listed ✅
2. **Make a test commit:**
   ```bash
   git add .
   git commit -m "Test CI/CD setup"
   git push origin main
   ```
3. **Monitor deployment:**
   - Go to **Actions** tab in GitHub
   - Watch the workflow run in real-time
   - Check for ✅ or ❌ status

## Troubleshooting

### Deployment fails with SSH error
- Verify `SSH_PRIVATE_KEY` is copied correctly (includes BEGIN/END lines)
- Check `CPANEL_USER` matches your cPanel username
- Confirm `CPANEL_HOST` is correct

### Build fails
- Run locally: `pnpm install && pnpm run build`
- Check for TypeScript errors: `pnpm run lint`

### Site shows old version
- Check Actions tab - did it deploy successfully?
- SSH into cPanel and check file timestamps in `public_html/nelsontommogo`

## Manual Deployment (Without GitHub)

If needed, you can still use the local script:
```bash
./deploy.sh
```

Or manual SSH deployment:
```bash
ssh user@host
cd ~/public_html/nelsontommogo
git pull origin main
pnpm install
pnpm run build
cp -r out/* .
```

## Next.js Configuration

**File:** `next.config.ts`

Key settings for cPanel deployment:
- `output: 'export'` - Static site generation
- `distDir: 'out'` - Output directory
- `images.unoptimized: true` - No image optimization for static hosting
- `trailingSlash: true` - URLs have trailing slashes

---

**Questions?** Check GitHub Actions logs for detailed error messages!
