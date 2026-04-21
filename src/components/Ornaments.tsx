import type { CSSProperties } from 'react'

/**
 * Lace doily corner — delicate scalloped lace with floral inlay,
 * meant to sit in a corner of a section like the Pinterest reference.
 */
export function LaceCorner({
  size = 200,
  flipX = false,
  flipY = false,
  className = '',
  color = 'white',
  opacity = 0.92,
}: {
  size?: number
  flipX?: boolean
  flipY?: boolean
  className?: string
  color?: string
  opacity?: number
}) {
  const transform: CSSProperties = {
    transform: `scaleX(${flipX ? -1 : 1}) scaleY(${flipY ? -1 : 1})`,
    transformOrigin: 'center',
    filter: 'drop-shadow(0 2px 4px rgba(74,55,40,0.18))',
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      style={transform}
    >
      <g stroke={color} strokeWidth="0.9" strokeOpacity={opacity} fill="none">
        {/* Outer scalloped arc — top + left */}
        <path d="M 200 8 Q 196 18 186 18 Q 196 28 186 32 Q 196 38 184 42 Q 194 50 180 54 Q 188 62 174 64 Q 182 74 168 76 Q 174 84 160 86 Q 166 96 152 96 Q 156 106 142 106 Q 144 116 130 116 Q 130 126 116 124 Q 114 134 100 132 Q 96 142 82 138 Q 76 148 62 142 Q 54 150 42 144 Q 32 152 22 144 Q 12 152 4 142" />
        {/* Inner concentric scallop */}
        <path d="M 192 18 Q 188 26 178 26 Q 188 36 174 40 Q 184 48 170 52 Q 178 60 164 62 Q 172 72 158 74 Q 162 84 148 84 Q 152 94 138 94 Q 140 104 126 104 Q 124 114 110 112 Q 106 122 92 120 Q 86 130 72 128 Q 64 138 52 134 Q 42 142 34 134" opacity="0.6" />
        {/* Tiny dots along the scallops */}
        {[
          [188, 16], [180, 24], [172, 32], [164, 40],
          [156, 48], [148, 56], [140, 64], [132, 72],
          [124, 80], [116, 88], [108, 96], [100, 104],
          [92, 112], [84, 120], [76, 128], [68, 134],
          [56, 138], [44, 140], [32, 140], [20, 138],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill={color} fillOpacity={opacity * 0.8} />
        ))}
        {/* Floral inlay — rosettes scattered inside */}
        <g fillOpacity={opacity * 0.7} fill={color}>
          <Rosette cx={170} cy={28} r={6} />
          <Rosette cx={140} cy={48} r={5} />
          <Rosette cx={104} cy={72} r={6} />
          <Rosette cx={68} cy={104} r={5} />
          <Rosette cx={36} cy={132} r={5} />
        </g>
        {/* Connecting filaments */}
        <path d="M 170 28 Q 155 38 140 48 Q 122 60 104 72 Q 86 84 68 104 Q 52 118 36 132" strokeWidth="0.5" strokeOpacity={opacity * 0.6} />
      </g>
    </svg>
  )
}

function Rosette({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r * 0.35} />
      {[0, 60, 120, 180, 240, 300].map(deg => {
        const x = cx + r * Math.cos((deg * Math.PI) / 180)
        const y = cy + r * Math.sin((deg * Math.PI) / 180)
        return (
          <ellipse
            key={deg}
            cx={x}
            cy={y}
            rx={r * 0.28}
            ry={r * 0.55}
            transform={`rotate(${deg} ${x} ${y})`}
          />
        )
      })}
    </g>
  )
}

/**
 * Lace doily oval frame — used to frame a hero photo like the Cleo & Jasper pin.
 */
