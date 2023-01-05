import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';

final playlist = ConcatenatingAudioSource(
  // Start loading next item just before reaching it
  useLazyPreparation: true,
  // Customise the shuffle algorithm
  shuffleOrder: DefaultShuffleOrder(),
  // Specify the playlist items
  children: [
    AudioSource.uri(Uri.parse('https://caferoman.github.io/assets/track1.mp3')),
    AudioSource.uri(Uri.parse('https://caferoman.github.io/assets/track2.mp3')),
    AudioSource.uri(Uri.parse('https://caferoman.github.io/assets/track3.mp3')),
  ],
);

class PageManager {
  final progressNotifier = ValueNotifier<ProgressBarState>(
    ProgressBarState(
      current: Duration.zero,
      buffered: Duration.zero,
      total: Duration.zero,
    ),
  );
  final buttonNotifier = ValueNotifier<ButtonState>(ButtonState.paused);

  late AudioPlayer _audioPlayer;
  PageManager() {
    _init();
  }

  void _init() async {
    _audioPlayer = AudioPlayer();
    // Load and play the playlist
    await _audioPlayer.setAudioSource(playlist,
        initialIndex: 0, initialPosition: Duration.zero);
    //await _audioPlayer.seekToNext(); // Skip to the next item
    //await _audioPlayer.seekToPrevious(); // Skip to the previous item
    //await _audioPlayer.seek(Duration.zero,
    await _audioPlayer
        .setLoopMode(LoopMode.all); // Set playlist to loop (off|all|one)
    await _audioPlayer.setShuffleModeEnabled(true);

    _audioPlayer.playerStateStream.listen((playerState) {
      final isPlaying = playerState.playing;
      final processingState = playerState.processingState;
      if (processingState == ProcessingState.loading ||
          processingState == ProcessingState.buffering) {
        buttonNotifier.value = ButtonState.loading;
      } else if (!isPlaying) {
        buttonNotifier.value = ButtonState.paused;
      } else if (processingState != ProcessingState.completed) {
        buttonNotifier.value = ButtonState.playing;
      } else {
        _audioPlayer.seek(Duration.zero);
        _audioPlayer.pause();
      }
    });

    _audioPlayer.positionStream.listen((position) {
      final oldState = progressNotifier.value;
      progressNotifier.value = ProgressBarState(
        current: position,
        buffered: oldState.buffered,
        total: oldState.total,
      );
    });

    _audioPlayer.bufferedPositionStream.listen((bufferedPosition) {
      final oldState = progressNotifier.value;
      progressNotifier.value = ProgressBarState(
        current: oldState.current,
        buffered: bufferedPosition,
        total: oldState.total,
      );
    });

    _audioPlayer.durationStream.listen((totalDuration) {
      final oldState = progressNotifier.value;
      progressNotifier.value = ProgressBarState(
        current: oldState.current,
        buffered: oldState.buffered,
        total: totalDuration ?? Duration.zero,
      );
    });
  }

  void play() {
    _audioPlayer.play();
  }

  void pause() {
    _audioPlayer.pause();
  }

  void seek(Duration position) {
    _audioPlayer.seek(position);
  }

  void dispose() {
    _audioPlayer.dispose();
  }
}

class ProgressBarState {
  ProgressBarState({
    required this.current,
    required this.buffered,
    required this.total,
  });
  final Duration current;
  final Duration buffered;
  final Duration total;
}

enum ButtonState { paused, playing, loading }
