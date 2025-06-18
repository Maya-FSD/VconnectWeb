import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";

const recordingFile = `${FileSystem.documentDirectory}recording.wav`;

export const requestPermission = async () => {
  const { status } = await Audio.requestPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("Permission Denied", "Microphone access is required to record audio.");
    return false;
  }
  return true;
};

export const startRecording = async (setRecording, setIsRecording, setTimer) => {
  try {
    // Request permissions first
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Microphone access is required to record audio.");
      return;
    }

    // Ensure proper audio mode setup (Correct Enum Usage)
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
      interruptionModeIOS:1, // If error occurs change it to 1
      shouldDuckAndroid: true,
      interruptionModeAndroid: 1, // If error occurs change it to 1
    });

    // Initialize and start recording
    const newRecording = new Audio.Recording();
    await newRecording.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
    await newRecording.startAsync();

    // Update state
    setRecording(newRecording);
    setIsRecording(true);
    setTimer(60); // Reset timer
  } catch (error) {
    console.error("Recording error:", error);
    Alert.alert("Error", "Failed to start recording. Please try again.");
  }
};

export const stopRecording = async (recording, setIsRecording, setTimer, uploadAudio) => {
  try {
    if (!recording) return;
    setIsRecording(false);
    setTimer(60);

    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording saved at:", uri);

    await FileSystem.moveAsync({ from: uri, to: recordingFile });

    uploadAudio(recordingFile);
  } catch (error) {
    console.error("Stop recording error:", error);
    Alert.alert("Error", "Failed to stop recording.");
  }
};

export const uploadAudio = async (fileUri) => {
  const formData = new FormData();
  formData.append("file", {
    uri: fileUri,
    type: "audio/wav",
    name: "recording.wav",
  });

  try {
    const response = await fetch("https://your-api-endpoint.com/upload", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    const jsonResponse = await response.json();
    console.log("Upload success:", jsonResponse);
    Alert.alert("Upload Success", "Your audio file has been uploaded!");
  } catch (error) {
    console.error("Upload error:", error);
    Alert.alert("Upload Failed", "Something went wrong.");
  }
};
