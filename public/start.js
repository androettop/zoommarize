/* eslint-disable no-undef */

const getState = () => {
    const stateElem = document.getElementById("zoom-state");
    const stateb64 = stateElem.innerText;
    return JSON.parse(atob(stateb64));
};

// Make a simple request:
setInterval(async () => {
    const state = getState();

    const currentMeeting = state?.meeting?.meetingId;

    if (!currentMeeting) return;

    const meetings = await chrome.storage.local.get("meetings")?.meetings || {};

    meetings[currentMeeting] = meetings[currentMeeting] || {
        meetingTopic: state?.meeting?.meetingTopic,
        messages: {},
    };

    meetings[currentMeeting].messages = {
        ...meetings[currentMeeting].messages,
        ...state?.newLiveTranscription?.newLTMessage,
    };
    chrome.storage.local.set({ meetings });
}, 1000);
