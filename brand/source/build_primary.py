"""
株式会社サムライウタリ｜最終マーク（案B リファイン版）
剣梅紋 ─ 花弁=切先、反り導入、ヒラメキ花芯、刃物タイポ
"""
import math, os
OUT = os.path.dirname(os.path.abspath(__file__))

INDIGO       = "#123563"
INDIGO_DEEP  = "#0a2044"
INDIGO_LT    = "#1f4a86"
VERMILION    = "#8b2500"
VERMILION_LT = "#b23818"
PAPER        = "#f6f2e7"


def polar(cx, cy, r, deg):
    a = math.radians(deg)
    return (cx + r*math.cos(a), cy + r*math.sin(a))

def fmt(x): return f"{x:.3f}"
def p(xy): return f"{fmt(xy[0])},{fmt(xy[1])}"


# ================================================================
# 反り入り剣花弁（刀の反りを花弁に導入）
# ================================================================
def build_sword_petal(cx, cy, r_tip, r_base, angle_deg, half_w=20, sori=4.5):
    """切先型花弁 w/ 反り。sori 度だけ tip が進行方向(+)に傾く。
    結果：5枚が同方向に微回転し、静止した剣梅紋に動的な気を纏わせる。"""
    a = angle_deg
    a_tip = a + sori

    # 基部（通常位置）
    bl = polar(cx, cy, r_base, a - half_w*0.55)
    br = polar(cx, cy, r_base, a + half_w*0.55)

    # 中腹の最大幅（非対称：leading narrow / trailing wide）
    mid_l = polar(cx, cy, r_tip*0.54, a - half_w*1.00)      # 後縁(峰側)広がる
    mid_r = polar(cx, cy, r_tip*0.58, a + half_w*0.78)      # 前縁(刃側)絞る

    # 先端周辺（sori で傾ける）
    tip     = polar(cx, cy, r_tip,       a_tip)
    pre_l   = polar(cx, cy, r_tip*0.90,  a_tip - half_w*0.22)
    pre_r   = polar(cx, cy, r_tip*0.90,  a_tip + half_w*0.20)

    # 制御点
    c_bm_l = polar(cx, cy, r_tip*0.24, a - half_w*0.93)
    c_mt_l = polar(cx, cy, r_tip*0.80, a - half_w*0.72)
    c_mt_r = polar(cx, cy, r_tip*0.80, a_tip + half_w*0.58)
    c_bm_r = polar(cx, cy, r_tip*0.24, a + half_w*0.92)

    return (f"M {p(bl)} "
            f"Q {p(c_bm_l)} {p(mid_l)} "
            f"Q {p(c_mt_l)} {p(pre_l)} "
            f"L {p(tip)} "
            f"L {p(pre_r)} "
            f"Q {p(c_mt_r)} {p(mid_r)} "
            f"Q {p(c_bm_r)} {p(br)} Z")


# ================================================================
# 花芯（ヒラメキ入り）
# ================================================================
def build_center(cx, cy, r, color_main=VERMILION, color_gleam=VERMILION_LT):
    """朱の小円 + ヒラメキの白閃 + 中央の深い点。
    "革命の切っ先" の一点凝縮。"""
    # 本体
    main = f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(r)}" fill="{color_main}"/>'
    # ヒラメキ（上面の小さな閃光 = highlight）
    gx = cx - r*0.35
    gy = cy - r*0.40
    gleam = (
        f'<ellipse cx="{fmt(gx)}" cy="{fmt(gy)}" '
        f'rx="{fmt(r*0.32)}" ry="{fmt(r*0.18)}" '
        f'transform="rotate(-30 {fmt(gx)} {fmt(gy)})" '
        f'fill="#ffffff" opacity="0.55"/>'
    )
    # 深い中央点（核）
    core = f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(r*0.22)}" fill="{INDIGO_DEEP}"/>'
    return main + gleam + core


# ================================================================
# 刃物ブラケット（タイポ左右の装飾）
# ================================================================
def blade_bracket(x, y, size_px, direction="left", color=None):
    """刀の切先を模した小さな三角装飾。direction='left' は右向き切先、'right' は左向き。"""
    color = color or INDIGO
    s = size_px
    if direction == "left":
        pts = f"{fmt(x)},{fmt(y)} {fmt(x+s*1.4)},{fmt(y-s*0.5)} {fmt(x+s*1.4)},{fmt(y+s*0.5)}"
    else:
        pts = f"{fmt(x)},{fmt(y)} {fmt(x-s*1.4)},{fmt(y-s*0.5)} {fmt(x-s*1.4)},{fmt(y+s*0.5)}"
    return f'<polygon points="{pts}" fill="{color}"/>'


