/* eslint-disable no-undef */

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
        return null;
    }
};

// Make a simple request:
setInterval(async () => {
    const meetings = await chrome.storage.local.get("meetings");
    const state = getZoomState();
    const currentMeeting = state?.meeting?.meetingId;

    if (!currentMeeting) return;

    meetings[currentMeeting] = meetings[currentMeeting] || {
        meetingTopic: state?.meeting?.meetingTopic,
        messages: {},
    };

    meetings[currentMeeting].messages = {
        ...meetings[currentMeeting].messages,
        ...state?.newLiveTranscription?.newLTMessage,
    };

    chrome.storage.local.set({ meetings: meetings });
}, 5000);
