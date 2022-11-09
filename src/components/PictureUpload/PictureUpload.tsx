import { FC, useState } from 'react';

interface PicProps {
    setLogo: (logo: File | null) => void;
}
const PictureUpload: FC<PicProps> = ({ setLogo }) => {
    const [file, setFile] = useState<File | null>(null);

    const clickUploadLogo = () => {
        document.getElementById('#uploadLogo')?.click();
    };

    const handleUploadingLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFile(file || null);
        setLogo(file || null);
    };

    return (
        <div className="logo-title width-[ 722px] isolate order-1 flex h-20 flex-none flex-grow-0 flex-row items-center gap-[24px] self-stretch p-0">
            <input
                id="#uploadLogo"
                type="file"
                hidden
                accept="image/*"
                size={2000000}
                onChange={handleUploadingLogo}
            />
            <button
                className="uploading-area"
                onClick={clickUploadLogo}
                type="button"
            >
                <div className="z-0 order-none h-20 w-20 flex-none flex-grow-0 rounded-[20px] bg-gray-300">
                    {file && (
                        <img
                            src={URL.createObjectURL(file)}
                            alt="logo"
                            className="h-20 w-20 rounded-[20px]"
                        />
                    )}
                </div>
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[125px] left-[90px] z-[2] order-2 flex h-6 w-6 flex-none flex-grow-0 flex-row items-start gap-[10px] rounded-[10px] bg-blue-600 p-1"
                >
                    <rect width="28" height="28" rx="10" fill="#2153FF" />
                    <path
                        d="M11.5535 14.7687L11.5534 14.7687L11.559 14.7756C11.9018 15.1963 12.388 15.5326 12.9581 15.4778C13.5179 15.4309 13.9455 15.0365 14.2167 14.5499L14.2173 14.5488L15.4773 12.2755L15.4775 12.2752C15.9479 11.4249 16.4941 11.1186 16.9822 11.1392C17.4598 11.1659 17.9726 11.527 18.3608 12.4242C18.3609 12.4244 18.361 12.4247 18.3611 12.4249L20.447 17.2966L20.4473 17.2972C20.5366 17.5051 20.595 17.7213 20.6231 17.9397C20.5931 17.7291 20.5343 17.5196 20.4459 17.3155C20.4458 17.3151 20.4456 17.3147 20.4454 17.3143L18.3606 12.4453C18.3604 12.4449 18.3603 12.4445 18.3601 12.4441C18.2171 12.1058 18.0356 11.807 17.8189 11.5825C17.6072 11.3633 17.322 11.1759 16.9789 11.1604C16.641 11.1411 16.3394 11.3081 16.1145 11.4967C15.8773 11.6957 15.6599 11.9717 15.4779 12.2939L15.476 12.2974L14.2166 14.5696C14.2165 14.5698 14.2164 14.57 14.2163 14.5702C13.8932 15.1491 13.4191 15.4587 12.9572 15.5016C12.4947 15.538 11.9747 15.3168 11.5586 14.796L11.4152 14.6134C11.0804 14.1762 10.63 13.8665 10.1067 13.8665C10.1055 13.8665 10.104 13.8664 10.1023 13.8664C10.0817 13.8663 10.0209 13.8659 9.94935 13.8787C9.38682 13.9474 8.97303 14.3833 8.72083 14.8801L8.72081 14.8801L8.71919 14.8834L7.5731 17.1822C7.53619 17.2553 7.50329 17.3297 7.47437 17.4051C7.5036 17.3277 7.53692 17.2512 7.57433 17.1758C7.5744 17.1757 7.57446 17.1755 7.57452 17.1754L8.72054 14.8767C8.72058 14.8766 8.72063 14.8766 8.72067 14.8765C9.03754 14.2429 9.50917 13.9142 9.97413 13.8635C10.4361 13.8132 10.9671 14.0363 11.4086 14.5843L11.5535 14.7687Z"
                        fill="#292D32"
                        stroke="white"
                    />
                    <path
                        d="M10.6467 7.3335C9.54604 7.3335 8.65192 8.2244 8.64669 9.32381C8.65193 8.22544 9.54709 7.3335 10.6467 7.3335ZM10.6467 7.3335C11.7505 7.3335 12.6467 8.22964 12.6467 9.3335M10.6467 7.3335C11.7495 7.3335 12.6467 8.23069 12.6467 9.3335M12.6467 9.3335C12.6467 10.4374 11.7505 11.3335 10.6467 11.3335C11.7495 11.3335 12.6467 10.4363 12.6467 9.3335Z"
                        fill="#292D32"
                        stroke="white"
                    />
                </svg>
            </button>
        </div>
    );
};

export default PictureUpload;
