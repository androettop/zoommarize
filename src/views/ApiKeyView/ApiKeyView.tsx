import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import { ButtonContainer, ViewContainer } from "./ApiKeyView.styles";
import Paragraph from "../../components/Paragraph/Paragraph";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useStorage } from "../../helpers/storage";
import Alert from "../../components/Alert/Alert";
import { isValidOpenAIApiKey } from "../../helpers/openai";
import useAlert from "../../hooks/useAlert";
import { useTranslation } from "react-i18next";

const ApiKeyView = () => {
    const { state, setState } = useStorage();
    const [apiKey, setApiKey] = useState(state.apiKey || "");
    const [alertVisible, setAlertVisible] = useAlert(false);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    const getStarted = () => {
        setLoading(true);

        isValidOpenAIApiKey(apiKey)
            .then((isValid) => {
                if (isValid) {
                    setState({ ...state, apiKey });
                } else {
                    setAlertVisible(true);
                }
            })
            .finally(() => setLoading(false));
    };

    return (
        <ViewContainer>
            <Logo size="large" />
            <Paragraph align="center">
                {t("beforeStartingConfigureYour")}
                <a
                    href="https://platform.openai.com/account/api-keys"
                    target="_blank"
                    rel="noreferrer"
                >
                    {t("openAIApiKey")}
                </a>
            </Paragraph>
            <Input
                value={apiKey}
                onChange={(text) => setApiKey(text)}
                placeholder={t("openAIApiKey")}
                type="password"
            />
            <ButtonContainer>
                <Button disabled={!apiKey || loading} onClick={getStarted}>
                    {loading ? t("verifying") + "..." : t("getStarted")}
                </Button>
            </ButtonContainer>
            <Alert text={t("apiKeyInvalidMessage")} visible={alertVisible} />
        </ViewContainer>
    );
};

export default ApiKeyView;
