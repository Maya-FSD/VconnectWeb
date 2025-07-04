import React, { useState, useRef } from 'react';
import ApiHelper from './apiHelper';

const audioRecordHelper = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
      setAudioBlob(audioBlob);
      audioChunks.current = [];
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const uploadAudio = async () => {
    if (!audioBlob) return alert('No audio to upload.');

    const formData = new FormData();
    formData.append('file', new File([audioBlob], 'recording.webm', { type: 'audio/webm' }));
    formData.append('codeId', 'your-code-id');
    formData.append('branchId', 'your-branch-id');

    try {
      const response = await ApiHelper.post('vconnect/audio/upload', formData, {
        'Content-Type': 'multipart/form-data'
      });
      alert('Upload success!');
    } catch (err) {
      console.error('Upload failed', err);
      alert('Upload failed');
    }
  };

  return (
    <div>
      <h3>Audio Recorder</h3>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>

      {audioBlob && (
        <>
          <audio controls src={URL.createObjectURL(audioBlob)} />
          <button onClick={uploadAudio}>Upload Audio</button>
        </>
      )}
    </div>
  );
};

export default audioRecordHelper;
