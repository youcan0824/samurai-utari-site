"""
株式会社サムライウタリ ロゴデザイン生成スクリプト v3
- 五弁花（梅紋）の気品 × 刀紋の鋭さ × 一閃の斬撃線
- 和モダン・精緻・革命的
"""
import math
import os

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


# ---- 花弁（梅） ----
def build_petal(cx, cy, r_tip, r_base, angle_deg, half_width=36, notch_depth=0.14):
    a0 = angle_deg
    base_l = polar(cx, cy, r_base, a0 - half_width*0.40)
    base_r = polar(cx, cy, r_base, a0 + half_width*0.40)
    shoulder_l = polar(cx, cy, r_tip*0.88, a0 - half_width*0.92)
    shoulder_r = polar(cx, cy, r_tip*0.88, a0 + half_width*0.92)
    tip_l = polar(cx, cy, r_tip, a0 - half_width*0.32)
    tip_r = polar(cx, cy, r_tip, a0 + half_width*0.32)
    notch = polar(cx, cy, r_tip*(1.0 - notch_depth), a0)
    c_bs_l_1 = polar(cx, cy, r_base*1.15, a0 - half_width*0.82)
    c_bs_l_2 = polar(cx, cy, r_tip*0.78, a0 - half_width*0.98)
    c_st_l_1 = polar(cx, cy, r_tip*0.98, a0 - half_width*0.78)
    c_st_l_2 = polar(cx, cy, r_tip*1.02, a0 - half_width*0.52)
    c_tn_l_1 = polar(cx, cy, r_tip*0.995, a0 - half_width*0.16)
    c_tn_l_2 = polar(cx, cy, r_tip*(1.0 - notch_depth*0.6), a0 - half_width*0.06)
    c_tn_r_1 = polar(cx, cy, r_tip*(1.0 - notch_depth*0.6), a0 + half_width*0.06)
    c_tn_r_2 = polar(cx, cy, r_tip*0.995, a0 + half_width*0.16)
    c_st_r_1 = polar(cx, cy, r_tip*1.02, a0 + half_width*0.52)
    c_st_r_2 = polar(cx, cy, r_tip*0.98, a0 + half_width*0.78)
    c_bs_r_1 = polar(cx, cy, r_tip*0.78, a0 + half_width*0.98)
    c_bs_r_2 = polar(cx, cy, r_base*1.15, a0 + half_width*0.82)
    d = (f"M {p(base_l)} "
         f"C {p(c_bs_l_1)} {p(c_bs_l_2)} {p(shoulder_l)} "
         f"C {p(c_st_l_1)} {p(c_st_l_2)} {p(tip_l)} "
         f"C {p(c_tn_l_1)} {p(c_tn_l_2)} {p(notch)} "
         f"C {p(c_tn_r_1)} {p(c_tn_r_2)} {p(tip_r)} "
         f"C {p(c_st_r_1)} {p(c_st_r_2)} {p(shoulder_r)} "
         f"C {p(c_bs_r_1)} {p(c_bs_r_2)} {p(base_r)} Z")
    return d


def build_flower(cx, cy, r_tip, r_base, start_angle=-90, half_width=36, notch_depth=0.14):
    return [build_petal(cx, cy, r_tip, r_base, start_angle + i*72, half_width, notch_depth) for i in range(5)]


