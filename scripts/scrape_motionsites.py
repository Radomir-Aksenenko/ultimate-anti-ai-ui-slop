import urllib.request
import re
import json

base_url = "https://motionsites.ai"
req = urllib.request.Request(
    base_url,
    headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
)
html = urllib.request.urlopen(req).read().decode("utf-8")

scripts = list(set(re.findall(r'(?:src|href)=["\']([^"\']+\.js)["\']', html)))
print("Found scripts:", scripts, flush=True)

# Also find any other js files mentioned inside those js files
all_js = set(scripts)
for s in scripts:
    s_url = s if s.startswith("http") else base_url + s
    try:
        data = urllib.request.urlopen(urllib.request.Request(s_url, headers={"User-Agent": "Mozilla/5.0"})).read().decode("utf-8", errors="ignore")
        # search for supabase, api, or endpoints
        endpoints = re.findall(r'https?://[a-zA-Z0-9.-]+(?:supabase\.co|api)[^\s"\'`]*', data)
        if endpoints:
            print(f"Endpoints in {s}:", set(endpoints), flush=True)
        # search for tables or prompt fields
        fields = re.findall(r'(?:prompt|description|hero|cards|features|copy|unlocked)[a-zA-Z0-9_]*', data, re.IGNORECASE)
        # check if supabase url or anon key exists
        sb = re.findall(r'https://[a-z0-9-]+\.supabase\.co', data)
        if sb:
            print(f"Supabase URL in {s}:", set(sb), flush=True)
            # find keys
            keys = re.findall(r'eyJ[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}', data)
            if keys:
                print(f"JWT tokens in {s}:", keys, flush=True)
    except Exception as e:
        print(f"Error {s}: {e}", flush=True)
