"use client";

import { useEffect, useState } from "react";

type InstagramPost = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [connected, setConnected] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/instagram")
      .then((response) => response.json())
      .then((result) => {
        setPosts(result.posts || []);
        setConnected(Boolean(result.connected));
      })
      .catch(() => setConnected(false));
  }, []);

  return <section className="mb-instagram">
    <div className="mb-wrap">
      <div className="mb-insta-head"><div><span>مباشرة من Instagram · EN DIRECT</span><h2>آخر الجديد عند<br/><em>@coudreMaroc</em><small>Nos dernières publications et Reels</small></h2></div><a href="https://www.instagram.com/coudremaroc/" target="_blank" rel="noreferrer">تابعنا · Suivre <b>↗</b></a></div>
      {posts.length > 0 ? <div className="mb-insta-grid">{posts.map((post) => <a key={post.id} href={post.permalink} target="_blank" rel="noreferrer" className="mb-insta-card"><img src={post.thumbnail_url || post.media_url} alt={post.caption?.slice(0, 90) || "Publication Instagram Coudre Maroc"}/><span>{post.media_type === "VIDEO" ? "▶ REEL" : "◎ POST"}</span><div><p>{post.caption?.slice(0, 110) || "Découvrez cette publication sur Instagram"}</p><b>شوف فـ Instagram · Voir ↗</b></div></a>)}</div> : <div className="mb-insta-connect"><div className="mb-insta-phone"><i>◎</i><b>@coudreMaroc</b><span>{connected === null ? "جاري التحميل..." : "الربط الآمن مع Instagram جاهز"}</span></div><div><h3>المنشورات وReels ديالك هنا أوتوماتيكياً</h3><p>منين نكملو ترخيص Meta، آخر المحتويات غادي تبان هنا وتتجدد كل خمس دقائق بلا أي تدخل.</p><small>Après l’autorisation Meta, vos dernières publications et Reels apparaîtront ici automatiquement, avec une actualisation toutes les cinq minutes.</small><a href="https://www.instagram.com/coudremaroc/" target="_blank" rel="noreferrer">فتح Instagram · Ouvrir le profil ↗</a></div></div>}
    </div>
  </section>;
}
