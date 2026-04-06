// In-memory rate limiter for serverless
// Note: In Vercel, each cold start resets this. For production-grade
// rate limiting, consider Upstash Redis. This is sufficient for basic spam prevention.
const ipMap = new Map();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 3;           // 3 submissions per window

/**
 * Check if an IP is rate-limited.
 * @param {string} ip - Client IP address
 * @returns {{ limited: boolean, remaining: number, retryAfterMs: number }}
 */
export function checkRateLimit(ip) {
  const now = Date.now();

  // Clean expired entries periodically
  if (ipMap.size > 1000) {
    for (const [key, entry] of ipMap) {
      if (now - entry.windowStart > WINDOW_MS) {
        ipMap.delete(key);
      }
    }
  }

  const entry = ipMap.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    // New window
    ipMap.set(ip, { count: 1, windowStart: now });
    return { limited: false, remaining: MAX_REQUESTS - 1, retryAfterMs: 0 };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfterMs = WINDOW_MS - (now - entry.windowStart);
    return { limited: true, remaining: 0, retryAfterMs };
  }

  entry.count++;
  return { limited: false, remaining: MAX_REQUESTS - entry.count, retryAfterMs: 0 };
}
