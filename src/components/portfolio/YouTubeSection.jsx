import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, ExternalLink, Play } from 'lucide-react';

const CHANNEL_ID = 'UC24ZXuLKFu0ZMXOsSNL_qTQ';

export default function YouTubeSection() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=' + CHANNEL_ID)}`;
    fetch(url).
    then((r) => r.json()).
    then((data) => {
      if (data.status === 'ok') setVideos(data.items.slice(0, 3));
    }).
    finally(() => setLoading(false));
  }, []);

  return (
    <section id="youtube" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14">
          
          
          <h2 className="text-4xl font-black mb-4">My <span className="text-red-500">YouTube</span> Channel</h2>
          <a
            href={`https://youtube.com/channel/${CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
            
            <Youtube size={16} /> Subscribe on YouTube
          </a>
        </motion.div>

        {loading &&
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) =>
          <div key={i} className="bg-[#111] rounded-2xl aspect-video animate-pulse" />
          )}
          </div>
        }

        {!loading && videos.length > 0 &&
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v, i) => {
            const id = v.guid?.split(':').pop();
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all">
                
                  <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  allowFullScreen
                  className="w-full aspect-video border-0"
                  title={v.title} />
                
                  <div className="p-4">
                    <p className="text-sm text-gray-300 font-medium line-clamp-2">{v.title}</p>
                  </div>
                </motion.div>);

          })}
          </div>
        }

        {!loading && videos.length === 0 &&
        <div className="text-center text-gray-600 py-10">
            <Play size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">Check out the channel for latest videos</p>
          </div>
        }
      </div>
    </section>);

}