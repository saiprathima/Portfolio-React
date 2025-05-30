import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Resume = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const resumeUrl = "https://drive.google.com/file/d/1Xk1f0mR8ImYz8Ug3ygwE2lI5asRrYFN2/view?usp=sharing";

    const getEmbedUrl = (url) => {
        try {
            const fileId = url.split('/')[5];
            return `https://drive.google.com/file/d/${fileId}/preview`;
        } catch (error) {
            setError('Failed to process resume URL');
            return null;
        }
    };

    const handleIframeError = () => {
        setError('Failed to load resume. Please try again later.');
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100 bg-fixed">
            <Header />
            <main className="flex-grow">
                <div className="pt-24 pb-8">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100">
                            {isLoading && (
                                <div className="flex justify-center items-center h-[calc(100vh-16rem)]">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                                </div>
                            )}
                            
                            {error && (
                                <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
                                    {error}
                                </div>
                            )}

                            {!error && (
                                <iframe
                                    src={getEmbedUrl(resumeUrl)}
                                    className="w-full h-[calc(100vh-16rem)] rounded-lg"
                                    onLoad={() => setIsLoading(false)}
                                    onError={handleIframeError}
                                    title="Resume"
                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Resume;