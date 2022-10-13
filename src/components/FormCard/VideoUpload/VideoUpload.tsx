import { FC } from 'react';

import { action } from '../../../features/CreatingApprenticeship/Controller';

import UploadedVideo from './UploadedVideo/UploadedVideo';
import UploadIcon from './UploadIcon/UploadIcon';

interface VideoUploadProps {
    dispatch: (action: action) => void;
    companyVideo: File | null;
}

const VideoUpload: FC<VideoUploadProps> = ({ dispatch, companyVideo }) => {
    const clickUploadVideo = () => {
        document.getElementById('uploadVideo')?.click();
    };

    const handleUploadingVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'companyVideo',
            payload: e.target.files?.[0] as File
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
            {companyVideo && (
                <UploadedVideo
                    fileName={companyVideo?.name.slice(0, 20)}
                    dispatch={dispatch}
                />
            )}
        </div>
    );
};

export default VideoUpload;
