import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import { ButtonContainer, ViewContainer } from "./ApiKeyView.styles";
import Paragraph from "../../components/Paragraph/Paragraph";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useStorage } from "../../helpers/storage";
import Alert from "../../components/Alert/Alert";

const ApiKeyView = () => {
    const { state, setState } = useStorage();
    const [apiKey, setApiKey] = useState(state.apiKey || "");

    const getStarted = () => {
        setState({ ...state, apiKey });
    };

    return (
        <ViewContainer>
            <Logo size="large" />
            <Paragraph align="center">
                Before starting configure
                <br /> your{" "}
                <a
                    href="https://platform.openai.com/account/api-keys"
                    target="_blank" rel="noreferrer"
                >
                    OpenAI api key
                </a>
            </Paragraph>
            <Input
                value={apiKey}
                onChange={(text) => setApiKey(text)}
                placeholder="Api key"
            />
            <ButtonContainer>
                <Button disabled={!apiKey} onClick={getStarted}>
                    Get started
                </Button>
            </ButtonContainer>
            <Alert text="It seems that the api key is not valid, please check that it is correct" visible={true}/>
        </ViewContainer>
    );
};

export default ApiKeyView;
