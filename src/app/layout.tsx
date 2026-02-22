import Providers from "./providers";
import Navigation from "@/components/nav/Navigation";
import Fab from "@/components/fab/Fab";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="preload" suppressHydrationWarning>
      <head>
        {/* ✅ data-theme를 최대한 빨리 박아 FOUC 줄이되, hydration mismatch는 suppress로 처리 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    var saved = localStorage.getItem('themeMode');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
})();
`,
          }}
        />

        <style>{`
          /* preload 동안: 로더만 보이게 */
          html.preload body { opacity: 0; }
          html.preload #__boot_loader { opacity: 1; pointer-events: all; }

          /* preload 해제되면: body 페이드 인 + 로더 페이드 아웃 */
          body { transition: opacity .35s ease; }

          #__boot_loader {
            position: fixed;
            inset: 0;
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;

            opacity: 0;
            pointer-events: none;

            transition: opacity .35s ease;
            background: #0b0b0b;
          }
          html[data-theme="light"] #__boot_loader { background: #ffffff; }

          #__boot_loader .capsule {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 18px 36px;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,.12);
            box-shadow: 0 7px 7px rgba(0,0,0,.35);
            background: rgba(255,255,255,.06);
            backdrop-filter: blur(8px);
          }
          html[data-theme="light"] #__boot_loader .capsule{
            border: 1px solid rgba(0,0,0,.1);
            box-shadow: 0 7px 7px rgba(0,0,0,.15);
            background: #ffffff;
          }

          #__boot_loader .dot {
            width: 6px; height: 6px; border-radius: 50%;
            background: rgba(255,255,255,.9);
            opacity: .2;
            animation: __blink 1.2s infinite ease-in-out both;
          }
          html[data-theme="light"] #__boot_loader .dot { background: rgba(0,0,0,.9); }

          #__boot_loader .dot:nth-child(2){ animation-delay: .15s; }
          #__boot_loader .dot:nth-child(3){ animation-delay: .3s; }

          @keyframes __blink {
            0%, 80%, 100% { opacity: .2; transform: translateY(0); }
            40% { opacity: 1; transform: translateY(-2px); }
          }
        `}</style>
      </head>

      <body>
        <div id="__boot_loader" aria-label="Loading">
          <div className="capsule">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>

        <Providers>
          {children}
          <Fab />
          <Navigation />
        </Providers>
      </body>
    </html>
  );
}
