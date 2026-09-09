import urllib.request
import json

supabase_url = "https://xgdzyqfalbibzelpdpvr.supabase.co"
anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZHp5cWZhbGJpYnplbHBkcHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MzUwMDYsImV4cCI6MjA4NzQxMTAwNn0.u8lH5Y14xx2WxrNEBp8ngkJlijIYHJASq_gOzTaINZY"

endpoints = [
    f"{supabase_url}/rest/v1/prompts?select=*",
    f"{supabase_url}/rest/v1/prompts?select=id,title,category,type,is_free,github_url",
]

for ep in endpoints:
    print(f"Testing {ep}...")
    req = urllib.request.Request(
        ep,
        headers={
            "apikey": anon_key,
            "Authorization": f"Bearer {anon_key}"
        }
    )
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            print(f"Success! Found {len(data)} rows.")
            if data:
                print("First row keys:", list(data[0].keys()))
                print("First row sample:", {k: data[0][k] for k in list(data[0].keys())[:8]})
    except Exception as e:
        print(f"Error: {e}")
