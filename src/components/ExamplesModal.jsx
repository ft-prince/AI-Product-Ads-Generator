import React, { useState } from 'react';
import { X, Lightbulb, Copy, Check } from 'lucide-react';

export default function ExamplesModal({ isOpen, onClose, onUseExample }) {
  const [copiedId, setCopiedId] = useState(null);

  const examples = [
    {
      id: 1,
      category: "E-commerce",
      brand: "TechVibe",
      promotion: "40% Off Black Friday Sale",
      style: "modern",
      description: "Sleek wireless earbuds with charging case, floating on gradient background, product photography style",
      tags: ["Tech", "Products", "Sale"]
    },
    {
      id: 2,
      category: "Food",
      brand: "Brew & Co.",
      promotion: "Buy 2 Get 1 Free",
      style: "casual",
      description: "Steaming cup of latte with latte art, coffee beans scattered around, rustic wooden table, morning light",
      tags: ["Coffee", "Beverage", "Cafe"]
    },
    {
      id: 3,
      category: "Clothing",
      brand: "FitPro Athletics",
      promotion: "Summer Sale - Up to 60% Off",
      style: "vibrant",
      description: "Athletic woman in yoga pose wearing activewear, sunset beach background, energetic and motivational",
      tags: ["Sportswear", "Fitness", "Active"]
    },
    {
      id: 4,
      category: "Business",
      brand: "Pixel Perfect",
      promotion: "Free Consultation",
      style: "professional",
      description: "Modern office workspace, laptop showing creative designs, team collaboration, sleek and corporate",
      tags: ["Agency", "Professional", "Corporate"]
    },
    {
      id: 5,
      category: "E-commerce",
      brand: "Cozy Haven",
      promotion: "Free Shipping This Week",
      style: "minimalist",
      description: "Scandinavian-style living room with plants, natural wood furniture, warm sunlight through windows",
      tags: ["Home Decor", "Minimalist", "Interior"]
    },
    {
      id: 6,
      category: "Food",
      brand: "Bella Italia",
      promotion: "Happy Hour 5-7 PM",
      style: "vibrant",
      description: "Delicious pizza with melting cheese, fresh basil, tomatoes, Italian flag colors in background",
      tags: ["Restaurant", "Italian", "Food"]
    },
    {
      id: 7,
      category: "Clothing",
      brand: "Noir Elegance",
      promotion: "Exclusive Collection Launch",
      style: "luxury",
      description: "Black evening gown on runway, spotlight effect, bokeh lights, high fashion photography",
      tags: ["Luxury", "Fashion", "Elegant"]
    },
    {
      id: 8,
      category: "E-commerce",
      brand: "Glow Cosmetics",
      promotion: "New Skincare Line",
      style: "elegant",
      description: "Luxury skincare bottles on marble surface, water droplets, botanical elements, soft pink lighting, spa-like atmosphere",
      tags: ["Beauty", "Skincare", "Premium"]
    }
  ];

  const quickTips = [
    "Be specific about lighting (studio, natural, golden hour)",
    "Mention photography style (commercial, editorial, product)",
    "Include mood/atmosphere (energetic, calm, luxurious)",
    "Describe composition (centered, floating, close-up)",
    "Add quality keywords (professional, high-resolution, detailed)"
  ];

  const copyExample = (example) => {
    const text = `Brand: ${example.brand}
Promotion: ${example.promotion}
Style: ${example.style}
Description: ${example.description}`;
    
    navigator.clipboard.writeText(text);
    setCopiedId(example.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Examples & Inspiration</h2>
              <p className="text-sm text-slate-400">Get started with these ready-to-use templates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Quick Tips */}
          <div className="mb-8 bg-violet-500/10 border border-violet-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-violet-400" />
              Quick Tips for Better Results
            </h3>
            <ul className="space-y-2">
              {quickTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-violet-400 mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples Grid */}
          <h3 className="text-lg font-semibold mb-4">Popular Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example) => (
              <div
                key={example.id}
                className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-violet-500 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-violet-500/20 text-violet-300 rounded text-xs font-medium">
                        {example.category}
                      </span>
                      <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs font-medium capitalize">
                        {example.style}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg">{example.brand}</h4>
                    <p className="text-sm text-violet-400 mt-1">{example.promotion}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyExample(example)}
                      className="p-2 hover:bg-slate-700 rounded-lg transition-all"
                      title="Copy example"
                    >
                      {copiedId === example.id ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                  {example.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {example.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    onUseExample(example);
                    onClose();
                  }}
                  className="w-full py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
                >
                  Use This Example
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}