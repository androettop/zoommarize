import { useStorage } from "./helpers/storage";
import { globalCss } from "./theme";
import ApiKey from "./views/ApiKey/ApiKey";

const globalStyles = globalCss({
    body: {
        margin: 0,
        fontFamily: "$default",
        width: 300,
        height: 300,
        backgroundColor: "$dark",
        outline: "1px solid $light",
    },
});

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
                </>
            )}
        </div>
    );
}

export default App;
