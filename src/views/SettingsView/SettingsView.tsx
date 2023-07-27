import { useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import { useStorage } from "../../helpers/storage";
import { ButtonContainer, SettingsContainer } from "./SettingsView.styles";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import useAlert from "../../hooks/useAlert";
import { isValidOpenAIApiKey } from "../../helpers/openai";

const SettingsView = () => {
    const { state, setState } = useStorage();
    const navigate = useNavigate();
    const [apiKey, setApiKey] = useState(state.apiKey || "");
    const [alertVisible, setAlertVisible] = useAlert(false);
    const [loading, setLoading] = useState(false);

    const saveApiKey = () => {
        setLoading(true);

        isValidOpenAIApiKey(apiKey)
            .then((isValid) => {
                if (isValid) {
                    setState({ ...state, apiKey });
                    navigate(-1);
                } else {
                    setAlertVisible(true);
                }
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            <Header action="back" />
            <SettingsContainer>
                <Title align="center">OpenAI api key</Title>
                <Input
                    value={apiKey}
                    onChange={(text) => setApiKey(text)}
                    placeholder="OpenAI api key"
                    type="password"
                />
                <Paragraph align="center">
                    You can get your api key from the{" "}
                    <a
                        href="https://platform.openai.com/account/api-keys"
                        target="_blank"
                        rel="noreferrer"
                    >
                        OpenAI web site
                    </a>
                </Paragraph>
                <ButtonContainer>
                    <Button disabled={!apiKey || loading} onClick={saveApiKey}>
                        {loading ? "Verifying..." : "Save api key"}
                    </Button>
                </ButtonContainer>
                <Alert
                    text="You need to enter an api key to continue."
                    visible={alertVisible}
                />
            </SettingsContainer>
        </>
    );
};

export default SettingsView;
