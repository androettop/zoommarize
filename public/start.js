/* eslint-disable no-undef */

const getState = () => {
    const stateElem = document.getElementById("zoom-state");
    const stateb64 = stateElem?.innerText;
    if (stateb64) {
        return JSON.parse(atob(stateb64));
    }

    return {};
};

const currentMeetingId = crypto.randomUUID();

// Make a simple request:
setInterval(async () => {
    const state = getState();

    const currentMeeting = currentMeetingId;

    if (!currentMeeting) return;

    const extState = (await chrome.storage.local.get("state"))?.state || {};

    extState.meetings = extState.meetings || {};

    extState.meetings[currentMeeting] = extState.meetings[currentMeeting] || {
        meetingTopic: state?.meeting?.meetingTopic,
        createdAt: new Date().toISOString(),
        messages: {},
    };

    if (!extState.meetings[currentMeeting].meetingTopic) {
        extState.meetings[currentMeeting].meetingTopic =
            state?.meeting?.meetingTopic;
    }

    extState.meetings[currentMeeting].messages = {
        ...extState.meetings[currentMeeting].messages,
        ...state?.newLiveTranscription?.newLTMessage,
    };

    chrome.storage.local.set({ state: extState });
}, 1000);