# ================================================================
# ロゴマーク本体
# ================================================================
def draw_final_mark(cx, cy, R, show_inner_circle=True, for_monochrome=False):
    R_OUT = R
    R_IN  = R * 0.935
    R_TIP = R * 0.82
    R_BASE = R * 0.11
    # 花芯：黄金比で縮減（従来 R*0.09 → R*0.062）
    R_CEN = R * 0.062

    main_c = "#000000" if for_monochrome else INDIGO
    accent = "#000000" if for_monochrome else VERMILION

    parts = []
    # 外円（太）
    parts.append(
        f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(R_OUT)}" '
        f'fill="none" stroke="{main_c}" stroke-width="{fmt(R*0.022)}"/>'
    )
    # 内円（細）
    if show_inner_circle:
        parts.append(
            f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(R_IN)}" '
            f'fill="none" stroke="{main_c}" stroke-width="{fmt(R*0.005)}"/>'
        )
    # 花弁
    petals = [build_sword_petal(cx, cy, R_TIP, R_BASE, -90 + i*72,
                                half_w=20, sori=4.5) for i in range(5)]
    for d in petals:
        parts.append(f'<path d="{d}" fill="{main_c}"/>')
    # 花芯（ヒラメキ入り）
    if for_monochrome:
        parts.append(f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(R_CEN)}" fill="#000000"/>')
    else:
        parts.append(build_center(cx, cy, R_CEN))
    return "".join(parts)


# ================================================================
# SVG 生成：ロゴマーク単体
# ================================================================
def svg_mark_only(size=1200, show_bg=False, monochrome=False):
    cx = size/2; cy = size/2; R = size*0.42
    bg = f'<rect width="{size}" height="{size}" fill="{PAPER}"/>' if show_bg else ""
    mark = draw_final_mark(cx, cy, R, for_monochrome=monochrome)
    return (f'<?xml version="1.0" encoding="UTF-8"?>\n'
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" '
            f'width="{size}" height="{size}"><title>SAMURAI UTARI Primary Mark</title>'
            f'{bg}{mark}</svg>')


