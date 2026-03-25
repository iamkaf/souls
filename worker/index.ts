interface Env {
  ASSETS: Fetcher;
}

const IMMUTABLE_PATTERN = /\.(?:js|css|woff2|svg|png|jpg|jpeg|webp|avif|ico)$/i;

const baseHeaders = {
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Content-Security-Policy":
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; font-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
} as const;

function withHeaders(response: Response, pathname: string) {
  const headers = new Headers(response.headers);

  for (const [key, value] of Object.entries(baseHeaders)) {
    headers.set(key, value);
  }

  headers.set(
    "Cache-Control",
    IMMUTABLE_PATTERN.test(pathname)
      ? "public, max-age=31536000, immutable"
      : "public, max-age=0, must-revalidate",
  );

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return withHeaders(assetResponse, url.pathname);
    }

    if (request.method !== "GET") {
      return withHeaders(new Response("Not Found", { status: 404 }), url.pathname);
    }

    const acceptsHtml = request.headers.get("accept")?.includes("text/html");
    if (!acceptsHtml) {
      return withHeaders(new Response("Not Found", { status: 404 }), url.pathname);
    }

    const indexRequest = new Request(new URL("/index.html", url), request);
    const indexResponse = await env.ASSETS.fetch(indexRequest);
    return withHeaders(indexResponse, "/index.html");
  },
} satisfies ExportedHandler<Env>;
