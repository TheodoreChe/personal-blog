import React, { useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({
    log: true,
    corePath: 'https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js',
});

export const FFmpegProcessing = () => {
    const [videoSrc, setVideoSrc] = useState('');

    const loadFFmpeg = async () => {
        await ffmpeg.load();
    };

    useEffect(() => {
        loadFFmpeg();
    }, []);

    const doTranscode = async ({ target: { files } }) => {
        const video = files[0];
        ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video));
        await ffmpeg.run('-i', 'test.mp4', '-filter_complex', '[0]reverse[r];[0][r]concat=n=2:v=1:a=0', 'out.mp4');
        const data = ffmpeg.FS('readFile', 'out.mp4');
        // setVideoSrc(URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' })));

        // await ffmpeg.run('-i', 'test.avi', 'test.mp4');
        // setMessage('Complete transcoding');
        // const data = ffmpeg.FS('readFile', 'test.mp4');
        setVideoSrc(URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' })));
    };

    if (!videoSrc) {
        return (
            <div>
                <input type="file" onChange={doTranscode} />
            </div>
        );
    }
    return (
        <div className="App">
            <video src={videoSrc} controls></video>
            <br />
        </div>
    );
};
