"""
サムライウタリ ロゴ ─ 2つの再設計案
案A：ラジカル縮減（flower + circle + center のみ）
案B：剣梅融合（花弁＝切先）
"""
import math, os
OUT = os.path.dirname(os.path.abspath(__file__))

INDIGO = "#123563"
INDIGO_DEEP = "#0a2044"
VERMILION = "#8b2500"
PAPER = "#f6f2e7"

def polar(cx, cy, r, deg):
    a = math.radians(deg)
    return (cx + r*math.cos(a), cy + r*math.sin(a))

def fmt(x): return f"{x:.3f}"
def p(xy): return f"{fmt(xy[0])},{fmt(xy[1])}"


# ================================================================
# 案A：ラジカル縮減版（梅紋＋二重円＋朱芯のみ）
# ================================================================
def build_petal_a(cx, cy, r_tip, r_base, angle_deg, half_w=34, notch=0.12):
    a = angle_deg
    bl = polar(cx, cy, r_base, a - half_w*0.40)
    br = polar(cx, cy, r_base, a + half_w*0.40)
    sl = polar(cx, cy, r_tip*0.88, a - half_w*0.92)
    sr = polar(cx, cy, r_tip*0.88, a + half_w*0.92)
    tl = polar(cx, cy, r_tip, a - half_w*0.32)
    tr = polar(cx, cy, r_tip, a + half_w*0.32)
    nt = polar(cx, cy, r_tip*(1-notch), a)
    c1 = polar(cx, cy, r_tip*0.78, a - half_w*0.98)
    c2 = polar(cx, cy, r_tip*1.02, a - half_w*0.50)
    c3 = polar(cx, cy, r_tip*(1-notch*0.6), a - half_w*0.06)
    c4 = polar(cx, cy, r_tip*(1-notch*0.6), a + half_w*0.06)
    c5 = polar(cx, cy, r_tip*1.02, a + half_w*0.50)
    c6 = polar(cx, cy, r_tip*0.78, a + half_w*0.98)
    return (f"M {p(bl)} Q {p(c1)} {p(sl)} Q {p(c2)} {p(tl)} "
            f"Q {p(c3)} {p(nt)} Q {p(c4)} {p(tr)} "
            f"Q {p(c5)} {p(sr)} Q {p(c6)} {p(br)} Z")


def svg_variant_a(size=1200, show_bg=False, monochrome=False):
    cx = size/2; cy = size/2
    R = size * 0.42
    # パラメータ：要素は花弁＋二重円＋中心の 3つのみ
    R_OUT = R
    R_IN  = R * 0.93
    R_FLW = R * 0.72
    R_BASE = R * 0.11
    R_CEN = size * 0.035   # 小さめの朱芯
    main = INDIGO
    accent = "#000000" if monochrome else VERMILION
    main_c = "#000000" if monochrome else INDIGO

    petals = [build_petal_a(cx, cy, R_FLW, R_BASE, -90 + i*72, half_w=36, notch=0.14) for i in range(5)]
    petal_svg = "".join([f'<path d="{d}" fill="{main_c}"/>' for d in petals])

    bg = f'<rect width="{size}" height="{size}" fill="{PAPER}"/>' if show_bg else ""
    return (f'<?xml version="1.0" encoding="UTF-8"?>\n'
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}">'
            f'{bg}'
            f'<circle cx="{cx}" cy="{cy}" r="{fmt(R_OUT)}" fill="none" stroke="{main_c}" stroke-width="{fmt(R*0.020)}"/>'
            f'<circle cx="{cx}" cy="{cy}" r="{fmt(R_IN)}" fill="none" stroke="{main_c}" stroke-width="{fmt(R*0.005)}"/>'
            f'{petal_svg}'
            f'<circle cx="{cx}" cy="{cy}" r="{fmt(R_CEN)}" fill="{accent}"/>'
            f'</svg>')


