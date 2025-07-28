export type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  downloadlink: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Dark Web Monitoring Tool",
    des: "Dark Web Monitoring extension detects leaked data and provides real-time alerts with URLs, titles.",
    img: "/1(DW).jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/hello",
    downloadlink:
      "https://github.com/Madhurika2909/dark_web_extension/raw/main/dark_web_extn.zip",
  },
  {
    id: 2,
    title: "DMARC Certificate Checker",
    des: "DMARC Checker ensures domain security by verifying DMARC records to prevent email spoofing and phishing.",
    img: "/3(DMARC).jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/dmarc", // Updated link for direct download
    downloadlink:
      "https://github.com/Madhurika2909/Dmarc_extension/raw/main/Dmarc.zip",
  },
  {
    id: 3,
    title: "Email-Authentication Checker",
    des: "Email Checker verifies SPF, DKIM, and DMARC to prevent email spoofing and phishing.",
    img: "/2(EA).jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/email",
    downloadlink:
      "https://github.com/Madhurika2909/emial-phis/raw/main/email-phis.zip",
  },
  {
    id: 4,
    title: "Third Party Risk Management",
    des: "AI Chatbot provides instant assistance, answering security queries and guiding users on threat protection and our features.",
    img: "/4(TPA).webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/thirdparty",
    downloadlink:
      "https://github.com/Madhurika2909/ThirdParty/archive/refs/heads/main.zip",
  },
];
