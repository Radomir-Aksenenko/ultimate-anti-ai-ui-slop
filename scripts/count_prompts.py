import urllib.request
import json

supabase_url = "https://xgdzyqfalbibzelpdpvr.supabase.co"
anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZHp5cWZhbGJpYnplbHBkcHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MzUwMDYsImV4cCI6MjA4NzQxMTAwNn0.u8lH5Y14xx2WxrNEBp8ngkJlijIYHJASq_gOzTaINZY"

# Query all prompts with is_free=true
url_free = f"{supabase_url}/rest/v1/prompts?select=id,title,category,type,is_free,github_url&is_free=eq.true&order=sort_order.asc"
req = urllib.request.Request(url_free, headers={"apikey": anon_key, "Authorization": f"Bearer {anon_key}"})

with urllib.request.urlopen(req) as resp:
    free_prompts = json.loads(resp.read().decode("utf-8"))

print(f"Total is_free=true prompts: {len(free_prompts)}")

# Also query all prompts
url_all = f"{supabase_url}/rest/v1/prompts?select=id,title,category,type,is_free,github_url&order=sort_order.asc"
req_all = urllib.request.Request(url_all, headers={"apikey": anon_key, "Authorization": f"Bearer {anon_key}"})
with urllib.request.urlopen(req_all) as resp:
    all_prompts = json.loads(resp.read().decode("utf-8"))

print(f"Total all prompts: {len(all_prompts)}")
free_count = sum(1 for p in all_prompts if p.get("is_free"))
paid_count = sum(1 for p in all_prompts if not p.get("is_free"))
github_count = sum(1 for p in all_prompts if p.get("github_url"))
print(f"Free: {free_count}, Paid: {paid_count}, Has GitHub: {github_count}")
