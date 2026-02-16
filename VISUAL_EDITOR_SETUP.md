# Netlify Visual Editor Setup

This site is configured for Netlify Visual Editor using Stackbit (Git CMS).

## Prerequisites

- Node.js v18 or later
- Site deployed to Netlify (or local development)
- GitHub or BitBucket repository

## Local Development

1. **Install Stackbit CLI globally:**
   ```bash
   npm install -g @stackbit/cli
   ```

2. **Start your Next.js dev server:**
   ```bash
   npm run dev
   ```

3. **In another terminal, start Stackbit dev server:**
   ```bash
   stackbit dev
   ```

4. **Access Visual Editor:**
   - Open `http://localhost:8090/_stackbit` in your browser
   - The Visual Editor will connect to your local dev server

## Content Structure

Content is stored in `content/home.json` and can be edited through:
- Visual Editor UI (recommended)
- Directly editing `content/home.json`

## Editable Content Fields

The following content is editable through Visual Editor:

### Hero Section (`hero`)
- `title` - Main headline (e.g., "THE SAPPHIRE")
- `subtitle` - Subtitle text (e.g., "MODERN LUXURY • TAMPA")
- `description` - Hero description paragraph

### Location Section (`location`)
- `address` - Street address
- `city` - City and state
- `mapUrl` - Google Maps URL

### Newsletter Section (`newsletter`)
- `heading` - Section heading
- `description` - Newsletter description text

## Visual Editor Annotations

Components are annotated with `data-sb-field-path` attributes that tell Visual Editor which content field to edit. For example:

```tsx
<h1 data-sb-field-path="hero.title">{content.hero.title}</h1>
```

## Deployment

When you deploy to Netlify:

1. Ensure your repository is connected to Netlify
2. Visual Editor will be available in the Netlify dashboard
3. Content changes made in Visual Editor will commit to your repository

## Resources

- [Netlify Visual Editor Docs](https://docs.netlify.com/manage/visual-editor/get-started/get-started-overview/)
- [Stackbit Documentation](https://docs.stackbit.com/)
- [Next.js Visual Editor Guide](https://docs.netlify.com/manage/visual-editor/frameworks/next)
