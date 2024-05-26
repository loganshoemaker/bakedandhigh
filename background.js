chrome.runtime.onInstalled.addListener(() => {
    console.log('ChatGPT Extension Installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
    console.log(sender);
    console.log(sendResponse);

    askChatGPT("What is 1+1");

    if (message === 'get-user-data') {
      sendResponse(user);
    }
});

const apiKey = 'PUT KEY HERE';

const askChatGPT = async () => {
    try {
      const response = fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
            model: "gpt-4",  // Or the model you are using, e.g., "gpt-3.5-turbo"
            messages: [{ role: "user", content: "What is 1+1" }]
            })
        }).then((response) => response.json())
        .then((data) => {
            console.log(data)
            const result = data.choices[0].message.content;
            console.log(result);
         });
    } catch (error) {
        console.log(error);
    }
}
