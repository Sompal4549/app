export default function manifest() {
  return {
    name: "Next.js App",
    short_name: "Next.js App",
    description: "Next.js App",
    start_url: "/",
    display: "standalone",
    background_color: "#1f1b24",
    theme_color: "#1f1b24",
    icons: [
      {
        src: "/vercel.svg",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
