import { FC, useRef, useState } from 'react';

import UploadedVideo from './UploadIcon/UploadedVideo';
import UploadIcon from './UploadIcon/UploadIcon';

interface VideoUploadProps {
    dispatch: (action: { type: string; payload: File | null }) => void;
}
const VideoUpload: FC<VideoUploadProps> = ({ dispatch }) => {
    const [video, setVideo] = useState<File | null>(null);
    const clickUploadVideo = () => {
        document.getElementById('uploadVideo')?.click();
    };

    const handleUploadingVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setVideo(file);
        dispatch({ type: 'CompanyVideo', payload: video });
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
            {video !== null && <UploadedVideo />}
        </div>
    );
};

export default VideoUpload;