# ---- 刀（打刀） ----
def build_katana(cx, cy, length, angle_deg, flip_edge=False):
    a = math.radians(angle_deg)
    dx, dy = math.cos(a), math.sin(a)
    edge_sign = -1 if flip_edge else 1
    ppx = -math.sin(a) * edge_sign
    ppy =  math.cos(a) * edge_sign
    hilt_len   = length * 0.22
    guard_th   = length * 0.018
    habaki_len = length * 0.030
    blade_len  = length - hilt_len - guard_th - habaki_len
    hilt_w   = length * 0.028
    guard_w  = length * 0.078
    habaki_w = length * 0.028
    blade_w  = length * 0.032
    curve    = length * 0.050

    def along(t): return (cx + t*dx, cy + t*dy)
    def edge(pt, w): return (pt[0] + w*ppx, pt[1] + w*ppy)
    def back(pt, w): return (pt[0] - w*ppx, pt[1] - w*ppy)

    kashira = along(0)
    hilt_end = along(hilt_len)

    kashira_el = (f'<ellipse cx="{fmt(kashira[0])}" cy="{fmt(kashira[1])}" '
                  f'rx="{fmt(hilt_w*0.60)}" ry="{fmt(hilt_w*1.40)}" '
                  f'transform="rotate({angle_deg} {fmt(kashira[0])} {fmt(kashira[1])})" '
                  f'fill="{INDIGO_DEEP}" stroke="{INDIGO_LT}" stroke-width="0.8"/>')

    h1 = edge(kashira, hilt_w*1.05); h2 = edge(hilt_end, hilt_w*1.10)
    h3 = back(hilt_end, hilt_w*1.10); h4 = back(kashira, hilt_w*1.05)
    hilt_body = (f'<polygon points="{p(h1)} {p(h2)} {p(h3)} {p(h4)}" '
                 f'fill="{INDIGO_DEEP}" stroke="{INDIGO_LT}" stroke-width="0.6"/>')

    hilt_wrap = []
    for i in range(1, 6):
        t = i / 6
        pt = along(t * hilt_len)
        ea = edge(pt, hilt_w*1.05); eb = back(pt, hilt_w*1.05)
        hilt_wrap.append(f'<line x1="{fmt(ea[0])}" y1="{fmt(ea[1])}" x2="{fmt(eb[0])}" y2="{fmt(eb[1])}" stroke="{INDIGO_LT}" stroke-width="0.7" opacity="0.7"/>')

    guard_center = along(hilt_len + guard_th*0.5)
    g1 = edge(guard_center, guard_w); g2 = along(hilt_len + guard_th)
    g3 = back(guard_center, guard_w); g4 = along(hilt_len)
    tsuba = f'<polygon points="{p(g1)} {p(g2)} {p(g3)} {p(g4)}" fill="{INDIGO_DEEP}" stroke="{INDIGO_LT}" stroke-width="1.0"/>'
    tsuba_eye = f'<circle cx="{fmt(guard_center[0])}" cy="{fmt(guard_center[1])}" r="{fmt(guard_w*0.13)}" fill="none" stroke="{INDIGO_LT}" stroke-width="0.7"/>'

    habaki_start = along(hilt_len + guard_th)
    habaki_end = along(hilt_len + guard_th + habaki_len)
    hb1 = edge(habaki_start, habaki_w); hb2 = edge(habaki_end, habaki_w*0.80)
    hb3 = back(habaki_end, habaki_w*0.80); hb4 = back(habaki_start, habaki_w)
    habaki = f'<polygon points="{p(hb1)} {p(hb2)} {p(hb3)} {p(hb4)}" fill="{INDIGO_LT}" stroke="{INDIGO_DEEP}" stroke-width="0.8"/>'

    blade_root = habaki_end
    blade_tip_raw = along(length)
    blade_tip = (blade_tip_raw[0] + curve*ppx, blade_tip_raw[1] + curve*ppy)
    edge_base = edge(blade_root, blade_w); back_base = back(blade_root, blade_w*0.75)
    mid_pt = along(hilt_len + guard_th + habaki_len + blade_len*0.55)
    edge_mid = (mid_pt[0] + (blade_w + curve*0.55)*ppx, mid_pt[1] + (blade_w + curve*0.55)*ppy)
    back_mid = (mid_pt[0] - (blade_w*0.55 - curve*0.55)*ppx, mid_pt[1] - (blade_w*0.55 - curve*0.55)*ppy)
    kissaki_edge = (blade_tip[0] + blade_w*0.15*dx, blade_tip[1] + blade_w*0.15*dy)
    blade_path = f'M {p(edge_base)} Q {p(edge_mid)} {p(kissaki_edge)} L {p(blade_tip)} Q {p(back_mid)} {p(back_base)} Z'
    blade = f'<path d="{blade_path}" fill="{INDIGO}" stroke="{INDIGO_DEEP}" stroke-width="1.6" stroke-linejoin="round"/>'

    sh_start = along(hilt_len + guard_th + habaki_len + blade_w*0.3)
    sh_mid_raw = along(hilt_len + guard_th + habaki_len + blade_len*0.55)
    sh_mid = (sh_mid_raw[0] + curve*0.25*ppx, sh_mid_raw[1] + curve*0.25*ppy)
    sh_end = (blade_tip[0] - blade_w*0.5*dx + curve*0.1*ppx, blade_tip[1] - blade_w*0.5*dy + curve*0.1*ppy)
    shinogi = f'<path d="M {p(sh_start)} Q {p(sh_mid)} {p(sh_end)}" fill="none" stroke="{INDIGO_LT}" stroke-width="1.0" opacity="0.7"/>'
    hamon = f'<path d="M {p(edge_base)} Q {p(edge_mid)} {p(kissaki_edge)}" fill="none" stroke="#c9dbf2" stroke-width="1.5" opacity="0.55"/>'

    return blade + hamon + shinogi + habaki + tsuba + tsuba_eye + hilt_body + "".join(hilt_wrap) + kashira_el


