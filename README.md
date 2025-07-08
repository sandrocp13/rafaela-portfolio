# Rafaella Rossi Pereira - Professional Portfolio

A modern, responsive portfolio website showcasing the multidisciplinary expertise of Rafaella Rossi Pereira in UX Research, Business Operations, and Human-Computer Interaction Design.

## 👩‍💼 About Rafaella

Strategic and user-centered professional with expertise spanning:
- **UX Research & Design**: Mixed-methods research, usability testing, accessibility auditing
- **Business Operations**: Process optimization, cross-functional collaboration, data-driven decision making
- **Analytics & Strategy**: SQL, data visualization, customer acquisition optimization
- **International Experience**: Fluent in Portuguese, conversational in Spanish and French
- **Education**: MSc Human-Computer Interaction (City, University of London), B.S. International Affairs & Media/Communications (Florida State University)

## 🌟 Professional Highlights

- **16% MoM** customer acquisition increase at Spotify through strategic workflow optimization
- **12% improvement** in customer conversion at Better.com through UX research and process redesign
- **Promoted to Senior Associate** within 4 months at Better.com
- **Cross-cultural expertise** working with international teams and diverse user bases
- **Accessibility champion** with WCAG 2.1 auditing certification

## 🚀 Portfolio Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean design with smooth animations and transitions
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **PDF Content Extraction**: Upload resume/CV to automatically improve portfolio content
- **Image Management**: Easy profile picture upload and management
- **Professional Sections**:
  - Hero section with key positioning
  - Comprehensive about section with professional summary
  - Experience timeline with real achievements from Spotify, Better.com, SG Law, and Studio August
  - Skills categorized by UX Research, Analytics, and Business Tools
  - Education section including MSc, certifications, and language proficiencies
  - Featured projects showcasing real business impact
  - Professional contact information

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Local web server (optional, for development)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. For development, you can use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   ```

## 📁 Project Structure

```
portfolio/
├── index.html                  # Main HTML file
├── style.css                   # Stylesheet with responsive design
├── script.js                   # JavaScript for interactivity
├── pdf-extractor.html          # PDF content extraction tool
├── image-uploader.html         # Profile image management tool
├── extract-pdf-content.bat     # Quick launcher for PDF extractor
├── upload-image.bat            # Quick launcher for image uploader
├── README.md                   # Project documentation
├── PROFILE_IMAGE_GUIDE.md      # Image upload instructions
├── assets/
│   └── images/                 # Profile images folder
└── .github/
    └── copilot-instructions.md # Development guidelines
```

## 🎨 Design Features

- **Color Scheme**: Professional gradient design (#667eea to #764ba2)
- **Typography**: Inter font family for modern readability
- **Icons**: Font Awesome icons for social links and visual elements
- **Animations**: CSS animations and JavaScript interactions
- **Layout**: CSS Grid and Flexbox for responsive layouts

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 1024px and above

## 🔧 Customization

### Updating Content
1. **Personal Information**: Update name, title, and description in `index.html`
2. **Experience**: Modify the timeline section with actual work experience
3. **Skills**: Update the skills section with relevant technologies
4. **Projects**: Replace placeholder projects with actual work
5. **Contact**: Update contact information and social links

### Styling
- Colors can be modified in the CSS custom properties
- Fonts can be changed by updating the Google Fonts import
- Layout adjustments can be made in the responsive media queries

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the new section in `style.css`
3. Add any interactive functionality in `script.js`
4. Update navigation if needed

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions about this portfolio website:
- **LinkedIn**: [Rafaela Rossi Pereira](https://www.linkedin.com/in/rossirafaela/)
- **Email**: rafaela.per12@gmail.com

## 🚀 Deployment

This static website can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload the files to your hosting provider and the website will be live.

## 📄 PDF Content Extraction

### Upload Resume/CV
The portfolio includes an advanced PDF content extraction system:

1. **Access the PDF Extractor**:
   - Click the "Upload Resume" button on the portfolio
   - Or open `pdf-extractor.html` directly
   - Or run `extract-pdf-content.bat`

2. **Upload Process**:
   - Drag and drop a PDF file or click to browse
   - The system automatically extracts text content
   - Content is categorized into sections (About, Experience, Skills, etc.)
   - Review and edit the extracted information

3. **Apply to Portfolio**:
   - Click "Apply to Portfolio" after reviewing
   - Data is stored locally and can be applied to the website
   - Run `applyExtractedData()` in the browser console to see changes

### Supported Content Types
- **Personal Information**: Name, contact details
- **Professional Summary**: Bio, objectives, career summary
- **Work Experience**: Job titles, companies, dates, descriptions
- **Skills & Technologies**: Programming languages, tools, frameworks
- **Education**: Degrees, certifications, courses
- **Projects**: Portfolio projects, achievements

### Technical Features
- **PDF.js Integration**: Client-side PDF processing
- **Smart Text Extraction**: Intelligent content categorization
- **Real-time Preview**: See extracted content before applying
- **JSON Export**: Download extracted data for manual use
- **Local Storage**: Temporary data storage between sessions

---

Built with ❤️ using modern web technologies
