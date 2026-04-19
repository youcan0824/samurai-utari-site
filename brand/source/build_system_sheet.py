"""
ロゴシステム ブランドシート ─ 3段階のマーク体系
Primary (剣梅リファイン) / Secondary (刀＋斬撃 v3) / Sub (縮減版)
"""
import os, cairosvg
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.dirname(os.path.abspath(__file__))
INDIGO = (18, 53, 99)
INDIGO_DEEP = (10, 32, 68)
VERMILION = (139, 37, 0)
PAPER = (246, 242, 231)

W, H = 2800, 1800
sheet = Image.new("RGB", (W, H), PAPER)
draw = ImageDraw.Draw(sheet)

try:
    FONT_HERO   = ImageFont.truetype("/sessions/gifted-awesome-hypatia/.fonts/NotoSerifCJKsc-Regular.otf", 56)
    FONT_TITLE  = ImageFont.truetype("/sessions/gifted-awesome-hypatia/.fonts/NotoSerifCJKsc-Regular.otf", 36)
    FONT_SUB    = ImageFont.truetype("/sessions/gifted-awesome-hypatia/.fonts/NotoSerifCJKsc-Regular.otf", 24)
    FONT_BODY   = ImageFont.truetype("/sessions/gifted-awesome-hypatia/.fonts/ipaexg.ttf", 20)
    FONT_NOTE   = ImageFont.truetype("/sessions/gifted-awesome-hypatia/.fonts/ipaexg.ttf", 16)
except Exception:
    FONT_HERO = FONT_TITLE = FONT_SUB = FONT_BODY = FONT_NOTE = ImageFont.load_default()

# ヘッダー
draw.rectangle([0, 0, W, 140], fill=INDIGO_DEEP)
draw.text((60, 30), "SAMURAI UTARI  ─  Brand Identity System", font=FONT_HERO, fill=PAPER)
draw.text((60, 105), "Logo System v1.0  ／  Primary × Secondary × Sub", font=FONT_NOTE, fill=PAPER)
# 朱の小菱
for i, x in enumerate([W-120, W-80, W-40]):
    d = 10
    draw.polygon([(x, 50-d),(x+d, 50),(x, 50+d),(x-d, 50)], fill=VERMILION)

def paste_svg(x, y, svg_path, size):
    png_path = f'/tmp/ss_{os.path.basename(svg_path)}.png'
    cairosvg.svg2png(url=os.path.join(OUT, svg_path), write_to=png_path, output_width=size, output_height=size)
    img = Image.open(png_path).convert("RGBA")
    bg = Image.new("RGB", img.size, PAPER)
    if img.mode == 'RGBA' and len(img.split()) == 4:
        bg.paste(img, mask=img.split()[-1])
    else:
        bg.paste(img)
    sheet.paste(bg, (x, y))

# ==============================================
# Primary
# ==============================================
y0 = 200
draw.text((80, y0), "01", font=FONT_HERO, fill=INDIGO)
draw.text((180, y0+10), "PRIMARY MARK  ／  剣梅紋（プライマリ）", font=FONT_TITLE, fill=INDIGO)
draw.text((180, y0+70), "基本用途・名刺・Web・アプリアイコン・サイン・刻印", font=FONT_BODY, fill=INDIGO_DEEP)

# 大きめ表示
paste_svg(80, y0+130, "final_mark_white.svg", 420)
# サイズ階調
for i, sz in enumerate([200, 100, 64, 32, 16]):
    x = 560 + i*200
    paste_svg(x + (200 - sz)//2, y0 + 250 - sz//2 + 30, "final_mark_white.svg", sz)
    draw.text((x + 100, y0 + 380), f"{sz}px", font=FONT_NOTE, fill=INDIGO, anchor="ma")

# モノクロ
paste_svg(1650, y0+130, "final_mark_mono.svg", 280)
draw.text((1790, y0+430), "Monochrome ○", font=FONT_BODY, fill=INDIGO, anchor="ma")

# FINAL EN (with text)
paste_svg(2050, y0+100, "final_en_white.svg", 380)
draw.text((2240, y0+500), "英文社名入り", font=FONT_BODY, fill=INDIGO, anchor="ma")

# ==============================================
# Secondary (v3 刀＋斬撃)
# ==============================================
y1 = 780
draw.text((80, y1), "02", font=FONT_HERO, fill=INDIGO)
draw.text((180, y1+10), "SECONDARY MARK  ／  刀＋斬撃（セレモニアル）", font=FONT_TITLE, fill=INDIGO)
draw.text((180, y1+70), "大判印刷・式典・パッケージ・装幀・ポスター", font=FONT_BODY, fill=INDIGO_DEEP)
paste_svg(80, y1+130, "mark_only_white.svg", 320)
paste_svg(480, y1+130, "logo_en_white.svg", 320)
paste_svg(880, y1+130, "logo_jp_white.svg", 320)

# ==============================================
# Sub (A 縮減)
# ==============================================
y2 = 1250
draw.text((80, y2), "03", font=FONT_HERO, fill=INDIGO)
draw.text((180, y2+10), "SUB MARK  ／  縮減版梅紋（サブ）", font=FONT_TITLE, fill=INDIGO)
draw.text((180, y2+70), "セキュリティ印・契約刻印・サブブランド・透かし", font=FONT_BODY, fill=INDIGO_DEEP)
paste_svg(80, y2+130, "variant_A_white.svg", 280)
paste_svg(420, y2+130, "variant_A_mono.svg", 280)
# サイズ階調
for i, sz in enumerate([100, 64, 32, 16]):
    x = 760 + i*180
    paste_svg(x + (180 - sz)//2, y2 + 260 - sz//2 + 10, "variant_A_white.svg", sz)
    draw.text((x + 90, y2 + 380), f"{sz}px", font=FONT_NOTE, fill=INDIGO, anchor="ma")

# JP final on right side
paste_svg(1550, y2+100, "final_jp_white.svg", 380)
draw.text((1740, y2+500), "和文社名入り (Primary)", font=FONT_BODY, fill=INDIGO, anchor="ma")

# フッター
draw.rectangle([0, H-90, W, H], fill=INDIGO_DEEP)
draw.text((60, H-60), "和の魂を持った若者モダン企業  ─  地方に革命を起こす現代のサムライ集団", font=FONT_BODY, fill=PAPER)
draw.text((W-60, H-60), "SAMURAI UTARI Inc.  ／  Sapporo, Japan", font=FONT_BODY, fill=PAPER, anchor="ra")

sheet.save(os.path.join(OUT, "brand_system_sheet.png"), "PNG")
print("brand_system_sheet.png saved")
