package com.ai.simple_ai_web.serviceImp;

import com.ai.simple_ai_web.service.AiService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class AiServiceImp implements AiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String url;

    private final WebClient webClient;

    public AiServiceImp(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }

    @Override
    public String getAnswer(String question) {

        // 1. Construct the request payload
        // pattern for Pass the question to gemini: { "contents": [{ "parts":[{"text": "Explain how AI works"}] }] }
        Map<String, Object> requestBody = Map.of(
                "contents", new Object[]{
                        Map.of("parts", new Object[]{
                                        Map.of("text", question)
                                }
                        )
                }
        );

        // 2.Make API call
        String response = webClient.post()
                .uri(url+apiKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()// execute request, and expect response
                .bodyToMono(String.class)// after receive response-body, convert to mono which is a reactive-wrapper containing string
                .block();

        //3.return response
        return response;
    }
}
