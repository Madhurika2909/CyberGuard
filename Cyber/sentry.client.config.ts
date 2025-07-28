// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
export const projects = [
  {
    id: 1,
    title: "Dark Web Monitoring Tool",
    des: "Dark Web Monitoring extension detects leaked data and provides real-time alerts with URLs, titles.",
    img: "/1(DW).jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "DMARC Certificate Checker",
    des: "DMARC Checker ensures domain security by verifying DMARC records to prevent email spoofing and phishing.",
    img: "/3(DMARC).jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "www.google.com", // Updated link for direct download
  },
  {
    id: 3,
    title: "Email-Authentication Checker",
    des: "Email Checker verifies SPF, DKIM, and DMARC to prevent email spoofing and phishing.",
    img: "/2(EA).jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "AI Interactive Chatbot",
    des: "AI Chatbot provides instant assistance, answering security queries and guiding users on threat protection and our features.",
    img: "/4(TPA).webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];
