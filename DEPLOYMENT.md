# Deployment Guide

This document provides instructions for deploying Chopper's Hanoi Meal Timetable to various platforms.

## Prerequisites

- Node.js 18+
- pnpm 10.4.1+
- Git (for version control)

## Building for Production

```bash
# Install dependencies
pnpm install

# Build the application
pnpm build

# The output will be in the `dist/` directory
```

## Deployment Options

### Option 1: Vercel (Recommended for Static Sites)

Vercel provides the easiest deployment for this static React application.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository directly in the Vercel dashboard for automatic deployments.

### Option 2: Netlify

Netlify offers similar functionality to Vercel with easy GitHub integration.

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Or connect your GitHub repository in the Netlify dashboard.

### Option 3: GitHub Pages

Deploy directly from your GitHub repository.

1. Update `package.json` with your repository URL:
```json
{
  "homepage": "https://yourusername.github.io/chopper-timetable"
}
```

2. Install gh-pages:
```bash
pnpm add -D gh-pages
```

3. Add deployment scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "pnpm build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
pnpm deploy
```

### Option 4: Docker

Deploy using Docker for containerized environments.

1. Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

2. Build and run:
```bash
docker build -t chopper-timetable .
docker run -p 3000:3000 chopper-timetable
```

### Option 5: Traditional Server (Node.js)

For deployment on a traditional server or VPS:

```bash
# Build the application
pnpm build

# Copy the dist folder to your server
scp -r dist/ user@your-server:/var/www/chopper-timetable/

# SSH into your server
ssh user@your-server

# Install dependencies (if not already done)
cd /var/www/chopper-timetable
pnpm install --production

# Start the server
NODE_ENV=production pnpm start
```

Use a process manager like PM2 to keep the application running:

```bash
npm install -g pm2
pm2 start "NODE_ENV=production pnpm start" --name "chopper-timetable"
pm2 save
pm2 startup
```

### Option 6: AWS S3 + CloudFront

For static hosting on AWS:

1. Build the application:
```bash
pnpm build
```

2. Create an S3 bucket and upload the `dist` folder
3. Create a CloudFront distribution pointing to your S3 bucket
4. Configure CloudFront to serve `index.html` for 404 errors

### Option 7: Manus (Built-in Hosting)

If using Manus, deployment is handled automatically:

1. Create a checkpoint: `webdev_save_checkpoint`
2. Click the "Publish" button in the Management UI
3. Your site will be live at `chopper-meal-*.manus.space`

## Environment Variables

For production deployments, set these environment variables:

```bash
NODE_ENV=production
PORT=3000
VITE_APP_TITLE="Chopper's Hanoi Meal Timetable"
```

## Performance Optimization

### Build Optimization

The build process automatically optimizes your code:

```bash
# Analyze bundle size
pnpm build --analyze
```

### Caching Headers

Set appropriate cache headers for static assets:

- HTML files: No cache or short cache (5 minutes)
- CSS/JS files: Long cache (1 year) - files are hashed
- Images: Long cache (1 month)

### CDN Configuration

For image assets, consider using a CDN:

1. Upload images to a CDN service (Cloudinary, Imgix, etc.)
2. Update `meals-data.json` with CDN URLs
3. This reduces server load and improves performance

## Monitoring & Logging

### Vercel/Netlify

Both platforms provide built-in analytics and monitoring:

- View deployment logs in the dashboard
- Monitor performance metrics
- Set up alerts for errors

### Self-Hosted

For self-hosted deployments, set up monitoring:

```bash
# Using PM2
pm2 logs chopper-timetable

# Using systemd
journalctl -u chopper-timetable -f
```

## Backup & Recovery

### Database Backup

If using a database, implement regular backups:

```bash
# Example backup script
#!/bin/bash
BACKUP_DIR="/backups/chopper-timetable"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
cp -r /var/www/chopper-timetable/data "$BACKUP_DIR/backup_$TIMESTAMP"
```

### Version Control

Always keep your code in version control:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Application Won't Start

```bash
# Check logs
pnpm dev

# Check for port conflicts
lsof -i :3000
```

### Performance Issues

1. Check bundle size: `pnpm build --analyze`
2. Optimize images
3. Enable gzip compression
4. Use a CDN for static assets

## SSL/HTTPS

For production, always use HTTPS:

- **Vercel/Netlify**: Automatic SSL certificates
- **GitHub Pages**: Automatic HTTPS
- **AWS S3 + CloudFront**: Use ACM certificates
- **Self-hosted**: Use Let's Encrypt with Certbot

```bash
# Example with Certbot
sudo certbot certonly --standalone -d yourdomain.com
```

## Domain Setup

### Custom Domain

1. **Vercel/Netlify**: Add domain in dashboard settings
2. **GitHub Pages**: Update DNS records and add CNAME file
3. **Self-hosted**: Update DNS A records to your server IP

### DNS Configuration

```
Type: A
Name: @
Value: Your server IP

Type: CNAME
Name: www
Value: yourdomain.com
```

## Maintenance

### Regular Updates

```bash
# Check for updates
pnpm outdated

# Update dependencies
pnpm update

# Test thoroughly before deploying
pnpm build
pnpm preview
```

### Security

- Keep Node.js updated
- Update dependencies regularly
- Monitor security advisories: `pnpm audit`
- Use HTTPS everywhere
- Implement rate limiting for APIs

## Support

For deployment issues:

1. Check the [README.md](README.md)
2. Review platform-specific documentation
3. Open an issue on GitHub with deployment details
4. Include error logs and environment information

---

**Happy deploying! 🚀**
