
import { useEffect } from "react";

export default function FooterAd() {
  useEffect(() => {
    try {
      if (window) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.log("AdSense error:", e);
    }
  }, []);

  return (
    <div className="w-full flex justify-center mt-6 mb-4">
      {/* Google AdSense Script (load once in your app, not here ideally) */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-4188972797123320"
        data-ad-slot="8773254963"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}