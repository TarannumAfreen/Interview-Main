const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const cors = require("cors");
const path = require("path");
const router = express.Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI("AIzaSyB-GRBEsB4XCpUaJTt1-lQwGYZvZIyRV-M");

const app = express();
app.use(cors()); // Enable CORS for cross-origin requests

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Upload endpoint
router.post("/upload", upload.single("resume"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Read the PDF file
  const pdfPath = path.join(__dirname, req.file.path);
  const dataBuffer = require("fs").readFileSync(pdfPath);

  try {
    const pdfData = await pdfParse(dataBuffer);
    const extractedText = pdfData.text;

    // Extract the 'Skills' section
    const skillsSection = extractSkills(extractedText);

    // Generate interview questions based on extracted skills
    const questions = await generateInterviewQuestions(skillsSection);

    // Send skills and questions as response
    res.json({ skills: skillsSection, questions });
  } catch (error) {
    res.status(500).json({ error: "Error parsing PDF" });
  }
});

function extractSkills(text) {
  // Keywords that indicate the beginning of the skills section
  const skillsKeywords = [
    "Skills",
    "Technical Skills",
    "Key Skills",
    "Core Competencies",
    "Areas of Expertise",
  ];
  // Keywords that indicate the beginning of another section (to stop extracting)
  const stopKeywords = [
    "CERTIFICATION",
    "EXPERIENCE",
    "PROJECTS",
    "EDUCATION",
    "OBJECTIVE",
    "CONTACT",
    "LinkedIn",
    "Phone",
    "Email",
    "Address",
    "GitHub",
  ];

  // Find the start of the 'Skills' section
  let skillsStart = -1;
  skillsKeywords.some((keyword) => {
    skillsStart = text.search(new RegExp(`\\b${keyword}\\b`, "i")); // Search for "Skills" with word boundaries
    return skillsStart !== -1;
  });

  if (skillsStart === -1) {
    return "Skills section not found";
  }

  // Find the end of the 'Skills' section
  let skillsEnd = text.length;
  stopKeywords.some((keyword) => {
    const stopPosition = text.search(new RegExp(`\\b${keyword}\\b`, "i")); // Search for next section
    if (stopPosition > skillsStart) {
      skillsEnd = Math.min(skillsEnd, stopPosition);
    }
  });

  // Extract and clean the skills section
  const skillsText = text.slice(skillsStart, skillsEnd).trim();

  // Clean up the extracted skills
  return cleanSkillsText(skillsText);
}

// Function to clean the extracted skills section
function cleanSkillsText(skillsText) {
  // Remove headers and clean the text
  const cleanedText = skillsText
    .replace(
      /Skills|Technical Skills|Key Skills|Core Competencies|Areas of Expertise/gi,
      ""
    ) // Remove headers
    .replace(
      /([0-9]{4}-[0-9]{4})|Bachelor of Technology|CGPA|[0-9]+\.[0-9]{2}/g,
      ""
    ) // Remove education-related keywords
    .replace(/\s{2,}/g, " ") // Replace multiple spaces with a single space
    .replace(/\n/g, " ") // Replace line breaks with spaces
    .replace(/[()]/g, "") // Remove parentheses
    .trim();

  // Handle inline formats and bullet points
  const skillsArray = cleanedText
    .split(/[\s•,]+/) // Split by spaces, bullet points, or commas
    .map((skill) => skill.trim()) // Trim each skill
    .filter((skill) => skill && skill.length > 1); // Remove empty strings or very short strings

  return skillsArray.length > 0 ? skillsArray : "No skills found";
}

async function generateInterviewQuestions(skills) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const questions = {};

  for (const skill of skills) {
    const prompt = `Please generate a comprehensive set of at least twenty interview questions for the skill: "${skill}". The questions should cater to three levels of expertise: beginner, intermediate, and advanced. For each question, provide a well-structured and concise answer. Additionally, include practical tips for answering each question effectively. 

      
        
        Ensure that the language is clear and easy to understand, and that the questions cover a wide range of scenarios relevant to the skill.`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response.text();

      // Split response into questions and answers and structure the output
      const questionAnswerPairs = response.split("\n\n").map((pair) => {
        const [question, answer] = pair.split("\nAnswer:");
        return { question: question.trim(), answer: answer };
      });

      questions[skill] = questionAnswerPairs;
    } catch (error) {
      console.error(`Error generating questions for ${skill}:`, error);
    }
  }

  return questions;
}

module.exports = router;
