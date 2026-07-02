/**
 * DEPRECATED — the custom cursor has been removed.
 *
 * The site now uses the native system cursor everywhere. This component is
 * intentionally a no-op: it renders nothing and never hides or overrides the
 * default browser cursor. It is no longer referenced in the layout and can be
 * deleted. Do NOT reintroduce `cursor: none` without a fully working cursor.
 */
export function CustomCursor() {
  return null
}
