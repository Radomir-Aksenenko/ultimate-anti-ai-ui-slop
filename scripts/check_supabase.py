import urllib.request
import re

url = "https://motionsites.ai/assets/Index-CBuOpLYQ.js"
content = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})).read().decode("utf-8")

matches = [m.start() for m in re.finditer(r'prompt', content, re.IGNORECASE)]
print(f"Total prompt matches in Index-CBuOpLYQ.js: {len(matches)}")

for i, idx in enumerate(matches[:15]):
    start = max(0, idx - 100)
    end = min(len(content), idx + 200)
    print(f"--- Match {i+1} ---")
    print(content[start:end])
