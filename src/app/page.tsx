import { ComponentGallery, Nav } from '@/components';

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <Nav />
        <div className="section">
          <h1 className="text-[length:var(--font-size-h1)] leading-[var(--line-height-h1)]">
            Portfolio UI system
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--sb-ink)]/80">
            This page is a temporary style playground while we build the core UI components.
          </p>
        </div>
      </div>
      <ComponentGallery />
    </main>
  );
}
