"""ブランドガイドシート（A3相当、横長）を生成する"""
import os
from build_logo import (
    draw_mark, INDIGO, INDIGO_DEEP, VERMILION, VERMILION_LT, PAPER, fmt
)

OUT = os.path.dirname(os.path.abspath(__file__))

W, H = 2400, 1600
# カラースウォッチ
def swatch(x, y, w, h, fill, label, hex_code):
    return f'''
  <rect x="{fmt(x)}" y="{fmt(y)}" width="{fmt(w)}" height="{fmt(h)}" fill="{fill}" stroke="{INDIGO}" stroke-width="1"/>
  <text x="{fmt(x)}" y="{fmt(y+h+30)}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
        font-size="20" fill="{INDIGO}" font-weight="600">{label}</text>
  <text x="{fmt(x)}" y="{fmt(y+h+58)}" font-family="'Courier New',monospace"
        font-size="18" fill="{INDIGO}" opacity="0.7">{hex_code}</text>'''

# ロゴマークを描画するヘルパー
def mark_block(cx, cy, R, clip_id, grad_id):
    return draw_mark(cx, cy, R, stripe_count=24, clip_id=clip_id, grad_id=grad_id)

# テキスト下のラベル
def label(cx, y, text, size=22, color=None, italic=False):
    color = color or INDIGO
    style = "font-style:italic;" if italic else ""
    return (f'<text x="{fmt(cx)}" y="{fmt(y)}" text-anchor="middle" '
            f'font-family="\'IPAexGothic\',\'Noto Sans JP\',sans-serif" '
            f'font-size="{size}" fill="{color}" font-weight="600" '
            f'style="{style}">{text}</text>')

# タイトルバナー
title = f'''
<rect x="0" y="0" width="{W}" height="140" fill="{INDIGO}"/>
<text x="80" y="82" font-family="'Noto Serif CJK SC','Noto Serif JP',serif"
      font-size="48" fill="{PAPER}" font-weight="700" letter-spacing="4">株式会社サムライウタリ / SAMURAI UTARI Inc.</text>
<text x="80" y="120" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="20" fill="{PAPER}" opacity="0.8" letter-spacing="2">Brand Identity System — Logo Guidelines v1.0</text>
<polygon points="2320,20 2340,60 2320,100 2300,60" fill="{VERMILION}"/>'''

# 3パターンのロゴマーク配置
BLOCK_R = 240
block_y = 360
blocks = ""
# ブロック1: マーク単体
blocks += f'<g>{mark_block(400, block_y, BLOCK_R, "cp1", "g1")}</g>'
blocks += label(400, block_y + BLOCK_R + 70, "01  ロゴマーク単体", 26)
blocks += label(400, block_y + BLOCK_R + 104, "— Logomark only", 20, INDIGO_DEEP, italic=True)

# ブロック2: ロゴ + 英文
blocks += f'<g>{mark_block(1200, block_y - 30, BLOCK_R*0.85, "cp2", "g2")}</g>'
mark_r2 = BLOCK_R*0.85
blocks += f'''
<text x="1200" y="{fmt(block_y - 30 + mark_r2 + 70)}" text-anchor="middle"
      font-family="'Cinzel','Optima',serif" font-size="44" fill="{INDIGO}"
      font-weight="700" letter-spacing="6">SAMURAI UTARI</text>
<line x1="1060" y1="{fmt(block_y - 30 + mark_r2 + 95)}" x2="1170" y2="{fmt(block_y - 30 + mark_r2 + 95)}"
      stroke="{INDIGO}" stroke-width="1" opacity="0.8"/>
<line x1="1230" y1="{fmt(block_y - 30 + mark_r2 + 95)}" x2="1340" y2="{fmt(block_y - 30 + mark_r2 + 95)}"
      stroke="{INDIGO}" stroke-width="1" opacity="0.8"/>
<polygon points="1200,{fmt(block_y - 30 + mark_r2 + 88)} 1208,{fmt(block_y - 30 + mark_r2 + 95)} 1200,{fmt(block_y - 30 + mark_r2 + 102)} 1192,{fmt(block_y - 30 + mark_r2 + 95)}" fill="{VERMILION}"/>
<text x="1200" y="{fmt(block_y - 30 + mark_r2 + 125)}" text-anchor="middle"
      font-family="'Cinzel','Optima',serif" font-size="16" fill="{VERMILION}"
      letter-spacing="5">INCORPORATED</text>
'''
blocks += label(1200, block_y + BLOCK_R + 104, "02  ロゴマーク + 英文社名 — Logo with English name", 20, INDIGO_DEEP, italic=True)

