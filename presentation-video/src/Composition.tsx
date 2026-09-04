import React from 'react';
import { Audio, Sequence, staticFile } from 'remotion';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Prompt } from './scenes/Scene2Prompt';
import { Scene3Directives } from './scenes/Scene3Directives';
import { Scene4Showcase3D } from './scenes/Scene4Showcase3D';
import { Scene5Archetypes } from './scenes/Scene5Archetypes';
import { Scene6StudioDisplay } from './scenes/Scene6StudioDisplay';
import { Scene7OutroPunch } from './scenes/Scene7OutroPunch';

export const PromoVideo: React.FC = () => {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#FAFBFB',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Audio Track synced to 94 BPM */}
      <Audio src={staticFile('audio/soundtrack.wav')} />

      {/* Scene 1: Kinetic Typography Hook (0.00s - 3.83s) */}
      <Sequence from={0} durationInFrames={115}>
        <Scene1Hook />
      </Sequence>

      {/* Scene 2: Floating Input Box & Prompt Typing (3.83s - 6.38s) */}
      <Sequence from={115} durationInFrames={76}>
        <Scene2Prompt />
      </Sequence>

      {/* Scene 3: Directives Pipeline Checklist (6.38s - 11.49s) */}
      <Sequence from={191} durationInFrames={154}>
        <Scene3Directives />
      </Sequence>

      {/* Scene 4: 3D Platform Showcase (11.49s - 15.32s) */}
      <Sequence from={345} durationInFrames={115}>
        <Scene4Showcase3D />
      </Sequence>

      {/* Scene 5: 7 Intent-Driven Archetypes Engine (15.32s - 19.15s) */}
      <Sequence from={460} durationInFrames={115}>
        <Scene5Archetypes />
      </Sequence>

      {/* Scene 6: Apple Studio Display Benchmarks Mockup (19.15s - 23.00s) */}
      <Sequence from={575} durationInFrames={115}>
        <Scene6StudioDisplay />
      </Sequence>

      {/* Scene 7: Kinetic Outro Punch in every Beat (23.00s - 26.66s) */}
      <Sequence from={690} durationInFrames={110}>
        <Scene7OutroPunch />
      </Sequence>
    </div>
  );
};