# ---- 斬撃線 ----
def build_slash(cx, cy, length, angle_deg, unique_id="slash1", color=None, width_ratio=0.008):
    color = color or VERMILION
    a = math.radians(angle_deg)
    half = length * 0.5
    x1 = cx - half*math.cos(a); y1 = cy - half*math.sin(a)
    x2 = cx + half*math.cos(a); y2 = cy + half*math.sin(a)
    w = length * width_ratio
    grad_id = f"grad_{unique_id}"
    grad = (f'<defs><linearGradient id="{grad_id}" x1="{fmt(x1)}" y1="{fmt(y1)}" x2="{fmt(x2)}" y2="{fmt(y2)}" gradientUnits="userSpaceOnUse">'
            f'<stop offset="0%" stop-color="{color}" stop-opacity="0"/>'
            f'<stop offset="38.2%" stop-color="{VERMILION_LT}" stop-opacity="0.0"/>'
            f'<stop offset="50%" stop-color="{VERMILION_LT}" stop-opacity="0.90"/>'
            f'<stop offset="61.8%" stop-color="{color}" stop-opacity="0.95"/>'
            f'<stop offset="76.4%" stop-color="{color}" stop-opacity="0.5"/>'
            f'<stop offset="100%" stop-color="{color}" stop-opacity="0"/>'
            f'</linearGradient></defs>')
    line = f'<line x1="{fmt(x1)}" y1="{fmt(y1)}" x2="{fmt(x2)}" y2="{fmt(y2)}" stroke="url(#{grad_id})" stroke-width="{fmt(w)}" stroke-linecap="round"/>'
    return grad + line


# ---- 縦縞 ----
def build_stripes(cx, cy, r, count=22, stroke_width=1.2, opacity=0.22):
    lines = []
    step = (2*r) / (count + 1)
    for i in range(1, count+1):
        x = cx - r + step*i
        lines.append(f'<line x1="{fmt(x)}" y1="{fmt(cy-r)}" x2="{fmt(x)}" y2="{fmt(cy+r)}" stroke="{INDIGO}" stroke-width="{stroke_width}" opacity="{opacity}"/>')
    return "\n        ".join(lines)


def build_stamens(cx, cy, r_out, count=10, color=None):
    color = color or INDIGO_DEEP
    out = []
    for i in range(count):
        ang = -90 + i*(360/count)
        x1, y1 = polar(cx, cy, r_out*0.10, ang)
        x2, y2 = polar(cx, cy, r_out*0.92, ang)
        out.append(f'<line x1="{fmt(x1)}" y1="{fmt(y1)}" x2="{fmt(x2)}" y2="{fmt(y2)}" stroke="{color}" stroke-width="2.2" stroke-linecap="round" opacity="0.95"/>')
        dxp, dyp = polar(cx, cy, r_out, ang)
        out.append(f'<circle cx="{fmt(dxp)}" cy="{fmt(dyp)}" r="{fmt(r_out*0.09)}" fill="{color}"/>')
    return "\n        ".join(out)


