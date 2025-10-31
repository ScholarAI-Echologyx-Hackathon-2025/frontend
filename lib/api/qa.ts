import { getApiUrl } from "@/lib/config/api-config";

interface ChatRequestBody {
    message: string;
    sessionId: string;
    sessionTitle: string;
}

// POST /api/papers/{paperId}/chat
export async function postPaperChat(paperId: string, body: ChatRequestBody) {
    const url = getApiUrl(`/api/papers/${paperId}/chat`);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    
    if (!response.ok) {
        throw new Error(`Failed to send chat message: ${response.status}`);
    }
    
    return response.json();
} 