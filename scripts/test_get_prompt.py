import urllib.request
import json

supabase_url = "https://xgdzyqfalbibzelpdpvr.supabase.co"
anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZHp5cWZhbGJpYnplbHBkcHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MzUwMDYsImV4cCI6MjA4NzQxMTAwNn0.u8lH5Y14xx2WxrNEBp8ngkJlijIYHJASq_gOzTaINZY"

# 1. Fetch some prompt items from rest/v1/prompts
url = f"{supabase_url}/rest/v1/prompts?select=id,title,category,type,is_free,github_url&order=sort_order.asc&limit=20"
req = urllib.request.Request(
    url,
    headers={
        "apikey": anon_key,
        "Authorization": f"Bearer {anon_key}"
    }
)

with urllib.request.urlopen(req) as resp:
    prompts = json.loads(resp.read().decode("utf-8"))

print(f"Fetched {len(prompts)} prompts:")
for p in prompts[:5]:
    print(p)

# 2. Test invoking the edge function get-prompt for free and non-free prompts
func_url = f"{supabase_url}/functions/v1/get-prompt"

for p in prompts[:5]:
    pid = p["id"]
    print(f"\nInvoking get-prompt for {pid} (is_free={p.get('is_free')})...")
    f_req = urllib.request.Request(
        func_url,
        data=json.dumps({"prompt_id": pid}).encode("utf-8"),
        headers={
            "apikey": anon_key,
            "Authorization": f"Bearer {anon_key}",
            "Content-Type": "application/json"
        }
    )
    try:
        with urllib.request.urlopen(f_req) as f_resp:
            res = json.loads(f_resp.read().decode("utf-8"))
            print("Response keys:", list(res.keys()))
            if "prompt_text" in res:
                print(f"Prompt text preview ({len(res['prompt_text'])} chars):")
                print(res["prompt_text"][:200])
            else:
                print("Response:", res)
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {e.read().decode('utf-8', errors='ignore')}")
    except Exception as e:
        print(f"Error: {e}")
