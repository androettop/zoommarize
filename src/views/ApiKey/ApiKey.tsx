import React from "react";
import Logo from "../../components/Logo/Logo";
import { ViewContainer } from "./ApiKey.styles";
import Paragraph from "../../components/Paragraph/Paragraph";

const ApiKey = () => {
    return (
        <ViewContainer>
            <Logo size="large" />
            <Paragraph align="center">
                Before starting configure
                <br /> your{" "}
                <a href="https://platform.openai.com/account/api-keys">
                    OpenAI api key
                </a>
            </Paragraph>
        </ViewContainer>
    );
};

export default ApiKey;
