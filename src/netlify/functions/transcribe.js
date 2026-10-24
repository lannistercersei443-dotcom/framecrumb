import fetch from 'node-fetch';
import FormData from 'form-data';

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: 'OpenAI API key not configured on server.' }) };
    }

    // Parse incoming base64 file data from frontend
    const body = JSON.parse(event.body);
    const fileBuffer = Buffer.from(body.fileData, 'base64');
    const fileName = body.fileName || 'audio.mp3';

    // Build form data for OpenAI Whisper API
    const formData = new FormData();
    formData.append('file', fileBuffer, { filename: fileName });
    formData.append('model', 'whisper-1');
    formData.append('response_format', 'verbose_json');

    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        ...formData.getHeaders()
      },
      body: formData
    });

    const data = await response.json();

    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: data.error?.message || 'Transcription failed' }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ text: data.text, segments: data.segments || [] })
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
