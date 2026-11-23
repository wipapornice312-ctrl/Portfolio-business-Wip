require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const LANGUAGE_INSTRUCTIONS = {
  Deutsch: 'Antworte vollständig und ausschließlich auf Deutsch.',
  English: 'Respond completely and exclusively in English.',
  'ไทย': 'ตอบกลับทั้งหมดเป็นภาษาไทยเท่านั้น ใช้ภาษาที่เป็นธรรมชาติและอ่านง่าย',
  Français: 'Réponds entièrement et exclusivement en français.',
  '中文': '请完全且仅使用简体中文回答。',
  Italiano: 'Rispondi completamente e esclusivamente in italiano.',
  Español: 'Responde completa y exclusivamente en español.',
  'العربية': 'أجب بالكامل وباللغة العربية فقط.',
  '日本語': 'すべて日本語のみで回答してください。',
  'Русский': 'Отвечай полностью и исключительно на русском языке.',
  Português: 'Responda completa e exclusivamente em português.',
  Nederlands: 'Antwoord volledig en uitsluitend in het Nederlands.',
  Türkçe: 'Yanıtı tamamen ve yalnızca Türkçe olarak ver.',
};

function getLanguageInstruction(language) {
  if (!language || language === 'Weitere Sprachen') {
    return 'Antworte vollständig und ausschließlich auf Deutsch.';
  }
  return (
    LANGUAGE_INSTRUCTIONS[language] ||
    `Antworte vollständig und ausschließlich in dieser Sprache: ${language}.`
  );
}

app.post('/rezept', async (req, res) => {
  try {
    const {
      zutaten,
      mahlzeit,
      schaerfe,
      geschmack,
      vegan,
      zubereitungszeit,
      kalorien,
      allergene,
      language,
      sprache,
    } = req.body;

    const chosenLanguage = language || sprache;
    const languageInstruction = getLanguageInstruction(chosenLanguage);

    const prompt = `${languageInstruction}

Du bist ein kreativer Kochassistent. Erstelle ein leckeres Rezept basierend auf diesen Angaben:
- Zutaten: ${zutaten || 'beliebig'}
- Mahlzeit: ${mahlzeit || 'egal'}
- Schärfe: ${schaerfe || 'egal'}
- Geschmack: ${geschmack || 'egal'}
- Vegan/Ernährung: ${vegan || 'egal'}
- Zubereitungszeit: ${zubereitungszeit ? zubereitungszeit + ' Minuten' : 'egal'}
- Kalorien (pro Portion): ${kalorien || 'egal'}
- Allergene (unbedingt vermeiden!): ${allergene || 'keine'}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash-lite',
      contents: prompt,
    });

    res.json({ recipe: response.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fehler bei der Verbindung zu Gemini.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});