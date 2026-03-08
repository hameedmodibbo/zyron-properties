import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Robots.txt
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /temp/
Sitemap: https://zyronproperties.com/sitemap.xml`);
  });

  // Sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zyronproperties.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://zyronproperties.com/project-mavora</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://zyronproperties.com/shortlet-management</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zyronproperties.com/blog</loc>
    <priority>0.7</priority>
  </url>
</urlset>`);
  });

  // API placeholder
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
