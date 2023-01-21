import librosa
import numpy as np
import soundfile as sf

SAMPLE_RATE = 22050
# Load the WAV file with your speech
filepath = './input.wav'
signal, sr = librosa.load(filepath, sr=None)

# Resample the audio signal
new_sr = SAMPLE_RATE  # Desired sample rate
signal = librosa.resample(signal, sr, new_sr)

# Extract the MFCCs from the speech signal
mfccs = librosa.feature.mfcc(signal, sr=sr)

# Generate a sine wave
fs = SAMPLE_RATE  # Sample rate
f = 440  # Frequency of the sine wave
t = np.linspace(0, 10, fs * 10)  # Time vector
sine_wave = np.sin(2 * np.pi * f * t)

# Normalize the sine wave
sine_wave = sine_wave / np.max(np.abs(sine_wave))

# print(len(sine_wave))
# print(len(signal))
ma = librosa.feature.inverse.mfcc_to_audio(mfccs);
print(len(ma))

# Modulate the sine wave with the MFCCs
# modulated_sine_wave = sine_wave * mfccs
# mfccs = mfccs.reshape(-1)
modulated_sine_wave = ma[:400000]

# Save the modulated sine wave as a new WAV file
output_filepath = './output.wav'
sf.write(output_filepath, modulated_sine_wave, SAMPLE_RATE)