# ---- ロゴマーク本体 ----
def draw_mark(cx, cy, R, stripe_count=28, clip_id="clipMark", grad_id="gradCenter"):
    R_OUT = R; R_IN = R * 0.942
    R_FLW = R * 0.70; R_BASE = R * 0.16
    R_CEN = R * 0.165; R_STAM = R * 0.135; R_DOT = R * 0.048
    stroke_outer = R * 0.035; stroke_inner = R * 0.0085

    petals = build_flower(cx, cy, R_FLW, R_BASE, start_angle=-90, half_width=34, notch_depth=0.17)
    petal_svg = "\n        ".join([f'<path d="{d}" fill="{INDIGO}" stroke="{INDIGO_DEEP}" stroke-width="{fmt(R*0.004)}" stroke-linejoin="round"/>' for d in petals])

    # ===== 黄金比 φ=1.618 による刀と斬撃線の幾何設計 =====
    PHI = (1 + 5**0.5) / 2           # φ  = 1.618
    INV_PHI  = 1 / PHI               # 1/φ  = 0.618
    INV_PHI2 = 1 / (PHI * PHI)       # 1/φ² = 0.382
    INV_PHI3 = 1 / (PHI ** 3)        # 1/φ³ = 0.236

    katana_angle_deg = -30           # 構図の主軸角
    slash_angle_deg  = -30           # 刀と並行

    # 刀：長さ = 直径の 1/φ（黄金比）、中点は中心から上へ R/φ²
    katana_len = 2.0 * R * INV_PHI                     # 1.236 R
    katana_mid = (cx, cy - R * INV_PHI2)               # 上へ 0.382 R
    half_k = katana_len * 0.5
    ak = math.radians(katana_angle_deg)
    kashira_pos = (katana_mid[0] - half_k * math.cos(ak),
                   katana_mid[1] - half_k * math.sin(ak))
    katana = build_katana(kashira_pos[0], kashira_pos[1], katana_len,
                          angle_deg=katana_angle_deg, flip_edge=False)

    # 斬撃線：長さ = 刀 × φ（直径と等しい＝2R）、刀の峰側に R/φ³ だけ平行オフセット
    slash_len = katana_len * PHI                       # 2.0 R
    perp_deg  = katana_angle_deg - 90                  # 峰側への法線 = -120°
    perp_off  = R * INV_PHI3                           # 0.236 R
    slash_center = (katana_mid[0] + perp_off * math.cos(math.radians(perp_deg)),
                    katana_mid[1] + perp_off * math.sin(math.radians(perp_deg)))
    slash = build_slash(slash_center[0], slash_center[1], slash_len,
                        angle_deg=slash_angle_deg,
                        unique_id=clip_id + "slash", color=VERMILION,
                        width_ratio=0.006)

    parts = []
    parts.append(f'<defs><clipPath id="{clip_id}"><circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(R_IN)}"/></clipPath><radialGradient id="{grad_id}" cx="40%" cy="40%" r="70%"><stop offset="0%" stop-color="{VERMILION_LT}"/><stop offset="60%" stop-color="{VERMILION}"/><stop offset="100%" stop-color="#6a1c00"/></radialGradient></defs>')
    parts.append(f'<g clip-path="url(#{clip_id})">{build_stripes(cx, cy, R_IN, count=stripe_count, stroke_width=R*0.0032, opacity=0.28)}</g>')
    parts.append(f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(R_OUT)}" fill="none" stroke="{INDIGO}" stroke-width="{fmt(stroke_outer)}"/>')
    parts.append(f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(R_IN)}" fill="none" stroke="{INDIGO}" stroke-width="{fmt(stroke_inner)}"/>')
    parts.append(f'<g>{petal_svg}</g>')
    parts.append(f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(R_CEN)}" fill="url(#{grad_id})" stroke="{INDIGO_DEEP}" stroke-width="{fmt(R*0.005)}"/>')
    parts.append(f'<g>{build_stamens(cx, cy, R_STAM, count=10, color=INDIGO_DEEP)}</g>')
    parts.append(f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(R_DOT)}" fill="{VERMILION}"/>')
    parts.append(f'<circle cx="{fmt(cx - R_DOT*0.35)}" cy="{fmt(cy - R_DOT*0.35)}" r="{fmt(R_DOT*0.35)}" fill="{VERMILION_LT}" opacity="0.8"/>')
    # 刀は花弁より手前に配置（上部を切り裂く一閃として明確に見せる）
    parts.append(f'<g clip-path="url(#{clip_id})">{katana}</g>')
    # 斬撃線は最前面
    parts.append(f'<g clip-path="url(#{clip_id})">{slash}</g>')
    return "\n  ".join(parts)


# ---- SVG ラッパー ----
def svg_logomark(size=1200, show_bg=False):
    cx = size/2; cy = size/2; R = size*0.42
    bg = f'<rect width="{size}" height="{size}" fill="{PAPER}"/>' if show_bg else ""
    mark = draw_mark(cx, cy, R, stripe_count=30, clip_id="cm", grad_id="gc")
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}"><title>SAMURAI UTARI Logomark</title>{bg}{mark}</svg>'


