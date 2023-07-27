export async function isValidOpenAIApiKey(apiKey: string): Promise<boolean> {
    if (!isValidApiKeyFormat(apiKey)) {
        return false;
    }

    return await checkApiKeyAuthorizationAsync(apiKey);
}

function isValidApiKeyFormat(apiKey: string): boolean {
    return /^sk-[a-zA-Z0-9]{32,}$/.test(apiKey);
}

async function checkApiKeyAuthorizationAsync(apiKey: string): Promise<boolean> {
    const headers = { Authorization: `Bearer ${apiKey}` };
    try {
        const response = await fetch("https://api.openai.com/v1/engines", {
            headers,
        });
        return response.ok;
    } catch (error) {
        return false;
    }
}
