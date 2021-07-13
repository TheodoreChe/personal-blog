import React, { useEffect, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { Console, Hook, Unhook } from 'console-feed';
import styles from './FFmpegExample.module.scss';

const ffmpeg = createFFmpeg({
    log: true,
    corePath: 'https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js',
});

export const FFmpegExample = () => {
    const [logs, setLogs] = useState([]);
    const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        Hook(window.console, (log) => setLogs((currLogs) => [...currLogs, log]), false);
        return () => Unhook(window.console as any);
    }, []);

    const loadFFmpeg = async () => {
        await ffmpeg.load();
    };

    useEffect(() => {
        loadFFmpeg();
    }, []);

    const doTranscode = async ({ target: { files } }) => {
        const video = files[0];
        ffmpeg.setLogger(({ message }) => {
            console.log('message', message);
            // setLog([message]);
        });
        ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video));

        await ffmpeg.run('-i', 'test.mp4', '-filter_complex', '[0]reverse[r];[0][r]concat=n=2:v=1:a=0', 'out.mp4');
        const data = ffmpeg.FS('readFile', 'out.mp4');

        setVideoSrc(URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' })));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <label className={styles.file}>
                    <input type="file" onChange={doTranscode} />
                    Create Boomerang
                </label>
                <div className={styles.video}>{videoSrc && <video src={videoSrc} controls></video>}</div>
            </div>
            <div className={styles.background}>
                <div className={styles.inner}>
                    <Console logs={logs} variant="dark" />
                </div>
            </div>
        </div>
    );
};
