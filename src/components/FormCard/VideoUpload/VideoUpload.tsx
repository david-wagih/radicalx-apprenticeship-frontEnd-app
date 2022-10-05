import { FC, useRef, useState } from 'react';

import UploadedVideo from './UploadedVideo/UploadedVideo';
import UploadIcon from './UploadIcon/UploadIcon';

interface VideoUploadProps {
    dispatch: (action: { type: string; payload: File | null }) => void;
    CompanyVideo: File | null;
}

const VideoUpload: FC<VideoUploadProps> = ({ dispatch, CompanyVideo }) => {
    const clickUploadVideo = () => {
        document.getElementById('uploadVideo')?.click();
    };

    const handleUploadingVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CompanyVideo',
            payload: e.target.files?.[0] || null
        });
    };
    return (
        <div>
            <input
                type="file"
                id="uploadVideo"
                hidden
                accept="video/*"
                size={50000000}
                onChange={handleUploadingVideo}
            />
            <UploadIcon clickUploadVideo={clickUploadVideo} />
            {CompanyVideo && (
                <UploadedVideo
                    fileName={CompanyVideo?.name.slice(0, 20)}
                    dispatch={dispatch}
                />
            )}
        </div>
    );
};

export default VideoUpload;
