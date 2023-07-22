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
    return (
        <div>
            <ApiKey />
        </div>
    );
}

export default App;
