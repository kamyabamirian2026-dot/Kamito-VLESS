
const corsHeaders = {
  "Content-Type": "application/json; charset=utf-8"
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/api/health") {
      try {
        await env.DB.prepare("SELECT 1").first();
        return Response.json({ ok: true, database: "connected" });
      } catch {
        return Response.json(
          { ok: false, error: "Database not connected" },
          { status: 500 }
        );
      }
    }

    if (request.method === "GET" && url.pathname === "/api/stats") {
      try {
        const users = await env.DB.prepare(
          "SELECT COUNT(*) AS total FROM users"
        ).first();

        const subscriptions = await env.DB.prepare(
          "SELECT COUNT(*) AS total FROM subscriptions"
        ).first();

        return Response.json({
          users: users.total,
          subscriptions: subscriptions.total
        });
      } catch {
        return Response.json(
          { error: "Database tables are not ready" },
          { status: 500 }
        );
      }
    }

    if (url.pathname === "/api/" || url.pathname === "/api") {
      return Response.json({
        name: "KAMITO",
        status: "online"
      });
    }

    return new Response("KAMITO Worker is running", {
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }
};
