import React from "react";
import { Package } from "lucide-react";
import { WAREHOUSE_QUOTES } from "@/constants/employees";

interface WarehouseQuoteSectionProps {
    /** Index quote yang sedang aktif (untuk carousel) */
    activeQuoteIndex?: number;
    /** Handler untuk change quote */
    onQuoteChange?: (index: number) => void;
}

export const WarehouseQuoteSection: React.FC<WarehouseQuoteSectionProps> = ({
    activeQuoteIndex = 0,
    onQuoteChange,
}) => {
    const currentQuote = WAREHOUSE_QUOTES[activeQuoteIndex];

    return (
        <div className="relative w-full hidden md:block md:w-1/2 min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
            {/* Background image dengan overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070')",
                }}
                aria-hidden="true"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 text-white">

                {/* Quote mark icon */}
                <div className="mb-6">
                    <svg
                        className="w-12 h-12 text-cyan-400 opacity-80"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                    >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                </div>

                {/* Quote text */}
                <blockquote className="space-y-4 mb-8">
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
                        {currentQuote.text}
                    </p>
                </blockquote>

                {/* Author badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full backdrop-blur-sm bg-white/5 w-fit">
                    <Package className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                    <span className="text-sm font-medium">{currentQuote.author}</span>
                </div>

                {/* Pagination dots */}
                <div className="flex gap-2 mt-8" role="tablist" aria-label="Quote pagination">
                    {WAREHOUSE_QUOTES.map((_, index) => (
                        <button
                            key={index}
                            className={`
                w-8 h-1 rounded-full transition-all duration-300
                ${index === activeQuoteIndex ? "bg-cyan-400" : "bg-white/30 hover:bg-white/50"}
              `}
                            role="tab"
                            aria-selected={index === activeQuoteIndex}
                            aria-label={`Quote ${index + 1}`}
                            onClick={() => onQuoteChange?.(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};