# ================================================================
# ロゴマーク＋タイポ（刃物ブラケット付き）
# ================================================================
def svg_with_text(size=1200, text_main="SAMURAI UTARI", text_sub="INCORPORATED",
                  is_japanese=False, show_bg=False, monochrome=False):
    cx = size/2
    mark_r = size*0.30
    cy_mark = size*0.36
    bg = f'<rect width="{size}" height="{size}" fill="{PAPER}"/>' if show_bg else ""
    mark = draw_final_mark(cx, cy_mark, mark_r, for_monochrome=monochrome)

    text_y_main = cy_mark + mark_r + size*0.155
    text_y_sub  = text_y_main + size*0.090

    main_c = "#000000" if monochrome else INDIGO
    accent = "#000000" if monochrome else VERMILION

    if is_japanese:
        main_font = "'Noto Serif CJK SC','Source Han Serif SC','Noto Serif JP','Yu Mincho',serif"
        sub_font  = "'IPAexGothic','Noto Sans JP','Yu Gothic',sans-serif"
        main_size = size*0.056
        sub_size  = size*0.022
        main_ls   = size*0.010
        sub_ls    = size*0.020
        main_font_weight = "600"
    else:
        main_font = "'Cinzel','Trajan Pro','Optima','Times New Roman',serif"
        sub_font  = "'Cinzel','Optima',serif"
        main_size = size*0.058
        sub_size  = size*0.020
        main_ls   = size*0.018
        sub_ls    = size*0.032
        main_font_weight = "700"

    # 刃物ブラケット（主タイトルの左右）
    main_char_count = len(text_main)
    # 推定文字幅
    est_text_width = main_size * main_char_count * (0.98 if is_japanese else 0.58) + main_ls * (main_char_count - 1)
    bracket_gap = size * 0.028
    bracket_size = size * 0.009
    bx_l = cx - est_text_width*0.5 - bracket_gap
    bx_r = cx + est_text_width*0.5 + bracket_gap
    by = text_y_main - main_size*0.32
    bracket_l = blade_bracket(bx_l - bracket_size*1.4, by, bracket_size, "right", main_c)
    bracket_r = blade_bracket(bx_r + bracket_size*1.4, by, bracket_size, "left", main_c)

    # 朱の小菱（タイトル下、サブタイトル上）
    diamond_y = (text_y_main + text_y_sub) * 0.5 + size*0.010
    d_half = size*0.006
    diamond = (
        f'<polygon points="{fmt(cx)},{fmt(diamond_y-d_half)} '
        f'{fmt(cx+d_half)},{fmt(diamond_y)} '
        f'{fmt(cx)},{fmt(diamond_y+d_half)} '
        f'{fmt(cx-d_half)},{fmt(diamond_y)}" fill="{accent}"/>'
    )
    # 朱菱の左右に細い線
    line_y = diamond_y
    orn_half_w = size * 0.14
    line_lr = (
        f'<line x1="{fmt(cx - orn_half_w)}" y1="{fmt(line_y)}" '
        f'x2="{fmt(cx - d_half*2.4)}" y2="{fmt(line_y)}" '
        f'stroke="{main_c}" stroke-width="1" opacity="0.75"/>'
        f'<line x1="{fmt(cx + d_half*2.4)}" y1="{fmt(line_y)}" '
        f'x2="{fmt(cx + orn_half_w)}" y2="{fmt(line_y)}" '
        f'stroke="{main_c}" stroke-width="1" opacity="0.75"/>'
    )

    text_main_svg = (
        f'<text x="{fmt(cx)}" y="{fmt(text_y_main)}" text-anchor="middle" '
        f'font-family="{main_font}" font-weight="{main_font_weight}" '
        f'font-size="{fmt(main_size)}" fill="{main_c}" '
        f'letter-spacing="{fmt(main_ls)}">{text_main}</text>'
    )
    text_sub_svg = (
        f'<text x="{fmt(cx)}" y="{fmt(text_y_sub)}" text-anchor="middle" '
        f'font-family="{sub_font}" font-weight="500" '
        f'font-size="{fmt(sub_size)}" fill="{accent}" '
        f'letter-spacing="{fmt(sub_ls)}">{text_sub}</text>'
    ) if text_sub else ""

    return (f'<?xml version="1.0" encoding="UTF-8"?>\n'
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" '
            f'width="{size}" height="{size}"><title>SAMURAI UTARI {text_main}</title>'
            f'{bg}{mark}{bracket_l}{bracket_r}{text_main_svg}{line_lr}{diamond}{text_sub_svg}</svg>')


def save(path, content):
    with open(path, "w", encoding="utf-8") as f: f.write(content)
    print("wrote:", os.path.basename(path))


if __name__ == "__main__":
    # マーク単体
    save(os.path.join(OUT, "final_mark.svg"),            svg_mark_only(1200, show_bg=False))
    save(os.path.join(OUT, "final_mark_white.svg"),      svg_mark_only(1200, show_bg=True))
    save(os.path.join(OUT, "final_mark_mono.svg"),       svg_mark_only(1200, show_bg=True, monochrome=True))

    # 英文社名入り
    save(os.path.join(OUT, "final_en.svg"),
         svg_with_text(1200, "SAMURAI UTARI", "INCORPORATED", is_japanese=False))
    save(os.path.join(OUT, "final_en_white.svg"),
         svg_with_text(1200, "SAMURAI UTARI", "INCORPORATED", is_japanese=False, show_bg=True))

    # 和文社名入り
    save(os.path.join(OUT, "final_jp.svg"),
         svg_with_text(1200, "株式会社サムライウタリ", "SAMURAI UTARI Inc.", is_japanese=True))
    save(os.path.join(OUT, "final_jp_white.svg"),
         svg_with_text(1200, "株式会社サムライウタリ", "SAMURAI UTARI Inc.", is_japanese=True, show_bg=True))

    # favicon 用（マーク単体、小サイズ）
    for sz in (48, 32, 16):
        save(os.path.join(OUT, f"final_favicon_{sz}.svg"), svg_mark_only(sz, show_bg=True))

    print("done.")
