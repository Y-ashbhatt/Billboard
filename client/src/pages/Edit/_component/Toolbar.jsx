import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import InterestsIcon from '@mui/icons-material/Interests';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideocamIcon from '@mui/icons-material/Videocam';
import QrCodeIcon from '@mui/icons-material/QrCode';
import CloudDownload from '@mui/icons-material/CloudDownload';
import Title from '@mui/icons-material/Title';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

const Toolbar = ({handleToolsClick}) => {
  return (
    <>
      <div
        className=" h-full w-24 px-2 bg-[#FFFFFF] border-r border-gray-400 left-0 top-0 box-border z-[99999] shadow-[1px_0px_0px_#CCC] pb-15"
      >
        <div className="text-center mt-2">
          <a href="#">
            <img src="/logo1.png" alt="Palleon Motion" />
          </a>
        </div>
        <div className="overflow-y-auto overflow-x-hidden  h-full">
          <div
            className="tool tool-active flex flex-col items-center relative py-2 cursor-pointer transition-all duration-200 ease-in-out text-[#555]"
            onClick={() => handleToolsClick('setting')}
          >
            <span className="text-[22px]"><TuneIcon/></span>
            <p className="mt-[2px] text-xs uppercase font-bold leading-[1.4] transition-all duration-200 ease-in-out">
              Settings
            </p>
          </div>
          <div
            className="tool flex flex-col items-center relative py-2 cursor-pointer transition-all duration-200 ease-in-out text-[#555]"
            onClick={() => handleToolsClick('template')}
          >
            <span className="text-[22px]"><PermMediaIcon/></span>
            <p className="mt-[2px] text-xs uppercase font-bold leading-[1.4] transition-all duration-200 ease-in-out">
              Templates
            </p>
          </div>
          <div
            className="tool flex flex-col items-center relative py-2 cursor-pointer transition-all duration-200 ease-in-out text-[#555]"
            onClick={() => handleToolsClick('upload')}
          >
            <span className="text-[22px]"><CloudDownload/></span>
            <p className="mt-[2px] text-xs uppercase font-bold leading-[1.4] transition-all duration-200 ease-in-out">
              Uploads
            </p>
          </div>
          <div
            className="tool flex flex-col items-center relative py-2 cursor-pointer transition-all duration-200 ease-in-out text-[#555]"
            onClick={() => handleToolsClick('text')}
          >
            <span className="text-[22px]"><Title/></span>
            <p className="mt-[2px] text-xs uppercase font-bold leading-[1.4] transition-all duration-200 ease-in-out">
              Text
            </p>
          </div>
          <div
            className="tool flex flex-col items-center relative py-2 cursor-pointer transition-all duration-200 ease-in-out text-[#555]"
            onClick={() => handleToolsClick('object')}
          >
            <span className="text-[22px]"><InterestsIcon/></span>
            <p className="mt-[2px] text-xs uppercase font-bold leading-[1.4] transition-all duration-200 ease-in-out">
              Objects
            </p>
          </div>
          <div
            className="tool flex flex-col items-center relative py-2 cursor-pointer transition-all duration-200 ease-in-out text-[#555]"
            onClick={() => handleToolsClick('image')}
          >
            <span className="text-[22px]"><AddPhotoAlternateIcon/></span>
            <p className="mt-[2px] text-xs uppercase font-bold leading-[1.4] transition-all duration-200 ease-in-out">
              Images
            </p>
          </div>
          <div
            className="tool flex flex-col items-center relative py-2 cursor-pointer transition-all duration-200 ease-in-out text-[#555]"
          >
            <span className="text-[22px]"><VideocamIcon/></span>
            <p className="mt-[2px] text-xs uppercase font-bold leading-[1.4] transition-all duration-200 ease-in-out">
              Videos
            </p>
          </div>
          <div
            className="tool flex flex-col items-center relative py-2 cursor-pointer transition-all duration-200 ease-in-out text-[#555]"
          >
            <span className="text-[22px]"><QueueMusicIcon/></span>
            <p className="mt-[2px] text-xs uppercase font-bold leading-[1.4] transition-all duration-200 ease-in-out">
              Audio
            </p>
          </div>
          <div
            className="tool flex flex-col items-center relative py-2 cursor-pointer transition-all duration-200 ease-in-out text-[#555]"
          >
            <span className="text-[22px]"><QrCodeIcon/></span>
            <p className="mt-[2px] text-xs uppercase font-bold leading-[1.4] transition-all duration-200 ease-in-out">
              QR CODE
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
