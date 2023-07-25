import Card from "./components/Card/Card";
import { globalStyles } from "./helpers/globalStyles";
import { useStorage } from "./helpers/storage";
import ApiKey from "./views/ApiKey/ApiKey";

function App() {
    globalStyles();
    const { state, setState } = useStorage();

    return (
        <div>
            {!state.apiKey ? (
                <ApiKey />
            ) : (
                <>
                    <h1
                        onClick={() => {
                            setState({ ...state, apiKey: undefined });
                        }}
                    >
                        OpenAI Playground
                    </h1>
                    <Card title="aldlsadlsafadmgeqg asdfmsalfmas" date={"2021-10-20"}/>
                </>
            )}
        </div>
    );
}

export default App;
