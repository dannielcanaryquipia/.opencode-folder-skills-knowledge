#!/usr/bin/env python3
"""Fix skills-upload zips in place: normalize backslash paths -> '/', repair release-analysis frontmatter.
Run from repo root:  python3 normalize_skills.py"""
import zipfile, glob, os, re, io
RA_FM = ('---\n'
 'name: release-analysis\n'
 'description: "Produce diagram-first release reports for a codebase that ships via Docker Compose '
 'and/or Kubernetes (Eve). Use when generating release documentation, deployment topology diagrams, '
 'or mermaid-based release reports with source-grounded path:line citations."\n'
 '---\n\n')
fixed=0
for z in glob.glob('skills-upload/**/*.zip', recursive=True):
    zin=zipfile.ZipFile(z); changed=False; buf=io.BytesIO()
    with zipfile.ZipFile(buf,'w',zipfile.ZIP_DEFLATED) as zo:
        for m in zin.namelist():
            if m.endswith('/') or m.endswith('\\'): continue
            data=zin.read(m); new=m.replace('\\','/')
            if new!=m: changed=True
            if os.path.basename(new).lower()=='skill.md' and os.path.basename(z)=='release-analysis.zip':
                t=data.decode('utf-8','replace').lstrip('\ufeff')
                mm=re.match(r'^---\s*\n.*?\n---\s*\n?', t, re.S)
                body=(t[mm.end():] if mm else t).lstrip('\n')
                data=(RA_FM+body).encode('utf-8'); changed=True
            zo.writestr(new,data)
    zin.close()
    if changed:
        open(z,'wb').write(buf.getvalue()); fixed+=1
print(f"Normalized {fixed} zips.")
