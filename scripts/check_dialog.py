import urllib.request
import re

base_url = "https://motionsites.ai"

for path in ["/assets/PromptDetailDialog-DrC_fL__.js", "/assets/PromptCard-DiyWJe7f.js"]:
    url = base_url + path
    try:
        content = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})).read().decode("utf-8")
        print(f"=== {path} (length: {len(content)}) ===")
        # search for .from(`prompts`) or select
        for m in re.finditer(r'from\([`"\']prompts[`"\']\)\.select\([`"\']([^`"\']+)[`"\']\)', content):
            print("Select query:", m.group(1))
        # search for any .rpc or fetch calls
        for m in re.finditer(r'rpc\([`"\']([^`"\']+)[`"\']', content):
            print("RPC call:", m.group(1))
        # search for prompt text usage
        for m in re.finditer(r'(?:prompt|prompt_text|content|code|body)', content):
            idx = m.start()
            print("Snippet:", content[max(0, idx-40):min(len(content), idx+80)])
    except Exception as e:
        print(f"Error {path}: {e}")
