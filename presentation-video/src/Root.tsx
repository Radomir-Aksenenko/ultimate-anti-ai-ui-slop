import React from 'react';
import { Composition } from 'remotion';
import { PromoVideo } from './Composition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      </style>
      <Composition
        id="PromoVideo"
        component={PromoVideo}
        durationInFrames={800}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
