import { useState } from 'react'

const mascotas = [
  { id: 'yako',   nombre: 'Yako',   raza: 'Perro', fotoPortada: null },
  { id: 'baldur', nombre: 'Baldur', raza: 'Perro', fotoPortada: null },
]

// ── Estilos como objetos JS (la forma de hacer CSS inline en React)
const s = {
  header: {
    background: '#1a1a18',
    padding: '2rem 4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(184,151,90,0.15)',
  },
  logo: {
    color: '#b8975a',
    letterSpacing: '0.35em',
    fontSize: '0.8rem',
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
    textTransform: 'uppercase',
  },
  headerRight: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: '0.65rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
  },
  main: {
    display: 'flex',
    height: 'calc(100vh - 65px - 60px)',
  },
  card: {
    position: 'relative',
    flex: 1,
    overflow: 'hidden',
    cursor: 'pointer',
    borderRight: '1px solid rgba(184,151,90,0.1)',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #2a2820 0%, #1a1a14 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    opacity: 0.15,
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.75) saturate(0.85)',
    transition: 'transform 0.8s ease, filter 0.5s ease',
  },
  cardInfo: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    padding: '2.5rem 2.5rem 2rem',
    background: 'linear-gradient(to top, rgba(26,26,24,0.9) 0%, transparent 100%)',
  },
  petName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '3.5rem',
    fontWeight: 300,
    fontStyle: 'italic',
    color: '#fff',
    lineHeight: 1,
    letterSpacing: '0.02em',
  },
  petBreed: {
    fontSize: '0.62rem',
    fontWeight: 300,
    letterSpacing: '0.3em',
    color: '#d4b87a',
    textTransform: 'uppercase',
    marginTop: '0.5rem',
  },
  petBtn: {
    display: 'inline-block',
    marginTop: '1rem',
    fontSize: '0.62rem',
    letterSpacing: '0.25em',
    color: 'rgba(255,255,255,0.5)',
    textTransform: 'uppercase',
  },
  footer: {
    background: '#1a1a18',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid rgba(184,151,90,0.1)',
  },
  tagline: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontSize: '1.05rem',
    fontWeight: 300,
    color: 'rgba(255,255,255,0.2)',
    letterSpacing: '0.06em',
  },
  // Album
  albumWrap: {
    minHeight: '100vh',
    background: '#faf8f4',
  },
  albumHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(250,248,244,0.93)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(184,151,90,0.2)',
    padding: '1.2rem 4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.62rem',
    letterSpacing: '0.25em',
    color: '#8a8680',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  albumName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.6rem',
    fontWeight: 300,
    fontStyle: 'italic',
    color: '#1a1a18',
  },
  heroPlaceholder: {
    height: '60vh',
    background: 'linear-gradient(135deg, #e8e3d8 0%, #d8d0c0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '6rem',
    opacity: 0.15,
  },
  heroImg: {
    width: '100%',
    height: '60vh',
    objectFit: 'cover',
    filter: 'brightness(0.85) saturate(0.9)',
    display: 'block',
  },
  gridSection: {
    padding: '3rem 4rem',
  },
  sectionLabel: {
    fontSize: '0.62rem',
    letterSpacing: '0.35em',
    color: '#b8975a',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2px',
  },
  gridItem: {
    position: 'relative',
    aspectRatio: '1',
    overflow: 'hidden',
    cursor: 'pointer',
    background: '#e8e3d8',
  },
  gridImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
  },
  uploadZone: {
    margin: '0 4rem 4rem',
    border: '1px dashed rgba(184,151,90,0.3)',
    padding: '2.5rem',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.3s',
  },
  uploadText: {
    fontSize: '0.65rem',
    letterSpacing: '0.25em',
    color: '#8a8680',
    textTransform: 'uppercase',
  },
  // Lightbox
  lightbox: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(26,26,24,0.96)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    flexDirection: 'column',
    gap: '1.5rem',
  },
  lightboxImg: {
    maxWidth: '85vw',
    maxHeight: '80vh',
    objectFit: 'contain',
  },
  lightboxCaption: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontSize: '1.3rem',
    color: 'rgba(255,255,255,0.7)',
  },
  lightboxClose: {
    position: 'absolute',
    top: '2rem', right: '2.5rem',
    background: 'none', border: 'none',
    cursor: 'pointer',
    fontSize: '0.65rem',
    letterSpacing: '0.25em',
    color: 'rgba(255,255,255,0.35)',
    textTransform: 'uppercase',
  },
}

