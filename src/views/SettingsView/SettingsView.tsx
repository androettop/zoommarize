import { useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import { useStorage } from "../../helpers/storage";
import { ButtonContainer, SettingsContainer } from "./SettingsView.styles";

const SettingsView = () => {
    const { state, setState } = useStorage();
    const [apiKey, setApiKey] = useState(state.apiKey || "");

    const saveApiKey = () => {
        setState({ ...state, apiKey });
    };

    return (
        <>
            <Header action="back" />
            <SettingsContainer>
                <Title align="center">OpenAI api key</Title>
                <Input value={apiKey} onChange={(text) => setApiKey(text)} />
                <Paragraph align="center">
                    You can get your api key from the{" "}
                    <a href="https://platform.openai.com/account/api-keys">
                        OpenAI web site
                    </a>
                </Paragraph>
                <ButtonContainer>
                    <Button onClick={saveApiKey}>Save api key</Button>
                </ButtonContainer>
            </SettingsContainer>
        </>
    );
};

export default SettingsView;
