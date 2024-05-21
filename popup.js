document.getElementById('send').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;
    const apiKey = 'replace key';  // Replace with your OpenAI API key
  
    const responseElement = document.getElementById('response');
    responseElement.textContent = 'Loading...';
  
    responseElement.textContent = "Sending request to ChatGPT!";

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4",  // Or the model you are using, e.g., "gpt-3.5-turbo"
          messages: [{ role: "user", content: prompt }]
        })
      });
      
      const data = await response.json();
      responseElement.textContent = data.choices[0].message.content;
    } catch (error) {
      responseElement.textContent = 'Error: ' + error.message;
    }
  });
  