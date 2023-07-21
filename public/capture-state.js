const getZoomState = () => {
    try {
        const appElem = document.querySelector(".meeting-app");
        if (!appElem) {
            throw new Error("No app element found");
        }
        const reactInternalInstance = Object.keys(appElem).find((key) =>
            key.startsWith("__reactInternalInstance"),
        );

        if (!reactInternalInstance) {
            throw new Error("No react internal instance found");
        }

        const fullState =
            appElem[
                reactInternalInstance
            ]?.return.return.memoizedProps.value.store.getState();

        const state = {
            meeting: {
                meetingTopic: fullState?.meeting?.meetingTopic,
                meetingId: fullState?.meeting.meetingId,
            },
            newLiveTranscription: {
                newLTSubscribed:
                    fullState?.newLiveTranscription?.newLTSubscribed,
                newLTMessage: fullState?.newLiveTranscription.newLTMessage,
            },
        };
        return state;
    } catch (e) {
        return {};
    }
};

setInterval(async () => {
    const state = getZoomState();
    // put the state as string in a div with id zoom-state an encode it in base64
    const stateDiv = document.getElementById("zoom-state") || document.createElement("div");
    stateDiv.id = "zoom-state";
    stateDiv.innerText = btoa(JSON.stringify(state));
    stateDiv.style.display = "none";
    document.body.appendChild(stateDiv);
}, 1000);
