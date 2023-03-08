import { JitsiMeeting } from "@jitsi/react-sdk";
import { useSelector } from "react-redux";

export const JitsiConfig = () => {

  const data = useSelector(
    (state) => state.login.data
  );
  return (
    <JitsiMeeting
      // domain = { YOUR_DOMAIN }
      roomName="Just a random name for a room"
      configOverwrite={{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      }}
      userInfo={{
        displayName: data.name,
      }}
      onApiReady={(externalApi) => {
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = "400px";
      }}
    />
  );
};