# ================================================================
# 案B：剣梅融合版（花弁＝切先）
# ================================================================
def build_sword_petal(cx, cy, r_tip, r_base, angle_deg, half_w=22):
    """先端が鋭く尖る切先型の花弁。基部は細く、中腹でやや膨らみ、先端で一点に収束。
    5枚で 剣梅紋 (ken-bai-mon) を構成。"""
    a = angle_deg
    # 基部
    bl = polar(cx, cy, r_base, a - half_w*0.55)
    br = polar(cx, cy, r_base, a + half_w*0.55)
    # 膨らみ（60%地点の最大幅）
    mid_l = polar(cx, cy, r_tip*0.55, a - half_w*0.95)
    mid_r = polar(cx, cy, r_tip*0.55, a + half_w*0.95)
    # 先端（鋭い）
    tip = polar(cx, cy, r_tip, a)
    # 先端直前（tipをシャープに見せる制御点）
    pre_tip_l = polar(cx, cy, r_tip*0.90, a - half_w*0.25)
    pre_tip_r = polar(cx, cy, r_tip*0.90, a + half_w*0.25)
    # 制御点
    c_bm_l = polar(cx, cy, r_tip*0.25, a - half_w*0.90)
    c_mt_l = polar(cx, cy, r_tip*0.80, a - half_w*0.70)
    c_mt_r = polar(cx, cy, r_tip*0.80, a + half_w*0.70)
    c_bm_r = polar(cx, cy, r_tip*0.25, a + half_w*0.90)
    return (f"M {p(bl)} "
            f"Q {p(c_bm_l)} {p(mid_l)} "
            f"Q {p(c_mt_l)} {p(pre_tip_l)} "
            f"L {p(tip)} "
            f"L {p(pre_tip_r)} "
            f"Q {p(c_mt_r)} {p(mid_r)} "
            f"Q {p(c_bm_r)} {p(br)} Z")


def svg_variant_b(size=1200, show_bg=False, monochrome=False):
    cx = size/2; cy = size/2
    R = size * 0.42
    R_OUT = R
    R_IN  = R * 0.93
    R_TIP = R * 0.82   # 切先が二重円の内側近くに到達する（剣の張り出し）
    R_BASE = R * 0.12
    R_CEN  = size * 0.038
    main_c = "#000000" if monochrome else INDIGO
    accent = "#000000" if monochrome else VERMILION

    petals = [build_sword_petal(cx, cy, R_TIP, R_BASE, -90 + i*72, half_w=20) for i in range(5)]
    petal_svg = "".join([f'<path d="{d}" fill="{main_c}"/>' for d in petals])

    bg = f'<rect width="{size}" height="{size}" fill="{PAPER}"/>' if show_bg else ""
    return (f'<?xml version="1.0" encoding="UTF-8"?>\n'
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}">'
            f'{bg}'
            f'<circle cx="{cx}" cy="{cy}" r="{fmt(R_OUT)}" fill="none" stroke="{main_c}" stroke-width="{fmt(R*0.020)}"/>'
            f'<circle cx="{cx}" cy="{cy}" r="{fmt(R_IN)}" fill="none" stroke="{main_c}" stroke-width="{fmt(R*0.005)}"/>'
            f'{petal_svg}'
            f'<circle cx="{cx}" cy="{cy}" r="{fmt(R_CEN)}" fill="{accent}"/>'
            f'</svg>')


def save(path, content):
    with open(path, "w", encoding="utf-8") as f: f.write(content)
    print("wrote:", os.path.basename(path))


if __name__ == "__main__":
    # Variant A
    save(os.path.join(OUT, "variant_A_color.svg"),   svg_variant_a(1200, show_bg=False))
    save(os.path.join(OUT, "variant_A_white.svg"),   svg_variant_a(1200, show_bg=True))
    save(os.path.join(OUT, "variant_A_mono.svg"),    svg_variant_a(1200, show_bg=True, monochrome=True))
    # Variant B
    save(os.path.join(OUT, "variant_B_color.svg"),   svg_variant_b(1200, show_bg=False))
    save(os.path.join(OUT, "variant_B_white.svg"),   svg_variant_b(1200, show_bg=True))
    save(os.path.join(OUT, "variant_B_mono.svg"),    svg_variant_b(1200, show_bg=True, monochrome=True))
    print("done.")
