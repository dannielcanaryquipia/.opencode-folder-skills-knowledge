import json
from pathlib import Path
from graphify.detect import detect

root = Path(r'C:\Users\Danniel Canary\.opencode')
out = Path(r'C:\Users\Danniel Canary\.opencode\skills\graphify-out')

result = detect(
    root,
    extra_excludes=[
        'node_modules/',
        '.git/',
        'skills/graphify-out/',
        'package-lock.json',
    ],
    cache_root=out,
)

(out / '.graphify_detect.json').write_text(json.dumps(result, ensure_ascii=False), encoding='utf-8')

print(json.dumps({
    'total_files': result.get('total_files'),
    'total_words': result.get('total_words'),
    'categories': {k: len(v) for k, v in result.get('files', {}).items()},
    'skipped_sensitive': result.get('skipped_sensitive', []),
    'scan_root': result.get('scan_root'),
}, indent=2, ensure_ascii=False))
