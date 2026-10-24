import React, { useState } from 'react';
import { Sparkles, Copy, Check, Video, FileText, LayoutDashboard, Shield, LogOut } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'repurpose' | 'transcribe' | 'video'>('repurpose');
  const [inputText, setInputText] = useState('');
  const [tone, setTone] = useState('professional');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = () => {
    if (!inputText) return;
    setLoading(true);
    setTimeout(() => {
      setResult({
        scripts: [
          "Hook: Stop making content from scratch. Here's how to repurpose 1 video into 10 posts...",
          "Hook: The biggest mistake creators make in 2026? Ignoring short-form clips.",
          "Hook: Here is my exact 3-step workflow to turn podcasts into viral reels."
        ],
        xPosts: [
          "One video in. 10 assets out. Work smarter, not harder.",
          "If you aren't repurposing your long-form content, you're leaving 80% of your reach on the table."
        ],
        linkedinPosts: [
          "Content distribution is just as important as content creation. Here is how we scale content output using AI without losing quality."
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 font-sans antialiased">
      {/* Header / Navbar */}
      <header className="border-b border-neutral-800 bg-[#0A0A0A]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#CCFF00] text-black font-extrabold px-2.5 py-1 rounded-lg text-lg">FC</div>
            <span className="font-bold text-xl tracking-tight text-white">Framecrumb</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs bg-neutral-900 border border-neutral-800 text-neutral-400 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#CCFF00]" /> Daily Trial: 1/1 Available
            </span>
            <button className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors">Sign In</button>
            <button className="text-sm font-bold bg-[#CCFF00] text-black px-4 py-2 rounded-xl hover:bg-[#b3e600] transition-colors">Get Started</button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero Banner */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
            One video in. <span className="text-[#CCFF00]">More content out.</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Repurpose videos into high-performing social scripts, posts, transcripts, and short clips automatically.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-neutral-900 border border-neutral-800 p-1.5 rounded-2xl flex gap-2">
            <button
              onClick={() => setActiveTab('repurpose')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'repurpose' ? 'bg-[#CCFF00] text-black shadow-lg' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" /> 10 Social Assets
            </button>
            <button
              onClick={() => setActiveTab('transcribe')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'transcribe' ? 'bg-[#CCFF00] text-black shadow-lg' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" /> Speech Transcription
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'video' ? 'bg-[#CCFF00] text-black shadow-lg' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" /> AI Short Video Editor
            </button>
          </div>
        </div>

        {/* Workspace Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          {activeTab === 'repurpose' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input Column */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-2">Paste Video Transcript or Source Text</label>
                  <textarea
                    rows={10}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste your video transcript, notes, or blog content here..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#CCFF00] transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-2">Select Tone</label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#CCFF00]"
                  >
                    <option value="professional">Professional & Authoritative</option>
                    <option value="casual">Casual & Conversational</option>
                    <option value="educational">Educational & Step-by-Step</option>
                  </select>
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={loading || !inputText}
                  className="w-full bg-[#CCFF00] text-black font-bold py-4 rounded-xl hover:bg-[#b3e600] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Sparkles className="w-5 h-5" /> {loading ? 'Generating Assets...' : 'Generate 10 Social Assets'}
                </button>
              </div>

              {/* Output Column */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 overflow-y-auto max-h-[500px]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
                  Generated Output
                  {result && (
                    <button
                      onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                      className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-neutral-700"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#CCFF00]" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied' : 'Copy All'}
                    </button>
                  )}
                </h3>
                {!result && !loading && (
                  <div className="h-64 flex flex-col items-center justify-center text-center text-neutral-600">
                    <Sparkles className="w-8 h-8 mb-2" />
                    <p className="text-sm">Enter source text and click generate to create 10 social assets.</p>
                  </div>
                )}
                {loading && (
                  <div className="h-64 flex items-center justify-center text-[#CCFF00] font-semibold animate-pulse">
                    Crafting scripts and posts...
                  </div>
                )}
                {result && (
                  <div className="space-y-4 text-sm text-neutral-300">
                    <div>
                      <h4 className="font-bold text-[#CCFF00] mb-2">🎬 Video Scripts</h4>
                      {result.scripts.map((s: string, i: number) => (
                        <div key={i} className="bg-neutral-900 p-3 rounded-xl mb-2 border border-neutral-800">{s}</div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#CCFF00] mb-2">🐦 X Posts</h4>
                      {result.xPosts.map((p: string, i: number) => (
                        <div key={i} className="bg-neutral-900 p-3 rounded-xl mb-2 border border-neutral-800">{p}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab !== 'repurpose' && (
            <div className="py-12 text-center text-neutral-500">
              <p className="text-lg font-semibold text-neutral-400">Workspace ready for upload and processing.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
