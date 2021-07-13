import React from 'react';
import dynamic from 'next/dynamic';

const FFmpegProcessing = dynamic(() => import('modules/FFmpegExample'), {
    ssr: false,
});

const BoomerangVideoMaker = () => (
    <>
        <FFmpegProcessing />
    </>
);

export { BoomerangVideoMaker as default };
