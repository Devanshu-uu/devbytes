import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Music2, ChevronUp } from 'lucide-react';

const songs = [
  { title: "Maula", artist: "Anuv Jain", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/efed67450_song1.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song1.mp3" },
  { title: "Dhoonde Akhiyaan", artist: "Pritam, Javed Bashir", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/c4d80fa25_song2.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song2.mp3" },
  { title: "In Dino", artist: "Pritam, Soham", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/644b54426_song3.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song3.mp3" },
  { title: "Me, Myself and I", artist: "The Suncatchers", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/4130de2ab_song4.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song4.mp3" },
  { title: "Shayarana", artist: "Sajid-Wajid, Shalmali Kholgade", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/ef10db433_song5.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song5.mp3" },
  { title: "Aasmaan", artist: "Tanishk Bagchi, Raghav Meattle", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/91bac1947_song6.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song6.mp3" },
  { title: "Ye Ishq Hai", artist: "Pritam, Shreya Ghoshal", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/65be000a4_song7.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song7.mp3" },
  { title: "Zehen", artist: "Mitraz", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/739299a5e_song8.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song8.mp3" },
  { title: "Kaise Ab Kahein", artist: "Gaurav Chatterji", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/efa9e7ca1_song9.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song9.mp3" },
  { title: "Sajna Ve", artist: "Danny Zee", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/a074be454_song10.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song10.mp3" },
  { title: "Ishq Hua", artist: "Sonu Nigam, Shreya Ghoshal", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/fad8dacf8_song11.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song11.mp3" },
  { title: "Tu Chale", artist: "Arijit Singh, Shreya Ghoshal", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/397bb17dd_song12.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song12.mp3" },
  { title: "wildflower", artist: "yung kai", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/66255db5c_song13.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song13.mp3" },
  { title: "Aaj Se Teri", artist: "Amit Trivedi, Arijit Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/5b7cda1a5_song14.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song14.mp3" },
  { title: "Jeena Jeena", artist: "Atif Aslam", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/1241f1cc9_song15.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song15.mp3" },
  { title: "Pasoori", artist: "Ali Sethi, Shae Gill", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/91d017b33_song16.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song16.mp3" },
  { title: "Vaaste", artist: "Dhvani Bhanushali", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/c670bd180_song17.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song17.mp3" },
  { title: "Raabta", artist: "Pritam, Arijit Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/e9532ddac_song18.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song18.mp3" },
  { title: "Chaand Baaliyan", artist: "Aditya A", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/90c009ea0_song19.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song19.mp3" },
  { title: "Tu Jaane Na", artist: "Pritam, Atif Aslam", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/70a53438a_song20.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song20.mp3" },
  { title: "Khairiyat", artist: "Pritam, Arijit Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/6fcb8d7f0_song21.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song21.mp3" },
  { title: "Muskurane", artist: "Arijit Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/131b9a763_song22.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song22.mp3" },
  { title: "Duniyaa", artist: "Akhil, Dhvani Bhanushali", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/cb201bb21_song23.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song23.mp3" },
  { title: "Mera Yaar", artist: "Dhvani Bhanushali, Ash King", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/c42fc60b1_song24.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song24.mp3" },
  { title: "Dheere Dheere", artist: "Yo Yo Honey Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/22b804bfc_song25.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song25.mp3" },
  { title: "Hawayein", artist: "Pritam, Arijit Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/9527f03d9_song26.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song26.mp3" },
  { title: "Mitti Di Khushboo", artist: "Ayushmann Khurrana", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/4c612c798_song27.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song27.mp3" },
  { title: "Aaya Na Tu", artist: "Arjun Kanungo, Momina Mustehsan", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/99e366cfb_song28.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song28.mp3" },
  { title: "Humdard", artist: "Arijit Singh, Mithoon", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/78d839705_song29.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song29.mp3" },
  { title: "Agar Tum Saath Ho", artist: "Alka Yagnik, Arijit Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/fbcd4f659_song30.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song30.mp3" },
  { title: "Maana Ke Hum Yaar Nahin", artist: "Parineeti Chopra", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/5c888075d_song31.jpg", src: "https://raw.githubusercontent.com/Devanshu-uu/devbytes/main/music/song31.mp3" },
  { title: "Bulleya", artist: "Pritam, Amit Mishra", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/86fb5cf2c_song32.jpg", src: "music/song32.mp3" },
  { title: "Ajab Si", artist: "Vishal-Shekhar, KK", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/dfbc25107_song33.jpg", src: "music/song33.mp3" },
  { title: "Tu Aake Dekhle", artist: "King", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/f4cd9d566_song34.jpg", src: "music/song34.mp3" },
  { title: "Tose Naina", artist: "Arijit Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/ed0525e20_song35.jpg", src: "music/song35.mp3" },
  { title: "Mazaak", artist: "Anuv Jain", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/408f6699c_song36.jpg", src: "music/song36.mp3" },
  { title: "Khuda Jaane", artist: "Vishal-Shekhar, KK", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/91963368c_song37.jpg", src: "music/song37.mp3" },
  { title: "Muskurane Ki Baat Karte Ho", artist: "Mix Music", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/a50294b63_song38.jpg", src: "music/song38.mp3" },
  { title: "Khoya Khoya", artist: "Sachin-Jigar, Mohit Chauhan", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/001913f72_song39.jpg", src: "music/song39.mp3" },
  { title: "Tere Sang Ishq Lofi", artist: "DJ Shine India", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/16c242586_song40.jpg", src: "music/song40.mp3" },
  { title: "Aise Kyun", artist: "Nikhita Gandhi", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/06de88c69_song41.jpg", src: "music/song41.mp3" },
  { title: "Aa Chaliye", artist: "B Praak", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/59cb0f0c6_song42.jpg", src: "music/song42.mp3" },
  { title: "Tujh Mein Rab Dikhta Hai", artist: "Roop Kumar Rathod", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/1504ec740_song43.jpg", src: "music/song43.mp3" },
  { title: "Hawa Banke", artist: "Darshan Raval", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/bd6085863_song44.jpg", src: "music/song44.mp3" },
  { title: "Bahara X", artist: "Ezu", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/d7ae24e1b_song45.jpg", src: "music/song45.mp3" },
  { title: "Jaadugar", artist: "Paradox", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/1c29d78ee_song46.jpg", src: "music/song46.mp3" },
  { title: "Rihaayi", artist: "Paradox", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/a6a11182d_song47.jpg", src: "music/song47.mp3" },
  { title: "Taare", artist: "Muzic HRD", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/319a01378_song48.jpg", src: "music/song48.mp3" },
  { title: "Manja", artist: "Amit Trivedi", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/1d09f0fe0_song49.jpg", src: "music/song49.mp3" },
  { title: "Meri Sardarniye", artist: "Ranjit Bawa", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/24ec74d92_song50.jpg", src: "music/song50.mp3" },
  { title: "Jhoom", artist: "Ali Zafar", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/f79a9426c_song51.jpg", src: "music/song51.mp3" },
  { title: "Wo Tera Kehna", artist: "Nusrat Fateh Ali Khan", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/422b93e2a_song52.jpg", src: "music/song52.mp3" },
  { title: "Kina Chir", artist: "The PropheC", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/6ebc38d45_song53.jpg", src: "music/song53.mp3" },
  { title: "Hasi - Male Version", artist: "Ami Mishra", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/8ad9a5e53_song54.jpg", src: "music/song54.mp3" },
  { title: "Waalian", artist: "Harnoor", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/949d9044a_song55.jpg", src: "music/song55.mp3" },
  { title: "Sakhiyaan", artist: "Maninder Buttar", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/bffb4f9ac_song56.jpg", src: "music/song56.mp3" },
  { title: "Duniyaa (Luka Chuppi)", artist: "Akhil, Dhvani Bhanushali", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/9101c4704_song57.jpg", src: "music/song57.mp3" },
  { title: "Dil Ibaadat", artist: "Pritam, KK", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/f0b10848c_song58.jpg", src: "music/song58.mp3" },
  { title: "Dil Meri Na Sune", artist: "Atif Aslam", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/2fbc3d16e_song59.jpg", src: "music/song59.mp3" },
  { title: "Nazar Na Lag Jaaye", artist: "Ash King", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/992313136_song60.jpg", src: "music/song60.mp3" },
  { title: "Humsafar", artist: "Akhil Sachdeva", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/17a323a64_song61.jpg", src: "music/song61.mp3" },
  { title: "Chann Sitare", artist: "Ammy Virk", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/d3763bbbc_song62.jpg", src: "music/song62.mp3" },
  { title: "Hawa Banke", artist: "Darshan Raval", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/7d7eb2bec_song63.jpg", src: "music/song63.mp3" },
  { title: "Tera Hone Laga Hoon", artist: "Pritam, Atif Aslam", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/bc92643bd_song64.jpg", src: "music/song64.mp3" },
  { title: "Kabhi Kabhi Aditi Remix", artist: "Rashid Ali", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/98e58b376_song65.jpg", src: "music/song65.mp3" },
  { title: "Isq Risk", artist: "Rahat Fateh Ali Khan", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/da214a092_song66.jpg", src: "music/song66.mp3" },
  { title: "Zindagi Kuch Toh Bata", artist: "Pritam, Jubin Nautiyal", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/b737d35d5_song67.jpg", src: "music/song67.mp3" },
  { title: "Raanjhanaa", artist: "A.R. Rahman", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/514dcbe79_song68.jpg", src: "music/song68.mp3" },
  { title: "Tum Tak", artist: "A.R. Rahman, Javed Ali", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/0234170b2_song69.jpg", src: "music/song69.mp3" },
  { title: "Tum Se Hi", artist: "Pritam, Mohit Chauhan", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/1de6dabd9_song70.jpg", src: "music/song70.mp3" },
  { title: "Humnava", artist: "Mithoon, Papon", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/554bc82f2_song71.jpg", src: "music/song71.mp3" },
  { title: "Tere Naina", artist: "Shafqat Amanat Ali", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/7e9f20a16_song72.jpg", src: "music/song72.mp3" },
  { title: "Challa", artist: "A.R. Rahman, Rabbi", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/307a43cc2_song73.jpg", src: "music/song73.mp3" },
  { title: "Khaab", artist: "Akhil", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/b73bb5e5a_song74.jpg", src: "music/song74.mp3" },
  { title: "Jeena Marna", artist: "Altamash Faridi", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/65c4caca9_song75.jpg", src: "music/song75.mp3" },
  { title: "Rabba Mehar Kari", artist: "Darshan Raval", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/27c7b10be_song76.jpg", src: "music/song76.mp3" },
  { title: "Moon Rise", artist: "Guru Randhawa", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/9bac86de1_song77.jpg", src: "music/song77.mp3" },
  { title: "Main Agar Kahoon", artist: "Vishal-Shekhar, Sonu Nigam", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/6f86785c0_song78.jpg", src: "music/song78.mp3" },
  { title: "Tera Zikr", artist: "Darshan Raval", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/9e7985494_song79.jpg", src: "music/song79.mp3" },
  { title: "Roke Na Ruke Naina", artist: "Arijit Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/0561db1ca_song80.jpg", src: "music/song80.mp3" },
  { title: "Tum Prem Ho Reprise", artist: "Mohit Lalwani", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/b99801eca_song81.jpg", src: "music/song81.mp3" },
  { title: "Palat - Tera Hero Idhar Hai", artist: "Arijit Singh", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/21e923b16_song82.jpg", src: "music/song82.mp3" },
  { title: "Ye Tune Kya Kiya", artist: "Pritam, Javed Bashir", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/1b0e5e6e0_song83.jpg", src: "music/song83.mp3" },
  { title: "Heartbreak", artist: "Signature By SB", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/ab8c8b5eb_song84.jpg", src: "music/song84.mp3" },
  { title: "Tera Saath", artist: "Talwiinder", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/1db523c2c_song85.jpg", src: "music/song85.mp3" },
  { title: "Such Keh Raha Hai", artist: "KK", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/05351fa98_song86.jpg", src: "music/song86.mp3" },
  { title: "Yeh Raaten Yeh Mausam", artist: "Sanam", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/097c7a775_song87.jpg", src: "music/song87.mp3" },
  { title: "Chann Vi Gawah", artist: "Madhav Mahajan", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/9bc9d9ca3_song88.jpg", src: "music/song88.mp3" },
  { title: "Bheegi Si Bhaagi Si", artist: "Pritam, Mohit Chauhan", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/f9a8b7cd2_song89.jpg", src: "music/song89.mp3" },
  { title: "Tera Rastaa Chhodoon Na", artist: "Vishal-Shekhar", cover: "https://media.base44.com/images/public/69bdc87402b020b7249e66f1/3c5cffde7_song90.jpg", src: "music/song90.mp3" },
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef(null);

  const song = songs[current];

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); setIsPlaying(false); }
    else { audio.play().catch(() => {}); setIsPlaying(true); }
  };

  const nextSong = () => { setCurrent((current + 1) % songs.length); setIsPlaying(true); };
  const prevSong = () => { setCurrent((current - 1 + songs.length) % songs.length); setIsPlaying(true); };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = song.src;
    if (isPlaying) audio.play().catch(() => {});
  }, [current]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => { if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100); };
    audio.addEventListener('timeupdate', update);
    audio.addEventListener('ended', nextSong);
    return () => { audio.removeEventListener('timeupdate', update); audio.removeEventListener('ended', nextSong); };
  }, [current, isPlaying]);

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    if (audioRef.current?.duration) audioRef.current.currentTime = pct * audioRef.current.duration;
  };

  return (
    <>
      <audio ref={audioRef} />

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[9998] w-72 bg-[#111]/98 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={song.cover} alt={song.title} className="w-14 h-14 rounded-xl object-cover border border-white/10" />
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm truncate">{song.title}</p>
                <p className="text-gray-500 text-xs truncate">{song.artist}</p>
              </div>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full cursor-pointer mb-4" onClick={seek}>
              <div className="h-full bg-red-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center justify-center gap-6">
              <button onClick={prevSong} className="text-gray-400 hover:text-white transition-colors"><SkipBack size={18} /></button>
              <button onClick={togglePlay} className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors shadow-lg shadow-red-500/20">
                {isPlaying ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-white ml-0.5" />}
              </button>
              <button onClick={nextSong} className="text-gray-400 hover:text-white transition-colors"><SkipForward size={18} /></button>
            </div>
            <div className="mt-4 border-t border-white/5 pt-4 max-h-48 overflow-y-auto space-y-1 custom-scroll">
              {songs.map((s, i) => (
                <button key={i} onClick={() => { setCurrent(i); setIsPlaying(true); }}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors ${i === current ? 'bg-red-500/20 text-red-300' : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'}`}>
                  <img src={s.cover} alt="" className="w-6 h-6 rounded object-cover flex-shrink-0" />
                  <span className="text-xs truncate">{s.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-4 py-3 rounded-full border transition-all duration-300 ${isPlaying ? 'bg-black/90 border-red-500/50 shadow-[0_0_25px_rgba(239,68,68,0.4)]' : 'bg-black/80 border-white/10'} backdrop-blur-xl`}
      >
        <button onClick={prevSong} className="text-gray-400 hover:text-white transition-colors hidden sm:block"><SkipBack size={14} /></button>
        <button onClick={togglePlay} className="w-9 h-9 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors">
          {isPlaying ? <Pause size={14} className="text-white" /> : <Play size={14} className="text-white ml-0.5" />}
        </button>
        <button onClick={nextSong} className="text-gray-400 hover:text-white transition-colors hidden sm:block"><SkipForward size={14} /></button>
        <div className="max-w-[120px] hidden sm:block cursor-pointer" onClick={() => setExpanded(!expanded)}>
          <p className="text-xs text-white font-semibold truncate leading-tight">{song.title}</p>
          <p className="text-[10px] text-gray-500 truncate">{song.artist}</p>
        </div>
        <button onClick={() => setExpanded(!expanded)} className="text-gray-500 hover:text-white transition-colors">
          <ChevronUp size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </motion.div>

      <style>{`.custom-scroll::-webkit-scrollbar{width:3px}.custom-scroll::-webkit-scrollbar-track{background:transparent}.custom-scroll::-webkit-scrollbar-thumb{background:rgba(239,68,68,0.3);border-radius:10px}`}</style>
    </>
  );
}