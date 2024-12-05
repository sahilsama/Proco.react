
import React from 'react';

const features = [
    {
        title: "Rent",
        description: "Easily adapt to your growing business needs with flexible plans.",
        icon: "📈",
        colSpan: "lg:col-span-2",
        rowSpan: "row-span-1"
    },
    {
        title: "Location",
        description: "Top-notch security features to keep your data safe.",
        icon: "🔒",
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    },
    {
        title: "Post you vechile",
        description: "24/7 customer support to assist you anytime.",
        icon: "🤝",
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    },
    {
        title: "Integrations",
        description: "Seamless integrations with tools you already use. Connect with popular platforms like Slack, Google Workspace, and Microsoft Teams effortlessly, enhancing your productivity by integrating our solution into your existing workflows without interruption.",
        icon: "🔗",
        colSpan: "lg:col-span-3",
        rowSpan: "row-span-1"
    },
    {
        title: "Profile Analytics",
        description: "Gain insights into your operations with powerful analytics tools.",
        icon: "📊",
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    },
];

const FeaturesSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto py-20 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 md:mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-black hover:bg-zinc-800 transition duration-500 ${feature.colSpan} ${feature.rowSpan}`}
                    >
                        <div className="relative z-10 flex flex-col gap-4">
                            <div className="text-5xl md:text-6xl text-zinc-500 mb-3">{feature.icon}</div>
                            <h3 className="text-xl md:text-2xl font-bold text-white">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm md:text-base mt-2" style={{ lineHeight: '1.5'}}>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;