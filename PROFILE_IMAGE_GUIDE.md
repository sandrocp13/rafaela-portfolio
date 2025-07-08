# Profile Image Update Guide

## How to Update Profile Images

### Option 1: Direct HTML Edit
1. Replace the placeholder image URLs in `index.html`:
   - Find `src="https://via.placeholder.com/300x300/667eea/ffffff?text=RF"`
   - Replace with your actual image URL
   - Find `src="https://via.placeholder.com/120x120/667eea/ffffff?text=RF"`
   - Replace with the same image URL

### Option 2: Using JavaScript Console
1. Open the website in your browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Type: `updateProfileImages('YOUR_IMAGE_URL_HERE')`
5. Press Enter

### Option 3: Upload Image to Assets Folder
1. Create an `assets/images/` folder in your project
2. Add your profile image (e.g., `profile.jpg`)
3. Update the HTML to use: `src="assets/images/profile.jpg"`

## Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Minimum 300x300 pixels for best quality
- **Aspect Ratio**: Square (1:1) works best
- **File Size**: Keep under 500KB for fast loading

## LinkedIn Profile Picture Extraction
If you need to extract your LinkedIn profile picture:
1. Go to your LinkedIn profile
2. Right-click on your profile picture
3. Select "Copy image address" or "Copy image URL"
4. Use this URL in the methods above

## Example
```javascript
// Example of updating with a LinkedIn profile picture URL
updateProfileImages('https://media.licdn.com/dms/image/your-profile-image-url');
```

## Troubleshooting
- If the image doesn't load, check the URL is accessible
- Make sure the image URL starts with `https://`
- The placeholder will show if the image fails to load
- Check browser console for any error messages
