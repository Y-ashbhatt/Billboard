import React, { useState } from 'react';
import { WhatsApp, Email, Link, Facebook, FileCopy, Code } from '@mui/icons-material';

const ImageActions = () => {
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [customHtml, setCustomHtml] = useState('');
    const [embedModalOpen, setEmbedModalOpen] = useState(false);
    const imageUrl = '/billboardimg.jpeg';
    const imageTitle = 'DemoBillboard'
    const embedCode = `<iframe width="560" height="315" src="${imageUrl.replace(
        "watch?v=",
        "embed/"
    )}" title="${imageTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

    const handleWhatsapp = () => {
        if (whatsappNumber) {
            window.open(`https://wa.me/${whatsappNumber}`, '_blank');
        }
    };

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(imageUrl);
        alert('Image URL copied to clipboard!');
    };

    const handleCopyEmbedCode = () => {
        const embedCode = `<iframe src="${imageUrl}" width="600" height="400" frameborder="0" allowfullscreen></iframe>`;
        navigator.clipboard.writeText(embedCode);
        alert('Embed code copied to clipboard!');
    };

    return (
        <>

            <h1 className='text-2xl text-center'>Share</h1>
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-10 p-6 space-y-6">
                {/* Copy Image URL */}
                <div className="flex items-center justify-between border border-gray-300 p-2 rounded-md">
                    <span className="truncate font-['system-ui']">{imageUrl}</span>
                    <button
                        onClick={handleCopyUrl}
                        className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        <FileCopy className="text-white" />
                        <span>Copy URL</span>
                    </button>
                </div>

                {/* Actions */}
                <div className="space-y-10">
                    <div className="flex items-center space-x-3">
                        <WhatsApp className="text-green-500" />
                        <input
                            type="text"
                            placeholder="Enter WhatsApp Number"
                            value={whatsappNumber}
                            onChange={(e) => setWhatsappNumber(e.target.value)}
                            className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                        />
                        <button onClick={handleWhatsapp} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"   >
                            Open WhatsApp
                        </button>
                    </div>

                    {/* Custom HTML Action */}
                    <div className="flex items-center space-x-3">
                        <Link className="text-blue-500" />
                        <textarea
                            value={customHtml}
                            onChange={(e) => setCustomHtml(e.target.value)}
                            placeholder="Enter custom HTML here"
                            className="w-full h-24 border border-gray-300 rounded-md p-4 focus:outline-none"
                        />
                    </div>

                    {/* Social Share Actions */}
                    <div className="flex justify-evenly items-center gap-4 ">

                        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setEmbedModalOpen(true)}>
                            <Code style={{ fontSize: '35px' }} className="text-gray-600" />
                        </div>

                        <div className="flex items-center space-x-3">
                            <Email style={{ fontSize: '35px' }} className="text-blue-500" />
                        </div>

                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            <div className="flex items-center space-x-3">
                                <Facebook style={{ fontSize: '35px' }} />
                            </div>
                        </a>

                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(imageUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            <div className="flex items-center space-x-3">
                                <img src="Twitter.svg" alt="Twitter" className='h-[35px] ' />
                            </div>
                        </a>

                        <a href={`https://wa.me/?text=${encodeURIComponent(imageUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-600"
                        >
                            <div className="flex items-center space-x-3">
                                <WhatsApp style={{ fontSize: '35px' }} />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Embed Code Modal */}
                {embedModalOpen && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
                            <h3 className="text-xl font-medium">Embed Code</h3>
                            <div className="w-full p-2 border rounded-md mb-4 bg-gray-100 text-sm font-mono whitespace-pre-wrap" style={{ wordBreak: "break-word", fontFamily: 'system-ui' }} >
                                {embedCode}
                            </div>
                            <div className="flex justify-between items-center">
                                <button onClick={handleCopyEmbedCode} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"  >
                                    Copy Code
                                </button>
                                <button onClick={() => setEmbedModalOpen(false)} className="text-gray-600 hover:text-gray-800" >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ImageActions;