# ブロック3: ロゴ + 和文
blocks += f'<g>{mark_block(2000, block_y - 30, BLOCK_R*0.85, "cp3", "g3")}</g>'
blocks += f'''
<text x="2000" y="{fmt(block_y - 30 + mark_r2 + 70)}" text-anchor="middle"
      font-family="'Noto Serif CJK SC','Noto Serif JP','Yu Mincho',serif"
      font-size="40" fill="{INDIGO}" font-weight="700" letter-spacing="4">株式会社サムライウタリ</text>
<line x1="1870" y1="{fmt(block_y - 30 + mark_r2 + 95)}" x2="1970" y2="{fmt(block_y - 30 + mark_r2 + 95)}"
      stroke="{INDIGO}" stroke-width="1" opacity="0.8"/>
<line x1="2030" y1="{fmt(block_y - 30 + mark_r2 + 95)}" x2="2130" y2="{fmt(block_y - 30 + mark_r2 + 95)}"
      stroke="{INDIGO}" stroke-width="1" opacity="0.8"/>
<polygon points="2000,{fmt(block_y - 30 + mark_r2 + 88)} 2008,{fmt(block_y - 30 + mark_r2 + 95)} 2000,{fmt(block_y - 30 + mark_r2 + 102)} 1992,{fmt(block_y - 30 + mark_r2 + 95)}" fill="{VERMILION}"/>
<text x="2000" y="{fmt(block_y - 30 + mark_r2 + 122)}" text-anchor="middle"
      font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="18" fill="{VERMILION}" letter-spacing="4">SAMURAI UTARI Inc.</text>
'''
blocks += label(2000, block_y + BLOCK_R + 104, "03  ロゴマーク + 和文社名 — Logo with Japanese name", 20, INDIGO_DEEP, italic=True)

# カラーパレット
palette_y = 1050
palette_title = f'''
<text x="80" y="{palette_y}" font-family="'Noto Serif CJK SC','Noto Serif JP',serif"
      font-size="34" fill="{INDIGO}" font-weight="700">COLOR PALETTE｜色彩体系</text>
<line x1="80" y1="{palette_y+20}" x2="480" y2="{palette_y+20}" stroke="{INDIGO}" stroke-width="2"/>
'''
sw_y = palette_y + 60
sw_w, sw_h, sw_gap = 180, 180, 40
swatches = ""
swatches += swatch(80,                      sw_y, sw_w, sw_h, INDIGO,       "藍 / Indigo (Primary)",  "#123563")
swatches += swatch(80 + (sw_w+sw_gap)*1,    sw_y, sw_w, sw_h, INDIGO_DEEP,  "深藍 / Indigo Deep",     "#0A2044")
swatches += swatch(80 + (sw_w+sw_gap)*2,    sw_y, sw_w, sw_h, "#1f4a86",    "明藍 / Indigo Light",    "#1F4A86")
swatches += swatch(80 + (sw_w+sw_gap)*3,    sw_y, sw_w, sw_h, VERMILION,    "朱 / Vermilion (Accent)","#8B2500")
swatches += swatch(80 + (sw_w+sw_gap)*4,    sw_y, sw_w, sw_h, VERMILION_LT, "朱明 / Vermilion Light", "#B23818")
swatches += swatch(80 + (sw_w+sw_gap)*5,    sw_y, sw_w, sw_h, PAPER,        "和紙 / Washi",           "#F6F2E7")

# コンセプト解説
concept = f'''
<text x="1480" y="{palette_y}" font-family="'Noto Serif CJK SC','Noto Serif JP',serif"
      font-size="34" fill="{INDIGO}" font-weight="700">CONCEPT｜意匠解説</text>
<line x1="1480" y1="{palette_y+20}" x2="1780" y2="{palette_y+20}" stroke="{INDIGO}" stroke-width="2"/>

<text x="1480" y="{palette_y+70}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="19" fill="{INDIGO}" font-weight="700">五弁花（梅紋）</text>
<text x="1480" y="{palette_y+96}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="16" fill="{INDIGO_DEEP}">"出藍の誉れ"─ 藍より青し。</text>
<text x="1480" y="{palette_y+118}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="16" fill="{INDIGO_DEEP}">若き才が師を超えるという、我々の矜持。</text>

<text x="1480" y="{palette_y+160}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="19" fill="{INDIGO}" font-weight="700">二重円</text>
<text x="1480" y="{palette_y+186}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="16" fill="{INDIGO_DEEP}">ウタリ（アイヌ語：同胞）。</text>
<text x="1480" y="{palette_y+208}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="16" fill="{INDIGO_DEEP}">内と外、個と群、地方と世界を結ぶ。</text>

<text x="1480" y="{palette_y+250}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="19" fill="{INDIGO}" font-weight="700">花芯の朱</text>
<text x="1480" y="{palette_y+276}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="16" fill="{INDIGO_DEEP}">革命の切っ先。若き侍の意志と熱量。</text>

<text x="1480" y="{palette_y+310}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="19" fill="{INDIGO}" font-weight="700">和紙の経線 × 葉の成長</text>
<text x="1480" y="{palette_y+336}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="16" fill="{INDIGO_DEEP}">静謐な日本の伝統と、自然に根を張る成長。</text>
'''

# フッター
footer = f'''
<rect x="0" y="{H-80}" width="{W}" height="80" fill="{INDIGO_DEEP}"/>
<text x="80" y="{H-30}" font-family="'IPAexGothic','Noto Sans JP',sans-serif"
      font-size="18" fill="{PAPER}" opacity="0.85">和の魂を持った若者モダン企業 ─ 地方に革命を起こす現代のサムライ集団</text>
<text x="{W-80}" y="{H-30}" text-anchor="end" font-family="'Cinzel',serif"
      font-size="16" fill="{PAPER}" letter-spacing="3">SAMURAI UTARI Inc. / Sapporo, Japan</text>
'''

svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
  <rect width="{W}" height="{H}" fill="{PAPER}"/>
  {title}
  {blocks}
  {palette_title}
  {swatches}
  {concept}
  {footer}
</svg>
'''

with open(os.path.join(OUT, "brand_sheet.svg"), "w", encoding="utf-8") as f:
    f.write(svg)
print("wrote brand_sheet.svg")