export function LaceDoily({
  width = 360,
  height = 280,
  className = '',
}: {
  width?: number
  height?: number
  className?: string
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 360 280"
      fill="none"
      className={className}
      style={{ filter: 'drop-shadow(0 4px 10px rgba(74,55,40,0.2))' }}
    >
      <defs>
        <pattern id="lace-tex" patternUnits="userSpaceOnUse" width="14" height="14">
          <circle cx="3" cy="3" r="0.7" fill="white" fillOpacity="0.7" />
          <circle cx="10" cy="9" r="0.5" fill="white" fillOpacity="0.5" />
        </pattern>
      </defs>
      {/* Outer scalloped oval */}
      <g stroke="white" strokeWidth="1.2" strokeOpacity="0.95" fill="none">
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2
          const a2 = ((i + 1) / 36) * Math.PI * 2
          const rx1 = 170, ry1 = 130
          const rx2 = 178, ry2 = 138
          const x1 = 180 + rx1 * Math.cos(a)
          const y1 = 140 + ry1 * Math.sin(a)
          const x2 = 180 + rx2 * Math.cos((a + a2) / 2)
          const y2 = 140 + ry2 * Math.sin((a + a2) / 2)
          const x3 = 180 + rx1 * Math.cos(a2)
          const y3 = 140 + ry1 * Math.sin(a2)
          return <path key={i} d={`M ${x1} ${y1} Q ${x2} ${y2} ${x3} ${y3}`} />
        })}
      </g>
      {/* Inner oval (the photo opening) */}
      <ellipse cx="180" cy="140" rx="140" ry="100" stroke="white" strokeWidth="1.5" strokeOpacity="0.9" fill="none" />
      {/* Scattered rosettes around the oval */}
      <g fill="white" fillOpacity="0.85">
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
          const a = (deg * Math.PI) / 180
          const x = 180 + 155 * Math.cos(a)
          const y = 140 + 117 * Math.sin(a)
          return (
            <g key={deg} transform={`translate(${x} ${y})`}>
              <circle r="2" />
              {[0, 60, 120, 180, 240, 300].map(d2 => {
                const ax = 4 * Math.cos((d2 * Math.PI) / 180)
                const ay = 4 * Math.sin((d2 * Math.PI) / 180)
                return <ellipse key={d2} cx={ax} cy={ay} rx="1.2" ry="2.4" transform={`rotate(${d2} ${ax} ${ay})`} />
              })}
            </g>
          )
        })}
      </g>
    </svg>
  )
}

/**
 * Slim lace divider — horizontal band between sections of the same backdrop.
 */
export function LaceDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-2 ${className}`}>
      <div className="flex-1 h-px max-w-[120px] bg-wedding-copper/25" />
      <svg width="120" height="14" viewBox="0 0 120 14" fill="none" className="opacity-80">
        <g stroke="#B87333" strokeWidth="0.7" strokeOpacity="0.55" fill="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={i} d={`M ${i * 10} 7 Q ${i * 10 + 5} 1 ${i * 10 + 10} 7 Q ${i * 10 + 5} 13 ${i * 10} 7`} />
          ))}
          <circle cx="60" cy="7" r="1.6" fill="#B87333" fillOpacity="0.5" />
        </g>
      </svg>
      <div className="flex-1 h-px max-w-[120px] bg-wedding-copper/25" />
    </div>
  )
}

/**
 * Torn paper edge — sits at the top or bottom of a section to create
 * an organic transition into the next backdrop.
 */
export function TornPaperEdge({
  position = 'bottom',
  fillColor,
  className = '',
}: {
  position?: 'top' | 'bottom'
  fillColor: string
  className?: string
}) {
  // Generate a deterministic but irregular deckle edge
  const points: string[] = []
  const steps = 60
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100
    // pseudo-random but deterministic per index
    const wave = Math.sin(i * 1.7) * 0.6 + Math.sin(i * 0.3) * 0.4
    const y = 50 + wave * 35
    points.push(`${x},${y}`)
  }
  const pathTop = position === 'bottom'
    ? `M 0,0 L 100,0 L ${points.join(' L ')} L 0,${points[points.length - 1].split(',')[1]} Z`
    : `M 0,100 L 100,100 L ${[...points].reverse().map(p => { const [x, y] = p.split(','); return `${x},${100 - parseFloat(y)}` }).join(' L ')} L 0,${100 - parseFloat(points[0].split(',')[1])} Z`

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`w-full pointer-events-none ${className}`}
      style={{ height: '40px', display: 'block' }}
    >
      <path d={pathTop} fill={fillColor} />
    </svg>
  )
}

/**
 * Color swatch — single color circle/blob with name label, used in dress-code section.
 */
export function ColorSwatch({
  color,
  name,
  hex,
}: {
  color: string
  name: string
  hex?: string
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-wedding-brown/10 shadow-warm"
        style={{ backgroundColor: color }}
      />
      <div className="text-center">
        <p className="font-sans text-[10px] tracking-[0.25em] text-wedding-brown uppercase">{name}</p>
        {hex && <p className="font-body text-[10px] text-wedding-lightbrown/60 mt-0.5">{hex}</p>}
      </div>
    </div>
  )
}
