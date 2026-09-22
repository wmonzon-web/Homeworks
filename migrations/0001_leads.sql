-- Leads captured by /api/quote and /api/contact. The row is the source of
-- truth; email delivery status is recorded alongside it.
CREATE TABLE IF NOT EXISTS leads (
  id            TEXT PRIMARY KEY,
  type          TEXT NOT NULL CHECK (type IN ('quote', 'contact')),
  created_at    TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  phone         TEXT NOT NULL,
  zip           TEXT,
  services      TEXT,            -- JSON array of service slugs
  urgency       TEXT,
  property_type TEXT,
  home_details  TEXT,            -- JSON object
  budget        TEXT,
  message       TEXT,
  photo_keys    TEXT,            -- JSON array of R2 object keys
  source_url    TEXT,
  user_agent    TEXT,
  ip            TEXT,
  email_status  TEXT NOT NULL DEFAULT 'pending',   -- pending | sent | failed | skipped
  email_error   TEXT,
  status        TEXT NOT NULL DEFAULT 'new'        -- new | contacted | won | lost
);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);
