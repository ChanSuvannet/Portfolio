import {
    IconBrandGithub,
    IconBrandTelegram,
    IconHome
} from "@tabler/icons-react";
import React from "react";
import { FloatingDock } from "../components/floating-dock";

const FloatingDockDemo = () => {
    const handleShare = async () => {
        if (navigator.share) {
            navigator.share({
                title: "Share this page",
                url: window.location.href,
            });
        } else {
            alert("Web Share API not supported in your browser.");
        }
    };

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf";
        link.download = "My-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-neutral-500" />,
            href: "#",
        },
        // {
        //     title: "Share",
        //     icon: <IconShare className="h-full w-full text-neutral-500" />,
        //     action: handleShare,
        // },
        // {
        //     title: "CV",
        //     icon: <IconNewSection className="h-full w-full text-neutral-500" />,
        //     action: handleDownloadCV,
        // },
        {
            title: "Telegram",
            icon: <IconBrandTelegram className="h-full w-full text-neutral-500" />,
            href: "https://t.me/chan_suvannet",
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500" />,
            href: "https://github.com/ChanSuvannet/",
        },
    ];

    return (
        <div className="flex items-center justify-center  w-full relative">
            <FloatingDock
                items={links}
                mobileClassName="fixed bottom-4 left-1/2 -translate-x-1/2"
                desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2"
            />
        </div>
    );
};

export default FloatingDockDemo;