// ── Componente: tarjeta de la portada
function TarjetaMascota({ mascota, alHacerClic }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      style={s.card}
      onClick={() => alHacerClic(mascota.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {mascota.fotoPortada ? (
        <img
          src={mascota.fotoPortada}
          alt={mascota.nombre}
          style={{ ...s.cardImg,
            transform: hover ? 'scale(1.04)' : 'scale(1)',
            filter: hover ? 'brightness(0.9) saturate(1)' : 'brightness(0.7) saturate(0.85)',
          }}
        />
      ) : (
        <div style={s.placeholder}>🐾</div>
      )}
      <div style={s.cardInfo}>
        <div style={s.petName}>{mascota.nombre}</div>
        <div style={s.petBreed}>{mascota.raza}</div>
        <div style={{ ...s.petBtn,
          opacity: hover ? 1 : 0,
          transform: hover ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.3s, transform 0.3s',
        }}>
          Ver álbum →
        </div>
      </div>
    </div>
  )
}

// ── Componente: álbum individual de una mascota
function Album({ mascota, alVolver }) {
  const [fotos, setFotos] = useState([])
  const [lightbox, setLightbox] = useState(null) // foto activa en lightbox

  function agregarFotos(e) {
    const archivos = Array.from(e.target.files)
    archivos.forEach(archivo => {
      const reader = new FileReader()
      reader.onload = ev => {
        const caption = prompt('Descripción para esta foto (opcional):') || ''
        setFotos(prev => [...prev, { src: ev.target.result, caption }])
      }
      reader.readAsDataURL(archivo)
    })
    e.target.value = ''
  }

  const heroFoto = fotos[0] || null

  return (
    <div style={s.albumWrap}>
      {/* Header */}
      <header style={s.albumHeader}>
        <button style={s.backBtn} onClick={alVolver}>← Volver</button>
        <div style={{ textAlign: 'center' }}>
          <div style={s.albumName}>{mascota.nombre}</div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em',
            color: '#8a8680', textTransform: 'uppercase', marginTop: '0.15rem' }}>
            {fotos.length === 0 ? 'sin fotos aún'
              : fotos.length === 1 ? '1 foto'
              : `${fotos.length} fotos`}
          </div>
        </div>
        <div style={{ width: '80px' }} />
      </header>

      {/* Hero */}
      {heroFoto
        ? <img src={heroFoto.src} alt="" style={s.heroImg} />
        : <div style={s.heroPlaceholder}>🐾</div>
      }

      {/* Grid de fotos */}
      {fotos.length > 0 && (
        <div style={s.gridSection}>
          <div style={s.sectionLabel}>Momentos</div>
          <div style={s.grid}>
            {fotos.map((foto, i) => (
              <div key={i} style={s.gridItem} onClick={() => setLightbox(foto)}>
                <img src={foto.src} alt={foto.caption} style={s.gridImg} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Zona de subida */}
      <div style={s.uploadZone} onClick={() => document.getElementById(`upload-${mascota.id}`).click()}>
        <input
          id={`upload-${mascota.id}`}
          type="file" multiple accept="image/*"
          style={{ display: 'none' }}
          onChange={agregarFotos}
        />
        <div style={{ fontSize: '1.5rem', opacity: 0.3, marginBottom: '0.8rem' }}>＋</div>
        <div style={s.uploadText}>Agregar fotos</div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div style={s.lightbox} onClick={() => setLightbox(null)}>
          <button style={s.lightboxClose}>Cerrar</button>
          <img src={lightbox.src} alt={lightbox.caption} style={s.lightboxImg} />
          {lightbox.caption && (
            <div style={s.lightboxCaption}>{lightbox.caption}</div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Componente principal
function App() {
  const [mascotaActiva, setMascotaActiva] = useState(null)
  const mascota = mascotas.find(m => m.id === mascotaActiva)

  if (mascotaActiva) {
    return <Album mascota={mascota} alVolver={() => setMascotaActiva(null)} />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header style={s.header}>
        <span style={s.logo}>Mis Amores</span>
        <span style={s.headerRight}>Álbum de Mascotas</span>
      </header>
      <main style={s.main}>
        {mascotas.map(m => (
          <TarjetaMascota key={m.id} mascota={m} alHacerClic={setMascotaActiva} />
        ))}
      </main>
      <footer style={s.footer}>
        <span style={s.tagline}>"Ellos son el hogar."</span>
      </footer>
    </div>
  )
}

export default App