def svg_with_text(size=1200, text_main="SAMURAI UTARI", text_sub="INCORPORATED", is_japanese=False, show_bg=False):
    cx = size/2; mark_r = size*0.32; cy_mark = size*0.38
    bg = f'<rect width="{size}" height="{size}" fill="{PAPER}"/>' if show_bg else ""
    mark = draw_mark(cx, cy_mark, mark_r, stripe_count=26, clip_id="cm2", grad_id="gc2")
    text_y_main = cy_mark + mark_r + size*0.135
    text_y_sub  = text_y_main + size*0.105
    if is_japanese:
        main_font = "'Noto Serif CJK SC','Source Han Serif SC','Noto Serif JP','Yu Mincho','Hiragino Mincho ProN',serif"
        sub_font = "'IPAexGothic','Noto Sans JP','Yu Gothic',sans-serif"
        main_size = size*0.062; sub_size = size*0.024
        main_ls = size*0.014; sub_ls = size*0.022
    else:
        main_font = "'Cinzel','Trajan Pro','Optima','Times New Roman',serif"
        sub_font = "'Cinzel','Optima',serif"
        main_size = size*0.066; sub_size = size*0.020
        main_ls = size*0.020; sub_ls = size*0.030
    orn_y = text_y_main + size*0.035
    orn_half = size*0.20; diamond = size*0.010
    ornament = (f'<line x1="{fmt(cx - orn_half)}" y1="{fmt(orn_y)}" x2="{fmt(cx - diamond*2.2)}" y2="{fmt(orn_y)}" stroke="{INDIGO}" stroke-width="1.2" opacity="0.8"/>'
                f'<line x1="{fmt(cx + diamond*2.2)}" y1="{fmt(orn_y)}" x2="{fmt(cx + orn_half)}" y2="{fmt(orn_y)}" stroke="{INDIGO}" stroke-width="1.2" opacity="0.8"/>'
                f'<polygon points="{fmt(cx)},{fmt(orn_y-diamond)} {fmt(cx+diamond)},{fmt(orn_y)} {fmt(cx)},{fmt(orn_y+diamond)} {fmt(cx-diamond)},{fmt(orn_y)}" fill="{VERMILION}"/>')
    text_main_svg = (f'<text x="{fmt(cx)}" y="{fmt(text_y_main)}" text-anchor="middle" font-family="{main_font}" font-weight="700" font-size="{fmt(main_size)}" fill="{INDIGO}" letter-spacing="{fmt(main_ls)}">{text_main}</text>')
    text_sub_svg = (f'<text x="{fmt(cx)}" y="{fmt(text_y_sub)}" text-anchor="middle" font-family="{sub_font}" font-weight="500" font-size="{fmt(sub_size)}" fill="{VERMILION}" letter-spacing="{fmt(sub_ls)}">{text_sub}</text>') if text_sub else ""
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}"><title>SAMURAI UTARI - {text_main}</title>{bg}{mark}{ornament}{text_main_svg}{text_sub_svg}</svg>'


def save(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("wrote:", os.path.basename(path))


if __name__ == "__main__":
    save(os.path.join(OUT, "mark_only.svg"),        svg_logomark(1200, show_bg=False))
    save(os.path.join(OUT, "mark_only_white.svg"),  svg_logomark(1200, show_bg=True))
    save(os.path.join(OUT, "logo_en.svg"),          svg_with_text(1200, "SAMURAI UTARI", "INCORPORATED", is_japanese=False, show_bg=False))
    save(os.path.join(OUT, "logo_en_white.svg"),    svg_with_text(1200, "SAMURAI UTARI", "INCORPORATED", is_japanese=False, show_bg=True))
    save(os.path.join(OUT, "logo_jp.svg"),          svg_with_text(1200, "株式会社サムライウタリ", "SAMURAI UTARI Inc.", is_japanese=True, show_bg=False))
    save(os.path.join(OUT, "logo_jp_white.svg"),    svg_with_text(1200, "株式会社サムライウタリ", "SAMURAI UTARI Inc.", is_japanese=True, show_bg=True))
    print("done.")
