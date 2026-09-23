CREATE TABLE IF NOT EXISTS quote_leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  zip TEXT NOT NULL,
  services TEXT NOT NULL,
  urgency TEXT,
  property_type TEXT,
  ownership TEXT,
  sqft TEXT,
  budget TEXT,
  notes TEXT,
  product TEXT,
  source_url TEXT,
  user_agent TEXT,
  ip TEXT,
  notification_status TEXT NOT NULL DEFAULT 'pending',
  notification_error TEXT
);

CREATE INDEX IF NOT EXISTS idx_quote_leads_created_at ON quote_leads (created_at DESC);
