import { FC, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import './filePond.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Register the plugins

const VideoUpload: FC = ({ video, setVideo }) => {
    return (
        <div className="text-wrapper relative flex flex-row items-center p-0 h-[212px] flex-none order-1 self-stretch flex-grow-0 gap-[24px] w-[722px] ">
            <FilePond
                files={video}
                onupdatefiles={setVideo}
                allowMultiple={true}
                maxFiles={1}
                server="/api"
                name="files"
                labelIdle="Drag n drop to upload your video"
                className="filepond--item"
            />
        </div>
    );
};

export default VideoUpload;
