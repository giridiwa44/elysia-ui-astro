import { BProgress } from '@bprogress/core'
import '@bprogress/core/css'

export function initBProgress() {
  const bp = new BProgress({
    color: '#ff69b4',
    height: '3px',
    duration: 300,
  })

  // Jalankan progress ketika klik link internal
  document.addEventListener('click', e => {
    const link = e.target.closest('a')
    if (!link) return
    const isInternal = link.host === window.location.host
    if (isInternal && !link.hash) bp.start()
  })

  // Integrasi dengan Astro View Transition Events
  window.addEventListener('astro:before-swap', () => bp.start())
  window.addEventListener('astro:page-load', () => bp.done())
}